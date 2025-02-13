"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function BetSlip() {
  return (
    <div className="bg-card border rounded-lg shadow-md sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto">
      <div className="p-4 border-b sticky top-0 bg-card z-10">
        <h2 className="text-foreground font-medium flex items-center gap-2">
          Bet slip 
          <span className="bg-muted text-xs px-2 py-0.5 rounded">0</span>
        </h2>
      </div>

      <div className="p-6">
        <div className="text-center mb-8">
          <p className="text-muted-foreground text-sm">
            Click on the odds to add selections to your bet slip
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm text-muted-foreground">
              Booking code
            </label>
            <Input
              type="text"
              className="w-full"
              placeholder="Enter code"
            />
          </div>

          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            LOAD
          </Button>
        </div>
      </div>
    </div>
  )
}

