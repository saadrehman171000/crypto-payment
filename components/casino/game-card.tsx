import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play } from 'lucide-react'

interface GameCardProps {
  title: string
  image: string
  provider?: string
  limits: string
}

export function GameCard({ title, image, provider, limits }: GameCardProps) {
  return (
    <div className="group relative rounded-lg overflow-hidden bg-background border hover:border-primary transition-colors">
      <div className="aspect-[4/3] relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-3 bg-background">
        <h3 className="font-medium truncate">{title}</h3>
        {provider && <p className="text-sm text-muted-foreground">{provider}</p>}
        {limits && <p className="text-xs text-muted-foreground mt-1">{limits}</p>}
      </div>
    </div>
  )
}