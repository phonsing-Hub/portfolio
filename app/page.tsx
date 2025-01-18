"use client";
import { useEffect } from "react";
import AOS from "aos";

import HeaderSection from "@/components/app/header-section";
import FeaturesListSection from "@/components/app/features-list-section";
import AboutSection from "@/components/app/about-section";
import CtaSection from "@/components/app/cta-section";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <HeaderSection />
      <AboutSection />
      <FeaturesListSection />
      <CtaSection />
    </>
  );
}
