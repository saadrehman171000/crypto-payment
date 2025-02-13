"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function BetSlip() {
  return (
    <div className="bg-[#2A2A2E] rounded-lg sticky top-20">
      <div className="p-4 border-b border-gray-800">
        <h2 className="text-white font-medium flex items-center gap-2">
          Bet slip <span className="bg-gray-700 text-xs px-2 py-0.5 rounded">0</span>
        </h2>
      </div>

      <div className="p-6">
        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm">Click on the odds to add selections to your bet slip</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm text-gray-400">Booking code</label>
            <Input
              type="text"
              className="w-full bg-[#1C1C1E] border-0 text-white placeholder-gray-500"
              placeholder="Enter code"
            />
          </div>

          <Button className="w-full bg-[#1fad66] hover:bg-[#1fad66]/90">LOAD</Button>
        </div>
      </div>
    </div>
  )
}

