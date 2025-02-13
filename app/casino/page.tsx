"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { Search, LayoutGrid, Flame, Clock, CircleDot, PlaySquare, Dice1Icon, Gamepad2, ChevronLeft, ChevronRight, Menu, Trophy } from 'lucide-react'
import { GameCard } from "@/components/casino/game-card"
import { WinnerCard } from "@/components/casino/winner-card"
import { Header } from "@/components/layout/header"

const categories = [
  { icon: Search, label: "Search", href: "#" },
  { icon: LayoutGrid, label: "All Games", href: "#", isActive: true },
  { icon: Flame, label: "Top", href: "#" },
  { icon: Clock, label: "New", href: "#" },
  { icon: CircleDot, label: "Roulette", href: "#" },
  { icon: PlaySquare, label: "Blackjack", href: "#" },
  { icon: Dice1Icon, label: "Baccarat", href: "#" },
  { icon: PlaySquare, label: "TV Shows", href: "#" },
  { icon: Gamepad2, label: "Holdem", href: "#" },
  { icon: Dice1Icon, label: "Sic Bo", href: "#" },
]

const topGames = [
  { title: "Leon Blackjack", image: "betting.jpg", provider: "Evolution", limits: "$5 - $20000" },
  { title: "Mega Wheel", image: "bonus.jpg", provider: "Pragmatic Play", limits: "$0.1 - $1000" },
  { title: "Bac Bo", image: "cash.avif", provider: "Evolution", limits: "$1 - $5000" },
  { title: "Royal Riches Roulette", image: "cashout.png", provider: "Evolution", limits: "$0.1 - $2000" },
  { title: "Lightning Baccarat", image: "crazytime.jpg", provider: "Evolution", limits: "$1 - $500" },
  { title: "Leon Auto Roulette", image: "football-studio.jpg", provider: "Evolution", limits: "$0.1 - $2000" },
  { title: "Live Roulette", image: "Gates-of-Olympus.jpg", provider: "Evolution", limits: "$0.1 - $5000" },
  { title: "LEON Blackjack", image: "Lightning-Roulette.png", provider: "Evolution", limits: "$1 - $5000" },
]

const winners = [
  { game: "Leon Blackjack", amount: "41 560 $", player: "Alvaro Jorge V", image: "loyal.jpg" },
  { game: "VIP Blackjack 4", amount: "20 780 $", player: "Mourad Hicham K", image: "megaball.jpg" },
  { game: "Crazy Balls", amount: "14 546 $", player: "newera", image: "multi.jpg" },
  { game: "Bac Bo", amount: "10 390 $", player: "Bruno C", image: "promo.jpg" },
]

const blackjackGames = [
  { title: "Leon Blackjack", image: "sweetbonanza.png", limits: "$5 - $20000" },
  { title: "Infinite Blackjack", image: "tada.jpg", limits: "$1 - $1000" },
  { title: "LEON Blackjack", image: "teen-patti.jpg", limits: "$1 - $5000" },
  { title: "Lightning Blackjack", image: "wolff.png", limits: "$1 - $2500" },
  { title: "Take Deal Blackjack", image: "XXXtreme1.jpeg", limits: "$1 - $1000" },
  { title: "Switch Blackjack", image: "betting.jpg", limits: "$1 - $1000" },
  { title: "Gravity Blackjack", image: "bonus.jpg", limits: "$1 - $1000" },
  { title: "Switch Blackjack", image: "cash.avif", limits: "$1 - $1000" },
]

const baccaratGames = [
  { title: "Speed Dragon Tiger", image: "cashout.png", limits: "$1 - $2000" },
  { title: "Shangrila Baccarat", image: "crazytime.jpg", limits: "$1 - $5000" },
  { title: "Tao Yuan Baccarat", image: "football-studio.jpg", limits: "$1 - $5000" },
  { title: "Speed Baccarat 1", image: "Gates-of-Olympus.jpg", limits: "$1 - $2000" },
  { title: "Mega Baccarat", image: "Lightning-Roulette.png", limits: "$0.2 - $3000" },
  { title: "Ultimate Andar Bahar", image: "loyal.jpg", limits: "$1 - $2000" },
  { title: "Teen Patti", image: "megaball.jpg", limits: "$0.5 - $5000" },
  { title: "One Day Teen Patti", image: "multi.jpg", limits: "$1 - $2000" },
]

