"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight, X } from "lucide-react"
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
  { name: "MMA", icon: "🥊", count: 12 },
  { name: "eSports", icon: "🎮", count: 36 },
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
      if (e.key === "Escape") {
        onClose?.()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [onClose])

  useEffect(() => {
    if (!isMounted) return

    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen, isMounted])

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />}

      <div
        className={cn(
          "fixed top-0 left-0 h-full w-[280px] bg-[hsl(var(--sidebar-bg))] z-50 transition-all duration-300 ease-in-out lg:static lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:rounded-lg lg:overflow-hidden border-r border-[hsl(var(--border))]",
          className,
        )}
      >
        <button
          onClick={onClose}
          className="lg:hidden absolute right-4 top-4 text-muted-foreground hover:text-foreground"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-4 border-b border-[hsl(var(--border))]">
          <h2 className="text-foreground font-medium">TOP LEAGUES</h2>
        </div>

        <div className="p-2">
          {topLeagues.map((item) => (
            <div key={item.region} className="mb-4">
              <div className="text-sm text-muted-foreground px-2 mb-2">{item.region}</div>
              {item.leagues.map((league) => (
                <Button
                  key={league}
                  variant="ghost"
                  className="w-full justify-start text-left text-sm text-muted-foreground hover:text-foreground hover:bg-[hsl(var(--sidebar-hover))]"
                >
                  {league}
                </Button>
              ))}
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-b border-[hsl(var(--border))]">
          <h2 className="text-foreground font-medium">SPORTS</h2>
        </div>

        <div className="p-2 overflow-y-auto max-h-[calc(100vh-300px)] lg:max-h-[600px]">
          {sports.map((sport) => (
            <Button
              key={sport.name}
              variant="ghost"
              className="w-full justify-between text-left text-sm text-muted-foreground hover:text-foreground hover:bg-[hsl(var(--sidebar-hover))] group"
              onClick={() => setExpandedSport(expandedSport === sport.name ? null : sport.name)}
            >
              <span className="flex items-center gap-2">
                <span>{sport.icon}</span>
                <span>{sport.name}</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">{sport.count}</span>
                <ChevronRight
                  className={cn("h-4 w-4 transition-transform", expandedSport === sport.name && "rotate-90")}
                />
              </span>
            </Button>
          ))}
        </div>
      </div>
    </>
  )
}

