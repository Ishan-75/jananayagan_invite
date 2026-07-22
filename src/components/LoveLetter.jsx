import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";
import SectionShell from "./SectionShell";
import FloatingHearts from "./FloatingHearts";

export default function LoveLetter({ onNext, step, total }) {
  const [open, setOpen] = useState(false);

  return (
    <SectionShell step={step} total={total}>
      <FloatingHearts count={5} />
      <p className="font-script text-2xl text-rose mb-8">a little letter, just for you</p>

      <div className="relative w-72 h-52 md:w-80 md:h-56">
        <AnimatePresence>
          {!open ? (
            <motion.button
              key="envelope"
              onClick={() => setOpen(true)}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute inset-0 heart-cursor"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-cream to-rose/80 shadow-glowRose overflow-hidden">
                {/* envelope flap */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-1/2 bg-rose"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                    transformOrigin: "top",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    clipPath: "polygon(0 100%, 50% 40%, 100% 100%)",
                    background: "rgba(15,17,21,0.06)",
                  }}
                />
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-void/70 font-script text-lg">
                  tap to open
                </span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl">💌</span>
                </div>
              </div>
            </motion.button>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -inset-x-6 -top-4 md:-inset-x-16 md:-top-8 bg-cream text-void rounded-lg shadow-2xl p-6 md:p-10 rotate-[-1deg]"
            >
              <p className="font-script text-xl md:text-2xl leading-relaxed">
                Life gets busy, and days blur into each other faster than we'd like. But somewhere
                between all the noise, I kept thinking about how much I just want to sit next to
                you in the dark, share our laughter, and watch something new together. So I
                planned something — for us, for the 24th july. Say yes? 🎬❤️
              </p>
              <p className="font-script text-lg md:text-xl mt-4 text-right text-accent">
                — Siluku
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <MagneticButton onClick={onNext}>Continue →</MagneticButton>
        </motion.div>
      )}
    </SectionShell>
  );
}