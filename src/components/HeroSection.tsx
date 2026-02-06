import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-[85vh] flex items-center justify-center text-center px-6 pt-16 relative z-10">
      <div className="max-w-3xl reveal">
        <span className="inline-block tag-2026 text-primary px-4 py-1 rounded-r-full text-[9px] font-black tracking-[0.4em] mb-6 uppercase">
          ViniDigital Elite 2026
        </span>
        
        <h1 className="text-4xl md:text-6xl font-black mb-4 leading-[0.9] tracking-tighter uppercase italic text-foreground">
          VINIDIGITAL <br /> SEGURANÇA & <span className="text-primary">TECNOLOGIA</span> <br /> PRA VOCÊ.
        </h1>
        
        <p className="text-sm md:text-lg text-muted-foreground mb-10 max-w-xl mx-auto font-light">
          Consolidando excelência em CFTV, Elétrica e Automação. A segurança que o seu património exige, com a inovação de 2026.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5581988845760?text=Vim%20do%20seu%20site%20e%20quero%20contratar%20seus%20serviços!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="glow-pulse bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-3.5 rounded-xl font-black text-sm shadow-xl">
              FALAR COM VINÍCIUS
            </Button>
          </a>
          
          <a href="#servicos">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-foreground/5 border-foreground/10 text-foreground px-10 py-3.5 rounded-xl font-black text-sm backdrop-blur-md hover:bg-foreground/10"
            >
              VER SERVIÇOS
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;