import Link from "next/link"
import { cn } from "@/lib/utils"
import type React from "react"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  active?: boolean
  className?: string
}

export function NavLink({ href, children, active, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "px-4 py-2 text-sm font-medium transition-colors hover:text-white",
        active ? "text-white" : "text-gray-400",
        className,
      )}
    >
      {children}
    </Link>
  )
}

