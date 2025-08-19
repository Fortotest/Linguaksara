
"use client";

import { useState, useRef, useEffect } from 'react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Loader2, Send, User, CheckCircle, Coffee, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { aiConversation } from '@/ai/flows/ai-conversation';
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

type Scenario = {
  id: string;
  title: string;
  description: string;
  iconName: keyof typeof iconMap;
  missions: string[];
  initialBotMessage: string;
}

const iconMap = {
    "coffee": Coffee,
    "users": Users,
};

const scenarios: Scenario[] = [
  {
    id: 'coffee',
    title: "Memesan Kopi",
    description: "Latih cara memesan minuman di kafe.",
    iconName: "coffee",
    missions: ["Sapa barista", "Pesan satu minuman", "Tanyakan harganya", "Ucapkan terima kasih"],
    initialBotMessage: "Welcome to Linguaksara Cafe! What can I get for you today?"
  },
  {
    id: 'new_friend',
    title: "Bertemu Teman Baru",
    description: "Latih percakapan untuk berkenalan.",
    iconName: "users",
    missions: ["Sapa teman baru", "Perkenalkan diri Anda", "Tanyakan namanya", "Tanyakan kabarnya"],
    initialBotMessage: "Hi there! I don't think we've met before."
  }
];

export default function GuidedConversationPage() {
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [completedMissions, setCompletedMissions] = useState<string[]>([]);
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

  const startScenario = (scenario: Scenario) => {
    setSelectedScenario(scenario);
    setMessages([{ role: 'bot', text: scenario.initialBotMessage }]);
    setCompletedMissions([]);
  }

  const handleSend = async () => {
    if (!input.trim() || !selectedScenario) return;

    const userMessage: Message = { role: 'user', text: input };
    const newMessages: Message[] = [...messages, userMessage];
    setMessages(newMessages);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    try {
      // Dummy mission check
      const lowerInput = currentInput.toLowerCase();
      const newCompletedMissions = [...completedMissions];
      if (lowerInput.includes("hello") || lowerInput.includes("hi")) newCompletedMissions.push(selectedScenario.missions[0]);
      if (lowerInput.includes("coffee") || lowerInput.includes("tea")) newCompletedMissions.push(selectedScenario.missions[1]);
      if (lowerInput.includes("how much")) newCompletedMissions.push(selectedScenario.missions[2]);
      if (lowerInput.includes("thank you")) newCompletedMissions.push(selectedScenario.missions[3]);
      if (lowerInput.includes("my name is")) newCompletedMissions.push(selectedScenario.missions[1]);
      if (lowerInput.includes("what is your name")) newCompletedMissions.push(selectedScenario.missions[2]);
      if (lowerInput.includes("how are you")) newCompletedMissions.push(selectedScenario.missions[3]);
      setCompletedMissions(Array.from(new Set(newCompletedMissions)));


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
      setMessages(prev => prev.slice(0, -1));
      setInput(currentInput);
    } finally {
      setIsLoading(false);
    }
  };

  if (!selectedScenario) {
    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold font-headline">Conversation Practice</h1>
            <p className="text-muted-foreground mt-2 mb-8">Pilih skenario percakapan untuk memulai latihan.</p>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {scenarios.map(sc => {
                    const Icon = iconMap[sc.iconName];
                    return (
                        <Card key={sc.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => startScenario(sc)}>
                            <CardHeader>
                                <Icon className="h-10 w-10 text-primary mx-auto mb-4" />
                                <CardTitle>{sc.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{sc.description}</p>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
  }

  return (
    <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-8rem)]">
        <div className="lg:col-span-2 h-full">
            <Card className="h-full flex flex-col">
                <CardHeader>
                    <CardTitle>{selectedScenario.title}</CardTitle>
                    <CardDescription>Ngobrol dengan AI untuk menyelesaikan misi Anda.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col gap-4 overflow-hidden">
                    <ScrollArea className="flex-grow pr-4 -mr-4" ref={scrollAreaRef}>
                        <div className="space-y-6">
                            {messages.map((message, index) => (
                                <div key={index} className={cn("flex items-start gap-4", message.role === 'user' ? 'justify-end' : 'justify-start')}>
                                    {message.role === 'bot' && <Avatar className="h-8 w-8"><AvatarFallback><Bot /></AvatarFallback></Avatar>}
                                    <div className={cn("px-4 py-2 rounded-lg max-w-md", message.role === 'user' ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-muted rounded-bl-none')}>
                                        <p className="whitespace-pre-wrap">{message.text}</p>
                                    </div>
                                    {message.role === 'user' && <Avatar className="h-8 w-8"><AvatarFallback><User /></AvatarFallback></Avatar>}
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
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
        <div className="lg:col-span-1">
            <Card>
                <CardHeader>
                    <CardTitle>Misi Kamu</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    {selectedScenario.missions.map(mission => {
                        const isCompleted = completedMissions.includes(mission);
                        return (
                            <div key={mission} className={cn("flex items-center gap-3 transition-all", isCompleted ? "text-muted-foreground line-through" : "text-foreground")}>
                                <CheckCircle className={cn("h-5 w-5", isCompleted ? "text-green-500" : "text-muted-foreground/50")} />
                                <span>{mission}</span>
                            </div>
                        )
                    })}
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
