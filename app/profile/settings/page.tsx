"use client"

import { useState } from "react"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SettingsPage() {
  const [showEmail, setShowEmail] = useState(false)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/profile" className="p-2">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-medium">SETTINGS</h1>
      </div>

      {/* Change Email */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl">CHANGE EMAIL</h2>
          <Button
            variant="secondary"
            size="sm"
            className="bg-[#22262a] hover:bg-[#22262a]/80"
            onClick={() => setShowEmail(!showEmail)}
          >
            Show Current Email
          </Button>
        </div>
        <div className="space-y-2">
          <label className="block">
            NEW EMAIL <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-2">
            <Input type="email" className="flex-1 bg-[#22262a] border-0" />
            <Button className="bg-[#1fad66] hover:bg-[#1fad66]/90 whitespace-nowrap">CHANGE EMAIL</Button>
          </div>
        </div>
      </div>

      {/* Email Verification Status */}
      <div className="space-y-2">
        <h2 className="text-xl">VERIFY YOUR EMAIL</h2>
        <div className="flex items-center gap-2">
          <span>Status:</span>
          <span className="text-[#1fad66]">Verified</span>
        </div>
      </div>

      {/* Change Password */}
      <div className="space-y-4">
        <h2 className="text-xl">CHANGE PASSWORD</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block">
              OLD PASSWORD <span className="text-red-500">*</span>
            </label>
            <Input type="password" className="w-full bg-[#22262a] border-0" />
          </div>
          <div className="space-y-2">
            <label className="block">
              NEW PASSWORD <span className="text-red-500">*</span>
            </label>
            <Input type="password" className="w-full bg-[#22262a] border-0" />
          </div>
          <Button className="bg-[#1fad66] hover:bg-[#1fad66]/90">CHANGE PASSWORD</Button>
        </div>
      </div>

      {/* 2FA */}
      <div className="space-y-4">
        <h2 className="text-xl">TWO-FACTOR AUTHENTICATION</h2>
        <div className="space-y-4">
          <p className="text-[#abb2ba]">DISABLED</p>
          <p className="text-sm text-[#abb2ba]">
            Using two-factor authentication is highly recommended because it protects your account with both your
            password and your phone.
          </p>
          <p className="text-sm text-[#abb2ba]">While 2FA is enabled, you will not be able to login via Steam.</p>
          <Button className="bg-[#1fad66] hover:bg-[#1fad66]/90">ENABLE 2FA</Button>
        </div>
      </div>

      {/* KYC Verification */}
      <div className="space-y-4">
        <h2 className="text-xl">VERIFY YOUR IDENTITY (KYC)</h2>
        <Button className="bg-[#1fad66] hover:bg-[#1fad66]/90">VERIFY</Button>
      </div>

      {/* Login History */}
      <div className="space-y-4">
        <h2 className="text-xl">LOGIN HISTORY</h2>
        <Button variant="secondary" className="bg-[#22262a] hover:bg-[#22262a]/80">
          Show Login History
        </Button>
      </div>
    </div>
  )
}

