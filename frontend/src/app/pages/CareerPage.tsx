import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { jobs, company } from "../data/ptsup";

export function CareerPage() {
  const [search, setSearch] = useState("");

  const filtered = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.department.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase()),
  );

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
              color: "#FF6600",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            Karir
          </span>
          <h1
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(3rem, 7vw, 6rem)",
              color: "#1A1A1A",
              margin: "0 0 1.5rem",
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
            }}
          >
            Temukan{" "}
            <em style={{ fontStyle: "italic", color: "#FF6600" }}>Karirmu</em>
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "0.95rem",
              color: "#6B6B6B",
              maxWidth: "520px",
              lineHeight: 1.7,
              margin: "0 0 2rem",
            }}
          >
            Bangun karir dan berkembang bersama PT Swadharma Utama Prima.
            Bergabunglah dengan tim yang berdedikasi pada inovasi dan keunggulan.
          </p>
          <input
            type="search"
            placeholder="Cari posisi, departemen, atau lokasi..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.9rem",
              padding: "0.85rem 1.25rem",
              borderRadius: "2rem",
              border: "1px solid #E0E0E0",
              background: "#FFFFFF",
              color: "#1A1A1A",
              width: "100%",
              maxWidth: "420px",
              outline: "none",
            }}
          />
        </motion.div>
      </section>

      <section style={{ padding: "3rem 2.5rem 6rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              color: "#6B6B6B",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Lowongan Kerja
          </span>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              color: "#1A1A1A",
              margin: "0.5rem 0 0",
              letterSpacing: "-0.02em",
            }}
          >
            Kami mengundang Anda untuk bergabung pada posisi berikut.
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {filtered.map((job, i) => (
            <motion.div
              key={job.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              style={{
                border: "1px solid #E0E0E0",
                borderRadius: "0.75rem",
                padding: "1.75rem 2rem",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "1.5rem",
                alignItems: "center",
              }}
              className="job-card"
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    flexWrap: "wrap",
                    marginBottom: "0.6rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.62rem",
                      color: "#1A8B9D",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {job.department}
                  </span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.62rem",
                      color: "#6B6B6B",
                    }}
                  >
                    {job.posted}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.35rem",
                    color: "#1A1A1A",
                    margin: "0 0 0.5rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {job.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.9rem",
                    color: "#6B6B6B",
                    lineHeight: 1.6,
                    margin: "0 0 0.75rem",
                  }}
                >
                  {job.excerpt}
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    flexWrap: "wrap",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.8rem",
                    color: "#6B6B6B",
                  }}
                >
                  <span>{job.location}</span>
                  <span>·</span>
                  <span>{job.type}</span>
                </div>
              </div>
              <Link
                to={`/karir/${job.slug}`}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  color: "#FFFFFF",
                  background: "#FF6600",
                  borderRadius: "2rem",
                  padding: "0.75rem 1.5rem",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.85";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
              >
                Lihat Detail
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#6B6B6B",
              fontSize: "0.95rem",
              padding: "3rem 0",
            }}
          >
            Tidak ada lowongan yang cocok dengan pencarian Anda.
          </p>
        )}
      </section>

      <section
        style={{
          padding: "0 2.5rem 6rem",
        }}
      >
        <div
          style={{
            padding: "2rem 2.5rem",
            border: "1px dashed #E0E0E0",
            borderRadius: "0.75rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            background: "#FAFAFA",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
                fontSize: "1.25rem",
                color: "#1A1A1A",
                margin: "0 0 0.35rem",
              }}
            >
              Tidak Menemukan Posisi yang Sesuai?
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem",
                color: "#6B6B6B",
                margin: 0,
              }}
            >
              Kirimkan CV Anda dan kami akan menghubungi Anda.
            </p>
          </div>
          <a
            href={company.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "0.9rem",
              color: "#FFFFFF",
              background: "#1A8B9D",
              borderRadius: "2rem",
              padding: "0.8rem 1.75rem",
              textDecoration: "none",
            }}
          >
            Kirim CV
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 700px) {
          .job-card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}