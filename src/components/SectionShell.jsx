import { motion } from "framer-motion";

export default function SectionShell({ children, step, total, className = "" }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`relative min-h-[100dvh] w-full flex flex-col items-center justify-center px-5 py-14 grain-bg overflow-hidden ${className}`}
    >
      {children}

      {typeof step === "number" && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5">
          {Array.from({ length: total }).map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === step ? "w-6 bg-gold" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
      )}
    </motion.section>
  );
}