"use client"
import { useRouter } from "next/navigation"
import { X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PaymentMethodCard } from "./components/payment-method-card"
import Image from "next/image"

// Import crypto icons
import BTCIcon from "cryptocurrency-icons/svg/color/btc.svg"
import ETHIcon from "cryptocurrency-icons/svg/color/eth.svg"
import SOLIcon from "cryptocurrency-icons/svg/color/sol.svg"
import LTCIcon from "cryptocurrency-icons/svg/color/ltc.svg"
import USDCIcon from "cryptocurrency-icons/svg/color/usdc.svg"
import USDTIcon from "cryptocurrency-icons/svg/color/usdt.svg"
import DAIIcon from "cryptocurrency-icons/svg/color/dai.svg"
import LINKIcon from "cryptocurrency-icons/svg/color/link.svg"

const paymentMethods = [
  {
    icon: BTCIcon,
    name: "Bitcoin (BTC)",
    path: "btc",
  },
  {
    icon: ETHIcon,
    name: "Ethereum (ETH)",
    path: "eth",
  },
  {
    icon: SOLIcon,
    name: "Solana (SOL)",
    path: "sol",
  },
  {
    icon: LTCIcon,
    name: "Litecoin (LTC)",
    path: "ltc",
  },
  {
    icon: [USDCIcon, USDTIcon, DAIIcon, LINKIcon],
    name: "ERC-20",
    subtitle: "(USDx, APE, and more)",
    path: "erc20",
  },
  {
    icon: "/payment/card.png",
    name: "Credit / Debit Card",
    path: "card",
  },
]

export default function PaymentPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#0b0d0e] text-white">
      <div className="max-w-md mx-auto p-4">
        {/* Close Button */}
        <div className="flex justify-end mb-4">
          <Link href="/" className="p-2">
            <X className="w-6 h-6" />
          </Link>
        </div>

        <div className="space-y-6">
          {/* Tabs - Updated to match design */}
          <div className="bg-[#1E2023] rounded-full p-1">
            <div className="flex">
              <button className="flex-1 bg-[#22262a] text-white py-2 px-4 rounded-full font-medium">
                DEPOSIT
              </button>
              <Link href="/payment/withdrawal" className="flex-1">
                <button className="w-full text-gray-400 py-2 px-4 rounded-full font-medium hover:text-white transition-colors">
                  WITHDRAW
                </button>
              </Link>
            </div>
          </div>

          <h1 className="text-2xl text-center">DEPOSIT OPTIONS</h1>

          {/* Payment Methods Grid */}
          <div className="grid grid-cols-2 gap-4">
            {paymentMethods.map((method) => (
              <Link key={method.path} href={`/payment/deposit?method=${method.path}`}>
                <PaymentMethodCard
                  icon={method.icon}
                  name={method.name}
                  subtitle={method.subtitle}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

