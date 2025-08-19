
"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { correctGrammar, type CorrectGrammarOutput } from '@/ai/flows/grammar-correction';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const FillInTheBlank = ({ question, options, answer, onCorrect }: { question: string, options: string[], answer: string, onCorrect: () => void }) => {
    const [selected, setSelected] = useState('');
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const checkAnswer = () => {
        if(selected === answer) {
            setIsCorrect(true);
            onCorrect();
        } else {
            setIsCorrect(false);
        }
    }

    return (
        <div className="p-4 border rounded-lg mt-4 bg-background">
            <p className="font-semibold mb-2" dangerouslySetInnerHTML={{ __html: question }} />
            <RadioGroup value={selected} onValueChange={setSelected}>
                {options.map(opt => (
                    <div key={opt} className="flex items-center space-x-2">
                        <RadioGroupItem value={opt} id={opt} />
                        <Label htmlFor={opt}>{opt}</Label>
                    </div>
                ))}
            </RadioGroup>
            <Button onClick={checkAnswer} size="sm" className="mt-4" disabled={isCorrect !== null}>Cek Jawaban</Button>
            {isCorrect === true && <p className="text-green-600 font-semibold mt-2">Benar!</p>}
            {isCorrect === false && <p className="text-red-600 font-semibold mt-2">Coba lagi.</p>}
        </div>
    );
};

export default function GrammarPage() {
  const [text, setText] = useState('');
  const [correctionResult, setCorrectionResult] = useState<CorrectGrammarOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleCorrection = async () => {
    if (!text.trim()) return;
    setIsLoading(true);
    setCorrectionResult(null);
    try {
      const result = await correctGrammar({ text });
      setCorrectionResult(result);
    } catch (error) {
      console.error("Error correcting grammar:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Maaf, terjadi kesalahan saat memperbaiki tulisan.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div>
        <div className="mb-6">
            <h1 className="text-3xl font-bold font-headline">Grammar Lessons</h1>
            <p className="text-muted-foreground">Perdalam pengetahuan Anda dengan pelajaran dan latihan interaktif ini.</p>
        </div>
        <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>Present Tense (Waktu Sekarang)</AccordionTrigger>
            <AccordionContent>
                <div className="space-y-4">
                    <p>Gunakan untuk membicarakan kejadian saat ini atau fakta umum. Contoh: "I speak English." (Saya berbicara bahasa Inggris) atau "The sun rises in the east." (Matahari terbit dari timur).</p>
                    <p>Setelah penjelasan ini, langsung coba latihan di bawah untuk mempraktikkan pengetahuan Anda.</p>
                    <FillInTheBlank
                        question="The cat ___ sleeping on the sofa."
                        options={['am', 'is', 'are']}
                        answer="is"
                        onCorrect={() => {}}
                    />
                </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Past Tense (Waktu Lampau)</AccordionTrigger>
            <AccordionContent>
                <div className="space-y-4">
                    <p>Gunakan untuk tindakan yang dimulai dan selesai di masa lalu. Contoh: "I walked to the park yesterday." (Saya berjalan ke taman kemarin).</p>
                    <p>Aturan dasarnya adalah menambahkan '-ed' pada kata kerja reguler.</p>
                    <FillInTheBlank
                        question="They ___ the movie last night."
                        options={['watch', 'watched', 'watches']}
                        answer="watched"
                        onCorrect={() => {}}
                    />
                </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Future Tense (Waktu Depan)</AccordionTrigger>
            <AccordionContent>
                <div className="space-y-4">
                    <p>Gunakan untuk menggambarkan hal-hal yang belum terjadi. Cara paling umum adalah menggunakan 'will' diikuti kata kerja dasar.</p>
                    <p>Contoh: "I will travel to Spain next year." (Saya akan bepergian ke Spanyol tahun depan).</p>
                    <FillInTheBlank
                        question="We ___ visit our grandmother tomorrow."
                        options={['will', 'would', 'did']}
                        answer="will"
                        onCorrect={() => {}}
                    />
                </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>AI Correction Assistant</CardTitle>
          <CardDescription>
            Tulis sebuah kalimat dan biarkan AI kami memeriksa tata bahasa dan ejaan Anda.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full gap-4">
            <Textarea 
              placeholder="Ketik kalimat bahasa Inggris Anda di sini... (contoh: i is happyy becaus i learn english)" 
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={4}
            />
            <Button onClick={handleCorrection} disabled={isLoading || !text.trim()}>
              {isLoading ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Memeriksa...</>
              ) : (
                <><Wand2 className="mr-2 h-4 w-4" /> Perbaiki Tulisan</>
              )}
            </Button>
            {correctionResult && (
              <div className="mt-4 space-y-4">
                <h3 className="font-semibold">Saran Perbaikan Ditemukan ({correctionResult.corrections.length}):</h3>
                <Accordion type="multiple" className="w-full space-y-2">
                    {correctionResult.corrections.map((correction, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-b-0">
                            <AccordionTrigger className="p-3 bg-secondary rounded-lg text-left hover:no-underline">
                                <span className="font-semibold">{correction.type}:</span>&nbsp;<span>{correction.explanation.split('.')[0]}</span>
                            </AccordionTrigger>
                            <AccordionContent className="border-l-4 border-destructive pl-4 ml-3 pt-2 mt-1">
                                 <p className="text-sm"><strong>Teks Asli:</strong> "...{correction.originalText}..."</p>
                                 <p className="text-sm"><strong>Penjelasan:</strong> {correction.explanation}</p>
                                 <p className="text-sm"><strong>Saran:</strong> Ganti dengan <strong className="text-green-600">{correction.suggestion}</strong></p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
                <div className="p-4 bg-accent rounded-lg">
                    <h4 className="font-semibold text-accent-foreground">Kalimat Akhir yang Direkomendasikan:</h4>
                    <p className="font-bold text-lg text-green-700">{correctionResult.correctedText}</p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
