"use client"

import { useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import Image from "next/image"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

// Country codes data
const countryCodes = [
  // Asia
  { code: "+91", flag: "in", name: "India" },
  { code: "+86", flag: "cn", name: "China" },
  { code: "+81", flag: "jp", name: "Japan" },
  { code: "+82", flag: "kr", name: "South Korea" },
  { code: "+65", flag: "sg", name: "Singapore" },
  { code: "+84", flag: "vn", name: "Vietnam" },
  { code: "+66", flag: "th", name: "Thailand" },
  { code: "+60", flag: "my", name: "Malaysia" },
  { code: "+62", flag: "id", name: "Indonesia" },
  { code: "+63", flag: "ph", name: "Philippines" },
  { code: "+880", flag: "bd", name: "Bangladesh" },
  { code: "+94", flag: "lk", name: "Sri Lanka" },
  { code: "+95", flag: "mm", name: "Myanmar" },
  { code: "+977", flag: "np", name: "Nepal" },
  { code: "+92", flag: "pk", name: "Pakistan" },
  
  // Middle East
  { code: "+971", flag: "ae", name: "UAE" },
  { code: "+966", flag: "sa", name: "Saudi Arabia" },
  { code: "+974", flag: "qa", name: "Qatar" },
  { code: "+973", flag: "bh", name: "Bahrain" },
  { code: "+968", flag: "om", name: "Oman" },
  
  // North America
  { code: "+1", flag: "us", name: "United States" },
  { code: "+1", flag: "ca", name: "Canada" },
  { code: "+52", flag: "mx", name: "Mexico" },
  
  // Europe
  { code: "+44", flag: "gb", name: "United Kingdom" },
  { code: "+49", flag: "de", name: "Germany" },
  { code: "+33", flag: "fr", name: "France" },
  { code: "+39", flag: "it", name: "Italy" },
  { code: "+34", flag: "es", name: "Spain" },
  { code: "+31", flag: "nl", name: "Netherlands" },
  { code: "+46", flag: "se", name: "Sweden" },
  { code: "+47", flag: "no", name: "Norway" },
  { code: "+45", flag: "dk", name: "Denmark" },
  { code: "+358", flag: "fi", name: "Finland" },
  { code: "+48", flag: "pl", name: "Poland" },
  
  // Oceania
  { code: "+61", flag: "au", name: "Australia" },
  { code: "+64", flag: "nz", name: "New Zealand" },
  
  // Africa
  { code: "+27", flag: "za", name: "South Africa" },
  { code: "+20", flag: "eg", name: "Egypt" },
  { code: "+234", flag: "ng", name: "Nigeria" },
  { code: "+254", flag: "ke", name: "Kenya" },
  { code: "+251", flag: "et", name: "Ethiopia" },
  
  // South America
  { code: "+55", flag: "br", name: "Brazil" },
  { code: "+54", flag: "ar", name: "Argentina" },
  { code: "+56", flag: "cl", name: "Chile" },
  { code: "+57", flag: "co", name: "Colombia" },
  { code: "+51", flag: "pe", name: "Peru" },
]

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<"PHONE" | "ACCOUNT NUMBER" | "E-MAIL">("ACCOUNT NUMBER")
  const [countryCode, setCountryCode] = useState("+91")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  const renderLoginForm = () => {
    switch (activeTab) {
      case "PHONE":
        return (
          <div className="space-y-2">
            <label className="block text-sm">Phone number</label>
            <div className="flex gap-2">
              <Select value={countryCode} onValueChange={setCountryCode}>
                <SelectTrigger className="w-[140px] bg-[#22262a] border-0">
                  <SelectValue>
                    <div className="flex items-center gap-2">
                      <Image
                        src={`https://flagcdn.com/w20/${countryCodes.find((c) => c.code === countryCode)?.flag}.png`}
                        alt="Country flag"
                        width={20}
                        height={15}
                      />
                      {countryCode}
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="bg-[#22262a] border-[#1fad66]">
                  {countryCodes.map((country) => (
                    <SelectItem key={country.code} value={country.code} className="text-white hover:bg-[#1fad66]/20">
                      <div className="flex items-center gap-2">
                        <Image
                          src={`https://flagcdn.com/w20/${country.flag}.png`}
                          alt={country.name}
                          width={20}
                          height={15}
                        />
                        {country.code} ({country.name})
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input type="tel" className="flex-1 bg-[#22262a] border-0 text-white" placeholder="Enter phone number" />
            </div>
          </div>
        )
      case "ACCOUNT NUMBER":
        return (
          <div className="space-y-2">
            <label className="block text-sm">Account number</label>
            <Input type="text" className="w-full bg-[#22262a] border-0 text-white" placeholder="Enter account number" />
          </div>
        )
      case "E-MAIL":
        return (
          <div className="space-y-2">
            <label className="block text-sm">Email address</label>
            <Input type="email" className="w-full bg-[#22262a] border-0 text-white" placeholder="Enter email address" />
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-[#0b0d0e] text-white p-4 sm:p-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button className="p-2">
            <X className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-medium ml-4">Log in</h1>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 sm:gap-8 mb-8 text-[#abb2ba] overflow-x-auto">
          {(["PHONE", "ACCOUNT NUMBER", "E-MAIL"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 whitespace-nowrap ${
                activeTab === tab ? "border-b-2 border-[#1fad66] text-white" : "border-b-2 border-transparent"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {renderLoginForm()}

          <div className="space-y-2">
            <label className="block text-sm">Password</label>
            <Input type="password" className="w-full bg-[#22262a] border-0 text-white" placeholder="Enter password" />
          </div>

          <div className="flex justify-end">
            <Link href="/forgot-password" className="text-sm text-[#abb2ba] hover:text-white transition-colors">
              Forgot your password?
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="save-password" className="border-[#1fad66] data-[state=checked]:bg-[#1fad66]" />
            <label htmlFor="save-password" className="text-sm">
              Save password
            </label>
          </div>

          <Button type="submit" className="w-full bg-[#1fad66] hover:bg-[#1fad66]/90 text-white h-12">
            LOG IN
          </Button>

          <div className="text-center">
            <Link href="/register" className="text-[#abb2ba] hover:text-white transition-colors">
              REGISTER
            </Link>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#abb2ba]">
          <span>Protected by reCAPTCHA</span>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms and Rules
          </Link>
        </div>
      </div>
    </div>
  )
}

