// components/language/flashcard-system.tsx
"use client";

import PageLayout from '@/components/layout/page-layout';
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Volume2, RotateCcw, Check, X, Brain, ChevronLeft, ChevronRight, Shuffle, Home } from "lucide-react";
import { useTranslation } from '@/hooks/useTranslation';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface FlashcardData {
  id: number;
  newaWord: string;
  nepaliMeaning: string;
  englishMeaning: string;
  pronunciation: string;
  category: string;
  difficulty: "easy" | "medium" | "hard";
  exampleSentence?: string;
}

const sampleCards: FlashcardData[] = [
  {
    id: 1,
    newaWord: "ज्वजलपा",
    nepaliMeaning: "नमस्कार",
    englishMeaning: "Hello/Greetings",
    pronunciation: "jwa-ja-la-pa",
    category: "Greetings",
    difficulty: "easy",
    exampleSentence: "ज्वजलपा! तपाईंलाई कस्तो छ? (Hello! How are you?)"
  },
  {
    id: 2,
    newaWord: "छेँ",
    nepaliMeaning: "घर",
    englishMeaning: "House/Home",
    pronunciation: "chhen",
    category: "Family & Home",
    difficulty: "easy",
    exampleSentence: "मेरो छेँ यहाँ छ। (My house is here.)"
  }
];

