// components/language/language-dashboard.tsx
"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, MessageCircle, GraduationCap, Brain, Trophy, Clock, Target, Play, Users, Star, Award, Zap, ChevronRight, BookText, Languages, Mic, GamepadIcon, Calendar, TargetIcon, BarChart3, Crown, Sparkles, Home, ShoppingCart, Utensils, Car, Palette, CalendarDays, Heart, Shirt, Briefcase, Trees, Map, Smile, School, Music, Castle, Wrench, Activity, Type, BookOpenText, Shield } from "lucide-react"
import { useTranslation } from '@/hooks/useTranslation'
import PageLayout from '@/components/layout/page-layout'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'
import VideoResources from "./video-resources"

interface LearningStats {
  wordsLearned: number
  totalWords: number
  streakDays: number
  lessonsCompleted: number
  totalLessons: number
  level: string
  xp: number
  nextLevelXp: number
  levelProgress: number
}

interface Lesson {
  id: number
  title: string
  description: string
  progress: number
  wordsCount: number
  completed: boolean
  category: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  duration: number
  unlockRequirements: string | null
}

interface Achievement {
  id: number
  icon: any
  title: string
  description: string
  unlocked: boolean
  xpReward: number
  unlockDate: string | null
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
}

interface LeaderboardEntry {
  rank: number
  name: string
  xp: number
  level: number
  avatar: string
}

interface Category {
  id: number
  name: string
  icon: any
  color: string
  count: number
  description: string
}

const mockStats: LearningStats = {
  wordsLearned: 127,
  totalWords: 500,
  streakDays: 12,
  lessonsCompleted: 8,
  totalLessons: 20,
  level: "Beginner",
  xp: 1250,
  nextLevelXp: 2000,
  levelProgress: 62.5
}

const categories: Category[] = [
  { id: 1, name: "Greetings", icon: MessageCircle, color: "text-blue-500", count: 100, description: "Basic greetings and common phrases" },
  { id: 2, name: "Numbers", icon: BookText, color: "text-green-500", count: 100, description: "Numbers, counting and measurements" },
  { id: 3, name: "Family", icon: Users, color: "text-purple-500", count: 100, description: "Family members and relationships" },
  { id: 4, name: "Food", icon: Utensils, color: "text-red-500", count: 101, description: "Food, drinks and cooking terms" },
  { id: 5, name: "Travel", icon: Car, color: "text-yellow-500", count: 101, description: "Transportation and travel phrases" },
  { id: 6, name: "Shopping", icon: ShoppingCart, color: "text-indigo-500", count: 108, description: "Shopping and money-related terms" },
  { id: 7, name: "Colors", icon: Palette, color: "text-pink-500", count: 108, description: "Colors and shapes" },
  { id: 8, name: "Time", icon: CalendarDays, color: "text-orange-500", count: 108, description: "Days, months and time expressions" },
  { id: 9, name: "Animals", icon: Heart, color: "text-teal-500", count: 108, description: "Animals and pets" },
  { id: 10, name: "Body", icon: Activity, color: "text-cyan-500", count: 108, description: "Body parts and health terms" },
  { id: 11, name: "Clothing", icon: Shirt, color: "text-amber-500", count: 108, description: "Clothing and accessories" },
  { id: 12, name: "Professions", icon: Briefcase, color: "text-lime-500", count: 108, description: "Professions and occupations" },
  { id: 13, name: "Nature", icon: Trees, color: "text-emerald-500", count: 108, description: "Nature and weather terms" },
  { id: 14, name: "Places", icon: Map, color: "text-violet-500", count: 101, description: "Places and directions" },
  { id: 15, name: "Emotions", icon: Smile, color: "text-rose-500", count: 108, description: "Emotions and feelings" },
  { id: 16, name: "Education", icon: School, color: "text-sky-500", count: 108, description: "School and education terms" },
  { id: 17, name: "Hobbies", icon: Music, color: "text-fuchsia-500", count: 108, description: "Hobbies, sports and activities" },
  { id: 18, name: "Culture", icon: Castle, color: "text-amber-500", count: 108, description: "Festivals, religion and culture" },
  { id: 19, name: "Home", icon: Home, color: "text-stone-500", count: 108, description: "Home and household items" },
  { id: 20, name: "Technology", icon: Wrench, color: "text-blue-500", count: 103, description: "Technology and communication" },
  { id: 21, name: "Arts", icon: Palette, color: "text-pink-500", count: 102, description: "Music, arts and crafts" },
  { id: 22, name: "Safety", icon: Shield, color: "text-red-500", count: 108, description: "Safety and emergencies" },
  { id: 23, name: "Verbs", icon: Activity, color: "text-green-500", count: 108, description: "Verbs and daily activities" },
  { id: 24, name: "Adjectives", icon: Type, color: "text-purple-500", count: 108, description: "Adjectives and descriptions" },
  { id: 25, name: "Stories", icon: BookOpenText, color: "text-indigo-500", count: 150, description: "Storytelling and idioms" },
]

