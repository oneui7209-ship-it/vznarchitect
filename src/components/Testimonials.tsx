import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const list = [
  {
    text: "VZN turned our plot into a home beyond imagination. The attention to detail, the renders, the execution — every step felt premium.",
    name: "Rohit & Anjali Sharma",
    role: "Residential Client · Jhajjar",
  },
  {
    text: "Veer's vastu and design balance is exceptional. Our showroom interiors look world-class and have boosted footfall remarkably.",
    name: "Manish Goyal",
    role: "Commercial Client · Rohtak",
  },
  {
    text: "Approvals were handled end-to-end without us lifting a finger. Professional, transparent and genuinely creative team.",
    name: "Sunita Dahiya",
    role: "Builder · Gurugram",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % list.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative py-28 lg:py-36 bg-background overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <div className="flex items-center justify-center gap-4 mb-5">
          <div className="h-px w-10 bg-gold" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-gold">Client Voices</span>
          <div className="h-px w-10 bg-gold" />
        </div>
        <h2 className="font-display font-light text-4xl sm:text-5xl mb-14">
          Trusted by <span className="italic text-gold-gradient">visionaries</span>
        </h2>

        <div className="relative glass p-8 sm:p-14 min-h-[280px] flex items-center justify-center">
          <Quote className="absolute top-6 left-6 text-gold/20" size={60} strokeWidth={1} />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="font-display text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed text-foreground italic">
                "{list[i].text}"
              </p>
              <div className="mt-8 h-px w-12 bg-gold mx-auto" />
              <div className="mt-5 font-sans text-sm uppercase tracking-[0.2em] text-foreground">
                {list[i].name}
              </div>
              <div className="text-xs text-muted-foreground mt-1.5">{list[i].role}</div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => setI((p) => (p - 1 + list.length) % list.length)}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-gold/60 hover:text-gold p-2"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => setI((p) => (p + 1) % list.length)}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-gold/60 hover:text-gold p-2"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {list.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1 transition-all duration-500 ${
                i === idx ? "w-10 bg-gold" : "w-4 bg-gold/25"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
