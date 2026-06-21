import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/vzn-logo.png";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.img
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              src={logo}
              alt="VZN"
              className="w-28 h-28"
              style={{ filter: "drop-shadow(0 0 30px rgba(212,175,55,0.6))" }}
            />
            <div className="font-display tracking-[0.4em] text-gold-gradient text-sm">
              VZN ARCHITECT
            </div>
            <div className="h-px w-40 bg-gold/20 overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-full w-full bg-gold-gradient"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
