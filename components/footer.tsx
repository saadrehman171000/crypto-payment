import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GB } from "country-flag-icons/react/3x2"

const footerLinks = {
  info: [
    { label: "Promotions", href: "#" },
    { label: "VIP", href: "#" },
    { label: "Terms of use", href: "#" },
    { label: "Rules", href: "#" },
    { label: "Casino rules", href: "#" },
    { label: "Responsible gambling", href: "#" },
  ],
  getStarted: [
    { label: "Start winning", href: "#" },
    { label: "How to deposit", href: "#" },
    { label: "How to withdraw", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--footer-bg))] text-[hsl(var(--footer-fg))] mt-12 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-medium mb-4">Info</h3>
            <ul className="space-y-2">
              {footerLinks.info.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Get started</h3>
            <ul className="space-y-2">
              {footerLinks.getStarted.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Leon</h3>
            <div className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm">Download our mobile app</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Image src="/payment-logos/visa.png" alt="Visa" width={60} height={30} />
          <Image src="/payment-logos/mastercard.png" alt="Mastercard" width={60} height={30} />
          <Image src="/payment-logos/awards.png" alt="Awards" width={60} height={30} />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button variant="ghost" size="sm" className="text-gray-400">
            <GB className="h-4 w-4 mr-2" />
            EN
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-400">
            Odds format
          </Button>
        </div>

        <div className="text-center text-gray-400 text-sm">
          <p className="mb-2">© Leon, 2008-2025</p>
          <p className="max-w-3xl mx-auto">
            Moonlite N.V., Reg. No.140186, address: Schout Bij Nacht Doormanweg 40, Willemstad, Curacao; Covimal
            Limited, Reg. No. HE424890, address: Vasili Michailidi 9, 3026, Limassol, Cyprus, the latter is the payment
            agent for Moonlite N.V.
          </p>
        </div>
      </div>
    </footer>
  )
}

