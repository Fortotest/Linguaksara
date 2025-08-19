import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Bot, BookOpen } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartData = [
  { day: "Mon", xp: 50 },
  { day: "Tue", xp: 75 },
  { day: "Wed", xp: 120 },
  { day: "Thu", xp: 90 },
  { day: "Fri", xp: 150 },
  { day: "Sat", xp: 110 },
  { day: "Sun", xp: 200 },
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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-headline">Welcome back, Sofia!</h1>
          <p className="text-muted-foreground">Here's your progress and learning plan for today.</p>
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
            <CardDescription>Complete these tasks to reach your daily goal.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center gap-4 p-3 rounded-lg bg-secondary">
              <div className="bg-accent p-3 rounded-full">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Vocabulary Practice</p>
                <p className="text-sm text-muted-foreground">Learn 10 new words.</p>
              </div>
              <Button className="ml-auto" size="sm">Start</Button>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-lg bg-secondary">
              <div className="bg-accent p-3 rounded-full">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold">AI Conversation</p>
                <p className="text-sm text-muted-foreground">Practice for 5 minutes.</p>
              </div>
              <Button className="ml-auto" size="sm">Start</Button>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-lg bg-background border">
              <div className="bg-green-100 p-3 rounded-full">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-muted-foreground line-through">Grammar Lesson</p>
                <p className="text-sm text-muted-foreground">Past Tense - Completed!</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Weekly Progress</CardTitle>
            <CardDescription>Your XP gain over the last 7 days.</CardDescription>
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
                  tickFormatter={(value) => value.slice(0, 3)}
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
