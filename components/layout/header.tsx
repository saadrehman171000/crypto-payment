"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Search, Crown, Menu, Moon, Sun } from "lucide-react"
import { GB } from "country-flag-icons/react/3x2"
import { LeftSidebar } from "./left-sidebar"
import { useTheme } from "@/components/theme-provider"

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

            <Link href="/" className="mr-8">
              <div className="flex items-center gap-2">
                <Image 
                  src="/logo.svg"
                  alt="LEON"
                  width={28} 
                  height={28} 
                  className="opacity-90" 
                />
                <span className="text-2xl font-bold text-foreground">LEON</span>
              </div>
            </Link>

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
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <Search className="h-5 w-5" />
              </Button>

              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <Crown className="h-5 w-5 text-yellow-500" />
              </Button>

              <div className="hidden lg:flex items-center gap-4">
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
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <LeftSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} className="lg:hidden" />
    </>
  )
}

