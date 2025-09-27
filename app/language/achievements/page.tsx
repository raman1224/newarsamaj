// app/language/achievements/page.tsx
"use client"
import PageLayout from '@/components/layout/page-layout'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Zap, Lock, Award, Star, ChevronLeft, Target, Clock, BookOpen, Users, GraduationCap, Brain, Crown, Sparkles, Calendar, BookText, Heart, Shirt, Briefcase, Trees, Map, Smile, School, Music, Castle, Home, Wrench, Shield, Activity, Type, BookOpenText } from "lucide-react"
import Link from 'next/link'

interface Achievement {
  id: number
  icon: any
  title: string
  description: string
  unlocked: boolean
  xpReward: number
  unlockDate: string | null
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
  progress?: number
  totalRequired?: number
}

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
    rarity: "rare",
    progress: 127,
    totalRequired: 100
  },
  { 
    id: 3, 
    icon: Clock, 
    title: "Consistent Learner", 
    description: "7-day learning streak", 
    unlocked: true, 
    xpReward: 75,
    unlockDate: "2023-11-10",
    rarity: "common",
    progress: 12,
    totalRequired: 7
  },
  { 
    id: 4, 
    icon: Brain, 
    title: "Quiz Champion", 
    description: "Perfect score on 5 quizzes", 
    unlocked: false, 
    xpReward: 150,
    unlockDate: null,
    rarity: "epic",
    progress: 2,
    totalRequired: 5
  },
  { 
    id: 5, 
    icon: Crown, 
    title: "Culture Expert", 
    description: "Completed all cultural lessons", 
    unlocked: false, 
    xpReward: 200,
    unlockDate: null,
    rarity: "legendary",
    progress: 1,
    totalRequired: 8
  },
  { 
    id: 6, 
    icon: Zap, 
    title: "Speed Learner", 
    description: "Completed 5 lessons in one day", 
    unlocked: false, 
    xpReward: 125,
    unlockDate: null,
    rarity: "rare",
    progress: 0,
    totalRequired: 5
  },
  { 
    id: 7, 
    icon: BookOpen, 
    title: "Grammar Rookie", 
    description: "Learned all the basic grammar rules", 
    unlocked: false, 
    xpReward: 100,
    unlockDate: null,
    rarity: "common",
    progress: 15,
    totalRequired: 30
  },
  { 
    id: 8, 
    icon: Users, 
    title: "Family Friend", 
    description: "Know all family-related words", 
    unlocked: false, 
    xpReward: 50,
    unlockDate: null,
    rarity: "common",
    progress: 8,
    totalRequired: 25
  },
  { 
    id: 9, 
    icon: Heart, 
    title: "Animal Lover", 
    description: "Learned all animal and pet words", 
    unlocked: false, 
    xpReward: 70,
    unlockDate: null,
    rarity: "common",
    progress: 12,
    totalRequired: 30
  },
  { 
    id: 10, 
    icon: Shirt, 
    title: "Fashion Fan", 
    description: "Learned all clothes and accessories", 
    unlocked: false, 
    xpReward: 60,
    unlockDate: null,
    rarity: "common",
    progress: 5,
    totalRequired: 20
  },
  { 
    id: 11, 
    icon: Briefcase, 
    title: "Job Finder", 
    description: "Know all professions and jobs", 
    unlocked: false, 
    xpReward: 75,
    unlockDate: null,
    rarity: "common",
    progress: 10,
    totalRequired: 35
  },
  { 
    id: 12, 
    icon: Trees, 
    title: "Nature Explorer", 
    description: "Learned nature and weather words", 
    unlocked: false, 
    xpReward: 90,
    unlockDate: null,
    rarity: "rare",
    progress: 15,
    totalRequired: 40
  },
  { 
    id: 13, 
    icon: Map, 
    title: "Direction Finder", 
    description: "Know all places and directions", 
    unlocked: false, 
    xpReward: 50,
    unlockDate: null,
    rarity: "common",
    progress: 8,
    totalRequired: 25
  },
  { 
    id: 14, 
    icon: Smile, 
    title: "Mood Tracker", 
    description: "Learned all feelings and emotions", 
    unlocked: false, 
    xpReward: 50,
    unlockDate: null,
    rarity: "common",
    progress: 6,
    totalRequired: 20
  },
  { 
    id: 15, 
    icon: School, 
    title: "School Star", 
    description: "Know all school-related words", 
    unlocked: false, 
    xpReward: 60,
    unlockDate: null,
    rarity: "common",
    progress: 12,
    totalRequired: 30
  }
];

