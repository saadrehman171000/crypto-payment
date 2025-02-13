interface MatchCardProps {
    homeTeam: {
      name: string
      logo: string
      score?: string | number
    }
    awayTeam: {
      name: string
      logo: string
      score?: string | number
    }
    odds: {
      home: number
      draw?: number
      away: number
    }
    time: string
    isLive?: boolean
    matchId: string
  }
  
  export function MatchCard({ homeTeam, awayTeam, odds, time, isLive, matchId }: MatchCardProps) {
    return (
      <div className="bg-[hsl(var(--match-card-bg))] rounded-lg p-4 border border-[hsl(var(--border))] transition-colors duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img src={homeTeam.logo || "/placeholder.svg"} alt={homeTeam.name} className="w-8 h-8" />
              <span className="text-foreground">{homeTeam.name}</span>
            </div>
            <span className="text-muted-foreground">vs</span>
            <div className="flex items-center gap-2">
              <img src={awayTeam.logo || "/placeholder.svg"} alt={awayTeam.name} className="w-8 h-8" />
              <span className="text-foreground">{awayTeam.name}</span>
            </div>
          </div>
          <div className="text-muted-foreground text-sm">{time}</div>
        </div>
  
        <div className="grid grid-cols-3 gap-2">
          <button className="bg-[hsl(var(--match-card-hover))] rounded p-3 text-center hover:bg-[hsl(var(--match-card-hover))] transition-colors">
            <div className="text-sm text-muted-foreground mb-1">1</div>
            <div className="text-foreground font-medium">{odds.home}</div>
          </button>
          <button className="bg-[hsl(var(--match-card-hover))] rounded p-3 text-center hover:bg-[hsl(var(--match-card-hover))] transition-colors">
            <div className="text-sm text-muted-foreground mb-1">X</div>
            <div className="text-foreground font-medium">{odds.draw}</div>
          </button>
          <button className="bg-[hsl(var(--match-card-hover))] rounded p-3 text-center hover:bg-[hsl(var(--match-card-hover))] transition-colors">
            <div className="text-sm text-muted-foreground mb-1">2</div>
            <div className="text-foreground font-medium">{odds.away}</div>
          </button>
        </div>
  
        <div className="mt-4 text-right">
          <button className="text-[#1fad66] text-sm hover:underline">+{matchId}</button>
        </div>
      </div>
    )
  }
  
  