import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award, Medal, Trophy } from "lucide-react";
import Image from "next/image";

const leaderboardData = [
  { rank: 1, name: "Alex Johnson", xp: 15200, avatar: "https://placehold.co/100x100/E5D1FA/4a148c.png" },
  { rank: 2, name: "Maria Garcia", xp: 14800, avatar: "https://placehold.co/100x100/C5E1A5/33691e.png" },
  { rank: 3, name: "Kenji Tanaka", xp: 14500, avatar: "https://placehold.co/100x100/FFCCBC/bf360c.png" },
  { rank: 4, name: "Sofia (Anda)", xp: 12500, avatar: "https://placehold.co/100x100.png" },
  { rank: 5, name: "David Miller", xp: 11900, avatar: "https://placehold.co/100x100/B3E5FC/01579b.png" },
  { rank: 6, name: "Chloe Dubois", xp: 11200, avatar: "https://placehold.co/100x100/F8BBD0/880e4f.png" },
  { rank: 7, name: "Ahmed Al-Farsi", xp: 10500, avatar: "https://placehold.co/100x100/D7CCC8/3e2723.png" },
];

const getRankIcon = (rank: number) => {
  if (rank === 1) return <Trophy className="h-6 w-6 text-yellow-500" />;
  if (rank === 2) return <Medal className="h-6 w-6 text-gray-400" />;
  if (rank === 3) return <Award className="h-6 w-6 text-yellow-700" />;
  return <span className="font-bold text-lg">{rank}</span>;
};

export default function LeaderboardPage() {
  return (
    <>
      <div className="relative overflow-hidden rounded-xl mb-6">
        <Image src="https://raw.githubusercontent.com/tesweb2025/Market-Intelligence-5.1/1ccb02596d257dec4beb1e512a6e9339df244cea/header%20231%20baru.jpg" alt="Banner Papan Peringkat" width={1200} height={250} className="w-full h-auto object-cover" data-ai-hint="abstract geometric background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute bottom-6 left-6">
            <h1 className="text-4xl font-bold font-headline text-card-foreground shadow-sm">Leaderboard</h1>
            <p className="text-card-foreground/80 mt-1">Lihat siapa yang menjadi juara belajar minggu ini!</p>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px] text-center">Rank</TableHead>
                <TableHead>Player</TableHead>
                <TableHead className="text-right">Total XP</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaderboardData.map((player) => (
                <TableRow key={player.rank} className={player.name.includes("Anda") ? "bg-accent" : ""}>
                  <TableCell className="text-center">
                    <div className="flex justify-center items-center h-full">
                      {getRankIcon(player.rank)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={player.avatar} alt={player.name} />
                        <AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{player.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-bold">{player.xp.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
