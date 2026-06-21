import { motion } from "framer-motion";
import heroBanner from "@/assets/vzn-hero-banner.png";


export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full bg-background pt-[84px] md:pt-[96px]"
    >
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

