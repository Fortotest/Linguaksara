"use client";

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Volume2 } from "lucide-react";
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import * as React from 'react';

const vocabulary = [
  { word: "Hello", translation: "Halo", hint: "Sapaan yang umum." },
  { word: "Goodbye", translation: "Selamat tinggal", hint: "Digunakan saat berpisah." },
  { word: "Thank you", translation: "Terima kasih", hint: "Menyatakan rasa terima kasih." },
  { word: "Please", translation: "Tolong", hint: "Permintaan yang sopan." },
  { word: "Yes", translation: "Ya", hint: "Untuk mengiyakan." },
  { word: "No", translation: "Tidak", hint: "Untuk menolak." },
  { word: "Excuse me", translation: "Permisi", hint: "Untuk meminta perhatian." },
  { word: "I'm sorry", translation: "Maaf", hint: "Permintaan maaf." },
];

export default function VocabularyPage() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [isFlipped, setIsFlipped] = useState(false);

  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setIsFlipped(false);
      setTimeout(() => {
        setCurrent(api.selectedScrollSnap() + 1)
      }, 150)
    })
  }, [api])

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };
  
  const currentCard = vocabulary[current-1];

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
            <h1 className="text-3xl font-bold font-headline">Kartu Kosakata</h1>
            <p className="text-muted-foreground">Klik kartu untuk membalik. Gunakan panah untuk navigasi.</p>
        </div>

        <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
                {vocabulary.map((item, index) => (
                    <CarouselItem key={index} onClick={handleCardClick}>
                        <div className="p-1">
                            <div className="relative w-full h-64 [perspective:1000px]">
                                <Card 
                                    className={cn(
                                    "absolute w-full h-full transition-transform duration-500 [transform-style:preserve-3d]",
                                    isFlipped ? "[transform:rotateY(180deg)]" : ""
                                    )}
                                >
                                    {/* Front of card */}
                                    <div className="absolute w-full h-full [backface-visibility:hidden] flex flex-col items-center justify-center p-6">
                                        <h2 className="text-4xl font-bold">{item.word}</h2>
                                        <p className="text-muted-foreground mt-2">{item.hint}</p>
                                        <Button variant="ghost" size="icon" className="absolute top-4 right-4">
                                            <Volume2 className="h-6 w-6" />
                                        </Button>
                                    </div>
                                    {/* Back of card */}
                                    <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center p-6 bg-accent">
                                        <h2 className="text-4xl font-bold text-primary">{item.translation}</h2>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="flex items-center justify-center mt-8 gap-4">
                <Button variant="outline" size="icon" onClick={() => api?.scrollPrev()}>
                    <ChevronLeft className="h-6 w-6" />
                </Button>
                <p className="text-sm font-medium text-muted-foreground">
                    {current} / {vocabulary.length}
                </p>
                <Button variant="outline" size="icon" onClick={() => api?.scrollNext()}>
                    <ChevronRight className="h-6 w-6" />
                </Button>
            </div>
        </Carousel>
      </div>
    </div>
  );
}
