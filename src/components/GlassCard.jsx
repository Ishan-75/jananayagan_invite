import { motion } from "framer-motion";

export default function GlassCard({ children, className = "", glow = "gold", ...props }) {
  const glowMap = {
    gold: "hover:shadow-glow",
    rose: "hover:shadow-glowRose",
    accent: "hover:shadow-glowAccent",
  };
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`glass rounded-3xl transition-shadow duration-500 ${glowMap[glow]} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}