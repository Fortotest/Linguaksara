import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Logo } from '@/components/logo';
import { BookOpen, Bot, Award, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-white dark:from-blue-950/80 dark:via-slate-900 dark:to-background overflow-hidden">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">Linguaksara</span>
        </Link>
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Masuk</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Daftar</Link>
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4">
            Mulai Petualangan Bahasa Inggris Anda
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Bergabunglah dengan jutaan orang dan kuasai bahasa Inggris bersama Linguaksara, platform belajar bahasa Inggris #1 di Indonesia yang dirancang untuk membuka potensimu—sepenuhnya gratis.
          </p>
          <Button size="lg" asChild>
            <Link href="/signup">Mulai Belajar, Gratis!</Link>
          </Button>
          <div className="mt-12 relative">
             <Image 
              src="https://raw.githubusercontent.com/tesweb2025/Market-Intelligence-5.1/45009b7b2db685e4bcac627743e0dfc299b2451a/3d%20header%20baru.png"
              alt="Pratinjau dashboard Linguaksara"
              width={1200}
              height={600}
              className=""
              data-ai-hint="language learning dashboard"
            />
          </div>
        </section>

        <section className="bg-card/30 py-20 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Kenapa Memilih Linguaksara?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Pelajaran Terstruktur</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Materi dirancang khusus untuk pemula, membuat proses belajar jadi mudah dan menyenangkan.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    <Bot className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Tutor AI Cerdas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Berlatih percakapan kapan saja dengan AI yang siap memberikan masukan instan.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Belajar Sambil Bermain</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Kumpulkan poin, naik level, dan bersaing di papan peringkat agar tetap termotivasi.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Jalur Belajar Pribadi</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">AI kami akan menyesuaikan materi dengan kemajuan Anda, membuat belajar lebih efektif.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Linguaksara. Platform Belajar Bahasa Inggris #1 di Indonesia.</p>
      </footer>
    </div>
  );
}
