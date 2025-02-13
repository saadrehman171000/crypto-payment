"use client"

import { NavLink } from "@/components/ui/nav-link"
import { Crown, MoreHorizontal, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function MainNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1C1C1E] border-b border-gray-800">
      <div className="flex items-center h-16 px-4 md:px-6">
        <Link href="/" className="mr-8">
          <Image src="/leon-logo.png" alt="LEON" width={100} height={32} className="h-8 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center space-x-2 flex-1">
          <NavLink href="/" active>
            HOME
          </NavLink>
          <NavLink href="/live">LIVE</NavLink>
          <NavLink href="/sports">SPORTS</NavLink>
          <NavLink href="/slots">SLOTS</NavLink>
          <NavLink href="/live-casino">LIVE CASINO</NavLink>
          <NavLink href="/betgames">BETGAMES</NavLink>
          <NavLink href="/v-sport">V-SPORT</NavLink>
          <NavLink href="/promotions">PROMOTIONS</NavLink>
          <NavLink href="/esports">ESPORTS</NavLink>
        </nav>

        <div className="flex items-center gap-4 ml-auto">
          <Button variant="ghost" size="icon" className="text-gray-400">
            <Search className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon" className="text-gray-400">
            <Crown className="h-5 w-5 text-yellow-500" />
          </Button>

          <Button variant="ghost" size="icon" className="text-gray-400 md:hidden">
            <MoreHorizontal className="h-5 w-5" />
          </Button>

          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              LOG IN
            </Button>
            <Button className="bg-[#1fad66] hover:bg-[#1fad66]/90">SIGN UP</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

