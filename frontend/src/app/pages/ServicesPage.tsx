import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";

const services = [
  {
    number: "01",
    title: "Brand & Identity",
    tagline: "Systems that endure.",
    description:
      "Strategic brand systems built to last — from verbal identity and visual language to comprehensive brand guidelines that scale across every touchpoint.",
    details: [
      "Brand strategy and positioning",
      "Logo and visual identity design",
      "Typography and color systems",
      "Brand guidelines and documentation",
      "Print and collateral design",
      "Brand voice and messaging",
    ],
    deliverables: "Brand Strategy, Logo Suite, Style Guide, Asset Library",
    timeline: "6–10 weeks",
    startingAt: "$18,000",
    image: "https://images.unsplash.com/photo-1770591060040-25fd7d6a4c1f?w=800&h=600&fit=crop&auto=format",
  },
  {
    number: "02",
    title: "Web & Digital",
    tagline: "Sites that perform.",
    description:
      "Immersive web experiences with thoughtful interactions. We design and develop sites that perform as well as they look — from concept to launch.",
    details: [
      "Website design and UX strategy",
      "Frontend development (React, Next.js)",
      "CMS integration (Sanity, Contentful)",
      "Performance optimization",
      "SEO foundations",
      "Hosting and deployment",
    ],
    deliverables: "Wireframes, Design System, Codebase, CMS",
    timeline: "8–14 weeks",
    startingAt: "$24,000",
    image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800&h=600&fit=crop&auto=format",
  },
  {
    number: "03",
    title: "UI/UX Design",
    tagline: "Interfaces that feel alive.",
    description:
      "Product design grounded in user research and systems thinking. We craft interfaces that feel intuitive and alive, from early sketches to polished handoffs.",
    details: [
      "User research and competitive analysis",
      "Information architecture",
      "Wireframing and prototyping",
      "UI design and design systems",
      "Usability testing",
      "Dev-ready Figma handoff",
    ],
    deliverables: "Research Report, Wireframes, UI Kit, Prototype",
    timeline: "6–12 weeks",
    startingAt: "$20,000",
    image: "https://images.unsplash.com/photo-1532191568455-f90e2806b900?w=800&h=600&fit=crop&auto=format",
  },
  {
    number: "04",
    title: "Motion & 3D",
    tagline: "Brands in motion.",
    description:
      "Motion design that brings brands to life across digital and physical touchpoints — from micro-interactions to full-scale campaigns.",
    details: [
      "Brand motion guidelines",
      "UI animation and micro-interactions",
      "Explainer and promo videos",
      "3D modeling and rendering",
      "Social content and reels",
      "After Effects and Lottie exports",
    ],
    deliverables: "Motion Guidelines, Animation Files, Video Assets",
    timeline: "4–8 weeks",
    startingAt: "$12,000",
    image: "https://images.unsplash.com/photo-1765539160785-e7953620488f?w=800&h=600&fit=crop&auto=format",
  },
  {
    number: "05",
    title: "Creative Direction",
    tagline: "Strategy meets craft.",
    description:
      "End-to-end art direction for campaigns, editorials, and brand launches. We bring strategy and craft together to create work that moves people.",
    details: [
      "Campaign concept and strategy",
      "Art direction and styling",
      "Photography and videography direction",
      "Editorial design",
      "Campaign asset production",
      "Launch strategy",
    ],
    deliverables: "Creative Brief, Shot List, Direction Deck, Final Assets",
    timeline: "4–12 weeks",
    startingAt: "$15,000",
    image: "https://images.unsplash.com/photo-1536675572774-1b66ac2e26e9?w=800&h=600&fit=crop&auto=format",
  },
];

