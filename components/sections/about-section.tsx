// components/sections/about-section.tsx
"use client"
import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { History, Target, Heart, Users, MessageCircle, BookOpen, Award, ChevronLeft, ChevronRight, ArrowRight, Sparkles, Zap, Globe, TargetIcon } from "lucide-react"
import { useTranslation } from '@/hooks/useTranslation'
import Link from "next/link"

export function AboutSection() {
  const [currentLeader, setCurrentLeader] = React.useState(0)
  const { t } = useTranslation()

  const nextLeader = () => {
    setCurrentLeader((prev) => (prev + 1) % 4)
  }

  const prevLeader = () => {
    setCurrentLeader((prev) => (prev - 1 + 4) % 4)
  }

  // Get leaders data from translations
  const getLeaders = () => {
    try {
      const leaders = [];
      for (let i = 0; i < 4; i++) {
        leaders.push({
          name: t(`about.leadership.leaders.${i}.name`),
          role: t(`about.leadership.leaders.${i}.role`),
          image: t(`about.leadership.leaders.${i}.image`),
          bio: t(`about.leadership.leaders.${i}.bio`)
        });
      }
      return leaders;
    } catch {
      // Fallback leaders data
      return [
        {
          name: "Mahesh Dangol",
          role: "अध्यक्ष  (President)",
          image: "/mahesh.jpg",
          bio: "Leading the Newar Samaj with vision and dedication"
        },
        {
          name: "Gyan Kumar Dangol",
          role: "उपाध्यक्ष  (Vice President)", 
          image: "/gyan.jpg",
          bio: "Managing operations and community relations"
        },
        {
          name: "Ramhari Dangol",
          role: "बैठक संयोजक (Meeting Coordinator)",
          image: "/ramhari.jpg",
          bio: "Organizing community events and operations"
        },
        {
          name: "Prakash Dangol",
          role: "Social Media & Marketing",
          image: "/prakash.jpg",
          bio: "Expanding digital presence and opportunities"
        }
      ];
    }
  }

  const leaders = getLeaders();
  const aboutLinks = [
    {
      icon: History,
      href: "/about/history",
      color: "text-blue-600"
    },
    {
      icon: Target,
      href: "/about/mission", 
      color: "text-green-600"
    },
    {
      icon: Heart,
      href: "/about/values",
      color: "text-red-600"
    },
    {
      icon: Users,
      href: "/about/leadership",
      color: "text-purple-600"
    }
  ]

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-white via-blue-50/30 to-amber-50/20 dark:from-gray-900 dark:via-blue-950/30 dark:to-amber-950/20 transition-all duration-500 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-gradient-to-r from-accent/5 to-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-gradient-to-r from-amber-500/3 to-orange-500/3 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Enhanced Section Header with 3D text effect */}
        <div className="text-center mb-16">
          <Badge 
            variant="outline" 
            className="mb-4 px-4 py-2 text-sm font-semibold bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <Sparkles className="w-3 h-3 mr-2 inline" />
            {t('about.badge')}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-primary to-gray-900 dark:from-white dark:via-primary dark:to-white bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300">
            {t('about.title.part1')} <span className="text-primary drop-shadow-lg">{t('about.title.part2')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transform hover:translate-y-1 transition-transform duration-300">
            {t('about.subtitle')}
          </p>
        </div>

        {/* 3D Quick Navigation Cards with enhanced hover effects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {aboutLinks.map((link, index) => (
            <Link key={index} href={link.href} className="block group relative">
              <Card className="relative overflow-hidden border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 cursor-pointer group-hover:scale-105 transform-style-preserve-3d">
                {/* 3D Hover Effect Layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                
                {/* Animated Border Gradient */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary via-accent to-secondary p-[2px]">
                  <div className="w-full h-full bg-white/80 dark:bg-gray-900/80 rounded-xl"></div>
                </div>

                <CardContent className="p-6 text-center relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      <link.icon className={`w-8 h-8 ${link.color} transform group-hover:scale-125 transition-transform duration-300`} />
                    </div>
                  </div>
                  <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors duration-300 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                    {t(`about.links.${index}.title`)}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {t(`about.links.${index}.description`)}
                  </p>
                  <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300 inline-flex">
                    <ArrowRight className="w-4 h-4 text-primary transform group-hover:translate-x-2 group-hover:scale-125 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* 3D Mission & Vision Cards with perspective effects */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Link href="/about/mission">
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-blue-50/80 to-indigo-100/80 dark:from-blue-900/20 dark:to-indigo-900/20 backdrop-blur-xl cursor-pointer transform-style-preserve-3d perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div className="p-3 bg-gradient-to-br from-primary to-primary/80 rounded-xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                    {t('about.mission.title')}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('about.mission.description')}
                </p>
                <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  {t('common.learnMore')} 
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </CardContent>
              
              {/* 3D Hover Effect */}
              <div className="absolute inset-0 transform group-hover:scale-105 group-hover:rotate-x-5 group-hover:rotate-y-5 transition-transform duration-500 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl"></div>
            </Card>
          </Link>

          <Link href="/about/mission">
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-green-50/80 to-emerald-100/80 dark:from-green-900/20 dark:to-emerald-900/20 backdrop-blur-xl cursor-pointer transform-style-preserve-3d perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div className="p-3 bg-gradient-to-br from-accent to-accent/80 rounded-xl group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300 shadow-lg">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-accent transition-colors duration-300 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                    {t('about.vision.title')}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('about.vision.description')}
                </p>
                <div className="flex items-center text-accent font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  {t('common.learnMore')}
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </CardContent>
              
              {/* 3D Hover Effect */}
              <div className="absolute inset-0 transform group-hover:scale-105 group-hover:-rotate-x-5 group-hover:rotate-y-5 transition-transform duration-500 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-xl"></div>
            </Card>
          </Link>
        </div>

        {/* Enhanced Leadership Section with 3D Carousel */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
              {t('about.leadership.title')}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {t('about.leadership.description')}
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="relative overflow-hidden border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform-style-preserve-3d">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="relative inline-block">
                  <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-primary/20 hover:ring-primary/40 transition-all duration-300 transform hover:scale-110 hover:rotate-3">
                    <AvatarImage
                      src={leaders[currentLeader].image}
                      alt={leaders[currentLeader].name}
                      className="transform hover:scale-110 transition-transform duration-500"
                    />
                    <AvatarFallback className="text-2xl bg-gradient-to-br from-primary to-accent text-white">
                      {leaders[currentLeader].name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full animate-ping"></div>
                </div>
                <h4 className="text-2xl font-bold mb-2 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                  {leaders[currentLeader].name}
                </h4>
                <Badge variant="secondary" className="mb-4 text-base py-1 px-3 bg-gradient-to-r from-primary/20 to-accent/20 border-0">
                  {leaders[currentLeader].role}
                </Badge>
                <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
                  {leaders[currentLeader].bio}
                </p>
              </CardContent>
            </Card>

            {/* Enhanced Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 hover:scale-110 hover:rotate-12 transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-0 shadow-lg"
              onClick={prevLeader}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 hover:scale-110 hover:-rotate-12 transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-0 shadow-lg"
              onClick={nextLeader}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>

            {/* Enhanced Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {leaders.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-150 ${
                    index === currentLeader 
                      ? "bg-gradient-to-r from-primary to-accent scale-150" 
                      : "bg-muted hover:bg-primary/50"
                  }`}
                  onClick={() => setCurrentLeader(index)}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/about/leadership">
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl"
              >
                {t('about.leadership.viewFullTeam')}
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>

        {/* 3D Community Stats with Holographic Effect */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: Users, color: "blue", value: t('about.stats.members'), label: t('about.stats.membersLabel') },
            { icon: BookOpen, color: "green", value: t('about.stats.articles'), label: t('about.stats.articlesLabel') },
            { icon: Award, color: "purple", value: t('about.stats.countries'), label: t('about.stats.countriesLabel') }
          ].map((stat, index) => (
            <div 
              key={index}
              className="relative group text-center p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 transform-style-preserve-3d"
            >
              {/* Holographic Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
              
              <stat.icon className={`w-12 h-12 text-${stat.color}-600 dark:text-${stat.color}-400 mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300`} />
              <div className={`text-3xl font-bold text-${stat.color}-600 dark:text-${stat.color}-400 mb-2 transform group-hover:scale-105 transition-transform duration-300`}>
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Final CTA with 3D Perspective */}
        <Card className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-0 backdrop-blur-xl transform-style-preserve-3d perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          <CardContent className="p-12 text-center relative z-10">
            <div className="mb-6">
              <div className="p-4 bg-gradient-to-br from-primary to-accent rounded-full w-fit mx-auto mb-4 transform hover:scale-110 hover:rotate-12 transition-transform duration-300">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                {t('about.cta.title')}
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-lg leading-relaxed">
                {t('about.cta.description')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <Heart className="w-5 h-5 mr-2 relative z-10" />
                  <span className="relative z-10">{t('about.cta.signUp')}</span>
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary text-primary hover:bg-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl"
                >
                  {t('about.cta.contact')}
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}