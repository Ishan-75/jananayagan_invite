import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";

import LoadingScreen from "./components/LoadingScreen";
import WelcomeScreen from "./components/WelcomeScreen";
import MemoryJourney from "./components/MemoryJourney";
import LoveLetter from "./components/LoveLetter";
import MovieReveal from "./components/MovieReveal";
import Countdown from "./components/Countdown";
import TermsCard from "./components/TermsCard";
import CancellationPolicy from "./components/CancellationPolicy";
import MiniQuiz from "./components/MiniQuiz";
import DateAgreement from "./components/DateAgreement";
import MovieTicket from "./components/MovieTicket";
import SurpriseButton from "./components/SurpriseButton";
import Celebration from "./components/Celebration";
import Credits from "./components/Credits";
import SoundToggle from "./components/SoundToggle";

const steps = [
  WelcomeScreen,
  MemoryJourney,
  LoveLetter,
  MovieReveal,
  Countdown,
  TermsCard,
  CancellationPolicy,
  MiniQuiz,
  DateAgreement,
  MovieTicket,
  SurpriseButton,
  Celebration,
  Credits,
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState(0);

  const next = useCallback(() => setStep((s) => Math.min(s + 1, steps.length - 1)), []);
  const restart = useCallback(() => setStep(0), []);

  const StepComponent = steps[step];
  const isLast = step === steps.length - 1;

  return (
    <div className="relative min-h-[100dvh] bg-void text-cream font-body">
      {!loading && <SoundToggle />}

      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <AnimatePresence mode="wait">
          <StepComponent
            key={step}
            onNext={next}
            onRestart={restart}
            step={step}
            total={steps.length}
          />
        </AnimatePresence>
      )}
    </div>
  );
}