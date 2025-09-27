// components/sections/about-section.tsx
"use client"
import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { History, Target, Heart, Users, MessageCircle, BookOpen, Award, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { useTranslation } from '@/hooks/useTranslation'
import Link from "next/link"

export function AboutSection() {
  const [currentLeader, setCurrentLeader] = React.useState(0)
  const { t } = useTranslation()

  const nextLeader = () => {
    setCurrentLeader((prev) => (prev + 1) % 4) // Assuming 4 leaders from JSON
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
          image: "/gyan-dangol.jpg",
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
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-semibold">
            {t('about.badge')}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-primary dark:from-white dark:to-primary bg-clip-text text-transparent">
            {t('about.title.part1')} <span className="text-primary">{t('about.title.part2')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Quick Navigation Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {aboutLinks.map((link, index) => (
            <Link key={index} href={link.href} className="block transform hover:scale-105 transition-transform">
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-700 cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full group-hover:scale-110 transition-transform">
                      <link.icon className={`w-8 h-8 ${link.color}`} />
                    </div>
                  </div>
                  <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                    {t(`about.links.${index}.title`)}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t(`about.links.${index}.description`)}
                  </p>
                  <ArrowRight className="w-4 h-4 text-primary transform group-hover:translate-x-1 transition-transform mx-auto" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Link href="/about/mission">
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {t('about.mission.title')}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('about.mission.description')}
                </p>
                <div className="flex items-center text-primary font-semibold">
                  {t('common.learnMore')} 
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/about/mission">
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-accent transition-colors">
                    {t('about.vision.title')}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('about.vision.description')}
                </p>
                <div className="flex items-center text-accent font-semibold">
                  {t('common.learnMore')}
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Leadership Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              {t('about.leadership.title')}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('about.leadership.description')}
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-primary/20">
                  <AvatarImage
                    src={leaders[currentLeader].image}
                    alt={leaders[currentLeader].name}
                  />
                  <AvatarFallback className="text-2xl bg-primary text-white">
                    {leaders[currentLeader].name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h4 className="text-2xl font-bold mb-2">
                  {leaders[currentLeader].name}
                </h4>
                <Badge variant="secondary" className="mb-4 text-base py-1 px-3">
                  {leaders[currentLeader].role}
                </Badge>
                <p className="text-muted-foreground max-w-md mx-auto">
                  {leaders[currentLeader].bio}
                </p>
              </CardContent>
            </Card>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 hover:scale-110 transition-transform bg-background/80 backdrop-blur-sm"
              onClick={prevLeader}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 hover:scale-110 transition-transform bg-background/80 backdrop-blur-sm"
              onClick={nextLeader}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>

            <div className="flex justify-center mt-6 gap-2">
              {leaders.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentLeader ? "bg-primary" : "bg-muted"
                  }`}
                  onClick={() => setCurrentLeader(index)}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/about/leadership">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                {t('about.leadership.viewFullTeam')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl">
            <Users className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {t('about.stats.members')}
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              {t('about.stats.membersLabel')}
            </div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl">
            <BookOpen className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              {t('about.stats.articles')}
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              {t('about.stats.articlesLabel')}
            </div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl">
            <Award className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              {t('about.stats.countries')}
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              {t('about.stats.countriesLabel')}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-primary/20 text-center">
          <CardContent className="p-12">
            <div className="mb-6">
              <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {t('about.cta.title')}
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-lg">
                {t('about.cta.description')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all">
                  <Heart className="w-5 h-5 mr-2" />
                  {t('about.cta.signUp')}
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
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