
'use client';

import { useParams } from 'next/navigation';
import { readingData, WordDefinition } from '@/lib/reading-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from '@/components/ui/label';
import { Play, Pause, Volume2, ArrowLeft, CheckCircle, Loader2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { textToSpeech } from '@/ai/flows/text-to-speech';

type WordWithDefinitionProps = {
  word: string;
  definition: string;
};

const WordWithDefinition = ({ word, definition }: WordWithDefinitionProps) => (
  <Popover>
    <PopoverTrigger asChild>
      <span className="text-primary font-semibold underline decoration-primary/50 decoration-dotted cursor-pointer hover:bg-primary/10 rounded-md px-0.5 py-0.5">
        {word}
      </span>
    </PopoverTrigger>
    <PopoverContent className="w-80">
      <div className="grid gap-4">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">{word}</h4>
          <p className="text-sm text-muted-foreground">
            {definition}
          </p>
        </div>
      </div>
    </PopoverContent>
  </Popover>
);


export default function ReadingStoryPage() {
  const params = useParams();
  const storyId = params.storyId as string;
  const story = readingData.find(s => s.id === storyId);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();
  const contentRef = useRef<HTMLDivElement>(null);

  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [score, setScore] =useState<number | null>(null);

  const handlePlayPause = async () => {
    if (isPlaying && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }
    
    if (audioRef.current && audioRef.current.src && !audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
        return;
    }

    if (contentRef.current) {
        setIsLoadingAudio(true);
        try {
            const textToRead = contentRef.current.innerText;
            const result = await textToSpeech({ text: textToRead });
            if (audioRef.current) {
                audioRef.current.src = result.audioDataUri;
                audioRef.current.play();
                setIsPlaying(true);
            }
        } catch (error) {
            console.error("Error generating speech:", error);
            toast({ variant: "destructive", title: "Audio Error", description: "Gagal memuat audio."});
        } finally {
            setIsLoadingAudio(false);
        }
    }
  };

  useEffect(() => {
      const audio = audioRef.current;
      const handleEnded = () => setIsPlaying(false);
      if (audio) {
          audio.addEventListener('ended', handleEnded);
      }
      return () => {
          if (audio) {
              audio.removeEventListener('ended', handleEnded);
          }
      }
  }, []);

  if (!story) {
    return (
      <div className="text-center p-4">
        <h1 className="text-2xl font-bold">Cerita tidak ditemukan</h1>
        <p className="text-muted-foreground">
          Cerita yang Anda cari tidak ada.
        </p>
        <Button asChild className="mt-4">
          <Link href="/reading">Kembali ke Perpustakaan</Link>
        </Button>
      </div>
    );
  }

  const renderTextWithHighlights = (paragraph: string) => {
    let result: (string | JSX.Element)[] = [paragraph];
    story.keywords.forEach(({ word, definition }) => {
      let newResult: (string | JSX.Element)[] = [];
      result.forEach((segment, i) => {
        if (typeof segment === 'string') {
          const parts = segment.split(new RegExp(`(${word})`, 'gi'));
          parts.forEach((part, j) => {
            if (part.toLowerCase() === word.toLowerCase()) {
              newResult.push(<WordWithDefinition key={`${i}-${j}`} word={part} definition={definition} />);
            } else {
              newResult.push(part);
            }
          });
        } else {
          newResult.push(segment);
        }
      });
      result = newResult;
    });
    return <p className="leading-relaxed">{result}</p>;
  };

  const handleAnswerChange = (questionIndex: number, value: string) => {
    setUserAnswers(prev => ({...prev, [questionIndex]: value}));
  }

  const handleSubmitQuiz = () => {
    if (!story.activity || story.activity.type !== 'multiple-choice') return;
    let correctAnswers = 0;
    story.activity.questions.forEach((q, i) => {
        if(userAnswers[i] === q.answer) {
            correctAnswers++;
        }
    });
    setScore(correctAnswers);
  };
  
  const renderActivity = () => {
    if (!story.activity) return null;

    switch(story.activity.type) {
        case 'multiple-choice':
            return (
                <Card className="mt-6">
                    <CardHeader>
                        <CardTitle>Kuis Pemahaman</CardTitle>
                        <CardDescription>Jawab pertanyaan berikut berdasarkan teks di atas.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {story.activity.questions.map((q, index) => (
                            <div key={index}>
                                <p className="font-semibold mb-2">{index + 1}. {q.question}</p>
                                <RadioGroup onValueChange={(value) => handleAnswerChange(index, value)} disabled={score !== null}>
                                    {q.options.map(opt => (
                                        <div key={opt} className="flex items-center space-x-2">
                                            <RadioGroupItem value={opt} id={`${index}-${opt}`} />
                                            <Label htmlFor={`${index}-${opt}`}>{opt}</Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                            </div>
                        ))}
                        <Button onClick={handleSubmitQuiz} disabled={Object.keys(userAnswers).length !== story.activity.questions.length || score !== null}>
                            Lihat Hasil
                        </Button>
                        {score !== null && (
                            <div className="mt-4 p-4 rounded-lg bg-accent">
                                <h3 className="font-bold text-lg">Hasil Anda:</h3>
                                <p>Anda menjawab dengan benar {score} dari {story.activity.questions.length} pertanyaan!</p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            )
        case 'true-false':
             return (
                <Card className="mt-6">
                    <CardHeader>
                        <CardTitle>Benar atau Salah?</CardTitle>
                        <CardDescription>Tentukan apakah pernyataan berikut benar atau salah.</CardDescription>
                    </CardHeader>
                    {/* ... Implementasi True/False ... */}
                </Card>
            )
        // ... tambahkan case lain di sini
        default:
            return null;
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link href="/reading" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke Perpustakaan
        </Link>
        <Card>
          <CardHeader>
              <div className="flex justify-between items-start">
                  <div>
                      <CardTitle className="text-3xl font-bold font-headline">{story.title}</CardTitle>
                      <CardDescription className="mt-1">By {story.author}</CardDescription>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                      <Button onClick={handlePlayPause} variant="outline" size="icon" disabled={isLoadingAudio}>
                          {isLoadingAudio ? <Loader2 className="h-5 w-5 animate-spin" /> : (isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />)}
                      </Button>
                      <Volume2 className="h-5 w-5 text-muted-foreground" />
                      <audio ref={audioRef} />
                  </div>
              </div>
          </CardHeader>
          <CardContent className="space-y-4 prose dark:prose-invert max-w-none" ref={contentRef}>
            <Image
              src={story.image}
              alt={story.title}
              width={800}
              height={300}
              className="w-full h-auto rounded-lg mb-4"
              data-ai-hint={story.dataAiHint}
            />
            {story.paragraphs.map((p, index) => (
                <div key={index}>{renderTextWithHighlights(p)}</div>
            ))}
          </CardContent>
        </Card>
        
        {renderActivity()}

         <div className="mt-8 mb-4 text-center">
            <Button asChild size="lg">
              <Link href="/reading">
                <CheckCircle className="mr-2 h-4 w-4" />
                Selesai Membaca, Kembali ke Perpustakaan
              </Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
