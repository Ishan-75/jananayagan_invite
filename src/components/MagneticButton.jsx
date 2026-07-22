import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  onClick,
  className = "",
  variant = "gold",
  disabled = false,
  ...props
}) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const variants = {
    gold: "bg-gradient-to-r from-gold to-rose text-void shadow-glow",
    outline: "border border-gold/60 text-cream hover:bg-gold/10",
    accent: "bg-gradient-to-r from-accent to-rose text-void shadow-glowAccent",
  };

  function handleMove(e) {
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
    setPos({ x, y });
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
      whileTap={{ scale: disabled ? 1 : 0.94 }}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`relative px-8 py-4 rounded-full font-body font-semibold tracking-wide btn-magnetic active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}