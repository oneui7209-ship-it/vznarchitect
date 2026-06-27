import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  Building2,
  Sofa,
  Box,
  ClipboardCheck,
  FileCheck2,
  Ruler,
  Sparkles,
  HardHat,
  ArrowUpRight,
} from "lucide-react";

// Import images for cards
import s1 from "@/assets/service-1.png";
import s2 from "@/assets/service-2.png";
import s3 from "@/assets/service-3.png";
import s4 from "@/assets/project-4.jpg"; // Project consultation
import s5 from "@/assets/project-6.jpg"; // Building approval
import s6 from "@/assets/project-2.jpg"; // Layout planning
import s7 from "@/assets/project-5.jpg"; // Vastu consultation
import s8 from "@/assets/project-1.jpg"; // Construction services

const services = [
  {
    n: "01",
    icon: Building2,
    title: "Architectural Design",
    desc: "Bespoke residential & commercial architecture tailored to your land and lifestyle.",
    img: s1,
  },
  {
    n: "02",
    icon: Sofa,
    title: "Interior Design",
    desc: "Curated interiors with premium finishes, lighting and bespoke joinery.",
    img: s2,
  },
  {
    n: "03",
    icon: Box,
    title: "3D Visualization",
    desc: "Photoreal renders & walkthroughs to experience your space before it's built.",
    img: s3,
  },
  {
    n: "04",
    icon: ClipboardCheck,
    title: "Project Consultation",
    desc: "Expert guidance across feasibility, budgeting and design strategy.",
    img: s4,
  },
  {
    n: "05",
    icon: FileCheck2,
    title: "Building Approval",
    desc: "HSIDC, DTP, HSVP & ULR sanctions handled end-to-end.",
    img: s6,
  },
  {
    n: "06",
    icon: Ruler,
    title: "Layout Planning",
    desc: "Optimized 2D & 3D layouts that balance vastu, flow and function.",
    img: s5,
  },
  {
    n: "07",
    icon: Sparkles,
    title: "Vastu Consultation",
    desc: "Traditional vastu principles integrated into modern design.",
    img: s7,
  },
  {
    n: "08",
    icon: HardHat,
    title: "Construction Services",
    desc: "Turnkey residential & commercial construction with quality control.",
    img: s8,
  },
];

export function Services() {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Check viewport width to active auto-scroll only on mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle automatic scrolling in mobile view every 2 seconds
  useEffect(() => {
    if (!isMobile) return;

    const timer = setInterval(() => {
      if (scrollRef.current) {
        const nextIndex = (scrollIndex + 1) % services.length;
        const width = scrollRef.current.offsetWidth;

        scrollRef.current.scrollTo({
          left: (width - 16) * nextIndex,
          behavior: "smooth",
        });

        setScrollIndex(nextIndex);
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [isMobile, scrollIndex]);

  // Sync index on manual scroll/swipe
  const handleScroll = () => {
    if (scrollRef.current) {
      const width = scrollRef.current.offsetWidth;
      const scrollLeft = scrollRef.current.scrollLeft;
      const idx = Math.round(scrollLeft / (width - 16));

      // Debounce updating state to prevent scroll loops
      setScrollIndex((prev) => {
        if (Math.abs(prev - idx) > 0.1) {
          return Math.max(0, Math.min(idx, services.length - 1));
        }
        return prev;
      });
    }
  };

  return (
    <section id="services" className="relative py-16 sm:py-24 lg:py-36 bg-surface overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-20">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.35em] text-gold">
                Our Expertise
              </span>
            </div>
            <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl leading-[1.1] max-w-3xl">
              Services crafted for <span className="italic text-gold-gradient">discerning</span>{" "}
              clients
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-xs sm:text-sm leading-relaxed">
            A full spectrum of architecture, interiors and planning — delivered with the rigor of a
            luxury studio.
          </p>
        </div>

        {/* Desktop View: Grid layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/15">
          {services.map((s, i) => (
            <Link
              key={s.title}
              to="/contact"
              className="group relative p-7 lg:p-8 min-h-[290px] flex flex-col justify-between overflow-hidden transition-all duration-700 bg-background"
            >
              {/* Background Image wrapper */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
                {/* Dark gradient to ensure high text contrast and readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/80 to-background/30 transition-opacity duration-700 group-hover:opacity-90" />
              </div>

              {/* Hover radial glow effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(212,175,55,0.15), transparent 70%)",
                }}
              />

              {/* Accent separator line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gold/15 group-hover:bg-gold/45 transition-colors z-20" />

              <div className="relative z-20 flex items-start justify-between">
                {/* Premium Blurred Icon container */}
                <div className="w-11 h-11 border border-gold/30 rounded-sm grid place-items-center text-gold bg-background/50 backdrop-blur-sm group-hover:bg-gold group-hover:text-gold-foreground transition-all duration-500">
                  <s.icon
                    className="transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6"
                    size={20}
                    strokeWidth={1.2}
                  />
                </div>
                <span className="font-display text-xs text-gold/60">{s.n}</span>
              </div>

              <div className="relative z-20 mt-6">
                <h3 className="font-display text-lg lg:text-xl text-foreground mb-2 leading-tight">
                  {s.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {s.desc}
                </p>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-gold opacity-80 group-hover:opacity-100 transition-all">
                  Enquire
                  <ArrowUpRight
                    size={12}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View: Swipeable Carousel layout with Autoplay */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="md:hidden flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-4 px-1"
        >
          {services.map((s, i) => (
            <Link
              key={s.title}
              to="/contact"
              className="min-w-[85vw] snap-center group relative p-6 min-h-[260px] flex flex-col justify-between overflow-hidden border border-gold/15 rounded-sm bg-background"
            >
              {/* Background Image wrapper */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/80 to-background/30" />
              </div>

              <div className="relative z-20 flex items-start justify-between">
                <div className="w-10 h-10 border border-gold/30 rounded-sm grid place-items-center text-gold bg-background/50 backdrop-blur-sm">
                  <s.icon size={18} strokeWidth={1.2} />
                </div>
                <span className="font-display text-xs text-gold/60">{s.n}</span>
              </div>

              <div className="relative z-20 mt-6">
                <h3 className="font-display text-lg text-foreground mb-2 leading-tight">
                  {s.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {s.desc}
                </p>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-gold">
                  Enquire
                  <ArrowUpRight size={12} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Dot Indicators */}
        <div className="flex md:hidden justify-center gap-2 mt-4">
          {services.map((_, idx) => (
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
              aria-label={`Go to service ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
