import { useState, useCallback, useEffect } from "react";
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
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set());
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  ]);

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

  const handleVideoClick = (index: number) => {
    setLoadedVideos(prev => new Set(prev).add(index));
  };

  return (
    <div className="relative w-full h-full">
      <div className="overflow-hidden h-full rounded-2xl" ref={emblaRef}>
        <div className="flex h-full">
          {items.map((item, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0 h-full relative">
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              ) : loadedVideos.has(i) ? (
                <video
                  src={item.src}
                  controls
                  autoPlay
                  playsInline
                  preload="none"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div
                  className="absolute inset-0 w-full h-full bg-navy flex items-center justify-center cursor-pointer"
                  onClick={() => handleVideoClick(i)}
                >
                  <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center">
                    <svg className="w-8 h-8 text-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="absolute bottom-4 text-xs text-muted-foreground">{item.alt}</span>
                </div>
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