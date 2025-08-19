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
        <h1 className="text-3xl font-bold font-headline">Reading Comprehension</h1>
        <p className="text-muted-foreground">Read the text below and click on the highlighted words to see their definitions.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>A Journey to the Ancient City</CardTitle>
          <CardDescription>By Alex Thompson</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Image
            src="https://placehold.co/800x300.png"
            alt="Ancient city"
            width={800}
            height={300}
            className="w-full h-auto rounded-lg mb-4"
            data-ai-hint="ancient city landscape"
          />
          <p className="leading-relaxed">
            The sun cast long shadows as our team made its final <WordWithDefinition word="ascent" definition="A climb or walk to the summit of a mountain or hill." /> towards the hidden city of Eldoria. For centuries, this place was considered a myth, a whisper among historians. The journey had been <WordWithDefinition word="arduous" definition="Involving or requiring strenuous effort; difficult and tiring." />, testing our limits at every turn. We navigated through dense jungles and crossed treacherous rivers.
          </p>
          <p className="leading-relaxed">
            As we passed through the stone gateway, a sense of <WordWithDefinition word="awe" definition="A feeling of reverential respect mixed with fear or wonder." /> washed over us. The architecture was magnificent, unlike anything we had seen before. Intricate carvings adorned every surface, telling stories of a long-lost civilization. We felt a <WordWithDefinition word="profound" definition="Very great or intense; having or showing great knowledge or insight." /> connection to the past, standing amidst the silent ruins. Our expedition's primary goal was to document these findings and preserve the legacy of this incredible place for future generations.
          </p>
        </CardContent>
      </Card>
    </>
  );
}
