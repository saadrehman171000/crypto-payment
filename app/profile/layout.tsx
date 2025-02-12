import React from 'react';

interface ProfileLayoutProps {
  children: React.ReactNode
}

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0b0d0e] text-white">
      <div className="w-full max-w-[480px] mx-auto min-h-screen flex flex-col">
        {children}
      </div>
    </div>
  )
}
