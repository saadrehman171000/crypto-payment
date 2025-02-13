import { Header } from "@/components/layout/header"
import { LeftSidebar } from "@/components/layout/left-sidebar"
import { BetSlip } from "@/components/layout/bet-slip"
import { PromoBanner } from "@/components/promotions/promo-banner"
import { QuickAccess } from "@/components/quick-access"
import { MatchCard } from "@/components/matches/match-card"

const matches = [
  {
    homeTeam: {
      name: "FC Midtjylland",
      logo: "/team-logos/midtjylland.png",
    },
    awayTeam: {
      name: "Real Sociedad",
      logo: "/team-logos/sociedad.png",
    },
    odds: {
      home: 3.73,
      draw: 3.4,
      away: 2.09,
    },
    time: "Today 22:45",
    matchId: "1596",
  },
  {
    homeTeam: {
      name: "Fenerbahçe",
      logo: "/team-logos/fenerbahce.png",
    },
    awayTeam: {
      name: "Anderlecht",
      logo: "/team-logos/anderlecht.png",
    },
    odds: {
      home: 1.62,
      draw: 4.17,
      away: 5.5,
    },
    time: "Today 22:45",
    matchId: "1612",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Sidebar - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:block lg:w-[280px] shrink-0">
              <LeftSidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <div className="space-y-6">
                <PromoBanner />
                <QuickAccess />

                <div className="space-y-4">
                  <h2 className="text-xl font-medium">Football</h2>
                  {matches.map((match) => (
                    <MatchCard key={match.matchId} {...match} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:w-[320px] shrink-0">
              <div className="space-y-4">
                <BetSlip />

                <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">LEON Mines</h3>
                      <p className="text-sm text-white/80">Tada Gaming</p>
                    </div>
                    <img src="/leon-mines-logo.png" alt="LEON Mines" className="h-12 w-12" />
                  </div>
                  <button className="w-full bg-white text-blue-900 px-4 py-2 rounded font-medium hover:bg-white/90 transition-colors">
                    PLAY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}