import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Logo } from '@/components/logo';
import { BookOpen, Bot, Award, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-white dark:from-blue-950/80 dark:via-slate-900 dark:to-background">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">LinguaLeap</span>
        </Link>
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4">
            Leap Into New Languages
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Master any language with interactive lessons, AI-powered practice, and a personalized learning path. Join LinguaLeap and start speaking with confidence.
          </p>
          <Button size="lg" asChild>
            <Link href="/signup">Get Started for Free</Link>
          </Button>
          <div className="mt-12 relative">
             <Image 
              src="https://placehold.co/1200x600.png"
              alt="LinguaLeap dashboard preview"
              width={1200}
              height={600}
              className="rounded-xl shadow-2xl border-2 border-primary/20"
              data-ai-hint="language learning dashboard"
            />
          </div>
        </section>

        <section className="bg-card/30 py-20 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why LinguaLeap?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center glass-card">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Interactive Lessons</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Engaging exercises and structured units make learning effective and fun.</p>
                </CardContent>
              </Card>
              <Card className="text-center glass-card">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    <Bot className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">AI Conversation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Practice speaking with our AI chatbot and get instant feedback.</p>
                </CardContent>
              </Card>
              <Card className="text-center glass-card">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Gamified Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Earn XP, level up, and compete on the leaderboard to stay motivated.</p>
                </CardContent>
              </Card>
              <Card className="text-center glass-card">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Personalized Path</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">AI adapts to your progress, creating a learning journey just for you.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} LinguaLeap. All rights reserved.</p>
      </footer>
    </div>
  );
}
