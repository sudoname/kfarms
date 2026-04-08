import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SmoothScroll } from "@/components/smooth-scroll"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Khan Farms | Building the Future of Agriculture in Nigeria",
  description: "A modern Nigerian agro-industrial platform building long-term value through land, crops, livestock, processing, and carbon. Operating across 250 acres, scaling to 1,000 acres by 2030.",
  keywords: ["Khan Farms", "Nigeria agriculture", "palm oil farm", "sustainable farming", "carbon credit farm", "agro-industrial platform", "livestock farming"],
  authors: [{ name: "Khan Farms" }],
  openGraph: {
    title: "Khan Farms | Building the Future of Agriculture in Nigeria",
    description: "A modern Nigerian agro-industrial platform building long-term value through land, crops, livestock, processing, and carbon.",
    url: "https://kfarms.ng",
    siteName: "Khan Farms",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khan Farms | Building the Future of Agriculture in Nigeria",
    description: "A modern Nigerian agro-industrial platform building long-term value through land, crops, livestock, processing, and carbon.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <SmoothScroll>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
