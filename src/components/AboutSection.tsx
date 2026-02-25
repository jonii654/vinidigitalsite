import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import vinidigitalAbout from "@/assets/vinidigital-about-new.jpg";
import equipe1 from "@/assets/equipe-1.jpg";
import equipe2 from "@/assets/equipe-2.jpg";

const AboutSection = () => {
  const images = [
    { src: vinidigitalAbout, alt: "ViniDigital - Soluções em Elétrica, Alarmes, Câmeras e Automação" },
    { src: equipe1, alt: "Equipe ViniDigital em campo" },
    { src: equipe2, alt: "Equipe ViniDigital - selfie profissional" },
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
    return () => { emblaApi.off("select", onSelect); };
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
            Nossa jornada no mundo da tecnologia começou em <strong className="text-foreground">2018</strong>. Ao longo desses anos, atendemos centenas de clientes, sempre focando em resolver problemas com agilidade e transparência.
          </p>
          
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Hoje, a <strong className="text-foreground">ViniDigital</strong> é referência em Abreu e Lima e região, oferecendo estabilidade técnica em <strong className="text-foreground">Elétrica, Alarmes, Câmeras, Automação e muito mais</strong>. Confie em quem tem história e segue avançando.
          </p>
        </div>
        
        <div className="reveal h-[450px]">
          <div className="relative rounded-2xl overflow-hidden border-2 border-primary/50 bg-navy h-full">
            <div className="overflow-hidden h-full" ref={emblaRef}>
              <div className="flex h-full">
                {images.map((img, i) => (
                  <div key={i} className="flex-[0_0_100%] min-w-0 h-full relative">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent pointer-events-none" />
            
            {/* Arrow buttons */}
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
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === selectedIndex ? "bg-primary w-6" : "bg-foreground/40 hover:bg-foreground/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
