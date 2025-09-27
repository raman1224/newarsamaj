// app/donate/page.tsx (updated with dark mode)
"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/context/LanguageContext"
import { useTranslation } from '@/hooks/useTranslation'
import PageLayout from '@/components/layout/page-layout'
import { Heart, Shield, History, BookOpen, Users, Home, Calendar, Gift, Star, CheckCircle, Zap, Target } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function DonatePage() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [donationAmount, setDonationAmount] = React.useState("")
  const [paymentMethod, setPaymentMethod] = React.useState("")
  const [showSuccess, setShowSuccess] = React.useState(false)
  const [donationType, setDonationType] = React.useState("general")
  const [isDarkMode, setIsDarkMode] = React.useState(false)
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    address: ""
  })
  const { t } = useTranslation()

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/donate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          amount: donationAmount,
          paymentMethod,
          donationType,
          timestamp: new Date().toISOString()
        }),
      })

      const data = await response.json()

      if (data.success) {
        setShowSuccess(true)
        setFormData({ name: "", email: "", message: "", phone: "", address: "" })
        setDonationAmount("")
        setPaymentMethod("")
        setDonationType("general")
        setTimeout(() => setShowSuccess(false), 5000)
      } else {
        alert('There was an error processing your donation: ' + data.error)
      }
    } catch (error) {
      console.error('Donation error:', error)
      alert('There was an error processing your donation. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <PageLayout isDarkMode={isDarkMode} onThemeToggle={handleThemeToggle}>
      {/* Success Alert */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
        >
          <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 shadow-2xl">
            <CardContent className="p-4 flex items-center gap-3">
              <CheckCircle className="h-6 w-6" />
              <div>
                <h3 className="font-bold">{t('donate.success.title')}</h3>
                <p className="text-sm">{t('donate.success.message')}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      <section className="py-20 px-4 min-h-screen bg-gradient-to-br from-background via-blue-50/30 to-primary/10 dark:from-gray-900 dark:via-blue-950/30 dark:to-primary/20">
        <div className="container mx-auto max-w-6xl">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              {t('donate.title')}
            </h1>
            <p className="text-xl text-muted-foreground dark:text-muted-foreground max-w-3xl mx-auto">
              {t('donate.description')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Features */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {/* Impact Cards */}
              <motion.div variants={itemVariants}>
                <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/50 dark:to-indigo-900/50 transform hover:-translate-y-1 dark:border-blue-800/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-500/10 dark:bg-blue-500/20 p-3 rounded-full">
                        <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2 text-foreground dark:text-foreground">
                          {t('donate.impact.futureWork')}
                        </h3>
                        <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                          {t('donate.impact.futureWorkDesc')}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/50 dark:to-emerald-900/50 transform hover:-translate-y-1 dark:border-green-800/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-500/10 dark:bg-green-500/20 p-3 rounded-full">
                        <History className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2 text-foreground dark:text-foreground">
                          {t('donate.impact.recorded')}
                        </h3>
                        <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                          {t('donate.impact.recordedDesc')}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link href="/language/learn" className="block">
                  <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-950/50 dark:to-violet-900/50 transform hover:-translate-y-1 cursor-pointer dark:border-purple-800/30">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-purple-500/10 dark:bg-purple-500/20 p-3 rounded-full">
                          <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-foreground dark:text-foreground">
                            {t('donate.impact.languageEducation')}
                          </h3>
                          <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                            {t('donate.impact.languageEducationDesc')}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-950/50 dark:to-amber-900/50 transform hover:-translate-y-1 dark:border-orange-800/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-500/10 dark:bg-orange-500/20 p-3 rounded-full">
                        <Users className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2 text-foreground dark:text-foreground">
                          {t('donate.impact.deathSupport')}
                        </h3>
                        <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                          {t('donate.impact.deathSupportDesc')}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link href="/culture" className="block">
                  <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-red-50 to-pink-100 dark:from-red-950/50 dark:to-pink-900/50 transform hover:-translate-y-1 cursor-pointer dark:border-red-800/30">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-red-500/10 dark:bg-red-500/20 p-3 rounded-full">
                          <Home className="h-6 w-6 text-red-600 dark:text-red-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-foreground dark:text-foreground">
                            {t('donate.impact.culturePreservation')}
                          </h3>
                          <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                            {t('donate.impact.culturePreservationDesc')}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </motion.div>

            {/* Middle Column - Donation Form */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm dark:border-gray-700">
                <CardHeader className="text-center bg-gradient-to-r from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 border-b dark:border-gray-700">
                  <CardTitle className="text-3xl flex items-center justify-center gap-3 text-foreground dark:text-foreground">
                    <Heart className="h-8 w-8 text-red-500 dark:text-red-400" />
                    {t('donate.form.title')}
                    <Shield className="h-8 w-8 text-green-500 dark:text-green-400" />
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground dark:text-muted-foreground">
                    {t('donate.form.subtitle')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Donation Type */}
                    <div className="grid gap-2">
                      <Label htmlFor="donationType" className="text-lg font-semibold text-foreground dark:text-foreground">
                        {t('donate.form.donationType')}
                      </Label>
                      <Select value={donationType} onValueChange={setDonationType}>
                        <SelectTrigger className="h-12 dark:bg-gray-800 dark:border-gray-600 dark:text-foreground">
                          <SelectValue placeholder="Select donation purpose" />
                        </SelectTrigger>
                        <SelectContent className="dark:bg-gray-800 dark:border-gray-600">
                          <SelectItem value="general" className="dark:text-foreground dark:hover:bg-gray-700">
                            {t('donate.types.general')}
                          </SelectItem>
                          <SelectItem value="deathSupport" className="dark:text-foreground dark:hover:bg-gray-700">
                            {t('donate.types.deathSupport')}
                          </SelectItem>
                          <SelectItem value="guthi" className="dark:text-foreground dark:hover:bg-gray-700">
                            {t('donate.types.guthi')}
                          </SelectItem>
                          <SelectItem value="culture" className="dark:text-foreground dark:hover:bg-gray-700">
                            {t('donate.types.culture')}
                          </SelectItem>
                          <SelectItem value="education" className="dark:text-foreground dark:hover:bg-gray-700">
                            {t('donate.types.education')}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="grid gap-2">
                        <Label htmlFor="name" className="text-foreground dark:text-foreground">
                          {t('donate.form.name')}
                        </Label>
                        <Input 
                          id="name" 
                          name="name"
                          placeholder="John Doe" 
                          value={formData.name}
                          onChange={handleInputChange}
                          required 
                          className="h-12 border-2 focus:border-primary transition-colors dark:bg-gray-800 dark:border-gray-600 dark:text-foreground dark:placeholder:text-gray-400"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email" className="text-foreground dark:text-foreground">
                          {t('donate.form.email')}
                        </Label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email" 
                          placeholder="john@example.com" 
                          value={formData.email}
                          onChange={handleInputChange}
                          required 
                          className="h-12 border-2 focus:border-primary transition-colors dark:bg-gray-800 dark:border-gray-600 dark:text-foreground dark:placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="grid gap-2">
                        <Label htmlFor="phone" className="text-foreground dark:text-foreground">
                          {t('donate.form.phone')}
                        </Label>
                        <Input 
                          id="phone" 
                          name="phone"
                          type="tel" 
                          placeholder="+977 98XXXXXXX" 
                          value={formData.phone}
                          onChange={handleInputChange}
                          required 
                          className="h-12 border-2 focus:border-primary transition-colors dark:bg-gray-800 dark:border-gray-600 dark:text-foreground dark:placeholder:text-gray-400"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="amount" className="text-foreground dark:text-foreground">
                          {t('donate.form.amount')} (NPR)
                        </Label>
                        <Input 
                          id="amount" 
                          name="amount"
                          type="number" 
                          placeholder="1000" 
                          value={donationAmount}
                          onChange={(e) => setDonationAmount(e.target.value)}
                          required 
                          className="h-12 border-2 focus:border-primary transition-colors dark:bg-gray-800 dark:border-gray-600 dark:text-foreground dark:placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="address" className="text-foreground dark:text-foreground">
                        {t('donate.form.address')}
                      </Label>
                      <Input 
                        id="address" 
                        name="address"
                        placeholder="Your address (optional)" 
                        value={formData.address}
                        onChange={handleInputChange}
                        className="h-12 border-2 focus:border-primary transition-colors dark:bg-gray-800 dark:border-gray-600 dark:text-foreground dark:placeholder:text-gray-400"
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="paymentMethod" className="text-lg font-semibold text-foreground dark:text-foreground">
                        {t('donate.form.paymentMethod')}
                      </Label>
                      <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                        <SelectTrigger className="h-12 dark:bg-gray-800 dark:border-gray-600 dark:text-foreground">
                          <SelectValue placeholder="Select payment method" />
                        </SelectTrigger>
                        <SelectContent className="dark:bg-gray-800 dark:border-gray-600">
                          <SelectItem value="esewa" className="flex items-center gap-2 dark:text-foreground dark:hover:bg-gray-700">
                            <Zap className="h-4 w-4 text-orange-500" />
                            {t('donate.methods.esewa')}
                          </SelectItem>
                          <SelectItem value="imepay" className="dark:text-foreground dark:hover:bg-gray-700">
                            {t('donate.methods.imepay')}
                          </SelectItem>
                          <SelectItem value="bank" className="dark:text-foreground dark:hover:bg-gray-700">
                            {t('donate.methods.bank')}
                          </SelectItem>
                          <SelectItem value="credit" className="dark:text-foreground dark:hover:bg-gray-700">
                            {t('donate.methods.credit')}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="message" className="text-foreground dark:text-foreground">
                        {t('donate.form.message')}
                      </Label>
                      <Textarea 
                        id="message" 
                        name="message"
                        placeholder="Your message or dedication (optional)" 
                        value={formData.message}
                        onChange={handleInputChange}
                        className="min-h-24 border-2 focus:border-primary transition-colors dark:bg-gray-800 dark:border-gray-600 dark:text-foreground dark:placeholder:text-gray-400"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl dark:from-primary dark:to-accent dark:hover:from-primary/90 dark:hover:to-accent/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          {t('donate.form.processing')}
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Heart className="h-5 w-5" />
                          {t('donate.form.submit')}
                          <Star className="h-5 w-5" />
                        </div>
                      )}
                    </Button>
                  </form>

                  {/* Payment method instructions */}
                  {paymentMethod && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/50 dark:to-green-950/50 rounded-lg border-2 border-primary/20 dark:border-primary/30"
                    >
                      <h3 className="font-semibold mb-3 text-lg flex items-center gap-2 text-foreground dark:text-foreground">
                        <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
                        {t('donate.instructions.title')}
                      </h3>
                      {paymentMethod === "esewa" && (
                        <div className="text-foreground dark:text-foreground">
                          <p className="mb-2">{t('donate.instructions.esewa')}</p>
                          <p className="font-mono text-lg font-bold bg-white dark:bg-gray-800 p-2 rounded border dark:border-gray-600">
                            9801234567
                          </p>
                        </div>
                      )}
                      {paymentMethod === "imepay" && (
                        <div className="text-foreground dark:text-foreground">
                          <p className="mb-2">{t('donate.instructions.imepay')}</p>
                          <p className="font-mono text-lg font-bold bg-white dark:bg-gray-800 p-2 rounded border dark:border-gray-600">
                            9801234567
                          </p>
                        </div>
                      )}
                      {paymentMethod === "bank" && (
                        <div className="space-y-2 text-foreground dark:text-foreground">
                          <p>{t('donate.instructions.bank')}</p>
                          <div className="bg-white dark:bg-gray-800 p-3 rounded border dark:border-gray-600 space-y-1">
                            <p><strong>Bank:</strong> Nepal Investment Mega Bank</p>
                            <p><strong>Account Name:</strong> Newar Samaj Guthi</p>
                            <p><strong>Account Number:</strong> 1234567890123456</p>
                            <p><strong>Branch:</strong> Kathmandu Main Branch</p>
                          </div>
                        </div>
                      )}
                      {paymentMethod === "credit" && (
                        <p className="text-foreground dark:text-foreground">{t('donate.instructions.credit')}</p>
                      )}
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}