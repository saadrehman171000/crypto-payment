"use client"

import { useState } from "react"
import Link from "next/link"
import { Copy, ChevronRight, User, Wallet, Coins, ArrowDownCircle, Settings, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

const menuItems = [
  { icon: User, label: "Profile", href: "/profile/edit" },
  { icon: Wallet, label: "Balances", href: "/profile/balances" },
  { icon: Coins, label: "Deposits", href: "/profile/deposits" },
  { icon: ArrowDownCircle, label: "Withdrawals", href: "/profile/withdrawals" },
  { icon: Settings, label: "Settings", href: "/profile/settings" },
]

export default function ProfilePage() {
  const [copied, setCopied] = useState(false)
  const userId = "12345678"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(userId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col min-h-screen p-6">
      {/* Logo and ID */}
      <div className="text-center space-y-6 mb-8">
        <h1 className="text-4xl font-bold tracking-wider">GAMBLIFY</h1>
        <div className="flex items-center justify-center gap-2 text-[15px]">
          <span>ID: {userId}</span>
          <button onClick={copyToClipboard} className="hover:text-[#1fad66] transition-colors p-1">
            <Copy className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1 space-y-3">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center justify-between p-4 bg-[#1E2023] rounded-lg hover:bg-[#1E2023]/80 transition-colors"
          >
            <div className="flex items-center gap-4">
              <item.icon className="w-6 h-6 text-white" />
              <span className="text-[15px]">{item.label}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </Link>
        ))}

        <button className="w-full flex items-center justify-between p-4 bg-[#1E2023] rounded-lg hover:bg-[#1E2023]/80 transition-colors">
          <div className="flex items-center gap-4">
            <LogOut className="w-6 h-6 text-white" />
            <span className="text-[15px]">Log Out</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {/* Close Button */}
      <div className="mt-8">
        <Button variant="secondary" className="w-full bg-[#1E2023] hover:bg-[#1E2023]/80 py-6 text-[15px]">
          Close
        </Button>
      </div>
    </div>
  )
}

