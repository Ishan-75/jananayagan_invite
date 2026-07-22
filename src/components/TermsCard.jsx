import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import GlassCard from "./GlassCard";
import MagneticButton from "./MagneticButton";
import SectionShell from "./SectionShell";

const terms = [
  "Unlimited smiles required",
  "Laughing loudly is encouraged",
  "Cute photos before entering the theatre",
  "Looking beautiful is compulsory (already fulfilled ❤️)",
  "Holding hands may happen",
  "Phone usage should be minimal",
  "Movie spoilers are strictly prohibited",
];

export default function TermsCard({ onNext, step, total }) {
  return (
    <SectionShell step={step} total={total}>
      <p className="font-script text-2xl text-rose mb-2">the fine print</p>
      <h2 className="font-display text-2xl md:text-3xl text-cream mb-8 text-center">
        Terms &amp; Conditions
      </h2>

      <GlassCard className="w-full max-w-md p-6 md:p-8" glow="gold">
        <ul className="flex flex-col gap-3">
          {terms.map((t, i) => (
            <motion.li
              key={t}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08 * i, duration: 0.4 }}
              className="flex items-start gap-3 text-cream/85 font-body text-sm md:text-base"
            >
              <FaCheckCircle className="text-gold mt-0.5 shrink-0" />
              <span>{t}</span>
            </motion.li>
          ))}
        </ul>
      </GlassCard>

      <div className="mt-8">
        <MagneticButton onClick={onNext}>I agree to the vibes →</MagneticButton>
      </div>
    </SectionShell>
  );
}