export default function AchievementsPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [filter, setFilter] = useState<'all' | 'unlocked' | 'locked'>('all')


  
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

  const getRarityTextColor = (rarity: string) => {
    switch (rarity) {
      case "common": return "text-gray-600"
      case "rare": return "text-blue-600"
      case "epic": return "text-purple-600"
      case "legendary": return "text-yellow-600"
      default: return "text-gray-600"
    }
  }

  const filteredAchievements = achievements.filter(achievement => {
    if (filter === 'all') return true
    if (filter === 'unlocked') return achievement.unlocked
    if (filter === 'locked') return !achievement.unlocked
    return true
  })

  const totalXP = achievements
    .filter(a => a.unlocked)
    .reduce((sum, achievement) => sum + achievement.xpReward, 0)

  const unlockedCount = achievements.filter(a => a.unlocked).length
  const totalCount = achievements.length

  return (
    <PageLayout isDarkMode={isDarkMode} onThemeToggle={handleThemeToggle}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/language/learn">
              <Button variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <h1 className="text-3xl font-bold">Achievements</h1>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card className="text-center">
              <CardContent className="p-4">
                <Trophy className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
                <div className="text-2xl font-bold">{unlockedCount}/{totalCount}</div>
                <p className="text-sm text-muted-foreground">Achievements Unlocked</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-4">
                <Zap className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
                <div className="text-2xl font-bold">{totalXP}</div>
                <p className="text-sm text-muted-foreground">Total XP Earned</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-4">
                <Award className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
                <div className="text-2xl font-bold">{Math.round((unlockedCount / totalCount) * 100)}%</div>
                <p className="text-sm text-muted-foreground">Completion Rate</p>
              </CardContent>
            </Card>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2 mb-6">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('all')}
            >
              All Achievements
            </Button>
            <Button
              variant={filter === 'unlocked' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('unlocked')}
            >
              Unlocked
            </Button>
            <Button
              variant={filter === 'locked' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('locked')}
            >
              Locked
            </Button>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAchievements.map((achievement) => {
            const IconComponent = achievement.icon
            const progressPercentage = achievement.progress && achievement.totalRequired 
              ? (achievement.progress / achievement.totalRequired) * 100 
              : 0

            return (
              <Card
                key={achievement.id}
                className={`transition-all duration-300 transform hover:scale-105 border-2 p-1 ${getRarityColor(achievement.rarity)} ${!achievement.unlocked ? "opacity-60" : ""}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-full ${
                        achievement.unlocked ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <IconComponent className="h-6 w-6" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{achievement.title}</h3>
                        {achievement.unlocked && (
                          <Badge variant="secondary" className={getRarityTextColor(achievement.rarity)}>
                            {achievement.rarity}
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-medium">{achievement.xpReward} XP</span>
                        
                        {achievement.unlocked && achievement.unlockDate && (
                          <span className="text-xs text-muted-foreground ml-auto">
                            Unlocked: {new Date(achievement.unlockDate).toLocaleDateString()}
                          </span>
                        )}
                      </div>

                      {!achievement.unlocked && achievement.progress !== undefined && (
                        <div className="space-y-2">
                          <Progress value={progressPercentage} className="h-2" />
                          <p className="text-xs text-muted-foreground">
                            {achievement.progress}/{achievement.totalRequired} ({Math.round(progressPercentage)}%)
                          </p>
                        </div>
                      )}

                      {achievement.unlocked && (
                        <div className="flex items-center gap-1 mt-2">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          <span className="text-xs text-muted-foreground">Achievement Unlocked!</span>
                        </div>
                      )}

                      {!achievement.unlocked && (
                        <div className="flex items-center gap-1 mt-2">
                          <Lock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">Locked</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {filteredAchievements.length === 0 && (
          <div className="text-center py-12">
            <Lock className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-medium mb-2">No achievements found</h3>
            <p className="text-muted-foreground">
              {filter === 'unlocked' 
                ? "You haven't unlocked any achievements yet. Keep learning!" 
                : "All achievements are unlocked! Amazing work!"}
            </p>
          </div>
        )}
      </div>
    </PageLayout>
  )
}