import { motion } from "motion/react";

const items = [
  "Brand Identity",
  "Web Design",
  "Motion Graphics",
  "UI/UX Design",
  "Digital Strategy",
  "Creative Direction",
  "Product Design",
  "Visual Systems",
];

export function Marquee() {
  const repeated = [...items, ...items, ...items];

  return (
    <div
      style={{
        borderTop: "1px solid rgba(237,234,228,0.08)",
        borderBottom: "1px solid rgba(237,234,228,0.08)",
        padding: "1.2rem 0",
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "relative",
      }}
    >
      <motion.div
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        style={{ display: "inline-flex", gap: 0 }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1.5rem",
              paddingRight: "1.5rem",
            }}
          >
            <span
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 500,
                fontSize: "0.875rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#888480",
              }}
            >
              {item}
            </span>
            <span style={{ color: "#C8FF47", fontSize: "0.6rem" }}>✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
