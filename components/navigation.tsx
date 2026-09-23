"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { FARM_LOCATIONS, METRICS } from "@/lib/farm-data"
import { UserMenu } from "@/components/auth/user-menu"

const locations = FARM_LOCATIONS.map((l) => ({
  name: l.displayName,
  href: `/locations/${l.slug}`,
  state: l.state,
}))

const navItems = [
  { name: "Our Farms", href: "#", hasDropdown: true },
  { name: "Produce", href: "/produce" },
  { name: "Sell to Us", href: "/sell" },
  { name: "Processing", href: "/processing" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Vision 2030", href: "/vision" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLocationsOpen, setIsLocationsOpen] = useState(false)
  const [isMobileLocationsOpen, setIsMobileLocationsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-cream/70 backdrop-blur-sm"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group" aria-label="Khan Farms home">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center font-bold text-white text-xl md:text-2xl">
              K
            </div>
            <span className="text-xl md:text-2xl font-bold text-foreground">
              Khan <span className="gradient-text">Farms</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-7">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setIsLocationsOpen(true)}
                  onMouseLeave={() => setIsLocationsOpen(false)}
                >
                  <button
                    className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200 relative group flex items-center space-x-1"
                    aria-expanded={isLocationsOpen}
                    aria-haspopup="true"
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={cn("w-4 h-4 transition-transform duration-200", isLocationsOpen && "rotate-180")}
                    />
                  </button>

                  <AnimatePresence>
                    {isLocationsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-60 glass rounded-xl overflow-hidden"
                      >
                        <div className="p-2">
                          <div className="px-3 py-2 text-xs font-semibold text-gold-700 uppercase tracking-wider">
                            {METRICS.locationsCount} Farms • {METRICS.totalAcreage} Acres
                          </div>
                          {locations.map((location) => (
                            <Link
                              key={location.name}
                              href={location.href}
                              className="block px-3 py-2.5 rounded-lg text-sm text-foreground/80 hover:text-foreground hover:bg-muted transition-colors duration-200"
                            >
                              <div className="font-medium">{location.name}</div>
                              <div className="text-xs text-muted-foreground">{location.state} State</div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )
            )}
            <Link href="/contact" className="btn-primary text-sm !px-5 !py-2.5">
              Buy or Partner
            </Link>
            <UserMenu />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-cream border-t border-border"
          >
            <div className="container-custom py-6 flex flex-col space-y-4">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.name}>
                    <button
                      className="w-full text-left text-base font-medium text-foreground/80 hover:text-foreground transition-colors duration-200 flex items-center justify-between"
                      onClick={() => setIsMobileLocationsOpen(!isMobileLocationsOpen)}
                      aria-expanded={isMobileLocationsOpen}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={cn("w-4 h-4 transition-transform duration-200", isMobileLocationsOpen && "rotate-180")}
                      />
                    </button>
                    <AnimatePresence>
                      {isMobileLocationsOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-2 ml-4 space-y-2"
                        >
                          <div className="text-xs font-semibold text-gold-700 uppercase tracking-wider mb-2">
                            {METRICS.locationsCount} Farms • {METRICS.totalAcreage} Acres
                          </div>
                          {locations.map((location) => (
                            <Link
                              key={location.name}
                              href={location.href}
                              className="block py-2 text-sm text-foreground/80 hover:text-foreground transition-colors duration-200"
                              onClick={() => {
                                setIsMobileMenuOpen(false)
                                setIsMobileLocationsOpen(false)
                              }}
                            >
                              <div className="font-medium">{location.name}</div>
                              <div className="text-xs text-muted-foreground">{location.state} State</div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <Link
                href="/contact"
                className="btn-primary text-sm text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Buy or Partner
              </Link>
              <div className="pt-4 border-t border-border" onClick={() => setIsMobileMenuOpen(false)}>
                <UserMenu variant="mobile" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
