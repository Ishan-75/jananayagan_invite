import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import MagneticButton from "./MagneticButton";
import SectionShell from "./SectionShell";

const checklist = ["Smile", "Enjoy", "Fighting", "Create memories", "Have fun"];

export default function DateAgreement({ onNext, step, total }) {
  const canvasRef = useRef(null);
  const drawing = useRef(false);
  const hasSigned = useRef(false);
  const [checked, setChecked] = useState([]);
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#F4C542";
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
  }, []);

  function getPos(e, canvas) {
    const rect = canvas.getBoundingClientRect();
    const point = e.touches ? e.touches[0] : e;
    return { x: point.clientX - rect.left, y: point.clientY - rect.top };
  }

  function start(e) {
    drawing.current = true;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { x, y } = getPos(e, canvas);
    ctx.beginPath();
    ctx.moveTo(x, y);
  }

  function move(e) {
    if (!drawing.current) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { x, y } = getPos(e, canvas);
    ctx.lineTo(x, y);
    ctx.stroke();
    if (!hasSigned.current) {
      hasSigned.current = true;
      setSigned(true);
    }
  }

  function end() {
    drawing.current = false;
  }

  function clearSignature() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hasSigned.current = false;
    setSigned(false);
  }

  function toggle(item) {
    setChecked((c) => (c.includes(item) ? c.filter((x) => x !== item) : [...c, item]));
  }

  const allChecked = checked.length === checklist.length;

  return (
    <SectionShell step={step} total={total}>
      <p className="font-script text-2xl text-rose mb-2">make it official</p>
      <h2 className="font-display text-2xl md:text-3xl text-cream mb-6 text-center">
        Date Agreement
      </h2>

      <GlassCard className="w-full max-w-sm p-6 md:p-8" glow="gold">
        <p className="font-body text-cream/80 text-sm mb-4">
          I, <span className="font-script text-gold text-lg">Suganthi</span>, agree to:
        </p>
        <div className="flex flex-col gap-2 mb-6">
          {checklist.map((item) => (
            <button
              key={item}
              onClick={() => toggle(item)}
              className="flex items-center gap-3 text-left"
            >
              <span
                className={`w-5 h-5 rounded-md border flex items-center justify-center text-xs shrink-0 transition-colors ${
                  checked.includes(item)
                    ? "bg-gold border-gold text-void"
                    : "border-white/30 text-transparent"
                }`}
              >
                ✓
              </span>
              <span className="text-cream/85 font-body text-sm">{item}</span>
            </button>
          ))}
        </div>

        <p className="font-body text-cream/60 text-xs mb-2">Sign below with your finger / mouse:</p>
        <canvas
          ref={canvasRef}
          width={280}
          height={110}
          className="w-full rounded-xl bg-white/5 border border-white/10 touch-none"
          onMouseDown={start}
          onMouseMove={move}
          onMouseUp={end}
          onMouseLeave={end}
          onTouchStart={start}
          onTouchMove={move}
          onTouchEnd={end}
        />
        <button
          onClick={clearSignature}
          className="mt-2 text-xs text-cream/40 hover:text-cream/70 font-body underline"
        >
          Clear signature
        </button>
      </GlassCard>

      <motion.div
        animate={{ opacity: allChecked && signed ? 1 : 0.4 }}
        className="mt-8"
      >
        <MagneticButton onClick={onNext} disabled={!(allChecked && signed)}>
          {allChecked && signed ? "Seal the agreement →" : "Check all + sign to continue"}
        </MagneticButton>
      </motion.div>
    </SectionShell>
  );
}