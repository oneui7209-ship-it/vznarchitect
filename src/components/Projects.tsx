import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

export const items = [
  { img: p1, title: "Veera Residence", cat: "Residential", loc: "Jhajjar, HR", h: "tall", alt: "Veera Residence — luxury residential house design by VZN Architect in Jhajjar, Haryana" },
  { img: p2, title: "Onyx Living Room", cat: "Interior", loc: "Gurugram", h: "short", alt: "Onyx Living Room — premium interior design project by VZN Architect in Gurugram" },
  { img: p3, title: "Meridian Tower", cat: "Commercial", loc: "Delhi NCR", h: "tall", alt: "Meridian Tower — modern commercial building design by VZN Architect in Delhi NCR" },
  { img: p4, title: "Lagoon Villa", cat: "3D Renders", loc: "Concept", h: "short", alt: "Lagoon Villa — photorealistic 3D elevation render and villa design by VZN Architect" },
  { img: p5, title: "Noir Suite", cat: "Interior", loc: "Jhajjar", h: "tall", alt: "Noir Suite — luxury interior design suite by VZN Architect in Jhajjar" },
  { img: p6, title: "Atelier Plans", cat: "Residential", loc: "In Studio", h: "short", alt: "Atelier Plans — residential house planning and architectural blueprints by VZN Architect" },
];

export const cats = ["All", "Residential", "Commercial", "Interior", "3D Renders"];

interface ProjectsProps {
  limit?: number;
  showAllButton?: boolean;
}

export function Projects({ limit, showAllButton = false }: ProjectsProps) {
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState<number | null>(null);

  const [scrollIndex, setScrollIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Check viewport width for responsive checks
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Filter items and then limit if specified
  const filteredItems = items.filter((i) => active === "All" || i.cat === active);
  const visible = limit ? filteredItems.slice(0, limit) : filteredItems;

  // Autoplay scrolling every 2 seconds on mobile (only for homepage limit context)
  useEffect(() => {
    if (!isMobile || !limit || visible.length === 0) return;

    const timer = setInterval(() => {
      if (scrollRef.current) {
        const nextIndex = (scrollIndex + 1) % visible.length;
        const width = scrollRef.current.offsetWidth;

        scrollRef.current.scrollTo({
          left: (width - 16) * nextIndex,
          behavior: "smooth",
        });

        setScrollIndex(nextIndex);
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [isMobile, scrollIndex, limit, visible.length]);

  // Sync scroll dots index on manual swipe
  const handleScroll = () => {
    if (scrollRef.current && limit) {
      const width = scrollRef.current.offsetWidth;
      const scrollLeft = scrollRef.current.scrollLeft;
      const idx = Math.round(scrollLeft / (width - 16));

      setScrollIndex((prev) => {
        if (Math.abs(prev - idx) > 0.1) {
          return Math.max(0, Math.min(idx, visible.length - 1));
        }
        return prev;
      });
    }
  };

  return (
    <section id="projects" className="relative py-16 sm:py-24 lg:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-20">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.35em] text-gold">
                Selected Works
              </span>
            </div>
            <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
              A portfolio of <span className="italic text-gold-gradient">timeless</span> spaces
            </h2>
          </div>

          {/* Hide filter tabs if limit is applied (homepage context) */}
          {!limit && (
            <div className="flex flex-wrap gap-2">
              {cats.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`px-4 py-2 text-[11px] uppercase tracking-[0.2em] border transition-all duration-300 cursor-pointer ${
                    active === c
                      ? "border-gold bg-gold text-gold-foreground"
                      : "border-gold/25 text-muted-foreground hover:text-gold hover:border-gold"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop View / Full Subpage: Columns masonry layout */}
        <div
          className={`${limit ? "hidden md:columns-2 lg:columns-3" : "columns-1 sm:columns-2 lg:columns-3"} gap-5 [&>*]:mb-5`}
        >
          {visible.map((item, i) => (
            <motion.button
              layout
              key={item.title}
              onClick={() => setOpen(items.indexOf(item))}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.7 }}
              className="group relative block w-full overflow-hidden bg-surface text-left break-inside-avoid cursor-pointer"
            >
              <div
                className={`relative overflow-hidden ${
                  item.h === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
                <div className="absolute inset-0 ring-0 ring-gold/50 group-hover:ring-1 transition-all" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">
                  {item.cat} · {item.loc}
                </div>
                <h3 className="font-display text-lg lg:text-xl text-foreground">{item.title}</h3>
                <div className="mt-3 h-px w-0 bg-gold group-hover:w-16 transition-all duration-500" />
              </div>
            </motion.button>
          ))}
        </div>

        {/* Mobile Homepage View: Horizontal touch-swipe carousel with Autoplay */}
        {limit && (
          <div className="md:hidden relative">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-4 px-1"
            >
              {visible.map((item, i) => (
                <motion.button
                  key={item.title}
                  onClick={() => setOpen(items.indexOf(item))}
                  className="min-w-[85vw] snap-center relative block aspect-[4/3] overflow-hidden bg-surface text-left border border-gold/15 rounded-sm cursor-pointer z-10"
                >
                  <img
                    src={item.img}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90 z-0" />

                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <div className="text-[9px] uppercase tracking-[0.3em] text-gold mb-1.5">
                      {item.cat} · {item.loc}
                    </div>
                    <h3 className="font-display text-base text-foreground leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Mobile Carousel dot indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {visible.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (scrollRef.current) {
                      const width = scrollRef.current.offsetWidth;
                      scrollRef.current.scrollTo({
                        left: (width - 16) * idx,
                        behavior: "smooth",
                      });
                      setScrollIndex(idx);
                    }
                  }}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    scrollIndex === idx ? "w-6 bg-gold" : "w-1.5 bg-gold/20"
                  }`}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {showAllButton && (
          <div className="mt-14 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 border border-gold px-8 py-4 text-xs uppercase tracking-[0.2em] text-gold hover:bg-gold hover:text-gold-foreground transition-all duration-500 hover:gold-glow"
            >
              View Full Portfolio
              <ArrowRight size={14} />
            </Link>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-background/95 backdrop-blur-md p-4"
            onClick={() => setOpen(null)}
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute top-6 right-6 text-gold hover:rotate-90 transition-transform cursor-pointer"
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full"
            >
              <img
                src={items[open].img}
                alt={items[open].alt}
                className="w-full max-h-[80vh] object-contain"
              />
              <div className="mt-5 text-center">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">
                  {items[open].cat} · {items[open].loc}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl">{items[open].title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
