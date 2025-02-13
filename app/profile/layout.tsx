import React from 'react';
import { Header } from "@/components/layout/header"

interface ProfileLayoutProps {
  children: React.ReactNode
}

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <>
      <Header />
      <main className="pt-16">
        <div className="min-h-screen bg-[#0b0d0e] text-white">
          <div className="w-full max-w-[480px] mx-auto min-h-screen flex flex-col">
            {children}
          </div>
        </div>
      </main>
    </>
  )
}
