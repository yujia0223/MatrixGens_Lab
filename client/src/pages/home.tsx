import { HeroSection } from "@/components/hero-section";
import { WhyMatrixGenSection } from "@/components/why-matrixgen-section";
import { WhatMatrixGenSection } from "@/components/what-matrixgen-section";
import { SupportSection } from "@/components/support-section";
import { FooterCtaSection } from "@/components/footer-cta-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyMatrixGenSection />
      <WhatMatrixGenSection />
      <SupportSection />
      <FooterCtaSection />
    </main>
  );
}
