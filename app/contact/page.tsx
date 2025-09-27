'use client'

import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { useLanguage } from '@/context/LanguageContext'
import PageLayout from '@/components/layout/page-layout'
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Users, 
  Heart, 
  Globe,
  MessageCircle,
  Star,
  Award,
  BookOpen,
  Shield,
  Lightbulb,
  Search,
  ChevronDown,
  ExternalLink
} from 'lucide-react'
import Link from 'next/link'

// Country data with flags (using emoji flags)
const countries = [
  { code: 'NP', name: 'Nepal', flag: '🇳🇵' },
  { code: 'IN', name: 'India', flag: '🇮🇳' },
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
  { code: 'FR', name: 'France', flag: '🇫🇷' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵' },
  { code: 'KR', name: 'South Korea', flag: '🇰🇷' },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬' },
  { code: 'MY', name: 'Malaysia', flag: '🇲🇾' },
  { code: 'QA', name: 'Qatar', flag: '🇶🇦' },
  { code: 'AE', name: 'United Arab Emirates', flag: '🇦🇪' },
  { code: 'SA', name: 'Saudi Arabia', flag: '🇸🇦' },
  { code: 'CN', name: 'China', flag: '🇨🇳' },
  { code: 'RU', name: 'Russia', flag: '🇷🇺' },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷' },
  { code: 'ZA', name: 'South Africa', flag: '🇿🇦' },
  { code: 'OTHER', name: 'Other Country', flag: '🌍' }
]

// Custom Select Component with Search
const SearchableSelect = ({ 
  options, 
  value, 
  onChange, 
  placeholder 
}: {
  options: typeof countries
  value: string
  onChange: (value: string) => void
  placeholder: string
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const selectRef = useRef<HTMLDivElement>(null)

  const filteredOptions = options.filter(option =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const selectedOption = options.find(opt => opt.name === value)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={selectRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-lg flex items-center justify-between bg-white"
      >
        <div className="flex items-center gap-3">
          {selectedOption ? (
            <>
              <span className="text-xl">{selectedOption.flag}</span>
              <span>{selectedOption.name}</span>
            </>
          ) : (
            <span className="text-gray-800">{placeholder}</span>
          )}
        </div>
        <ChevronDown className={`h-5 w-5 text-gray-800 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-xl shadow-2xl max-h-60 overflow-hidden">
          {/* Search Input */}
          <div className="p-2 border-b border-gray-800 text-black">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-800 text-black" />
              <input
                type="text"
                placeholder="Search countries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-800 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              />
            </div>
          </div>

          {/* Options List */}
          <div className=" bg-gray-800 max-h-48 overflow-y-auto">
            {filteredOptions.map((option) => (
              <button
                key={option.code}
                type="button"
                onClick={() => {
                  onChange(option.name)
                  setIsOpen(false)
                  setSearchTerm('')
                }}
                className="w-full px-4 py-3 text-left hover:bg-blue-500 flex items-center gap-3 transition-colors"
              >
                <span className="text-xl bg-blue">{option.flag}</span>
                <span>{option.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function ContactPage() {
  const { t } = useTranslation()
  const { currentLanguage } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')


  const [isDarkMode, setIsDarkMode] =useState(false)
  const handleThemeToggle =() =>{
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    country: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCountryChange = (country: string) => {
    setFormData(prev => ({
      ...prev,
      country
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData)
      
      setSubmitStatus('success')
      setFormData({
        fullName: '',
        email: '',
        password: '',
        country: '',
        message: ''
      })
      
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <PageLayout isDarkMode={isDarkMode} onThemeToggle={handleThemeToggle}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <MessageCircle className="h-5 w-5" />
              <span className="font-semibold">{t('contact.hero.badge')}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-devanagari tracking-tight">
              {t('contact.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              {t('contact.hero.subtitle')}
            </p>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-10 left-10 animate-float">
            <div className="w-6 h-6 bg-white/30 rounded-full"></div>
          </div>
          <div className="absolute top-20 right-20 animate-float delay-1000">
            <div className="w-4 h-4 bg-yellow-300/40 rounded-full"></div>
          </div>
          <div className="absolute bottom-10 left-1/4 animate-float delay-2000">
            <div className="w-8 h-8 bg-pink-300/40 rounded-full"></div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-3">
                    {t('contact.form.title')}
                  </h2>
                  <p className="text-gray-600">
                    {t('contact.form.subtitle')}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div className="group">
                    <label className="block text-sm font-medium text-black mb-2">
                      {t('contact.form.fullName')} *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-800 text-black rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:shadow-lg"
                      placeholder={t('contact.form.fullNamePlaceholder')}
                    />
                  </div>

                  {/* Email */}
                  <div className="group">
                    <label className="block text-sm font-medium text-black mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-800 text-black rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:shadow-lg"
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                  </div>

                  {/* Password */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.password')} *
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-800 text-black rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:shadow-lg"
                      placeholder={t('contact.form.passwordPlaceholder')}
                    />
                  </div>

                  {/* Country with Search */}
                  <div className="group text-black">
                    <label className="block text-sm font-medium text-gray-800 mb-2">
                      {t('contact.form.country')} *
                    </label>
                    <SearchableSelect 
                    
                      options={countries}
                      value={formData.country}
                      onChange={handleCountryChange}
                      placeholder={t('contact.form.selectCountry')}
                    />
                  </div>

                  {/* Message */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-800 text-black mb-2">
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-800 text-black rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:shadow-lg resize-none"
                      placeholder={t('contact.form.messagePlaceholder')}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        {t('contact.form.submitting')}
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        {t('contact.form.submit')}
                      </>
                    )}
                  </button>

                  {/* Status Message */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center animate-fade-in">
                      <span className="font-semibold">✅ {t('contact.form.successMessage')}</span>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center animate-fade-in">
                      <span className="font-semibold">❌ {t('contact.form.errorMessage')}</span>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Information Section */}
            <div className="space-y-8">
              {/* Why Newar Samaj Website Section */}
              <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-3xl p-8 shadow-2xl border border-orange-200">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="h-8 w-8 text-orange-600" />
                  <h2 className="text-3xl font-bold text-orange-900">
                    {t('contact.importance.title')}
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-gray-800">
                    {t('contact.importance.description1')}
                  </p>
                  
                  <p className="text-lg leading-relaxed text-gray-800">
                    {t('contact.importance.description2')}
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Cultural Preservation - Linked to Culture Page */}
                    <Link href="/culture" className="block transform hover:scale-105 transition-transform">
                      <div className="bg-white/50 p-4 rounded-xl border border-orange-200 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer group">
                        <div className="flex items-center gap-2 mb-2">
                          <BookOpen className="h-5 w-5 text-orange-600 group-hover:scale-110 transition-transform" />
                          <h4 className="font-semibold text-orange-800 group-hover:text-orange-900">
                            {t('contact.importance.cultural.title')}
                          </h4>
                          <ExternalLink className="h-3 w-3 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-sm text-gray-700">{t('contact.importance.cultural.description')}</p>
                      </div>
                    </Link>
                    
                    {/* Heritage Protection - Linked to Heritage Page */}
                    <Link href="/culture/heritage" className="block transform hover:scale-105 transition-transform">
                      <div className="bg-white/50 p-4 rounded-xl border border-orange-200 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer group">
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="h-5 w-5 text-orange-600 group-hover:scale-110 transition-transform" />
                          <h4 className="font-semibold text-orange-800 group-hover:text-orange-900">
                            {t('contact.importance.preservation.title')}
                          </h4>
                          <ExternalLink className="h-3 w-3 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-sm text-gray-700">{t('contact.importance.preservation.description')}</p>
                      </div>
                    </Link>
                    
                    {/* Global Connection - Linked to Sign Up Page */}
                    <Link href="/auth/signup" className="block transform hover:scale-105 transition-transform">
                      <div className="bg-white/50 p-4 rounded-xl border border-orange-200 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer group">
                        <div className="flex items-center gap-2 mb-2">
                          <Globe className="h-5 w-5 text-orange-600 group-hover:scale-110 transition-transform" />
                          <h4 className="font-semibold text-orange-800 group-hover:text-orange-900">
                            {t('contact.importance.global.title')}
                          </h4>
                          <ExternalLink className="h-3 w-3 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-sm text-gray-700">{t('contact.importance.global.description')}</p>
                      </div>
                    </Link>
                    
                    {/* Education - Linked to Language Learning Page */}
                    <Link href="/language/learn" className="block transform hover:scale-105 transition-transform">
                      <div className="bg-white/50 p-4 rounded-xl border border-orange-200 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer group">
                        <div className="flex items-center gap-2 mb-2">
                          <Lightbulb className="h-5 w-5 text-orange-600 group-hover:scale-110 transition-transform" />
                          <h4 className="font-semibold text-orange-800 group-hover:text-orange-900">
                            {t('contact.importance.education.title')}
                          </h4>
                          <ExternalLink className="h-3 w-3 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-sm text-gray-700">{t('contact.importance.education.description')}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 shadow-2xl border border-blue-200">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">{t('contact.info.title')}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white/50 rounded-xl border border-blue-200">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800">{t('contact.info.email')}</h4>
                      <p className="text-gray-700">contact@newarsamaj.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white/50 rounded-xl border border-blue-200">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800">{t('contact.info.phone')}</h4>
                      <p className="text-gray-700">+977-9763774451</p>
                    </div>
                  </div>
                  
                  {/* Address with Google Maps Link */}
                  <a 
                    href="https://maps.app.goo.gl/ud5gxbVWRx6RboaR9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block transform hover:scale-105 transition-transform"
                  >
                    <div className="flex items-center gap-4 p-4 bg-white/50 rounded-xl border border-blue-200 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer group">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-purple-800">{t('contact.info.address')}</h4>
                          <ExternalLink className="h-3 w-3 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-gray-700">{t('contact.info.addressDetail')}</p>
                        <p className="text-sm text-purple-600 mt-1">Nuwakot, Nepal - Click for directions</p>
                      </div>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-4 p-4 bg-white/50 rounded-xl border border-blue-200">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-800">{t('contact.info.hours')}</h4>
                      <p className="text-gray-700">{t('contact.info.hoursDetail')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats with Links */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8 shadow-2xl border border-green-200">
                <h3 className="text-2xl font-bold text-green-900 mb-6">{t('contact.stats.title')}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {/* Community Members - Linked to Sign Up */}
                  <Link href="/auth/signup" className="block transform hover:scale-105 transition-transform">
                    <div className="text-center p-4 bg-white/50 rounded-xl border border-green-200 hover:border-green-300 hover:shadow-lg transition-all cursor-pointer group">
                      <Users className="h-8 w-8 text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <div className="text-2xl font-bold text-green-700">10,000+</div>
                      <div className="text-sm text-gray-600 flex items-center justify-center gap-1">
                        {t('contact.stats.members')}
                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </Link>
                  
                  {/* Countries Reached */}
                  <div className="text-center p-4 bg-white/50 rounded-xl border border-green-200">
                    <Globe className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-700">50+</div>
                    <div className="text-sm text-gray-600">{t('contact.stats.countries')}</div>
                  </div>
                  
                  {/* Cultural Articles - Linked to Culture Page */}
                  <Link href="/culture" className="block transform hover:scale-105 transition-transform">
                    <div className="text-center p-4 bg-white/50 rounded-xl border border-green-200 hover:border-green-300 hover:shadow-lg transition-all cursor-pointer group">
                      <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <div className="text-2xl font-bold text-green-700">500+</div>
                      <div className="text-sm text-gray-600 flex items-center justify-center gap-1">
                        {t('contact.stats.articles')}
                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </Link>
                  
                  {/* Years of Heritage - Linked to Heritage Page */}
                  <Link href="/culture/heritage" className="block transform hover:scale-105 transition-transform">
                    <div className="text-center p-4 bg-white/50 rounded-xl border border-green-200 hover:border-green-300 hover:shadow-lg transition-all cursor-pointer group">
                      <Award className="h-8 w-8 text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <div className="text-2xl font-bold text-green-700">2000+</div>
                      <div className="text-sm text-gray-600 flex items-center justify-center gap-1">
                        {t('contact.stats.years')}
                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">{t('contact.cta.title')}</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('contact.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Join Community - Linked to Sign Up */}
              <Link href="/auth/signup">
                <button className="px-8 py-4 bg-white text-purple-900 rounded-xl hover:bg-gray-100 transition-all font-semibold flex items-center gap-2 shadow-lg transform hover:scale-105">
                  <Star className="h-5 w-5" />
                  {t('contact.cta.join')}
                </button>
              </Link>
              
              {/* Support Us - Also Linked to Sign Up */}
              <Link href="/auth/signup">
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 transition-all font-semibold flex items-center gap-2 transform hover:scale-105">
                  <Heart className="h-5 w-5" />
                  {t('contact.cta.donate')}
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </PageLayout>
  )
}