"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Winner {
  game: string;
  amount: string;
  player: string;
}

const winners: Winner[] = [
  {
    game: "Leon Blackjack",
    amount: "₹ 18,20,630",
    player: "Alvaro Jorge V"
  },
  {
    game: "Crazy Time",
    amount: "₹ 12,50,000",
    player: "Michael S"
  },
  {
    game: "Lightning Roulette",
    amount: "₹ 9,75,420",
    player: "Rahul K"
  }
];

export function WinnersCarousel() {
  return (
    <div className="container mx-auto px-4 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white">Top 100 Winners</h2>
        <Button variant="ghost" className="text-gray-400 hover:text-white">
          All Winners
        </Button>
      </div>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {winners.map((winner, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="relative overflow-hidden rounded-lg bg-[#2A2A2E] p-6">
                <div className="h-32 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg mb-4" />
                <h3 className="text-lg font-medium text-white mb-2">{winner.game}</h3>
                <p className="text-2xl font-bold text-[#28A745] mb-1">{winner.amount}</p>
                <p className="text-gray-400">{winner.player}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
}