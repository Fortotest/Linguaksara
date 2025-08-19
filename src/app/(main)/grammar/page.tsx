"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { correctGrammar } from '@/ai/flows/grammar-correction';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function GrammarPage() {
  const [text, setText] = useState('');
  const [correctedText, setCorrectedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleCorrection = async () => {
    if (!text.trim()) return;
    setIsLoading(true);
    setCorrectedText('');
    try {
      const result = await correctGrammar({ text });
      setCorrectedText(result.correctedText);
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
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <div className="mb-6">
            <h1 className="text-3xl font-bold font-headline">Pelajaran Tata Bahasa</h1>
            <p className="text-muted-foreground">Perdalam pengetahuan Anda dengan pelajaran ringkas ini.</p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Present Tense (Waktu Sekarang)</AccordionTrigger>
            <AccordionContent>
              Gunakan untuk membicarakan kejadian saat ini atau fakta umum. Contoh: "I speak English." (Saya berbicara bahasa Inggris) atau "The sun rises in the east." (Matahari terbit dari timur).
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Past Tense (Waktu Lampau)</AccordionTrigger>
            <AccordionContent>
              Gunakan untuk tindakan yang dimulai dan selesai di masa lalu. Contoh: "I walked to the park yesterday." (Saya berjalan ke taman kemarin).
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Future Tense (Waktu Depan)</AccordionTrigger>
            <AccordionContent>
              Gunakan untuk menggambarkan hal-hal yang belum terjadi. Contoh: "I will travel to Spain next year." (Saya akan bepergian ke Spanyol tahun depan).
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Asisten Koreksi AI</CardTitle>
          <CardDescription>
            Tulis sebuah kalimat dan biarkan AI kami memeriksa tata bahasa dan ejaan Anda.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full gap-4">
            <Textarea 
              placeholder="Ketik kalimat bahasa Inggris Anda di sini..." 
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
            {correctedText && (
              <div className="mt-4 p-4 bg-accent rounded-md">
                <h4 className="font-semibold text-accent-foreground">Saran Perbaikan:</h4>
                <p className="text-accent-foreground">{correctedText}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
