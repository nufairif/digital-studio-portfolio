import { motion } from "motion/react";
import { Link, useParams } from "react-router";
import { jobs } from "../data/ptsup";

export function CareerDetailPage() {
  const { slug } = useParams();
  const job = jobs.find((j) => j.slug === slug);
  const others = jobs.filter((j) => j.slug !== slug);

  if (!job) {
    return (
      <main style={{ paddingTop: "4.5rem", padding: "8rem 2.5rem", textAlign: "center" }}>
        <h1
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800,
            fontSize: "2rem",
            color: "#1A1A1A",
            marginBottom: "1.5rem",
          }}
        >
          Lowongan tidak ditemukan
        </h1>
        <Link
          to="/karir"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: "#FF6600",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          ← Kembali ke Karir
        </Link>
      </main>
    );
  }

  return (
    <main style={{ paddingTop: "4.5rem" }}>
      <section
        style={{
          padding: "3rem 2.5rem 2rem",
          borderBottom: "1px solid #E0E0E0",
        }}
      >
        <Link
          to="/karir"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.85rem",
            color: "#6B6B6B",
            textDecoration: "none",
            display: "inline-block",
            marginBottom: "2rem",
          }}
        >
          ← Karir
        </Link>
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
              marginBottom: "0.75rem",
            }}
          >
            {job.type} · {job.location}
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
            {job.title}
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.9rem",
              color: "#6B6B6B",
              margin: 0,
            }}
          >
            Diposting {job.posted} · Gaji {job.salary}
          </p>
        </motion.div>
      </section>

      <section
        style={{
          padding: "3rem 2.5rem 6rem",
          display: "grid",
          gridTemplateColumns: "1fr 320px",
          gap: "4rem",
          alignItems: "start",
        }}
        className="career-detail-grid"
      >
        <div>
          <div
            style={{
              borderRadius: "0.75rem",
              overflow: "hidden",
              background: "#F5F5F5",
              marginBottom: "2.5rem",
              maxWidth: "480px",
            }}
          >
            <img
              src={job.image}
              alt={job.title}
              style={{ width: "100%", display: "block" }}
            />
          </div>

          <Block title="Tentang Pekerjaan" content={job.about} />
          <ListBlock title="Tanggung Jawab" items={job.responsibilities} />
          <ListBlock title="Kualifikasi & Persyaratan" items={job.requirements} />
          <ListBlock title="Mengapa Bergabung dengan Kami?" items={job.benefits} />
        </div>

        <aside
          style={{
            border: "1px solid #E0E0E0",
            borderRadius: "0.75rem",
            padding: "1.75rem",
            position: "sticky",
            top: "6rem",
          }}
        >
          <h3
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              fontSize: "1.1rem",
              color: "#1A1A1A",
              margin: "0 0 1.25rem",
            }}
          >
            Ringkasan Pekerjaan
          </h3>
          {[
            ["Tipe Pekerjaan", job.type],
            ["Pendidikan", job.education],
            ["Pengalaman", job.experience],
            ["Lokasi", job.location],
            ["Email", job.applyEmail],
            ["Subjek Email", job.applySubject],
            ["Info Lebih Lanjut", `Tim SUP: ${job.contactPhone}`],
          ].map(([label, value]) => (
            <div key={label} style={{ marginBottom: "1rem" }}>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.62rem",
                  color: "#6B6B6B",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "0.25rem",
                }}
              >
                {label}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.88rem",
                  color: "#1A1A1A",
                  lineHeight: 1.5,
                }}
              >
                {value}
              </div>
            </div>
          ))}
          <a
            href={job.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "0.9rem",
              color: "#FFFFFF",
              background: "#FF6600",
              borderRadius: "2rem",
              padding: "0.85rem 1.5rem",
              textDecoration: "none",
              display: "block",
              textAlign: "center",
              marginTop: "1.5rem",
            }}
          >
            Lamar Sekarang
          </a>
        </aside>
      </section>

      {others.length > 0 && (
        <section
          style={{
            padding: "0 2.5rem 6rem",
            borderTop: "1px solid #E0E0E0",
            paddingTop: "4rem",
          }}
        >
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "1.5rem",
              color: "#1A1A1A",
              margin: "0 0 1.5rem",
            }}
          >
            Lowongan Lainnya
          </h2>
          {others.map((item) => (
            <Link
              key={item.slug}
              to={`/karir/${item.slug}`}
              style={{
                display: "block",
                textDecoration: "none",
                border: "1px solid #E0E0E0",
                borderRadius: "0.75rem",
                padding: "1.25rem 1.5rem",
                marginBottom: "0.75rem",
              }}
            >
              <div
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  color: "#1A1A1A",
                  marginBottom: "0.25rem",
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.85rem",
                  color: "#6B6B6B",
                }}
              >
                {item.location} · {item.type}
              </div>
            </Link>
          ))}
        </section>
      )}

      <style>{`
        @media (max-width: 900px) {
          .career-detail-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}

function Block({ title, content }: { title: string; content: string }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h2
        style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 700,
          fontSize: "1.35rem",
          color: "#1A1A1A",
          margin: "0 0 1rem",
        }}
      >
        {title}
      </h2>
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
        {content}
      </p>
    </div>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h2
        style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 700,
          fontSize: "1.35rem",
          color: "#1A1A1A",
          margin: "0 0 1rem",
        }}
      >
        {title}
      </h2>
      <ul
        style={{
          margin: 0,
          paddingLeft: "1.25rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.6rem",
        }}
      >
        {items.map((item) => (
          <li
            key={item}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.95rem",
              color: "#6B6B6B",
              lineHeight: 1.6,
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}