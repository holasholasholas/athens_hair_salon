"use client";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.5,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.1,
      ease: [0, 0.55, 0.45, 1] as const,
    },
  },
};

export default function HeroSection() {
  const [hovered, setHovered] = useState(false);

  const handleScroll = (target: string) => {
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* === LAYER 1: Marble texture — very subtle ghosted backdrop === */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/hero_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />

      {/* === LAYER 2: Video loop — blurs on hover to reduce distraction === */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-[1]"
        src="/Model_hair_morphing_202604141407.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          objectPosition: "center top",
          filter: hovered ? "blur(10px)" : "blur(0px)",
          transition: "filter 0.6s ease",
          transform: "scale(1.04)", // prevents blur edge bleed-through
        }}
      />

      {/* === LAYER 3: Soft gradient overlay — text legibility without killing brightness === */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,8,5,0.28) 0%, rgba(10,8,5,0.18) 40%, rgba(10,8,5,0.40) 100%)",
        }}
      />

      {/* === LAYER 4: Subtle vignette at edges === */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.20) 100%)",
        }}
      />

      {/* Decorative gold corner lines */}
      <div className="absolute top-24 left-8 w-16 h-16 border-t border-l border-[#D4AF37]/60 z-[3] hidden lg:block" />
      <div className="absolute top-24 right-8 w-16 h-16 border-t border-r border-[#D4AF37]/60 z-[3] hidden lg:block" />
      <div className="absolute bottom-16 left-8 w-16 h-16 border-b border-l border-[#D4AF37]/60 z-[3] hidden lg:block" />
      <div className="absolute bottom-16 right-8 w-16 h-16 border-b border-r border-[#D4AF37]/60 z-[3] hidden lg:block" />

      {/* === LAYER 5: Content === */}
      <motion.div
        className="relative z-[4] text-center px-6 max-w-3xl mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Pre-title */}
        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.6em",
            textTransform: "uppercase",
            color: "#D4AF37",
            fontWeight: 400,
            marginBottom: "1.5rem",
          }}
        >
          Est. 2015 &nbsp;·&nbsp; Luxury Hair Studio
        </motion.p>

        {/* Main wordmark */}
        <motion.h1
          variants={fadeUp}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(4.5rem, 12vw, 9rem)",
            letterSpacing: "0.3em",
            color: "#D4AF37",
            fontWeight: 300,
            lineHeight: 1,
            textTransform: "uppercase",
            textShadow: "0 4px 60px rgba(212,175,55,0.35), 0 2px 20px rgba(0,0,0,0.5)",
          }}
        >
          Athens
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-4 my-6"
        >
          <div className="h-px w-24 bg-[#D4AF37]/70" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
          <div className="h-px w-24 bg-[#D4AF37]/70" />
        </motion.div>

        {/* Subtitle — now white for contrast against dark video */}
        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1rem, 3vw, 1.4rem)",
            letterSpacing: "0.2em",
            color: "rgba(253,253,253,0.88)",
            fontWeight: 300,
            fontStyle: "italic",
            marginBottom: "3rem",
          }}
        >
          Where every strand is a masterpiece
        </motion.p>

        {/* CTA */}
        <motion.div variants={fadeUp}>
          <button
            onClick={() => handleScroll("#booking")}
            className="btn-gold"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              color: "#D4AF37",
              borderColor: "#D4AF37",
            }}
          >
            Experience the Art of Hair
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeUp}
          className="mt-16 flex flex-col items-center gap-2"
          style={{ opacity: 0.6 }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-px h-8 bg-[#D4AF37]/60"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
