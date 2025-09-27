// components/ai/quiz-modal.tsx
"use client"

import * as React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useTranslation } from '@/hooks/useTranslation'

interface QuizModalProps {
  isOpen: boolean
  onClose: () => void
  language: string
}

export function QuizModal({ isOpen, onClose, language }: QuizModalProps) {
  const { t } = useTranslation()
  const [currentQuestion, setCurrentQuestion] = React.useState(0)
  const [score, setScore] = React.useState(0)
  const [showResult, setShowResult] = React.useState(false)

  const questions = [
    {
      question: "quiz_question_1",
      options: [
        "quiz_option_1_1",
        "quiz_option_1_2",
        "quiz_option_1_3",
        "quiz_option_1_4"
      ],
      correctAnswer: 0
    },
    {
      question: "quiz_question_2",
      options: [
        "quiz_option_2_1",
        "quiz_option_2_2",
        "quiz_option_2_3",
        "quiz_option_2_4"
      ],
      correctAnswer: 2
    },
    {
      question: "quiz_question_3",
      options: [
        "quiz_option_3_1",
        "quiz_option_3_2",
        "quiz_option_3_3",
        "quiz_option_3_4"
      ],
      correctAnswer: 1
    }
  ]

  const handleAnswer = (selectedIndex: number) => {
    if (selectedIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t('quiz.title')}</DialogTitle>
        </DialogHeader>
        
        {!showResult ? (
          <div className="py-4">
            <h3 className="text-lg font-medium mb-4">
              {t(questions[currentQuestion].question)}
            </h3>
            <div className="space-y-2">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => handleAnswer(index)}
                >
                  {t(option)}
                </Button>
              ))}
            </div>
            <div className="mt-4 text-sm text-gray-500">
              {t(`quiz.progress_${currentQuestion + 1}_of_${questions.length}`)}
            </div>
          </div>
        ) : (
          <div className="py-4 text-center">
            <h3 className="text-xl font-bold mb-4">{t('quiz.result_title')}</h3>
            <p className="text-lg mb-4">
              {t(`quiz.score_${score}_of_${questions.length}`)}
            </p>
            <div className="flex gap-2 justify-center">
              <Button onClick={handleRestart}>
                {t('quiz.try_again')}
              </Button>
              <Button variant="outline" onClick={onClose}>
                {t('quiz.close')}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}