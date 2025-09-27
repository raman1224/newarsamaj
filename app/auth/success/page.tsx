'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import PageLayout from '@/components/layout/page-layout'
import { CheckCircle, Loader } from 'lucide-react'

export default function AuthSuccessPage() {
  const router = useRouter()
  const { user, loading } = useAuth()

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        router.push(user ? '/community/onboarding' : '/auth/login')
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [router, user, loading])

  if (loading) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center">
          <Loader className="h-8 w-8 animate-spin text-blue-600" />
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-teal-100">
        <div className="text-center">
          <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Authentication Successful!
          </h1>
          <p className="text-gray-600 mb-6">
            Welcome to Newar Samaj Community! Redirecting you...
          </p>
          <Loader className="h-8 w-8 animate-spin text-blue-600 mx-auto" />
        </div>
      </div>
    </PageLayout>
  )
}