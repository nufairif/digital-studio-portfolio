import { useState } from "react";
import { motion } from "motion/react";

const services = [
  {
    number: "01",
    title: "Brand & Identity",
    description:
      "Strategic brand systems built to last — from verbal identity and visual language to comprehensive brand guidelines.",
    tags: ["Logo Design", "Brand Strategy", "Visual Identity", "Guidelines"],
  },
  {
    number: "02",
    title: "Web & Digital",
    description:
      "Immersive web experiences with thoughtful interactions. We design and develop sites that perform as well as they look.",
    tags: ["Web Design", "Development", "CMS", "SEO"],
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "Product design grounded in user research and systems thinking. We craft interfaces that feel intuitive and alive.",
    tags: ["Product Design", "Prototyping", "Research", "Design Systems"],
  },
  {
    number: "04",
    title: "Motion & 3D",
    description:
      "Motion design that brings brands to life across digital and physical touchpoints — from micro-interactions to full campaigns.",
    tags: ["Animation", "3D", "Motion Graphics", "After Effects"],
  },
  {
    number: "05",
    title: "Creative Direction",
    description:
      "End-to-end art direction for campaigns, editorials, and brand launches. Strategy and craft working in harmony.",
    tags: ["Art Direction", "Photography", "Campaigns", "Styling"],
  },
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      style={{
        padding: "6rem 2.5rem",
        borderTop: "1px solid #262626",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ marginBottom: "4rem" }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
            color: "#2F6BFF",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            display: "block",
            marginBottom: "0.75rem",
          }}
        >
          What We Do
        </span>
        <h2
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            color: "#FFFFFF",
            margin: 0,
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          Services
        </h2>
      </motion.div>

      <div>
        {services.map((service, i) => (
          <motion.div
            key={service.number}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(null)}
            style={{
              borderTop: "1px solid #262626",
              padding: "2rem 0",
              cursor: "pointer",
              transition: "padding 0.3s ease",
              paddingLeft: activeIndex === i ? "1.5rem" : "0",
              borderLeft: activeIndex === i ? "2px solid #2F6BFF" : "2px solid transparent",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "4rem 1fr auto",
                gap: "2rem",
                alignItems: "start",
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.75rem",
                  color: activeIndex === i ? "#2F6BFF" : "#A1A1A1",
                  letterSpacing: "0.06em",
                  paddingTop: "0.2rem",
                  transition: "color 0.3s",
                }}
              >
                {service.number}
              </span>

              <div>
                <h3
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                    color: "#FFFFFF",
                    margin: "0 0 0.75rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {service.title}
                </h3>

                <div
                  style={{
                    overflow: "hidden",
                    maxHeight: activeIndex === i ? "200px" : "0",
                    transition: "max-height 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 300,
                      fontSize: "0.95rem",
                      color: "#A1A1A1",
                      lineHeight: 1.7,
                      margin: "0 0 1rem",
                      maxWidth: "540px",
                    }}
                  >
                    {service.description}
                  </p>
                  <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "0.65rem",
                          color: "#A1A1A1",
                          border: "1px solid #262626",
                          borderRadius: "2rem",
                          padding: "0.25rem 0.7rem",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "50%",
                  border: `1px solid ${activeIndex === i ? "#2F6BFF" : "#262626"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: activeIndex === i ? "#2F6BFF" : "#A1A1A1",
                  fontSize: "1rem",
                  transform: activeIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease, color 0.3s, border-color 0.3s",
                  flexShrink: 0,
                  marginTop: "0.1rem",
                }}
              >
                +
              </div>
            </div>
          </motion.div>
        ))}
        <div style={{ borderTop: "1px solid #262626" }} />
      </div>
    </section>
  );
}
