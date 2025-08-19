
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Play, Pause, Volume2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";

type WordWithDefinitionProps = {
  word: string;
  definition: string;
};

const WordWithDefinition = ({ word, definition }: WordWithDefinitionProps) => (
  <Popover>
    <PopoverTrigger asChild>
      <span className="text-primary font-semibold underline decoration-primary/50 decoration-dotted cursor-pointer hover:bg-primary/10 rounded-md px-1 py-0.5">
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

const comprehensionQuestions = [
    {
        question: "What was the main challenge of the journey to Eldoria?",
        options: ["The weather was bad", "The journey was arduous and tested their limits", "They ran out of food", "They got lost"],
        answer: "The journey was arduous and tested their limits"
    },
    {
        question: "What was the team's reaction upon entering the city?",
        options: ["They were disappointed", "They felt a sense of awe", "They were scared", "They were tired"],
        answer: "They felt a sense of awe"
    },
    {
        question: "What was the primary goal of the expedition?",
        options: ["To find treasure", "To build a new settlement", "To document and preserve the city's legacy", "To map the jungle"],
        answer: "To document and preserve the city's legacy"
    }
]

export default function ReadingPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [score, setScore] =useState<number | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleEnd = () => setIsPlaying(false);
    const synth = window.speechSynthesis;
    if (contentRef.current) {
        const textToRead = contentRef.current.innerText;
        utteranceRef.current = new SpeechSynthesisUtterance(textToRead);
        utteranceRef.current.lang = 'en-US';
        utteranceRef.current.addEventListener('end', handleEnd);
    }
    return () => {
        synth.cancel();
        if (utteranceRef.current) {
            utteranceRef.current.removeEventListener('end', handleEnd);
        }
    };
  }, []);

  const handlePlayPause = () => {
    const synth = window.speechSynthesis;
    if (isPlaying) {
      synth.pause();
      setIsPlaying(false);
    } else {
        if (synth.paused) {
            synth.resume();
        } else {
            if(utteranceRef.current) {
                synth.speak(utteranceRef.current);
            }
        }
        setIsPlaying(true);
    }
  };

  const handleAnswerChange = (questionIndex: number, value: string) => {
    setUserAnswers(prev => ({...prev, [questionIndex]: value}));
  }

  const handleSubmitQuiz = () => {
      let correctAnswers = 0;
      comprehensionQuestions.forEach((q, i) => {
          if(userAnswers[i] === q.answer) {
              correctAnswers++;
          }
      });
      setScore(correctAnswers);
  }

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold font-headline">Reading Practice</h1>
        <p className="text-muted-foreground">Baca teks, dengarkan audio, lalu uji pemahaman Anda.</p>
      </div>
      <Card>
        <CardHeader>
            <div className="flex justify-between items-center">
                <div>
                    <CardTitle>A Journey to the Ancient City</CardTitle>
                    <CardDescription>By Alex Thompson</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                    <Button onClick={handlePlayPause} variant="outline" size="icon">
                        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                    </Button>
                    <Volume2 className="h-5 w-5 text-muted-foreground" />
                </div>
            </div>
        </CardHeader>
        <CardContent className="space-y-4" ref={contentRef}>
          <Image
            src="https://raw.githubusercontent.com/tesweb2025/Market-Intelligence-5.1/d1ef5d75d025e2d4a8b2de87f2f59ac04fe3942a/assets_task_01k31ncqgffyy9dnfc7x1639ew_1755623967_img_0.webp"
            alt="Kota Kuno"
            width={800}
            height={300}
            className="w-full h-auto rounded-lg mb-4"
            data-ai-hint="ancient city landscape"
          />
          <p className="leading-relaxed">
            The sun cast long shadows as our team made the final <WordWithDefinition word="ascent" definition="Pendakian atau perjalanan naik ke puncak gunung atau bukit." /> to the hidden city of Eldoria. For centuries, this place was considered a myth, a whisper among historians. The journey was <WordWithDefinition word="arduous" definition="Membutuhkan usaha yang sangat berat; sulit dan melelahkan." />, testing our limits at every turn. We navigated through dense jungles where unseen creatures chirped, and crossed treacherous rivers with currents that threatened to pull us under. Yet, our team remained <WordWithDefinition word="resilient" definition="Mampu bertahan atau pulih dengan cepat dari kesulitan; tangguh." />, driven by the promise of discovery.
          </p>
          <p className="leading-relaxed">
            As we finally passed through the moss-covered stone gates, a sense of <WordWithDefinition word="awe" definition="Perasaan takjub dan hormat yang bercampur dengan sedikit rasa takut atau heran." /> washed over us. The air grew still and a <WordWithDefinition word="serene" definition="Tenang, damai, dan tidak terganggu." /> silence replaced the cacophony of the jungle. The architecture was magnificent, unlike anything we had ever seen. Towers pierced the clouds, and bridges made of gleaming crystal spanned vast chasms. Intricate carvings adorned every surface, telling stories of a long-lost civilization that was both artistic and technologically advanced.
          </p>
          <p className="leading-relaxed">
            We felt a <WordWithDefinition word="profound" definition="Sangat mendalam atau kuat; menunjukkan pengetahuan atau wawasan yang hebat." /> connection to the past, standing amidst the silent ruins. It was a humbling experience to walk the same paths as people who lived millennia ago. Our expedition's primary goal was to document these findings, preserve the incredible <WordWithDefinition word="legacy" definition="Sesuatu yang ditinggalkan oleh seseorang atau dari masa lalu; warisan." /> of this place, and share its story with the world, ensuring that Eldoria would never be forgotten again.
          </p>
        </CardContent>
      </Card>
      
      {!showQuiz && (
        <div className="text-center my-6">
            <Button onClick={() => setShowQuiz(true)}>Mulai Kuis Pemahaman</Button>
        </div>
      )}

      {showQuiz && (
        <Card className="mt-6">
            <CardHeader>
                <CardTitle>Kuis Pemahaman</CardTitle>
                <CardDescription>Jawab pertanyaan berikut berdasarkan teks di atas.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {comprehensionQuestions.map((q, index) => (
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
                <Button onClick={handleSubmitQuiz} disabled={Object.keys(userAnswers).length !== comprehensionQuestions.length || score !== null}>
                    Lihat Hasil
                </Button>
                {score !== null && (
                    <div className="mt-4 p-4 rounded-lg bg-accent">
                        <h3 className="font-bold text-lg">Hasil Anda:</h3>
                        <p>Anda menjawab dengan benar {score} dari {comprehensionQuestions.length} pertanyaan!</p>
                    </div>
                )}
            </CardContent>
        </Card>
      )}
    </>
  );
}
