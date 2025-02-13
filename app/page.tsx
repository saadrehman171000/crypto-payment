import { Header } from "@/components/layout/header"
import { LeftSidebar } from "@/components/layout/left-sidebar"
import { BetSlip } from "@/components/layout/bet-slip"
import { PromoBanner } from "@/components/promotions/promo-banner"
import { QuickAccess } from "@/components/quick-access"
import { MatchCard } from "@/components/matches/match-card"
import { ChevronDown, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { LeonMinesBanner } from "@/components/games/leon-mines-banner"

const footballMatches = [
  {
    league: "Europe UEFA Europa League",
    matches: [
      {
        homeTeam: {
          name: "FC Midtjylland",
          logo: "https://media.api-sports.io/football/teams/393.png",
        },
        awayTeam: {
          name: "Real Sociedad",
          logo: "https://media.api-sports.io/football/teams/548.png",
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
          logo: "https://media.api-sports.io/football/teams/611.png",
        },
        awayTeam: {
          name: "Anderlecht",
          logo: "https://media.api-sports.io/football/teams/554.png",
        },
        odds: {
          home: 1.62,
          draw: 4.17,
          away: 5.5,
        },
        time: "Today 22:45",
        matchId: "1612",
      },
    ],
  },
]

const hockeyMatches = [
  {
    league: "Russia KHL",
    matches: [
      {
        homeTeam: {
          name: "HC Dinamo Minsk",
          logo: "https://media.api-sports.io/hockey/teams/485.png",
          score: 0,
        },
        awayTeam: {
          name: "Vityaz Podolsk",
          logo: "https://media.api-sports.io/hockey/teams/507.png",
          score: 1,
        },
        odds: {
          home: 5.80,
          draw: 3.05,
          away: 1.70,
        },
        time: "2nd period",
        isLive: true,
        matchId: "214",
      },
    ],
  },
]

const cricketMatches = [
  {
    league: "Indian Premier League",
    matches: [
      {
        homeTeam: {
          name: "Mumbai Indians",
          logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/200px-Mumbai_Indians_Logo.png",
          score: "186/4",
        },
        awayTeam: {
          name: "Chennai Super Kings",
          logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/200px-Chennai_Super_Kings_Logo.png",
          score: "142/6",
        },
        odds: {
          home: 1.45,
          draw: 4.50,
          away: 2.75,
        },
        time: "15.2 overs",
        isLive: true,
        matchId: "ipl-001",
      },
      {
        homeTeam: {
          name: "Royal Challengers Bangalore",
          logo: "https://cdn.nba.com/logos/nba/1610612738/global/L/logo.svg",
          score: "175/6",
        },
        awayTeam: {
          name: "Rajasthan Royals",
          logo: "https://cdn.nba.com/logos/nba/1610612747/global/L/logo.svg",
          score: "123/4",
        },
        odds: {
          home: 1.65,
          draw: 4.75,
          away: 2.15,
        },
        time: "13.4 overs",
        isLive: true,
        matchId: "ipl-002",
      },
    ],
  },
  {
    league: "Big Bash League",
    matches: [
      {
        homeTeam: {
          name: "Sydney Sixers",
          logo: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160/lsci/db/PICTURES/CMS/313400/313485.logo.png",
        },
        awayTeam: {
          name: "Melbourne Stars",
          logo: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160/lsci/db/PICTURES/CMS/313400/313483.logo.png",
        },
        odds: {
          home: 1.90,
          draw: 4.75,
          away: 1.95,
        },
        time: "Today 19:00",
        matchId: "bbl-001",
      },
    ],
  },
]

const tennisMatches = [
  {
    league: "ATP Masters 1000 Miami",
    matches: [
      {
        homeTeam: {
          name: "Carlos Alcaraz",
          logo: "https://cdn.nba.com/logos/nba/1610612759/global/L/logo.svg",
          score: 2,
        },
        awayTeam: {
          name: "Daniil Medvedev",
          logo: "https://cdn.nba.com/logos/nba/1610612744/global/L/logo.svg",
          score: 1,
        },
        odds: {
          home: 1.65,
          away: 2.25,
        },
        time: "3rd Set",
        isLive: true,
        matchId: "atp-001",
      },
    ],
  },
]

const basketballMatches = [
  {
    league: "NBA",
    matches: [
      {
        homeTeam: {
          name: "LA Lakers",
          logo: "https://media.api-sports.io/basketball/teams/139.png",
          score: 89,
        },
        awayTeam: {
          name: "Golden State Warriors",
          logo: "https://media.api-sports.io/basketball/teams/136.png",
          score: 92,
        },
        odds: {
          home: 2.10,
          away: 1.75,
        },
        time: "Q3 4:23",
        isLive: true,
        matchId: "nba-001",
      },
      {
        homeTeam: {
          name: "Boston Celtics",
          logo: "https://media.api-sports.io/basketball/teams/133.png",
          score: 105,
        },
        awayTeam: {
          name: "Miami Heat",
          logo: "https://media.api-sports.io/basketball/teams/141.png",
          score: 98,
        },
        odds: {
          home: 1.55,
          away: 2.45,
        },
        time: "Q4 2:15",
        isLive: true,
        matchId: "nba-002",
      },
      {
        homeTeam: {
          name: "Milwaukee Bucks",
          logo: "https://media.api-sports.io/basketball/teams/142.png",
        },
        awayTeam: {
          name: "Phoenix Suns",
          logo: "https://media.api-sports.io/basketball/teams/149.png",
        },
        odds: {
          home: 1.85,
          away: 1.95,
        },
        time: "Today 23:00",
        matchId: "nba-003",
      },
    ],
  },
]

const promotions = [
  {
    title: "Multi bet Bonus",
    description: "LEON gives an extra 10% to every winning multi bet!",
    image: "/multi.jpg",
  },
  {
    title: "Wolf Cash Stash",
    description: "Hunt for your share of the 78.000 € prize pool with Pragmatic Play!",
    image: "/wolff.png",
  },
  {
    title: "Cash Out",
    description: "Get paid on your bet before the match ends!",
    image: "/cashout.png",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Sidebar */}
            <div className="hidden lg:block lg:w-[280px] shrink-0">
              <LeftSidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <div className="space-y-8">
                <PromoBanner />
                <QuickAccess />

                {/* Football Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-medium flex items-center gap-2">
                      Football <ChevronDown className="h-5 w-5" />
                    </h2>
                    <Button variant="ghost" size="sm">
                      Winner <ChevronDown className="h-4 w-4 ml-1" />
                    </Button>
                  </div>

                  {footballMatches.map((league) => (
                    <div key={league.league} className="rounded-lg overflow-hidden bg-card">
                      <div className="flex items-center justify-between px-4 py-2 bg-muted">
                        <h3 className="text-sm">{league.league}</h3>
                        <div className="flex items-center gap-12 text-sm text-muted-foreground">
                          <span>1</span>
                          <span>X</span>
                          <span>2</span>
                        </div>
                      </div>
                      {league.matches.map((match) => (
                        <div key={match.matchId} className="p-4 border-b last:border-0">
                          <MatchCard {...match} />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Hockey Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-medium flex items-center gap-2">
                      Ice Hockey <ChevronDown className="h-5 w-5" />
                    </h2>
                    <Button variant="ghost" size="sm">
                      Winner <ChevronDown className="h-4 w-4 ml-1" />
                    </Button>
                  </div>

                  {hockeyMatches.map((league) => (
                    <div key={league.league} className="rounded-lg overflow-hidden bg-card">
                      <div className="flex items-center justify-between px-4 py-2 bg-muted">
                        <h3 className="text-sm">{league.league}</h3>
                        <div className="flex items-center gap-12 text-sm text-muted-foreground">
                          <span>1</span>
                          <span>X</span>
                          <span>2</span>
                        </div>
                      </div>
                      {league.matches.map((match) => (
                        <div key={match.matchId} className="p-4 border-b last:border-0">
                          <MatchCard {...match} />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Cricket Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-medium flex items-center gap-2">
                      Cricket <ChevronDown className="h-5 w-5" />
                    </h2>
                    <Button variant="ghost" size="sm">
                      Winner <ChevronDown className="h-4 w-4 ml-1" />
                    </Button>
                  </div>

                  {cricketMatches.map((league) => (
                    <div key={league.league} className="rounded-lg overflow-hidden bg-card">
                      <div className="flex items-center justify-between px-4 py-2 bg-muted">
                        <h3 className="text-sm">{league.league}</h3>
                        <div className="flex items-center gap-12 text-sm text-muted-foreground">
                          <span>1</span>
                          <span>X</span>
                          <span>2</span>
                        </div>
                      </div>
                      {league.matches.map((match) => (
                        <div key={match.matchId} className="p-4 border-b last:border-0">
                          <MatchCard {...match} />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Tennis Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-medium flex items-center gap-2">
                      Tennis <ChevronDown className="h-5 w-5" />
                    </h2>
                    <Button variant="ghost" size="sm">
                      Match Winner <ChevronDown className="h-4 w-4 ml-1" />
                    </Button>
                  </div>

                  {tennisMatches.map((league) => (
                    <div key={league.league} className="rounded-lg overflow-hidden bg-card">
                      <div className="flex items-center justify-between px-4 py-2 bg-muted">
                        <h3 className="text-sm">{league.league}</h3>
                        <div className="flex items-center gap-12 text-sm text-muted-foreground">
                          <span>1</span>
                          <span>2</span>
                        </div>
                      </div>
                      {league.matches.map((match) => (
                        <div key={match.matchId} className="p-4 border-b last:border-0">
                          <MatchCard {...match} />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Basketball Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-medium flex items-center gap-2">
                      Basketball <ChevronDown className="h-5 w-5" />
                    </h2>
                    <Button variant="ghost" size="sm">
                      Match Winner <ChevronDown className="h-4 w-4 ml-1" />
                    </Button>
                  </div>

                  {basketballMatches.map((league) => (
                    <div key={league.league} className="rounded-lg overflow-hidden bg-card">
                      <div className="flex items-center justify-between px-4 py-2 bg-muted">
                        <h3 className="text-sm">{league.league}</h3>
                        <div className="flex items-center gap-12 text-sm text-muted-foreground">
                          <span>1</span>
                          <span>2</span>
                        </div>
                      </div>
                      {league.matches.map((match) => (
                        <div key={match.matchId} className="p-4 border-b last:border-0">
                          <MatchCard {...match} />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Promotions Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-medium">Promotions</h2>
                    <Button variant="ghost" size="sm">
                      All promotions
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {promotions.map((promo) => (
                      <div
                        key={promo.title}
                        className="rounded-lg overflow-hidden bg-card hover:bg-accent transition-colors"
                      >
                        <img src={promo.image || "/placeholder.svg"} alt={promo.title} className="w-full h-40 object-cover" />
                        <div className="p-4">
                          <h3 className="font-bold mb-2">{promo.title}</h3>
                          <p className="text-sm text-muted-foreground">{promo.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block lg:w-[320px] shrink-0">
              <div className="space-y-4 sticky top-20">
                <BetSlip />
                <div className="mt-4">
                  <LeonMinesBanner />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}