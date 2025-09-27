'use client'

import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import PageLayout from '@/components/layout/page-layout';
import { useRouter } from 'next/navigation';
import { 
  Users, 
  Calendar, 
  MessageSquare, 
  Bell, 
  Search,
  Plus,
  LogOut,
  Settings,
  User,
  Globe,
  Home,
  Megaphone,
  MapPin,
  Heart,
  BookOpen,
  Camera,
  Video,
  FileText,
  MoreHorizontal,
  ChevronDown,
  Sparkles
} from 'lucide-react';

export default function CommunityPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('dashboard');
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [language, setLanguage] = useState('en');
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'New cultural event announced', time: '2 min ago', read: false },
    { id: 2, text: 'Your post got 15 likes', time: '1 hour ago', read: false },
    { id: 3, text: 'Community meeting tomorrow', time: '3 hours ago', read: true }
  ]);

  if (loading) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>
      </PageLayout>
    );
  }

  if (!user) {
    router.push('/auth/login');
    return null;
  }

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  const languages = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'ne', name: 'Nepali', native: 'नेपाली' },
    { code: 'new', name: 'Newari', native: 'नेवाः' }
  ];

  const communityStats = {
    members: 1247,
    online: 89,
    events: 12,
    posts: 347
  };

  const recentActivities = [
    {
      type: 'event',
      title: 'Cultural Festival 2024',
      description: 'Annual Newar cultural festival announced',
      time: '2 hours ago',
      user: 'Rajesh Shrestha'
    },
    {
      type: 'post',
      title: 'Traditional Recipe Shared',
      description: 'New momo recipe with secret spices',
      time: '5 hours ago',
      user: 'Sunita Maharjan'
    },
    {
      type: 'meeting',
      title: 'Youth Group Meeting',
      description: 'Monthly youth community meeting',
      time: '1 day ago',
      user: 'Amit Bajracharya'
    }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              नमस्ते, {user.name}!
            </h1>
            <p className="text-blue-100 text-lg">
              Welcome to Newar Samaj Community Portal
            </p>
            <div className="flex gap-4 mt-4">
              <div className="bg-white/20 rounded-lg px-4 py-2">
                <span className="text-sm">Community Members</span>
                <div className="text-xl font-bold">{communityStats.members.toLocaleString()}</div>
              </div>
              <div className="bg-white/20 rounded-lg px-4 py-2">
                <span className="text-sm">Online Now</span>
                <div className="text-xl font-bold">{communityStats.online}</div>
              </div>
            </div>
          </div>
          <div className="bg-white/20 rounded-full p-4">
            <Sparkles className="h-8 w-8" />
          </div>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button 
          onClick={() => setActiveSection('news')}
          className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-all hover:scale-105 text-left group"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
              <Megaphone className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <span className="font-semibold text-gray-900 block">News & Updates</span>
          <p className="text-sm text-gray-600 mt-1">Latest community news</p>
        </button>

        <button 
          onClick={() => setActiveSection('meetup')}
          className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-all hover:scale-105 text-left group"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
              <Calendar className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <span className="font-semibold text-gray-900 block">Meetup & Events</span>
          <p className="text-sm text-gray-600 mt-1">Upcoming gatherings</p>
        </button>

        <button 
          onClick={() => setActiveSection('notices')}
          className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-all hover:scale-105 text-left group"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
              <FileText className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <span className="font-semibold text-gray-900 block">Notices</span>
          <p className="text-sm text-gray-600 mt-1">Important announcements</p>
        </button>

        <button 
          onClick={() => setActiveSection('community')}
          className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-all hover:scale-105 text-left group"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-3 bg-red-100 rounded-lg group-hover:bg-red-200 transition-colors">
              <Users className="h-6 w-6 text-red-600" />
            </div>
          </div>
          <span className="font-semibold text-gray-900 block">Community</span>
          <p className="text-sm text-gray-600 mt-1">Connect with members</p>
        </button>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Community Activity</h2>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                activity.type === 'event' ? 'bg-blue-100' : 
                activity.type === 'post' ? 'bg-green-100' : 'bg-purple-100'
              }`}>
                {activity.type === 'event' && <Calendar className="h-6 w-6 text-blue-600" />}
                {activity.type === 'post' && <MessageSquare className="h-6 w-6 text-green-600" />}
                {activity.type === 'meeting' && <Users className="h-6 w-6 text-purple-600" />}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{activity.title}</h3>
                <p className="text-sm text-gray-600">{activity.description}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-gray-500">By {activity.user}</span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cultural Spotlight */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Cultural Spotlight</h2>
            <p className="text-orange-100">Today's Newari Tradition: Bisket Jatra</p>
            <button className="mt-4 bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
              Learn More
            </button>
          </div>
          <div className="text-5xl">🎉</div>
        </div>
      </div>
    </div>
  );

  const renderNews = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">News & Updates</h1>
      {/* News content will go here */}
      <div className="text-center py-12 text-gray-500">
        <Megaphone className="h-12 w-12 mx-auto mb-4 text-gray-300" />
        <p>News and updates section coming soon...</p>
      </div>
    </div>
  );

  const renderMeetup = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Meetup & Events</h1>
      {/* Events content will go here */}
      <div className="text-center py-12 text-gray-500">
        <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-300" />
        <p>Events and meetups section coming soon...</p>
      </div>
    </div>
  );

  const renderNotices = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Notices & Announcements</h1>
      {/* Notices content will go here */}
      <div className="text-center py-12 text-gray-500">
        <FileText className="h-12 w-12 mx-auto mb-4 text-gray-300" />
        <p>Notices and announcements section coming soon...</p>
      </div>
    </div>
  );

  const renderCommunity = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Community Members</h1>
      {/* Community content will go here */}
      <div className="text-center py-12 text-gray-500">
        <Users className="h-12 w-12 mx-auto mb-4 text-gray-300" />
        <p>Community members section coming soon...</p>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'news': return renderNews();
      case 'meetup': return renderMeetup();
      case 'notices': return renderNotices();
      case 'community': return renderCommunity();
      default: return renderDashboard();
    }
  };

  return (
    // <PageLayout title="Community - Newar Samaj">
    <PageLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold text-gray-900">Newar Samaj</span>
                  <span className="text-xs text-gray-500 ml-2">Community Portal</span>
                </div>
              </div>
              
              {/* Navigation */}
              <nav className="hidden md:flex items-center gap-1">
                <button
                  onClick={() => setActiveSection('dashboard')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeSection === 'dashboard' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Home className="h-4 w-4 inline mr-2" />
                  Dashboard
                </button>
                <button
                  onClick={() => setActiveSection('news')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeSection === 'news' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Megaphone className="h-4 w-4 inline mr-2" />
                  News
                </button>
                <button
                  onClick={() => setActiveSection('meetup')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeSection === 'meetup' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Calendar className="h-4 w-4 inline mr-2" />
                  Meetup
                </button>
                <button
                  onClick={() => setActiveSection('notices')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeSection === 'notices' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <FileText className="h-4 w-4 inline mr-2" />
                  Notices
                </button>
                <button
                  onClick={() => setActiveSection('community')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeSection === 'community' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Users className="h-4 w-4 inline mr-2" />
                  Community
                </button>
              </nav>
              
              {/* Right Section */}
              <div className="flex items-center gap-4">
                {/* Language Selector */}
                <div className="relative">
                  <select 
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="appearance-none bg-gray-100 border-0 rounded-lg pl-3 pr-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {languages.map(lang => (
                      <option key={lang.code} value={lang.code}>
                        {lang.native} ({lang.name})
                      </option>
                    ))}
                  </select>
                  <Globe className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>

                {/* Notifications */}
                <button className="relative p-2 text-gray-600 hover:text-gray-900">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {/* User Menu */}
                <div className="relative">
                  <button 
                    onClick={() => setShowUserDropdown(!showUserDropdown)}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {user.name?.charAt(0) || 'U'}
                    </div>
                    <span className="hidden sm:block text-sm font-medium text-gray-700">
                      {user.name}
                    </span>
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </button>

                  {showUserDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-1 z-50">
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Profile
                      </button>
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                        <Settings className="h-4 w-4" />
                        Settings
                      </button>
                      <div className="border-t my-1"></div>
                      <button 
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                      >
                        <LogOut className="h-4 w-4" />
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Navigation */}
        <div className="md:hidden bg-white border-b sticky top-16 z-40">
          <div className="flex overflow-x-auto px-4 py-2 gap-1">
            <button
              onClick={() => setActiveSection('dashboard')}
              className={`flex-shrink-0 px-3 py-2 rounded-lg text-sm font-medium ${
                activeSection === 'dashboard' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Home className="h-4 w-4 mx-auto" />
            </button>
            <button
              onClick={() => setActiveSection('news')}
              className={`flex-shrink-0 px-3 py-2 rounded-lg text-sm font-medium ${
                activeSection === 'news' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Megaphone className="h-4 w-4 mx-auto" />
            </button>
            <button
              onClick={() => setActiveSection('meetup')}
              className={`flex-shrink-0 px-3 py-2 rounded-lg text-sm font-medium ${
                activeSection === 'meetup' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Calendar className="h-4 w-4 mx-auto" />
            </button>
            <button
              onClick={() => setActiveSection('notices')}
              className={`flex-shrink-0 px-3 py-2 rounded-lg text-sm font-medium ${
                activeSection === 'notices' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileText className="h-4 w-4 mx-auto" />
            </button>
            <button
              onClick={() => setActiveSection('community')}
              className={`flex-shrink-0 px-3 py-2 rounded-lg text-sm font-medium ${
                activeSection === 'community' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Users className="h-4 w-4 mx-auto" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderContent()}
        </main>
      </div>
    </PageLayout>
  );
}