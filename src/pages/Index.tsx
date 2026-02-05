import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorksSection from "@/components/WorksSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ParticlesCanvas from "@/components/ParticlesCanvas";

const Index = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.querySelectorAll('.p-circle').forEach((circle) => {
        const speed = parseFloat((circle as HTMLElement).dataset.speed || '0.15');
        (circle as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="overflow-x-hidden bg-background text-foreground">
      <ParticlesCanvas />
      
      {/* Video Overlay */}
      <div className="fixed inset-0 z-[-2] bg-[radial-gradient(circle,_rgba(0,29,69,0.4)_0%,_rgba(0,0,0,0.95)_100%)]" />
      
      {/* Parallax Background */}
      <div ref={parallaxRef} className="fixed inset-0 z-0 pointer-events-none">
        <div className="p-circle absolute w-[300px] h-[300px] top-[10%] left-[5%] rounded-full bg-gradient-to-br from-primary to-navy blur-[60px] opacity-10" data-speed="0.15" />
        <div className="p-circle absolute w-[400px] h-[400px] bottom-[10%] right-[5%] rounded-full bg-gradient-to-br from-primary to-navy blur-[60px] opacity-10" data-speed="0.25" />
      </div>

      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <WorksSection />
        <ServicesSection />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
