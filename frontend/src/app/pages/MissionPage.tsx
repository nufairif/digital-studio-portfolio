import { motion } from "motion/react";
import { mission } from "../data/ptsup";
import { AboutSectionLayout } from "../components/AboutSectionLayout";

export function MissionPage() {
  return (
    <AboutSectionLayout
      eyebrow="Tentang Kami"
      title="Misi PT Swadharma Utama Prima"
      accent="#1A8B9D"
    >
      <section style={{ padding: "4rem 2.5rem 6rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2rem 4rem",
          }}
          className="mission-grid"
        >
          {mission.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.75rem",
                  color: "#FF6600",
                  flexShrink: 0,
                  marginTop: "0.2rem",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.95rem",
                  color: "#6B6B6B",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .mission-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </AboutSectionLayout>
  );
}