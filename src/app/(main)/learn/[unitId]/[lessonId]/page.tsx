
import { Button } from "@/components/ui/button";
import { unitsData } from "@/lib/learn-data";
import { ArrowLeft, Check, Lightbulb, Pencil, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function LessonPage({ params }: { params: { unitId: string, lessonId: string } }) {
  const unit = unitsData[params.unitId as keyof typeof unitsData];
  const lesson = unit?.lessons.find(l => l.id === params.lessonId);

  if (!unit || !lesson) {
    return (
        <div className="text-center p-4">
            <h1 className="text-2xl font-bold">Pelajaran tidak ditemukan</h1>
            <p className="text-muted-foreground">Pelajaran yang Anda cari tidak ada.</p>
            <Button asChild className="mt-4">
                <Link href={`/learn/${params.unitId}`}>Kembali ke Unit</Link>
            </Button>
        </div>
    )
  }

  const Tip = ({ children }: { children: React.ReactNode }) => (
    <div className="my-6 flex items-start gap-4 rounded-lg border border-primary/20 bg-primary/5 p-4">
      <Lightbulb className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
      <div>
        <h4 className="font-bold text-primary mb-1">Pro Tip</h4>
        <div className="text-sm text-primary/90 prose prose-sm max-w-none">{children}</div>
      </div>
    </div>
  );

  const Practice = ({ children }: { children: React.ReactNode }) => (
    <div className="my-6 flex items-start gap-4 rounded-lg border border-accent-foreground/20 bg-accent p-4">
      <Pencil className="h-6 w-6 text-accent-foreground mt-1 flex-shrink-0" />
      <div>
        <h4 className="font-bold text-accent-foreground mb-1">Latihan</h4>
        <div className="text-sm text-muted-foreground prose prose-sm max-w-none">{children}</div>
      </div>
    </div>
  );

  const Dialogue = ({ character, text }: { character: string, text: string }) => (
    <div className="flex items-start gap-3 my-2">
      <div className="font-bold text-right text-muted-foreground text-sm w-16 flex-shrink-0">{character}:</div>
      <div className="flex-1 bg-muted rounded-md p-3 text-sm">{text}</div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link href={`/learn/${params.unitId}`} className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke {unit.title}
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold font-headline">{lesson.title}</h1>
        <p className="text-lg text-muted-foreground mt-1">{lesson.description}</p>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        {lesson.type === 'Lesson' && (
          <>
            {params.lessonId === '1' && (
              <>
                <p>Dalam pelajaran ini, kita akan fokus pada dasar-dasar yang akan membantu Anda memulai percakapan dalam bahasa Inggris.</p>
                
                <h3 className="flex items-center gap-2"><MessageSquareQuote className="h-5 w-5 text-primary"/>Sapaan (Greetings)</h3>
                <p>Sapaan adalah cara untuk memulai percakapan. Berikut adalah beberapa sapaan yang paling umum:</p>
                <ul>
                  <li><strong>Hello!</strong> - Sapaan standar yang bisa digunakan kapan saja.</li>
                  <li><strong>Hi!</strong> - Versi yang lebih santai dari "Hello".</li>
                  <li><strong>Good morning!</strong> - Digunakan di pagi hari.</li>
                  <li><strong>Good afternoon!</strong> - Digunakan di siang hari.</li>
                  <li><strong>Good evening!</strong> - Digunakan di malam hari.</li>
                </ul>

                <Tip>
                  <p>"Hi" lebih umum digunakan di antara teman atau dalam situasi informal. Gunakan "Hello" atau sapaan berdasarkan waktu dalam situasi yang lebih formal.</p>
                </Tip>

                <h3 className="flex items-center gap-2"><MessageSquareQuote className="h-5 w-5 text-primary"/>Perkenalan (Introductions)</h3>
                <p>Setelah menyapa, Anda mungkin ingin memperkenalkan diri. Berikut caranya:</p>
                <ul>
                    <li><strong>My name is [Your Name].</strong> (Nama saya adalah [Nama Anda].)</li>
                    <li><strong>I am [Your Name].</strong> (Saya [Nama Anda].)</li>
                    <li><strong>Nice to meet you.</strong> (Senang bertemu dengan Anda.)</li>
                </ul>

                <Practice>
                  <p>Coba perkenalkan diri Anda dengan lantang sekarang. Ucapkan: "Hello, my name is [Nama Anda]. Nice to meet you."</p>
                </Practice>

                <h4 className="font-semibold">Contoh Dialog</h4>
                <div className="not-prose">
                  <Dialogue character="Anna" text="Hello!" />
                  <Dialogue character="Budi" text="Hi! My name is Budi. What's your name?" />
                  <Dialogue character="Anna" text="I'm Anna. Nice to meet you, Budi." />
                  <Dialogue character="Budi" text="Nice to meet you too, Anna." />
                </div>
              </>
            )}

             {params.lessonId === '2' && (
              <>
                <p>Frasa dasar ini akan sangat berguna dalam berbagai situasi sehari-hari. Mari kita pelajari beberapa yang paling penting.</p>
                <ul>
                    <li><strong>Thank you.</strong> - Untuk mengucapkan terima kasih. Anda bisa menjawab dengan "You're welcome."</li>
                    <li><strong>Please.</strong> - Untuk membuat permintaan lebih sopan. Contoh: "Can I have some water, please?"</li>
                    <li><strong>Excuse me.</strong> - Untuk mendapatkan perhatian seseorang atau saat Anda tidak sengaja menabrak seseorang.</li>
                    <li><strong>I'm sorry.</strong> - Untuk meminta maaf.</li>
                    <li><strong>I don't understand.</strong> - Gunakan ini jika Anda tidak mengerti apa yang dikatakan seseorang.</li>
                </ul>
                <Tip>
                    <p>Menggunakan "please" dan "thank you" akan membuat Anda terdengar lebih sopan dan ramah. Ini adalah kebiasaan yang baik dalam budaya berbahasa Inggris.</p>
                </Tip>
              </>
            )}
             {params.lessonId !== '1' && params.lessonId !== '2' && (
                <p className="text-muted-foreground">Konten untuk pelajaran ini sedang dalam pengembangan. Silakan periksa kembali nanti!</p>
            )}
          </>
        )}

        {lesson.type === 'Quiz' && (
            <>
                <p>Saatnya menguji pengetahuan Anda! Jawablah pertanyaan-pertanyaan berikut berdasarkan apa yang telah Anda pelajari di unit ini.</p>
                <Card className="my-6 not-prose">
                    <CardContent className="p-6 space-y-6">
                        <div className="space-y-2">
                            <p className="font-semibold">1. Bagaimana cara Anda menyapa seseorang di pagi hari?</p>
                            <p className="text-sm text-green-600 dark:text-green-400">Jawaban: Good morning.</p>
                        </div>
                         <div className="space-y-2">
                            <p className="font-semibold">2. Apa yang Anda katakan setelah seseorang berterima kasih kepada Anda?</p>
                            <p className="text-sm text-green-600 dark:text-green-400">Jawaban: You're welcome.</p>
                        </div>
                         <div className="space-y-2">
                            <p className="font-semibold">3. "Nice to meet you" artinya...</p>
                            <p className="text-sm text-green-600 dark:text-green-400">Jawaban: Senang bertemu dengan Anda.</p>
                        </div>
                    </CardContent>
                </Card>
            </>
        )}
        
        {lesson.type === 'Practice' && (
             <p className="text-muted-foreground">Konten untuk latihan ini sedang dalam pengembangan. Silakan periksa kembali nanti!</p>
        )}

      </div>
      <div className="mt-8 mb-4 text-center">
        <Button asChild size="lg">
          <Link href={`/learn/${params.unitId}`}>
            <Check className="mr-2 h-4 w-4" />
            Selesaikan Pelajaran
          </Link>
        </Button>
      </div>
    </div>
  );
}
