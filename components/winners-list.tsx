"use client";

import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";

export function WinnersList() {
  const winners = [
    { name: "Alex M.", game: "Lightning Roulette", amount: "₹18,520" },
    { name: "Sarah K.", game: "Crazy Time", amount: "₹12,350" },
    { name: "Mike R.", game: "Infinite Blackjack", amount: "₹9,840" },
  ];

  return (
    <div className="grid gap-4">
      {winners.map((winner, index) => (
        <Card key={index} className="p-4">
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <Trophy className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="font-semibold">{winner.name}</p>
              <p className="text-sm text-muted-foreground">{winner.game}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-green-600">{winner.amount}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}