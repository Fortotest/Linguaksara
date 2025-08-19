
"use client";

import { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Volume2, Check, X } from "lucide-react";
import { Input } from '@/components/ui/input';
import Image from 'next/image';

const vocabularyList = [
  { id: 1, word: "Commit", translation: "Berkomitmen", image: "https://placehold.co/400x200.png", hint: "To promise to do something.", example: "She committed to finishing the project on time.", learned: false, dataAiHint: "promise agreement" },
  { id: 2, word: "Resilient", translation: "Tangguh", image: "https://placehold.co/400x200.png", hint: "Able to recover quickly from difficulties.", example: "The community was resilient after the storm.", learned: false, dataAiHint: "strong mountain" },
  { id: 3, word: "Elaborate", translation: "Merinci", image: "https://placehold.co/400x200.png", hint: "To add more detail to something.", example: "Could you elaborate on your plan?", learned: false, dataAiHint: "details mindmap" },
  { id: 4, word: "Sufficient", translation: "Cukup", image: "https://placehold.co/400x200.png", hint: "Enough for a particular purpose.", example: "Do we have sufficient food for the trip?", learned: false, dataAiHint: "full glass" },
  { id: 5, word: "Integrate", translation: "Mengintegrasikan", image: "https://placehold.co/400x200.png", hint: "To combine one thing with another so that they become a whole.", example: "We will integrate the new features into the app.", learned: false, dataAiHint: "puzzle pieces" },
];

export default function VocabularyTrainerPage() {
  const [session, setSession] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [stats, setStats] = useState({ correct: 0, incorrect: 0 });

  const currentCard = vocabularyList[currentCardIndex];

  const handleStartSession = () => {
    setSession(true);
    setCurrentCardIndex(0);
    setStats({ correct: 0, incorrect: 0 });
  };
  
  const handleCheckAnswer = () => {
    if (inputValue.trim().toLowerCase() === currentCard.word.toLowerCase()) {
      setFeedback('correct');
      setStats(prev => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setFeedback('incorrect');
      setStats(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
    }

    setTimeout(() => {
      setFeedback(null);
      setInputValue('');
      if (currentCardIndex < vocabularyList.length - 1) {
        setCurrentCardIndex(prev => prev + 1);
      } else {
        // End of session
        setSession(false); 
      }
    }, 1500);
  };

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-3xl font-bold font-headline">Vocabulary Trainer</h1>
        <p className="text-muted-foreground max-w-md mt-2 mb-8">Siap untuk melatih kosakata Anda? Sesi ini berisi {vocabularyList.length} kata baru untuk dipelajari.</p>
        <Button onClick={handleStartSession} size="lg">Mulai Sesi Latihan</Button>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8 h-full items-center">
      <div className="lg:col-span-2">
        <Card className="p-4">
            <CardContent className="flex flex-col items-center justify-center p-0">
                <Image src={currentCard.image} alt={currentCard.word} width={400} height={200} className="rounded-lg mb-4 w-full aspect-video object-cover" data-ai-hint={currentCard.dataAiHint} />
                <p className="text-muted-foreground text-center">Apa bahasa Inggris dari...</p>
                <h2 className="text-4xl font-bold text-center my-4">{currentCard.translation}?</h2>
                
                <div className="w-full max-w-sm mt-4">
                    <div className="flex items-center space-x-2">
                        <Input 
                            type="text" 
                            placeholder="Ketik jawaban Anda..." 
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && !feedback && handleCheckAnswer()}
                            disabled={!!feedback}
                            className={cn(
                                feedback === 'correct' && 'border-green-500 ring-green-500',
                                feedback === 'incorrect' && 'border-red-500 ring-red-500'
                            )}
                        />
                        <Button onClick={handleCheckAnswer} disabled={!inputValue.trim() || !!feedback}>Cek</Button>
                    </div>
                    {feedback === 'correct' && <p className="text-green-600 mt-2 flex items-center gap-2"><Check className="h-4 w-4" />Benar! Kata yang benar adalah <strong className="font-bold">{currentCard.word}</strong>.</p>}
                    {feedback === 'incorrect' && <p className="text-red-600 mt-2 flex items-center gap-2"><X className="h-4 w-4" />Salah. Jawaban yang benar adalah <strong className="font-bold">{currentCard.word}</strong>.</p>}
                </div>

                <div className="mt-6 text-center text-sm text-muted-foreground">
                    <p><strong>Contoh:</strong> "{currentCard.example}"</p>
                    <Button variant="ghost" size="icon" className="mt-2">
                        <Volume2 className="h-5 w-5" />
                    </Button>
                </div>
            </CardContent>
        </Card>
      </div>
      <div className="lg:col-span-1">
        <Card>
            <CardHeader>
                <CardTitle>Progres Sesi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
                <div className="flex justify-between items-center">
                    <span className="font-medium text-green-600">Benar</span>
                    <span className="font-bold">{stats.correct}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="font-medium text-red-600">Salah</span>
                    <span className="font-bold">{stats.incorrect}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="font-medium text-muted-foreground">Sisa Kartu</span>
                    <span className="font-bold">{vocabularyList.length - currentCardIndex - 1}</span>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
