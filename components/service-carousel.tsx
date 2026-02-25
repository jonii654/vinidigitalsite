"use client";

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

export default function ServiceCarousel({ items }: ServiceCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
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
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

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
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              ) : (
                <video
                  src={item.src}
                  controls
                  playsInline
                  preload="auto"
                  className="absolute inset-0 w-full h-full object-contain"
                  style={{
                    transform: "translateZ(0)",
                    WebkitBackfaceVisibility: "hidden",
                  }}
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
}
