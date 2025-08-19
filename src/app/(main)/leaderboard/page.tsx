
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award, Medal, Trophy, ArrowUpCircle, ArrowDownCircle } from "lucide-react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const leagueData = [
  { rank: 1, name: "Alex Johnson", xp: 15200, avatar: "https://placehold.co/100x100/E5D1FA/4a148c.png" },
  { rank: 2, name: "Maria Garcia", xp: 14800, avatar: "https://placehold.co/100x100/C5E1A5/33691e.png" },
  { rank: 3, name: "Kenji Tanaka", xp: 14500, avatar: "https://placehold.co/100x100/FFCCBC/bf360c.png" },
  { rank: 4, name: "Sofia (Anda)", xp: 12500, avatar: "https://placehold.co/100x100.png" },
  { rank: 5, name: "David Miller", xp: 11900, avatar: "https://placehold.co/100x100/B3E5FC/01579b.png" },
  { rank: 6, name: "Chloe Dubois", xp: 11200, avatar: "https://placehold.co/100x100/F8BBD0/880e4f.png" },
  { rank: 7, name: "Ahmed Al-Farsi", xp: 10500, avatar: "https://placehold.co/100x100/D7CCC8/3e2723.png" },
  { rank: 8, name: "Laura Smith", xp: 9800, avatar: "https://placehold.co/100x100/FFF9C4/f57f17.png" },
  { rank: 9, name: "Ivan Petrov", xp: 9500, avatar: "https://placehold.co/100x100/CFD8DC/263238.png" },
  { rank: 10, name: "Fatima Khan", xp: 9200, avatar: "https://placehold.co/100x100/D1C4E9/311b92.png" },
];

const friendsData = [
    { rank: 1, name: "Sofia (Anda)", xp: 12500, avatar: "https://placehold.co/100x100.png" },
    { rank: 2, name: "Budi Sanjaya", xp: 11800, avatar: "https://placehold.co/100x100/BBDEFB/0d47a1.png" },
    { rank: 3, name: "Siti Lestari", xp: 10200, avatar: "https://placehold.co/100x100/DCEDC8/558b2f.png" },
]

const getRankIcon = (rank: number) => {
  if (rank === 1) return <Trophy className="h-6 w-6 text-yellow-500" />;
  if (rank === 2) return <Medal className="h-6 w-6 text-gray-400" />;
  if (rank === 3) return <Award className="h-6 w-6 text-yellow-700" />;
  return <span className="font-bold text-lg">{rank}</span>;
};

const LeaderboardTable = ({ data, promotionZone = 3, demotionZone = 3 }: { data: typeof leagueData, promotionZone?: number, demotionZone?: number }) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[80px] text-center">Rank</TableHead>
        <TableHead>Player</TableHead>
        <TableHead className="text-right">Total XP</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((player) => {
        const isPromotion = player.rank <= promotionZone;
        const isDemotion = player.rank > data.length - demotionZone;
        return (
            <TableRow key={player.rank} className={
                `${player.name.includes("Anda") ? "bg-primary/10" : ""}
                 ${isPromotion ? "bg-green-500/10" : ""}
                 ${isDemotion ? "bg-red-500/10" : ""}`
            }>
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
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{player.name}</span>
                    {isPromotion && <ArrowUpCircle className="h-4 w-4 text-green-500" />}
                    {isDemotion && <ArrowDownCircle className="h-4 w-4 text-red-500" />}
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right font-bold">{player.xp.toLocaleString()}</TableCell>
            </TableRow>
        )
      })}
    </TableBody>
  </Table>
);


export default function LeaderboardPage() {
  return (
    <>
      <div className="text-center mb-6">
          <div className="inline-block bg-accent p-3 rounded-full">
            <Trophy className="h-10 w-10 text-yellow-600" />
          </div>
          <h1 className="text-4xl font-bold font-headline mt-2">Liga Perunggu</h1>
          <p className="text-muted-foreground">5 teratas akan promosi, 5 terbawah akan degradasi. Terus berjuang!</p>
      </div>

      <Tabs defaultValue="league" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="league">Liga Saya</TabsTrigger>
            <TabsTrigger value="friends">Teman</TabsTrigger>
        </TabsList>
        <TabsContent value="league">
            <Card>
                <CardContent className="p-0">
                    <LeaderboardTable data={leagueData} promotionZone={5} demotionZone={5} />
                </CardContent>
            </Card>
        </TabsContent>
        <TabsContent value="friends">
             <Card>
                <CardContent className="p-0">
                    <LeaderboardTable data={friendsData} promotionZone={0} demotionZone={0}/>
                </CardContent>
            </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}
