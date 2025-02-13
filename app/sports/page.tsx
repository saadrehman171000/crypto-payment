"use client"
import { useState } from 'react'
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
  BadgeCheck,
  ChevronDown,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { SportIcons } from "@/components/icons"
        import { GB, RU, DZ, AO, AR, AW, AU, AT, AZ, BH, BB, IN, ID, HU, IS, DE, GR, FI, FR, DO, EE, DK, CL, CA, BR, BE, CN, CO, EC, EG, IR, NO, PK, NZ, NG, NL, MX, MY, LB, LV, KW, JP, IQ, IE, IT, JM, KZ, KE, MA, US, VN } from 'country-flag-icons/react/3x2'
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

const timeFilters = ["All", "Live", "Today", "Tomorrow", "1h", "3h", "6h", "12h", "24h", "Calendar"]

const sportIcons = [
  { 
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 17L9 11L13 15L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 7H21V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Highest odds",
    color: "text-red-500"
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
        <path d="M7 12L10 15L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Football",
    color: "text-green-500"
  },
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

const countries = [
    { name: "Russia", code: "RU", Flag: RU },
    { name: "Algeria", code: "DZ", Flag: DZ },
    { name: "Angola", code: "AO", Flag: AO },
    { name: "Argentina", code: "AR", Flag: AR },
    { name: "Aruba", code: "AW", Flag: AW },
    { name: "Australia", code: "AU", Flag: AU },
    { name: "Austria", code: "AT", Flag: AT },
    { name: "Azerbaijan", code: "AZ", Flag: AZ },
    { name: "Bahrain", code: "BH", Flag: BH },
    { name: "Barbados", code: "BB", Flag: BB },
    { name: "Belgium", code: "BE", Flag: BE },
    { name: "Brazil", code: "BR", Flag: BR },
    { name: "Canada", code: "CA", Flag: CA },
    { name: "Chile", code: "CL", Flag: CL },
    { name: "China", code: "CN", Flag: CN },
    { name: "Colombia", code: "CO", Flag: CO },
    { name: "Denmark", code: "DK", Flag: DK },
    { name: "Dominican Republic", code: "DO", Flag: DO },
    { name: "Ecuador", code: "EC", Flag: EC },
    { name: "Egypt", code: "EG", Flag: EG },
    { name: "Estonia", code: "EE", Flag: EE },
    { name: "Finland", code: "FI", Flag: FI },
    { name: "France", code: "FR", Flag: FR },
    { name: "Germany", code: "DE", Flag: DE },
    { name: "Greece", code: "GR", Flag: GR },
    { name: "Hungary", code: "HU", Flag: HU },
    { name: "Iceland", code: "IS", Flag: IS },
    { name: "India", code: "IN", Flag: IN },
    { name: "Indonesia", code: "ID", Flag: ID },
    { name: "Iran", code: "IR", Flag: IR },
    { name: "Iraq", code: "IQ", Flag: IQ },
    { name: "Ireland", code: "IE", Flag: IE },
    { name: "Italy", code: "IT", Flag: IT },
    { name: "Jamaica", code: "JM", Flag: JM },
    { name: "Japan", code: "JP", Flag: JP },
    { name: "Kazakhstan", code: "KZ", Flag: KZ },
    { name: "Kenya", code: "KE", Flag: KE },
    { name: "Kuwait", code: "KW", Flag: KW },
    { name: "Latvia", code: "LV", Flag: LV },
    { name: "Lebanon", code: "LB", Flag: LB },
    { name: "Malaysia", code: "MY", Flag: MY },
    { name: "Mexico", code: "MX", Flag: MX },
    { name: "Morocco", code: "MA", Flag: MA },
    { name: "Netherlands", code: "NL", Flag: NL },
    { name: "New Zealand", code: "NZ", Flag: NZ },
    { name: "Nigeria", code: "NG", Flag: NG },
    { name: "Norway", code: "NO", Flag: NO },
    { name: "Pakistan", code: "PK", Flag: PK },
    { name: "United Kingdom", code: "GB", Flag: GB },
    { name: "United States", code: "US", Flag: US },
    { name: "Vietnam", code: "VN", Flag: VN },
  ];
  
  console.log(countries);
  

const promoSlides = [
  {
    title: "LOYAL PERKS",
    subtitle: "Earn Leons, Get FS & Free Bets",
    buttonText: "START NOW",
    image: "/loyal.jpg",  // Soccer stadium
  },
  {
    title: "SPORTS BONUS",
    subtitle: "Get up to €100 on your first bet",
    buttonText: "CLAIM NOW",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067",  // Basketball court
  },
  {
    title: "LIVE BETTING",
    subtitle: "Bet on live matches with best odds",
    buttonText: "BET NOW",
    image: "/betting.jpg",  // Tennis court
  },
]

export default function Sports() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % promoSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + promoSlides.length) % promoSlides.length)
  }

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
                {/* Updated Promotional Banner with Slider */}
                <div className="relative rounded-lg overflow-hidden h-[300px]">
                  <div className="absolute inset-0">
                    <img
                      src={promoSlides[currentSlide].image}
                      alt="Promotional background"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-center px-8">
                    <h1 className="text-4xl font-bold text-white mb-2">
                      {promoSlides[currentSlide].title}
                    </h1>
                    <p className="text-xl text-white mb-6">
                      {promoSlides[currentSlide].subtitle}
                    </p>
                    <button className="bg-white text-black px-6 py-3 rounded-md font-medium w-fit hover:bg-white/90">
                      {promoSlides[currentSlide].buttonText}
                    </button>
                  </div>

                  {/* Navigation Arrows */}
                  <button 
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                    {promoSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentSlide ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Sport Icons */}
                <div className="flex overflow-x-auto gap-4 pb-4">
                  {sportIcons.map((sport) => (
                    <div key={sport.label} className="flex flex-col items-center gap-2 min-w-[80px]">
                      <div className="w-10 h-10 bg-card hover:bg-accent rounded-full flex items-center justify-center cursor-pointer">
                        {sport.icon}
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

                {/* Countries */}
                <div className="space-y-2">
                  <h2 className="text-xl font-medium mb-4">Countries</h2>
                  {countries.map(({ name, Flag }) => (
                    <Button
                      key={name}
                      variant="ghost"
                      className="flex items-center justify-between w-full p-4 bg-card hover:bg-accent rounded-lg text-left text-foreground"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-4 flex-shrink-0">
                          <Flag className="w-6 h-4" />
                        </div>
                        <span className="text-foreground">{name}</span>
                      </div>
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    </Button>
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