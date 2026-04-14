"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import BeforeAfterSlider from "./BeforeAfterSlider";

const galleryItems = [
  {
    type: "image",
    src: "/salon_interior.png",
    alt: "Athens Salon — Luxury Interior",
    featured: true,
    tall: true,
  },
  {
    type: "before-after",
    before: "/gallery_balayage.png",
    after: "/gallery_color.png",
    alt: "Balayage Transformation",
    featured: true,
  },
  {
    type: "image",
    src: "/gallery_cut.png",
    alt: "Precision Cut — Athens Studio",
    featured: false,
  },
  {
    type: "image",
    src: "/gallery_tools.png",
    alt: "Our Professional Tool Collection",
    featured: false,
    tall: false,
  },
  {
    type: "image",
    src: "/gallery_reception.png",
    alt: "Athens Studio — The Atelier",
    featured: true,
  },
  {
    type: "image",
    src: "/gallery_color.png",
    alt: "Colour Artistry",
    featured: false,
    tall: true,
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="section-pad px-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
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
          Our Work
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
          The Gallery
        </h2>
        <div className="gold-divider" />
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.9rem",
            color: "#777",
            fontWeight: 300,
            maxWidth: "440px",
            margin: "0 auto",
            lineHeight: 1.8,
          }}
        >
          Drag the slider on our colour transformations to witness the Athens difference.
        </p>
      </motion.div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
        {galleryItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className="break-inside-avoid overflow-hidden group"
            style={
              item.featured
                ? { border: "1px solid #D4AF37" }
                : { border: "1px solid transparent" }
            }
          >
            {item.type === "before-after" ? (
              <BeforeAfterSlider
                beforeSrc={item.before!}
                afterSrc={item.after!}
                beforeAlt={`Before — ${item.alt}`}
                afterAlt={`After — ${item.alt}`}
              />
            ) : (
              <div className="relative overflow-hidden" style={{ aspectRatio: item.tall ? "3/4" : "4/3" }}>
                <Image
                  src={item.src!}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/10 transition-all duration-500" />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Testimonial strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {[
          {
            quote: "Athens transformed not just my hair, but my entire sense of self. Pure artistry.",
            name: "Sophia L.",
          },
          {
            quote: "The most bespoke salon experience I've ever had. Every detail is considered.",
            name: "Isabelle M.",
          },
          {
            quote: "My balayage looks effortlessly sun-kissed. I've never received so many compliments.",
            name: "Charlotte T.",
          },
        ].map((t, i) => (
          <div
            key={i}
            className="text-center p-8"
            style={{
              background: "white",
              borderTop: "2px solid #D4AF37",
              boxShadow: "0 2px 20px rgba(212,175,55,0.06)",
            }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.05rem",
                fontStyle: "italic",
                color: "#2C2C2C",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
                fontWeight: 400,
              }}
            >
              "{t.quote}"
            </p>
            <div className="h-px w-10 bg-[#D4AF37] mx-auto mb-3" />
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#D4AF37",
              }}
            >
              {t.name}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