export function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <main style={{ paddingTop: "4.5rem" }}>
      {/* Page header */}
      <section
        style={{
          padding: "5rem 2.5rem 4rem",
          borderBottom: "1px solid #262626",
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
              color: "#2F6BFF",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            Capabilities
          </span>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "2rem",
            }}
          >
            <h1
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(3rem, 7vw, 6rem)",
                color: "#FFFFFF",
                margin: 0,
                letterSpacing: "-0.04em",
                lineHeight: 0.95,
              }}
            >
              What we
              <br />
              <em style={{ fontStyle: "italic", color: "#2F6BFF" }}>do best.</em>
            </h1>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: "0.95rem",
                color: "#A1A1A1",
                maxWidth: "360px",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Five core capabilities, all executed with the same obsessive
              attention to craft. We work across disciplines so you don't have to.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Services accordion + preview */}
      <section style={{ padding: "0 2.5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 420px",
            gap: "4rem",
            alignItems: "start",
          }}
          className="services-layout"
        >
          {/* Accordion */}
          <div>
            {services.map((service, i) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                style={{
                  borderTop: "1px solid #262626",
                  cursor: "pointer",
                  borderLeft: activeIndex === i ? "2px solid #2F6BFF" : "2px solid transparent",
                  paddingLeft: activeIndex === i ? "1.5rem" : "0",
                  transition: "border-color 0.3s, padding 0.3s",
                }}
              >
                <div
                  style={{
                    padding: "2rem 0",
                    display: "grid",
                    gridTemplateColumns: "4rem 1fr auto",
                    gap: "1.5rem",
                    alignItems: "start",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.72rem",
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
                        margin: "0 0 0.2rem",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.85rem",
                        color: activeIndex === i ? "#2F6BFF" : "#A1A1A1",
                        margin: 0,
                        transition: "color 0.3s",
                      }}
                    >
                      {service.tagline}
                    </p>

                    {/* Expanded content */}
                    <div
                      style={{
                        maxHeight: activeIndex === i ? "600px" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: 300,
                          fontSize: "0.9rem",
                          color: "#A1A1A1",
                          lineHeight: 1.75,
                          margin: "1.25rem 0 1.5rem",
                          maxWidth: "520px",
                        }}
                      >
                        {service.description}
                      </p>

                      <ul
                        style={{
                          listStyle: "none",
                          padding: 0,
                          margin: "0 0 1.5rem",
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "0.5rem",
                        }}
                      >
                        {service.details.map((d) => (
                          <li
                            key={d}
                            style={{
                              fontFamily: "'DM Sans', sans-serif",
                              fontSize: "0.82rem",
                              color: "#A1A1A1",
                              display: "flex",
                              gap: "0.5rem",
                              alignItems: "center",
                            }}
                          >
                            <span style={{ color: "#2F6BFF", fontSize: "0.5rem" }}>✦</span>
                            {d}
                          </li>
                        ))}
                      </ul>

                      <div
                        style={{
                          display: "flex",
                          gap: "2rem",
                          flexWrap: "wrap",
                          paddingTop: "1rem",
                          borderTop: "1px solid #262626",
                        }}
                      >
                        {[
                          { label: "Timeline", value: service.timeline },
                          { label: "Starting at", value: service.startingAt },
                        ].map(({ label, value }) => (
                          <div key={label}>
                            <div
                              style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: "0.62rem",
                                color: "#A1A1A1",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                marginBottom: "0.3rem",
                              }}
                            >
                              {label}
                            </div>
                            <div
                              style={{
                                fontFamily: "'Bricolage Grotesque', sans-serif",
                                fontWeight: 600,
                                fontSize: "1rem",
                                color: "#FFFFFF",
                              }}
                            >
                              {value}
                            </div>
                          </div>
                        ))}
                        <Link
                          to="/contact"
                          style={{
                            marginLeft: "auto",
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 500,
                            fontSize: "0.82rem",
                            color: "#FFFFFF",
                            background: "#2F6BFF",
                            borderRadius: "2rem",
                            padding: "0.5rem 1.4rem",
                            textDecoration: "none",
                            alignSelf: "flex-end",
                            transition: "opacity 0.2s",
                          }}
                          onClick={(e) => e.stopPropagation()}
                          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                        >
                          Inquire →
                        </Link>
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
                      fontSize: "1.1rem",
                      transform: activeIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.3s, color 0.3s, border-color 0.3s",
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

          {/* Sticky image preview */}
          <div
            style={{
              position: "sticky",
              top: "6rem",
              paddingTop: "2rem",
            }}
            className="services-preview"
          >
            <div
              style={{
                borderRadius: "0.75rem",
                overflow: "hidden",
                aspectRatio: "4/3",
                background: "#141414",
              }}
            >
              <motion.img
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                src={services[activeIndex ?? 0].image}
                alt={services[activeIndex ?? 0].title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            <div
              style={{
                marginTop: "1.5rem",
                padding: "1.5rem",
                background: "#141414",
                borderRadius: "0.75rem",
                border: "1px solid #262626",
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  color: "#A1A1A1",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                Deliverables
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.85rem",
                  color: "#FFFFFF",
                  lineHeight: 1.6,
                }}
              >
                {services[activeIndex ?? 0].deliverables}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process section */}
      <section
        style={{
          padding: "6rem 2.5rem",
          borderTop: "1px solid #262626",
          marginTop: "4rem",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
            How We Work
          </span>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "#FFFFFF",
              margin: 0,
              letterSpacing: "-0.03em",
            }}
          >
            Our Process
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2rem",
          }}
          className="process-grid"
        >
          {[
            { step: "01", title: "Discovery", desc: "We start by understanding your brand, goals, audience, and competitive landscape through a structured discovery process." },
            { step: "02", title: "Strategy", desc: "Findings become a clear strategic foundation — positioning, messaging, and a creative direction that everyone aligns on before a pixel is pushed." },
            { step: "03", title: "Design", desc: "We design in the open, sharing work early and often. Feedback loops are tight; surprises are rare." },
            { step: "04", title: "Deliver", desc: "Final assets, handoffs, and documentation are meticulous. We don't disappear at launch — we're there for 30 days of support." },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.7rem",
                  color: "#2F6BFF",
                  letterSpacing: "0.08em",
                  marginBottom: "1rem",
                }}
              >
                {item.step}
              </div>
              <h3
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  color: "#FFFFFF",
                  margin: "0 0 0.75rem",
                  letterSpacing: "-0.02em",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.875rem",
                  color: "#A1A1A1",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .services-layout { grid-template-columns: 1fr !important; }
          .services-preview { display: none !important; }
          .process-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
