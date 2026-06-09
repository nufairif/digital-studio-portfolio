import { motion } from "motion/react";
import { values } from "../data/ptsup";

export function Keunggulan() {
  return (
    <section
      style={{
        padding: "6rem 2.5rem",
        borderTop: "1px solid #E0E0E0",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: "3.5rem" }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
            color: "#1A8B9D",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            display: "block",
            marginBottom: "0.75rem",
          }}
        >
          Keunggulan Kami
        </span>
        <h2
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "#1A1A1A",
            margin: 0,
            letterSpacing: "-0.03em",
          }}
        >
          Mengapa Memilih Kami?
        </h2>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2.5rem",
        }}
        className="keunggulan-grid"
      >
        {values.map((value, i) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
          >
            <span style={{ color: "#FF6600", fontSize: "0.5rem" }}>✦</span>
            <h3
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
                fontSize: "1.1rem",
                color: "#1A1A1A",
                margin: "0.5rem 0",
                letterSpacing: "-0.02em",
              }}
            >
              {value.title}
            </h3>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.88rem",
                color: "#6B6B6B",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .keunggulan-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .keunggulan-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}