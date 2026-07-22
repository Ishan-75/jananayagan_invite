import { useMemo } from "react";
import { motion } from "framer-motion";

export default function FloatingHearts({ count = 10, emoji = "❤️" }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 8 + Math.random() * 8,
        size: 0.7 + Math.random() * 1.1,
        drift: (Math.random() - 0.5) * 60,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((h) => (
        <motion.span
          key={h.id}
          className="absolute select-none opacity-0"
          style={{ left: `${h.left}%`, bottom: "-5%", fontSize: `${h.size}rem` }}
          initial={{ y: 0, opacity: 0, x: 0 }}
          animate={{
            y: "-120vh",
            opacity: [0, 0.7, 0.7, 0],
            x: h.drift,
          }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {emoji}
        </motion.span>
      ))}
    </div>
  );
}