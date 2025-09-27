// app/language/chat/page.tsx
"use client"
import PageLayout from '@/components/layout/page-layout'
import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Send, Users, MessageCircle, User, Bot, Languages, Clock, Brain } from "lucide-react"
import Link from 'next/link'

interface ChatMessage {
  id: string
  content: string
  sender: 'user' | 'partner'
  timestamp: Date
  language: 'newar' | 'english'
  translatedContent?: string
}

interface OnlineUser {
  id: string
  name: string
  learning: string
  teaching: string
  level: 'beginner' | 'intermediate' | 'advanced'
}

export default function ChatPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content: "Hello! Welcome to the Newar language exchange chatroom!",
      sender: 'partner',
      timestamp: new Date(),
      language: 'english'
    }
  ])
  const [input, setInput] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState<'newar' | 'english'>('english')
  const [onlineUsers, setOnlineUsers] = useState<OnlineUser[]>([
    {
      id: '1',
      name: 'Sarah',
      learning: 'newar',
      teaching: 'english',
      level: 'beginner'
    },
    {
      id: '2',
      name: 'Raj',
      learning: 'english',
      teaching: 'newar',
      level: 'advanced'
    },
    {
      id: '3',
      name: 'Mina',
      learning: 'newar',
      teaching: 'french',
      level: 'intermediate'
    }
  ])
  const [isConnected, setIsConnected] = useState(true)
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

  // In the chat page, update the handleSendMessage function:

const handleSendMessage = (e: React.FormEvent) => {
  e.preventDefault()
  if (!input.trim()) return

  const newMessage: ChatMessage = {
    id: Date.now().toString(),
    content: input,
    sender: 'user',
    timestamp: new Date(),
    language: selectedLanguage
  }

  setMessages(prev => [...prev, newMessage])
  setInput('')

  // Smart partner responses based on user input
  setTimeout(() => {
    const userInput = input.toLowerCase();
    let response = "";

    if (userInput.includes('hello') || userInput.includes('hi') || userInput.includes('नमस्ते')) {
      response = selectedLanguage === 'newar' 
        ? "नमस्ते! त्वं पा कसरी छौ? म नेवार सिक्न मद्दत गर्न सक्छु।" 
        : "Hello! How are you? I can help you practice Newar language.";
    } else if (userInput.includes('thank') || userInput.includes('धन्यवाद')) {
      response = selectedLanguage === 'newar'
        ? "धुं लासा! त्वं पा नेवार राम्रो सिकिरहेका छौ।"
        : "You're welcome! Your Newar is improving nicely.";
    } else if (userInput.includes('learn') || userInput.includes('सिक्न')) {
      response = selectedLanguage === 'newar'
        ? "राम्रो लाग्यो! के तपाइँ कुन विशेष विषयमा सिक्न चाहनुहुन्छ?"
        : "That's great! What specific topic would you like to learn about?";
    } else {
      // Default contextual responses
      const defaultResponses = {
        newar: [
          "त्यो राम्रो प्रश्न हो! के तपाइँ थप जानकारी चाहनुहुन्छ?",
          "मेरो लागि पनि यो रोचक छ। तपाइँको विचार के हो?",
          "धेरै राम्रो! के तपाइँ अर्को प्रश्न सोध्न चाहनुहुन्छ?"
        ],
        english: [
          "That's a good question! Would you like more information about this?",
          "I find this interesting too. What are your thoughts?",
          "Very good! Would you like to ask another question?"
        ]
      };
      response = defaultResponses[selectedLanguage][Math.floor(Math.random() * defaultResponses[selectedLanguage].length)];
    }

    const partnerMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      content: response,
      sender: 'partner',
      timestamp: new Date(),
      language: selectedLanguage
    }

    setMessages(prev => [...prev, partnerMessage])
  }, 1500)
}
  const joinRoom = (userId: string) => {
    // Simulate joining a chat room
    const user = onlineUsers.find(u => u.id === userId)
    if (user) {
      setMessages([{
        id: '1',
        content: `You're now chatting with ${user.name} who is learning ${user.learning} and teaching ${user.teaching}`,
        sender: 'partner',
        timestamp: new Date(),
        language: 'english'
      }])
    }
  }

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
              <MessageCircle className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-3xl font-bold">Language Exchange Chatroom</h1>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant={isConnected ? "default" : "secondary"}>
                    {isConnected ? "Online" : "Offline"}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {onlineUsers.length} users online
                  </span>
                </div>
              </div>
            </div>
            <Link href="/language/ai-tutor">
              <Button variant="outline" size="sm" className="ml-auto">
                <Brain className="h-4 w-4 mr-2" />
                AI Tutor
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Online Users Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Online Users
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {onlineUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-3 rounded-lg border">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-xs text-muted-foreground">
                            Learning: {user.learning}
                          </p>
                        </div>
                      </div>
                      <Button size="sm" onClick={() => joinRoom(user.id)}>
                        Chat
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Language Selector */}
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Languages className="h-5 w-5" />
                  Language
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button
                    variant={selectedLanguage === 'english' ? 'default' : 'outline'}
                    className="w-full justify-start"
                    onClick={() => setSelectedLanguage('english')}
                  >
                    English
                  </Button>
                  <Button
                    variant={selectedLanguage === 'newar' ? 'default' : 'outline'}
                    className="w-full justify-start"
                    onClick={() => setSelectedLanguage('newar')}
                  >
                    नेपाल भाषा (Newar)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Container */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Chat with Language Partners
                  </CardTitle>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    Real-time
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-1 overflow-y-auto p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md rounded-lg p-3 ${
                          message.sender === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          {message.sender === 'partner' && (
                            <User className="h-4 w-4 mt-1 flex-shrink-0" />
                          )}
                          <div>
                            <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                            {message.translatedContent && (
                              <p className="text-xs italic mt-1 opacity-80">
                                {message.translatedContent}
                              </p>
                            )}
                          </div>
                          {message.sender === 'user' && (
                            <User className="h-4 w-4 mt-1 flex-shrink-0" />
                          )}
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs opacity-70">
                            {message.timestamp.toLocaleTimeString()}
                          </span>
                          <Badge variant="secondary" className="text-xs">
                            {message.language === 'newar' ? 'नेवार' : 'English'}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>
              <div className="border-t p-4">
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={
                      selectedLanguage === 'newar' 
                        ? "नेवार भाषामा सन्देश लेख्नुहोस्..." 
                        : "Type your message in English..."
                    }
                    className="flex-1"
                  />
                  <Button type="submit" disabled={!input.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-muted-foreground">
                    Currently typing in: {selectedLanguage === 'newar' ? 'नेपाल भाषा' : 'English'}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedLanguage(selectedLanguage === 'newar' ? 'english' : 'newar')}
                  >
                    Switch to {selectedLanguage === 'newar' ? 'English' : 'नेवार'}
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}