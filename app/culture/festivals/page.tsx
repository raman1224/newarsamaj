// app/culture/festivals/page.tsx
"use client"
import PageLayout from '@/components/layout/page-layout'
import { EnhancedFestivalsSection } from "@/components/culture/enhanced-festivals-section"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Users, Download } from "lucide-react"
import { useRouter } from 'next/navigation'
import { useTranslation } from '@/hooks/useTranslation'
import { Card, CardContent } from "@/components/ui/card"
import React from 'react'

export default function FestivalsPage() {
  const router = useRouter()
  const { t } = useTranslation()

  const[isDarkMode, setIsDarkMode] = React.useState(false)
  const handleThemeToggle =()=>{
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  const downloadPatro = () => {
    window.open('https://giwmscdntwo.gov.np/media/pages/files/NPNS-Newari_Tithi_2082_7vfhhks.pdf', '_blank')
  }

  return (
    <PageLayout isDarkMode={isDarkMode} onThemeToggle={handleThemeToggle}>
      <div className="min-h-screen bg-gradient-to-br from-red-50/20 via-white to-yellow-50/20">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Button variant="ghost" onClick={() => router.back()} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              {t('common.back')}
            </Button>
            <div className="text-right">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                Newar Festivals & Celebrations
              </h1>
              <p className="text-muted-foreground mt-2">25+ annual festivals with detailed information</p>
            </div>
          </div>

          {/* Newar Patro Banner */}
          <Card className="bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-200 mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-yellow-100 rounded-full">
                    <Calendar className="h-8 w-8 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Newari Tithi Patro 2082</h3>
                    <p className="text-muted-foreground">Official Newari calendar with festival dates and tithi</p>
                  </div>
                </div>
                <Button onClick={downloadPatro} className="mt-4 md:mt-0 bg-yellow-600 hover:bg-yellow-700">
                  <Download className="mr-2 h-4 w-4" />
                  Download Patro
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <EnhancedFestivalsSection />
        </div>
      </div>
    </PageLayout>
  )
}