export default function FlashcardSystem() {
  const { t } = useTranslation();
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [cards, setCards] = useState<FlashcardData[]>(sampleCards);
  const [isShuffled, setIsShuffled] = useState(false);

  const currentCard = cards[currentCardIndex];
  const progress = ((currentCardIndex + 1) / cards.length) * 100;

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const playPronunciation = (text: string) => {
    if ("speechSynthesis" in window) {
      speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ne-NP";
      utterance.rate = 0.8;
      const voices = speechSynthesis.getVoices();
      const nepaliVoice = voices.find(voice => 
        voice.lang === 'ne-NP' || voice.lang.startsWith('ne-')
      );
      if (nepaliVoice) {
        utterance.voice = nepaliVoice;
      }
      speechSynthesis.speak(utterance);
    }
  };

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
    if (!showTranslation) {
      setShowTranslation(true);
    }
  };

  const handleAnswer = (isCorrect: boolean) => {
    setTotalAnswered((prev) => prev + 1);
    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
      
      if (typeof window !== 'undefined') {
        const userStats = JSON.parse(localStorage.getItem('user-stats') || '{}');
        const updatedStats = {
          ...userStats,
          wordsLearned: (userStats.wordsLearned || 0) + 1,
          xp: (userStats.xp || 0) + 5
        };
        localStorage.setItem('user-stats', JSON.stringify(updatedStats));
      }
    }

    setTimeout(() => {
      if (currentCardIndex < cards.length - 1) {
        setCurrentCardIndex((prev) => prev + 1);
        setIsFlipped(false);
        setShowTranslation(false);
      }
    }, 1000);
  };

  const resetSession = () => {
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setShowTranslation(false);
    setCorrectAnswers(0);
    setTotalAnswered(0);
  };

  const shuffleCards = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setIsShuffled(true);
    resetSession();
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "hard":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('@/utils/achievements').then(({ checkAchievements }) => {
        checkAchievements();
      });
    }
  }, [correctAnswers, totalAnswered]);

  if (currentCardIndex >= cards.length) {
    return (
      <PageLayout isDarkMode={isDarkMode} onThemeToggle={handleThemeToggle}>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Session Complete!</h2>
              <p className="text-xl text-muted-foreground">
                You got {correctAnswers} out of {totalAnswered} correct
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <div className="text-4xl font-bold text-primary mb-2">
                {Math.round((correctAnswers / totalAnswered) * 100)}%
              </div>
              <p className="text-muted-foreground">Accuracy Score</p>
            </div>

            <div className="flex gap-4 justify-center">
              <Button onClick={resetSession} size="lg">
                <RotateCcw className="mr-2 h-5 w-5" />
                Practice Again
              </Button>
              <Link href="/language/learn">
                <Button variant="outline" size="lg">
                  <Home className="mr-2 h-5 w-5" />
                  Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout isDarkMode={isDarkMode} onThemeToggle={handleThemeToggle}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Link href="/language/learn">
                <Button variant="outline" size="sm">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <h1 className="text-3xl font-bold">Interactive Flashcards</h1>
            </div>
            <Badge variant="outline">
              {currentCardIndex + 1} of {cards.length}
            </Badge>
          </div>
          <Progress value={progress} className="mb-4" />
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Accuracy: {totalAnswered > 0 ? Math.round((correctAnswers / totalAnswered) * 100) : 0}%</span>
            <Button variant="outline" size="sm" onClick={shuffleCards} className="ml-auto">
              <Shuffle className="h-4 w-4 mr-2" />
              {isShuffled ? "Shuffled" : "Shuffle"}
            </Button>
          </div>
        </div>

        {/* Flashcard */}
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <div
              className={`relative w-full h-96 transition-all duration-500 cursor-pointer ${
                isFlipped ? "transform rotate-y-180" : ""
              }`}
              onClick={handleCardFlip}
            >
              {/* Front of card */}
              <Card className={`absolute inset-0 shadow-2xl border-0 ${
                isFlipped ? "opacity-0" : "opacity-100"
              } transition-opacity duration-300`}>
                <CardContent className="h-full flex flex-col items-center justify-center p-8 text-center">
                  <Badge className={`mb-4 ${getDifficultyColor(currentCard.difficulty)}`}>
                    {currentCard.category} • {currentCard.difficulty}
                  </Badge>

                  <div className="text-6xl font-bold mb-6">{currentCard.newaWord}</div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      playPronunciation(currentCard.newaWord);
                    }}
                    className="mb-4"
                  >
                    <Volume2 className="mr-2 h-4 w-4" />
                    Pronunciation
                  </Button>

                  <p className="text-muted-foreground text-sm">/{currentCard.pronunciation}/</p>
                  <div className="mt-8 text-muted-foreground">Click to reveal meaning</div>
                </CardContent>
              </Card>

              {/* Back of card */}
              <Card className={`absolute inset-0 shadow-2xl border-0 ${
                isFlipped ? "opacity-100" : "opacity-0"
              } transition-opacity duration-300`}>
                <CardContent className="h-full flex flex-col items-center justify-center p-8 text-center">
                  <div className="space-y-6 w-full">
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-2">Nepali Meaning</p>
                      <p className="text-2xl font-semibold">{currentCard.nepaliMeaning}</p>
                    </div>

                    <div className="p-4 bg-accent/5 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-2">English Meaning</p>
                      <p className="text-xl font-semibold">{currentCard.englishMeaning}</p>
                    </div>

                    {currentCard.exampleSentence && (
                      <div className="p-4 bg-muted/5 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-2">Example Sentence</p>
                        <p className="text-sm">{currentCard.exampleSentence}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Action Buttons */}
          {showTranslation && (
            <div className="flex gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleAnswer(false)}
                className="hover:bg-red-50 hover:border-red-200 dark:hover:bg-red-900/20"
              >
                <X className="mr-2 h-5 w-5" />
                Need More Practice
              </Button>
              <Button size="lg" onClick={() => handleAnswer(true)} className="hover:bg-green-600">
                <Check className="mr-2 h-5 w-5" />
                Got It Right!
              </Button>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              onClick={() => setCurrentCardIndex(prev => Math.max(0, prev - 1))}
              disabled={currentCardIndex === 0}
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            <Button
              variant="outline"
              onClick={() => setCurrentCardIndex(prev => Math.min(cards.length - 1, prev + 1))}
              disabled={currentCardIndex === cards.length - 1}
            >
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          {/* AI Tutor Hint */}
          <div className="mt-8 p-4 bg-muted/50 rounded-lg">
            <div className="flex items-start gap-3">
              <Brain className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium text-sm mb-1">AI Tutor Tip:</p>
                <p className="text-sm text-muted-foreground">
                  The word "{currentCard.newaWord}" is commonly used in daily conversations. Try using it in a sentence to
                  better remember it!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}