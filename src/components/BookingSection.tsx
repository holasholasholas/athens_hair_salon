"use client";
import { useState } from "react";
import type { CSSProperties, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";

const services = [
  "Cuts & Styling",
  "Balayage",
  "Full Head Colour",
  "Root Retouch",
  "Keratin Treatment",
  "Scalp Therapy",
  "Bond Repair",
  "Bridal Updo",
  "Deep Hydration",
  "Signature Athens Ritual",
];

const inputStyle: CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  border: "1px solid rgba(212,175,55,0.35)",
  background: "transparent",
  outline: "none",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.85rem",
  fontWeight: 300,
  color: "#2C2C2C",
  letterSpacing: "0.05em",
  transition: "border-color 0.3s",
};

export default function BookingSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    notes: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="booking"
      className="section-pad relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #1a1710 0%, #2C2C2C 60%, #1a1710 100%)",
      }}
    >
      {/* Background decorative text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "32vw",
            color: "rgba(212,175,55,0.035)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            userSelect: "none",
          }}
        >
          Book
        </span>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
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
            Reservations
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "0.15em",
              color: "#F9F6EE",
              fontWeight: 400,
            }}
          >
            Book Your Visit
          </h2>
          <div className="gold-divider" />
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.85rem",
              color: "#999",
              fontWeight: 300,
              lineHeight: 1.8,
            }}
          >
            Reserve your appointment with Athens. A member of our team will 
            confirm your booking within 24 hours.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <div
              className="w-16 h-16 rounded-full border border-[#D4AF37] flex items-center justify-center mx-auto mb-6"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12L10 17L19 7" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "2rem",
                color: "#F9F6EE",
                letterSpacing: "0.15em",
                fontWeight: 400,
                marginBottom: "1rem",
              }}
            >
              Request Received
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                color: "#999",
                fontWeight: 300,
                lineHeight: 1.8,
              }}
            >
              Thank you, {form.name}. We'll be in touch within 24 hours to confirm your appointment.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "#D4AF37",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  style={{ ...inputStyle, color: "#F9F6EE" }}
                  onFocus={(e) => (e.target.style.borderColor = "#D4AF37")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(212,175,55,0.35)")}
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "#D4AF37",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+61 000 000 000"
                  style={{ ...inputStyle, color: "#F9F6EE" }}
                  onFocus={(e) => (e.target.style.borderColor = "#D4AF37")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(212,175,55,0.35)")}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#D4AF37",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                style={{ ...inputStyle, color: "#F9F6EE" }}
                onFocus={(e) => (e.target.style.borderColor = "#D4AF37")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(212,175,55,0.35)")}
              />
            </div>

            {/* Service & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="service"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "#D4AF37",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    color: form.service ? "#F9F6EE" : "#888",
                    appearance: "none",
                    cursor: "pointer",
                    background: "transparent",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#D4AF37")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(212,175,55,0.35)")}
                >
                  <option value="" style={{ background: "#2C2C2C" }}>Select a service</option>
                  {services.map((s) => (
                    <option key={s} value={s} style={{ background: "#2C2C2C", color: "#F9F6EE" }}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="date"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "#D4AF37",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Preferred Date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  required
                  value={form.date}
                  onChange={handleChange}
                  style={{ ...inputStyle, color: form.date ? "#F9F6EE" : "#888", colorScheme: "dark" }}
                  onFocus={(e) => (e.target.style.borderColor = "#D4AF37")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(212,175,55,0.35)")}
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label
                htmlFor="notes"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#D4AF37",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Notes (Optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                value={form.notes}
                onChange={handleChange}
                placeholder="Tell us about your hair goals, inspiration, or any questions..."
                style={{ ...inputStyle, color: "#F9F6EE", resize: "vertical" }}
                onFocus={(e) => (e.target.style.borderColor = "#D4AF37")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(212,175,55,0.35)")}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn-gold-filled w-full"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.3em",
                padding: "18px 40px",
                marginTop: "0.5rem",
              }}
            >
              Request Appointment
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
