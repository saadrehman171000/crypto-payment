interface MatchOddsProps {
    homeTeam: {
      name: string
      logo: string
    }
    awayTeam: {
      name: string
      logo: string
    }
    odds: {
      home: number
      draw: number
      away: number
    }
    time: string
    matchId: string
  }
  
  export function MatchOdds({ homeTeam, awayTeam, odds, time, matchId }: MatchOddsProps) {
    return (
      <div className="bg-[#2A2A2E] rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img src={homeTeam.logo || "/placeholder.svg"} alt={homeTeam.name} className="w-8 h-8" />
              <span className="text-white">{homeTeam.name}</span>
            </div>
            <span className="text-gray-400">vs</span>
            <div className="flex items-center gap-2">
              <img src={awayTeam.logo || "/placeholder.svg"} alt={awayTeam.name} className="w-8 h-8" />
              <span className="text-white">{awayTeam.name}</span>
            </div>
          </div>
          <div className="text-gray-400 text-sm">{time}</div>
        </div>
  
        <div className="grid grid-cols-3 gap-2">
          <button className="bg-[#1C1C1E] rounded p-3 text-center hover:bg-[#1C1C1E]/80">
            <div className="text-sm text-gray-400 mb-1">1</div>
            <div className="text-white font-medium">{odds.home}</div>
          </button>
          <button className="bg-[#1C1C1E] rounded p-3 text-center hover:bg-[#1C1C1E]/80">
            <div className="text-sm text-gray-400 mb-1">X</div>
            <div className="text-white font-medium">{odds.draw}</div>
          </button>
          <button className="bg-[#1C1C1E] rounded p-3 text-center hover:bg-[#1C1C1E]/80">
            <div className="text-sm text-gray-400 mb-1">2</div>
            <div className="text-white font-medium">{odds.away}</div>
          </button>
        </div>
  
        <div className="mt-4 text-right">
          <button className="text-[#1fad66] text-sm hover:underline">+{matchId}</button>
        </div>
      </div>
    )
  }
  
  