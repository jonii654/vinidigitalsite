"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AboutSection() {
  const images = [
    {
      src: "/images/vinidigital-about-new.jpg",
      alt: "ViniDigital - Solucoes em Eletrica, Alarmes, Cameras e Automacao",
    },
    { src: "/images/equipe-1.jpg", alt: "Equipe ViniDigital em campo" },
    {
      src: "/images/equipe-2.jpg",
      alt: "Equipe ViniDigital - selfie profissional",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

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
            Nossa jornada no mundo da tecnologia comecou em{" "}
            <strong className="text-foreground">2018</strong>. Ao longo desses
            anos, atendemos centenas de clientes, sempre focando em resolver
            problemas com agilidade e transparencia.
          </p>

          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Hoje, a{" "}
            <strong className="text-foreground">ViniDigital</strong> e referencia
            em Abreu e Lima e regiao, oferecendo estabilidade tecnica em{" "}
            <strong className="text-foreground">
              Eletrica, Alarmes, Cameras, Automacao e muito mais
            </strong>
            . Confie em quem tem historia e segue avancando.
          </p>
        </div>

        <div className="reveal h-[450px]">
          <div className="relative rounded-2xl overflow-hidden border-2 border-primary/50 bg-navy h-full">
            <div className="overflow-hidden h-full" ref={emblaRef}>
              <div className="flex h-full">
                {images.map((img, i) => (
                  <div
                    key={i}
                    className="flex-[0_0_100%] min-w-0 h-full relative"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent pointer-events-none" />

            <button
              onClick={scrollPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/60 hover:bg-background/80 text-foreground rounded-full p-2 transition-colors"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/60 hover:bg-background/80 text-foreground rounded-full p-2 transition-colors"
              aria-label="Proxima foto"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === selectedIndex
                      ? "bg-primary w-6"
                      : "bg-foreground/40 hover:bg-foreground/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
