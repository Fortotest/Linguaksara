
'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, Users, Home, HelpCircle, Utensils, Clock, CheckCircle, Flame, Star } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const unitDetails = [
  {
    id: 1,
    prefix: "Unit 1",
    title: "The Basics",
    description: "Mulai dengan salam, perkenalan, dan alfabet untuk fondasi yang kuat.",
    icon: GraduationCap,
  },
  {
    id: 2,
    prefix: "Unit 2",
    title: "People & Things",
    description: "Pelajari kosakata tentang keluarga, pekerjaan, dan benda-benda di sekitar Anda.",
    icon: Users,
  },
  {
    id: 3,
    prefix: "Unit 3",
    title: "Simple Sentences",
    description: "Mulai membuat kalimat sederhana menggunakan 'is', 'am', 'are'.",
    icon: Home,
  },
  {
    id: 4,
    prefix: "Unit 4",
    title: "Asking Questions",
    description: "Belajar bertanya menggunakan 'What', 'Where', 'Who', dan 'How'.",
    icon: HelpCircle,
  },
  {
    id: 5,
    prefix: "Unit 5",
    title: "Basic Action Verbs",
    description: "Kuasai kata kerja aksi paling umum seperti 'have', 'eat', 'drink', 'go', 'want', dan 'like'.",
    icon: Flame,
  },
  {
    id: 6,
    prefix: "Unit 6",
    title: "Food and Dining",
    description: "Pelajari cara memesan makanan dan berinteraksi di restoran.",
    icon: Utensils,
  },
  {
    id: 7,
    prefix: "Unit 7",
    title: "Daily Routines",
    description: "Bicarakan tentang jadwal dan kebiasaan harian Anda.",
    icon: Clock,
  },
  {
    id: 8,
    prefix: "Unit 8",
    title: "Review & Consolidation",
    description: "Uji semua yang telah kamu pelajari dari Unit 1 hingga 7 dalam sebuah latihan skenario besar.",
    icon: Star,
  },
];


export default function LearnPage() {
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState<Record<string, number>>({});

  useEffect(() => {
    const newProgress = { ...progress };
    let changed = false;
    for (const [key, value] of searchParams.entries()) {
      if (key.endsWith('Progress')) {
        const unitId = key.replace('Progress', '');
        if (newProgress[unitId] !== Number(value)) {
          newProgress[unitId] = Number(value);
          changed = true;
        }
      }
    }
    if (changed) {
      setProgress(newProgress);
    }
  }, [searchParams, progress]);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold font-headline">Your Learning Path</h1>
        <p className="text-muted-foreground">Ikuti unit-unit ini untuk membangun keahlian Anda selangkah demi selangkah.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {unitDetails.map((unit) => {
          const Icon = unit.icon;
          const unitProgress = progress[`unit${unit.id}`] || 0;
          const isCompleted = unitProgress === 100;
          const isStarted = unitProgress > 0;

          return (
            <Card key={unit.id} className="flex flex-col">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="p-3 bg-accent rounded-lg">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div className="w-full">
                  <p className="text-sm font-semibold text-primary">{unit.prefix}</p>
                  <CardTitle className="text-2xl font-bold font-headline !mt-0">{unit.title}</CardTitle>
                  <CardDescription>{unit.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <Progress value={unitProgress} className="h-2" />
                <p className="text-sm text-muted-foreground mt-2">{unitProgress}% Selesai</p>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button asChild className="w-full" variant={isCompleted ? "outline" : "default"}>
                  <Link href={`/learn/${unit.id}`}>
                    {isCompleted ? <><CheckCircle className="mr-2 h-4 w-4" />Selesai</> : isStarted ? "Lanjutkan" : "Mulai Unit"}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  );
}
