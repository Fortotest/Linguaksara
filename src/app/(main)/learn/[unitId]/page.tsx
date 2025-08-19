
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, CheckCircle, PencilRuler } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

// Data statis untuk contoh
const unitsData = {
  "1": { 
    title: "Unit 1: The Basics", 
    lessons: [
      { title: "Greetings and Introductions", type: "Lesson", completed: true },
      { title: "Basic Phrases", type: "Lesson", completed: true },
      { title: "Alphabet and Numbers", type: "Lesson", completed: true },
      { title: "Quiz: The Basics", type: "Quiz", completed: true },
    ] 
  },
  "2": { 
    title: "Unit 2: Traveling",
    lessons: [
      { title: "At the Airport", type: "Lesson", completed: true },
      { title: "Booking a Hotel", type: "Lesson", completed: true },
      { title: "Asking for Directions", type: "Lesson", completed: false },
      { title: "Quiz: Traveling", type: "Quiz", completed: false },
    ]
  },
  "3": { 
    title: "Unit 3: At the Workplace",
    lessons: [
      { title: "Writing a Professional Email", type: "Lesson", completed: true },
      { title: "Common Business Idioms", type: "Lesson", completed: false },
      { title: "Phone Call Simulation", type: "Practice", completed: false },
      { title: "Quiz: Workplace English", type: "Quiz", completed: false },
    ]
  },
  "4": { 
    title: "Unit 4: Hobbies & Media",
    lessons: [
      { title: "Talking About Movies", type: "Lesson", completed: false },
      { title: "Discussing Music Genres", type: "Lesson", completed: false },
      { title: "Reading a News Article", type: "Practice", completed: false },
      { title: "Quiz: Hobbies & Media", type: "Quiz", completed: false },
    ]
  },
};

type LessonType = "Lesson" | "Quiz" | "Practice";

const getLessonIcon = (type: LessonType) => {
  switch (type) {
    case "Lesson": return <BookOpen className="h-5 w-5 text-primary" />;
    case "Quiz": return <PencilRuler className="h-5 w-5 text-primary" />;
    case "Practice": return <BookOpen className="h-5 w-5 text-primary" />;
  }
};


export default function UnitDetailPage({ params }: { params: { unitId: string } }) {
  const unit = unitsData[params.unitId as keyof typeof unitsData];

  if (!unit) {
    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold">Unit not found</h1>
            <p className="text-muted-foreground">The unit you are looking for does not exist.</p>
            <Button asChild className="mt-4">
                <Link href="/learn">Back to Learning Path</Link>
            </Button>
        </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
        <div className="mb-6">
            <Link href="/learn" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-2">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Learning Path
            </Link>
            <h1 className="text-4xl font-bold font-headline">{unit.title}</h1>
        </div>

        <div className="space-y-4">
            {unit.lessons.map((lesson, index) => (
                 <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="flex items-center gap-4 p-4">
                        <div className="p-3 bg-accent rounded-lg">
                            {getLessonIcon(lesson.type as LessonType)}
                        </div>
                        <div className="flex-grow">
                            <h3 className="font-semibold">{lesson.title}</h3>
                            <Badge variant="outline" className="mt-1">{lesson.type}</Badge>
                        </div>
                        <Button variant={lesson.completed ? "ghost" : "default"} size="sm" className="ml-auto">
                            {lesson.completed ? (
                                <>
                                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                                    <span className="text-muted-foreground">Selesai</span>
                                </>
                            ) : (
                                "Mulai"
                            )}
                        </Button>
                    </CardContent>
                 </Card>
            ))}
        </div>
    </div>
  );
}
