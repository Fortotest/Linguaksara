
import { Button } from "@/components/ui/button";
import { unitsData } from "@/lib/learn-data";
import { ArrowLeft, Check, Lightbulb, Pencil, MessageSquareQuote, HelpCircle, BookCopy, Utensils, Clock, Home, Users, Flame, Star } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { PronunciationCoach } from "@/components/pronunciation-coach";

export default function LessonPage({ params }: { params: { unitId: string, lessonId: string } }) {
  const { unitId, lessonId } = params;
  const unit = unitsData[unitId as keyof typeof unitsData];
  const lesson = unit?.lessons.find(l => l.id === lessonId);

  if (!unit || !lesson) {
    return (
        <div className="text-center p-4">
            <h1 className="text-2xl font-bold">Pelajaran tidak ditemukan</h1>
            <p className="text-muted-foreground">Pelajaran yang Anda cari tidak ada.</p>
            <Button asChild className="mt-4">
                <Link href={`/learn/${unitId}`}>Kembali ke Unit</Link>
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
        <Link href={`/learn/${unitId}`} className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke {unit.title}
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold font-headline">{lesson.title}</h1>
        <p className="text-lg text-muted-foreground mt-1">{lesson.description}</p>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        {lesson.type === 'Lesson' && (
          <>
            {/* Unit 1 Content */}
            {unitId === '1' && lessonId === '1' && (
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
                <h3 className="flex items-center gap-2"><MessageSquareQuote className="h-5 w-5 text-primary"/>Perkenalan (Introductions)</h3>
                <p>Setelah menyapa, Anda mungkin ingin memperkenalkan diri. Berikut caranya:</p>
                <ul>
                    <li><strong>My name is [Your Name].</strong> (Nama saya adalah [Nama Anda].)</li>
                    <li><strong>I am [Your Name].</strong> (Saya [Nama Anda].)</li>
                    <li><strong>Nice to meet you.</strong> (Senang bertemu dengan Anda.)</li>
                </ul>
                <h4 className="font-semibold">Contoh Dialog</h4>
                <div className="not-prose">
                  <Dialogue character="Anna" text="Hello!" />
                  <Dialogue character="Budi" text="Hi! My name is Budi. What's your name?" />
                  <Dialogue character="Anna" text="I'm Anna. Nice to meet you, Budi." />
                  <Dialogue character="Budi" text="Nice to meet you too, Anna." />
                </div>
              </>
            )}
             {unitId === '1' && lessonId === '2' && (
              <>
                <p>Mengenal alfabet dan angka adalah fondasi penting dalam belajar bahasa apa pun, termasuk bahasa Inggris.</p>
                <h3 className="flex items-center gap-2"><BookCopy className="h-5 w-5 text-primary"/>The Alphabet (Alfabet)</h3>
                <p>Alfabet bahasa Inggris memiliki 26 huruf. Pengucapannya mungkin berbeda dari bahasa Indonesia. Dengarkan dan ulangi.</p>
                <p className="font-mono text-lg tracking-widest">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
                <h3 className="flex items-center gap-2"><BookCopy className="h-5 w-5 text-primary"/>Numbers (Angka)</h3>
                <p>Mari kita mulai dengan angka 1 sampai 10.</p>
                <ul><li><strong>One</strong> (1), <strong>Two</strong> (2), <strong>Three</strong> (3), <strong>Four</strong> (4), <strong>Five</strong> (5), <strong>Six</strong> (6), <strong>Seven</strong> (7), <strong>Eight</strong> (8), <strong>Nine</strong> (9), <strong>Ten</strong> (10)</li></ul>
              </>
            )}
             {unitId === '1' && lessonId === '3' && (
              <>
                <p>Frasa dasar ini akan sangat berguna dalam berbagai situasi sehari-hari. Mari kita pelajari beberapa yang paling penting.</p>
                <ul>
                    <li><strong>Thank you.</strong> - Untuk mengucapkan terima kasih. Anda bisa menjawab dengan "You're welcome."</li>
                    <li><strong>Please.</strong> - Untuk membuat permintaan lebih sopan. Contoh: "Can I have some water, please?"</li>
                    <li><strong>Excuse me.</strong> - Untuk mendapatkan perhatian seseorang atau saat Anda tidak sengaja menabrak seseorang.</li>
                    <li><strong>I'm sorry.</strong> - Untuk meminta maaf.</li>
                    <li><strong>I don't understand.</strong> - Gunakan ini jika Anda tidak mengerti apa yang dikatakan seseorang.</li>
                </ul>
              </>
            )}

            {/* Unit 2 Content */}
            {unitId === '2' && lessonId === '1' && (
              <>
                <p>Membicarakan keluarga adalah cara yang bagus untuk melatih kosakata dasar. Mari kita pelajari beberapa istilah penting.</p>
                <h3 className="flex items-center gap-2"><Users className="h-5 w-5 text-primary"/>Keluarga Inti (Immediate Family)</h3>
                <ul>
                    <li><strong>Mother</strong> (Ibu), <strong>Father</strong> (Ayah) - Secara bersamaan disebut <strong>Parents</strong> (Orang Tua).</li>
                    <li><strong>Sister</strong> (Saudari), <strong>Brother</strong> (Saudara) - Secara bersamaan disebut <strong>Siblings</strong> (Saudara Kandung).</li>
                    <li><strong>Wife</strong> (Istri), <strong>Husband</strong> (Suami) - Secara bersamaan disebut <strong>Spouse</strong> (Pasangan).</li>
                    <li><strong>Daughter</strong> (Anak perempuan), <strong>Son</strong> (Anak laki-laki) - Secara bersamaan disebut <strong>Children</strong> (Anak-anak).</li>
                </ul>
              </>
            )}
            {unitId === '2' && lessonId === '2' && (
              <>
                  <p>Mengetahui nama-nama pekerjaan umum akan membantu Anda dalam percakapan sehari-hari.</p>
                  <h3 className="flex items-center gap-2"><Users className="h-5 w-5 text-primary"/>Pekerjaan Umum (Common Jobs)</h3>
                  <ul>
                      <li><strong>Teacher</strong> (Guru) - Someone who teaches students.</li>
                      <li><strong>Doctor</strong> (Dokter) - Someone who treats sick people.</li>
                      <li><strong>Engineer</strong> (Insinyur) - Someone who designs and builds things.</li>
                      <li><strong>Artist</strong> (Seniman) - Someone who creates art.</li>
                      <li><strong>Chef</strong> (Koki) - Someone who cooks food in a restaurant.</li>
                  </ul>
              </>
            )}

             {/* Unit 3 Content */}
            {unitId === '3' && lessonId === '1' && (
              <>
                <p>Kata 'is', 'am', dan 'are' adalah bentuk dari kata kerja 'to be', yang paling dasar dan penting dalam bahasa Inggris.</p>
                <h3 className="flex items-center gap-2"><BookCopy className="h-5 w-5 text-primary"/>Penggunaan 'is', 'am', 'are'</h3>
                <ul>
                    <li>Gunakan <strong>am</strong> dengan <strong>I</strong>. &rarr; <strong>I am</strong> a student. (Saya adalah seorang siswa)</li>
                    <li>Gunakan <strong>are</strong> dengan <strong>you, we, they</strong>. &rarr; <strong>You are</strong> happy. (Kamu senang). <strong>We are</strong> friends. (Kami teman).</li>
                    <li>Gunakan <strong>is</strong> dengan <strong>he, she, it</strong>. &rarr; <strong>He is</strong> a doctor. (Dia adalah seorang dokter). <strong>She is</strong> tall. (Dia tinggi).</li>
                </ul>
                 <Tip>
                  <p>Anda bisa menyingkatnya! <strong>I am</strong> menjadi <strong>I'm</strong>. <strong>You are</strong> menjadi <strong>You're</strong>. <strong>He is</strong> menjadi <strong>He's</strong>.</p>
                </Tip>
              </>
            )}
            {unitId === '3' && lessonId === '2' && (
                <>
                    <p>Menggunakan 'this' dan 'that' membantu Anda menunjuk benda-benda di sekitar Anda.</p>
                    <h3 className="flex items-center gap-2"><BookCopy className="h-5 w-5 text-primary"/>This (Ini) vs. That (Itu)</h3>
                    <ul>
                        <li>Gunakan <strong>This is</strong> untuk benda yang dekat dengan Anda. &rarr; <strong>This is</strong> a book. (Ini adalah sebuah buku).</li>
                        <li>Gunakan <strong>That is</strong> untuk benda yang jauh dari Anda. &rarr; <strong>That is</strong> a car. (Itu adalah sebuah mobil).</li>
                    </ul>
                    <Tip>
                        <p>Bentuk jamaknya adalah <strong>These are</strong> (untuk benda dekat) dan <strong>Those are</strong> (untuk benda jauh).</p>
                    </Tip>
                </>
            )}

            {/* Unit 4 Content */}
            {unitId === '4' && lessonId === '1' && (
              <>
                <p>Kata tanya adalah kunci untuk mendapatkan informasi. Mari kita mulai dengan dua yang paling dasar: 'What' dan 'Who'.</p>
                <h3 className="flex items-center gap-2"><HelpCircle className="h-5 w-5 text-primary"/>What (Apa)</h3>
                <p>Gunakan 'What' untuk menanyakan tentang benda atau informasi.</p>
                <ul>
                    <li><em>What is your name?</em> (Siapa namamu?)</li>
                    <li><em>What is this?</em> (Apa ini?)</li>
                </ul>
                <h3 className="flex items-center gap-2"><HelpCircle className="h-5 w-5 text-primary"/>Who (Siapa)</h3>
                <p>Gunakan 'Who' untuk menanyakan tentang orang.</p>
                <ul>
                    <li><em>Who is that?</em> (Siapa itu?)</li>
                    <li><em>Who is your teacher?</em> (Siapa gurumu?)</li>
                </ul>
              </>
            )}
             {unitId === '4' && lessonId === '2' && (
                <>
                    <p>Mari kita lanjutkan dengan kata tanya untuk tempat dan waktu.</p>
                    <h3 className="flex items-center gap-2"><HelpCircle className="h-5 w-5 text-primary"/>Where (Di mana)</h3>
                    <p>Gunakan 'Where' untuk menanyakan lokasi.</p>
                    <ul>
                        <li><em>Where is the bathroom?</em> (Di mana kamar mandi?)</li>
                        <li><em>Where do you live?</em> (Di mana kamu tinggal?)</li>
                    </ul>
                    <h3 className="flex items-center gap-2"><HelpCircle className="h-5 w-5 text-primary"/>When (Kapan)</h3>
                    <p>Gunakan 'When' untuk menanyakan waktu.</p>
                    <ul>
                        <li><em>When is your birthday?</em> (Kapan ulang tahunmu?)</li>
                        <li><em>When does the movie start?</em> (Kapan filmnya mulai?)</li>
                    </ul>
                </>
            )}

            {/* Unit 5 Content - NEW */}
            {unitId === '5' && lessonId === '1' && (
              <>
                <p>Kata kerja 'have' dan 'has' sangat penting untuk menyatakan kepemilikan.</p>
                <h3 className="flex items-center gap-2"><Flame className="h-5 w-5 text-primary"/>Menggunakan 'have' dan 'has'</h3>
                <ul>
                    <li>Gunakan <strong>have</strong> dengan <strong>I, you, we, they</strong>. &rarr; <strong>I have</strong> a cat. (Saya punya seekor kucing). <strong>They have</strong> a car. (Mereka punya sebuah mobil).</li>
                    <li>Gunakan <strong>has</strong> dengan <strong>he, she, it</strong>. &rarr; <strong>She has</strong> a book. (Dia punya sebuah buku).</li>
                </ul>
              </>
            )}
            {unitId === '5' && lessonId === '2' && (
              <>
                <p>Kata kerja aksi dasar ini akan membuat kalimat Anda lebih hidup.</p>
                <h3 className="flex items-center gap-2"><Flame className="h-5 w-5 text-primary"/>Kata Kerja Aksi Umum</h3>
                <ul>
                    <li><strong>eat</strong> (makan): I <strong>eat</strong> rice. (Saya makan nasi).</li>
                    <li><strong>drink</strong> (minum): I <strong>drink</strong> water. (Saya minum air).</li>
                    <li><strong>go</strong> (pergi): I <strong>go</strong> to school. (Saya pergi ke sekolah).</li>
                </ul>
              </>
            )}
            {unitId === '5' && lessonId === '3' && (
              <>
                <p>Belajar cara mengekspresikan apa yang Anda inginkan dan sukai.</p>
                <h3 className="flex items-center gap-2"><Flame className="h-5 w-5 text-primary"/>Mengekspresikan Keinginan</h3>
                <ul>
                    <li><strong>want</strong> (ingin): I <strong>want</strong> coffee. (Saya ingin kopi).</li>
                    <li><strong>like</strong> (suka): I <strong>like</strong> music. (Saya suka musik).</li>
                </ul>
                <h4 className="font-semibold">Contoh Dialog</h4>
                <div className="not-prose">
                  <Dialogue character="You" text="Hello. I want a coffee, please." />
                  <Dialogue character="Barista" text="Okay. One coffee." />
                </div>
              </>
            )}
            
            {/* Unit 6 Content */}
            {unitId === '6' && lessonId === '1' && (
              <>
                <p>Mari kita pelajari nama-nama makanan dan minuman yang sering kita temui sehari-hari.</p>
                <h3 className="flex items-center gap-2"><Utensils className="h-5 w-5 text-primary"/>Makanan (Food)</h3>
                <ul>
                    <li><strong>Rice</strong> (Nasi)</li>
                    <li><strong>Bread</strong> (Roti)</li>
                    <li><strong>Chicken</strong> (Ayam)</li>
                    <li><strong>Fish</strong> (Ikan)</li>
                    <li><strong>Vegetables</strong> (Sayuran)</li>
                </ul>
                <h3 className="flex items-center gap-2"><Utensils className="h-5 w-5 text-primary"/>Minuman (Drinks)</h3>
                <ul>
                    <li><strong>Water</strong> (Air)</li>
                    <li><strong>Tea</strong> (Teh)</li>
                    <li><strong>Coffee</strong> (Kopi)</li>
                    <li><strong>Juice</strong> (Jus)</li>
                </ul>
              </>
            )}

            {/* Unit 7 Content */}
            {unitId === '7' && lessonId === '1' && (
              <>
                <p>Menceritakan kegiatan sehari-hari adalah cara yang bagus untuk melatih penggunaan present tense.</p>
                <h3 className="flex items-center gap-2"><Clock className="h-5 w-5 text-primary"/>Kosakata Rutinitas Harian</h3>
                <ul>
                    <li><strong>Wake up</strong> - Bangun tidur</li>
                    <li><strong>Take a shower</strong> - Mandi</li>
                    <li><strong>Have breakfast</strong> - Sarapan</li>
                    <li><strong>Go to work/school</strong> - Pergi kerja/sekolah</li>
                    <li><strong>Have lunch</strong> - Makan siang</li>
                    <li><strong>Have dinner</strong> - Makan malam</li>
                    <li><strong>Go to bed</strong> - Tidur</li>
                </ul>
              </>
            )}
            {unitId === '7' && lessonId === '2' && (
              <>
                <p>Belajar membaca jam sangat penting untuk membicarakan jadwal.</p>
                <h3 className="flex items-center gap-2"><Clock className="h-5 w-5 text-primary"/>Cara Bertanya Jam</h3>
                <ul>
                    <li><strong>What time is it?</strong> (Jam berapa sekarang?)</li>
                </ul>
                 <h3 className="flex items-center gap-2"><Clock className="h-5 w-5 text-primary"/>Cara Memberi Tahu Jam</h3>
                <ul>
                    <li>Gunakan <strong>"o'clock"</strong> untuk jam pas. &rarr; <em>It's 7 o'clock.</em> (Sekarang jam 7 pas.)</li>
                    <li>Sebutkan jam lalu menitnya. &rarr; <em>It's 7:30.</em> (Dibaca: seven thirty)</li>
                </ul>
              </>
            )}
          </>
        )}

        {lesson.type === 'Quiz' && (
            <>
                <p>Saatnya menguji pengetahuan Anda! Jawablah pertanyaan-pertanyaan berikut berdasarkan apa yang telah Anda pelajari di unit ini.</p>
                <Card className="my-6 not-prose">
                    <CardContent className="p-6 space-y-6">
                        <div className="space-y-2">
                            <p className="font-semibold">Pertanyaan 1:</p>
                            <p className="text-muted-foreground">Konten kuis sedang dalam pengembangan. Fitur kuis interaktif akan segera hadir!</p>
                        </div>
                    </CardContent>
                </Card>
            </>
        )}
        
        {lesson.type === 'Practice' && (
             <div className="not-prose">
              <p>Latihan interaktif ini akan membantu Anda menerapkan apa yang telah Anda pelajari.</p>
              <Practice>
                {/* Unit 2 Practice */}
                {unitId === '2' && lessonId === '3' && (
                    <p>Sebutkan 5 benda yang Anda lihat di ruangan Anda sekarang dalam bahasa Inggris. Contoh: "This is a chair."</p>
                )}
                 {/* Unit 3 Practice */}
                {unitId === '3' && lessonId === '3' && (
                    <p>Buat 3 kalimat sederhana tentang diri Anda. Contoh: "I am a student. I am happy. I am not a doctor."</p>
                )}
                {/* Unit 4 Practice */}
                {unitId === '4' && lessonId === '3' && (
                     <div className="space-y-4">
                        <p>Latih dialog singkat ini dengan teman atau dengan diri sendiri.</p>
                        <Dialogue character="A" text="Hi! How are you?" />
                        <Dialogue character="B" text="I'm fine, thank you. And you?" />
                        <Dialogue character="A" text="I'm great, thanks!" />
                     </div>
                )}
                {/* Unit 6 Practice */}
                {unitId === '6' && lessonId === '2' && (
                    <div className="space-y-4">
                        <p>Bayangkan Anda berada di sebuah restoran. Latih dialog ini.</p>
                        <Dialogue character="Waiter" text="Hello. Can I help you?" />
                        <Dialogue character="You" text="Yes, please. I want one pizza and one water." />
                        <Dialogue character="Waiter" text="Okay. One pizza and one water. Anything else?" />
                        <Dialogue character="You" text="No, thank you." />
                    </div>
                )}
                {/* Unit 8 Practice */}
                 {unitId === '8' && lessonId === '1' && (
                    <div className="space-y-4">
                        <p><strong>Skenario:</strong> Anda bertemu teman baru di sebuah acara.</p>
                        <ol className="list-decimal list-inside space-y-2">
                            <li>Sapa dia. (Hi/Hello)</li>
                            <li>Perkenalkan diri Anda. (My name is...)</li>
                            <li>Tanyakan namanya. (What is your name?)</li>
                            <li>Tanyakan apa pekerjaannya. (What is your job?)</li>
                            <li>Katakan senang bertemu dengannya. (Nice to meet you.)</li>
                        </ol>
                    </div>
                )}
                {unitId === '8' && lessonId === '2' && (
                    <div className="space-y-4">
                        <p><strong>Skenario:</strong> Anda berada di kafe dan ingin memesan.</p>
                         <ol className="list-decimal list-inside space-y-2">
                            <li>Sapa barista. (Hello)</li>
                            <li>Katakan apa yang Anda inginkan. (I want...)</li>
                            <li>Gunakan 'please' untuk kesopanan.</li>
                            <li>Ucapkan terima kasih. (Thank you)</li>
                        </ol>
                    </div>
                )}
              </Practice>
             </div>
        )}

      </div>

      <PronunciationCoach />

      <div className="mt-8 mb-4 text-center">
        <Button asChild size="lg">
          <Link href={`/learn/${unitId}?completedLessonId=${lesson.id}`}>
            <Check className="mr-2 h-4 w-4" />
            Selesaikan Pelajaran
          </Link>
        </Button>
      </div>
    </div>
  );
}
