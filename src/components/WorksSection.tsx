import { useState } from "react";

const WorksSection = () => {
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set());

  const works = [
    { title: "Trabalho 01", subtitle: "Instalação Residencial", video: "/videos/trabalho-1.mp4" },
    { title: "Trabalho 02", subtitle: "Projeto Corporativo", video: "/videos/trabalho-new.mp4" },
    { title: "Trabalho 03", subtitle: "Automação de Elite", video: "/videos/trabalho-3.mp4" },
  ];

  const handlePlay = (index: number) => {
    setLoadedVideos(prev => new Set(prev).add(index));
  };

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

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {works.map((work, index) => (
            <div key={index} className="reveal group">
              <div className="w-full aspect-video rounded-2xl overflow-hidden border border-primary/20 bg-navy/60">
                {loadedVideos.has(index) ? (
                  <video
                    src={work.video}
                    controls
                    autoPlay
                    playsInline
                    preload="auto"
                    className="w-full h-full object-contain bg-black/50"
                  />
                ) : (
                  <div
                    className="w-full h-full bg-navy/80 flex flex-col items-center justify-center cursor-pointer"
                    onClick={() => handlePlay(index)}
                  >
                    <div className="w-14 h-14 rounded-full bg-primary/80 flex items-center justify-center mb-3">
                      <svg className="w-7 h-7 text-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="text-[10px] font-bold uppercase text-muted-foreground">{work.subtitle}</span>
                  </div>
                )}
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