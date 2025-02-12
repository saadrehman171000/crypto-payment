"use client";

import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Image from "next/image";
import { WinnersCarousel } from "@/components/winners-carousel";
import { GameCarousel } from "@/components/game-carousel";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1C1C1E] text-white">
      {/* Header */}
      <header className="bg-[#1C1C1E] border-b border-gray-800">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Image
              src="/sultan-logo.png"
              alt="Sultan Casino"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
            <div className="flex gap-4">
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                Log In
              </Button>
              <Link href="/signup">
                <Button className="bg-[#28A745] hover:bg-[#218838] text-white">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-[#1C1C1E] border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 py-4">
            <a href="#" className="text-white font-medium">LIVE CASINO</a>
            <a href="#" className="text-gray-400">SLOTS</a>
            <a href="#" className="text-gray-400">BETGAMES</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Main Content */}
        <div className="container mx-auto px-4 py-4 space-y-4">
          {/* Welcome Banner */}
          <div className="bg-[#6B2FB3] rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-2">CASINO WELCOME</h2>
            <p className="text-xl mb-4">Bonuses up to ₹ 60,000 + 120 FS</p>
            <Button className="bg-white text-black hover:bg-gray-100">
              SEE MORE
            </Button>
          </div>

          {/* VIP Lounge Banner */}
          <div className="bg-[#2A2A2E] rounded-lg p-6 flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold">VIP Lounge</h3>
              <p className="text-gray-400">Elevate Your Game</p>
            </div>
            <Button className="bg-white text-black hover:bg-gray-100">
              Enter Now
            </Button>
          </div>

          {/* Winners Carousel */}
          <WinnersCarousel />

          {/* Search and Categories */}
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="All Providers"
                className="w-full pl-10 pr-4 py-3 bg-[#2A2A2E] rounded-lg text-white border-none focus:ring-1 focus:ring-gray-700"
              />
            </div>
          </div>

          {/* Game Categories */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            <Button variant="outline" className="bg-white text-black hover:bg-gray-100 h-[72px] flex flex-col items-center justify-center gap-1">
              <div className="w-6 h-6 bg-black"></div>
              All Games
            </Button>
            <Button variant="outline" className="bg-[#2A2A2E] text-white hover:bg-[#3A3A3E] h-[72px] flex flex-col items-center justify-center gap-1">
              <div className="w-6 h-6 text-[#FF6B6B]">🔥</div>
              Top
            </Button>
            <Button variant="outline" className="bg-[#2A2A2E] text-white hover:bg-[#3A3A3E] h-[72px] flex flex-col items-center justify-center gap-1">
              <div className="w-6 h-6 text-blue-500">✨</div>
              New
            </Button>
            <Button variant="outline" className="bg-[#2A2A2E] text-white hover:bg-[#3A3A3E] h-[72px] flex flex-col items-center justify-center gap-1">
              <div className="w-6 h-6">🎲</div>
              Indian Games
            </Button>
            <Button variant="outline" className="bg-[#2A2A2E] text-white hover:bg-[#3A3A3E] h-[72px] flex flex-col items-center justify-center gap-1">
              <div className="w-6 h-6">🎯</div>
              Roulette
            </Button>
          </div>

          {/* Game Carousels */}
          <GameCarousel title="Top" />
          <GameCarousel title="New" />
        </div>
      </main>

      <Footer />
    </div>
  );
}