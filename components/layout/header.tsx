"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Search, Crown, Menu, Moon, Sun } from "lucide-react"
import { GB } from "country-flag-icons/react/3x2"
import { LeftSidebar } from "./left-sidebar"
import { useTheme } from "@/components/theme-provider"
import { Orbitron } from 'next/font/google'

const orbitron = Orbitron({ subsets: ['latin'] })

const navItems = [
  { label: "HOME", href: "/" },
  { label: "LIVE", href: "/live" },
  { label: "SPORTS", href: "/sports" },
  { label: "SLOTS", href: "/slots" },
  { label: "LIVE CASINO", href: "/casino" },
  { label: "BETGAMES", href: "/betgames" },
  { label: "V-SPORT", href: "/v-sport" },
  { label: "PROMOTIONS", href: "/promotions" },
  { label: "ESPORTS", href: "/esports" },
  { label: "VIP", href: "/vip", icon: Crown },
]

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--header-bg))] border-b border-[hsl(var(--header-border))] transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-16">
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="mr-2 lg:hidden text-foreground"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>

            {/* Adjusted Logo Size */}
            <Link href="/" className="mr-4 lg:mr-8 group">
              <div className="flex items-center">
                <div className={`text-xl lg:text-2xl font-black ${orbitron.className} tracking-wide`}>
                  <span className="bg-gradient-to-r from-emerald-500 via-lime-500 to-amber-500 text-transparent bg-clip-text transition-all duration-300 group-hover:from-emerald-400 group-hover:to-amber-400">
                    ALIBA
                  </span>
                  <span className="relative">
                    <span className="text-foreground transition-colors duration-300">GAME</span>
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 flex-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                  {item.icon && <item.icon className="h-4 w-4 text-yellow-500" />}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 ml-auto">
              {/* Desktop Buttons */}
              <div className="hidden lg:flex items-center gap-2">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                  <Search className="h-5 w-5" />
                </Button>

                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                  <Crown className="h-5 w-5 text-yellow-500" />
                </Button>

                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                  <GB className="h-5 w-5" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-foreground"
                  onClick={toggleTheme}
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>

                <Link href="/login">
                  <Button variant="ghost">LOG IN</Button>
                </Link>

                <Link href="/signup">
                  <Button>SIGN UP</Button>
                </Link>
              </div>

              {/* Mobile Buttons */}
              <div className="flex lg:hidden items-center gap-2">
                <Link href="/login">
                  <Button variant="ghost" size="sm">LOG IN</Button>
                </Link>
                <Link href="/signup">
                  <Button size="sm">SIGN UP</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="lg:hidden border-t border-[hsl(var(--header-border))]">
          <div className="container mx-auto px-4">
            <div className="flex items-center h-12 overflow-x-auto no-scrollbar">
              <div className="flex items-center space-x-6 pr-4">
                <Link href="/" className="shrink-0 text-sm font-medium text-foreground whitespace-nowrap">
                  TOP
                </Link>
                <Link href="/live" className="shrink-0 text-sm font-medium text-muted-foreground whitespace-nowrap">
                  LIVE
                </Link>
                <Link href="/sports" className="shrink-0 text-sm font-medium text-muted-foreground whitespace-nowrap">
                  SPORTS
                </Link>
                <Link href="/slots" className="shrink-0 text-sm font-medium text-muted-foreground whitespace-nowrap">
                  SLOTS
                </Link>
                <Link href="/casino" className="shrink-0 text-sm font-medium text-muted-foreground whitespace-nowrap">
                  CASINO
                </Link>
                <Link href="/betgames" className="shrink-0 text-sm font-medium text-muted-foreground whitespace-nowrap">
                  BETGAMES
                </Link>
                <Link href="/v-sport" className="shrink-0 text-sm font-medium text-muted-foreground whitespace-nowrap">
                  V-SPORT
                </Link>
                <Link href="/esports" className="shrink-0 text-sm font-medium text-muted-foreground whitespace-nowrap">
                  ESPORTS
                </Link>
              </div>
              <Button variant="ghost" size="icon" className="ml-auto shrink-0 text-muted-foreground">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50" 
            onClick={() => setIsSidebarOpen(false)}
          />
          
          {/* Sidebar with Adjusted Logo */}
          <div className="fixed inset-y-0 left-0 w-[280px] bg-background p-6 shadow-xl">
            <div className="flex flex-col h-full">
              <Link href="/" className="mb-8 group" onClick={() => setIsSidebarOpen(false)}>
                <div className="flex items-center">
                  <div className={`text-xl lg:text-2xl font-black ${orbitron.className} tracking-wide`}>
                    <span className="bg-gradient-to-r from-emerald-500 via-lime-500 to-amber-500 text-transparent bg-clip-text transition-all duration-300 group-hover:from-emerald-400 group-hover:to-amber-400">
                      ALIBA
                    </span>
                    <span className="relative">
                      <span className="text-foreground transition-colors duration-300">GAME</span>
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </span>
                  </div>
                </div>
              </Link>

              {/* Navigation Items */}
              <nav className="flex-1">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-accent"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      {item.label}
                      {item.icon && <item.icon className="h-4 w-4 text-yellow-500" />}
                    </Link>
                  ))}
                </div>
              </nav>

              {/* Bottom Actions */}
              <div className="mt-auto pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-foreground"
                    onClick={toggleTheme}
                  >
                    {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </Button>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                    <GB className="h-5 w-5" />
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/login" onClick={() => setIsSidebarOpen(false)}>
                    <Button variant="ghost" className="w-full">LOG IN</Button>
                  </Link>
                  <Link href="/signup" onClick={() => setIsSidebarOpen(false)}>
                    <Button className="w-full">SIGN UP</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}