const recentLessons: Lesson[] = [
  {
    id: 1,
    title: "Basic Greetings",
    description: "Learn common Newar greetings and responses for daily conversations",
    progress: 100,
    wordsCount: 15,
    completed: true,
    category: "Greetings",
    difficulty: "beginner",
    duration: 15,
    unlockRequirements: null
  },
  {
    id: 2,
    title: "Family Members",
    description: "Names for family relationships in Newar culture and addressing elders",
    progress: 75,
    wordsCount: 20,
    completed: false,
    category: "Family",
    difficulty: "beginner",
    duration: 20,
    unlockRequirements: null
  },
  {
    id: 3,
    title: "Numbers 1-100",
    description: "Counting, ordinal numbers, and practical usage in markets",
    progress: 45,
    wordsCount: 100,
    completed: false,
    category: "Numbers",
    difficulty: "intermediate",
    duration: 30,
    unlockRequirements: "Complete 2 beginner lessons"
  },
  {
    id: 4,
    title: "Newar Cuisine",
    description: "Food vocabulary, ordering at restaurants, and cooking terms",
    progress: 0,
    wordsCount: 45,
    completed: false,
    category: "Food",
    difficulty: "intermediate",
    duration: 25,
    unlockRequirements: "Complete Numbers 1-100"
  },
]

