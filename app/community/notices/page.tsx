'use client'

import { useTranslation } from '@/hooks/useTranslation'
import { useState, useEffect } from 'react'
import { Notice, User, NoticeStats, NoticeCategory } from '@/types/notice'
import Link from 'next/link'
import PageLayout from '@/components/layout/page-layout'

// Mock data with realistic Newar Samaj examples
const mockUsers: User[] = [
  { id: '1', email: 'admin@newarsamaj.com', name: 'Samaj Admin', role: 'admin', isSubscribed: true, joinedAt: new Date('2023-01-01') },
  { id: '2', email: 'member1@email.com', name: 'John Newar', role: 'member', isSubscribed: true, joinedAt: new Date('2023-02-01') },
  { id: '3', email: 'member2@email.com', name: 'Sarah Pradhan', role: 'member', isSubscribed: true, joinedAt: new Date('2023-02-15') },
  { id: '4', email: 'member3@email.com', name: 'Mike Maharjan', role: 'member', isSubscribed: true, joinedAt: new Date('2023-03-01') },
]

const mockNotices: Notice[] = [
  {
    id: '1',
    title: 'Monthly Community Meeting - Kathmandu Branch',
    content: 'Join us this Saturday at 5 PM NPT for monthly house-building planning and community discussions at Kathmandu branch. All members from Nuwakot, Bhatathok, and surrounding areas are welcome.',
    category: 'meeting',
    priority: 'high',
    status: 'sent',
    createdBy: 'admin@newarsamaj.com',
    createdAt: new Date('2024-01-15'),
    sentAt: new Date('2024-01-15'),
    recipients: mockUsers.map(u => u.email),
    isPublic: true,
    relatedLink: '/community/meetup'  // Fixed link
  },
  {
    id: '2',
    title: 'Cultural Bhajan Gathering - Last Saturday',
    content: 'Monthly cultural bhajan gathering at Nuwakot Bhatathok community hall. Traditional Newari bhajans followed by community feast. Families are encouraged to participate.',
    category: 'cultural',
    priority: 'medium',
    status: 'sent',
    createdBy: 'admin@newarsamaj.com',
    createdAt: new Date('2024-01-10'),
    sentAt: new Date('2024-01-10'),
    recipients: mockUsers.map(u => u.email),
    isPublic: true,
    relatedLink: '/culture'
  },
  {
    id: '3',
    title: 'Financial Support for Deceased Member Family',
    content: 'Urgent: All members requested to contribute Rs. 1,000 to support the family of our late member Mr. Rajendra Maharjan. Contributions will be collected from 1st to 13th of this month.',
    category: 'financial',
    priority: 'high',
    status: 'sent',
    createdBy: 'admin@newarsamaj.com',
    createdAt: new Date('2024-01-05'),
    sentAt: new Date('2024-01-05'),
    recipients: mockUsers.map(u => u.email),
    isPublic: true,
    relatedLink: '/donate'
  },
  {
    id: '4',
    title: 'Newari Language Online Classes',
    content: 'Weekly online Newari language sessions every Wednesday at 7 PM NPT. Teacher Pradeep Maharjan will conduct classes for beginners and advanced learners. Free for all community members.',
    category: 'language',
    priority: 'low',
    status: 'sent',
    createdBy: 'admin@newarsamaj.com',
    createdAt: new Date('2024-01-03'),
    sentAt: new Date('2024-01-03'),
    recipients: mockUsers.map(u => u.email),
    isPublic: true,
    relatedLink: '/language/learn'
  },
  {
    id: '5',
    title: 'Dashain Festival Preparation Meeting',
    content: 'Community Dashain festival preparation meeting this Sunday. We need volunteers for organizing events, decorations, and cultural programs in Kathmandu. Please join to contribute.',
    category: 'festival',
    priority: 'medium',
    status: 'sent',
    createdBy: 'admin@newarsamaj.com',
    createdAt: new Date('2024-01-10'),
    sentAt: new Date('2024-01-10'),
    recipients: mockUsers.map(u => u.email),
    isPublic: true,
    relatedLink: '/events'
  },
  {
    id: '6',
    title: 'Community Library Book Donation Drive',
    content: 'We are collecting books for our community library. Donate Newari literature, cultural books, or educational materials. Drop off at Kathmandu community center.',
    category: 'general',
    priority: 'low',
    status: 'sent',
    createdBy: 'admin@newarsamaj.com',
    createdAt: new Date('2024-01-08'),
    sentAt: new Date('2024-01-08'),
    recipients: mockUsers.map(u => u.email),
    isPublic: true
  }
]

