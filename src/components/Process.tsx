import { motion } from "framer-motion";
import { useState, useRef } from "react";

const steps = [
  { n: "01", title: "Consultation", desc: "Understand your vision, site, budget and aspirations." },
  { n: "02", title: "Planning", desc: "Feasibility, zoning, vastu and concept development." },
  { n: "03", title: "Design", desc: "Architectural drawings, layouts and material palettes." },
  { n: "04", title: "Visualization", desc: "Photoreal 3D renders and walkthroughs for approval." },
  { n: "05", title: "Approval", desc: "Liaison with HSIDC, DTP, HSVP, ULR & CLU authorities." },
  { n: "06", title: "Execution", desc: "Quality-controlled construction and turnkey handover." },
];

export function Process() {
  const [scrollIndex, setScrollIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const width = scrollRef.current.offsetWidth;
      const scrollLeft = scrollRef.current.scrollLeft;
      const idx = Math.round(scrollLeft / (width - 16));
      setScrollIndex(Math.max(0, Math.min(idx, steps.length - 1)));
    }
  };

  return (
    <section id="process" className="relative py-20 lg:py-36 bg-surface overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center mb-12 lg:mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-10 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-gold">
              Our Process
            </span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl">
            From concept to{" "}
            <span className="italic text-gold-gradient">completion</span>
          </h2>
        </div>

        {/* Desktop timeline connector and grid layout */}
        <div className="relative hidden lg:block">
          <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <div className="grid gap-4 grid-cols-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.12, duration: 0.7 }}
                className="relative text-center"
              >
                <div className="mx-auto mb-6 w-12 h-12 rounded-full bg-background border border-gold flex items-center justify-center font-display text-gold gold-glow">
                  {s.n}
                </div>
                <h3 className="font-display text-lg text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed px-2">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tablet view: Vertical timeline */}
        <div className="relative hidden md:block lg:hidden">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold/40 to-transparent" />
          <div className="grid gap-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="relative pl-20"
              >
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-background border border-gold flex items-center justify-center font-display text-gold gold-glow">
                  {s.n}
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile View: Swipeable Carousel */}
        <div className="md:hidden relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-4 px-1"
          >
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="min-w-[80vw] snap-center bg-background p-6 border border-gold/15 rounded-sm flex flex-col justify-start relative"
              >
                <div className="w-10 h-10 rounded-full bg-background border border-gold flex items-center justify-center font-display text-gold gold-glow mb-4">
                  {s.n}
                </div>
                <h3 className="font-display text-lg text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {steps.map((_, idx) => (
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
                aria-label={`Go to step ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
