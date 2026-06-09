import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { articles } from "../data/ptsup";

const categories = [
  "All",
  ...Array.from(new Set(articles.map((a) => a.category))),
];

function matchesSearch(
  article: (typeof articles)[0],
  query: string,
) {
  const q = query.toLowerCase();
  return (
    article.title.toLowerCase().includes(q) ||
    article.excerpt.toLowerCase().includes(q) ||
    article.category.toLowerCase().includes(q)
  );
}

export function ArticlesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  const isSearching = search.trim().length > 0;
  const featured = articles.filter((a) => a.featured);
  const regular = articles.filter((a) => !a.featured);

  const searchResults = isSearching
    ? articles.filter((a) => matchesSearch(a, search))
    : [];

  const filtered =
    activeFilter === "All"
      ? regular
      : regular.filter((a) => a.category === activeFilter);

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
            Artikel
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
              maxWidth: "900px",
            }}
          >
            Berita &{" "}
            <em style={{ fontStyle: "italic", color: "#FF6600" }}>Update</em>
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "0.95rem",
              color: "#6B6B6B",
              maxWidth: "520px",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Kumpulan berita terbaru seputar kerja sama, penghargaan, dan inovasi
            layanan PT Swadharma Utama Prima.
          </p>
          <input
            type="search"
            placeholder="Cari artikel..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              marginTop: "2rem",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.9rem",
              padding: "0.85rem 1.25rem",
              borderRadius: "2rem",
              border: "1px solid #E0E0E0",
              background: "#FFFFFF",
              color: "#1A1A1A",
              width: "100%",
              maxWidth: "400px",
              outline: "none",
            }}
          />
        </motion.div>
      </section>

      {isSearching && (
        <section style={{ padding: "3rem 2.5rem", borderBottom: "1px solid #E0E0E0" }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              color: "#6B6B6B",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1.5rem",
            }}
          >
            Hasil Pencarian ({searchResults.length})
          </span>
          {searchResults.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {searchResults.map((article) => (
                <Link
                  key={article.slug}
                  to={`/artikel/${article.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <h3
                    style={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      color: "#1A1A1A",
                      margin: "0 0 0.35rem",
                    }}
                  >
                    {article.title}
                  </h3>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.62rem",
                      color: "#FF6600",
                    }}
                  >
                    {article.category}
                    {article.featured ? " · Featured" : ""}
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#6B6B6B", margin: 0 }}>
              Tidak ada artikel yang cocok dengan pencarian Anda.
            </p>
          )}
        </section>
      )}

      {!isSearching && featured.length > 0 && (
        <section
          style={{
            padding: "3rem 2.5rem",
            borderBottom: "1px solid #E0E0E0",
          }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              color: "#6B6B6B",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1.5rem",
            }}
          >
            Sorotan
          </span>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "1rem",
            }}
          >
            {featured.map((article, i) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
              >
                <Link
                  to={`/artikel/${article.slug}`}
                  style={{ textDecoration: "none", display: "block" }}
                  onMouseEnter={() => setHoveredSlug(article.slug)}
                  onMouseLeave={() => setHoveredSlug(null)}
                >
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "0.75rem",
                      overflow: "hidden",
                      aspectRatio: "16/10",
                      background: "#F5F5F5",
                      marginBottom: "1rem",
                    }}
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transform:
                          hoveredSlug === article.slug
                            ? "scale(1.05)"
                            : "scale(1)",
                        transition:
                          "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: "1rem",
                        left: "1rem",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.62rem",
                        color: "#FFFFFF",
                        background: "#FF6600",
                        borderRadius: "2rem",
                        padding: "0.35rem 0.75rem",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      Featured
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.65rem",
                      color: "#FF6600",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {article.category} · {article.date}
                  </span>
                  <h2
                    style={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.25rem",
                      color: "#1A1A1A",
                      margin: "0.5rem 0 0",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.3,
                    }}
                  >
                    {article.title}
                  </h2>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {!isSearching && (
      <motion.div
        style={{
          padding: "1.5rem 2.5rem",
          display: "flex",
          gap: "0.5rem",
          flexWrap: "wrap",
          borderBottom: "1px solid #E0E0E0",
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.8rem",
              padding: "0.45rem 1.1rem",
              borderRadius: "2rem",
              border: `1px solid ${activeFilter === cat ? "#FF6600" : "#E0E0E0"}`,
              background:
                activeFilter === cat ? "rgba(255,102,0,0.14)" : "transparent",
              color: activeFilter === cat ? "#FF6600" : "#6B6B6B",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {cat}
          </button>
        ))}
      </motion.div>
      )}

      {!isSearching && (
      <section style={{ padding: "3rem 2.5rem 6rem" }}>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
            color: "#6B6B6B",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            display: "block",
            marginBottom: "2rem",
          }}
        >
          Artikel Terbaru
        </span>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {filtered.map((article, i) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
            >
              <Link
                to={`/artikel/${article.slug}`}
                style={{ textDecoration: "none", display: "block" }}
              >
                <div
                  style={{
                    borderRadius: "0.75rem",
                    overflow: "hidden",
                    aspectRatio: "4/3",
                    background: "#F5F5F5",
                    marginBottom: "1rem",
                  }}
                >
                  <img
                    src={article.image}
                    alt={article.title}
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
                    fontSize: "0.65rem",
                    color: "#1A8B9D",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {article.category}
                </span>
                <h3
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "#1A1A1A",
                    margin: "0.4rem 0",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.35,
                  }}
                >
                  {article.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.85rem",
                    color: "#6B6B6B",
                    lineHeight: 1.6,
                    margin: "0 0 0.75rem",
                  }}
                >
                  {article.excerpt}
                </p>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.8rem",
                    color: "#FF6600",
                    fontWeight: 600,
                  }}
                >
                  Baca Selengkapnya →
                </span>
              </Link>
            </motion.article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#6B6B6B",
              fontSize: "0.95rem",
              margin: 0,
            }}
          >
            Tidak ada artikel lain di kategori ini. Lihat artikel sorotan di atas.
          </p>
        )}
      </section>
      )}
    </main>
  );
}