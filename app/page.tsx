"use client";

import { useEffect } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ShowcaseBanner from "@/components/showcase-banner";
import AboutSection from "@/components/about-section";
import WorksSection from "@/components/works-section";
import ServicesSection from "@/components/services-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-x-hidden bg-transparent text-foreground">
      <Header />

      <main className="relative z-10">
        <HeroSection />
        <ShowcaseBanner />
        <AboutSection />
        <WorksSection />
        <ServicesSection />
        <ContactSection />
      </main>

      <Footer className="relative z-10" />
      <WhatsAppButton />
    </div>
  );
}
