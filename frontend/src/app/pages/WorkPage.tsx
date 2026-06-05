import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";

const allProjects = [
  {
    id: 1,
    title: "Luminary Brand",
    category: "Brand Identity",
    year: "2025",
    client: "Luminary Inc.",
    tags: ["Identity", "Print", "Strategy"],
    image: "https://images.unsplash.com/photo-1770591060040-25fd7d6a4c1f?w=900&h=700&fit=crop&auto=format",
    featured: true,
  },
  {
    id: 2,
    title: "Vertex Platform",
    category: "Web Design",
    year: "2025",
    client: "Vertex Labs",
    tags: ["UX", "Web", "Motion"],
    image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=700&h=700&fit=crop&auto=format",
    featured: false,
  },
  {
    id: 3,
    title: "Aether Editorial",
    category: "Art Direction",
    year: "2024",
    client: "Aether Magazine",
    tags: ["Editorial", "Photography"],
    image: "https://images.unsplash.com/photo-1532191568455-f90e2806b900?w=700&h=700&fit=crop&auto=format",
    featured: false,
  },
  {
    id: 4,
    title: "Noir Architecture",
    category: "Visual Identity",
    year: "2024",
    client: "Noir Collective",
    tags: ["Identity", "Signage"],
    image: "https://images.unsplash.com/photo-1552821773-37cbce3a7965?w=900&h=700&fit=crop&auto=format",
    featured: true,
  },
  {
    id: 5,
    title: "Pulse Motion",
    category: "Motion Design",
    year: "2025",
    client: "Pulse Creative",
    tags: ["Motion", "3D", "Brand"],
    image: "https://images.unsplash.com/photo-1765539160785-e7953620488f?w=700&h=700&fit=crop&auto=format",
    featured: false,
  },
  {
    id: 6,
    title: "Void Dashboard",
    category: "Product Design",
    year: "2024",
    client: "Void Technologies",
    tags: ["Product", "UI", "UX"],
    image: "https://images.unsplash.com/photo-1536675572774-1b66ac2e26e9?w=700&h=700&fit=crop&auto=format",
    featured: false,
  },
  {
    id: 7,
    title: "Cascade Identity",
    category: "Brand Identity",
    year: "2023",
    client: "Cascade Studio",
    tags: ["Identity", "Web"],
    image: "https://images.unsplash.com/photo-1621111848501-8d3634f82336?w=700&h=700&fit=crop&auto=format",
    featured: false,
  },
  {
    id: 8,
    title: "Prism Campaign",
    category: "Creative Direction",
    year: "2023",
    client: "Prism Agency",
    tags: ["Campaign", "Art Direction"],
    image: "https://images.unsplash.com/photo-1708778002477-75611274f23d?w=700&h=700&fit=crop&auto=format",
    featured: false,
  },
  {
    id: 9,
    title: "Solstice Rebrand",
    category: "Brand Identity",
    year: "2023",
    client: "Solstice Group",
    tags: ["Rebrand", "Identity", "Strategy"],
    image: "https://images.unsplash.com/photo-1669555059258-996a562f9fed?w=700&h=700&fit=crop&auto=format",
    featured: false,
  },
];

const categories = ["All", "Brand Identity", "Web Design", "Art Direction", "Motion Design", "Product Design", "Creative Direction", "Visual Identity"];

