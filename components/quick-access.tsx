"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { PlayCircle, TrendingUp, Gamepad2, MonitorPlay, Dice5, Trophy, Joystick, Zap, Gift } from "lucide-react"

const quickAccess = [
  { Icon: PlayCircle, label: "Live", color: "text-green-500" },
  { Icon: TrendingUp, label: "Highest odds", color: "text-red-500" },
  { Icon: Gamepad2, label: "Slots", color: "text-purple-500" },
  { Icon: MonitorPlay, label: "Live Casino", color: "text-blue-500" },
  { Icon: Dice5, label: "Betgames", color: "text-orange-500" },
  { Icon: Trophy, label: "V-Sport", color: "text-cyan-500" },
  { Icon: Joystick, label: "eSports", color: "text-pink-500" },
  { Icon: Zap, label: "Quick Bets", color: "text-yellow-500" },
  { Icon: Gift, label: "Promotions", color: "text-purple-500" },
]

export function QuickAccess() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-1 bg-white dark:bg-[#1C1C1E] rounded-lg p-1">
      {quickAccess.map((item) => (
        <Button
          key={item.label}
          variant="ghost"
          className="flex flex-col items-center gap-2 h-auto py-4 bg-gray-50 hover:bg-gray-100 dark:bg-[#1C1C1E]/50 dark:hover:bg-[#1C1C1E]/80"
        >
          <item.Icon className={`h-6 w-6 ${item.color}`} />
          <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
            {item.label}
          </span>
        </Button>
      ))}
    </div>
  )
}