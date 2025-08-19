import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";

type WordWithDefinitionProps = {
  word: string;
  definition: string;
};

const WordWithDefinition = ({ word, definition }: WordWithDefinitionProps) => (
  <Popover>
    <PopoverTrigger asChild>
      <span className="text-primary font-semibold underline decoration-primary/50 decoration-dotted cursor-pointer hover:bg-primary/10 rounded-md px-1 py-0.5">
        {word}
      </span>
    </PopoverTrigger>
    <PopoverContent className="w-80">
      <div className="grid gap-4">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">{word}</h4>
          <p className="text-sm text-muted-foreground">
            {definition}
          </p>
        </div>
      </div>
    </PopoverContent>
  </Popover>
);

export default function ReadingPage() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold font-headline">Reading Practice</h1>
        <p className="text-muted-foreground">Baca teks di bawah dan klik kata yang ditandai untuk melihat artinya.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>A Journey to the Ancient City</CardTitle>
          <CardDescription>By Alex Thompson</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Image
            src="https://raw.githubusercontent.com/tesweb2025/Market-Intelligence-5.1/d1ef5d75d025e2d4a8b2de87f2f59ac04fe3942a/assets_task_01k31ncqgffyy9dnfc7x1639ew_1755623967_img_0.webp"
            alt="Kota Kuno"
            width={800}
            height={300}
            className="w-full h-auto rounded-lg mb-4"
            data-ai-hint="ancient city landscape"
          />
          <p className="leading-relaxed">
            The sun cast long shadows as our team made the final <WordWithDefinition word="ascent" definition="Pendakian atau perjalanan naik ke puncak gunung atau bukit." /> to the hidden city of Eldoria. For centuries, this place was considered a myth, a whisper among historians. The journey was <WordWithDefinition word="arduous" definition="Membutuhkan usaha yang sangat berat; sulit dan melelahkan." />, testing our limits at every turn. We navigated through dense jungles and crossed treacherous rivers.
          </p>
          <p className="leading-relaxed">
            As we passed through the stone gates, a sense of <WordWithDefinition word="awe" definition="Perasaan takjub dan hormat yang bercampur dengan sedikit rasa takut atau heran." /> washed over us. The architecture was magnificent, unlike anything we had ever seen. Intricate carvings adorned every surface, telling stories of a long-lost civilization. We felt a <WordWithDefinition word="profound" definition="Sangat mendalam atau kuat; menunjukkan pengetahuan atau wawasan yang hebat." /> connection to the past, standing amidst the silent ruins. Our expedition's primary goal was to document these findings and preserve the legacy of this incredible place for future generations.
          </p>
        </CardContent>
      </Card>
    </>
  );
}
