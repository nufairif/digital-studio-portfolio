import { useState } from "react";
import { motion } from "motion/react";

const projects = [
  {
    id: 1,
    title: "Luminary Brand",
    category: "Brand Identity",
    year: "2025",
    tags: ["Identity", "Print", "Strategy"],
    image: "https://images.unsplash.com/photo-1770591060040-25fd7d6a4c1f?w=900&h=700&fit=crop&auto=format",
    size: "large",
  },
  {
    id: 2,
    title: "Vertex Platform",
    category: "Web Design",
    year: "2025",
    tags: ["UX", "Web", "Motion"],
    image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=700&h=700&fit=crop&auto=format",
    size: "small",
  },
  {
    id: 3,
    title: "Aether Editorial",
    category: "Art Direction",
    year: "2024",
    tags: ["Editorial", "Photography"],
    image: "https://images.unsplash.com/photo-1532191568455-f90e2806b900?w=700&h=700&fit=crop&auto=format",
    size: "small",
  },
  {
    id: 4,
    title: "Noir Architecture",
    category: "Visual Identity",
    year: "2024",
    tags: ["Identity", "Signage"],
    image: "https://images.unsplash.com/photo-1552821773-37cbce3a7965?w=900&h=700&fit=crop&auto=format",
    size: "large",
  },
  {
    id: 5,
    title: "Pulse Motion",
    category: "Motion Design",
    year: "2025",
    tags: ["Motion", "3D", "Brand"],
    image: "https://images.unsplash.com/photo-1765539160785-e7953620488f?w=700&h=700&fit=crop&auto=format",
    size: "small",
  },
  {
    id: 6,
    title: "Void Dashboard",
    category: "Product Design",
    year: "2024",
    tags: ["Product", "UI", "UX"],
    image: "https://images.unsplash.com/photo-1536675572774-1b66ac2e26e9?w=700&h=700&fit=crop&auto=format",
    size: "small",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "0.75rem",
        overflow: "hidden",
        cursor: "pointer",
        background: "#111111",
        aspectRatio: project.size === "large" ? "16/10" : "4/3",
      }}
    >
      <img
        src={project.image}
        alt={project.title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: hovered ? "scale(1.04)" : "scale(1)",
          transition: "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
          display: "block",
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hovered
            ? "linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.2) 60%, transparent 100%)"
            : "linear-gradient(to top, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.05) 50%, transparent 100%)",
          transition: "background 0.4s ease",
        }}
      />

      {/* Year badge */}
      <div
        style={{
          position: "absolute",
          top: "1.25rem",
          right: "1.25rem",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.7rem",
          color: "#888480",
          letterSpacing: "0.08em",
          background: "rgba(10,10,10,0.6)",
          backdropFilter: "blur(8px)",
          borderRadius: "2rem",
          padding: "0.3rem 0.75rem",
          border: "1px solid rgba(237,234,228,0.08)",
        }}
      >
        {project.year}
      </div>

      {/* Content */}
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
            transform: hovered ? "translateY(0)" : "translateY(6px)",
            opacity: hovered ? 1 : 0,
            transition: "transform 0.4s ease, opacity 0.4s ease",
          }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.65rem",
                color: "#C8FF47",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                border: "1px solid rgba(200,255,71,0.3)",
                borderRadius: "2rem",
                padding: "0.2rem 0.6rem",
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
            fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
            color: "#EDEAE4",
            margin: "0 0 0.25rem",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.8rem",
            color: "#888480",
            margin: 0,
            letterSpacing: "0.04em",
          }}
        >
          {project.category}
        </p>
      </div>

      {/* Arrow */}
      <div
        style={{
          position: "absolute",
          top: "1.25rem",
          left: "1.25rem",
          width: "2.2rem",
          height: "2.2rem",
          borderRadius: "50%",
          background: "#C8FF47",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: hovered ? "scale(1)" : "scale(0)",
          opacity: hovered ? 1 : 0,
          transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s ease",
          fontSize: "0.9rem",
        }}
      >
        ↗
      </div>
    </motion.div>
  );
}

export function Work() {
  return (
    <section id="work" style={{ padding: "6rem 2.5rem" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "3.5rem",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              color: "#C8FF47",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "0.75rem",
            }}
          >
            Selected Work
          </span>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#EDEAE4",
              margin: 0,
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            Projects
          </h2>
        </div>

        <button
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
            fontSize: "0.875rem",
            color: "#888480",
            background: "none",
            border: "1px solid rgba(237,234,228,0.12)",
            borderRadius: "2rem",
            padding: "0.6rem 1.5rem",
            cursor: "pointer",
            letterSpacing: "0.02em",
            transition: "color 0.2s, border-color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#EDEAE4";
            e.currentTarget.style.borderColor = "rgba(237,234,228,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#888480";
            e.currentTarget.style.borderColor = "rgba(237,234,228,0.12)";
          }}
        >
          All Projects →
        </button>
      </motion.div>

      {/* Bento grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: "1rem",
        }}
      >
        <div style={{ gridColumn: "span 8" }}>
          <ProjectCard project={projects[0]} index={0} />
        </div>
        <div style={{ gridColumn: "span 4" }}>
          <ProjectCard project={projects[1]} index={1} />
        </div>
        <div style={{ gridColumn: "span 4" }}>
          <ProjectCard project={projects[2]} index={2} />
        </div>
        <div style={{ gridColumn: "span 8" }}>
          <ProjectCard project={projects[3]} index={3} />
        </div>
        <div style={{ gridColumn: "span 6" }}>
          <ProjectCard project={projects[4]} index={4} />
        </div>
        <div style={{ gridColumn: "span 6" }}>
          <ProjectCard project={projects[5]} index={5} />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #work .bento > div { grid-column: span 12 !important; }
        }
      `}</style>
    </section>
  );
}
