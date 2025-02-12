"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Trophy } from "lucide-react"

interface Winner {
  game: string
  amount: string
  player: string
  time: string
}

const winners: Winner[] = [
  {
    game: "Lightning Roulette",
    amount: "₹18,20,630",
    player: "Alvaro Jorge V.",
    time: "2 mins ago",
  },
  {
    game: "Crazy Time",
    amount: "₹12,50,000",
    player: "Michael S.",
    time: "5 mins ago",
  },
  {
    game: "Sweet Bonanza",
    amount: "₹9,75,420",
    player: "Rahul K.",
    time: "8 mins ago",
  },
  {
    game: "Teen Patti",
    amount: "₹5,40,000",
    player: "Priya M.",
    time: "12 mins ago",
  },
]

export function WinnersCarousel() {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <Trophy className="w-6 h-6 text-[#1fad66]" />
          <h2 className="text-xl font-semibold">Latest Winners</h2>
        </div>
        <Button variant="ghost" className="text-gray-400 hover:text-white">
          View All
        </Button>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {winners.map((winner, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="bg-[#22262a] rounded-xl p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-lg text-white">{winner.game}</h3>
                    <p className="text-sm text-gray-400">{winner.player}</p>
                  </div>
                  <span className="text-xs text-gray-500">{winner.time}</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-[#1fad66]">{winner.amount}</span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-12" />
        <CarouselNext className="hidden md:flex -right-12" />
      </Carousel>
    </div>
  )
}

