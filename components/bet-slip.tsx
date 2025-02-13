import { Button } from "@/components/ui/button"

export function BetSlip() {
  return (
    <div className="bg-[#2A2A2E] rounded-lg">
      <div className="p-4 border-b border-gray-800">
        <h2 className="text-white font-medium flex items-center gap-2">
          Bet slip <span className="bg-gray-700 text-xs px-2 py-0.5 rounded">0</span>
        </h2>
      </div>

      <div className="p-6 text-center">
        <p className="text-gray-400 text-sm mb-4">Click on the odds to add selections to your bet slip</p>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm text-gray-400">Booking code</label>
            <input
              type="text"
              className="w-full bg-[#1C1C1E] border-0 rounded p-2 text-white"
              placeholder="Enter code"
            />
          </div>

          <Button className="w-full bg-[#1fad66] hover:bg-[#1fad66]/90">LOAD</Button>
        </div>
      </div>
    </div>
  )
}

