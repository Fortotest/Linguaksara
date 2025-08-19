import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, Plane, Briefcase, Film } from "lucide-react";

const units = [
  {
    title: "Unit 1: Dasar-Dasar",
    description: "Mulai dengan salam, perkenalan, dan frasa penting untuk percakapan sehari-hari.",
    progress: 100,
    icon: GraduationCap,
  },
  {
    title: "Unit 2: Bepergian",
    description: "Pelajari kosakata untuk bandara, hotel, dan berkeliling di kota baru.",
    progress: 75,
    icon: Plane,
  },
  {
    title: "Unit 3: Di Tempat Kerja",
    description: "Kuasai istilah bisnis, email, dan komunikasi profesional.",
    progress: 40,
    icon: Briefcase,
  },
  {
    title: "Unit 4: Hobi & Media",
    description: "Bicarakan tentang film, musik, dan hiburan favorit Anda.",
    progress: 0,
    icon: Film,
  },
];

export default function LearnPage() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold font-headline">Jalur Belajar Anda</h1>
        <p className="text-muted-foreground">Ikuti unit-unit ini untuk membangun keahlian Anda selangkah demi selangkah.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {units.map((unit, index) => {
          const Icon = unit.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 bg-accent rounded-lg">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>{unit.title}</CardTitle>
                  <CardDescription>{unit.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <Progress value={unit.progress} className="h-2" />
                <p className="text-sm text-muted-foreground mt-2">{unit.progress}% Selesai</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" disabled={unit.progress === 100}>
                  {unit.progress === 100 ? "Selesai" : unit.progress > 0 ? "Lanjutkan" : "Mulai Unit"}
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  );
}
