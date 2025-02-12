"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1C1C1E] text-white mt-16 pb-8">
      {/* Casino Description */}
      <div className="container mx-auto px-4">
        <div className="bg-[#2A2A2E] rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-3">
            Play Live Casino Games Online at LEON India
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            At Leon India we know what you&apos;re after in a live casino online platform and we&apos;re excited to share every detail of our live dealer casino selection; making sure you make the most out of your experience and enjoy the best live casino India has to offer. We&apos;re also making it extra fun for you with our fantastic
          </p>
          <Button variant="link" className="text-gray-400 hover:text-white p-0">
            SHOW MORE
          </Button>
        </div>

        {/* Footer Links */}
        <div className="text-center space-y-6">
          {/* Primary Links */}
          <div className="flex justify-center space-x-6 text-sm">
            <Link href="#" className="text-gray-400 hover:text-white">Promotions</Link>
            <Link href="#" className="text-gray-400 hover:text-white">VIP</Link>
            <Link href="#" className="text-gray-400 hover:text-white">Terms of use</Link>
            <Link href="#" className="text-gray-400 hover:text-white">Rules</Link>
          </div>

          {/* Secondary Links */}
          <div className="flex justify-center space-x-6 text-sm">
            <Link href="#" className="text-gray-400 hover:text-white">Responsible gambling</Link>
            <Link href="#" className="text-gray-400 hover:text-white">About us</Link>
            <Link href="#" className="text-gray-400 hover:text-white">Affiliates</Link>
          </div>

          {/* Sports Tips Link */}
          <div>
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Sports tips & forecasts
            </Link>
          </div>

          {/* Odds Format Button */}
          <div>
            <Button
              variant="outline"
              className="bg-[#2A2A2E] text-gray-400 hover:text-white border-gray-700 text-sm"
            >
              Odds format
            </Button>
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            © Sultan, 2008-2025
          </div>
        </div>
      </div>
    </footer>
  );
}