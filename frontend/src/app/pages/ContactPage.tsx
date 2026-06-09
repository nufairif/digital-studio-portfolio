import { motion } from "motion/react";
import { ContactForm, ContactInfo } from "../components/ContactForm";

export function ContactPage() {
  return (
    <main style={{ paddingTop: "4.5rem" }}>
      <section
        style={{
          padding: "5rem 2.5rem 4rem",
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
              color: "#FF6600",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            Hubungi Kami
          </span>
          <h1
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(3rem, 7vw, 6rem)",
              color: "#1A1A1A",
              margin: "0 0 1.5rem",
              letterSpacing: "-0.04em",
              lineHeight: 0.92,
            }}
          >
            Mari diskusikan
            <br />
            <em style={{ fontStyle: "italic", color: "#FF6600" }}>solusi</em> Anda
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "1rem",
              color: "#6B6B6B",
              lineHeight: 1.7,
              maxWidth: "520px",
              margin: 0,
            }}
          >
            Tim kami siap memberikan solusi yang Anda butuhkan. Isi formulir di bawah
            ini dan kami akan menghubungi Anda.
          </p>
        </motion.div>
      </section>

      <section style={{ padding: "4rem 2.5rem 6rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 380px",
            gap: "5rem",
            alignItems: "start",
          }}
          className="contact-page-grid"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h2
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
                fontSize: "1.5rem",
                color: "#1A1A1A",
                margin: "0 0 0.5rem",
              }}
            >
              Kirim Pesan
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem",
                color: "#6B6B6B",
                margin: "0 0 2rem",
              }}
            >
              Isi formulir di bawah ini dan tim kami akan menghubungi Anda.
            </p>
            <ContactForm />
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            style={{
              position: "sticky",
              top: "6rem",
              background: "#F5F5F5",
              border: "1px solid #E0E0E0",
              borderRadius: "0.75rem",
              padding: "2rem",
            }}
          >
            <h3
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
                fontSize: "1.15rem",
                color: "#1A1A1A",
                margin: "0 0 1.5rem",
              }}
            >
              Informasi Kontak
            </h3>
            <ContactInfo />
          </motion.aside>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-page-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}