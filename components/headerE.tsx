"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Search, Crown, Sun, MoreHorizontal } from 'lucide-react'
import { GB } from 'country-flag-icons/react/3x2'

const navItems = [
  { label: "HOME", href: "/" },
  { label: "LIVE", href: "/live" },
  { label: "SPORTS", href: "/sports" },
  { label: "SLOTS", href: "/slots" },
  { label: "LIVE CASINO", href: "/live-casino" },
  { label: "BETGAMES", href: "/betgames" },
  { label: "V-SPORT", href: "/v-sport" },
  { label: "PROMOTIONS", href: "/promotions" },
  { label: "ESPORTS", href: "/esports" },
  { label: "VIP", href: "/vip", icon: Crown }
]

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1C1C1E] border-b border-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          <Link href="/" className="mr-8">
            <Image src="/leon-logo.svg" alt="LEON" width={100} height={32} priority />
          </Link>

          <nav className="hidden lg:flex items-center space-x-6 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {item.label}
                {item.icon && <item.icon className="h-4 w-4 text-yellow-500" />}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 ml-auto">
            <Button variant="ghost" size="icon" className="text-gray-400">
              <Search className="h-5 w-5" />
            </Button>

            <div className="hidden lg:flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-gray-400">
                <GB className="h-4 w-4 mr-2" />
                EN
              </Button>
              
              <Button variant="ghost" size="icon" className="text-gray-400">
                <Sun className="h-5 w-5" />
              </Button>

              <Button variant="ghost" className="text-gray-300 hover:text-white">
                LOG IN
              </Button>
              
              <Button className="bg-[#1fad66] hover:bg-[#1fad66]/90">
                SIGN UP
              </Button>
            </div>

            <Button variant="ghost" size="icon" className="lg:hidden text-gray-400">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
