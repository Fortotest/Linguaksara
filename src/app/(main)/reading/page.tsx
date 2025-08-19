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
        <h1 className="text-3xl font-bold font-headline">Latihan Membaca</h1>
        <p className="text-muted-foreground">Baca teks di bawah dan klik kata yang ditandai untuk melihat artinya.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Perjalanan ke Kota Kuno</CardTitle>
          <CardDescription>Oleh Alex Thompson</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Image
            src="https://placehold.co/800x300.png"
            alt="Kota Kuno"
            width={800}
            height={300}
            className="w-full h-auto rounded-lg mb-4"
            data-ai-hint="ancient city landscape"
          />
          <p className="leading-relaxed">
            Matahari menciptakan bayangan panjang saat tim kami melakukan <WordWithDefinition word="ascent" definition="Pendakian atau perjalanan naik ke puncak gunung atau bukit." /> terakhir menuju kota tersembunyi Eldoria. Selama berabad-abad, tempat ini dianggap mitos, bisikan di antara para sejarawan. Perjalanan ini sangat <WordWithDefinition word="arduous" definition="Membutuhkan usaha yang sangat berat; sulit dan melelahkan." />, menguji batas kemampuan kami di setiap belokan. Kami menjelajahi hutan lebat dan menyeberangi sungai-sungai berbahaya.
          </p>
          <p className="leading-relaxed">
            Saat kami melewati gerbang batu, rasa <WordWithDefinition word="awe" definition="Perasaan takjub dan hormat yang bercampur dengan sedikit rasa takut atau heran." /> menyelimuti kami. Arsitekturnya megah, tidak seperti apa pun yang pernah kami lihat sebelumnya. Ukiran-ukiran rumit menghiasi setiap permukaan, menceritakan kisah peradaban yang telah lama hilang. Kami merasakan hubungan yang <WordWithDefinition word="profound" definition="Sangat mendalam atau kuat; menunjukkan pengetahuan atau wawasan yang hebat." /> dengan masa lalu, berdiri di tengah reruntuhan yang sunyi. Tujuan utama ekspedisi kami adalah mendokumentasikan temuan ini dan melestarikan warisan tempat luar biasa ini untuk generasi mendatang.
          </p>
        </CardContent>
      </Card>
    </>
  );
}
