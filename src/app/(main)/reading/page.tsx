
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { readingData, StoryCategory } from "@/lib/reading-data";
import { BookOpen } from "lucide-react";

export default function ReadingLibraryPage() {
  const categories: StoryCategory[] = ["Fiksi & Sastra", "Sejarah & Biografi", "Self-Improvement & Produktivitas", "Filsafat & Politik"];
  
  return (
    <>
      <div className="text-center mb-10">
        <div className="inline-block bg-accent p-3 rounded-full">
            <BookOpen className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-4xl font-bold font-headline mt-2">Perpustakaan Digital</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-2">Pilih cerita dari berbagai genre untuk melatih pemahaman membaca Anda. Setiap cerita dilengkapi dengan audio, kosakata interaktif, dan aktivitas unik.</p>
      </div>
      
      <div className="space-y-12">
        {categories.map(category => (
          <div key={category}>
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-primary/20">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {readingData.filter(story => story.category === category).map((story) => (
                <Link key={story.id} href={`/reading/${story.id}`}>
                  <Card className="h-full flex flex-col hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <CardHeader className="p-0">
                      <Image
                        src={story.image}
                        alt={story.title}
                        width={400}
                        height={200}
                        className="w-full h-32 object-cover rounded-t-lg"
                        data-ai-hint={story.dataAiHint}
                      />
                    </CardHeader>
                    <CardContent className="p-4 flex flex-col flex-grow">
                      <Badge variant="outline" className="mb-2 w-fit">{story.level}</Badge>
                      <CardTitle className="text-lg font-semibold leading-tight mb-1 flex-grow">{story.title}</CardTitle>
                      <CardDescription className="text-xs line-clamp-2">{story.synopsis}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