const achievements: Achievement[] = [
  { 
    id: 1, 
    icon: Trophy, 
    title: "First Steps", 
    description: "Completed your first lesson", 
    unlocked: true, 
    xpReward: 50,
    unlockDate: "2023-10-15",
    rarity: "common"
  },
  { 
    id: 2, 
    icon: Target, 
    title: "Word Master", 
    description: "Learned 100 words", 
    unlocked: true, 
    xpReward: 100,
    unlockDate: "2023-11-02",
    rarity: "rare"
  },
  { 
    id: 3, 
    icon: Clock, 
    title: "Consistent Learner", 
    description: "7-day learning streak", 
    unlocked: true, 
    xpReward: 75,
    unlockDate: "2023-11-10",
    rarity: "common"
  },
  { 
    id: 4, 
    icon: Brain, 
    title: "Quiz Champion", 
    description: "Perfect score on 5 quizzes", 
    unlocked: false, 
    xpReward: 150,
    unlockDate: null,
    rarity: "epic"
  },
  { 
    id: 5, 
    icon: Crown, 
    title: "Culture Expert", 
    description: "Completed all cultural lessons", 
    unlocked: false, 
    xpReward: 200,
    unlockDate: null,
    rarity: "legendary"
  },
  { 
    id: 6, 
    icon: Zap, 
    title: "Speed Learner", 
    description: "Completed 5 lessons in one day", 
    unlocked: false, 
    xpReward: 125,
    unlockDate: null,
    rarity: "rare"
  },
  { 
    id: 7, 
    icon: BookOpen, 
    title: "Grammar Rookie", 
    description: "Learned all the basic grammar rules", 
    unlocked: false, 
    xpReward: 100,
    unlockDate: null,
    rarity: "common"
  },
  { 
    id: 8, 
    icon: Users, 
    title: "Family Friend", 
    description: "Know all family-related words", 
    unlocked: false, 
    xpReward: 50,
    unlockDate: null,
    rarity: "common"
  },
  { 
    id: 9, 
    icon: Utensils, 
    title: "Foodie", 
    description: "Learned all food and drink words", 
    unlocked: false, 
    xpReward: 75,
    unlockDate: null,
    rarity: "common"
  },
  { 
    id: 10, 
    icon: Car, 
    title: "Traveler", 
    description: "Know 50 words for traveling", 
    unlocked: false, 
    xpReward: 100,
    unlockDate: null,
    rarity: "rare"
  },
  { 
    id: 11, 
    icon: ShoppingCart, 
    title: "Shopper", 
    description: "Finished all shopping and money lessons", 
    unlocked: false, 
    xpReward: 80,
    unlockDate: null,
    rarity: "common"
  },
  { 
    id: 12, 
    icon: Palette, 
    title: "Colorful Learner", 
    description: "Learned all colors and shapes", 
    unlocked: false, 
    xpReward: 50,
    unlockDate: null,
    rarity: "common"
  },
  { 
    id: 13, 
    icon: CalendarDays, 
    title: "Time Keeper", 
    description: "Know all days, months, and times", 
    unlocked: false, 
    xpReward: 60,
    unlockDate: null,
    rarity: "common"
  },
  { 
    id: 14, 
    icon: Heart, 
    title: "Animal Lover", 
    description: "Learned all animal and pet words", 
    unlocked: false, 
    xpReward: 70,
    unlockDate: null,
    rarity: "common"
  },
  { 
    id: 15, 
    icon: Activity, 
    title: "Healthy Hero", 
    description: "Know all body parts and health words", 
    unlocked: false, 
    xpReward: 80,
    unlockDate: null,
    rarity: "common"
  },
  { 
    id: 16, 
    icon: Shirt, 
    title: "Fashion Fan", 
    description: "Learned all clothes and accessories", 
    unlocked: false, 
    xpReward: 60,
    unlockDate: null,
    rarity: "common"
  },
  { 
    id: 17, 
    icon: Briefcase, 
    title: "Job Finder", 
    description: "Know all professions and jobs", 
    unlocked: false, 
    xpReward: 75,
    unlockDate: null,
    rarity: "common"
  },
  { 
    id: 18, 
    icon: Trees, 
    title: "Nature Explorer", 
    description: "Learned nature and weather words", 
    unlocked: false, 
    xpReward: 90,
    unlockDate: null,
    rarity: "rare"
  },
  { 
    id: 19, 
    icon: Map, 
    title: "Direction Finder", 
    description: "Know all places and directions", 
    unlocked: false, 
    xpReward: 50,
    unlockDate: null,
    rarity: "common"
  },
  { 
    id: 20, 
    icon: Smile, 
    title: "Mood Tracker", 
    description: "Learned all feelings and emotions", 
    unlocked: false, 
    xpReward: 50,
    unlockDate: null,
    rarity: "common"
  },
  { 
    id: 21, 
    icon: School, 
    title: "School Star", 
    description: "Know all school-related words", 
    unlocked: false, 
    xpReward: 60,
    unlockDate: null,
    rarity: "common"
  },
  { 
    id: 22, 
    icon: Music, 
    title: "Hobby Helper", 
    description: "Learned all hobbies, sports, and activities", 
    unlocked: false, 
    xpReward: 70,
    unlockDate: null,
    rarity: "common"
  },
  { 
    id: 23, 
    icon: Castle, 
    title: "Festival Fun", 
    description: "Finished all festival and culture lessons", 
    unlocked: false, 
    xpReward: 100,
    unlockDate: null,
    rarity: "rare"
  },
  { 
    id: 24, 
    icon: Home, 
    title: "Home Helper", 
    description: "Know all household items", 
    unlocked: false, 
    xpReward: 60,
    unlockDate: null,
    rarity: "common"
  },
  { 
    id: 25, 
    icon: Wrench, 
    title: "Tech Savvy", 
    description: "Learned tech and communication words", 
    unlocked: false, 
    xpReward: 75,
    unlockDate: null,
    rarity: "common"
  },
  { 
    id: 26, 
    icon: Palette, 
    title: "Little Artist", 
    description: "Know music, art, and craft words", 
    unlocked: false, 
    xpReward: 80,
    unlockDate: null,
    rarity: "common"
  },
  { 
    id: 27, 
    icon: Shield, 
    title: "Safety First", 
    description: "Learned safety and emergency words", 
    unlocked: false, 
    xpReward: 70,
    unlockDate: null,
    rarity: "common"
  },
  { 
    id: 28, 
    icon: Activity, 
    title: "Action Hero", 
    description: "Know all verbs and daily actions", 
    unlocked: false, 
    xpReward: 90,
    unlockDate: null,
    rarity: "rare"
  },
  { 
    id: 29, 
    icon: Type, 
    title: "Describer", 
    description: "Learned all adjectives and descriptions", 
    unlocked: false, 
    xpReward: 60,
    unlockDate: null,
    rarity: "common"
  },
  { 
    id: 30, 
    icon: BookOpenText, 
    title: "Storyteller", 
    description: "Finished storytelling, idioms, and dialogues", 
    unlocked: false, 
    xpReward: 100,
    unlockDate: null,
    rarity: "rare"
  },
]

