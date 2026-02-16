const WorksSection = () => {
  const works = [
    { title: "Trabalho 01", subtitle: "Instalação Residencial", video: "/videos/trabalho-1.mp4" },
    { title: "Trabalho 02", subtitle: "Projeto Corporativo", video: "/videos/trabalho-2.mp4" },
    { title: "Trabalho 03", subtitle: "Automação de Elite", video: "/videos/trabalho-3.mp4" },
  ];

  return (
    <section id="trabalhos" className="py-24 relative z-10 bg-navy/20 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="mb-16 reveal text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic text-foreground">
            ViniDigital <span className="text-primary">em Ação.</span>
          </h2>
          <p className="text-muted-foreground text-xs mt-2 uppercase tracking-[0.3em]">
            Confira nossos projetos realizados
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {works.map((work, index) => (
            <div key={index} className="reveal group">
              <div className="w-full aspect-video rounded-2xl overflow-hidden border border-primary/20 bg-navy/60">
                <video
                  src={work.video}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-contain bg-black/50"
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