export default function NoticesPage() {
  const { t } = useTranslation()
  const [notices, setNotices] = useState<Notice[]>(mockNotices)
  const [users, setUsers] = useState<User[]>(mockUsers)
  const [isAdmin, setIsAdmin] = useState(true)
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [editingNotice, setEditingNotice] = useState<Notice | null>(null)
  const [activeTab, setActiveTab] = useState<NoticeCategory | 'all'>('all')

  // New notice form state
  const [newNotice, setNewNotice] = useState({
    title: '',
    content: '',
    category: 'general' as NoticeCategory,
    priority: 'medium' as Notice['priority'],
    sendToAll: true,
    scheduleSend: false,
    scheduledDate: '',
    scheduledTime: '',
    relatedLink: ''
  })

  // Calculate statistics
  const stats: NoticeStats = {
    totalNotices: notices.length,
    totalRecipients: users.filter(u => u.isSubscribed).length,
    todayNotices: notices.filter(n => 
      n.createdAt.toDateString() === new Date().toDateString()
    ).length,
    noticesByCategory: notices.reduce((acc, notice) => {
      acc[notice.category] = (acc[notice.category] || 0) + 1
      return acc
    }, {} as { [key: string]: number })
  }

  const filteredNotices = activeTab === 'all' 
    ? notices 
    : notices.filter(notice => notice.category === activeTab)

  const handleCreateNotice = () => {
    const notice: Notice = {
      id: Date.now().toString(),
      title: newNotice.title,
      content: newNotice.content,
      category: newNotice.category,
      priority: newNotice.priority,
      status: newNotice.scheduleSend ? 'scheduled' : 'sent',
      createdBy: 'admin@newarsamaj.com',
      createdAt: new Date(),
      scheduledFor: newNotice.scheduleSend ? new Date(`${newNotice.scheduledDate}T${newNotice.scheduledTime}`) : undefined,
      sentAt: newNotice.scheduleSend ? undefined : new Date(),
      recipients: newNotice.sendToAll 
        ? users.filter(u => u.isSubscribed).map(u => u.email)
        : [],
      isPublic: true,
      relatedLink: newNotice.relatedLink || undefined
    }

    setNotices([notice, ...notices])
    setShowCreateForm(false)
    setNewNotice({
      title: '',
      content: '',
      category: 'general',
      priority: 'medium',
      sendToAll: true,
      scheduleSend: false,
      scheduledDate: '',
      scheduledTime: '',
      relatedLink: ''
    })

    console.log('Notice created and emails sent to:', notice.recipients)
  }

  const handleDeleteNotice = (id: string) => {
    setNotices(notices.filter(notice => notice.id !== id))
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 border border-red-200 dark:border-red-700'
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 border border-yellow-200 dark:border-yellow-700'
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border border-green-200 dark:border-green-700'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'meeting': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border border-blue-200 dark:border-blue-700'
      case 'cultural': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 border border-purple-200 dark:border-purple-700'
      case 'financial': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 border border-orange-200 dark:border-orange-700'
      case 'language': return 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 border border-teal-200 dark:border-teal-700'
      case 'festival': return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200 border border-pink-200 dark:border-pink-700'
      case 'general': return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'meeting': return '👥'
      case 'cultural': return '🎭'
      case 'financial': return '💰'
      case 'language': return '📚'
      case 'festival': return '🎉'
      case 'general': return '📢'
      default: return '📄'
    }
  }

  // Fixed category options - using the correct translation structure
  const categoryOptions = [
    { value: 'meeting', label: t('notices.categories.meeting') || 'Meeting' },
    { value: 'cultural', label: t('notices.categories.cultural') || 'Cultural' },
    { value: 'financial', label: t('notices.categories.financial') || 'Financial' },
    { value: 'language', label: t('notices.categories.language') || 'Language' },
    { value: 'festival', label: t('notices.categories.festival') || 'Festival' },
    { value: 'general', label: t('notices.categories.general') || 'General' }
  ]

  // Fixed priority options - using the correct translation structure
  const priorityOptions = [
    { value: 'high', label: t('notices.priorities.high') || 'High Priority' },
    { value: 'medium', label: t('notices.priorities.medium') || 'Medium Priority' },
    { value: 'low', label: t('notices.priorities.low') || 'Low Priority' }
  ]

  return (
    <PageLayout>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 py-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('notices.title')}
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
          {t('notices.subtitle')}
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-400 max-w-3xl mx-auto">
          {t('notices.description')}
        </p>
      </div>

      {/* Quick Actions Cards */}
      <div className="max-w-6xl mx-auto mb-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link href="/community/meetup" className="block"> {/* Fixed link */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Join Meeting</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Live discussions</p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/donate" className="block">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Support Community</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Make a donation</p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/language/learn" className="block">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Learn Newari</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Language classes</p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/culture" className="block">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎭</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Cultural Events</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Festivals & traditions</p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Admin Panel */}
      {isAdmin && (
        <div className="max-w-6xl mx-auto mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0">
                {t('notices.adminPanel')}
              </h2>
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowCreateForm(true)}
                  className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  {t('notices.createNotice')}
                </button>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stats.totalNotices}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('notices.totalNotices')}</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">{stats.totalRecipients}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('notices.totalRecipients')}</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stats.todayNotices}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{t('notices.todayNotices')}</div>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                  {notices.filter(n => n.priority === 'high').length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">High Priority</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create Notice Form */}
      {showCreateForm && isAdmin && (
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {t('notices.createNotice')}
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('notices.noticeTitle')}
                </label>
                <input
                  type="text"
                  value={newNotice.title}
                  onChange={(e) => setNewNotice({...newNotice, title: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Enter notice title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('notices.noticeContent')}
                </label>
                <textarea
                  value={newNotice.content}
                  onChange={(e) => setNewNotice({...newNotice, content: e.target.value})}
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Enter notice content"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('notices.noticeCategory')}
                  </label>
                  <select
                    value={newNotice.category}
                    onChange={(e) => setNewNotice({...newNotice, category: e.target.value as NoticeCategory})}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    {categoryOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('notices.noticePriority')}
                  </label>
                  <select
                    value={newNotice.priority}
                    onChange={(e) => setNewNotice({...newNotice, priority: e.target.value as Notice['priority']})}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    {priorityOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Related Page Link (Optional)
                </label>
                <input
                  type="text"
                  value={newNotice.relatedLink}
                  onChange={(e) => setNewNotice({...newNotice, relatedLink: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="/community/meetup, /donate, /language/learn, etc."
                />
              </div>

              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={newNotice.sendToAll}
                    onChange={(e) => setNewNotice({...newNotice, sendToAll: e.target.checked})}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    {t('notices.sendToAll')}
                  </span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={newNotice.scheduleSend}
                    onChange={(e) => setNewNotice({...newNotice, scheduleSend: e.target.checked})}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    {t('notices.scheduleSend')}
                  </span>
                </label>
              </div>

              {newNotice.scheduleSend && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="date"
                    value={newNotice.scheduledDate}
                    onChange={(e) => setNewNotice({...newNotice, scheduledDate: e.target.value})}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                  <input
                    type="time"
                    value={newNotice.scheduledTime}
                    onChange={(e) => setNewNotice({...newNotice, scheduledTime: e.target.value})}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
              )}

              <div className="flex space-x-4 pt-4">
                <button
                  onClick={handleCreateNotice}
                  className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300"
                >
                  {t('notices.actions.send')}
                </button>
                <button
                  onClick={() => setShowCreateForm(false)}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300"
                >
                  {t('notices.actions.cancel')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notices List */}
      <div className="max-w-6xl mx-auto">
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              activeTab === 'all' 
                ? 'bg-blue-500 text-white shadow-lg' 
                : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {t('notices.allNotices')}
          </button>
          {categoryOptions.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveTab(category.value as NoticeCategory)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeTab === category.value 
                  ? 'bg-blue-500 text-white shadow-lg' 
                  : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              <span>{getCategoryIcon(category.value)}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Notices Grid */}
        <div className="grid gap-6">
          {filteredNotices.length > 0 ? (
            filteredNotices.map((notice) => (
              <div key={notice.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transform transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div className="flex items-center space-x-4 mb-2 md:mb-0">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{getCategoryIcon(notice.category)}</span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {notice.title}
                      </h3>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(notice.category)}`}>
                      {t(`notices.categories.${notice.category}`) || notice.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(notice.priority)}`}>
                      {t(`notices.priorities.${notice.priority}`) || notice.priority}
                    </span>
                  </div>
                  
                  {isAdmin && (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleDeleteNotice(notice.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full text-sm transition-colors"
                      >
                        {t('notices.actions.delete')}
                      </button>
                    </div>
                  )}
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {notice.content}
                </p>

                <div className="flex flex-wrap items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-4">
                    <span>{t('notices.createdBy')}: {notice.createdBy}</span>
                    <span>{t('notices.recipients')}: {notice.recipients.length}</span>
                    {notice.sentAt && (
                      <span>{t('notices.sentDate')}: {notice.sentAt.toLocaleDateString()}</span>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-4 mt-2 md:mt-0">
                    {notice.relatedLink && (
                      <Link 
                        href={notice.relatedLink}
                        className="text-blue-600 dark:text-blue-400 hover:underline flex items-center space-x-1"
                      >
                        <span>Related Page</span>
                        <span>→</span>
                      </Link>
                    )}
                    <span className={`px-2 py-1 rounded ${notice.status === 'sent' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'}`}>
                      {t(`notices.status.${notice.status}`) || notice.status}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400">
                {t('notices.noNotices')}
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
    </PageLayout>
  )
}