const leaderboard: LeaderboardEntry[] = [
  { rank: 1, name: "Aarav Newa", xp: 5420, level: 15, avatar: "/avatars/1.png" },
  { rank: 2, name: "Sunita Maharjan", xp: 4875, level: 14, avatar: "/avatars/2.png" },
  { rank: 3, name: "Rajesh Shrestha", xp: 4320, level: 13, avatar: "/avatars/3.png" },
  { rank: 4, name: "Bimala Dangol", xp: 3980, level: 12, avatar: "/avatars/4.png" },
  { rank: 5, name: "You", xp: 1250, level: 5, avatar: "/avatars/5.png" },
]

export function LanguageDashboard() {
  const { t } = useTranslation()
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeTab, setActiveTab] = useState("lessons")
  const [isLoading, setIsLoading] = useState(true)
  const [userStats, setUserStats] = useState<LearningStats>(mockStats)
  const [typingText, setTypingText] = useState("")
  const [typingIndex, setTypingIndex] = useState(0)
  const [typingComplete, setTypingComplete] = useState(false)
  
  const fullText = t('dashboard.title')
  const progressPercentage = (userStats.wordsLearned / userStats.totalWords) * 100

  useEffect(() => {
    // Simulate loading user data from backend
    const loadUserData = async () => {
      setIsLoading(true)
      try {
        // In a real app, you would fetch this from your API
        // const response = await fetch('/api/user/stats')
        // const data = await response.json()
        // setUserStats(data)
        
        // Simulate API delay
        setTimeout(() => {
          setIsLoading(false)
        }, 1000)
      } catch (error) {
        console.error("Failed to load user data:", error)
        setIsLoading(false)
      }
    }
    
    loadUserData()
  }, [])

  useEffect(() => {
    // Typewriter effect for title
    if (typingIndex < fullText.length) {
      const timer = setTimeout(() => {
        setTypingText(fullText.substring(0, typingIndex + 1))
        setTypingIndex(typingIndex + 1)
      }, 100)
      
      return () => clearTimeout(timer)
    } else {
      setTypingComplete(true)
    }
  }, [typingIndex, fullText])

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common": return "border-gray-300 bg-gray-50 dark:bg-gray-900 dark:border-gray-700"
      case "rare": return "border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800"
      case "epic": return "border-purple-200 bg-purple-50 dark:bg-purple-900/20 dark:border-purple-800"
      case "legendary": return "border-yellow-200 bg-yellow-50 dark:bg-yellow-900/20 dark:border-yellow-800"
      default: return "border-gray-300 bg-gray-50 dark:bg-gray-900 dark:border-gray-700"
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "intermediate": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "advanced": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const handleStatCardClick = (statType: string) => {
    // Handle click on stat cards - in a real app, this would navigate to detailed views
    console.log(`Clicked on ${statType} card`)
    // Example: router.push(`/stats/${statType}`)
  }

  if (isLoading) {
    return (
      <PageLayout isDarkMode={isDarkMode} onThemeToggle={handleThemeToggle}>
        <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading your learning dashboard...</p>
          </div>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout isDarkMode={isDarkMode} onThemeToggle={handleThemeToggle}>
      <div className="container mx-auto px-4 py-8">
        {/* Header with Animated Text */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4 animate-pulse">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 min-h-[3rem]">
            {typingText}
            {!typingComplete && <span className="animate-pulse">|</span>}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('dashboard.subtitle')}
          </p>
        </div>

        {/* Stats Overview with 3D Effects and Click Handling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card 
            className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl glass border-0 cursor-pointer"
            onClick={() => handleStatCardClick('words')}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{t('dashboard.wordsLearned')}</p>
                  <p className="text-2xl font-bold text-primary">{userStats.wordsLearned}</p>
                </div>
                <div className="p-3 rounded-full bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
              </div>
              <Progress value={progressPercentage} className="mt-3 h-2" />
              <p className="text-xs text-muted-foreground mt-2">
                {userStats.totalWords - userStats.wordsLearned} {t('dashboard.wordsRemaining')}
              </p>
            </CardContent>
          </Card>

          <Card 
            className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl glass border-0 cursor-pointer"
            onClick={() => handleStatCardClick('streak')}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{t('dashboard.currentStreak')}</p>
                  <p className="text-2xl font-bold text-accent">{userStats.streakDays}</p>
                </div>
                <div className="p-3 rounded-full bg-accent/10">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div className="flex items-center mt-3">
                {[...Array(7)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-2 w-2 rounded-full mx-0.5 ${i < userStats.streakDays ? 'bg-accent' : 'bg-muted'}`}
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-2">{t('dashboard.daysInARow')}</p>
            </CardContent>
          </Card>

          <Card 
            className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl glass border-0 cursor-pointer"
            onClick={() => handleStatCardClick('level')}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{t('dashboard.level')}</p>
                  <p className="text-2xl font-bold text-secondary">{userStats.level}</p>
                </div>
                <div className="p-3 rounded-full bg-secondary/10">
                  <GraduationCap className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <Progress value={userStats.levelProgress} className="mt-3 h-2" />
              <p className="text-xs text-muted-foreground mt-2">
                {userStats.xp} / {userStats.nextLevelXp} {t('dashboard.xpEarned')}
              </p>
            </CardContent>
          </Card>



          <Card 
            className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl glass border-0 cursor-pointer"
            onClick={() => handleStatCardClick('lessons')}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{t('dashboard.lessons')}</p>
                  <p className="text-2xl font-bold text-primary">
                    {userStats.lessonsCompleted}/{userStats.totalLessons}
                  </p>
                </div>
                <div className="p-3 rounded-full bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
              </div>
              <Progress value={(userStats.lessonsCompleted / userStats.totalLessons) * 100} className="mt-3 h-2" />
              <p className="text-xs text-muted-foreground mt-2">
                {Math.round((userStats.lessonsCompleted / userStats.totalLessons) * 100)}% Complete
              </p>
            </CardContent>
          </Card>


{/* Video Resources Section */}

        </div>
        <div className="m-4 md:items-center md:justify-between gap-4">
  <VideoResources />
</div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="lessons" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 glass border-0 p-1">
            <TabsTrigger value="lessons" className="flex items-center gap-2 data-[state=active]:bg-background">
              <BookOpen className="h-4 w-4" />
              {t('dashboard.lessons')}
            </TabsTrigger>
            <TabsTrigger value="flashcards" className="flex items-center gap-2 data-[state=active]:bg-background">
              <BookText className="h-4 w-4" />
              Flashcards
            </TabsTrigger>
            <TabsTrigger value="chatroom" className="flex items-center gap-2 data-[state=active]:bg-background">
              <MessageCircle className="h-4 w-4" />
              Chatroom
            </TabsTrigger>
            <TabsTrigger value="achievements" className="flex items-center gap-2 data-[state=active]:bg-background">
              <Trophy className="h-4 w-4" />
              {t('dashboard.achievements.title')}
            </TabsTrigger>
          </TabsList>

          {/* Lessons Tab */}
          <TabsContent value="lessons" className="space-y-6">
            <div className="grid gap-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">{t('dashboard.continueLearning')}</h2>
                <Button variant="outline" className="flex items-center gap-2">
                  View All Lessons
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="grid gap-4">
                {recentLessons.map((lesson) => (
                  <Card 
                    key={lesson.id} 
                    className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 glass border-0"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2 flex-wrap">
                            <h3 className="text-lg font-semibold">{lesson.title}</h3>
                            <Badge className={getDifficultyColor(lesson.difficulty)}>
                              {lesson.difficulty}
                            </Badge>
                            {lesson.completed && (
                              <Badge variant="secondary" className="text-xs">
                                Completed
                              </Badge>
                            )}
                            {lesson.unlockRequirements && !lesson.completed && (
                              <Badge variant="outline" className="text-xs">
                                🔒 {lesson.unlockRequirements}
                              </Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground mb-3">{lesson.description}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{lesson.wordsCount} words</span>
                            <span>{lesson.duration} min</span>
                            <span>{lesson.category}</span>
                          </div>
                          <Progress value={lesson.progress} className="mt-3" />
                        </div>
                        <Button 
                          className="ml-6" 
                          variant={lesson.completed ? "outline" : "default"}
                          disabled={!!lesson.unlockRequirements && !lesson.completed}
                        >
                          {lesson.completed ? "Review" : lesson.progress > 0 ? "Continue" : "Start"}
                          <Play className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Categories Section */}
<div className="mt-12">
  <h2 className="text-2xl font-semibold mb-6">Learning Categories</h2>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
    {categories.map((category) => {
      const IconComponent = category.icon;
      
      const lessonId = category.id; // Or create a mapping object
      
      return (
        <Link key={category.id} href={`/language/lessons/${lessonId}`}>
          <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 glass border-0 cursor-pointer h-full">
            <CardContent className="p-4 flex flex-col h-full">
              <div className={`p-3 rounded-full ${category.color.replace('text', 'bg')}/10 inline-flex mb-3 mx-auto`}>
                <IconComponent className={`h-6 w-6 ${category.color}`} />
              </div>
              <h3 className="font-semibold mb-1">{category.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{category.count} words</p>
              <p className="text-xs text-muted-foreground mt-auto">{category.description}</p>
            </CardContent>
          </Card>
        </Link>
      );
    })}
  </div>
</div>
          </TabsContent>

          {/* Flashcards Tab */}
          <TabsContent value="flashcards" className="space-y-6">
            <div className="text-center py-8">
              <div className="max-w-2xl mx-auto">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookText className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold mb-4">{t('dashboard.flashcards.title')}</h2>
                <p className="text-muted-foreground mb-8">
                  {t('dashboard.flashcards.description')}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <Card className="glass border-0">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mic className="h-6 w-6 text-blue-600" />
                      </div>
                                            <h3 className="font-semibold mb-2">Pronunciation Practice</h3>
                      <p className="text-sm text-muted-foreground">Hear native speaker audio for each word</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="glass border-0">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <GamepadIcon className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Gamified Learning</h3>
                      <p className="text-sm text-muted-foreground">Earn points and unlock achievements</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="glass border-0">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <BarChart3 className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Progress Tracking</h3>
                      <p className="text-sm text-muted-foreground">Monitor which words you've mastered</p>
                    </CardContent>
                  </Card>
                </div>
                
                <Link href="/language/flashcards">
                  <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow neon-glow">
                    <BookText className="mr-2 h-5 w-5" />
                    Start Flashcard Session
                  </Button>
                </Link>
              </div>
            </div>
          </TabsContent>

          {/* Chatroom Tab */}
          <TabsContent value="chatroom" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 glass border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    {t('dashboard.chatroom.languageExchange')}
                  </CardTitle>
                  <CardDescription>Practice with native speakers and other learners in real-time conversations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>23 {t('dashboard.chatroom.online')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Next conversation practice: Today, 7 PM</span>
                    </div>
                    <Button className="w-full">Join Conversation</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 glass border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    {t('dashboard.chatroom.aiTutor')}
                  </CardTitle>
                  <CardDescription>Get personalized help, corrections, and cultural insights from our AI tutor</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {t('dashboard.chatroom.available')}
                    </p>
                    <div className="bg-muted rounded-lg p-3">
                      <p className="text-sm">Try asking: "How do I say 'Thank you' in Newar?"</p>
                    </div>
                    <Link href="/language/ai-tutor">
                      <Button className="w-full bg-transparent" variant="outline">
                        Chat with AI Tutor
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Translation Tool */}
            <Card className="glass border-0 mt-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Languages className="h-5 w-5" />
                  Quick Translation Tool
                </CardTitle>
                <CardDescription>Instantly translate between English, Nepali, and Newar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">English</label>
                    <textarea 
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" 
                      rows={3}
                      placeholder="Type English text here..."
                    ></textarea>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nepali</label>
                    <textarea 
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-devanagari" 
                      rows={3}
                      placeholder="Nepali translation will appear here..."
                    ></textarea>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Newar (नेवार)</label>
                    <textarea 
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-devanagari" 
                      rows={3}
                      placeholder="Newar translation will appear here..."
                    ></textarea>
                  </div>
                </div>
                <Button className="mt-4">Translate</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">{t('dashboard.achievements.title')}</h2>
                <div className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  <span className="font-semibold">{achievements.filter(a => a.unlocked).length}/{achievements.length} Unlocked</span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((achievement) => {
                  const IconComponent = achievement.icon
                  return (
                    <Card
                      key={achievement.id}
                      className={`transition-all duration-300 transform hover:scale-105 border-2 p-1 ${getRarityColor(achievement.rarity)} ${!achievement.unlocked ? "opacity-60 grayscale" : "cursor-pointer"}`}
                      onClick={() => achievement.unlocked && console.log(`View details for ${achievement.title}`)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div
                            className={`p-3 rounded-full ${
                              achievement.unlocked ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                            }`}
                          >
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold">{achievement.title}</h3>
                            <p className="text-sm text-muted-foreground">{achievement.description}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <Zap className="h-4 w-4 text-yellow-500" />
                              <span className="text-sm">{achievement.xpReward} XP</span>
                              {achievement.unlocked && achievement.unlockDate && (
                                <span className="text-xs text-muted-foreground ml-auto">
                                  Unlocked: {new Date(achievement.unlockDate).toLocaleDateString()}
                                </span>
                              )}
                            </div>
                          </div>
                          {achievement.unlocked && (
                            <Badge variant="secondary" className="ml-auto">
                              {t('dashboard.achievements.unlocked')}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
            
            {/* Leaderboard Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-6">Community Leaderboard</h2>
              <Card className="glass border-0">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {leaderboard.map((user, index) => (
                      <div key={user.rank} className={`flex items-center justify-between p-3 rounded-lg ${user.name === "You" ? "bg-primary/10" : "bg-muted/30"}`}>
                        <div className="flex items-center gap-3">
                          <div className="font-bold w-6 text-center">{user.rank}</div>
                          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                            {user.avatar ? (
                              <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                            ) : (
                              <span className="text-sm">{user.name.charAt(0)}</span>
                            )}
                          </div>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-xs text-muted-foreground">Level {user.level}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Zap className="h-4 w-4 text-yellow-500" />
                          <span className="font-semibold">{user.xp} XP</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  )
}