// components/language/translation-tool.tsx
"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Languages, ArrowRightLeft, Loader2 } from "lucide-react"

export default function TranslationTool() {
  const [inputText, setInputText] = useState('')
  const [fromLang, setFromLang] = useState('en')
  const [toLang, setToLang] = useState('new')
  const [translatedText, setTranslatedText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      setError('Please enter text to translate')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: inputText,
          fromLang: fromLang,
          toLang: toLang
        }),
      })

      if (!response.ok) {
        throw new Error('Translation failed')
      }

      const data = await response.json()
      setTranslatedText(data.translation)
    } catch (error) {
      console.error('Translation error:', error)
      setError('Failed to translate. Please try again.')
      setTranslatedText('')
    } finally {
      setIsLoading(false)
    }
  }

  const swapLanguages = () => {
    setFromLang(toLang)
    setToLang(fromLang)
    setInputText(translatedText)
    setTranslatedText(inputText)
  }

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'ne', label: 'Nepali' },
    { value: 'new', label: 'Newar' }
  ]

  const getLanguageName = (code: string) => {
    return languageOptions.find(opt => opt.value === code)?.label || code
  }

  return (
    <Card className="glass border-0 mt-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Languages className="h-5 w-5" />
          Quick Translation Tool
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Instantly translate between English, Nepali, and Newar
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          {/* From Language */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium mb-2 block">
              From: {getLanguageName(fromLang)}
            </label>
            <Select value={fromLang} onValueChange={setFromLang}>
              <SelectTrigger>
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                {languageOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={swapLanguages}
              className="h-10 w-10"
              disabled={isLoading}
            >
              <ArrowRightLeft className="h-4 w-4" />
            </Button>
          </div>

          {/* To Language */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium mb-2 block">
              To: {getLanguageName(toLang)}
            </label>
            <Select value={toLang} onValueChange={setToLang}>
              <SelectTrigger>
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                {languageOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Text Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={`Enter text in ${getLanguageName(fromLang)}...`}
              disabled={isLoading}
              className="min-h-[100px] resize-y w-full rounded-md border border-input px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              rows={4}
            />
          </div>
          <div>
            <textarea
              value={translatedText}
              readOnly
              placeholder={`Translation in ${getLanguageName(toLang)} will appear here...`}
              className="min-h-[100px] resize-y bg-muted w-full rounded-md border border-input px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              rows={4}
            />
          </div>
        </div>

        {error && (
          <p className="text-sm text-red-500 mt-2">{error}</p>
        )}

        <Button 
          onClick={handleTranslate} 
          disabled={isLoading || !inputText.trim()}
          className="mt-4"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Translating...
            </>
          ) : (
            'Translate'
          )}
        </Button>

        {/* Quick Examples */}
        <div className="mt-4">
          <p className="text-sm text-muted-foreground mb-2">Try these examples:</p>
          <div className="flex flex-wrap gap-2">
            {['hello', 'thank you', 'how are you', 'good morning'].map(example => (
              <Button
                key={example}
                variant="outline"
                size="sm"
                onClick={() => {
                  setInputText(example)
                  setFromLang('en')
                  setToLang('new')
                }}
                className="text-xs h-8"
              >
                {example}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}