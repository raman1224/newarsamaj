"use client"
import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Volume2, ChevronLeft, ChevronRight, Check, Badge, BookOpen, Target, Clock, Star, Award, Zap, Loader2, X, List, Menu } from "lucide-react"
import Link from 'next/link'

interface Phrase {
  english: string
  nepali: string
  newar: string
  pronunciation: string
  audioSrc?: string
}

interface Lesson {
  id: number
  title: string
  description: string
  content: Phrase[]
  difficulty: string
  duration: number
  wordsCount: number
}

interface LessonContentProps {
  lesson: Lesson
}

// Add a timeout for fetch requests
const fetchWithTimeout = (url: string, options: RequestInit = {}, timeout = 5000) => {
  return Promise.race([
    fetch(url, options),
    new Promise<Response>((_, reject) =>
      setTimeout(() => reject(new Error('Request timeout')), timeout)
    )
  ]);
};

export default function LessonContent({ lesson }: LessonContentProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [completedPhrases, setCompletedPhrases] = useState<number[]>([])
  const [showTranslation, setShowTranslation] = useState(false)
  const [lessonProgress, setLessonProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [serverStatus, setServerStatus] = useState<'checking' | 'online' | 'offline'>('checking')
  const [showAllPhrases, setShowAllPhrases] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const currentPhrase = lesson.content[currentPhraseIndex]
  const progress = ((currentPhraseIndex + 1) / lesson.content.length) * 100

  // Check server status on component mount
  useEffect(() => {
    checkServerStatus()
    
    const savedProgress = localStorage.getItem(`lesson-${lesson.id}-progress`)
    if (savedProgress) {
      setCompletedPhrases(JSON.parse(savedProgress))
      setLessonProgress((JSON.parse(savedProgress).length / lesson.content.length) * 100)
    }

    audioRef.current = new Audio()
  }, [lesson.id, lesson.content.length])

  // Check if eSpeak server is running with better error handling
  const checkServerStatus = async () => {
    try {
      // Use a timeout to prevent hanging
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);
      
      const response = await fetch('http://localhost:3001/health', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (response.ok) {
        setServerStatus('online')
        console.log('✅ eSpeak server is online');
      } else {
        setServerStatus('offline')
        console.log('❌ eSpeak server health check failed');
      }
    } catch (error) {
      console.log('❌ eSpeak server is offline or not responding');
      setServerStatus('offline')
    }
  }

  // Save progress to localStorage whenever completedPhrases changes
  useEffect(() => {
    localStorage.setItem(`lesson-${lesson.id}-progress`, JSON.stringify(completedPhrases))
    setLessonProgress((completedPhrases.length / lesson.content.length) * 100)
  }, [completedPhrases, lesson.id, lesson.content.length])

  // Updated playPronunciation function with better error handling
  const playPronunciation = async (text: string, language: string = 'new') => {
    // Stop any ongoing speech or audio
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
    
    if ("speechSynthesis" in window) {
      speechSynthesis.cancel()
    }
    
    setIsLoading(true)
    
    try {
      // For Newar language, try to use our eSpeak API if server is online
      if (language === 'new' && serverStatus === 'online') {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);
        
        try {
          const response = await fetch('http://localhost:3001/synthesize', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              text: text,
              language: 'ne',
              speed: 100,
              pitch: 50
            }),
            signal: controller.signal
          })
          
          clearTimeout(timeoutId);
          
          if (!response.ok) {
            throw new Error(`Server returned ${response.status}`)
          }
          
          const data = await response.json()
          
          if (data.success && audioRef.current) {
            audioRef.current.src = data.audioUrl
            
            // Add event listeners for audio errors
            audioRef.current.onerror = () => {
              console.error('Audio playback error');
              fallbackSpeechSynthesis(text, language);
            };
            
            await audioRef.current.play()
          } else {
            throw new Error('No audio data received')
          }
        } catch (fetchError) {
          clearTimeout(timeoutId);
          console.error("eSpeak API request failed:", fetchError);
          // Fallback to browser speech synthesis
          fallbackSpeechSynthesis(text, language);
        }
      } else {
        // Server is offline or not Newar language, use speech synthesis directly
        fallbackSpeechSynthesis(text, language)
      }
    } catch (error) {
      console.error("Pronunciation error:", error)
      // Final fallback to browser speech synthesis
      fallbackSpeechSynthesis(text, language)
    } finally {
      setIsLoading(false)
    }
  }

  // Fallback to speech synthesis
  const fallbackSpeechSynthesis = (text: string, language: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      
      // Set appropriate language code
      switch (language) {
        case 'new':
          utterance.lang = 'ne-NP' // Nepali as closest to Newar
          break
        case 'ne':
          utterance.lang = 'ne-NP' // Nepali
          break
        default:
          utterance.lang = 'en-US' // English
      }
      
      utterance.rate = 0.8
      utterance.pitch = 1.0
      utterance.volume = 1.0
      
      // Get available voices and try to find a suitable one
      const voices = speechSynthesis.getVoices()
      const nepaliVoice = voices.find(voice => 
        voice.lang === 'ne-NP' || voice.lang.startsWith('ne-')
      )
      
      if (nepaliVoice) {
        utterance.voice = nepaliVoice
      }
      
      speechSynthesis.speak(utterance)
    } else {
      console.error("Speech synthesis not supported")
      alert("Your browser doesn't support speech synthesis. Please try Chrome or Edge.")
    }
  }

  const nextPhrase = () => {
    if (currentPhraseIndex < lesson.content.length - 1) {
      setCurrentPhraseIndex(prev => prev + 1)
      setShowTranslation(false)
    }
  }

  const prevPhrase = () => {
    if (currentPhraseIndex > 0) {
      setCurrentPhraseIndex(prev => prev - 1)
      setShowTranslation(false)
    }
  }

  const markAsLearned = () => {
    if (!completedPhrases.includes(currentPhraseIndex)) {
      setCompletedPhrases(prev => [...prev, currentPhraseIndex])
      
      if (currentPhraseIndex === lesson.content.length - 1) {
        markLessonAsCompleted()
      }
    }
    nextPhrase()
  }

  const markLessonAsCompleted = () => {
    const completedLessons = JSON.parse(localStorage.getItem('completed-lessons') || '[]')
    if (!completedLessons.includes(lesson.id)) {
      localStorage.setItem('completed-lessons', JSON.stringify([...completedLessons, lesson.id]))
    }
    
    const userStats = JSON.parse(localStorage.getItem('user-stats') || '{}')
    const newWordsLearned = lesson.content.length - completedPhrases.length
    const updatedStats = {
      wordsLearned: (userStats.wordsLearned || 0) + newWordsLearned,
      lessonsCompleted: (userStats.lessonsCompleted || 0) + 1,
    }
    localStorage.setItem('user-stats', JSON.stringify(updatedStats))
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "intermediate": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "advanced": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <div className="container mx-auto px-4 py-4 md:py-8">
      {/* Server Status Indicator */}
      {serverStatus !== 'online' && (
        <div className="mb-4 p-3 bg-yellow-100 border border-yellow-400 rounded-md text-sm">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-yellow-700">
              {serverStatus === 'checking' 
                ? 'Checking eSpeak server...' 
                : 'eSpeak server is offline. Using browser speech synthesis.'}
            </span>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs"
              onClick={checkServerStatus}
              disabled={serverStatus === 'checking'}
            >
              {serverStatus === 'checking' ? 'Checking...' : 'Retry'}
            </Button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Link href="/language/learn">
            <Button variant="outline" size="sm" className="h-9 px-3">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only md:not-sr-only md:ml-2">Back</span>
            </Button>
          </Link>
          <div className="flex-1 min-w-0">
            <h1 className="text-xl md:text-3xl font-bold truncate">{lesson.title}</h1>
            <p className="text-muted-foreground text-sm truncate">{lesson.description}</p>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Progress Bars */}
        <div className="space-y-3 mb-4">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>Phrase Progress</span>
              <span>{currentPhraseIndex + 1} of {lesson.content.length}</span>
            </div>
            <Progress value={progress} className="h-1.5 md:h-2" />
          </div>
          
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>Lesson Progress</span>
              <span>{Math.round(lessonProgress)}% Complete</span>
            </div>
            <Progress value={lessonProgress} className="h-1.5 md:h-2" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <Card className="mb-4 md:hidden">
          <CardContent className="p-3">
            <div className="grid grid-cols-2 gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="h-9 text-xs"
                onClick={prevPhrase}
                disabled={currentPhraseIndex === 0}
              >
                <ChevronLeft className="h-3 w-3 mr-1" />
                Previous
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                className="h-9 text-xs"
                onClick={nextPhrase}
                disabled={currentPhraseIndex === lesson.content.length - 1}
              >
                Next
                <ChevronRight className="h-3 w-3 ml-1" />
              </Button>
              
              {showTranslation && (
                <Button 
                  onClick={markAsLearned}
                  size="sm"
                  className="h-9 text-xs col-span-2"
                  variant={completedPhrases.includes(currentPhraseIndex) ? "secondary" : "default"}
                >
                  {completedPhrases.includes(currentPhraseIndex) ? (
                    <>
                      <Check className="h-3 w-3 mr-1" />
                      Learned
                    </>
                  ) : (
                    <>
                      <Star className="h-3 w-3 mr-1" />
                      I've Learned This
                    </>
                  )}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Learning Content */}
      {!showAllPhrases ? (
        <div className="max-w-2xl mx-auto">
          <Card className="glass border-0 mb-4 md:mb-6">
            <CardContent className="p-4 md:p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-3 md:mb-4 flex-wrap">
                <Badge className={getDifficultyColor(lesson.difficulty)}>
                  {lesson.difficulty}
                </Badge>
                <Badge>
                  {lesson.wordsCount} words
                </Badge>
                <Badge>
                  {lesson.duration} min
                </Badge>
              </div>
              
              <div className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 font-devanagari break-words">
                {currentPhrase.newar}
              </div>
              
              <Button
                variant="outline"
                onClick={() => playPronunciation(currentPhrase.newar, 'new')}
                className="mb-3 md:mb-4 w-full md:w-auto"
                disabled={isLoading}
                size="sm"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Volume2 className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                    Listen
                  </>
                )}
              </Button>
              
              <p className="text-muted-foreground text-sm mb-4 md:mb-6 break-words">/{currentPhrase.pronunciation}/</p>

              {!showTranslation ? (
                <Button onClick={() => setShowTranslation(true)} size="sm" className="w-full md:w-auto">
                  Show Translation
                </Button>
              ) : (
                <div className="space-y-3 md:space-y-4">
                  <div className="p-3 md:p-4 bg-primary/5 rounded-lg">
                    <p className="text-xs md:text-sm text-muted-foreground mb-1 md:mb-2">English</p>
                    <p className="text-lg md:text-xl font-semibold break-words">{currentPhrase.english}</p>
                  </div>
                  
                  <div className="p-3 md:p-4 bg-accent/5 rounded-lg">
                    <p className="text-xs md:text-sm text-muted-foreground mb-1 md:mb-2">Nepali</p>
                    <p className="text-lg md:text-xl font-semibold font-devanagari break-words">{currentPhrase.nepali}</p>
                  </div>
                  
                  {completedPhrases.includes(currentPhraseIndex) && (
                    <div className="flex items-center justify-center gap-1 md:gap-2 text-green-600 text-sm">
                      <Check className="h-4 w-4 md:h-5 md:w-5" />
                      <span>Marked as learned</span>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation - Hidden on mobile when menu is available */}
          <div className="hidden md:flex justify-between gap-4 mb-6">
            <Button
              variant="outline"
              onClick={prevPhrase}
              disabled={currentPhraseIndex === 0}
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            
            {showTranslation && (
              <Button 
                onClick={markAsLearned}
                variant={completedPhrases.includes(currentPhraseIndex) ? "secondary" : "default"}
              >
                {completedPhrases.includes(currentPhraseIndex) ? (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    Learned
                  </>
                ) : (
                  <>
                    <Star className="h-4 w-4 mr-2" />
                    I've Learned This
                  </>
                )}
              </Button>
            )}
            
            <Button
              variant="outline"
              onClick={nextPhrase}
              disabled={currentPhraseIndex === lesson.content.length - 1}
            >
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          {/* Progress Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mt-6">
            <Card 
              className="text-center cursor-pointer hover:bg-accent/5 transition-colors"
              onClick={() => setShowAllPhrases(true)}
            >
              <CardContent className="p-3 md:p-4">
                <BookOpen className="h-5 w-5 md:h-6 md:w-6 mx-auto mb-1 md:mb-2 text-primary" />
                <div className="text-lg md:text-2xl font-bold">{lesson.content.length}</div>
                <p className="text-xs md:text-sm text-muted-foreground">Total Phrases</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-3 md:p-4">
                <Target className="h-5 w-5 md:h-6 md:w-6 mx-auto mb-1 md:mb-2 text-accent" />
                <div className="text-lg md:text-2xl font-bold">{completedPhrases.length}</div>
                <p className="text-xs md:text-sm text-muted-foreground">Learned</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-3 md:p-4">
                <Clock className="h-5 w-5 md:h-6 md:w-6 mx-auto mb-1 md:mb-2 text-secondary" />
                <div className="text-lg md:text-2xl font-bold">{lesson.duration}</div>
                <p className="text-xs md:text-sm text-muted-foreground">Minutes</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-3 md:p-4">
                <Zap className="h-5 w-5 md:h-6 md:w-6 mx-auto mb-1 md:mb-2 text-yellow-500" />
                <div className="text-lg md:text-2xl font-bold">{completedPhrases.length * 5}</div>
                <p className="text-xs md:text-sm text-muted-foreground">XP Earned</p>
              </CardContent>
            </Card>
          </div>

          {/* Completion Message */}
          {lessonProgress === 100 && (
            <Card className="mt-6 border-green-200 bg-green-50 dark:bg-green-900/20">
              <CardContent className="p-4 md:p-6 text-center">
                <Award className="h-8 w-8 md:h-12 md:w-12 mx-auto mb-3 md:mb-4 text-green-600" />
                <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Lesson Complete!</h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  Congratulations! You've completed all phrases.
                </p>
                <Button className="mt-3 md:mt-4" size="sm" onClick={markLessonAsCompleted}>
                  <Zap className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                  Earn {lesson.content.length * 5} XP
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      ) : (
        /* All Phrases Table View */
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-4 md:mb-6">
            <h2 className="text-xl md:text-2xl font-bold">All Phrases</h2>
            <Button onClick={() => setShowAllPhrases(false)} variant="outline" size="sm">
              <X className="h-4 w-4 mr-1 md:mr-2" />
              <span className="hidden md:inline">Close Table</span>
            </Button>
          </div>
          
          <Card>
            <CardContent className="p-3 md:p-6">
              <div className="overflow-x-auto">
                {/* Desktop Table */}
                <table className="w-full border-collapse hidden md:table">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 bg-muted/50 text-sm">#</th>
                      <th className="text-left p-3 bg-muted/50 text-sm">English</th>
                      <th className="text-left p-3 bg-muted/50 text-sm">Nepali</th>
                      <th className="text-left p-3 bg-muted/50 text-sm">Newar</th>
                      <th className="text-left p-3 bg-muted/50 text-sm">Pronunciation</th>
                      <th className="text-left p-3 bg-muted/50 text-sm">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lesson.content.map((phrase, index) => (
                      <tr 
                        key={index} 
                        className={`border-b hover:bg-accent/10 cursor-pointer ${completedPhrases.includes(index) ? 'bg-green-50 dark:bg-green-900/20' : ''}`}
                        onClick={() => {
                          setCurrentPhraseIndex(index)
                          setShowAllPhrases(false)
                          setShowTranslation(true)
                        }}
                      >
                        <td className="p-3 text-sm">{index + 1}</td>
                        <td className="p-3 text-sm">{phrase.english}</td>
                        <td className="p-3 text-sm font-devanagari">{phrase.nepali}</td>
                        <td className="p-3 text-sm font-devanagari">{phrase.newar}</td>
                        <td className="p-3 text-sm">/{phrase.pronunciation}/</td>
                        <td className="p-3 text-sm">
                          {completedPhrases.includes(index) ? (
                            <span className="flex items-center text-green-600">
                              <Check className="h-3 w-3 mr-1" />
                              Learned
                            </span>
                          ) : (
                            <span className="text-muted-foreground">Not learned</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-3">
                  {lesson.content.map((phrase, index) => (
                    <Card 
                      key={index}
                      className={`cursor-pointer ${completedPhrases.includes(index) ? 'border-green-200 bg-green-50 dark:bg-green-900/20' : ''}`}
                      onClick={() => {
                        setCurrentPhraseIndex(index)
                        setShowAllPhrases(false)
                        setShowTranslation(true)
                      }}
                    >
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-sm font-medium text-muted-foreground">#{index + 1}</span>
                          {completedPhrases.includes(index) && (
                            <span className="flex items-center text-green-600 text-sm">
                              <Check className="h-3 w-3 mr-1" />
                              Learned
                            </span>
                          )}
                        </div>
                        
                        <div className="mb-2">
                          <p className="text-xs text-muted-foreground">English</p>
                          <p className="text-sm font-medium">{phrase.english}</p>
                        </div>
                        
                        <div className="mb-2">
                          <p className="text-xs text-muted-foreground">Nepali</p>
                          <p className="text-sm font-medium font-devanagari">{phrase.nepali}</p>
                        </div>
                        
                        <div className="mb-2">
                          <p className="text-xs text-muted-foreground">Newar</p>
                          <p className="text-sm font-medium font-devanagari">{phrase.newar}</p>
                        </div>
                        
                        <div>
                          <p className="text-xs text-muted-foreground">Pronunciation</p>
                          <p className="text-sm">/{phrase.pronunciation}/</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}