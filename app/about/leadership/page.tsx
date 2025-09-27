// app/about/leadership/page.tsx
"use client"

import * as React from "react"
import { useState, useEffect, useRef } from "react"
import PageLayout from '@/components/layout/page-layout'
import { useLanguage } from "@/context/LanguageContext"
import { useTranslation } from '@/hooks/useTranslation'
import { MainNav } from "@/components/navigation/main-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Leadership data structure
interface Leader {
  name: string;
  role: string;
  bio: string;
  image: string;
  contributions?: string[];
}

// Community group structure
interface CommunityGroup {
  id: string;
  name: string;
  description: string;
  members: number;
  image: string;
}

// Message structure
interface Message {
  id: string;
  sender: string;
  text: string;
  timestamp: Date;
  isAI?: boolean;
}

export default function LeadershipPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const { currentLanguage } = useLanguage()
  const { t } = useTranslation()
  const [activeLeader, setActiveLeader] = useState(0)
  const [activeTab, setActiveTab] = useState("leadership")
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [selectedGroup, setSelectedGroup] = useState("general")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  // Sample leadership data
  const leaders: Leader[] = [
    {
      name: t('leaders.rajesh.name'),
      role: t('leaders.rajesh.role'),
      bio: t('leaders.rajesh.bio'),
      image: "/mahesh.jpg",
      contributions: [
        t('leaders.rajesh.contributions.0'),
        t('leaders.rajesh.contributions.1'),
        t('leaders.rajesh.contributions.2')
      ]
    },
    {
      name: t('leaders.sunita.name'),
      role: t('leaders.sunita.role'),
      bio: t('leaders.sunita.bio'),
      image: "/gyan.jpg",
      contributions: [
        t('leaders.sunita.contributions.0'),
        t('leaders.sunita.contributions.1'),
        t('leaders.sunita.contributions.2')
      ]
    },
    {
      name: t('leaders.bikash.name'),
      role: t('leaders.bikash.role'),
      bio: t('leaders.bikash.bio'),
      image: "/ramhari.jpg",
      contributions: [
        t('leaders.bikash.contributions.0'),
        t('leaders.bikash.contributions.1'),
        t('leaders.bikash.contributions.2')
      ]
    },
    {
      name: t('leaders.anita.name'),
      role: t('leaders.anita.role'),
      bio: t('leaders.anita.bio'),
      image: "/prakash.jpg",
      contributions: [
        t('leaders.anita.contributions.0'),
        t('leaders.anita.contributions.1'),
        t('leaders.anita.contributions.2')
      ]
    }
  ]

  // Community groups data
  const communityGroups: CommunityGroup[] = [
    {
      id: "general",
      name: t('communityGroups.general.name'),
      description: t('communityGroups.general.description'),
      members: 1000,
      image: "/groups/general.jpg"
    },
    {
      id: "cultural",
      name: t('communityGroups.cultural.name'),
      description: t('communityGroups.cultural.description'),
      members: 450,
      image: "/groups/cultural.jpg"
    },
    {
      id: "language",
      name: t('communityGroups.language.name'),
      description: t('communityGroups.language.description'),
      members: 320,
      image: "/groups/language.jpg"
    },
    {
      id: "youth",
      name: t('communityGroups.youth.name'),
      description: t('communityGroups.youth.description'),
      members: 280,
      image: "/public/raman.jpg"
    }
  ]

  // Community photos for carousel
  const communityPhotos = [
    "/moment1.jpg",
    "/moment.jpg",
    "/moment3.jpg",
    "/community/photo4.jpg",
    "/community/photo5.jpg",
  ]

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  // AI response generator (simulated)
  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("adaxai") || lowerMessage.includes("president")) {
      return t('aiResponses.adaxai');
    } else if (lowerMessage.includes("sachib") || lowerMessage.includes("secretary")) {
      return t('aiResponses.sachib');
    } else if (lowerMessage.includes("sadasai") || lowerMessage.includes("committee")) {
      return t('aiResponses.sadasai');
    } else if (lowerMessage.includes("festival") || lowerMessage.includes("event")) {
      return t('aiResponses.festival');
    } else if (lowerMessage.includes("join") || lowerMessage.includes("member")) {
      return t('aiResponses.join');
    } else if (lowerMessage.includes("language") || lowerMessage.includes("newar")) {
      return t('aiResponses.language');
    } else {
      return t('aiResponses.default');
    }
  }

  // Handle sending a message
  const handleSendMessage = () => {
    if (message.trim() === "") return;
    
    // Add user message
    const newMessage: Message = {
      id: Date.now().toString(),
      sender: t('messaging.you'),
      text: message,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newMessage]);
    setMessage("");
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        sender: t('messaging.aiName'),
        text: generateAIResponse(message),
        timestamp: new Date(),
        isAI: true
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  }

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px"
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active")
        }
      })
    }, observerOptions)

    // Observe all elements with animation classes
    document.querySelectorAll(".slide-left, .slide-right, .fade-in").forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Auto-rotate leaders
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLeader((prev) => (prev + 1) % leaders.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [leaders.length])

  return (
    <div className="min-h-screen">
      {/* <MainNav
        isDarkMode={isDarkMode}
        onThemeToggle={handleThemeToggle}
      /> */}
      
      <PageLayout isDarkMode={isDarkMode} onThemeToggle={handleThemeToggle}>
        {/* 1. Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: "url('/community-hero.jpg')",
              transform: "translateZ(-10px) scale(2)" 
            }}
          />
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-neon slide-down">
              {t('leadershipPage.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 fade-in">
              {t('leadershipPage.subtitle')}
            </p>
            <div className="bg-black/50 p-6 rounded-lg backdrop-blur-sm fade-in-delay">
              <p className="text-lg">
                {t('leadershipPage.intro')}
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto my-8">
          <div className="flex space-x-4 justify-center mb-8">
            <Button 
              variant={activeTab === "leadership" ? "default" : "outline"} 
              onClick={() => setActiveTab("leadership")}
            >
              {t('tabs.leadership')}
            </Button>
            <Button 
              variant={activeTab === "community" ? "default" : "outline"} 
              onClick={() => setActiveTab("community")}
            >
              {t('tabs.community')}
            </Button>
          </div>
          
          {activeTab === "leadership" ? (
            <>
              {/* 2. Leadership Hierarchy Section */}
              <section className="py-16 px-4 bg-muted/30">
                <div className="container mx-auto">
                  <h2 className="text-3xl font-bold text-center mb-12">
                    {t('leadershipSection.title')}
                  </h2>
                  
                  {/* Leadership Cards - Desktop */}
                  <div className="hidden md:block space-y-12">
                    {leaders.map((leader, index) => (
                      <div 
                        key={index}
                        className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-8 card-3d slide-${index % 2 === 0 ? 'left' : 'right'}`}
                      >
                        <div className="w-1/2">
                          <div className="h-128 card-inner rounded-lg overflow-hidden shadow-lg">
                            <img 
                              src={leader.image} 
                              alt={leader.name}
                              className="w-full h-74 object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </div>
                        <div className="w-1/2">
                          <Card className="h-full">
                            <CardHeader>
                              <CardTitle>{leader.name}</CardTitle>
                              <CardDescription className="text-primary font-semibold">
                                {leader.role}
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <p>{leader.bio}</p>
                              {leader.contributions && (
                                <ul className="mt-4 space-y-1">
                                  {leader.contributions.map((item, i) => (
                                    <li key={i} className="text-sm text-muted-foreground">• {item}</li>
                                  ))}
                                </ul>
                              )}
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Leadership Cards - Mobile */}
                  <div className="md:hidden space-y-6">
                    {leaders.map((leader, index) => (
                      <div key={index} className="card-3d fade-in">
                        <Card className="h-full">
                          <div className="card-inner rounded-lg overflow-hidden">
                            <img 
                              src={leader.image} 
                              alt={leader.name}
                              className="w-full h-64 object-cover"
                            />
                          </div>
                          <CardHeader>
                            <CardTitle>{leader.name}</CardTitle>
                            <CardDescription className="text-primary font-semibold">
                              {leader.role}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p>{leader.bio}</p>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 3. Community Section */}
              <section className="py-16 px-4">
                <div className="container mx-auto">
                  <h2 className="text-3xl font-bold text-center mb-12">
                    {t('communitySection.title')}
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="fade-in">
                      <h3 className="text-2xl font-semibold mb-4">
                        {t('communitySection.aboutTitle')}
                      </h3>
                      <p className="mb-4">
                        {t('communitySection.aboutText')}
                      </p>
                      <p className="mb-4">
                        {t('communitySection.valuesText')}
                      </p>
                      
                      <div className="mt-8">
                        <h4 className="text-xl font-semibold mb-3">
                          {t('communitySection.programsTitle')}
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {t('communitySection.program1')}
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {t('communitySection.program2')}
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {t('communitySection.program3')}
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {t('communitySection.program4')}
                          </li>
                        </ul>
                      </div>
                      
                      <Button className="mt-6 btn-glow" onClick={() => setActiveTab("community")}>
                        {t('communitySection.joinButton')}
                      </Button>
                    </div>
                    
                    <div className="fade-in">
                      <h3 className="text-2xl font-semibold mb-4 text-center">
                        {t('communitySection.photosTitle')}
                      </h3>
                      <div className="relative h-96 overflow-hidden rounded-lg">
                        <div className="flex h-full snap-x snap-mandatory overflow-x-auto scrollbar-hide">
                          {communityPhotos.map((photo, index) => (
                            <div 
                              key={index}
                              className="flex-shrink-0 snap-start w-full h-full"
                            >
                              <div className="card-inner w-full h-full rounded-lg overflow-hidden">
                                <img 
                                  src={photo} 
                                  alt={`Community event ${index + 1}`}
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-6 bg-muted p-6 rounded-lg">
                        <h4 className="text-lg font-semibold mb-2">
                          {t('communitySection.testimonialTitle')}
                        </h4>
                        <p className="italic">
                          "{t('communitySection.testimonial')}"
                        </p>
                        <p className="mt-2 font-medium">- {t('communitySection.memberName')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 4. Cultural Leadership & Education Section */}
              <section className="py-16 px-4 bg-muted/50">
                <div className="container mx-auto">
                  <h2 className="text-3xl font-bold text-center mb-12">
                    {t('culturalSection.title')}
                  </h2>
                  
                  <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>
                          {t('culturalSection.languageTitle')}
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            {t('culturalSection.languageText')}
                          </p>
                          <Button className="mt-4 btn-glow">
                            {t('culturalSection.learnButton')}
                          </Button>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-2">
                        <AccordionTrigger>
                          {t('culturalSection.eventsTitle')}
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            {t('culturalSection.eventsText')}
                          </p>
                          <Button className="mt-4 btn-glow">
                            {t('culturalSection.volunteerButton')}
                          </Button>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-3">
                        <AccordionTrigger>
                          {t('culturalSection.artsTitle')}
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            {t('culturalSection.artsText')}
                          </p>
                          <Button className="mt-4 btn-glow">
                            {t('culturalSection.supportButton')}
                          </Button>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  
                  <div className="mt-12 text-center">
                    <h3 className="text-2xl font-semibold mb-6">
                      {t('culturalSection.continuityTitle')}
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <Card className="text-center card-3d fade-in">
                        <CardHeader>
                          <CardTitle>👥 {t('culturalSection.mentorship')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>{t('culturalSection.mentorshipText')}</p>
                        </CardContent>
                      </Card>
                      
                      <Card className="text-center card-3d fade-in">
                        <CardHeader>
                          <CardTitle>📚 {t('culturalSection.documentation')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>{t('culturalSection.documentationText')}</p>
                        </CardContent>
                      </Card>
                      
                      <Card className="text-center card-3d fade-in">
                        <CardHeader>
                          <CardTitle>🎉 {t('culturalSection.events')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>{t('culturalSection.eventsText2')}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </section>
            </>
          ) : (
            /* Community Groups and Messaging Section */
            <section className="py-16 px-4">
              <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                  {t('messagingSection.title')}
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Community Groups List */}
                  <div className="md:col-span-1">
                    <h3 className="text-xl font-semibold mb-4">{t('messagingSection.groupsTitle')}</h3>
                    <div className="space-y-4">
                      {communityGroups.map(group => (
                        <div 
                          key={group.id}
                          className={`p-4 rounded-lg cursor-pointer transition-all ${
                            selectedGroup === group.id 
                              ? 'bg-primary text-primary-foreground' 
                              : 'bg-muted hover:bg-muted/80'
                          }`}
                          onClick={() => setSelectedGroup(group.id)}
                        >
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={group.image} />
                              <AvatarFallback>{group.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-semibold">{group.name}</h4>
                              <p className="text-sm">{group.members} {t('messagingSection.members')}</p>
                            </div>
                          </div>
                          <p className="text-sm mt-2">{group.description}</p>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="w-full mt-6 btn-glow">
                      {t('messagingSection.createGroup')}
                    </Button>
                  </div>
                  
                  {/* Chat Interface */}
                  <div className="md:col-span-2">
                    <div className="bg-background border rounded-lg h-[600px] flex flex-col">
                      <div className="p-4 border-b">
                        <h3 className="font-semibold">
                          {communityGroups.find(g => g.id === selectedGroup)?.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {communityGroups.find(g => g.id === selectedGroup)?.description}
                        </p>
                      </div>
                      
                      <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {/* Welcome message from AI */}
                        <div className="flex items-start gap-3">
                          <Avatar className="bg-primary text-primary-foreground">
                            <AvatarFallback>AI</AvatarFallback>
                          </Avatar>
                          <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                            <div className="font-semibold">{t('messagingSection.aiName')}</div>
                            <p>{t('messagingSection.welcomeMessage')}</p>
                            <div className="text-xs text-muted-foreground mt-1">{t('messagingSection.justNow')}</div>
                          </div>
                        </div>
                        
                        {/* Sample messages */}
                        <div className="flex items-start gap-3 justify-end">
                          <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-[80%]">
                            <p>{t('messagingSection.sampleQuestion')}</p>
                            <div className="text-xs opacity-80 mt-1">{t('messagingSection.justNow')}</div>
                          </div>
                          <Avatar>
                            <AvatarFallback>Y</AvatarFallback>
                          </Avatar>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Avatar className="bg-primary text-primary-foreground">
                            <AvatarFallback>AI</AvatarFallback>
                          </Avatar>
                          <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                            <div className="font-semibold">{t('messagingSection.aiName')}</div>
                            <p>{t('messagingSection.sampleResponse')}</p>
                            <div className="text-xs text-muted-foreground mt-1">{t('messagingSection.justNow')}</div>
                          </div>
                        </div>
                        
                        {/* Dynamic messages */}
                        {messages.map(msg => (
                          <div 
                            key={msg.id} 
                            className={`flex items-start gap-3 ${msg.sender === t('messaging.you') ? 'justify-end' : ''}`}
                          >
                            {msg.sender !== t('messaging.you') && (
                              <Avatar className={msg.isAI ? 'bg-primary text-primary-foreground' : ''}>
                                <AvatarFallback>{msg.sender.charAt(0)}</AvatarFallback>
                              </Avatar>
                            )}
                            <div className={`rounded-lg p-3 max-w-[80%] ${
                              msg.sender === t('messaging.you') 
                                ? 'bg-primary text-primary-foreground' 
                                : 'bg-muted'
                            }`}>
                              {msg.sender !== t('messaging.you') && <div className="font-semibold">{msg.sender}</div>}
                              <p>{msg.text}</p>
                              <div className={`text-xs mt-1 ${msg.sender === t('messaging.you') ? 'opacity-80' : 'text-muted-foreground'}`}>
                                {msg.timestamp.toLocaleTimeString()}
                              </div>
                            </div>
                            {msg.sender === t('messaging.you') && (
                              <Avatar>
                                <AvatarFallback>Y</AvatarFallback>
                              </Avatar>
                            )}
                          </div>
                        ))}
                        
                        <div ref={messagesEndRef} />
                      </div>
                      
                      <div className="p-4 border-t">
                        <div className="flex gap-2">
                          <Input
                            placeholder={t('messagingSection.placeholder')}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                handleSendMessage();
                              }
                            }}
                          />
                          <Button onClick={handleSendMessage}>{t('messagingSection.send')}</Button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          {t('messagingSection.aiHint')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>

         {/* Footer with enhanced styling */}
      <footer className="bg-gradient-to-b from-amber-50 to-amber-100 py-12 px-4 mt-16 border-t border-amber-200">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="h-12 w-12 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold text-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                DAI
              </div>
              <div>
                <p className="text-sm font-medium text-amber-800">{t('footer.developedBy')}</p>
                <a
                  href="https://raman1224.github.io/DANGOL_AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-700 hover:text-amber-900 hover:underline transition-all duration-300"
                >
                  {t('footer.visit')}
                </a>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-amber-800 max-w-md italic">
                "{t('footer.quote')}"
              </p>
              <div className="flex justify-center md:justify-end space-x-4 mt-2">
                <a href="https://www.facebook.com/profile.php?id=61579052624200" className="text-amber-700 hover:text-amber-900 transition-colors duration-300 hover:scale-110">
                  {t('footer.social.facebook')}
                </a>
                <a href="#" className="text-amber-700 hover:text-amber-900 transition-colors duration-300 hover:scale-110">
                  {t('footer.social.instagram')}
                </a>
                <a href="#" className="text-amber-700 hover:text-amber-900 transition-colors duration-300 hover:scale-110">
                  {t('footer.social.youtube')}
                </a>
                <a href="#" className="text-amber-700 hover:text-amber-900 transition-colors duration-300 hover:scale-110">
                  {t('footer.social.twitter')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </PageLayout>

      <style jsx global>{`
        /* Global animations for the leadership page */
        .text-shadow-neon {
          text-shadow: 0 0 10px rgba(255, 200, 0, 0.7), 0 0 20px rgba(255, 150, 0, 0.5);
        }
        
        .slide-down {
          transform: translateY(-20px);
          opacity: 0;
          animation: slideDown 1s ease forwards;
        }
        
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in-delay {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s;
        }
        
        .fade-in.active, .fade-in-delay.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .slide-left, .slide-right {
          opacity: 0;
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .slide-left {
          transform: translateX(-50px);
        }
        
        .slide-right {
          transform: translateX(50px);
        }
        
        .slide-left.active, .slide-right.active {
          opacity: 1;
          transform: translateX(0);
        }
        
        .card-3d {
          perspective: 1000px;
        }
        
        .card-inner {
          transition: transform 0.4s ease;
          transform-style: preserve-3d;
        }
        
        .card-inner:hover {
          transform: rotateY(5deg) rotateX(2deg) scale(1.02);
        }
        
        .btn-glow {
          transition: all 0.3s ease;
        }
        
        .btn-glow:hover {
          box-shadow: 0 0 15px rgba(255, 215, 0, 0.6);
          transform: scale(1.05);
        }
        
        .social-icon {
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          transform: translateY(-3px) scale(1.1);
          filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.8));
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes slideDown {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .card-inner:hover {
            transform: none;
          }
        }
      `}</style>
    </div>
  )
}