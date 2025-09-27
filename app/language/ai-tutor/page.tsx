// app/language/ai-tutor/page.tsx
"use client"
import PageLayout from '@/components/layout/page-layout'
import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Send, Brain, User, Bot, Loader2, MessageCircle } from "lucide-react"
import Link from 'next/link'

interface Message {
  id: string
  content: string
  role: 'user' | 'assistant'
  timestamp: Date
}

// Fallback responses for when API is not available
const FALLBACK_RESPONSES = {
  "greeting": "Hello! I'm your Newar language AI tutor. How can I help you learn today?",
  "thank_you": "In Newar, 'Thank you' is said as 'धुं लासा' (Dhuṁ lāsā).",
  "greetings": "Formal greeting: 'ज्वजलपा' (Jwajalapā), Informal: 'लासा' (Lāsā)",
  "numbers": "Numbers 1-10: १-चा, २-नी, ३-सो, ४-पी, ५-ङा, ६-खु, ७-न्हे, ८-च्ये, ९-गु, १०-सी",
  "default": "I'd be happy to help you learn Newar! Could you please rephrase your question or ask about specific phrases, grammar, or cultural aspects?"
}

export default function AITutorPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: FALLBACK_RESPONSES.greeting,
      role: 'assistant',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Smart fallback response generator
  const getFallbackResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('thank') || input.includes('धन्यवाद')) {
      return FALLBACK_RESPONSES.thank_you;
    } else if (input.includes('hello') || input.includes('hi') || input.includes('नमस्ते')) {
      return "नमस्ते! त्वं पा कसरी छौ? (Hello! How are you?)";
    } else if (input.includes('greet') || input.includes('अभिवादन')) {
      return FALLBACK_RESPONSES.greetings;
    } else if (input.includes('number') || input.includes('count') || input.includes('संख्या')) {
      return FALLBACK_RESPONSES.numbers;
    } else if (input.includes('how are you') || input.includes('कसरी छौ')) {
      return "म ठीक छु, धन्यवाद! त्वं पा कसरी छौ? (I'm fine, thank you! How are you?)";
    } else if (input.includes('what is') || input.includes('के हो')) {
      return "I can explain various Newar language concepts. Could you be more specific about what you'd like to know?";
    } else if (input.includes('sentence') || input.includes('वाक्य')) {
      return "Newar sentence structure typically follows Subject-Object-Verb order. Example: 'म घर जान्छु' (I home go).";
    } else if (input.includes('culture') || input.includes('संस्कृति')) {
      return "Newar culture is rich with festivals like Yomari Punhi, Indra Jatra, and Bhoto Jatra. Each has unique traditions and foods!";
    }
    
    return FALLBACK_RESPONSES.default;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      // Try using our API route first (more secure)
      const response = await fetch('/api/ai-tutor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input,
          conversation: messages.slice(-6)
        }),
      })

      if (response.ok) {
        const data = await response.json()
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: data.response || getFallbackResponse(input),
          role: 'assistant',
          timestamp: new Date()
        }
        setMessages(prev => [...prev, assistantMessage])
      } else {
        // If API route fails, use fallback
        throw new Error('API route failed')
      }
    } catch (error) {
      console.log('Using fallback response:', error)
      // Use smart fallback response
      const fallbackResponse = getFallbackResponse(input)
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: fallbackResponse,
        role: 'assistant',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const suggestedQuestions = [
    "How do I say 'Thank you' in Newar?",
    "What's the difference between formal and informal greetings?",
    "Can you explain Newar sentence structure?",
    "How do I count from 1 to 10 in Newar?",
    "Tell me about Newar cultural festivals",
    "What are some common Newar phrases for beginners?",
    "How do I introduce myself in Newar?",
    "What are basic Newar grammar rules?"
  ]

  return (
    <PageLayout isDarkMode={isDarkMode} onThemeToggle={handleThemeToggle}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/language/learn">
              <Button variant="outline" size="sm">
                Back to Dashboard
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <Brain className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold">AI Language Tutor</h1>
            </div>
            <Link href="/language/chat">
              <Button variant="outline" size="sm" className="ml-auto">
                <MessageCircle className="h-4 w-4 mr-2" />
                Go to Chatroom
              </Button>
            </Link>
          </div>
          <p className="text-muted-foreground">
            Get personalized help with Newar language learning from our AI tutor
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Chat Container */}
          <div className="md:col-span-3">
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="border-b">
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  AI Tutor Chat
                  <span className="text-sm font-normal text-muted-foreground ml-2">
                    (Smart Fallback Mode)
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 overflow-y-auto p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-2xl rounded-lg p-3 ${
                          message.role === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          {message.role === 'assistant' && (
                            <Bot className="h-4 w-4 mt-1 flex-shrink-0" />
                          )}
                          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                          {message.role === 'user' && (
                            <User className="h-4 w-4 mt-1 flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-muted rounded-lg p-3 max-w-xs">
                        <div className="flex items-center gap-2">
                          <Bot className="h-4 w-4" />
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span className="text-sm">Thinking...</span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>
              <div className="border-t p-4">
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask something about Newar language..."
                    disabled={isLoading}
                    className="flex-1"
                  />
                  <Button type="submit" disabled={isLoading || !input.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </Card>
          </div>

          {/* Suggestions */}
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {suggestedQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start h-auto py-2 text-left"
                      onClick={() => {
                        setInput(question);
                        // Auto-submit after a short delay
                        setTimeout(() => {
                          const form = document.querySelector('form');
                          if (form) {
                            const submitEvent = new Event('submit', { cancelable: true });
                            form.dispatchEvent(submitEvent);
                          }
                        }, 100);
                      }}
                      disabled={isLoading}
                    >
                      <span className="text-sm">{question}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-lg">Learning Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Practice daily with short sessions</li>
                  <li>• Use Newar phrases in real conversations</li>
                  <li>• Listen to Newar music and podcasts</li>
                  <li>• Join our language exchange chat</li>
                  <li>• Don't be afraid to make mistakes</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}