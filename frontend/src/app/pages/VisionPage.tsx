import { motion } from "motion/react";
import { vision } from "../data/ptsup";
import { AboutSectionLayout } from "../components/AboutSectionLayout";

export function VisionPage() {
  return (
    <AboutSectionLayout
      eyebrow="Tentang Kami"
      title="Visi PT Swadharma Utama Prima"
    >
      <section style={{ padding: "4rem 2.5rem 6rem" }}>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
            color: "#1A1A1A",
            lineHeight: 1.75,
            margin: 0,
            maxWidth: "900px",
          }}
        >
          {vision}
        </motion.p>
      </section>
    </AboutSectionLayout>
  );
}