export function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = activeFilter === "All"
    ? allProjects
    : allProjects.filter((p) => p.category === activeFilter);

  return (
    <main style={{ paddingTop: "4.5rem" }}>
      {/* Page header */}
      <section
        style={{
          padding: "5rem 2.5rem 3rem",
          borderBottom: "1px solid rgba(237,234,228,0.08)",
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
              color: "#C8FF47",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            Portfolio
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
                color: "#EDEAE4",
                margin: 0,
                letterSpacing: "-0.04em",
                lineHeight: 0.95,
              }}
            >
              Selected
              <br />
              <em style={{ fontStyle: "italic", color: "#C8FF47" }}>Work</em>
            </h1>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: "0.95rem",
                color: "#888480",
                maxWidth: "340px",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {allProjects.length} projects spanning brand identity, digital design,
              motion, and creative direction.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Filter bar */}
      <motion.div
        className="work-filter-bar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{
          padding: "1.5rem 2.5rem",
          display: "flex",
          gap: "0.5rem",
          flexWrap: "wrap",
          borderBottom: "1px solid rgba(237,234,228,0.08)",
          overflowX: "auto",
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
              border: `1px solid ${activeFilter === cat ? "#C8FF47" : "rgba(237,234,228,0.1)"}`,
              background: activeFilter === cat ? "rgba(200,255,71,0.1)" : "transparent",
              color: activeFilter === cat ? "#C8FF47" : "#888480",
              cursor: "pointer",
              transition: "all 0.2s",
              whiteSpace: "nowrap",
            }}
          >
            {cat}
          </button>
        ))}
        <span
          className="work-filter-count"
          style={{
            marginLeft: "auto",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
            color: "#888480",
            alignSelf: "center",
            whiteSpace: "nowrap",
          }}
        >
          {filtered.length} projects
        </span>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .work-filter-bar {
            flex-wrap: nowrap !important;
            overflow-x: auto;
            overflow-y: hidden;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }

          .work-filter-bar::-webkit-scrollbar {
            display: none;
          }

          .work-filter-bar > button,
          .work-filter-count {
            flex: 0 0 auto;
          }

          .work-filter-count {
            margin-left: 0.75rem !important;
          }
        }
      `}</style>

      {/* Projects grid */}
      <section style={{ padding: "3rem 2.5rem 6rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "1rem",
          }}
        >
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                position: "relative",
                borderRadius: "0.75rem",
                overflow: "hidden",
                cursor: "pointer",
                background: "#111111",
                aspectRatio: "4/3",
                gridColumn: project.featured ? "span 2" : "span 1",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transform: hoveredId === project.id ? "scale(1.05)" : "scale(1)",
                  transition: "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    hoveredId === project.id
                      ? "linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.2) 60%, transparent 100%)"
                      : "linear-gradient(to top, rgba(10,10,10,0.75) 0%, transparent 60%)",
                  transition: "background 0.4s",
                }}
              />

              {/* Top right badges */}
              <div
                style={{
                  position: "absolute",
                  top: "1.25rem",
                  right: "1.25rem",
                  display: "flex",
                  gap: "0.4rem",
                }}
              >
                {project.featured && (
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.62rem",
                      color: "#0A0A0A",
                      background: "#C8FF47",
                      borderRadius: "2rem",
                      minHeight: "2.1rem",
                      padding: "0 0.75rem",
                      letterSpacing: "0.06em",
                      lineHeight: 1,
                      textTransform: "uppercase",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Featured
                  </span>
                )}
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.7rem",
                    color: "#888480",
                    background: "rgba(10,10,10,0.6)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "2rem",
                    minHeight: "2.1rem",
                    padding: "0 0.75rem",
                    border: "1px solid rgba(237,234,228,0.08)",
                    lineHeight: 1,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {project.year}
                </span>
              </div>

              {/* Bottom content */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "0.4rem",
                    marginBottom: "0.6rem",
                    flexWrap: "wrap",
                    opacity: hoveredId === project.id ? 1 : 0,
                    transform: hoveredId === project.id ? "translateY(0)" : "translateY(6px)",
                    transition: "opacity 0.3s, transform 0.3s",
                  }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.62rem",
                        color: "#C8FF47",
                        border: "1px solid rgba(200,255,71,0.3)",
                        borderRadius: "2rem",
                        padding: "0.2rem 0.6rem",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                    color: "#EDEAE4",
                    margin: "0 0 0.2rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {project.title}
                </h3>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.8rem",
                      color: "#888480",
                      margin: 0,
                    }}
                  >
                    {project.client} · {project.category}
                  </p>
                  <span
                    style={{
                      width: "2rem",
                      height: "2rem",
                      borderRadius: "50%",
                      background: "#C8FF47",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.85rem",
                      transform: hoveredId === project.id ? "scale(1)" : "scale(0)",
                      opacity: hoveredId === project.id ? 1 : 0,
                      transition: "transform 0.3s, opacity 0.3s",
                      flexShrink: 0,
                    }}
                  >
                    ↗
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "6rem 2rem",
              fontFamily: "'DM Sans', sans-serif",
              color: "#888480",
              fontSize: "0.95rem",
            }}
          >
            No projects found in this category.
          </div>
        )}
      </section>

      {/* CTA */}
      <section
        style={{
          borderTop: "1px solid rgba(237,234,228,0.08)",
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
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              color: "#C8FF47",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            Ready to collaborate?
          </p>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 4rem)",
              color: "#EDEAE4",
              margin: "0 0 2rem",
              letterSpacing: "-0.03em",
            }}
          >
            Let's build something great.
          </h2>
          <Link
            to="/contact"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "0.9rem",
              color: "#0A0A0A",
              background: "#C8FF47",
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
            Start a Project →
          </Link>
        </motion.div>
      </section>

      <style>{`
        @media (max-width: 700px) {
          [style*="gridColumn: span 2"] { grid-column: span 1 !important; }
        }
      `}</style>
    </main>
  );
}
