
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  GraduationCap,
  BookText,
  SpellCheck,
  BookOpenCheck,
  MessagesSquare,
  Trophy,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/learn", label: "Learn", icon: GraduationCap },
  { href: "/grammar", label: "Grammar", icon: SpellCheck },
  { href: "/reading", label: "Reading", icon: BookOpenCheck },
  { href: "/conversation", label: "Conversation", icon: MessagesSquare },
  { href: "/leaderboard", label: "Leaderboard", icon: Trophy },
];

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  return (
    <nav
      className={cn("flex flex-col items-start gap-2 p-2 text-sm font-medium lg:px-4", className)}
      {...props}
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex w-full items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary hover:bg-primary/10",
              isActive
                ? "bg-primary/10 text-primary font-semibold"
                : "text-muted-foreground"
            )}
          >
            <Icon className="h-4 w-4" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
