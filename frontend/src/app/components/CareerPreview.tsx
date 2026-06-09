import { motion } from "motion/react";
import { Link } from "react-router";
import { jobs, company } from "../data/ptsup";

export function CareerPreview() {
  const featured = jobs[0];

  return (
    <section
      style={{
        padding: "6rem 2.5rem",
        borderTop: "1px solid #E0E0E0",
        background: "#FAFAFA",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
        className="career-preview-grid"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              color: "#1A8B9D",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "0.75rem",
            }}
          >
            Bergabung Bersama Kami
          </span>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#1A1A1A",
              margin: "0 0 1rem",
              letterSpacing: "-0.03em",
            }}
          >
            Peluang Karir
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.95rem",
              color: "#6B6B6B",
              lineHeight: 1.7,
              margin: "0 0 2rem",
            }}
          >
            Jadilah bagian dari tim kami dan kembangkan karir Anda bersama perusahaan
            yang terus berkembang dengan budaya kerja positif dan inovatif.
          </p>
          <Link
            to="/karir"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "0.85rem",
              color: "#FFFFFF",
              background: "#FF6600",
              borderRadius: "2rem",
              padding: "0.75rem 1.75rem",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Lihat Semua Lowongan →
          </Link>
        </motion.div>

        {featured && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              border: "1px solid #E0E0E0",
              borderRadius: "0.75rem",
              padding: "2rem",
              background: "#FFFFFF",
            }}
          >
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.62rem",
                color: "#FF6600",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {featured.department} · {featured.type}
            </span>
            <h3
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
                fontSize: "1.35rem",
                color: "#1A1A1A",
                margin: "0.5rem 0",
              }}
            >
              {featured.title}
            </h3>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.88rem",
                color: "#6B6B6B",
                lineHeight: 1.6,
                margin: "0 0 1.25rem",
              }}
            >
              {featured.excerpt}
            </p>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.8rem",
                color: "#6B6B6B",
                marginBottom: "1.25rem",
              }}
            >
              {featured.location}
            </div>
            <Link
              to={`/karir/${featured.slug}`}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.85rem",
                color: "#FF6600",
                textDecoration: "none",
              }}
            >
              Lihat Detail →
            </Link>
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          marginTop: "2.5rem",
          padding: "1.75rem 2rem",
          border: "1px dashed #E0E0E0",
          borderRadius: "0.75rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              color: "#1A1A1A",
              marginBottom: "0.25rem",
            }}
          >
            Tidak menemukan posisi yang sesuai?
          </div>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.88rem",
              color: "#6B6B6B",
            }}
          >
            Kirimkan CV Anda dan kami akan menghubungi Anda.
          </div>
        </div>
        <a
          href={company.applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: "0.85rem",
            color: "#FFFFFF",
            background: "#1A8B9D",
            borderRadius: "2rem",
            padding: "0.7rem 1.5rem",
            textDecoration: "none",
          }}
        >
          Kirim CV
        </a>
      </motion.div>

      <style>{`
        @media (max-width: 800px) {
          .career-preview-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}