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
    <div className="overflow-x-hidden bg-background text-foreground">
      {/* Background Video - always visible, no fade */}
      <div className="fixed inset-0 z-[1] overflow-hidden bg-background">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/video-poster.jpg"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-60"
          style={{ willChange: 'auto' }}
        >
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Video Overlay */}
      <div className="fixed inset-0 z-[2] bg-[radial-gradient(circle,_rgba(0,29,69,0.2)_0%,_rgba(0,0,0,0.75)_100%)]" />

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
