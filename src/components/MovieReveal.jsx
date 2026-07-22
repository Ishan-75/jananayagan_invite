import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaUserFriends } from "react-icons/fa";
import MagneticButton from "./MagneticButton";
import SectionShell from "./SectionShell";

export default function MovieReveal({ onNext, step, total }) {
  return (
    <SectionShell step={step} total={total}>
      {/* cinema light beams */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-gold/40 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-gold/10 blur-[140px]" />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-cream/50 tracking-[0.4em] text-xs font-body mb-4"
      >
        MISSION REVEALED
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, scale: 0.7, letterSpacing: "0.4em" }}
        animate={{ opacity: 1, scale: 1, letterSpacing: "0.02em" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-4xl md:text-6xl text-gradient-gold animate-shimmer bg-[length:200%_auto] text-center"
      >
        🎬 Jananayagan
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="mt-8 glass rounded-2xl px-8 py-6 flex flex-col gap-4 text-cream/90 font-body"
      >
        <div className="flex items-center gap-3">
          <FaCalendarAlt className="text-gold" /> <span>24 July</span>
        </div>
        <div className="flex items-center gap-3">
          <FaClock className="text-gold" /> <span>11:15 AM</span>
        </div>
        <div className="flex items-center gap-3">
          <FaUserFriends className="text-gold" />
          <span>Ishan ❤️ Suganthi</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-10"
      >
        <MagneticButton onClick={onNext}>See the countdown →</MagneticButton>
      </motion.div>
    </SectionShell>
  );
}