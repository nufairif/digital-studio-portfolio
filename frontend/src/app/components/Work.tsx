import { useState } from "react";
import { motion } from "motion/react";
import { homeProjects as projects } from "../data/ptsup";

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
        background: "#F5F5F5",
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
            ? "linear-gradient(to top, rgba(255,255,255,0.92) 0%, rgba(10,10,10,0.2) 60%, transparent 100%)"
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
          color: "#6B6B6B",
          letterSpacing: "0.08em",
          background: "rgba(10,10,10,0.6)",
          backdropFilter: "blur(8px)",
          borderRadius: "2rem",
          padding: "0.3rem 0.75rem",
          border: "1px solid #E0E0E0",
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
                color: "#FF6600",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                border: "1px solid rgba(255,102,0,0.28)",
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
            color: "#FFFFFF",
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
            color: "#6B6B6B",
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
          background: "#FF6600",
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
              color: "#1A8B9D",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "0.75rem",
            }}
          >
            Klien & Proyek
          </span>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#1A1A1A",
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
            color: "#6B6B6B",
            background: "none",
            border: "1px solid #E0E0E0",
            borderRadius: "2rem",
            padding: "0.6rem 1.5rem",
            cursor: "pointer",
            letterSpacing: "0.02em",
            transition: "color 0.2s, border-color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#1A1A1A";
            e.currentTarget.style.borderColor = "#6B6B6B";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#6B6B6B";
            e.currentTarget.style.borderColor = "#E0E0E0";
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
