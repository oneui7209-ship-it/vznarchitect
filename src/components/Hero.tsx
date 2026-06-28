import { motion } from "framer-motion";
import heroBanner from "@/assets/vzn-hero-banner.png";

export function Hero() {
  return (
    <section id="home" className="relative w-full bg-background pt-[115px] md:pt-[120px]">
      <h1 className="sr-only">
        VZN Architect — Best Architect in Jhajjar | Luxury Architecture, Interior Design &amp; 3D Elevation Studio in Jhajjar, Haryana
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
            alt="VZN Architect luxury architecture studio hero banner — modern house design, residential architecture, interior design and 3D elevation services in Jhajjar, Haryana"
            className="w-full h-auto object-contain"
            fetchPriority="high"
          />
        </motion.div>
      </div>
    </section>
  );
}
