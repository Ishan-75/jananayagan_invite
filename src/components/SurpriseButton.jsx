import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heartConfetti } from "../utils/Confetti";
import MagneticButton from "./MagneticButton";
import SectionShell from "./SectionShell";

export default function SurpriseButton({ onNext, step, total }) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true);
    heartConfetti();
  }

  return (
    <SectionShell step={step} total={total}>
      <p className="font-script text-2xl text-rose mb-2">last checkpoint</p>
      <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 text-center">
        One tiny temptation
      </h2>

      <AnimatePresence mode="wait">
        {!clicked ? (
          <motion.div
            key="button"
            animate={{
              scale: [1, 1.04, 1],
              rotate: [0, -1.5, 1.5, 0],
            }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <button
              onClick={handleClick}
              className="px-10 py-6 rounded-full bg-gradient-to-r from-accent to-rose text-void font-display text-xl md:text-2xl shadow-glowAccent heart-cursor"
            >
              DO NOT CLICK
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="revealed"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
            className="flex flex-col items-center text-center"
          >
            <p className="font-display text-2xl md:text-3xl text-gold mb-8">
              I knew you clicked 😂❤️
            </p>
            <MagneticButton onClick={onNext}>Alright, let's go →</MagneticButton>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionShell>
  );
}