import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";
import SectionShell from "./SectionShell";

export default function MovieTicket({ onNext, step, total }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <SectionShell step={step} total={total}>
      <p className="font-script text-2xl text-rose mb-2">your official pass</p>
      <h2 className="font-display text-2xl md:text-3xl text-cream mb-8 text-center">
        Movie Ticket
      </h2>

      <motion.div
        initial={{ opacity: 0, rotateX: 20, y: 30 }}
        animate={{ opacity: 1, rotateX: 0, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-sm relative"
      >
        <div className="glass shimmer-sweep rounded-2xl overflow-hidden shadow-glow">
          <div className="bg-gradient-to-r from-gold/20 via-rose/10 to-transparent px-6 py-5 border-b border-dashed border-white/15">
            <p className="text-xs tracking-[0.3em] text-cream/50 font-body">MISSION: JANANAYAGAN</p>
            <h3 className="font-display text-2xl text-cream mt-1">🎬 Jananayagan</h3>
          </div>

          <div className="px-6 py-5 grid grid-cols-2 gap-y-4 gap-x-2 font-body text-sm">
            <div>
              <p className="text-cream/40 text-xs">DATE</p>
              <p className="text-cream">24 July</p>
            </div>
            <div>
              <p className="text-cream/40 text-xs">TIME</p>
              <p className="text-cream">11:15 AM</p>
            </div>
            <div>
              <p className="text-cream/40 text-xs">SEATS</p>
              <p className="text-cream">I5 &amp; I6 ❤️</p>
            </div>
            <div>
              <p className="text-cream/40 text-xs">STATUS</p>
              <p className="text-gold font-semibold">CONFIRMED</p>
            </div>
          </div>

          {/* perforation divider */}
          <div className="relative h-6">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-dashed border-white/20" />
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-void" />
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-void" />
          </div>

          <div className="px-6 py-6 flex flex-col items-center">
            <p className="text-cream/40 text-xs font-body mb-3 tracking-widest">
              TAP QR TO REVEAL
            </p>
            <button
              onClick={() => setRevealed(true)}
              className="relative w-28 h-28 rounded-lg bg-white p-2 heart-cursor"
            >
              <AnimatePresence mode="wait">
                {!revealed ? (
                  <motion.div
                    key="qr"
                    exit={{ opacity: 0, scale: 0.7 }}
                    className="w-full h-full grid grid-cols-6 grid-rows-6 gap-[2px]"
                  >
                    {Array.from({ length: 36 }).map((_, i) => (
                      <span
                        key={i}
                        className={`${
                          [0,1,2,5,6,8,11,12,14,17,18,20,23,24,26,29,30,32,35].includes(i)
                            ? "bg-void"
                            : "bg-white"
                        } rounded-[1px]`}
                      />
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="love"
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring" }}
                    className="w-full h-full flex items-center justify-center text-void font-display text-xs text-center leading-tight"
                  >
                    I Love<br />You Baee❤️
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.div>

      <div className="mt-8">
        <MagneticButton onClick={onNext}>One more thing... →</MagneticButton>
      </div>
    </SectionShell>
  );
}