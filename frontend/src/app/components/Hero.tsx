import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";

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
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "8rem 2.5rem 5rem",
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
            "radial-gradient(circle, rgba(200,255,71,0.06) 0%, transparent 70%)",
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
            background: "#C8FF47",
            display: "inline-block",
            boxShadow: "0 0 8px #C8FF47",
          }}
        />
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.72rem",
            color: "#888480",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Available for projects - 2026
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
            color: "#EDEAE4",
            margin: 0,
            maxWidth: "1100px",
          }}
        >
          We craft{" "}
          <em style={{ fontStyle: "italic", color: "#C8FF47", fontWeight: 700 }}>
            digital
          </em>
          <br />
          experiences
          <br />
          that matter.
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
              color: "#888480",
              lineHeight: 1.6,
              maxWidth: "380px",
              margin: 0,
            }}
          >
            A multidisciplinary design and development studio building ambitious
            digital products for forward-thinking brands.
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
        <Link
          to="/work"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
            fontSize: "0.875rem",
            letterSpacing: "0.05em",
            color: "#EDEAE4",
            background: "none",
            border: "1px solid rgba(237,234,228,0.2)",
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
            (e.currentTarget.style.borderColor = "rgba(237,234,228,0.6)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.borderColor = "rgba(237,234,228,0.2)")
          }
        >
          View Work ↓
        </Link>
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
            background: "linear-gradient(to bottom, #C8FF47, transparent)",
          }}
        />
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem",
            color: "#888480",
            letterSpacing: "0.1em",
            writingMode: "vertical-rl",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
