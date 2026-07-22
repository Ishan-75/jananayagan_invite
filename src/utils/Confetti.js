import confetti from "canvas-confetti";

const palette = ["#F4C542", "#F6B7C9", "#FF6B81", "#FFF8F2"];

export function burstConfetti() {
  confetti({
    particleCount: 90,
    spread: 70,
    startVelocity: 38,
    origin: { y: 0.6 },
    colors: palette,
    scalar: 1,
  });
}

export function fireworksConfetti(duration = 3000) {
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 60,
      origin: { x: 0 },
      colors: palette,
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 60,
      origin: { x: 1 },
      colors: palette,
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

export function heartConfetti() {
  const heart = confetti.shapeFromText({ text: "❤️", scalar: 3 });
  confetti({
    particleCount: 40,
    spread: 90,
    startVelocity: 30,
    shapes: [heart],
    scalar: 2.2,
    origin: { y: 0.55 },
  });
}