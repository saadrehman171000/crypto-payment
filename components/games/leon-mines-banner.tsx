import Image from "next/image"

export function LeonMinesBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 text-white">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold">LEON Mines</h3>
          <p className="text-sm opacity-80">Tada Gaming</p>
        </div>
        <Image 
          src="/tada.jpg" 
          alt="LEON Mines" 
          width={48} 
          height={48} 
          className="rounded-lg object-cover"
        />
      </div>
      <button className="w-full bg-white text-blue-900 px-4 py-2 rounded font-medium hover:bg-white/90 transition-colors">
        PLAY NOW
      </button>
    </div>
  )
} 