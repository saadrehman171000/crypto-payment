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

export default function WithdrawalPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const method = searchParams.get("method")
  const [withdrawalAddress, setWithdrawalAddress] = useState("")
  const [amount, setAmount] = useState("")

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
                <Link href="/payment" className="flex-1">
                  <button className="w-full text-gray-400 py-2 px-4 rounded-full font-medium hover:text-white transition-colors">
                    DEPOSIT
                  </button>
                </Link>
                <button className="flex-1 bg-[#22262a] text-white py-2 px-4 rounded-full font-medium">
                  WITHDRAW
                </button>
              </div>
            </div>

            {/* Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <Link href="/payment/withdrawal" className="p-2 -ml-2">
                  <ChevronLeft className="w-6 h-6" />
                </Link>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8">
                    {renderIcon(selectedMethod.icon)}
                  </div>
                  <span className="text-xl font-medium">WITHDRAW {selectedMethod?.name.split(' ')[0]}</span>
                </div>
              </div>
              <Link href="/transactions" className="text-[#1fad66] text-sm block ml-12">
                View Transactions
              </Link>
            </div>

            {/* Main Content */}
            <div className="bg-[#22262a] rounded-xl p-6 space-y-6">
              <p className="text-gray-400">
                Please enter the {selectedMethod?.name.split(' ')[0]} wallet address you wish to receive the funds on. 
                Once confirmed, the withdrawal is usually processed within a few minutes.
              </p>

              {/* Address Input */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400">
                  RECEIVING {selectedMethod?.name.split(' ')[0]} ADDRESS <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={withdrawalAddress}
                  onChange={(e) => setWithdrawalAddress(e.target.value)}
                  className="w-full bg-[#1E2023] rounded-lg p-4 text-gray-300"
                  placeholder="Enter address"
                />
              </div>

              {/* Amount Input */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400">
                  WITHDRAWAL AMOUNT <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex-1 flex items-center gap-2 bg-[#1E2023] px-4 py-3 rounded-lg">
                    <img src="/crypto/usdc.png" alt="USDC" className="w-6 h-6" />
                    <input
                      type="text"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="bg-transparent w-full outline-none"
                      placeholder="0.00"
                    />
                  </div>
                  <span className="text-xl">=</span>
                  <div className="flex-1 flex items-center gap-2 bg-[#1E2023] px-4 py-3 rounded-lg">
                    <div className="w-6 h-6">
                      {renderIcon(selectedMethod.icon)}
                    </div>
                    <span>0.0003234</span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-[#1fad66] hover:bg-[#1fad66]/90 text-white py-4 rounded-lg font-medium mt-4">
                REQUEST WITHDRAWAL
              </button>

              {/* Network Fee */}
              <div className="text-sm text-gray-400">
                <div>Network Fee: $1.13</div>
                <div className="mt-4">
                  *You will receive the specified {selectedMethod?.name.split(' ')[0]} amount to your withdrawal address
                </div>
                <div className="mt-2">
                  *The value subtracted from your balance may vary between now and the time we process your withdrawal
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Return the grid view when no method is selected
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
              <Link href="/payment" className="flex-1">
                <button className="w-full text-gray-400 py-2 px-4 rounded-full font-medium hover:text-white transition-colors">
                  DEPOSIT
                </button>
              </Link>
              <button className="flex-1 bg-[#22262a] text-white py-2 px-4 rounded-full font-medium">
                WITHDRAW
              </button>
            </div>
          </div>

          <h1 className="text-2xl text-center">WITHDRAWAL OPTIONS</h1>

          {/* Payment Methods Grid */}
          <div className="grid grid-cols-2 gap-4">
            {paymentMethods.map((method) => (
              <PaymentMethodCard
                key={method.path}
                icon={method.icon}
                name={method.name}
                subtitle={method.subtitle}
                onClick={() => router.push(`/payment/withdrawal?method=${method.path}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 