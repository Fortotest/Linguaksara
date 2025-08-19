"use client";

import { useState, useRef, useEffect } from 'react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Loader2, Send, Sparkles, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { aiConversationGrammarSuggestions } from '@/ai/flows/ai-conversation-grammar-suggestions';
import { aiConversation } from '@/ai/flows/ai-conversation';
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

type Message = {
  role: 'user' | 'bot';
  text: string;
  suggestions?: string[];
};

export default function ConversationPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "Hello! What would you like to talk about today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }
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
      const { text: botText } = conversationResponse;
      
      const suggestionsResponse = await aiConversationGrammarSuggestions({ text: userMessage.text });
      const { suggestions } = suggestionsResponse;

      setMessages(prev => {
          const updatedMessages = [...prev];
          const lastMessageIndex = updatedMessages.length - 1;
          if(updatedMessages[lastMessageIndex].role === 'user') {
              updatedMessages[lastMessageIndex] = { ...updatedMessages[lastMessageIndex], suggestions };
          }
          return [...updatedMessages, { role: 'bot', text: botText }];
      });

    } catch (error) {
      console.error("AI conversation error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "I'm having a little trouble understanding. Please try again.",
      });
      // remove the user message if there was an error
      setMessages(prev => prev.slice(0, -1));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-8rem)]">
        <Card className="h-full flex flex-col">
            <CardHeader>
                <CardTitle>AI Conversation Practice</CardTitle>
                <CardDescription>Chat with our AI to improve your speaking and fluency.</CardDescription>
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
                                  {message.suggestions && message.suggestions.length > 0 && (
                                    <div className="p-3 rounded-lg bg-accent text-left">
                                      <div className="flex items-center gap-2 mb-2">
                                        <Sparkles className="h-4 w-4 text-primary"/>
                                        <h4 className="text-sm font-semibold">Suggestions</h4>
                                      </div>
                                      <ul className="space-y-1.5 text-sm list-disc list-inside">
                                        {message.suggestions.slice(0, 3).map((s, i) => <li key={i}>{s}</li>)}
                                      </ul>
                                    </div>
                                  )}
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
                        placeholder="Type your message..." 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSend()}
                        disabled={isLoading}
                    />
                    <Button type="submit" onClick={handleSend} disabled={isLoading || !input.trim()}>
                        {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                        <span className="sr-only">Send</span>
                    </Button>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}
