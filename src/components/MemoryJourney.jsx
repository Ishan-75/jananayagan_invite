import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "./GlassCard";
import MagneticButton from "./MagneticButton";
import SectionShell from "./SectionShell";

const memories = [
  {
    icon: "❤️",
    title: "First Conversation",
    text: "The one where a simple hello turned into hours we didn't want to end.",
  },
  {
    icon: "🌷",
    title: "Favorite Memory",
    text: "Everytime I'm with you is my Favorite.😘",
  },
  {
    icon: "😂",
    title: "Funniest Moment",
    text: "The joke that still makes no sense to anyone else, but breaks us instantly.",
  },
  {
    icon: "🍿",
    title: "Movie Partner",
    text: "We just not there to only watch the screen. We spend together!!",
  },
];

export default function MemoryJourney({ onNext, step, total }) {
  const [index, setIndex] = useState(0);
  const isLast = index === memories.length;

  return (
    <SectionShell step={step} total={total}>
      <p className="font-script text-2xl text-rose mb-2">a little walk down memory lane</p>
      <h2 className="font-display text-2xl md:text-3xl text-cream mb-8 text-center">
        Memory Journey
      </h2>

      <div className="relative w-full max-w-sm h-72">
        <AnimatePresence mode="wait">
          {!isLast ? (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60, rotate: 4 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              exit={{ opacity: 0, x: -60, rotate: -4 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <GlassCard className="h-full w-full flex flex-col items-center justify-center text-center px-8" glow="rose">
                <span className="text-5xl mb-4">{memories[index].icon}</span>
                <h3 className="font-display text-xl text-gold mb-3">{memories[index].title}</h3>
                <p className="font-body text-cream/70 text-sm leading-relaxed">
                  {memories[index].text}
                </p>
              </GlassCard>
            </motion.div>
          ) : (
            <motion.div
              key="final"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="absolute inset-0"
            >
              <GlassCard className="h-full w-full flex flex-col items-center justify-center text-center px-8" glow="accent">
                <span className="text-5xl mb-4">🎁</span>
                <h3 className="font-display text-2xl text-cream mb-2">
                  Ready for your surprise?
                </h3>
                <p className="text-cream/60 text-sm mb-6">There's something waiting for you next.</p>
                <MagneticButton onClick={onNext} variant="accent">
                  Open it →
                </MagneticButton>
              </GlassCard>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {!isLast && (
        <button
          onClick={() => setIndex((i) => i + 1)}
          className="mt-8 px-6 py-3 rounded-full border border-gold/50 text-cream font-body text-sm tracking-wide hover:bg-gold/10 transition-colors"
        >
          Next memory →
        </button>
      )}

      <div className="flex gap-1.5 mt-6">
        {memories.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-1.5 rounded-full transition-all ${
              i <= index ? "bg-rose w-4" : "bg-white/20"
            }`}
          />
        ))}
      </div>
    </SectionShell>
  );
}