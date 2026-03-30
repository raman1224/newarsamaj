// app/community/page.tsx
'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@/lib/useUser'
import { 
  Users, 
  Calendar, 
  Bell, 
  MessageCircle, 
  Heart, 
  MapPin, 
  Star,
  Settings,
  LogOut,
  User as UserIcon
} from 'lucide-react'
import { logOut } from '@/lib/auth'
import PageLayout from '@/components/layout/page-layout'

export default function CommunityPage() {
  const router = useRouter()
  const { user, loading } = useUser()
  const [userProfile, setUserProfile] = useState<any>(null)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login')
    }
  }, [user, loading, router])

  useEffect(() => {
    const profile = localStorage.getItem('userProfile')
    if (profile) {
      setUserProfile(JSON.parse(profile))
    }
  }, [])

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  const handleLogout = async () => {
    try {
      await logOut()
      localStorage.removeItem('userProfile')
      router.push('/')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  if (loading) {
    return (

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <PageLayout>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:bg-gray-900 transition-all duration-500">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Community</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">Welcome to Newar Samaj</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={handleThemeToggle}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {isDarkMode ? '🌙' : '☀️'}
              </button>
              
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {userProfile?.fullName || user.email}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    {userProfile?.location || 'Member'}
                  </p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {userProfile?.fullName?.charAt(0) || user.email?.charAt(0).toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-6">
              {/* User Profile Card */}
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {userProfile?.fullName?.charAt(0) || user.email?.charAt(0).toUpperCase()}
                </div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {userProfile?.fullName || 'Community Member'}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {user.email}
                </p>
                {userProfile?.location && (
                  <div className="flex items-center justify-center gap-1 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    {userProfile.location}
                  </div>
                )}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-lg font-bold text-blue-600 dark:text-blue-400">0</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Friends</div>
                </div>
                <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="text-lg font-bold text-green-600 dark:text-green-400">0</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Events</div>
                </div>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {[
                  { icon: Users, label: 'My Profile', active: true },
                  { icon: Calendar, label: 'Events', active: false },
                  { icon: MessageCircle, label: 'Messages', active: false },
                  { icon: Bell, label: 'Notifications', active: false },
                  { icon: Heart, label: 'Interests', active: false },
                  { icon: Settings, label: 'Settings', active: false },
                ].map((item, index) => (
                  <button
                    key={index}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      item.active 
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
                
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium">Logout</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg p-8 text-white mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-2">
                    Welcome{userProfile?.fullName ? `, ${userProfile.fullName}` : ''}! 👋
                  </h1>
                  <p className="text-blue-100 text-lg">
                    You're now part of the Newar Samaj community. Start exploring and connecting with others.
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                    <Heart className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Completion */}
            {userProfile && (
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Your Profile</h2>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
                    Complete ✓
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Basic Info</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Name:</span>
                        <span className="font-medium text-gray-900 dark:text-white">{userProfile.fullName}</span>
                      </div>
                      {userProfile.location && (
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-300">Location:</span>
                          <span className="font-medium text-gray-900 dark:text-white">{userProfile.location}</span>
                        </div>
                      )}
                      {userProfile.dateOfBirth && (
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-300">Date of Birth:</span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            {new Date(userProfile.dateOfBirth).toLocaleDateString()}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {userProfile.interests?.map((interest: string, index: number) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                    
                    {userProfile.bio && (
                      <div className="mt-4">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">About</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{userProfile.bio}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Community Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Users,
                  title: 'Connect',
                  description: 'Find and connect with other community members',
                  color: 'from-blue-500 to-blue-600',
                  action: 'Explore'
                },
                {
                  icon: Calendar,
                  title: 'Events',
                  description: 'Discover upcoming cultural events and gatherings',
                  color: 'from-green-500 to-green-600',
                  action: 'View Events'
                },
                {
                  icon: MessageCircle,
                  title: 'Chat',
                  description: 'Join conversations with community members',
                  color: 'from-purple-500 to-purple-600',
                  action: 'Start Chatting'
                },
                {
                  icon: Star,
                  title: 'Culture',
                  description: 'Learn about Newar traditions and heritage',
                  color: 'from-amber-500 to-amber-600',
                  action: 'Explore'
                },
                {
                  icon: Heart,
                  title: 'Volunteer',
                  description: 'Participate in community service activities',
                  color: 'from-red-500 to-red-600',
                  action: 'Get Involved'
                },
                {
                  icon: Bell,
                  title: 'Updates',
                  description: 'Stay informed with community news',
                  color: 'from-indigo-500 to-indigo-600',
                  action: 'See Updates'
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {feature.description}
                  </p>
                  <button className="text-blue-600 dark:text-blue-400 font-medium text-sm hover:underline">
                    {feature.action} →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </PageLayout>
  )
}