import Link from "next/link"
import { Leaf, Mail, MapPin, MessageCircle } from "lucide-react"

const footerSections = [
  {
    title: "Platform",
    links: [
      { name: "Agriculture", href: "/platform#agriculture" },
      { name: "Palm Oil", href: "/platform#palm" },
      { name: "Livestock", href: "/platform#livestock" },
      { name: "Processing", href: "/platform#processing" },
      { name: "Carbon Credits", href: "/platform#carbon" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Vision 2030", href: "/vision" },
      { name: "Sustainability", href: "/sustainability" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Locations",
    links: [
      { name: "Ikoyi, Osun State", href: "#" },
      { name: "Otu, Oyo State", href: "#" },
      { name: "Ilero Processing Hub", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-black/50 border-t border-white/10">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-gold-600 flex items-center justify-center font-bold text-black text-xl">
                K
              </div>
              <span className="text-2xl font-bold">
                Khan <span className="gradient-text">Farms</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Building a modern Nigerian agro-industrial platform through land, crops, livestock, processing, and sustainable carbon pathways.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
              <MapPin size={16} className="text-gold" />
              <span>Ikoyi, Otu, Ilero - Nigeria</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
              <Mail size={16} className="text-gold" />
              <a href="mailto:info@khan.ng" className="hover:text-white transition-colors">
                info@khan.ng
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MessageCircle size={16} className="text-gold" />
              <a href="https://wa.me/2348168166109" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                +234 816 816 6109
              </a>
            </div>
          </div>

          {/* Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Khan Farms. A subsidiary of Khan Innovations Nigeria Limited.
          </p>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
