"use client"
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const promoSlides = [
  {
    title: "GET 75 FS",
    subtitle: "Claim your Welcome Bonus!",
    buttonText: "GET NOW",
    image: "/promo.jpg",
  },
  {
    title: "MULTI BONUS",
    subtitle: "Up to 10% on winning multi bets!",
    buttonText: "BET NOW",
    image: "/bonus.jpg",
  },
  {
    title: "CASH OUT",
    subtitle: "Get paid before the match ends!",
    buttonText: "LEARN MORE",
    image: "/cash.avif",
  },
]

export function PromoBanner() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % promoSlides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + promoSlides.length) % promoSlides.length)
    }

    return (
      <div className="relative h-[400px] overflow-hidden rounded-lg">
        <div className="absolute inset-0">
          <img
            src={promoSlides[currentSlide].image}
            alt="Promotional background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
  
        <div className="relative z-10 flex flex-col items-start justify-center h-full p-8 md:p-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {promoSlides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            {promoSlides[currentSlide].subtitle}
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
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
    )
}
  
  