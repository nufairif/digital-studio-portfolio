import { useState } from "react";
import { motion } from "motion/react";

const budgets = [
  "< $10k",
  "$10k – $25k",
  "$25k – $50k",
  "$50k – $100k",
  "$100k+",
];
const services = [
  "Brand Identity",
  "Web Design",
  "UI/UX Design",
  "Motion & 3D",
  "Creative Direction",
  "Other",
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    services: [] as string[],
    message: "",
    timeline: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (svc: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(svc)
        ? prev.services.filter((s) => s !== svc)
        : [...prev.services, svc],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.9rem",
    color: "#FFFFFF",
    background: "#141414",
    border: "1px solid #262626",
    borderRadius: "0.5rem",
    padding: "0.9rem 1.1rem",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
    lineHeight: 1.5,
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "0.65rem",
    color: "#A1A1A1",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "0.6rem",
  };

  if (submitted) {
    return (
      <main
        style={{
          paddingTop: "4.5rem",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: "center", padding: "3rem" }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            style={{
              width: "5rem",
              height: "5rem",
              borderRadius: "50%",
              background: "#2F6BFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.75rem",
              margin: "0 auto 2rem",
            }}
          >
            ✓
          </motion.div>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "3rem",
              color: "#FFFFFF",
              margin: "0 0 1rem",
              letterSpacing: "-0.03em",
            }}
          >
            Message sent.
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "1rem",
              color: "#A1A1A1",
              lineHeight: 1.7,
              maxWidth: "380px",
              margin: "0 auto 2.5rem",
            }}
          >
            Thanks {formData.name ? formData.name.split(" ")[0] : ""}! We've
            received your message and will respond within 48 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.85rem",
              color: "#A1A1A1",
              background: "none",
              border: "1px solid #262626",
              borderRadius: "2rem",
              padding: "0.6rem 1.5rem",
              cursor: "pointer",
              transition: "color 0.2s, border-color 0.2s",
            }}
          >
            Send another message
          </button>
        </motion.div>
      </main>
    );
  }

  return (
    <main style={{ paddingTop: "4.5rem" }}>
      {/* Header */}
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
            Get in Touch
          </span>
          <h1
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(3rem, 7vw, 6rem)",
              color: "#FFFFFF",
              margin: "0 0 1.5rem",
              letterSpacing: "-0.04em",
              lineHeight: 0.92,
            }}
          >
            Let's start
            <br />
            <em style={{ fontStyle: "italic", color: "#2F6BFF" }}>something</em>
            <br />
            great.
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "1rem",
              color: "#A1A1A1",
              lineHeight: 1.7,
              maxWidth: "440px",
              margin: 0,
            }}
          >
            Fill out the form below and we'll respond within 48 hours. We read
            every message and respond personally.
          </p>
        </motion.div>
      </section>

      {/* Main content */}
      <section style={{ padding: "4rem 2.5rem 6rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 480px",
            gap: "6rem",
            alignItems: "start",
          }}
          className="contact-layout"
        >
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            {/* Name + Company */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
              className="two-col-sm"
            >
              <div>
                <label style={labelStyle}>Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Jane Smith"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(47,107,255,0.45)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor =
                      "#262626")
                  }
                />
              </div>
              <div>
                <label style={labelStyle}>Company</label>
                <input
                  type="text"
                  placeholder="Acme Corp"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(47,107,255,0.45)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor =
                      "#262626")
                  }
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label style={labelStyle}>Email *</label>
              <input
                type="email"
                required
                placeholder="jane@acme.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                style={inputStyle}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(47,107,255,0.45)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = "#262626")
                }
              />
            </div>

            {/* Services */}
            <div>
              <label style={labelStyle}>Services needed</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {services.map((svc) => {
                  const selected = formData.services.includes(svc);
                  return (
                    <button
                      key={svc}
                      type="button"
                      onClick={() => toggleService(svc)}
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.82rem",
                        padding: "0.5rem 1.1rem",
                        borderRadius: "2rem",
                        border: `1px solid ${selected ? "#2F6BFF" : "#262626"}`,
                        background: selected
                          ? "rgba(47,107,255,0.14)"
                          : "transparent",
                        color: selected ? "#2F6BFF" : "#A1A1A1",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                    >
                      {selected ? "✓ " : ""}
                      {svc}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Budget */}
            <div>
              <label style={labelStyle}>Budget Range</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {budgets.map((b) => {
                  const selected = formData.budget === b;
                  return (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: b })}
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.82rem",
                        padding: "0.5rem 1.1rem",
                        borderRadius: "2rem",
                        border: `1px solid ${selected ? "#2F6BFF" : "#262626"}`,
                        background: selected
                          ? "rgba(47,107,255,0.14)"
                          : "transparent",
                        color: selected ? "#2F6BFF" : "#A1A1A1",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                    >
                      {b}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <label style={labelStyle}>Ideal Timeline</label>
              <input
                type="text"
                placeholder="e.g. Q3 2026, ASAP, 3 months"
                value={formData.timeline}
                onChange={(e) =>
                  setFormData({ ...formData, timeline: e.target.value })
                }
                style={inputStyle}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(47,107,255,0.45)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = "#262626")
                }
              />
            </div>

            {/* Message */}
            <div>
              <label style={labelStyle}>Tell us about your project *</label>
              <textarea
                required
                rows={6}
                placeholder="What are you building? What's the context? What matters most to you?"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                style={{ ...inputStyle, resize: "none" }}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(47,107,255,0.45)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = "#262626")
                }
              />
            </div>

            <button
              type="submit"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.95rem",
                color: "#FFFFFF",
                background: "#2F6BFF",
                border: "none",
                borderRadius: "0.5rem",
                padding: "1.1rem",
                cursor: "pointer",
                transition: "opacity 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.85";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Send Message →
            </button>
          </motion.form>

          {/* Right sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            style={{
              position: "sticky",
              top: "6rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
            className="contact-sidebar"
          >
            {/* Status card */}
            <div
              style={{
                background: "#141414",
                border: "1px solid #262626",
                borderRadius: "0.75rem",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  marginBottom: "1.25rem",
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#2F6BFF",
                    boxShadow: "0 0 8px #2F6BFF",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.7rem",
                    color: "#2F6BFF",
                    letterSpacing: "0.08em",
                  }}
                >
                  Currently Available
                </span>
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.875rem",
                  color: "#A1A1A1",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                We're open to new projects starting Q3 2026. We take on 2–3 new
                clients per quarter to ensure full focus.
              </p>
            </div>

            {/* Contact details */}
            <div
              style={{
                background: "#141414",
                border: "1px solid #262626",
                borderRadius: "0.75rem",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {[
                { label: "General", value: "hello@matterlab" },
                { label: "New Business", value: "projects@matterlab" },
                { label: "Location", value: "Amsterdam, Netherlands" },
                { label: "Response Time", value: "Within 48 hours" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.62rem",
                      color: "#A1A1A1",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.9rem",
                      color: "#FFFFFF",
                    }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div
              style={{
                background: "#141414",
                border: "1px solid #262626",
                borderRadius: "0.75rem",
                padding: "1.5rem 2rem",
              }}
            >
              <div style={labelStyle}>Follow Us</div>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                {["Twitter", "Instagram", "LinkedIn", "Dribbble"].map((s) => (
                  <button
                    key={s}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.82rem",
                      color: "#A1A1A1",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#FFFFFF")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#A1A1A1")
                    }
                  >
                    {s} ↗
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        input::placeholder, textarea::placeholder { color: #444; }
        @media (max-width: 900px) {
          .contact-layout { grid-template-columns: 1fr !important; }
          .contact-sidebar { position: static !important; }
          .two-col-sm { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
