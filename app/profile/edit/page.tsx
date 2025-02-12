"use client"

import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ProfileEditPage() {
  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/profile" className="p-2 -ml-2">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl tracking-wide">PROFILE</h1>
      </div>

      {/* Change Username Form */}
      <div className="space-y-6">
        <h2 className="text-xl tracking-wide">CHANGE USERNAME</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-[15px]">
              NEW USERNAME <span className="text-red-500">*</span>
            </label>
            <Input type="text" placeholder="gamblify" className="w-full bg-[#1E2023] border-0 h-12" />
          </div>
          <Button className="w-full bg-[#1fad66] hover:bg-[#1fad66]/90 py-6 text-[15px]">CHANGE USERNAME</Button>
        </div>
      </div>
    </div>
  )
}

