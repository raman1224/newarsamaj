'use client'

import PageLayout from '@/components/layout/page-layout'
import { useTranslation } from '@/hooks/useTranslation'
import Link from 'next/link'
import React, { useState } from 'react'
// Define course data separately since your t() function returns strings
const courseData = {
  beginner: {
    title: {
      en: "Beginner Level",
      ne: "सुरुआती तह", 
      new: "सुरुवाती स्तर"
    },
    duration: {
      en: "3 Months",
      ne: "३ महिना",
      new: "३ महिना"
    },
    topics: {
      en: ["Basic greetings", "Numbers 1-100", "Daily vocabulary", "Simple sentences"],
      ne: ["आधारभूत अभिवादन", "संख्या १-१००", "दैनिक शब्दावली", "साधारण वाक्यहरू"],
      new: ["बुनियादी अभिवादन", "संख्या १-१००", "दैनिक शब्दावली", "साधारण वाक्य"]
    }
  },
  intermediate: {
    title: {
      en: "Intermediate Level",
      ne: "मध्यवर्ती तह",
      new: "मध्यवर्ती स्तर"
    },
    duration: {
      en: "4 Months", 
      ne: "४ महिना",
      new: "४ महिना"
    },
    topics: {
      en: ["Grammar rules", "Conversational skills", "Reading practice", "Cultural context"],
      ne: ["व्याकरण नियमहरू", "कुराकानी कौशलहरू", "पढाइ अभ्यास", "सांस्कृतिक सन्दर्भ"],
      new: ["व्याकरण नियम", "कुराकानी कौशल", "पढाइ अभ्यास", "सांस्कृतिक सन्दर्भ"]
    }
  },
  advanced: {
    title: {
      en: "Advanced Level",
      ne: "उन्नत तह",
      new: "उन्नत स्तर"
    },
    duration: {
      en: "5 Months",
      ne: "५ महिना", 
      new: "५ महिना"
    },
    topics: {
      en: ["Complex grammar", "Writing skills", "Literature", "Professional use"],
      ne: ["जटिल व्याकरण", "लेखन कौशल", "साहित्य", "व्यावसायिक प्रयोग"],
      new: ["जटिल व्याकरण", "लेखन कौशल", "साहित्य", "व्यावसायिक प्रयोग"]
    }
  },
  children: {
    title: {
      en: "Children's Class",
      ne: "बच्चाहरूको कक्षा",
      new: "बच्चा ला कक्षा"
    },
    duration: {
      en: "Ongoing",
      ne: "निरन्तर",
      new: "निरन्तर"
    },
    topics: {
      en: ["Fun activities", "Songs and stories", "Basic vocabulary", "Cultural games"],
      ne: ["रमाइलो गतिविधिहरू", "गीत र कथाहरू", "आधारभूत शब्दावली", "सांस्कृतिक खेलहरू"],
      new: ["मजाको गतिविधि", "गीत र कथा", "बुनियादी शब्दावली", "सांस्कृतिक खेल"]
    }
  }
}

export default function LanguageSchoolPage() {
  const { t, locale } = useTranslation()
  const [activeTab, setActiveTab] = useState('overview')
const [isDarkMode, setIsDarkMode] = React.useState(false)

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }
  // Teacher data
  const teachers = [
    {
      name: "Dr. Shanti Maharjan",
      qualification: "PhD in Newari Linguistics",
      experience: "15+ years teaching experience",
      specialty: "Newari grammar and literature"
    },
    {
      name: "Rajendra Pradhan", 
      qualification: "MA in Nepalese History",
      experience: "10+ years cultural teaching",
      specialty: "Cultural context and traditions"
    },
    {
      name: "Anita Shakya",
      qualification: "B.Ed in Language Education", 
      experience: "8+ years children's classes",
      specialty: "Interactive learning methods"
    }
  ]

  // Get course data based on current language
  const getCourseData = (level: keyof typeof courseData) => {
    const lang = locale as keyof typeof courseData.beginner.title
    return {
      title: courseData[level].title[lang] || courseData[level].title.en,
      duration: courseData[level].duration[lang] || courseData[level].duration.en,
      topics: courseData[level].topics[lang] || courseData[level].topics.en
    }
  }

  return (
    <PageLayout isDarkMode={isDarkMode} onThemeToggle={handleThemeToggle}>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 py-8 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            {t('languageSchool.title')}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
          {t('languageSchool.subtitle')}
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
          {t('languageSchool.description')}
        </p>
      </div>

      {/* Quick Navigation Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-12">
        <Link href="/language/learn" className="block transform hover:scale-105 transition-transform duration-300">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl cursor-pointer group">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Online Learning</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Start learning now</p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/language/ai-tutor" className="block transform hover:scale-105 transition-transform duration-300">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl cursor-pointer group">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">AI Tutor</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Get personalized help</p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/culture" className="block transform hover:scale-105 transition-transform duration-300">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl cursor-pointer group">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎭</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Cultural Context</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn through culture</p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        {/* Courses Section - FIXED MAPPING ISSUE */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12 border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t('languageSchool.courses.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(['beginner', 'intermediate', 'advanced', 'children'] as const).map((level) => {
              const course = getCourseData(level)
              return (
                <div key={level} className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">
                    Duration: {course.duration}
                  </p>
                  <ul className="space-y-2">
                    {course.topics.map((topic: string, index: number) => (
                      <li key={index} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-green-500 mr-2">✓</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        {/* Rest of your component remains the same */}
        {/* Online Learning Section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 mb-12 text-white">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-4">{t('languageSchool.onlineLearning.title')}</h2>
            <p className="text-lg opacity-90 leading-relaxed max-w-3xl mx-auto">
              {t('languageSchool.onlineLearning.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {[
              "Live interactive classes with teachers",
              "Recorded sessions for flexible learning", 
              "Practice exercises and quizzes",
              "Cultural immersion activities",
              "Progress tracking and certificates"
            ].map((feature, index) => (
              <div key={index} className="bg-white/20 rounded-lg p-4 text-center backdrop-blur-sm">
                <div className="text-2xl mb-2">
                  {['💻', '📹', '📝', '🎭', '📊'][index]}
                </div>
                <p className="text-sm">{feature}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/language/learn">
              <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Start Learning Online Now
              </button>
            </Link>
          </div>
        </div>

        {/* Teachers Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12 border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">
            {t('languageSchool.teachers.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
            {t('languageSchool.teachers.description')}
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {teachers.map((teacher, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {teacher.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                  {teacher.name}
                </h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">{teacher.qualification}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{teacher.experience}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">{teacher.specialty}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enrollment Process */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t('languageSchool.enrollment.title')}
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Fill the registration form",
              "Take a placement test", 
              "Choose your class schedule",
              "Make payment and get access"
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {index + 1}
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">{step}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/language/learn">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                Start Your Learning Journey
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto text-center mt-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Learn Newari?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Join hundreds of students already learning Newari with our proven methods
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/language/learn">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                Start Online Learning
              </button>
            </Link>
            <Link href="/language/ai-tutor">
              <button className="border border-blue-500 text-blue-500 dark:text-blue-400 font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                Try AI Tutor
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </PageLayout>
  )
}