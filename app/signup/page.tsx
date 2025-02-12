"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    country: "India",
    currency: "INR",
    bonusCode: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-[#1C1C1E] text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-md mx-auto">
          {/* Header with close button */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-semibold">Sign Up</h1>
            <Link href="/">
              <X className="w-6 h-6 text-gray-400 hover:text-white" />
            </Link>
          </div>

          {/* Welcome Banner */}
          <div className="bg-[#6B2FB3] rounded-lg p-8 mb-6 h-[120px]"></div>

          {/* Sign Up Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="First name"
              className="bg-[#2A2A2E] border-none text-white placeholder:text-gray-500"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />

            <Input
              placeholder="Last name"
              className="bg-[#2A2A2E] border-none text-white placeholder:text-gray-500"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />

            {/* Phone Input with Country Code */}
            <div className="flex gap-2">
              <div className="flex items-center bg-[#2A2A2E] rounded-md px-3 w-[90px]">
                <Image
                  src="https://flagcdn.com/w20/in.png"
                  alt="India"
                  width={20}
                  height={15}
                  className="mr-1"
                />
                <span className="text-white">+91</span>
              </div>
              <Input
                placeholder="Phone number"
                type="tel"
                className="bg-[#2A2A2E] border-none text-white placeholder:text-gray-500 flex-1"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <Input
              placeholder="E-mail"
              type="email"
              className="bg-[#2A2A2E] border-none text-white placeholder:text-gray-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            <Input
              placeholder="Password"
              type="password"
              className="bg-[#2A2A2E] border-none text-white placeholder:text-gray-500"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />

            {/* Country Selection */}
            <div className="flex items-center bg-[#2A2A2E] rounded-md px-3 py-2">
              <Image
                src="https://flagcdn.com/w20/in.png"
                alt="India"
                width={20}
                height={15}
                className="mr-2"
              />
              <span className="text-white">India</span>
            </div>

            <Input
              placeholder="Currency"
              className="bg-[#2A2A2E] border-none text-white placeholder:text-gray-500"
              value={formData.currency}
              onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
            />

            <Input
              placeholder="Bonus code (if you have one)"
              className="bg-[#2A2A2E] border-none text-white placeholder:text-gray-500"
              value={formData.bonusCode}
              onChange={(e) => setFormData({ ...formData, bonusCode: e.target.value })}
            />

            <Button
              type="submit"
              className="w-full bg-[#28A745] hover:bg-[#218838] text-white py-6 text-lg"
            >
              SIGN UP
            </Button>

            <p className="text-gray-400 text-sm text-center mt-4">
              By clicking the "Sign up" button, you confirm that you are of legal age in your country of residence and agree to the Terms of LEON
            </p>

            <div className="flex items-center justify-between text-sm text-gray-400 mt-4">
              <span>Protected by reCAPTCHA</span>
              <Link href="#" className="hover:text-white">
                Terms and Rules
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}