import { useState, useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import vinidigitalAbout from "@/assets/vinidigital-about-new.jpg";
import equipe1 from "@/assets/equipe-1.jpg";
import equipe2 from "@/assets/equipe-2.jpg";
import equipe3 from "@/assets/equipe-3.jpg";

type MediaItem = { type: "image" | "video"; src: string; alt: string };

const AboutSection = () => {
  const items: MediaItem[] = [
    { type: "video", src: "/videos/about-video-1.mp4", alt: "Vídeo institucional ViniDigital" },
    { type: "image", src: vinidigitalAbout, alt: "ViniDigital - Soluções em Elétrica, Alarmes, Câmeras e Automação" },
    { type: "image", src: equipe3, alt: "Equipe ViniDigital em obra" },
    { type: "video", src: "/videos/about-video-2.mp4", alt: "Vídeo equipe ViniDigital" },
    { type: "image", src: equipe1, alt: "Equipe ViniDigital em campo" },
    { type: "image", src: equipe2, alt: "Equipe ViniDigital - selfie profissional" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [wrapperHeight, setWrapperHeight] = useState<number | undefined>(undefined);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const updateHeight = useCallback(() => {
    const slide = slidesRef.current[selectedIndex];
    if (slide) {
      const media = slide.querySelector("img, video");
      if (media) {
        const h = (media as HTMLElement).offsetHeight || (media as HTMLElement).scrollHeight;
        if (h > 0) setWrapperHeight(h);
      }
    }
  }, [selectedIndex]);

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

  useEffect(() => {
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [updateHeight]);

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
        
        <div className="reveal">
          <div
            className="relative rounded-2xl overflow-hidden border-2 border-primary bg-transparent transition-[height] duration-300 ease-in-out"
            style={wrapperHeight ? { height: wrapperHeight } : undefined}
          >
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {items.map((item, i) => (
                  <div
                    key={i}
                    className="flex-[0_0_100%] min-w-0"
                    ref={(el) => { slidesRef.current[i] = el; }}
                  >
                    {item.type === "image" ? (
                      <img
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                        className="w-full aspect-[4/3] object-cover block"
                        onLoad={updateHeight}
                      />
                    ) : (
                      <video
                        src={item.src}
                        controls
                        playsInline
                        preload="metadata"
                        className="w-full aspect-[4/3] object-cover block will-change-transform"
                        onLoadedMetadata={updateHeight}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
            
            <button
              onClick={scrollPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/60 hover:bg-background/80 text-foreground rounded-full p-2 transition-colors"
              aria-label="Mídia anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/60 hover:bg-background/80 text-foreground rounded-full p-2 transition-colors"
              aria-label="Próxima mídia"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {items.map((_, i) => (
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
