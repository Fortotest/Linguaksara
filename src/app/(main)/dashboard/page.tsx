
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Bot, BookOpen, PenTool } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartData = [
  { day: "Sen", xp: 50 },
  { day: "Sel", xp: 75 },
  { day: "Rab", xp: 120 },
  { day: "Kam", xp: 90 },
  { day: "Jum", xp: 150 },
  { day: "Sab", xp: 110 },
  { day: "Min", xp: 200 },
];

const chartConfig = {
  xp: {
    label: "XP",
    color: "hsl(var(--primary))",
  },
};

export default function DashboardPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold font-headline">Welcome Back, Sofia!</h1>
          <p className="text-muted-foreground">Ini rencana belajarmu untuk hari ini. Semangat!</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Level 12</p>
            <Progress value={60} className="w-32 h-2" />
            <p className="text-xs font-medium">1250 / 2000 XP</p>
          </div>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Daily Learning Plan</CardTitle>
            <CardDescription>Selesaikan tugas ini untuk mencapai target harianmu.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center gap-4 p-3 rounded-lg bg-secondary/70">
              <div className="bg-primary/10 p-3 rounded-full">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Vocabulary Practice</p>
                <p className="text-sm text-muted-foreground">Perkaya kosakatamu dengan 10 kata baru.</p>
              </div>
              <Button className="ml-auto" size="sm">Mulai</Button>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-lg bg-secondary/70">
              <div className="bg-primary/10 p-3 rounded-full">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold">AI Conversation</p>
                <p className="text-sm text-muted-foreground">Latih kelancaranmu dengan ngobrol 5 menit.</p>
              </div>
              <Button className="ml-auto" size="sm">Mulai</Button>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-lg bg-secondary/70">
              <div className="bg-primary/10 p-3 rounded-full">
                <PenTool className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Grammar Lesson</p>
                <p className="text-sm text-muted-foreground">Kuasai aturan 'Past Tense'.</p>
              </div>
               <Button className="ml-auto" size="sm" variant="outline" disabled>Selesai</Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Weekly Progress</CardTitle>
            <CardDescription>Perolehan XP kamu dalam 7 hari terakhir.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[200px] w-full">
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="day"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                 <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Bar dataKey="xp" fill="var(--color-xp)" radius={8} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
