import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectCarouselProps {
  images: string[];
  alt?: string;
  alts?: string[];
  interval?: number;
  fit?: "cover" | "contain";
}

export default function ProjectCarousel({
  images,
  alt = "Project screenshot",
  alts,
  interval = 5000,
  fit = "cover",
}: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  const previous = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (images.length <= 1 || isPaused) return;

    const timer = setInterval(next, interval);

    return () => clearInterval(timer);
  }, [images.length, interval, isPaused]);

  if (!images.length) return null;

  return (
    <div
      className="group relative h-full w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Images */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={alts?.[index] ?? `${alt} ${index + 1}`}
            className={`absolute inset-0 h-full w-full transition-all duration-700 ease-out ${fit === "cover" ? "object-cover" : "object-contain"} ${
              index === activeIndex ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"
            } `}
          />
        ))}
      </div>

      {/* Subtle overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

      {images.length > 1 && (
        <>
          {/* Previous */}
          <button
            type="button"
            onClick={previous}
            aria-label="Previous image"
            className="absolute top-1/2 left-4 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 hover:bg-black/50"
          >
            <ChevronLeft size={18} strokeWidth={2} />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="absolute top-1/2 right-4 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 hover:bg-black/50"
          >
            <ChevronRight size={18} strokeWidth={2} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/20 bg-black/25 px-3 py-2 backdrop-blur-md">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to image ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
                } `}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
