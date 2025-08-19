

import { Button } from "@/components/ui/button";
import { unitsData } from "@/lib/learn-data";
import { ArrowLeft, Check, Lightbulb, Pencil, MessageSquareQuote, HelpCircle, BookCopy, Utensils, Clock } from "lucide-react";
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
            {params.lessonId === '1' && params.unitId === '1' && (
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

             {params.lessonId === '2' && params.unitId === '1' && (
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

            {params.lessonId === '3' && params.unitId === '1' && (
                <>
                    <p>Mengenal alfabet dan angka adalah fondasi penting dalam belajar bahasa apa pun, termasuk bahasa Inggris.</p>
                    <h3 className="flex items-center gap-2"><BookCopy className="h-5 w-5 text-primary"/>The Alphabet (Alfabet)</h3>
                    <p>Alfabet bahasa Inggris memiliki 26 huruf. Pengucapannya mungkin berbeda dari bahasa Indonesia. Dengarkan dan ulangi.</p>
                    <p className="font-mono text-lg tracking-widest">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
                    <h3 className="flex items-center gap-2"><BookCopy className="h-5 w-5 text-primary"/>Numbers (Angka)</h3>
                    <p>Mari kita mulai dengan angka 1 sampai 10.</p>
                    <ul>
                        <li><strong>One</strong> (1)</li>
                        <li><strong>Two</strong> (2)</li>
                        <li><strong>Three</strong> (3)</li>
                        <li><strong>Four</strong> (4)</li>
                        <li><strong>Five</strong> (5)</li>
                        <li><strong>Six</strong> (6)</li>
                        <li><strong>Seven</strong> (7)</li>
                        <li><strong>Eight</strong> (8)</li>
                        <li><strong>Nine</strong> (9)</li>
                        <li><strong>Ten</strong> (10)</li>
                    </ul>
                    <Practice>
                        <p>Coba sebutkan nomor telepon Anda dalam bahasa Inggris, angka per angka. Contoh: "My number is two-one-two-five-five-five-one-two-three-four."</p>
                    </Practice>
                </>
            )}

            {params.lessonId === '5' && params.unitId === '1' && (
                <>
                    <p>Bertanya adalah cara terbaik untuk mendapatkan informasi. Mari pelajari cara membuat pertanyaan sederhana.</p>
                    <h3 className="flex items-center gap-2"><HelpCircle className="h-5 w-5 text-primary"/>Kata Tanya Dasar (Basic Question Words)</h3>
                    <p>Ini adalah "5W" yang terkenal, ditambah "How".</p>
                    <ul>
                        <li><strong>What?</strong> (Apa?) - Untuk menanyakan tentang benda atau informasi. Contoh: <em>What is your name?</em></li>
                        <li><strong>Where?</strong> (Di mana?) - Untuk menanyakan lokasi. Contoh: <em>Where is the bathroom?</em></li>
                        <li><strong>Who?</strong> (Siapa?) - Untuk menanyakan tentang orang. Contoh: <em>Who is that?</em></li>
                        <li><strong>When?</strong> (Kapan?) - Untuk menanyakan waktu. Contoh: <em>When is the meeting?</em></li>
                        <li><strong>Why?</strong> (Mengapa?) - Untuk menanyakan alasan. Contoh: <em>Why are you late?</em></li>
                        <li><strong>How?</strong> (Bagaimana?) - Untuk menanyakan cara atau kondisi. Contoh: <em>How are you?</em></li>
                    </ul>
                    <Tip>
                        <p>Untuk jawaban sederhana, Anda bisa mulai dengan "It is..." atau "He/She is...". Contoh: "Where is the book?" -> "It is on the table."</p>
                    </Tip>
                </>
            )}
            
            {params.lessonId === '1' && params.unitId === '5' && (
                <>
                    <p>Makan di luar adalah pengalaman yang menyenangkan. Pelajaran ini akan membantu Anda memesan makanan dengan percaya diri.</p>
                    <h3 className="flex items-center gap-2"><Utensils className="h-5 w-5 text-primary"/>Frasa Kunci di Restoran</h3>
                    <ul>
                        <li>Meminta meja: <strong>"A table for two, please."</strong> (Meja untuk dua orang.)</li>
                        <li>Meminta menu: <strong>"Can I see the menu, please?"</strong> (Bolehkah saya lihat menunya?)</li>
                        <li>Siap memesan: <strong>"I'm ready to order."</strong> (Saya siap memesan.)</li>
                        <li>Memesan makanan: - <strong>"I would like the chicken soup."</strong> (Saya ingin memesan sup ayam.) atau <strong>"I'll have the steak."</strong> (Saya pesan steak.)</li>
                        <li>Meminta tagihan: <strong>"Can I have the bill, please?"</strong> (Bolehkah saya minta tagihannya?)</li>
                    </ul>
                     <h4 className="font-semibold">Contoh Dialog</h4>
                    <div className="not-prose">
                        <Dialogue character="Waiter" text="Hello, are you ready to order?" />
                        <Dialogue character="You" text="Yes, I would like the pasta, please." />
                        <Dialogue character="Waiter" text="Anything to drink?" />
                        <Dialogue character="You" text="Just water for me, thank you." />
                    </div>
                </>
            )}

            {params.lessonId === '1' && params.unitId === '6' && (
                <>
                    <p>Menceritakan kegiatan sehari-hari adalah cara yang bagus untuk melatih penggunaan present tense.</p>
                    <h3 className="flex items-center gap-2"><Clock className="h-5 w-5 text-primary"/>Kosakata Rutinitas Harian</h3>
                    <ul>
                        <li><strong>Wake up</strong> - Bangun tidur</li>
                        <li><strong>Take a shower</strong> - Mandi</li>
                        <li><strong>Have breakfast</strong> - Sarapan</li>
                        <li><strong>Go to work/school</strong> - Pergi kerja/sekolah</li>
                        <li><strong>Have lunch</strong> - Makan siang</li>
                        <li><strong>Finish work</strong> - Selesai kerja</li>
                        <li><strong>Have dinner</strong> - Makan malam</li>
                        <li><strong>Watch TV</strong> - Menonton TV</li>
                        <li><strong>Go to bed</strong> - Tidur</li>
                    </ul>
                    <Practice>
                        <p>Coba buat kalimat sederhana tentang rutinitas Anda. Contoh: "I wake up at 6 AM. Then, I have breakfast. I go to work at 8 AM."</p>
                    </Practice>
                </>
            )}

             {(!['1', '2', '3', '5'].includes(params.lessonId) || params.unitId !== '1') && 
              (!['1'].includes(params.lessonId) || !['5','6'].includes(params.unitId)) &&
              (
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
          <Link href={`/learn/${params.unitId}?completedLessonId=${lesson.id}`}>
            <Check className="mr-2 h-4 w-4" />
            Selesaikan Pelajaran
          </Link>
        </Button>
      </div>
    </div>
  );
}
