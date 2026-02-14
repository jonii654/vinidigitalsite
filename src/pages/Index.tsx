import { useEffect, useRef } from "react";
import { useState, useCallback } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ShowcaseBanner from "@/components/ShowcaseBanner";
import AboutSection from "@/components/AboutSection";
import WorksSection from "@/components/WorksSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ParticlesCanvas from "@/components/ParticlesCanvas";

const Index = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [portalActive, setPortalActive] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const triggerPortal = useCallback(() => {
    if (portalActive) return;
    setPortalActive(true);
    const whatsappUrl = "https://wa.me/5581988845760?text=Vim%20do%20seu%20site%20e%20quero%20contratar%20seus%20serviços!";
    
    setTimeout(() => {
      setPortalActive(false);
      window.open(whatsappUrl, '_blank');
    }, 800);
  }, [portalActive]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.querySelectorAll('.p-circle').forEach((circle) => {
        const speed = parseFloat((circle as HTMLElement).dataset.speed || '0.15');
        (circle as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`;
      });
      
      // Parallax effect for sections
      document.querySelectorAll('.parallax-section').forEach((section) => {
        const rect = (section as HTMLElement).getBoundingClientRect();
        const speed = parseFloat((section as HTMLElement).dataset.speed || '0.05');
        const offset = rect.top * speed;
        (section as HTMLElement).style.transform = `translateY(${offset}px)`;
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => observer.observe(el));
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`overflow-x-hidden bg-background text-foreground ${portalActive ? 'portal-active' : ''}`}>
      {/* Portal Overlay */}
      <div className={`fixed inset-0 z-[999] pointer-events-none transition-all duration-700 ${portalActive ? 'opacity-100 scale-[3] backdrop-blur-[20px] bg-primary/30' : 'opacity-0 scale-75 backdrop-blur-0 bg-primary/10'}`} />
      
      {/* Background Video */}
      <div className="fixed inset-0 z-[1] overflow-hidden bg-background">
        <video
          autoPlay
          muted
          loop
          playsInline
          onCanPlayThrough={() => setVideoLoaded(true)}
          className={`absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-70' : 'opacity-0'}`}
        >
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Video Overlay */}
      <div className="fixed inset-0 z-[2] bg-[radial-gradient(circle,_rgba(0,29,69,0.2)_0%,_rgba(0,0,0,0.75)_100%)]" />
      
      {/* Particles */}
      <ParticlesCanvas />
      
      {/* Parallax Background */}
      <div ref={parallaxRef} className="fixed inset-0 z-[4] pointer-events-none">
        <div className="p-circle absolute w-[300px] h-[300px] top-[10%] left-[5%] rounded-full bg-gradient-to-br from-primary to-navy blur-[60px] opacity-10" data-speed="0.15" />
        <div className="p-circle absolute w-[400px] h-[400px] bottom-[10%] right-[5%] rounded-full bg-gradient-to-br from-primary to-navy blur-[60px] opacity-10" data-speed="0.25" />
      </div>

      <Header />
      
      <main className={`transition-all duration-700 ${portalActive ? 'blur-[10px] scale-110' : ''}`}>
        <HeroSection />
        <ShowcaseBanner />
        <AboutSection />
        <WorksSection />
        <ServicesSection />
        <ContactSection onPortalClick={triggerPortal} />
      </main>

      <Footer className={`transition-all duration-700 ${portalActive ? 'blur-[10px] scale-110' : ''}`} />
      {/* WhatsApp button removed */}
    </div>
  );
};

export default Index;
