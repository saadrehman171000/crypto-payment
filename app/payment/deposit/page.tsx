"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { X, ChevronLeft } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { PaymentMethodCard } from "../components/payment-method-card"

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

export default function DepositPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const method = searchParams.get("method")
  const [copied, setCopied] = useState(false)
  const depositAddress = "EXTEPrYKv8PL6fyAiF3..."

  const renderIcon = (icon: any) => {
    if (Array.isArray(icon)) {
      const IconComponent = icon[0]
      return <IconComponent className="w-full h-full" />
    }
    if (typeof icon === 'string') {
      return <img src={icon} alt="" className="w-full h-full" />
    }
    const IconComponent = icon
    return <IconComponent className="w-full h-full" />
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(depositAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (method) {
    const selectedMethod = paymentMethods.find((m) => m.path === method)
    if (!selectedMethod) return null

    return (
      <div className="min-h-screen bg-[#0b0d0e] text-white">
        <div className="max-w-md mx-auto p-4">
          {/* Close Button */}
          <div className="flex justify-end mb-4">
            <Link href="/payment" className="p-2">
              <X className="w-6 h-6" />
            </Link>
          </div>

          <div className="space-y-6">
            {/* Tabs */}
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

            {/* Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <Link href="/payment" className="p-2 -ml-2">
                  <ChevronLeft className="w-6 h-6" />
                </Link>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8">
                    {renderIcon(selectedMethod.icon)}
                  </div>
                  <span className="text-xl font-medium">DEPOSIT {selectedMethod?.name.split(' ')[0]}</span>
                </div>
              </div>
              <Link href="/transactions" className="text-[#1fad66] text-sm block ml-12">
                View Transactions
              </Link>
            </div>

            {/* Main Content */}
            <div className="bg-[#22262a] rounded-xl p-6 space-y-6">
              <p className="text-gray-400">
                Send the amount of {selectedMethod?.name.split(' ')[0]} of your choice to the following address to receive the equivalent in Coins.
              </p>

              {/* QR Code */}
              <div className="flex justify-center">
                <img src="/qr-placeholder.png" alt="QR Code" className="w-48 h-48" />
              </div>

              {/* Address Section */}
              <div className="space-y-2">
                <div className="text-sm text-gray-400">YOUR PERSONAL {selectedMethod?.name.split(' ')[0]} DEPOSIT ADDRESS</div>
                <div className="flex bg-[#1E2023] rounded-lg overflow-hidden">
                  <div className="flex-1 p-4 text-gray-300">{depositAddress}</div>
                  <button
                    onClick={copyToClipboard}
                    className="bg-[#1fad66] px-8 font-medium hover:bg-[#1fad66]/90 transition-colors"
                  >
                    {copied ? "COPIED!" : "COPY ADDRESS"}
                  </button>
                </div>
              </div>
            </div>

            {/* Conversion Box */}
            <div className="bg-[#22262a] rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 bg-[#1E2023] px-4 py-3 rounded-lg min-w-[120px]">
                  <img src="/crypto/usdc.png" alt="USDC" className="w-6 h-6" />
                  <span>$100</span>
                </div>
                <span className="text-xl">=</span>
                <div className="flex items-center gap-2 bg-[#1E2023] px-4 py-3 rounded-lg min-w-[120px]">
                  <div className="w-6 h-6">
                    {renderIcon(selectedMethod.icon)}
                  </div>
                  <span>0.0003234</span>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                The value of {selectedMethod?.name.split(' ')[0]} may change between now and the time we receive your payment
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

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
          {/* Tabs */}
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