import { useEffect, lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

// Lazy load sections below the fold
const ShowcaseBanner = lazy(() => import("@/components/ShowcaseBanner"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const WorksSection = lazy(() => import("@/components/WorksSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-x-hidden bg-transparent text-foreground">

      <Header />
      
      <main className="relative z-10">
        <HeroSection />
        <Suspense fallback={null}>
          <ShowcaseBanner />
          <AboutSection />
          <WorksSection />
          <ServicesSection />
          <ContactSection />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer className="relative z-10" />
      </Suspense>
    </div>
  );
};

export default Index;
