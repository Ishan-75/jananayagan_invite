import { motion } from "framer-motion";
import SectionShell from "./SectionShell";
import MagneticButton from "./MagneticButton";

const roles = [
  { role: "Directed by", names: ["Ishan ❤️"] },
  { role: "Starring", names: ["Suganthi ❤️"] },
  { role: "Special Thanks", names: ["Love", "Hug", "Jananayagan"] },
];

export default function Credits({ onRestart, step, total }) {
  return (
    <SectionShell step={step} total={total} className="overflow-hidden">
      <div className="relative h-[70vh] w-full max-w-md overflow-hidden">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "-120%" }}
          transition={{ duration: 16, ease: "linear" }}
          className="absolute inset-x-0 flex flex-col items-center gap-10 text-center"
        >
          <h3 className="font-display text-2xl text-gold mb-4">🎬Movie date</h3>
          {roles.map((r) => (
            <div key={r.role}>
              <p className="text-cream/40 text-xs tracking-[0.3em] font-body mb-2 uppercase">
                {r.role}
              </p>
              {r.names.map((n) => (
                <p key={n} className="font-display text-xl text-cream">
                  {n}
                </p>
              ))}
            </div>
          ))}
          <p className="font-script text-2xl text-rose max-w-xs mt-6 leading-relaxed">
            Every great movie ends with credits. I hope this is only the beginning of many more
            movie dates together.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-6"
      >
        <MagneticButton onClick={onRestart} variant="outline">
          Watch the mission again ↺
        </MagneticButton>
      </motion.div>
    </SectionShell>
  );
}