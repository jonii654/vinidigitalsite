const WorksSection = () => {

  const works = [
    { title: "Trabalho 01", subtitle: "Instalação Residencial", video: "/videos/trabalho-action-1.mp4", orientation: "vertical" as const },
    { title: "Trabalho 02", subtitle: "Projeto Corporativo", video: "/videos/trabalho-new.mp4", orientation: "vertical" as const },
    { title: "Trabalho 03", subtitle: "Automação de Elite", video: "/videos/trabalho-action-3.mp4", orientation: "vertical" as const },
  ];


  return (
    <section id="trabalhos" className="py-24 relative z-10 bg-navy/20">
      <div className="container mx-auto px-6">
        <div className="mb-16 reveal text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic text-foreground">
            ViniDigital <span className="text-primary">em Ação.</span>
          </h2>
          <p className="text-muted-foreground text-xs mt-2 uppercase tracking-[0.3em]">
            Confira nossos projetos realizados
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
          {works.map((work, index) => (
            <div key={index} className="reveal group">
              <div className="w-full rounded-2xl overflow-hidden border border-primary/20 bg-navy/60">
                <video
                  src={work.video}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full will-change-transform"
                />
              </div>
              <p className="text-center mt-4 text-[10px] font-bold uppercase text-muted-foreground">
                {work.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;