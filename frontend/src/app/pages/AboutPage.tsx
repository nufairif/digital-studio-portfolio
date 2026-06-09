import { motion } from "motion/react";
import { Link } from "react-router";
import {
  values,
  clientLogos,
  company,
  stats,
} from "../data/ptsup";
import { AboutSectionLayout } from "../components/AboutSectionLayout";

export function AboutPage() {
  return (
    <AboutSectionLayout
      eyebrow={`Est. ${company.founded.split(" ").pop()}`}
      title={
        <>
          Mitra terpercaya
          <br />
          <em style={{ fontStyle: "italic", color: "#FF6600" }}>transformasi</em>
          <br />
          bisnis Anda.
        </>
      }
    >
      <section
        style={{
          padding: "3rem 2.5rem 4rem",
          borderBottom: "1px solid #E0E0E0",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
          className="two-col"
        >
          {company.about.map((paragraph, i) => (
            <motion.p
              key={paragraph}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.7 }}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: "1.05rem",
                color: i === 0 ? "#1A1A1A" : "#6B6B6B",
                lineHeight: 1.75,
                margin: 0,
                gridColumn: i === 2 ? "1 / -1" : undefined,
                maxWidth: i === 2 ? "900px" : undefined,
              }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          height: "60vh",
          overflow: "hidden",
          background: "#F5F5F5",
        }}
      >
        <img
          src="https://ptsup.co.id/wp-content/uploads/2025/01/SUP-1-scaled.png"
          alt="PT Swadharma Utama Prima"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </motion.div>

      <section
        style={{
          padding: "5rem 2.5rem",
          borderBottom: "1px solid #E0E0E0",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2rem",
          }}
          className="stats-grid"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              style={{
                borderLeft: "1px solid #E0E0E0",
                paddingLeft: "2rem",
              }}
            >
              <div
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.5rem, 4vw, 4rem)",
                  color: "#1A1A1A",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.85rem",
                  color: "#6B6B6B",
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        style={{
          padding: "6rem 2.5rem",
          borderBottom: "1px solid #E0E0E0",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "4rem" }}
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
            Keunggulan Kami
          </span>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
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
            gap: "2.5rem 3rem",
          }}
          className="values-grid"
        >
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "0.75rem",
                }}
              >
                <span style={{ color: "#FF6600", fontSize: "0.5rem" }}>✦</span>
                <h3
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    color: "#1A1A1A",
                    margin: 0,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {value.title}
                </h3>
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.9rem",
                  color: "#6B6B6B",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        style={{
          padding: "5rem 2.5rem",
          borderBottom: "1px solid #E0E0E0",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "3rem" }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              color: "#6B6B6B",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "block",
            }}
          >
            Trusted By
          </span>
        </motion.div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "1rem",
          }}
          className="clients-grid"
        >
          {clientLogos.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.5 }}
              style={{
                border: "1px solid #E0E0E0",
                borderRadius: "0.5rem",
                padding: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "72px",
                background: "#FAFAFA",
              }}
            >
              <img
                src={client.image}
                alt={client.name}
                title={client.name}
                loading="lazy"
                style={{
                  maxWidth: "100%",
                  maxHeight: "40px",
                  objectFit: "contain",
                }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      <section
        style={{
          padding: "6rem 2.5rem",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              color: "#1A1A1A",
              margin: "0 0 2rem",
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            Siap transformasi digital?
          </h2>
          <Link
            to="/contact"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "0.9rem",
              color: "#FFFFFF",
              background: "#FF6600",
              borderRadius: "2rem",
              padding: "0.9rem 2.5rem",
              textDecoration: "none",
              display: "inline-block",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.85";
              e.currentTarget.style.transform = "scale(0.97)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Hubungi Kami →
          </Link>
        </motion.div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .two-col { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .values-grid { grid-template-columns: 1fr 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .clients-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .values-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr !important; }
          .clients-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </AboutSectionLayout>
  );
}