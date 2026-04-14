"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function FloatingBookBtn() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const el = document.querySelector("#booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          id="floating-book-btn"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          onClick={handleClick}
          className="fixed bottom-8 right-8 z-50 hidden lg:flex items-center gap-3"
          style={{
            background: "#D4AF37",
            color: "white",
            border: "none",
            padding: "16px 28px",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            cursor: "pointer",
            boxShadow: "0 4px 30px rgba(212,175,55,0.4)",
            transition: "background 0.3s, box-shadow 0.3s",
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 6px 40px rgba(212,175,55,0.6)",
          }}
          whileTap={{ scale: 0.97 }}
        >
          {/* Pulse ring */}
          <span className="relative flex h-2 w-2">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ background: "rgba(255,255,255,0.6)" }}
            />
            <span
              className="relative inline-flex rounded-full h-2 w-2"
              style={{ background: "white" }}
            />
          </span>
          Book Now
        </motion.button>
      )}
    </AnimatePresence>
  );
}
