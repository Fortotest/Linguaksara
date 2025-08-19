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
        description: "Sorry, an error occurred while correcting the text.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <div className="mb-6">
            <h1 className="text-3xl font-bold font-headline">Grammar Lessons</h1>
            <p className="text-muted-foreground">Expand your knowledge with these lessons.</p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Present Tense</AccordionTrigger>
            <AccordionContent>
              The present tense is used to talk about things that are happening now or are true in general. For example: "I speak English." or "The sun rises in the east."
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Past Tense</AccordionTrigger>
            <AccordionContent>
              The past tense is used for actions that started and finished in the past. For example: "I walked to the park yesterday."
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Future Tense</AccordionTrigger>
            <AccordionContent>
              The future tense describes things that have not happened yet. For example: "I will travel to Spain next year."
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Grammar Corrector</CardTitle>
          <CardDescription>
            Write a sentence and let our AI check your grammar and spelling.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full gap-4">
            <Textarea 
              placeholder="Type your sentence here..." 
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={4}
            />
            <Button onClick={handleCorrection} disabled={isLoading || !text.trim()}>
              {isLoading ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Correcting...</>
              ) : (
                <><Wand2 className="mr-2 h-4 w-4" /> Correct Grammar</>
              )}
            </Button>
            {correctedText && (
              <div className="mt-4 p-4 bg-accent rounded-md">
                <h4 className="font-semibold text-accent-foreground">Suggestion:</h4>
                <p className="text-accent-foreground">{correctedText}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
