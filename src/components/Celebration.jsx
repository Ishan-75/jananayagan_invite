import { useEffect } from "react";
import { motion } from "framer-motion";
import { fireworksConfetti } from "../utils/Confetti";
import FloatingHearts from "./FloatingHearts";
import MagneticButton from "./MagneticButton";
import SectionShell from "./SectionShell";

export default function Celebration({ onNext, step, total }) {
  useEffect(() => {
    fireworksConfetti(3200);
  }, []);

  return (
    <SectionShell step={step} total={total}>
      <FloatingHearts count={14} />
      <div className="absolute w-[480px] h-[480px] rounded-full bg-gold/20 blur-[150px] animate-pulseGlow" />

      <motion.h2
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 0.8 }}
        className="font-display text-4xl md:text-6xl text-gradient-gold animate-shimmer bg-[length:200%_auto] text-center"
      >
        Mission Accepted ❤️
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-6 font-script text-2xl md:text-3xl text-rose text-center"
      >
        See you on 24 July, 11:15 AM
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-4 text-cream/50 font-body text-sm tracking-[0.25em]"
      >
        MOVIE DATE LOADING...
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="mt-10"
      >
        <MagneticButton onClick={onNext}>Roll the credits →</MagneticButton>
      </motion.div>
    </SectionShell>
  );
}