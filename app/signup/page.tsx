"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Header } from "@/components/layout/header";

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
    
  // ... add more countries as needed
];

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    countryCode: "+91",
    country: "India",
    currency: "INR",
    bonusCode: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-md mx-auto">
            {/* Header with close button */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-xl font-semibold">Sign Up</h1>
              <Link href="/" className="hover:bg-accent rounded-full p-2">
                <X className="w-6 h-6 text-muted-foreground hover:text-foreground" />
              </Link>
            </div>

            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-2">Welcome to LEON</h2>
              <p className="text-muted-foreground">Create your account and start winning today!</p>
            </div>

            {/* Sign Up Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="First name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />

              <Input
                placeholder="Last name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />

              {/* Phone Input with Country Code Selection */}
              <div className="flex gap-2">
                <Select 
                  value={formData.countryCode} 
                  onValueChange={(value) => setFormData({ ...formData, countryCode: value })}
                >
                  <SelectTrigger className="w-[140px]">
                    <SelectValue>
                      <div className="flex items-center gap-2">
                        <Image
                          src={`https://flagcdn.com/w20/${countryCodes.find(c => c.code === formData.countryCode)?.flag}.png`}
                          alt="Country flag"
                          width={20}
                          height={15}
                        />
                        {formData.countryCode}
                      </div>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {countryCodes.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
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
                  placeholder="Phone number"
                  type="tel"
                  className="flex-1"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <Input
                placeholder="E-mail"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <Input
                placeholder="Password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />

              {/* Country Selection */}
              <Select 
                value={formData.country} 
                onValueChange={(value) => {
                  const country = countryCodes.find(c => c.name === value);
                  setFormData({ 
                    ...formData, 
                    country: value,
                    countryCode: country?.code || formData.countryCode 
                  });
                }}
              >
                <SelectTrigger>
                  <SelectValue>
                    <div className="flex items-center gap-2">
                      <Image
                        src={`https://flagcdn.com/w20/${countryCodes.find(c => c.name === formData.country)?.flag}.png`}
                        alt={formData.country}
                        width={20}
                        height={15}
                      />
                      {formData.country}
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {countryCodes.map((country) => (
                    <SelectItem key={country.name} value={country.name}>
                      <div className="flex items-center gap-2">
                        <Image
                          src={`https://flagcdn.com/w20/${country.flag}.png`}
                          alt={country.name}
                          width={20}
                          height={15}
                        />
                        {country.name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Input
                placeholder="Currency"
                value={formData.currency}
                onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
              />

              <Input
                placeholder="Bonus code (if you have one)"
                value={formData.bonusCode}
                onChange={(e) => setFormData({ ...formData, bonusCode: e.target.value })}
              />

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg"
              >
                SIGN UP
              </Button>

              <p className="text-muted-foreground text-sm text-center mt-4">
                By clicking the "Sign up" button, you confirm that you are of legal age in your country of residence and agree to the Terms of LEON
              </p>

              <div className="flex items-center justify-between text-sm text-muted-foreground mt-4">
                <span>Protected by reCAPTCHA</span>
                <Link href="#" className="hover:text-foreground">
                  Terms and Rules
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}