import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SmoothScroll } from "@/components/smooth-scroll"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { OrganizationSchema } from "@/components/seo/organization-schema"
import { SessionProvider } from "@/components/session-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://kfarms.ng"),
  title: {
    default: "Khan Farms | Modern, Integrated Agriculture in Oyo & Osun States, Nigeria",
    template: "%s | Khan Farms",
  },
  description: "Khan Farms operates 850 acres across five farms in Oyo and Osun States, Nigeria — growing maize, cassava, cashew, oil palm and more. Buy farm produce or partner with us.",
  keywords: ["Khan Farms", "Oyo State agriculture", "Osun State agriculture", "buy farm produce Nigeria", "palm oil", "cassava", "maize", "cashew", "off-take agreement", "agricultural partnership Nigeria"],
  authors: [{ name: "Khan Farms" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Khan Farms | Modern, Integrated Agriculture in Oyo & Osun States, Nigeria",
    description: "850 acres across five farms in Oyo and Osun States. Buy farm produce or partner with us on processing, logistics, and land development.",
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
    title: "Khan Farms | Modern, Integrated Agriculture in Oyo & Osun States, Nigeria",
    description: "850 acres across five farms in Oyo and Osun States. Buy farm produce or partner with us.",
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
    <html lang="en">
      <body className={inter.className}>
        <OrganizationSchema />
        <SessionProvider>
          <SmoothScroll>
            <Navigation />
            <main>{children}</main>
            <Footer />
            <WhatsAppButton />
          </SmoothScroll>
        </SessionProvider>
      </body>
    </html>
  )
}
