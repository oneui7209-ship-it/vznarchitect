import { motion } from "framer-motion";
import { Compass, ShieldCheck, Users, Layers } from "lucide-react";
import about from "@/assets/about.jpg";

const highlights = [
  { icon: Compass, title: "Creative Design", text: "Original concepts rooted in site, climate and lifestyle." },
  { icon: ShieldCheck, title: "Quality Assurance", text: "Rigorous detailing & material specifications on every drawing." },
  { icon: Users, title: "Client Focused", text: "Transparent process, regular reviews, lasting relationships." },
  { icon: Layers, title: "End-to-End", text: "From first sketch to final handover — under one roof." },
];

export function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] overflow-hidden group">
              <img
                src={about}
                alt="Parveen (Veer), Founder of VZN Architect"
                className="h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            {/* corner accents */}
            <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-gold" />
            <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-gold" />
            {/* Floating card */}
            <div className="absolute -bottom-8 -left-4 sm:left-8 glass px-6 py-5 max-w-[260px]">
              <div className="text-xs uppercase tracking-[0.25em] text-gold mb-2">
                Founder
              </div>
              <div className="font-display text-2xl text-foreground">
                Parveen (Veer)
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Principal Architect
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.35em] text-gold">
                About the Studio
              </span>
            </div>
            <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-foreground">
              Your Vision.
              <br />
              <span className="italic text-gold-gradient">Our Architecture.</span>
            </h2>
            <p className="mt-7 text-muted-foreground leading-relaxed text-[15px] sm:text-base max-w-xl">
              At VZN Architect, we transform ideas into timeless spaces. From
              concept to completion, we deliver architecture, interiors and
              planning solutions with precision and excellence — for homes,
              offices and developments that endure.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-px bg-gold/15">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.7 }}
                  className="bg-background p-4 sm:p-6 group hover:bg-surface transition-colors duration-500"
                >
                  <h.icon className="text-gold mb-3 sm:mb-4 h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.2} />
                  <div className="font-display text-sm sm:text-lg text-foreground mb-1 leading-tight">
                    {h.title}
                  </div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">
                    {h.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
