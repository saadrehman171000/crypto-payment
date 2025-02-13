export function PromoBanner() {
    return (
      <div className="relative h-[400px] overflow-hidden rounded-lg bg-gradient-to-r from-red-800 to-red-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/30" />
          <img
            src="/promo-bg.jpg"
            alt="Promotional background"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
  
        <div className="relative z-10 flex flex-col items-start justify-center h-full p-8 md:p-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">GET 75 FS</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">Claim your Welcome Bonus!</p>
          <button className="bg-white text-red-900 px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
            GET NOW
          </button>
        </div>
  
        <div className="absolute bottom-0 right-0 w-1/3 h-full">
          <img src="/slot-machine.png" alt="Slot Machine" className="absolute bottom-0 right-0 h-4/5 object-contain" />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-transparent" />
        </div>
      </div>
    )
  }
  
  