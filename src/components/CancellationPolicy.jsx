import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import MagneticButton from "./MagneticButton";
import SectionShell from "./SectionShell";

const rules = [
  { reason: "Cancelled because of work", penalty: "One extra movie date, no negotiations." },
  { reason: "Cancelled because of laziness", penalty: "Ice cream sponsored, full tub." },
  { reason: "Cancelled without informing", penalty: "Unlimited teasing, forever." },
  { reason: `Cancelled because "I'm sleepy"`, penalty: "Movie postponed. Date still compulsory." },
  { reason: "Cancelled to watch it with someone else", penalty: "Avlo dhan unnaku😤." },
  { reason: "Cancelled due to bad hair day", penalty: "You still look cute. Denied." },
];

export default function CancellationPolicy({ onNext, step, total }) {
  return (
    <SectionShell step={step} total={total}>
      <p className="font-script text-2xl text-rose mb-2">just in case</p>
      <h2 className="font-display text-2xl md:text-3xl text-cream mb-8 text-center">
        Cancellation Policy
      </h2>

      <div className="w-full max-w-md flex flex-col gap-3">
        {rules.map((r, i) => (
          <motion.div
            key={r.reason}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * i }}
          >
            <GlassCard className="px-5 py-4" glow="accent">
              <p className="text-cream/90 font-body text-sm">{r.reason}</p>
              <p className="text-accent font-display text-sm mt-1">→ {r.penalty}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <p className="mt-6 font-script text-xl text-gold text-center">
        No refunds. Only rescheduling, with love.
      </p>

      <div className="mt-6">
        <MagneticButton onClick={onNext}>Noted, Love →</MagneticButton>
      </div>
    </SectionShell>
  );
}