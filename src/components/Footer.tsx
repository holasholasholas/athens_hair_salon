"use client";
import { motion } from "framer-motion";

const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday – Friday", time: "9:00 AM – 7:00 PM" },
  { day: "Saturday", time: "8:30 AM – 6:00 PM" },
  { day: "Sunday", time: "10:00 AM – 4:00 PM" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#111", color: "#f0f0f0" }}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "2rem",
                letterSpacing: "0.35em",
                color: "#D4AF37",
                textTransform: "uppercase",
                fontWeight: 400,
                marginBottom: "0.5rem",
              }}
            >
              Athens
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.6rem",
                letterSpacing: "0.4em",
                color: "#888",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}
            >
              Hair Studio
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.82rem",
                fontWeight: 300,
                color: "#888",
                lineHeight: 1.9,
                marginBottom: "2rem",
              }}
            >
              A sanctuary for bespoke hair artistry. Where technique meets 
              intuition, and every visit is an experience.
            </p>
            {/* Socials */}
            <div className="flex gap-4">
              {["Instagram", "Facebook", "Pinterest"].map((social) => (
                <a
                  key={social}
                  href="#"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#888",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  className="hover:text-[#D4AF37]"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.6rem",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#D4AF37",
                marginBottom: "2rem",
              }}
            >
              Hours
            </h3>
            <div className="space-y-3">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between items-baseline">
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8rem",
                      color: "#888",
                      fontWeight: 300,
                    }}
                  >
                    {h.day}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "0.9rem",
                      color: h.time === "Closed" ? "#555" : "#f0f0f0",
                      fontWeight: 400,
                    }}
                  >
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Visit */}
          <div>
            <h3
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.6rem",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#D4AF37",
                marginBottom: "2rem",
              }}
            >
              Find Us
            </h3>
            <div className="space-y-3 mb-6">
              {[
                { label: "Address", value: "42 Marble Lane, Toorak VIC 3142" },
                { label: "Phone", value: "+61 3 9876 5432" },
                { label: "Email", value: "hello@athenshairstudio.com" },
              ].map((c) => (
                <div key={c.label}>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.58rem",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: "#555",
                      marginBottom: "2px",
                    }}
                  >
                    {c.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.82rem",
                      color: "#999",
                      fontWeight: 300,
                    }}
                  >
                    {c.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps embed with gold filter */}
            <div className="relative overflow-hidden mt-6" style={{ height: "160px" }}>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  filter: "grayscale(100%) sepia(30%) hue-rotate(4deg) brightness(0.7)",
                  zIndex: 0,
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.5271!2d144.9881!3d-37.8504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDUxJzAxLjQiUyAxNDTCsDU5JzE3LjIiRQ!5e0!3m2!1sen!2sau!4v1620000000000"
                  width="100%"
                  height="160"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Athens Hair Salon Location"
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  border: "1px solid rgba(212,175,55,0.4)",
                  zIndex: 1,
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid rgba(212,175,55,0.15)",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            color: "#555",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()} Athens Hair Studio. All rights reserved.
        </p>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.75rem",
            color: "#D4AF37",
            letterSpacing: "0.2em",
            opacity: 0.6,
            fontStyle: "italic",
          }}
        >
          Crafted with precision.
        </p>
      </div>
    </footer>
  );
}
