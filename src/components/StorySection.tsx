"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function StorySection() {
  return (
    <section id="story" className="section-pad px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Image */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="relative"
        >
          <div
            className="relative overflow-hidden"
            style={{ border: "1px solid #D4AF37" }}
          >
            <Image
              src="/salon_interior.png"
              alt="Athens Hair Salon — Minimalist luxury interior"
              width={700}
              height={520}
              className="w-full h-[420px] lg:h-[520px] object-cover"
            />
          </div>
          {/* Offset gold frame */}
          <div
            className="absolute -bottom-4 -right-4 w-full h-full border border-[#D4AF37]/30 hidden lg:block"
            style={{ zIndex: -1 }}
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.5em",
              color: "#D4AF37",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Our Story
          </motion.p>

          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              letterSpacing: "0.12em",
              color: "#2C2C2C",
              fontWeight: 400,
              lineHeight: 1.2,
              marginBottom: "1.5rem",
            }}
          >
            The Art of<br />Refined Beauty
          </motion.h2>

          <motion.div variants={fadeUp} className="gold-divider" style={{ margin: "0 0 2rem 0" }} />

          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.95rem",
              lineHeight: 1.9,
              color: "#555",
              fontWeight: 300,
              marginBottom: "1.5rem",
            }}
          >
            Founded on the belief that exceptional hair is a form of artistry, Athens was born 
            from a desire to create something truly different — a sanctuary where technique meets 
            intuition, and where every client leaves feeling elevated.
          </motion.p>

          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.95rem",
              lineHeight: 1.9,
              color: "#555",
              fontWeight: 300,
              marginBottom: "2.5rem",
            }}
          >
            Our atelier is a curated space of white marble and soft gold — an environment 
            designed to inspire calm and confidence. Each appointment is a private experience, 
            each result a bespoke creation.
          </motion.p>

          {/* Stats */}
          <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6">
            {[
              { num: "10+", label: "Years of Mastery" },
              { num: "5K+", label: "Transformations" },
              { num: "12", label: "Expert Stylists" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "2rem",
                    color: "#D4AF37",
                    fontWeight: 400,
                    letterSpacing: "0.05em",
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.65rem",
                    color: "#888",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    marginTop: "0.25rem",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
