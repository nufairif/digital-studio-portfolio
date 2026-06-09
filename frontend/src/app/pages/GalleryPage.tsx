import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { gallery, galleryCategories } from "../data/ptsup";

export function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered =
    activeFilter === "All"
      ? gallery
      : gallery.filter((item) => item.category === activeFilter);

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
            Galeri
          </span>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <h1
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(3rem, 7vw, 6rem)",
                color: "#1A1A1A",
                margin: 0,
                letterSpacing: "-0.04em",
                lineHeight: 0.95,
              }}
            >
              Aktivitas &
              <br />
              <em style={{ fontStyle: "italic", color: "#FF6600" }}>Fasilitas</em>
            </h1>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: "0.95rem",
                color: "#6B6B6B",
                maxWidth: "380px",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Dokumentasi proyek, kegiatan operasional, dan pemeliharaan fasilitas
              yang telah kami kerjakan dengan standar profesionalisme tinggi.
            </p>
          </div>
        </motion.div>
      </section>

      <motion.div
        className="gallery-filter-bar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{
          padding: "1.5rem 2.5rem",
          display: "flex",
          gap: "0.5rem",
          flexWrap: "wrap",
          borderBottom: "1px solid #E0E0E0",
          overflowX: "auto",
        }}
      >
        {galleryCategories.map((cat) => (
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
              whiteSpace: "nowrap",
            }}
          >
            {cat}
          </button>
        ))}
        <span
          className="gallery-filter-count"
          style={{
            marginLeft: "auto",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
            color: "#6B6B6B",
            alignSelf: "center",
            whiteSpace: "nowrap",
          }}
        >
          {filtered.length} foto
        </span>
      </motion.div>

      <section style={{ padding: "3rem 2.5rem 6rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
          }}
        >
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                position: "relative",
                borderRadius: "0.75rem",
                overflow: "hidden",
                background: "#F5F5F5",
                aspectRatio: "4/3",
                gridColumn: item.size === "large" ? "span 2" : "span 1",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transform:
                    hoveredId === item.id ? "scale(1.05)" : "scale(1)",
                  transition: "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    hoveredId === item.id
                      ? "linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.2) 60%, transparent 100%)"
                      : "linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 60%)",
                  transition: "background 0.4s",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "1.25rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.62rem",
                    color: "#FF6600",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "0.35rem",
                  }}
                >
                  {item.category}
                </span>
                <h3
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "#FFFFFF",
                    margin: 0,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        style={{
          borderTop: "1px solid #E0E0E0",
          padding: "5rem 2.5rem",
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
              fontSize: "clamp(2rem, 5vw, 4rem)",
              color: "#1A1A1A",
              margin: "0 0 2rem",
              letterSpacing: "-0.03em",
            }}
          >
            Butuh solusi serupa?
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
        @media (max-width: 768px) {
          .gallery-filter-bar {
            flex-wrap: nowrap !important;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .gallery-filter-bar::-webkit-scrollbar { display: none; }
          .gallery-filter-count { margin-left: 0.75rem !important; }
        }
        @media (max-width: 700px) {
          [style*="gridColumn: span 2"] { grid-column: span 1 !important; }
        }
      `}</style>
    </main>
  );
}