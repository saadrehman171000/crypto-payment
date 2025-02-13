import Image from "next/image"
import { Trophy } from 'lucide-react'

interface WinnerCardProps {
  game: string
  amount: string
  player: string
  image: string
}

export function WinnerCard({ game, amount, player, image }: WinnerCardProps) {
  return (
    <div className="relative group shrink-0 w-[280px] rounded-lg overflow-hidden bg-background border hover:border-primary transition-colors">
      <div className="aspect-video relative">
        <Image
          src={image}
          alt={game}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <div className="flex items-center gap-2 mb-1">
            <Trophy className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-medium">Winner</span>
          </div>
          <h3 className="font-medium mb-1">{game}</h3>
          <p className="text-2xl font-bold text-primary">{amount}</p>
          <p className="text-sm opacity-80">{player}</p>
        </div>
      </div>
    </div>
  )
}