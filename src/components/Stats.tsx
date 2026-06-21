import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "+" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2.2, ease: [0.22, 1, 0.36, 1] });
      return () => controls.stop();
    }
  }, [inView, to, count]);

  return (
    <span className="inline-flex items-baseline">
      <motion.span ref={ref}>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

const stats = [
  { value: 8, suffix: "+", label: "Years of Expertise" },
  { value: 150, suffix: "+", label: "Projects Designed" },
  { value: 120, suffix: "+", label: "Happy Clients" },
  { value: 24, suffix: "/7", label: "Consultation Support" },
];

export function Stats() {
  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden border-y border-gold/15">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212,175,55,0.4), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center mb-14 lg:mb-20">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-gold">
              Why Choose VZN
            </span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl">
            A legacy measured in <span className="italic text-gold-gradient">excellence</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gold/15">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="bg-background p-8 lg:p-12 text-center"
            >
              <div className="font-display text-5xl sm:text-6xl lg:text-7xl text-gold-gradient leading-none mb-4">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
