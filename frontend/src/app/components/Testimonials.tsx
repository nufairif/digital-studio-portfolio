import { motion } from "motion/react";
import { testimonials } from "../data/ptsup";

export function Testimonials() {
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
        style={{ marginBottom: "3rem", textAlign: "center" }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
            color: "#FF6600",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            display: "block",
            marginBottom: "0.75rem",
          }}
        >
          Testimoni
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
          Apa Pendapat Klien tentang Kami?
        </h2>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {testimonials.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            style={{
              border: "1px solid #E0E0E0",
              borderRadius: "0.75rem",
              padding: "2rem",
            }}
          >
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.92rem",
                color: "#6B6B6B",
                lineHeight: 1.75,
                margin: "0 0 1.5rem",
                fontStyle: "italic",
              }}
            >
              "{item.quote}"
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "#1A1A1A",
                }}
              >
                {item.name}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}