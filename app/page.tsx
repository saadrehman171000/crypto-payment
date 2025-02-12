"use client"

import { Button } from "@/components/ui/button"
import { Search, Bell, Menu } from "lucide-react"
import Image from "next/image"
import { WinnersCarousel } from "@/components/winners-carousel"
import { GameCarousel } from "@/components/game-carousel"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { games, categories } from "@/data/games"
import { useState } from "react"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All Games")

  return (
    <div className="min-h-screen bg-[#0b0d0e] text-white">
      {/* Header */}
      <header className="bg-[#0b0d0e] border-b border-gray-800/50 sticky top-0 z-50 backdrop-blur-xl">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          {/* Logo and Auth Buttons */}
          <div className="flex justify-between items-center py-4">
            <Image 
              src="/logoo.avif"
              alt="Casino Logo" 
              width={120} 
              height={32} 
              className="h-8 w-auto"
              unoptimized
            />
            <div className="flex items-center gap-2 sm:gap-4">
              <Link href="/login">
                <Button variant="ghost" className="text-gray-300 hover:text-white text-sm sm:text-base">
                  Log In
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-[#1fad66] hover:bg-[#1fad66]/90 text-white text-sm sm:text-base">Sign Up</Button>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="md:hidden py-4 overflow-x-auto">
            <div className="flex justify-between min-w-full">
              <a href="#" className="text-white font-medium text-sm whitespace-nowrap">
                LIVE CASINO
              </a>
              <a href="#" className="text-gray-400 text-sm whitespace-nowrap">
                SLOTS
              </a>
              <a href="#" className="text-gray-400 text-sm whitespace-nowrap">
                BETGAMES
              </a>
            </div>
          </nav>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 py-4">
            <a href="#" className="text-white font-medium hover:text-[#1fad66] transition-colors">
              LIVE CASINO
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              SLOTS
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              BETGAMES
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-6">
        {/* Main Content */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-6">
          {/* Welcome Banner */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6B2FB3] to-[#8B5CF6]" />
            <div className="relative z-10 p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">CASINO WELCOME BONUS</h2>
              <p className="text-xl md:text-2xl mb-6 text-white/90">Get up to ₹60,000 + 120 Free Spins</p>
              <Button className="bg-white text-black hover:bg-white/90 font-medium px-8">CLAIM NOW</Button>
            </div>
            <div className="absolute right-0 bottom-0 w-1/3 h-full bg-[url('/casino-chips.png')] bg-contain bg-right-bottom bg-no-repeat opacity-50" />
          </div>

          {/* Search and Categories */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search games..."
                className="w-full pl-10 pr-4 py-3 bg-[#22262a] rounded-xl text-white border-none focus:ring-1 focus:ring-[#1fad66] transition-all"
              />
            </div>
          </div>

          {/* Game Categories */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant="outline"
                className={`h-[72px] flex flex-col items-center justify-center gap-2 rounded-xl border-2 transition-all ${
                  category.active
                    ? "bg-white text-black hover:bg-gray-100 border-white"
                    : "bg-[#22262a] text-white hover:bg-[#22262a]/80 border-gray-800"
                }`}
                onClick={() => setSelectedCategory(category.name)}
              >
                <div className="text-2xl">{category.icon}</div>
                <div className="flex items-center gap-2 text-sm font-medium">
                  {category.name}
                  {category.count && <span className="text-xs text-gray-400">({category.count})</span>}
                </div>
              </Button>
            ))}
          </div>

          {/* Winners Carousel */}
          <WinnersCarousel />

          {/* Game Carousels */}
          <GameCarousel title="Top Games" games={games.top} />
          <GameCarousel title="New Games" games={games.new} />
        </div>
      </main>

      <Footer />
    </div>
  )
}