"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  targetDate: Date
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded px-4 py-2">
      <div className="flex items-center gap-1">
        <span className="text-2xl font-bold">{String(timeLeft.days).padStart(2, "0")}</span>
        <span className="text-xs text-gray-400">DAYS</span>
      </div>
      <span className="text-2xl">:</span>
      <div className="flex items-center gap-1">
        <span className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, "0")}</span>
        <span className="text-xs text-gray-400">HOURS</span>
      </div>
      <span className="text-2xl">:</span>
      <div className="flex items-center gap-1">
        <span className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, "0")}</span>
        <span className="text-xs text-gray-400">MINUTES</span>
      </div>
    </div>
  )
}

