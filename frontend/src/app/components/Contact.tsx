import { motion } from "motion/react";
import { ContactForm, ContactInfo } from "./ContactForm";

export function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "6rem 2.5rem",
        borderTop: "1px solid #E0E0E0",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "start",
        }}
        className="contact-home-grid"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
            Hubungi Kami
          </span>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
              color: "#1A1A1A",
              margin: "0 0 2rem",
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            Siap Transformasi
            <br />
            <em style={{ fontStyle: "italic", color: "#FF6600" }}>Digital</em>?
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "0.95rem",
              color: "#6B6B6B",
              lineHeight: 1.7,
              marginBottom: "3rem",
            }}
          >
            Konsultasi gratis dengan tim ahli kami. Diskusikan kebutuhan bisnis Anda
            untuk efisiensi yang lebih baik hari ini.
          </p>
          <ContactInfo />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <ContactForm compact />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-home-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}