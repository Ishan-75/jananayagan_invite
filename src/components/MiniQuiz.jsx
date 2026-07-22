import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "./GlassCard";
import MagneticButton from "./MagneticButton";
import SectionShell from "./SectionShell";

const questions = [
  {
    q: "Who's your movie partner on 25 July?",
    options: ["Popcorn", "Vijay", "Ishan ❤️"],
    correct: "Ishan ❤️",
  },
  {
    q: "What's compulsory during the movie?",
    options: ["Silence", "Talking", "Everything with you"],
    correct: "Everything with you",
  },
  {
    q: "What time does the mission begin?",
    options: ["9:00 AM", "11:15 AM", "6:00 PM"],
    correct: "11:15 AM",
  },
];

export default function MiniQuiz({ onNext, step, total }) {
  const [index, setIndex] = useState(0);
  const [wrong, setWrong] = useState(false);
  const done = index === questions.length;

  function handleAnswer(opt) {
    if (opt === questions[index].correct) {
      setWrong(false);
      setIndex((i) => i + 1);
    } else {
      setWrong(true);
      setTimeout(() => setWrong(false), 700);
    }
  }

  return (
    <SectionShell step={step} total={total}>
      <p className="font-script text-2xl text-rose mb-2">quick security check</p>
      <h2 className="font-display text-2xl md:text-3xl text-cream mb-8 text-center">Mini Quiz</h2>

      <AnimatePresence mode="wait">
        {!done ? (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: wrong ? [0, -10, 10, -10, 10, 0] : 0,
            }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-sm"
          >
            <GlassCard className="p-6 md:p-8" glow="rose">
              <p className="font-display text-lg text-cream mb-6 text-center">
                {questions[index].q}
              </p>
              <div className="flex flex-col gap-3">
                {questions[index].options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleAnswer(opt)}
                    className="w-full text-left px-5 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-gold/10 hover:border-gold/50 transition-colors text-cream/85 font-body text-sm"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </GlassCard>
            {wrong && (
              <p className="text-accent text-center text-sm mt-3 font-body">
                Not quite, try again 😅
              </p>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
            className="flex flex-col items-center"
          >
            <span className="text-5xl mb-4">🔓</span>
            <p className="font-display text-xl text-cream mb-6">Access granted!</p>
            <MagneticButton onClick={onNext}>Continue →</MagneticButton>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex gap-1.5 mt-8">
        {questions.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-1.5 rounded-full transition-all ${
              i < index ? "bg-gold w-4" : "bg-white/20"
            }`}
          />
        ))}
      </div>
    </SectionShell>
  );
}