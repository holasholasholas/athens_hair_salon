"use client";
import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#FDFDFD]"
    >
      {/* Subtle Marble Texture overlay on preloader */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "url('/hero_bg.png')", backgroundSize: 'cover' }}
      />
      
      <div className="relative text-center">
        {/* Animated Gold Ring */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "linear",
          }}
          className="w-16 h-16 border border-[#D4AF37]/20 border-t-[#D4AF37] rounded-full mx-auto"
        />
        
        {/* Logo/Name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6"
        >
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.5rem",
              letterSpacing: "0.4em",
              color: "#D4AF37",
              textTransform: "uppercase",
            }}
          >
            Athens
          </span>
          <div
            className="h-px bg-[#D4AF37]/40 w-8 mx-auto mt-2"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
