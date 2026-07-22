import { motion } from "framer-motion";
import useCountdown from "../hooks/useCountdown";
import MagneticButton from "./MagneticButton";
import SectionShell from "./SectionShell";

const MOVIE_DATE = new Date("2026-07-24T11:15:00");

function Unit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        key={value}
        initial={{ y: -8, opacity: 0.4 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="glass rounded-2xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center font-display text-2xl md:text-3xl text-gold"
      >
        {String(value).padStart(2, "0")}
      </motion.div>
      <span className="mt-2 text-[10px] md:text-xs tracking-[0.2em] text-cream/50 font-body uppercase">
        {label}
      </span>
    </div>
  );
}

export default function Countdown({ onNext, step, total }) {
  const { days, hours, minutes, seconds } = useCountdown(MOVIE_DATE);

  return (
    <SectionShell step={step} total={total}>
      <p className="font-script text-2xl text-rose mb-2">counting every second</p>
      <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 text-center">
        Until our movie date
      </h2>

      <div className="flex gap-3 md:gap-5">
        <Unit value={days} label="Days" />
        <Unit value={hours} label="Hours" />
        <Unit value={minutes} label="Mins" />
        <Unit value={seconds} label="Secs" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-10"
      >
        <MagneticButton onClick={onNext}>What do I need to know? →</MagneticButton>
      </motion.div>
    </SectionShell>
  );
}