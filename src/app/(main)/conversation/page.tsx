"use client";

import { useState, useRef, useEffect } from 'react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Loader2, Send, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { aiConversation } from '@/ai/flows/ai-conversation';
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

type Message = {
  role: 'user' | 'bot';
  text: string;
};

export default function ConversationPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "Halo! Saya Aksara, tutor AI pribadimu. Topik apa yang ingin kamu diskusikan hari ini?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollViewport = scrollAreaRef.current?.querySelector('div[data-radix-scroll-area-viewport]');
    if (scrollViewport) {
      setTimeout(() => {
        scrollViewport.scrollTop = scrollViewport.scrollHeight;
      }, 100);
    }
  }, [messages]);

  const handleError = (description: string = "Terjadi kesalahan. Silakan coba lagi.") => {
    toast({
      variant: "destructive",
      title: "Error",
      description: description,
    });
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', text: input };
    const newMessages: Message[] = [...messages, userMessage];
    setMessages(newMessages);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    try {
      const conversationHistory = newMessages.map(({role, text}) => ({role, text}));
      
      const conversationResponse = await aiConversation({ messages: conversationHistory });

      if (conversationResponse?.text) {
          setMessages(prev => [...prev, { role: 'bot', text: conversationResponse.text }]);
      } else {
        handleError("AI tidak memberikan respons. Coba ulangi pesanmu.");
      }

    } catch (error) {
      console.error("AI conversation error:", error);
      handleError("Maaf, terjadi kesalahan saat berkomunikasi dengan AI. Coba lagi nanti.");
      // Rollback the user message on error
      setMessages(prev => prev.slice(0, -1));
      // Restore input
      setInput(currentInput);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-8rem)]">
        <Card className="h-full flex flex-col">
            <CardHeader>
                <CardTitle>Latihan Percakapan AI</CardTitle>
                <CardDescription>Ngobrol dengan AI untuk meningkatkan kelancaran berbicara Anda.</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col gap-4 overflow-hidden">
                <ScrollArea className="flex-grow pr-4 -mr-4" ref={scrollAreaRef}>
                    <div className="space-y-6">
                        {messages.map((message, index) => (
                            <div key={index} className={cn("flex items-start gap-4", message.role === 'user' ? 'justify-end' : 'justify-start')}>
                                {message.role === 'bot' && (
                                    <Avatar className="h-8 w-8">
                                        <AvatarFallback><Bot /></AvatarFallback>
                                    </Avatar>
                                )}
                                <div className={cn("max-w-xs md:max-w-md lg:max-w-lg space-y-2", message.role === 'user' && 'text-right items-end flex flex-col')}>
                                  <div className={cn("px-4 py-2 rounded-lg", message.role === 'user' ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-muted rounded-bl-none')}>
                                      <p className="whitespace-pre-wrap">{message.text}</p>
                                  </div>
                                </div>
                                {message.role === 'user' && (
                                    <Avatar className="h-8 w-8">
                                        <AvatarFallback><User /></AvatarFallback>
                                    </Avatar>
                                )}
                            </div>
                        ))}
                    </div>
                </ScrollArea>
                <div className="flex w-full items-center space-x-2 mt-4">
                    <Input 
                        type="text" 
                        placeholder="Ketik pesan Anda..." 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSend()}
                        disabled={isLoading}
                    />
                    <Button type="submit" onClick={handleSend} disabled={isLoading || !input.trim()}>
                        {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                        <span className="sr-only">Kirim</span>
                    </Button>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}