export default function CasinoPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      <Header />
      <div className="pt-16">
        <div className="flex">
          {/* Mobile Sidebar Overlay */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          {/* Sidebar */}
          <aside
            className={cn(
              "fixed top-16 left-0 w-64 bg-card z-30 transition-transform duration-300 lg:translate-x-0 h-[calc(100vh-4rem)]",
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >
            <div className="p-4 space-y-1">
              {categories.map((category) => (
                <a
                  key={category.label}
                  href={category.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    category.isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  <category.icon className="h-5 w-5" />
                  {category.label}
                </a>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 lg:pl-64 w-full">
            <div className="container mx-auto p-4 space-y-6 md:space-y-8">
              {/* Winners Section */}
              <section className="mt-4 md:mt-0">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold">Top 100 Winners</h2>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="bg-black hover:bg-black/90 rounded-lg"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="bg-black hover:bg-black/90 rounded-lg"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                
                <ScrollArea className="w-full">
                  <div className="flex gap-4 pb-4">
                    {winners.map((winner, index) => (
                      <div key={index} className="min-w-[300px] md:min-w-[350px] flex-none">
                        <div className="relative rounded-xl overflow-hidden bg-black/40">
                          <Image
                            src={winner.image}
                            alt={winner.game}
                            width={400}
                            height={200}
                            className="w-full h-[200px] object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="bg-[#FFB800] p-1 rounded">
                                <Trophy className="h-4 w-4 text-black" />
                              </div>
                              <span className="text-sm font-medium text-[#FFB800]">EXCLUSIVE Winner</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">{winner.game}</h3>
                            <div className="text-[#00FF66] text-2xl font-bold mb-1">
                              {winner.amount}
                            </div>
                            <div className="text-white/80 text-sm">
                              {winner.player}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" className="bg-white/10" />
                </ScrollArea>
              </section>

              {/* Top Games Section */}
              <section>
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-semibold">Top</h2>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" className="bg-white dark:bg-card">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="bg-white dark:bg-card">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="bg-white dark:bg-card hidden sm:inline-flex">
                      All Top
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                  {topGames.slice(0, 8).map((game, index) => (
                    <div className="aspect-[4/3]">
                      <GameCard key={index} {...game} />
                    </div>
                  ))}
                </div>
              </section>

              {/* Blackjack Games */}
              <section>
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-semibold">Blackjack</h2>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" className="bg-white dark:bg-card">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="bg-white dark:bg-card">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="bg-white dark:bg-card hidden sm:inline-flex">
                      All Blackjack
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                  {blackjackGames.slice(0, 8).map((game, index) => (
                    <div className="aspect-[4/3]">
                      <GameCard key={index} {...game} />
                    </div>
                  ))}
                </div>
              </section>

              {/* Baccarat Games */}
              <section>
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-semibold">Baccarat</h2>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" className="bg-white dark:bg-card">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="bg-white dark:bg-card">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="bg-white dark:bg-card hidden sm:inline-flex">
                      All Baccarat
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                  {baccaratGames.slice(0, 8).map((game, index) => (
                    <div className="aspect-[4/3]">
                      <GameCard key={index} {...game} />
                    </div>
                  ))}
                </div>
              </section>

              {/* Description Section */}
              <section className="max-w-4xl mx-auto text-center space-y-4 mb-16">
                <h2 className="text-lg md:text-2xl font-semibold">
                  Play Live Casino Online at Leon
                </h2>
                <p className="text-sm md:text-base text-muted-foreground px-4">
                  Welcome to Leon - the number one online live casino experience. We've got
                  over 150 of the best live casino games for you to bet on, brought to
                  you by the industry's powerhouse providers including Evolution Gaming
                  and more.
                </p>
                <Button variant="link" className="text-primary">
                  SHOW MORE
                </Button>
              </section>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}