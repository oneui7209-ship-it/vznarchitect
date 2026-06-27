import { motion } from "framer-motion";
import heroBanner from "@/assets/vzn-hero-banner.png";

export function Hero() {
  return (
    <section id="home" className="relative w-full bg-background pt-[115px] md:pt-[120px]">
      <h1 className="sr-only">
        VZN Architect — Luxury Architecture &amp; Interior Design Studio in Jhajjar, Haryana
      </h1>
      <div className="w-full h-auto overflow-hidden">
        <motion.div
          initial={{ scale: 1.02 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-auto"
        >
          <img
            src={heroBanner}
            alt="VZN Architect — Designing Spaces. Creating Experiences."
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
