import { Hero } from "@/components/home/hero"
import { Stats } from "@/components/home/stats"
import {
  WhatWeProduce,
  OurFarms,
  ProcessingInfrastructure,
  AvailableProduce,
  HowWeWork,
  VisionPreview,
  SustainabilityPreview,
  Partnerships,
  ContactCta,
} from "@/components/home/home-sections"

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <WhatWeProduce />
      <OurFarms />
      <ProcessingInfrastructure />
      <AvailableProduce />
      <HowWeWork />
      <VisionPreview />
      <SustainabilityPreview />
      <Partnerships />
      <ContactCta />
    </>
  )
}
