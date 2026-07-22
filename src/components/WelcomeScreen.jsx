import { motion } from "framer-motion";
import FloatingHearts from "./FloatingHearts";
import MagneticButton from "./MagneticButton";
import SectionShell from "./SectionShell";

export default function WelcomeScreen({ onNext, step, total }) {
  return (
    <SectionShell step={step} total={total}>
      <FloatingHearts count={9} />
      <div className="absolute w-[380px] h-[380px] rounded-full bg-rose/20 blur-[110px]" />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="font-script text-3xl md:text-4xl text-gold mb-3"
      >
        Hi Suganthi ❤️
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="font-display text-3xl md:text-5xl text-center text-cream leading-tight max-w-xl"
      >
        Someone has prepared a{" "}
        <span className="text-gradient-gold animate-shimmer bg-[length:200%_auto]">
          Special Date
        </span>{" "}
        for you...
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="mt-4 text-cream/60 font-body text-sm md:text-base tracking-wide"
      >
        Lady, this mission is classified. Proceed only if your heart is ready.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.6, type: "spring" }}
        className="mt-10"
      >
        <MagneticButton onClick={onNext}>Start Mission →</MagneticButton>
      </motion.div>
    </SectionShell>
  );
}