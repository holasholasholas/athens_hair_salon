"use client";

export default function MobileActionBar() {
  const handleCall = () => {
    window.location.href = "tel:+61398765432";
  };

  const handleBook = () => {
    const el = document.querySelector("#booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="mobile-action-bar"
      className="fixed bottom-0 left-0 right-0 z-50 flex lg:hidden"
      style={{
        borderTop: "1px solid rgba(212,175,55,0.3)",
        boxShadow: "0 -4px 30px rgba(0,0,0,0.12)",
      }}
    >
      {/* Call */}
      <button
        onClick={handleCall}
        className="flex-1 flex items-center justify-center gap-2 py-4"
        style={{
          background: "#2C2C2C",
          color: "#D4AF37",
          border: "none",
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.7rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          cursor: "pointer",
          borderRight: "1px solid rgba(212,175,55,0.2)",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
        Call Us
      </button>

      {/* Book */}
      <button
        onClick={handleBook}
        className="flex-1 flex items-center justify-center gap-2 py-4"
        style={{
          background: "#D4AF37",
          color: "white",
          border: "none",
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.7rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          cursor: "pointer",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        Book Now
      </button>
    </div>
  );
}
