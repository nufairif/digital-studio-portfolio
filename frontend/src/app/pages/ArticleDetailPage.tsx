import { motion } from "motion/react";
import { Link, useParams } from "react-router";
import { articles } from "../data/ptsup";

export function ArticleDetailPage() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);
  const others = articles.filter((a) => a.slug !== slug).slice(0, 2);

  if (!article) {
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
          Artikel tidak ditemukan
        </h1>
        <Link
          to="/artikel"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: "#FF6600",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          ← Kembali ke Artikel
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
          to="/artikel"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.85rem",
            color: "#6B6B6B",
            textDecoration: "none",
            display: "inline-block",
            marginBottom: "2rem",
          }}
        >
          ← Artikel
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
            {article.category} · {article.date}
          </span>
          <h1
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#1A1A1A",
              margin: "0 0 2rem",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            {article.title}
          </h1>
        </motion.div>
      </section>

      <section
        style={{
          padding: "0 2.5rem 4rem",
          maxWidth: "900px",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{
            borderRadius: "0.75rem",
            overflow: "hidden",
            marginBottom: "3rem",
            background: "#F5F5F5",
          }}
        >
          <img
            src={article.image}
            alt={article.title}
            style={{ width: "100%", display: "block", objectFit: "cover" }}
          />
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {article.content.map((paragraph) => (
            <p
              key={paragraph}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: "1.05rem",
                color: "#1A1A1A",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {article.gallery.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "1rem",
              marginTop: "3rem",
            }}
          >
            {article.gallery.map((src) => (
              <div
                key={src}
                style={{
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  background: "#F5F5F5",
                  aspectRatio: "4/3",
                }}
              >
                <img
                  src={src}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </section>

      {others.length > 0 && (
        <section
          style={{
            padding: "4rem 2.5rem 6rem",
            borderTop: "1px solid #E0E0E0",
          }}
        >
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "1.75rem",
              color: "#1A1A1A",
              margin: "0 0 2rem",
              letterSpacing: "-0.02em",
            }}
          >
            Artikel Lainnya
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {others.map((item) => (
              <Link
                key={item.slug}
                to={`/artikel/${item.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    borderRadius: "0.75rem",
                    overflow: "hidden",
                    aspectRatio: "16/10",
                    background: "#F5F5F5",
                    marginBottom: "0.75rem",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.62rem",
                    color: "#FF6600",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {item.category}
                </span>
                <h3
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#1A1A1A",
                    margin: "0.35rem 0 0",
                    lineHeight: 1.35,
                  }}
                >
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}