"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Play } from "lucide-react"

interface GameCardProps {
  title: string
  image: string
  provider: string
  betRange: string
}

export function GameCard({ title, image, provider, betRange }: GameCardProps) {
  return (
    <Card className="overflow-hidden group bg-[#22262a] border-0">
      <CardContent className="p-0 relative">
        <div className="aspect-[4/3] relative overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Button className="bg-[#1fad66] hover:bg-[#1fad66]/90 text-white gap-2">
            <Play className="w-4 h-4" /> Play Now
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-medium text-lg mb-1">{title}</h3>
          <p className="text-sm text-gray-400">{provider}</p>
          <p className="text-sm text-[#1fad66] mt-1">{betRange}</p>
        </div>
      </CardContent>
    </Card>
  )
}

