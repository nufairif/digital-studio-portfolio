import { motion } from "motion/react";
import { Link } from "react-router";

const team = [
  {
    name: "Mara Voss",
    role: "Creative Director",
    bio: "12 years crafting brand identities for global companies. Ex-Wolff Olins, ex-Pentagram.",
    image:
      "https://images.unsplash.com/photo-1552821773-37cbce3a7965?w=400&h=500&fit=crop&auto=format",
  },
  {
    name: "Kai Tanaka",
    role: "Design Lead",
    bio: "Product design veteran. Led design at two Series B startups before joining Matterlab.",
    image:
      "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=400&h=500&fit=crop&auto=format",
  },
  {
    name: "Lena Möller",
    role: "Motion Director",
    bio: "Award-winning motion designer. Cannes Lions and D&AD shortlisted.",
    image:
      "https://images.unsplash.com/photo-1532191568455-f90e2806b900?w=400&h=500&fit=crop&auto=format",
  },
  {
    name: "Omar Silva",
    role: "Technical Director",
    bio: "Frontend architect obsessed with performance. Contributes to React and WebGL communities.",
    image:
      "https://images.unsplash.com/photo-1536675572774-1b66ac2e26e9?w=400&h=500&fit=crop&auto=format",
  },
];

const values = [
  {
    title: "Radical Intentionality",
    description:
      "Nothing goes in without a reason. Every design decision is deliberate, every line of copy earns its place. We don't default to convention.",
  },
  {
    title: "Full Presence",
    description:
      "We're selective so we can be present. When we take on a project, we're fully committed — no B-team, no passive output.",
  },
  {
    title: "Honest Craft",
    description:
      "Great work takes time and honesty. We push back when needed, propose alternatives, and always say what we think — not what clients want to hear.",
  },
  {
    title: "Long-Term Thinking",
    description:
      "Trends fade. We build brand systems designed to outlast them — frameworks that give future teams room to grow without breaking the foundation.",
  },
];

const clients = [
  "Meridian Capital",
  "Flux Studio",
  "Aethon Health",
  "Prism Agency",
  "Solstice Group",
  "Verdant",
  "Cascade",
  "North Collective",
];

export function AboutPage() {
  return (
    <main style={{ paddingTop: "4.5rem" }}>
      {/* Hero */}
      <section
        style={{
          padding: "5rem 2.5rem 4rem",
          borderBottom: "1px solid rgba(237,234,228,0.08)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
            Est. 2017
          </span>
          <h1
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(3rem, 8vw, 7rem)",
              color: "#EDEAE4",
              margin: "0 0 3rem",
              letterSpacing: "-0.04em",
              lineHeight: 0.92,
              maxWidth: "900px",
            }}
          >
            A studio built on
            <br />
            <em style={{ fontStyle: "italic", color: "#C8FF47" }}>obsessive</em>
            <br />
            intentionality.
          </h1>
        </motion.div>

        {/* Intro text columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
          className="two-col"
        >
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "1.05rem",
              color: "#EDEAE4",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            We're Matterlab Studio — a small, tight-knit team of designers and
            engineers who believe the best digital work comes from one thing:
            radical intentionality. No filler. No fluff. Just work that earns
            its place in the world.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "1.05rem",
              color: "#888480",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            Founded in Amsterdam in 2017, we've partnered with startups,
            cultural institutions, and global brands to create digital
            experiences that endure. We're selective about what we take on — not
            because we're precious about it, but because great work demands full
            presence.
          </motion.p>
        </div>
      </section>

      {/* Full-width image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          height: "60vh",
          overflow: "hidden",
          background: "#111",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1708778002477-75611274f23d?w=1600&h=900&fit=crop&auto=format"
          alt="Studio space"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </motion.div>

      {/* Stats row */}
      <section
        style={{
          padding: "5rem 2.5rem",
          borderBottom: "1px solid rgba(237,234,228,0.08)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2rem",
          }}
          className="stats-grid"
        >
          {[
            { value: "8+", label: "Years in business" },
            { value: "120+", label: "Projects shipped" },
            { value: "40+", label: "Brands elevated" },
            { value: "3", label: "Continents worked across" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              style={{
                borderLeft: "1px solid rgba(237,234,228,0.08)",
                paddingLeft: "2rem",
              }}
            >
              <div
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.5rem, 4vw, 4rem)",
                  color: "#EDEAE4",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.85rem",
                  color: "#888480",
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section
        style={{
          padding: "6rem 2.5rem",
          borderBottom: "1px solid rgba(237,234,228,0.08)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "4rem" }}
        >
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
            What We Believe
          </span>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "#EDEAE4",
              margin: 0,
              letterSpacing: "-0.03em",
            }}
          >
            Our Values
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "3rem 5rem",
          }}
          className="two-col"
        >
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "0.75rem",
                }}
              >
                <span style={{ color: "#C8FF47", fontSize: "0.5rem" }}>✦</span>
                <h3
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    color: "#EDEAE4",
                    margin: 0,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {value.title}
                </h3>
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.9rem",
                  color: "#888480",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section
        style={{
          padding: "6rem 2.5rem",
          borderBottom: "1px solid rgba(237,234,228,0.08)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "4rem" }}
        >
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
            The People
          </span>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "#EDEAE4",
              margin: 0,
              letterSpacing: "-0.03em",
            }}
          >
            Meet the Studio
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
          }}
          className="team-grid"
        >
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              style={{ position: "relative" }}
            >
              <div
                style={{
                  borderRadius: "0.75rem",
                  overflow: "hidden",
                  aspectRatio: "3/4",
                  background: "#111",
                  marginBottom: "1.25rem",
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <h3
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "#EDEAE4",
                  margin: "0 0 0.2rem",
                  letterSpacing: "-0.02em",
                }}
              >
                {member.name}
              </h3>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.68rem",
                  color: "#C8FF47",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                {member.role}
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.82rem",
                  color: "#888480",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section
        style={{
          padding: "5rem 2.5rem",
          borderBottom: "1px solid rgba(237,234,228,0.08)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "3rem" }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              color: "#888480",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "block",
            }}
          >
            Trusted By
          </span>
        </motion.div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1rem",
          }}
          className="clients-grid"
        >
          {clients.map((client, i) => (
            <motion.div
              key={client}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              style={{
                border: "1px solid rgba(237,234,228,0.08)",
                borderRadius: "0.5rem",
                padding: "1.5rem",
                textAlign: "center",
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "#888480",
                letterSpacing: "-0.01em",
                transition: "color 0.2s, border-color 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.color = "#EDEAE4";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(237,234,228,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.color = "#888480";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(237,234,228,0.08)";
              }}
            >
              {client}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "6rem 2.5rem",
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
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              color: "#EDEAE4",
              margin: "0 0 2rem",
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            Want to work with us?
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
            Start a Conversation →
          </Link>
        </motion.div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .two-col { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .team-grid { grid-template-columns: 1fr 1fr !important; }
          .clients-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .stats-grid { grid-template-columns: 1fr !important; }
          .team-grid { grid-template-columns: 1fr !important; }
          .clients-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
