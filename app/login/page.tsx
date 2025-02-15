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
                <SelectTrigger className="w-[140px] bg-background border-input">
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
                <SelectContent>
                  {countryCodes.map((country) => (
                    <SelectItem 
                      key={country.code} 
                      value={country.code}
                    >
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
              <Input 
                type="tel" 
                className="flex-1" 
                placeholder="Enter phone number" 
              />
            </div>
          </div>
        )
      case "ACCOUNT NUMBER":
        return (
          <div className="space-y-2">
            <label className="block text-sm">Account number</label>
            <Input 
              type="text" 
              className="w-full" 
              placeholder="Enter account number" 
            />
          </div>
        )
      case "E-MAIL":
        return (
          <div className="space-y-2">
            <label className="block text-sm">Email address</label>
            <Input 
              type="email" 
              className="w-full" 
              placeholder="Enter email address" 
            />
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">


      <main className="pt-16">
        <div className="max-w-md mx-auto p-4 sm:p-6">
          {/* Header */}
          <div className="flex items-center mb-8">
            <Link href="/" className="p-2 hover:bg-accent rounded-full">
              <X className="w-6 h-6" />
            </Link>
            <h1 className="text-2xl font-medium ml-4">Log in</h1>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 sm:gap-8 mb-8 text-muted-foreground overflow-x-auto">
            {(["PHONE", "ACCOUNT NUMBER", "E-MAIL"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 whitespace-nowrap ${
                  activeTab === tab ? "border-b-2 border-primary text-foreground" : "border-b-2 border-transparent"
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
              <Input 
                type="password" 
                className="w-full bg-card border-input" 
                placeholder="Enter password" 
              />
            </div>

            <div className="flex justify-end">
              <Link 
                href="/forgot-password" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Forgot your password?
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox 
                id="save-password" 
                className="border-primary data-[state=checked]:bg-primary" 
              />
              <label htmlFor="save-password" className="text-sm">
                Save password
              </label>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12"
            >
              LOG IN
            </Button>

            <div className="text-center">
              <Link 
                href="/signup" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                REGISTER
              </Link>
            </div>
          </form>


        </div>
      </main>
    </div>
  )
}