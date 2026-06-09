import { motion } from "motion/react";
import { Link } from "react-router";
import { articles } from "../data/ptsup";

export function ArticlesPreview() {
  const preview = articles.slice(0, 3);

  return (
    <section
      style={{
        padding: "6rem 2.5rem",
        borderTop: "1px solid #E0E0E0",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "2.5rem",
        }}
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
              color: "#FF6600",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "0.75rem",
            }}
          >
            Berita & Artikel
          </span>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#1A1A1A",
              margin: 0,
              letterSpacing: "-0.03em",
            }}
          >
            Artikel Terbaru
          </h2>
        </motion.div>
        <Link
          to="/artikel"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: "0.85rem",
            color: "#FF6600",
            textDecoration: "none",
          }}
        >
          Lihat Semua Artikel →
        </Link>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {preview.map((article, i) => (
          <motion.article
            key={article.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Link
              to={`/artikel/${article.slug}`}
              style={{ textDecoration: "none", display: "block" }}
            >
              <div
                style={{
                  borderRadius: "0.75rem",
                  overflow: "hidden",
                  aspectRatio: "16/10",
                  background: "#F5F5F5",
                  marginBottom: "1rem",
                  position: "relative",
                }}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                {article.featured && (
                  <span
                    style={{
                      position: "absolute",
                      top: "0.75rem",
                      left: "0.75rem",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.6rem",
                      color: "#FFFFFF",
                      background: "#FF6600",
                      borderRadius: "2rem",
                      padding: "0.3rem 0.65rem",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    Featured
                  </span>
                )}
              </div>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.62rem",
                  color: "#1A8B9D",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {article.category} · {article.date}
              </span>
              <h3
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "#1A1A1A",
                  margin: "0.4rem 0 0",
                  lineHeight: 1.35,
                }}
              >
                {article.title}
              </h3>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}