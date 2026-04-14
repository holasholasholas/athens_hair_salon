"use client";
import { motion } from "framer-motion";

const services = [
  {
    category: "Cuts & Styling",
    icon: "✦",
    items: [
      { name: "Master Stylist Cut & Finish", price: "From $180" },
      { name: "Senior Stylist Cut & Finish", price: "From $140" },
      { name: "Precision Fringe Refine", price: "$45" },
      { name: "Blow-Dry & Set", price: "From $80" },
      { name: "Bridal Updo & Styling", price: "From $250" },
    ],
  },
  {
    category: "Technical Colour",
    icon: "◈",
    items: [
      { name: "Bespoke Balayage", price: "From $280" },
      { name: "Full Head Colour", price: "From $180" },
      { name: "Root Retouch", price: "From $120" },
      { name: "Toning & Gloss Treatment", price: "From $90" },
      { name: "Colour Correction", price: "From $350" },
    ],
  },
  {
    category: "Treatments",
    icon: "❋",
    items: [
      { name: "Keratin Smoothing Ritual", price: "From $320" },
      { name: "Scalp Therapy & Detox", price: "From $110" },
      { name: "Bond Repair Treatment", price: "From $85" },
      { name: "Deep Hydration Masque", price: "From $65" },
      { name: "Signature Athens Ritual", price: "From $195" },
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="section-pad relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FDFDFD 0%, #F9F6EE 100%)" }}
    >
      {/* Background watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ zIndex: 0 }}
      >
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "28vw",
            color: "rgba(212,175,55,0.04)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            userSelect: "none",
          }}
        >
          Athens
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.5em",
              color: "#D4AF37",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Our Services
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "0.15em",
              color: "#2C2C2C",
              fontWeight: 400,
            }}
          >
            The Portfolio
          </h2>
          <div className="gold-divider" />
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9rem",
              color: "#777",
              fontWeight: 300,
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            Every service is performed with meticulous care, using only the finest
            professional-grade products sourced from around the world.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.category}
              /* INLINED ANIMATION: No Variants or custom type checking needed */
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.15 }}
              className="bg-white p-10"
              style={{
                border: "1px solid rgba(212,175,55,0.25)",
                boxShadow: "0 4px 40px rgba(212,175,55,0.06)",
              }}
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <span
                  style={{
                    color: "#D4AF37",
                    fontSize: "1.2rem",
                    display: "block",
                    marginBottom: "0.75rem",
                  }}
                >
                  {service.icon}
                </span>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.3rem",
                    letterSpacing: "0.2em",
                    color: "#2C2C2C",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  {service.category}
                </h3>
                <div className="h-px w-12 bg-[#D4AF37] mx-auto mt-4" />
              </div>

              {/* Service Items */}
              <div className="space-y-0">
                {service.items.map((item, idx) => (
                  <div key={item.name}>
                    <div className="flex justify-between items-baseline py-4">
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.82rem",
                          color: "#2C2C2C",
                          fontWeight: 300,
                          letterSpacing: "0.05em",
                        }}
                      >
                        {item.name}
                      </span>
                      <span
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "0.95rem",
                          color: "#D4AF37",
                          fontWeight: 400,
                          whiteSpace: "nowrap",
                          marginLeft: "1rem",
                        }}
                      >
                        {item.price}
                      </span>
                    </div>
                    {idx < service.items.length - 1 && (
                      <div className="h-px w-full bg-[#D4AF37]/15" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.7rem",
            color: "#aaa",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Prices are indicative. A full consultation will be provided at your appointment.
        </motion.p>
      </div>
    </section>
  );
}