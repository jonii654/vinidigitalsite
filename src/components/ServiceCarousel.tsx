import { useState, useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type MediaItem = {
  type: "image" | "video";
  src: string;
  alt: string;
};

interface ServiceCarouselProps {
  items: MediaItem[];
}

const ServiceCarousel = ({ items }: ServiceCarouselProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [wrapperHeight, setWrapperHeight] = useState<number | undefined>(undefined);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  ]);

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
    <div
      className="relative w-full overflow-hidden rounded-2xl transition-[height] duration-300 ease-in-out"
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
                  className="w-full h-auto block"
                  onLoad={updateHeight}
                />
              ) : (
                <video
                  src={item.src}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-auto block will-change-transform"
                  onLoadedMetadata={updateHeight}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      {items.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {items.map((_, i) => (
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
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent pointer-events-none rounded-2xl" />
    </div>
  );
};

export default ServiceCarousel;
