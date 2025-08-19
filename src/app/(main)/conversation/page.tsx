
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
    { role: 'bot', text: "Halo! Saya Aksara, asisten AI Anda di Linguaksara. Ada yang bisa saya bantu hari ini? Anda bisa bertanya apa saja, atau minta saya untuk menjelaskan salah satu fitur." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // We need to use a timeout to ensure the DOM is updated before we try to scroll
    setTimeout(() => {
        const scrollViewport = scrollAreaRef.current?.querySelector('div[data-radix-scroll-area-viewport]');
        if (scrollViewport) {
            scrollViewport.scrollTop = scrollViewport.scrollHeight;
        }
    }, 100);
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', text: input };
    const newMessages: Message[] = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const conversationHistory = newMessages.map(({role, text}) => ({role, text}));
      const conversationResponse = await aiConversation({ messages: conversationHistory });

      if (conversationResponse?.text) {
          setMessages(prev => [...prev, { role: 'bot', text: conversationResponse.text }]);
      } else {
        toast({ variant: "destructive", title: "Error", description: "AI tidak memberikan respons."});
      }

    } catch (error) {
      console.error("AI conversation error:", error);
      toast({ variant: "destructive", title: "Error", description: "Terjadi kesalahan saat berkomunikasi dengan AI."});
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <Card className="h-full flex flex-col">
        <CardHeader>
            <CardTitle>AI Assistant</CardTitle>
            <CardDescription>Ngobrol dengan Aksara untuk bertanya atau berlatih.</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col gap-4 overflow-hidden">
            <ScrollArea className="flex-grow pr-4 -mr-4" ref={scrollAreaRef}>
                <div className="space-y-6">
                    {messages.map((message, index) => (
                        <div key={index} className={cn("flex items-start gap-4", message.role === 'user' ? 'justify-end' : 'justify-start')}>
                            {message.role === 'bot' && <Avatar className="h-8 w-8 bg-primary text-primary-foreground"><AvatarFallback><Bot /></AvatarFallback></Avatar>}
                            <div className={cn("px-4 py-2 rounded-lg max-w-[80%] shadow-sm", message.role === 'user' ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-muted rounded-bl-none')}>
                                <p className="whitespace-pre-wrap">{message.text}</p>
                            </div>
                            {message.role === 'user' && <Avatar className="h-8 w-8"><AvatarFallback><User /></AvatarFallback></Avatar>}
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex items-start gap-4 justify-start">
                            <Avatar className="h-8 w-8 bg-primary text-primary-foreground"><AvatarFallback><Bot /></AvatarFallback></Avatar>
                            <div className="px-4 py-2 rounded-lg max-w-md shadow-sm bg-muted rounded-bl-none flex items-center">
                                <Loader2 className="h-5 w-5 animate-spin" />
                            </div>
                        </div>
                    )}
                </div>
            </ScrollArea>
            <div className="flex w-full items-center space-x-2 pt-4">
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
                </Button>
            </div>
        </CardContent>
      </Card>
  );
}
