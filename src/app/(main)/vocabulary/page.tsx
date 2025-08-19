"use client";

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Volume2 } from "lucide-react";
import { cn } from '@/lib/utils';

const vocabulary = [
  { word: "Hello", translation: "Hola", hint: "greeting" },
  { word: "Goodbye", translation: "Adiós", hint: "farewell" },
  { word: "Thank you", translation: "Gracias", hint: "gratitude" },
  { word: "Please", translation: "Por favor", hint: "request" },
  { word: "Yes", translation: "Sí", hint: "affirmation" },
];

export default function VocabularyPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % vocabulary.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + vocabulary.length) % vocabulary.length);
    }, 150);
  };

  const currentCard = vocabulary[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
            <h1 className="text-3xl font-bold font-headline">Vocabulary Flashcards</h1>
            <p className="text-muted-foreground">Click the card to flip it. Use arrows to navigate.</p>
        </div>

        <div 
          className="relative w-full h-64 [perspective:1000px]" 
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <Card 
            className={cn(
              "absolute w-full h-full transition-transform duration-500 [transform-style:preserve-3d]",
              isFlipped ? "[transform:rotateY(180deg)]" : ""
            )}
          >
            {/* Front of card */}
            <div className="absolute w-full h-full [backface-visibility:hidden] flex flex-col items-center justify-center p-6">
              <h2 className="text-4xl font-bold">{currentCard.word}</h2>
              <p className="text-muted-foreground mt-2">{currentCard.hint}</p>
              <Button variant="ghost" size="icon" className="absolute top-4 right-4">
                <Volume2 className="h-6 w-6" />
              </Button>
            </div>
            {/* Back of card */}
            <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center p-6 bg-accent">
               <h2 className="text-4xl font-bold text-primary">{currentCard.translation}</h2>
            </div>
          </Card>
        </div>

        <div className="flex items-center justify-between mt-8">
          <Button variant="outline" size="icon" onClick={handlePrev}>
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <p className="text-sm font-medium text-muted-foreground">
            {currentIndex + 1} / {vocabulary.length}
          </p>
          <Button variant="outline" size="icon" onClick={handleNext}>
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}
