"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight, X } from 'lucide-react'
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const sports = [
  { name: "Football", icon: "⚽", count: 219 },
  { name: "Tennis", icon: "🎾", count: 84 },
  { name: "Ice Hockey", icon: "🏒", count: 56 },
  { name: "Basketball", icon: "🏀", count: 42 },
  { name: "Volleyball", icon: "🏐", count: 28 },
  { name: "Table Tennis", icon: "🏓", count: 24 },
  { name: "Baseball", icon: "⚾", count: 18 },
  { name: "Cricket", icon: "🏏", count: 32 },
  { name: "MMA", icon: "🥊", count: 12 },
  { name: "Boxing", icon: "🥊", count: 15 },
  { name: "Rugby", icon: "🏉", count: 22 },
  { name: "Handball", icon: "🤾", count: 16 },
  { name: "Badminton", icon: "🏸", count: 14 },
  { name: "eSports", icon: "🎮", count: 36 },
  { name: "Golf", icon: "⛳", count: 20 },
  { name: "Formula 1", icon: "🏎️", count: 8 },
  { name: "Cycling", icon: "🚴", count: 10 },
  { name: "Athletics", icon: "🏃", count: 25 }
]

const topLeagues = [
  {
    region: "Europe",
    leagues: ["UEFA Champions League", "UEFA Europa League", "UEFA Europa Conference League"],
  },
  {
    region: "England",
    leagues: ["Premier League"],
  },
  {
    region: "France",
    leagues: ["League 1"],
  },
]

interface LeftSidebarProps {
  isOpen?: boolean
  onClose?: () => void
  className?: string
}

export function LeftSidebar({ isOpen, onClose, className }: LeftSidebarProps) {
  const [expandedSport, setExpandedSport] = useState<string | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose?.()
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [onClose])

  useEffect(() => {
    if (!isMounted) return
    document.body.style.overflow = isOpen ? "hidden" : "unset"
    return () => { document.body.style.overflow = "unset" }
  }, [isOpen, isMounted])

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden" 
          onClick={onClose} 
        />
      )}

      <div
        className={cn(
          "fixed top-0 left-0 h-full w-[280px] bg-card z-50 transition-all duration-300 ease-in-out lg:static lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:rounded-lg overflow-auto border shadow-lg",
          className,
        )}
      >
        <button
          onClick={onClose}
          className="lg:hidden absolute right-4 top-4 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted p-1 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="sticky top-0 px-5 py-4 border-b bg-card z-10">
          <h2 className="text-xl font-bold">TOP LEAGUES</h2>
        </div>

        <div className="p-3">
          {topLeagues.map((item) => (
            <div key={item.region} className="mb-4">
              <div className="text-base text-muted-foreground px-2 mb-2">
                {item.region}
              </div>
              <div className="space-y-1">
                {item.leagues.map((league) => (
                  <Button
                    key={league}
                    variant="ghost"
                    className="w-full justify-start text-left text-base font-medium py-3 px-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {league}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="px-5 py-4 border-t border-b bg-card">
          <h2 className="text-xl font-bold">SPORTS</h2>
        </div>

        <div className="p-3">
          {sports.map((sport) => (
            <Button
              key={sport.name}
              variant="ghost"
              className={cn(
                "w-full justify-between text-left text-base font-medium py-3 px-3 rounded-lg",
                "hover:bg-accent hover:text-accent-foreground transition-colors",
                "group focus-visible:ring-1 focus-visible:ring-ring",
                expandedSport === sport.name && "bg-accent text-accent-foreground"
              )}
              onClick={() => setExpandedSport(expandedSport === sport.name ? null : sport.name)}
            >
              <span className="flex items-center gap-3">
                <span className="text-xl">{sport.icon}</span>
                <span>{sport.name}</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="text-sm bg-muted/50 text-muted-foreground px-2.5 py-0.5 rounded-full">
                  {sport.count}
                </span>
                <ChevronRight
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    expandedSport === sport.name && "rotate-90"
                  )}
                />
              </span>
            </Button>
          ))}
        </div>
      </div>
    </>
  )
}