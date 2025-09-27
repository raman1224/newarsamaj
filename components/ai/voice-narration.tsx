// components/ai/voice-narration.tsx
"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX } from "lucide-react"

interface VoiceNarrationProps {
  text: string
  language: string
}

export function VoiceNarration({ text, language }: VoiceNarrationProps) {
  const [isPlaying, setIsPlaying] = React.useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
    // This would integrate with a text-to-speech API in a real implementation
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = language === 'ne' ? 'ne-NP' : 'en-US'
    utterance.onend = () => setIsPlaying(false)
    speechSynthesis.speak(utterance)
  }

  const handleStop = () => {
    setIsPlaying(false)
    speechSynthesis.cancel()
  }

  return (
    <Button
      variant="outline"
      onClick={isPlaying ? handleStop : handlePlay}
      className="flex items-center gap-2"
    >
      {isPlaying ? (
        <>
          <VolumeX className="h-4 w-4" />
          Stop Narration
        </>
      ) : (
        <>
          <Volume2 className="h-4 w-4" />
          Listen to this Page
        </>
      )}
    </Button>
  )
}