import type { Metadata } from "next"
import { Inter, Orbitron } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })
const orbitron = Orbitron({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "LEON - Sports Betting & Casino",
  description: "Sports betting, live casino, and slots",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-[#1C1C1E]`}>
        <ThemeProvider>
          <main className="min-h-screen antialiased">
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}