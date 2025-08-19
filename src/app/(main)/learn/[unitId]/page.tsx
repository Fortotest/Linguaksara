
'use client';

import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, BookOpen, PencilRuler } from "lucide-react";
import Link from "next/link";
import { unitsData } from "@/lib/learn-data";
import type { LessonType } from "@/lib/learn-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const getLessonIcon = (type: LessonType) => {
  switch (type) {
    case "Lesson": return <BookOpen className="h-5 w-5 text-primary" />;
    case "Quiz": return <PencilRuler className="h-5 w-5 text-primary" />;
    case "Practice": return <BookOpen className="h-5 w-5 text-primary" />;
  }
};

export default function UnitDetailPage({ params }: { params: { unitId: string } }) {
  const unit = unitsData[params.unitId as keyof typeof unitsData];
  const searchParams = useSearchParams();
  
  const [lessons, setLessons] = useState(() => {
    return unit?.lessons.map(l => ({ ...l })) || [];
  });

  useEffect(() => {
    const completedLessonId = searchParams.get('completedLessonId');
    if (completedLessonId) {
      setLessons(prevLessons => 
        prevLessons.map(lesson => 
          lesson.id === completedLessonId ? { ...lesson, completed: true } : lesson
        )
      );
    }
  }, [searchParams]);

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

  const completedCount = lessons.filter(l => l.completed).length;
  const totalLessons = lessons.length;
  const unitProgress = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  return (
    <div className="max-w-4xl mx-auto">
        <div className="mb-6">
            <Link href={`/learn?unit${params.unitId}Progress=${unitProgress}`} className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-2">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Learning Path
            </Link>
            <h1 className="text-4xl font-bold font-headline">{unit.prefix}: {unit.title}</h1>
        </div>

        <div className="space-y-4">
            {lessons.map((lesson) => (
                 <Card key={lesson.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="flex items-center gap-4 p-4">
                        <div className="p-3 bg-accent rounded-lg">
                            {getLessonIcon(lesson.type as LessonType)}
                        </div>
                        <div className="flex-grow">
                            <h3 className="font-semibold">{lesson.title}</h3>
                            <Badge variant="outline" className="mt-1">{lesson.type}</Badge>
                        </div>
                        <Button asChild variant={lesson.completed ? "ghost" : "default"} size="sm" className="ml-auto" disabled={lesson.completed}>
                           <Link href={`/learn/${params.unitId}/${lesson.id}`}>
                              {lesson.completed ? (
                                  <>
                                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                                      <span className="text-muted-foreground">Selesai</span>
                                  </>
                              ) : (
                                  "Mulai"
                              )}
                           </Link>
                        </Button>
                    </CardContent>
                 </Card>
            ))}
        </div>
    </div>
  );
}
