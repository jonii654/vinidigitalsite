import vinidigitalAbout from "@/assets/vinidigital-about-new.jpg";

const AboutSection = () => {
  return (
    <section id="apresentacao" className="py-20 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <span className="text-primary font-black text-[10px] tracking-[0.3em] uppercase mb-4 block italic">
            Sobre a Empresa
          </span>
          
          <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight uppercase italic text-foreground">
            Quem <span className="text-primary text-5xl">somos?</span>
          </h2>
          
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Nossa jornada no mundo da tecnologia começou em <strong className="text-foreground">2018</strong>. Ao longo desses anos, atendemos centenas de clientes, sempre focando em resolver problemas com agilidade e transparência.
          </p>
          
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Hoje, a <strong className="text-foreground">ViniDigital</strong> é referência em Abreu e Lima e região, oferecendo estabilidade técnica em <strong className="text-foreground">Elétrica, Alarmes, Câmeras, Automação e muito mais</strong>. Confie em quem tem história e segue avançando.
          </p>
          
        </div>
        
        <div className="reveal h-[450px]">
          <div className="relative rounded-2xl overflow-hidden border-2 border-primary/50 bg-navy h-full">
            <img 
              src={vinidigitalAbout} 
              alt="ViniDigital - Soluções em Elétrica, Alarmes, Câmeras e Automação" 
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
