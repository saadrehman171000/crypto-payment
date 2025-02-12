"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Game {
  title: string;
  image: string;
  betRange: string;
}

interface GameCarouselProps {
  title: string;
  games: Game[];
}

const defaultGames: Game[] = [
  {
    title: "Lightning Roulette",
    image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=2940&auto=format&fit=crop",
    betRange: "₹20 - 400000"
  },
  {
    title: "Crazy Time",
    image: "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?q=80&w=2872&auto=format&fit=crop",
    betRange: "₹10 - 100000"
  },
  {
    title: "Infinite Blackjack",
    image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?q=80&w=2940&auto=format&fit=crop",
    betRange: "₹100 - 100000"
  }
];

export function GameCarousel({ title, games = defaultGames }: GameCarouselProps) {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <Button variant="ghost" className="text-gray-400 hover:text-white">
          All {title}
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
          {games.map((game, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="relative group">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                  <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-medium mb-1">{game.title}</h3>
                  <p className="text-sm text-gray-300">{game.betRange}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <Button className="bg-[#28A745] hover:bg-[#218838] text-white">
                    Play Now
                  </Button>
                </div>
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