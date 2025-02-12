"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface GameCardProps {
  title: string;
  image: string;
  provider: string;
}

export function GameCard({ title, image, provider }: GameCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
      <CardContent className="p-0 relative">
        <div className="aspect-[4/3] relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <Button className="w-full">Play Now</Button>
        </div>
      </CardContent>
      <CardFooter className="p-4">
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{provider}</p>
        </div>
      </CardFooter>
    </Card>
  );
}