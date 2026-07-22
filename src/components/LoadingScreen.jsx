import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FloatingHearts from "./FloatingHearts";

const messages = [
  "Preparing your special invitation...",
  "Loading reel one of one...",
  "Dimming the theatre lights...",
];

export default function LoadingScreen({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const totalMs = 3400;
    const tick = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / totalMs) * 100));
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(tick);
        setTimeout(onDone, 400);
      }
    }, 40);

    const msgTick = setInterval(() => {
      setMsgIndex((i) => (i + 1) % messages.length);
    }, 1150);

    return () => {
      clearInterval(tick);
      clearInterval(msgTick);
    };
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-void grain-bg flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
    >
      <FloatingHearts count={6} />

      {/* Ambient glow */}
      <div className="absolute w-[420px] h-[420px] rounded-full bg-gold/20 blur-[120px] animate-pulseGlow" />

      {/* Film reel */}
      <motion.div
        className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-[6px] border-gold/70 flex items-center justify-center animate-spinSlow"
        style={{ boxShadow: "0 0 60px rgba(244,197,66,0.35)" }}
      >
        <div className="absolute inset-0 rounded-full">
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <div
              key={deg}
              className="absolute w-6 h-6 md:w-7 md:h-7 rounded-full bg-void border-2 border-gold/50"
              style={{
                top: "50%",
                left: "50%",
                transform: `rotate(${deg}deg) translate(0, -38px) translate(-50%,-50%)`,
              }}
            />
          ))}
        </div>
        <div className="w-6 h-6 rounded-full bg-gold shadow-glow" />
      </motion.div>

      <p className="mt-10 font-display text-lg md:text-xl text-cream/90 tracking-wide text-center px-8 h-8">
        {messages[msgIndex]}
      </p>

      <div className="mt-6 w-52 md:w-64 h-[3px] bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-gold via-rose to-gold"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="mt-3 text-xs text-cream/50 font-body tracking-[0.3em]">
        {progress}%
      </span>
    </motion.div>
  );
}