"use client"
import PageLayout from '@/components/layout/page-layout'
// import { TempleModal } from './temples/page'
// import { EnhancedTemplesSection } from "@/components/culture/enhanced-temples-section"
import { EnhancedFestivalsSection } from "@/components/culture/enhanced-festivals-section"
import { CulturalPractices } from "@/components/culture/cultural-practices"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, Palette, BookOpen, Users, Heart, Landmark, Sparkles, Drum, ArrowRight } from "lucide-react"
import { useTranslation } from '@/hooks/useTranslation'
import Link from "next/link"
import { TemplesGallery } from '@/components/culture/temples-gallery'

export default function CulturePage() {
  const { t } = useTranslation()

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              {t('culture.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('culture.description')}
            </p>
          </div>

          {/* Quick Stats with Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <Link href="/culture/temples" className="block transform hover:scale-105 transition-transform duration-300">
              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-blue-50 to-indigo-100 cursor-pointer group">
                <CardContent className="p-6">
                  <Landmark className="h-10 w-10 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-blue-700">50+</div>
                  <div className="text-sm text-blue-600 font-medium flex items-center justify-center gap-1">
                    {t('culture.stats.temples')}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/culture/arts" className="block transform hover:scale-105 transition-transform duration-300">
              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-orange-50 to-red-100 cursor-pointer group">
                <CardContent className="p-6">
                  <Palette className="h-10 w-10 text-orange-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-orange-700">100+</div>
                  <div className="text-sm text-orange-600 font-medium flex items-center justify-center gap-1">
                    {t('culture.stats.artForms')}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/culture/heritage" className="block transform hover:scale-105 transition-transform duration-300">
              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-purple-50 to-pink-100 cursor-pointer group">
                <CardContent className="p-6">
                  <Sparkles className="h-10 w-10 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-purple-700">1000+</div>
                  <div className="text-sm text-purple-600 font-medium flex items-center justify-center gap-1">
                    {t('culture.stats.heritageYears')}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/culture/festivals" className="block transform hover:scale-105 transition-transform duration-300">
              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-green-50 to-teal-100 cursor-pointer group">
                <CardContent className="p-6">
                  <Users className="h-10 w-10 text-green-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-green-700">25+</div>
                  <div className="text-sm text-green-600 font-medium flex items-center justify-center gap-1">
                    {t('culture.stats.festivals')}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="temples" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto h-14 bg-white/80 backdrop-blur-sm border">
              <TabsTrigger 
                value="temples" 
                className="flex items-center gap-3 data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all duration-300"
              >
                <Landmark className="h-5 w-5" />
                {t('culture.tabs.temples')}
              </TabsTrigger>
              <TabsTrigger 
                value="festivals" 
                className="flex items-center gap-3 data-[state=active]:bg-orange-500 data-[state=active]:text-white transition-all duration-300"
              >
                <Sparkles className="h-5 w-5" />
                {t('culture.tabs.festivals')}
              </TabsTrigger>
              <TabsTrigger 
                value="practices" 
                className="flex items-center gap-3 data-[state=active]:bg-purple-500 data-[state=active]:text-white transition-all duration-300"
              >
                <Drum className="h-5 w-5" />
                {t('culture.tabs.practices')}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="temples" className="space-y-8">
              <TemplesGallery />  
            </TabsContent>

            <TabsContent value="festivals" className="space-y-8">
              <EnhancedFestivalsSection />
            </TabsContent>

            <TabsContent value="practices" className="space-y-8">
              <CulturalPractices />
            </TabsContent>
          </Tabs>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-primary/20 backdrop-blur-sm">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {t('culture.cta.title')}
                </h2>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed max-w-3xl mx-auto">
                  {t('culture.cta.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/community/join">
                    <Button size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                      <Heart className="mr-2 h-5 w-5" />
                      {t('culture.cta.joinCommunity')}
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                    <BookOpen className="mr-2 h-5 w-5" />
                    {t('culture.cta.learnMore')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}