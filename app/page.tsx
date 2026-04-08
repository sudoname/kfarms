import { Hero } from "@/components/home/hero"
import { Stats } from "@/components/home/stats"
import { PlatformOverview } from "@/components/home/platform-overview"
import { CTA } from "@/components/home/cta"

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <PlatformOverview />
      <CTA />
    </>
  )
}
