import type React from "react"
import { X } from "lucide-react"
import Link from "next/link"

interface PaymentLayoutProps {
  children: React.ReactNode
}

export default function PaymentLayout({ children }: PaymentLayoutProps) {
  return <>{children}</>
}

