import { MainNav } from "@/components/main-nav";
import { UserNav } from "@/components/user-nav";
import { Logo } from "@/components/logo";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-card/80 backdrop-blur-xl md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
              <Logo className="h-6 w-6 text-primary" />
              <span className="">LinguaLeap</span>
            </Link>
          </div>
          <div className="flex-1">
            <MainNav />
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-background/80 backdrop-blur-xl">
        <header className="flex h-14 items-center gap-4 border-b bg-card/60 px-4 lg:h-[60px] lg:px-6">
          {/* Mobile Nav can be added here if needed */}
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search lessons..."
                  className="w-full appearance-none bg-background/60 pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <UserNav />
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-transparent">
          {children}
        </main>
      </div>
    </div>
  );
}
