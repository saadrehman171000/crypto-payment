import { Header } from "@/components/layout/header"
import { LeftSidebar } from "@/components/layout/left-sidebar"
import { BetSlip } from "@/components/layout/bet-slip"
import { 
  TrendingUp, 
  Dumbbell, 
  Snowflake, 
  CircleDot,  
  CircleDashed, 
  Gamepad2, 
  Mountain, 
  Flag, 
  Star, 
  BadgeCheck 
} from "lucide-react"

const timeFilters = ["All", "Live", "Today", "Tomorrow", "1h", "3h", "6h", "12h", "24h", "Calendar"]

const sportIcons = [
  { Icon: TrendingUp, label: "Highest odds", color: "text-red-500" },
  { Icon: Dumbbell, label: "Football", color: "text-green-500" },
  { Icon: Snowflake, label: "Ice Hockey", color: "text-blue-500" },
  { Icon: CircleDot, label: "Tennis", color: "text-yellow-500" },
  { Icon: CircleDashed, label: "Basketball", color: "text-orange-500" },
  { Icon: Gamepad2, label: "Esports", color: "text-pink-500" },
  { Icon: Mountain, label: "Alpine Skiing", color: "text-cyan-500" },
  { Icon: Flag, label: "American Football", color: "text-indigo-500" },
  { Icon: Star, label: "Aussie Rules", color: "text-emerald-500" },
  { Icon: BadgeCheck, label: "Badminton", color: "text-rose-500" },
]

const topLeagues = [
  { name: "Europe - UEFA Champions League", count: 17 },
  { name: "Europe - UEFA Europa Conference League", count: 26 },
  { name: "Europe - UEFA Europa League", count: 26 },
  { name: "England - Premier League", count: 42 },
  { name: "France - League 1", count: 23 },
  { name: "Germany - Bundesliga", count: 24 },
  { name: "Italy - Serie A", count: 26 },
]

export default function Sports() {
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
                {/* Promotional Banner */}
                <div className="relative rounded-lg overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 h-[300px]">
                  <div className="absolute inset-0 flex flex-col justify-center px-8">
                    <h1 className="text-4xl font-bold text-white mb-2">LOYAL PERKS</h1>
                    <p className="text-xl text-white mb-6">Earn Leons, Get FS & Free Bets</p>
                    <button className="bg-white text-black px-6 py-3 rounded-md font-medium w-fit hover:bg-white/90">
                      START NOW
                    </button>
                  </div>
                </div>

                {/* Sport Icons */}
                <div className="flex overflow-x-auto gap-4 pb-4">
                  {sportIcons.map((sport) => (
                    <div key={sport.label} className="flex flex-col items-center gap-2 min-w-[80px]">
                      <div className="w-10 h-10 bg-card hover:bg-accent rounded-full flex items-center justify-center cursor-pointer">
                        <sport.Icon className={`w-5 h-5 ${sport.color}`} />
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{sport.label}</span>
                    </div>
                  ))}
                </div>

                {/* Time Filters */}
                <div className="flex overflow-x-auto gap-4 pb-4">
                  {timeFilters.map((filter) => (
                    <button
                      key={filter}
                      className="px-4 py-2 rounded-md bg-card hover:bg-accent text-sm font-medium whitespace-nowrap"
                    >
                      {filter}
                    </button>
                  ))}
                </div>

                {/* Top Leagues */}
                <div className="space-y-2">
                  <h2 className="text-xl font-medium mb-4">Top Leagues</h2>
                  {topLeagues.map((league) => (
                    <div
                      key={league.name}
                      className="flex items-center justify-between p-4 bg-card hover:bg-accent rounded-lg cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-muted-foreground">★</span>
                        <span>{league.name}</span>
                      </div>
                      <span className="text-muted-foreground">{league.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:w-[320px] shrink-0">
              <BetSlip />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}