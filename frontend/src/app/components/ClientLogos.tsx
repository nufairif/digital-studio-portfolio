import { motion } from "motion/react";
import { clientLogos } from "../data/ptsup";

export function ClientLogos() {
  const repeated = [...clientLogos, ...clientLogos];

  return (
    <section
      style={{
        padding: "3rem 0",
        borderTop: "1px solid #E0E0E0",
        borderBottom: "1px solid #E0E0E0",
        overflow: "hidden",
      }}
    >
      <div style={{ padding: "0 2.5rem", marginBottom: "1.5rem" }}>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
            color: "#6B6B6B",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Beberapa Klien Kami
        </span>
      </div>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ display: "inline-flex", gap: "3rem", alignItems: "center" }}
      >
        {repeated.map((client, i) => (
          <div
            key={`${client.name}-${i}`}
            style={{
              flexShrink: 0,
              height: "48px",
              display: "flex",
              alignItems: "center",
              opacity: 0.85,
            }}
          >
            <img
              src={client.image}
              alt={client.name}
              title={client.name}
              style={{
                height: "100%",
                width: "auto",
                maxWidth: "160px",
                objectFit: "contain",
                filter: "grayscale(20%)",
              }}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}