import { motion } from "motion/react";
import { Link } from "react-router";
import { company, privacyPolicy } from "../data/ptsup";

export function PrivacyPage() {
  return (
    <main style={{ paddingTop: "4.5rem" }}>
      <section
        style={{
          padding: "5rem 2.5rem 3rem",
          borderBottom: "1px solid #E0E0E0",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
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
            Legal
          </span>
          <h1
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#1A1A1A",
              margin: "0 0 1rem",
              letterSpacing: "-0.03em",
            }}
          >
            Kebijakan Privasi
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.9rem",
              color: "#6B6B6B",
              margin: 0,
            }}
          >
            Terakhir diperbarui: {privacyPolicy.updated}
          </p>
        </motion.div>
      </section>

      <section
        style={{
          padding: "3rem 2.5rem 6rem",
          maxWidth: "760px",
        }}
      >
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1rem",
            color: "#1A1A1A",
            lineHeight: 1.8,
            margin: "0 0 2.5rem",
          }}
        >
          Kebijakan Privasi ini menjelaskan bagaimana {company.name} mengumpulkan,
          menggunakan, menyimpan, dan melindungi informasi pribadi pengguna saat
          menggunakan situs web kami. Dengan menggunakan layanan kami, Anda dianggap
          telah membaca dan menyetujui kebijakan ini.
        </p>

        {privacyPolicy.sections.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            style={{ marginBottom: "2rem" }}
          >
            <h2
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
                fontSize: "1.25rem",
                color: "#1A1A1A",
                margin: "0 0 0.75rem",
              }}
            >
              {section.title}
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.95rem",
                color: "#6B6B6B",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              {section.content}
            </p>
          </motion.div>
        ))}

        <div
          style={{
            marginTop: "3rem",
            padding: "1.5rem",
            background: "#F5F5F5",
            borderRadius: "0.75rem",
            border: "1px solid #E0E0E0",
          }}
        >
          <h3
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              margin: "0 0 0.75rem",
            }}
          >
            Hubungi Kami
          </h3>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.9rem",
              color: "#6B6B6B",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {company.name}
            <br />
            Email: {company.email}
            <br />
            Telepon: {company.phone}
            <br />
            {company.address}
          </p>
        </div>

        <Link
          to="/contact"
          style={{
            display: "inline-block",
            marginTop: "2rem",
            fontFamily: "'DM Sans', sans-serif",
            color: "#FF6600",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          ← Kembali ke Kontak
        </Link>
      </section>
    </main>
  );
}