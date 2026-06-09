import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { company } from "../data/ptsup";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
      const glow = el.querySelector<HTMLElement>(".hero-glow");
      if (glow) glow.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "6rem 2.5rem 8rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="hero-glow"
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          width: "60vw",
          height: "60vw",
          background:
            "radial-gradient(circle, rgba(255,102,0,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          transform: "translateX(-50%)",
          pointerEvents: "none",
          transition: "transform 0.8s ease",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          marginBottom: "3rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#FF6600",
            display: "inline-block",
            boxShadow: "0 0 8px #FF6600",
          }}
        />
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.72rem",
            color: "#6B6B6B",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {company.tagline}
        </span>
      </motion.div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(3.5rem, 9vw, 9rem)",
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            color: "#1A1A1A",
            margin: 0,
            maxWidth: "1100px",
          }}
        >
          Solusi untuk
          <br />
          <em style={{ fontStyle: "italic", color: "#FF6600", fontWeight: 700 }}>
            transformasi
          </em>
          <br />
          bisnis Anda.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            marginTop: "3rem",
            maxWidth: "1100px",
          }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)",
              color: "#6B6B6B",
              lineHeight: 1.6,
              maxWidth: "380px",
              margin: 0,
            }}
          >
            {company.description}
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute",
          right: "6.5rem",
          bottom: "5.5rem",
          zIndex: 2,
        }}
      >
        <a
          href="#work"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
            fontSize: "0.875rem",
            letterSpacing: "0.05em",
            color: "#1A1A1A",
            background: "none",
            border: "1px solid #E0E0E0",
            borderRadius: "2rem",
            padding: "0.8rem 2rem",
            cursor: "pointer",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            whiteSpace: "nowrap",
            transition: "border-color 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderColor = "#FF6600")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.borderColor = "#E0E0E0")
          }
        >
          Lihat Proyek ↓
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          right: "2.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: 1,
            height: "3rem",
            background: "linear-gradient(to bottom, #FF6600, transparent)",
          }}
        />
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem",
            color: "#6B6B6B",
            letterSpacing: "0.1em",
            writingMode: "vertical-rl",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-section {
            padding: 7rem 1.25rem 5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
