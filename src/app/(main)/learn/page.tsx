import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Utensils, Plane, Briefcase, Film } from "lucide-react";

const units = [
  {
    title: "Unit 1: The Basics",
    description: "Start with greetings, introductions, and essential phrases for everyday conversation.",
    progress: 100,
    icon: Utensils,
  },
  {
    title: "Unit 2: Traveling",
    description: "Learn vocabulary for airports, hotels, and getting around a new city.",
    progress: 75,
    icon: Plane,
  },
  {
    title: "Unit 3: At Work",
    description: "Master business-related terms, emails, and professional communication.",
    progress: 40,
    icon: Briefcase,
  },
  {
    title: "Unit 4: Hobbies & Media",
    description: "Talk about your favorite movies, music, and pastimes.",
    progress: 0,
    icon: Film,
  },
];

export default function LearnPage() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold font-headline">Your Learning Path</h1>
        <p className="text-muted-foreground">Follow the units to build your skills step-by-step.</p>
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
                <p className="text-sm text-muted-foreground mt-2">{unit.progress}% Complete</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" disabled={unit.progress === 100}>
                  {unit.progress === 100 ? "Completed" : unit.progress > 0 ? "Continue" : "Start Unit"}
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  );
}
