import { useEffect, useState } from "react";

export default function useCountdown(targetDate) {
  const [remaining, setRemaining] = useState(getDiff());

  function getDiff() {
    const diff = Math.max(0, targetDate.getTime() - Date.now());
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds, done: diff <= 0 };
  }

  useEffect(() => {
    const tick = setInterval(() => setRemaining(getDiff()), 1000);
    return () => clearInterval(tick);
  }, [targetDate]);

  return remaining;
}