import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GB } from "country-flag-icons/react/3x2"
import { Facebook, Twitter, Instagram, Youtube, ChevronRight, Phone, Mail, Download } from 'lucide-react'

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
  support: [
    { label: "24/7 Live Chat", href: "#", icon: Phone },
    { label: "support@leon.bet", href: "#", icon: Mail },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Youtube, href: "#" },
]

const paymentMethods = [
  { 
    name: "Visa", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png"
  },
  { 
    name: "Mastercard", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png"
  },
  { 
    name: "Awards", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/200px-Twitter_Verified_Badge.svg.png" // Using verified badge as placeholder for awards
  },
]

export function Footer() {
  return (
    <footer className="bg-background border-t text-foreground mt-12 dark:bg-[#1a1b1e] dark:text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Info Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Info</h3>
            <ul className="space-y-3">
              {footerLinks.info.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors flex items-center group dark:text-gray-400 dark:hover:text-white"
                  >
                    <ChevronRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Started Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get started</h3>
            <ul className="space-y-3">
              {footerLinks.getStarted.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors flex items-center group dark:text-gray-400 dark:hover:text-white"
                  >
                    <ChevronRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors flex items-center gap-2 group dark:text-gray-400 dark:hover:text-white"
                  >
                    <link.icon className="h-4 w-4 group-hover:text-primary transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile App Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Leon Mobile</h3>
            <div className="bg-card hover:bg-accent rounded-lg p-4 transition-colors cursor-pointer group dark:bg-[#2a2b2f] dark:hover:bg-[#32333a]">
              <div className="flex items-center gap-3 mb-3">
                <Download className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Download our mobile app</span>
              </div>
              <p className="text-xs text-muted-foreground dark:text-gray-400">
                Get the best betting experience on your mobile device
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          {socialLinks.map((social) => (
            <a
              key={social.icon.name}
              href={social.href}
              className="bg-card hover:bg-primary p-2 rounded-full transition-colors group dark:bg-[#2a2b2f]"
            >
              <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-background transition-colors dark:text-gray-400 dark:group-hover:text-white" />
            </a>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="flex flex-wrap gap-6 justify-center items-center mb-12 bg-card py-6 px-4 rounded-lg dark:bg-[#2a2b2f]">
          {paymentMethods.map((method) => (
            <div key={method.name} className="relative h-8 w-16">
              <Image
                src={method.image || "/placeholder.svg"}
                alt={method.name}
                fill
                className="object-contain hover:opacity-80 transition-opacity"
              />
            </div>
          ))}
        </div>

        {/* Language and Odds Format */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-card hover:bg-accent text-muted-foreground dark:bg-[#2a2b2f] dark:text-gray-400 dark:hover:bg-[#32333a] border-0"
          >
            <GB className="h-4 w-4 mr-2" />
            EN
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-card hover:bg-accent text-muted-foreground dark:bg-[#2a2b2f] dark:text-gray-400 dark:hover:bg-[#32333a] border-0"
          >
            Odds format
          </Button>
        </div>

        {/* Copyright and Legal */}
        <div className="text-center space-y-4">
          <p className="text-muted-foreground dark:text-gray-400 text-sm">© Leon, 2008-2025</p>
          <p className="max-w-3xl mx-auto text-xs text-muted-foreground/80 dark:text-gray-500 leading-relaxed">
            Moonlite N.V., Reg. No.140186, address: Schout Bij Nacht Doormanweg 40, Willemstad, Curacao; Covimal
            Limited, Reg. No. HE424890, address: Vasili Michailidi 9, 3026, Limassol, Cyprus, the latter is the payment
            agent for Moonlite N.V.
          </p>
        </div>
      </div>
    </footer>
  )
}