import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ShowcaseBanner from "@/components/ShowcaseBanner";
import AboutSection from "@/components/AboutSection";
import WorksSection from "@/components/WorksSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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
        <ShowcaseBanner />
        <AboutSection />
        <WorksSection />
        <ServicesSection />
        <ContactSection />
      </main>

      <Footer className="relative z-10" />
    </div>
  );
};

export default Index;
