const AboutSection = () => {
  return (
    <section id="apresentacao" className="py-20 relative z-10">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <span className="text-primary font-black text-[10px] tracking-[0.3em] uppercase mb-4 block italic">
            Fundador & Especialista
          </span>
          
          <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight uppercase italic text-foreground">
            Quem é <br />
            <span className="text-primary text-5xl">Vinícius?</span>
          </h2>
          
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Minha jornada no mundo da tecnologia começou em <strong className="text-foreground">2018</strong>. Ao longo desses anos, atendi centenas de clientes, sempre focando em resolver problemas com agilidade e transparência.
          </p>
          
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Hoje, a <strong className="text-foreground">ViniDigital</strong> é referência em Abreu e Lima e região, oferecendo estabilidade técnica em <strong className="text-foreground">Elétrica, Alarmes, Câmeras e Automação</strong>. Confie em quem tem história e segue avançando.
          </p>
          
          <div className="flex gap-8">
            <div>
              <div className="text-3xl font-black text-foreground italic">DESDE</div>
              <div className="text-primary font-bold text-[8px] uppercase tracking-widest">2018 no Setor</div>
            </div>
            <div className="w-[1px] h-10 bg-foreground/10" />
            <div>
              <div className="text-3xl font-black text-foreground italic">REALI</div>
              <div className="text-primary font-bold text-[8px] uppercase tracking-widest">Compromisso</div>
            </div>
          </div>
        </div>
        
        <div className="reveal h-[450px]">
          <div className="relative rounded-2xl overflow-hidden border-2 border-primary/50 bg-navy h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-navy flex items-center justify-center">
              <span className="text-6xl font-black text-foreground/20 italic">V</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-foreground font-black text-xl italic uppercase tracking-tighter">
                Vinícius: Especialista Responsável
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;