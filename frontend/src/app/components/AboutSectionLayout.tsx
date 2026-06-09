import type { ReactNode } from "react";
import { motion } from "motion/react";

type AboutSectionLayoutProps = {
  eyebrow: string;
  title: ReactNode;
  accent?: string;
  children: ReactNode;
};

export function AboutSectionLayout({
  eyebrow,
  title,
  accent = "#FF6600",
  children,
}: AboutSectionLayoutProps) {
  return (
    <main style={{ paddingTop: "4.5rem" }}>
      <section
        style={{
          padding: "5rem 2.5rem 3rem",
          borderBottom: "1px solid #E0E0E0",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              color: accent,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            {eyebrow}
          </span>
          <h1
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "#1A1A1A",
              margin: 0,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              maxWidth: "900px",
            }}
          >
            {title}
          </h1>
        </motion.div>
      </section>

      {children}
    </main>
  );
}