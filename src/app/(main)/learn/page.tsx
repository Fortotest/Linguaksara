
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, Plane, Briefcase, Film, CheckCircle } from "lucide-react";
import Link from "next/link";

const units = [
  {
    id: 1,
    title: "Unit 1: The Basics",
    description: "Mulai dengan salam, perkenalan, dan frasa penting untuk percakapan sehari-hari.",
    progress: 100,
    icon: GraduationCap,
  },
  {
    id: 2,
    title: "Unit 2: Traveling",
    description: "Pelajari kosakata untuk bandara, hotel, dan berkeliling di kota baru.",
    progress: 75,
    icon: Plane,
  },
  {
    id: 3,
    title: "Unit 3: At the Workplace",
    description: "Kuasai istilah bisnis, email, dan komunikasi profesional.",
    progress: 40,
    icon: Briefcase,
  },
  {
    id: 4,
    title: "Unit 4: Hobbies & Media",
    description: "Bicarakan tentang film, musik, dan hiburan favorit Anda.",
    progress: 0,
    icon: Film,
  },
];

export default function LearnPage() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold font-headline">Your Learning Path</h1>
        <p className="text-muted-foreground">Ikuti unit-unit ini untuk membangun keahlian Anda selangkah demi selangkah.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {units.map((unit) => {
          const Icon = unit.icon;
          const isCompleted = unit.progress === 100;
          const isStarted = unit.progress > 0;

          return (
            <Card key={unit.id} className="flex flex-col">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="p-3 bg-accent rounded-lg">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle>{unit.title}</CardTitle>
                  <CardDescription>{unit.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <Progress value={unit.progress} className="h-2" />
                <p className="text-sm text-muted-foreground mt-2">{unit.progress}% Selesai</p>
              </CardContent>
              <CardFooter>
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
