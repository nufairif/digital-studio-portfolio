import { useState } from "react";
import { motion } from "motion/react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const budgets = ["< $10k", "$10k–25k", "$25k–50k", "$50k+"];

  return (
    <section
      id="contact"
      style={{
        padding: "6rem 2.5rem",
        borderTop: "1px solid #262626",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "start",
        }}
      >
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
            Get in Touch
          </span>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
              color: "#FFFFFF",
              margin: "0 0 2rem",
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            Start a
            <br />
            <em style={{ fontStyle: "italic", color: "#2F6BFF" }}>project</em>
            <br />
            with us.
          </h2>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "0.95rem",
              color: "#A1A1A1",
              lineHeight: 1.7,
              marginBottom: "3rem",
            }}
          >
            Have a project in mind? Tell us about it. We'll get back to you
            within 48 hours to explore how we can help.
          </p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {[
              { label: "Email", value: "hello@matterlab" },
              { label: "New Business", value: "projects@matterlab" },
              { label: "Location", value: "Amsterdam · Remote" },
            ].map(({ label, value }) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.65rem",
                    color: "#A1A1A1",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "0.3rem",
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.95rem",
                    color: "#FFFFFF",
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {submitted ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                minHeight: "400px",
                textAlign: "center",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  width: "4rem",
                  height: "4rem",
                  borderRadius: "50%",
                  background: "#2F6BFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                }}
              >
                ✓
              </div>
              <h3
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  fontSize: "2rem",
                  color: "#FFFFFF",
                  margin: 0,
                  letterSpacing: "-0.02em",
                }}
              >
                Message sent.
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#A1A1A1",
                  maxWidth: "320px",
                  lineHeight: 1.6,
                  fontSize: "0.9rem",
                }}
              >
                Thanks for reaching out. We'll be in touch within 48 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {/* Name + Email */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                }}
              >
                <div>
                  <label
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.65rem",
                      color: "#A1A1A1",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your name"
                    style={{
                      width: "100%",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.9rem",
                      color: "#FFFFFF",
                      background: "#141414",
                      border: "1px solid #262626",
                      borderRadius: "0.5rem",
                      padding: "0.85rem 1rem",
                      outline: "none",
                      transition: "border-color 0.2s",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(47,107,255,0.45)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "#262626")
                    }
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.65rem",
                      color: "#A1A1A1",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="you@company.com"
                    style={{
                      width: "100%",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.9rem",
                      color: "#FFFFFF",
                      background: "#141414",
                      border: "1px solid #262626",
                      borderRadius: "0.5rem",
                      padding: "0.85rem 1rem",
                      outline: "none",
                      transition: "border-color 0.2s",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(47,107,255,0.45)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "#262626")
                    }
                  />
                </div>
              </div>

              {/* Budget */}
              <div>
                <label
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.65rem",
                    color: "#A1A1A1",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "0.75rem",
                  }}
                >
                  Budget Range
                </label>
                <div
                  style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}
                >
                  {budgets.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: b })}
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.82rem",
                        padding: "0.5rem 1.1rem",
                        borderRadius: "2rem",
                        border: `1px solid ${formData.budget === b ? "#2F6BFF" : "#262626"}`,
                        background:
                          formData.budget === b
                            ? "rgba(47,107,255,0.14)"
                            : "transparent",
                        color: formData.budget === b ? "#2F6BFF" : "#A1A1A1",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.65rem",
                    color: "#A1A1A1",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  Tell us about your project
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="What are you building? What's the timeline? What matters most?"
                  rows={5}
                  style={{
                    width: "100%",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.9rem",
                    color: "#FFFFFF",
                    background: "#141414",
                    border: "1px solid #262626",
                    borderRadius: "0.5rem",
                    padding: "0.85rem 1rem",
                    outline: "none",
                    resize: "none",
                    transition: "border-color 0.2s",
                    boxSizing: "border-box",
                    lineHeight: 1.6,
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(47,107,255,0.45)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor =
                      "#262626")
                  }
                />
              </div>

              <button
                type="submit"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  letterSpacing: "0.04em",
                  color: "#FFFFFF",
                  background: "#2F6BFF",
                  border: "none",
                  borderRadius: "0.5rem",
                  padding: "1rem",
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
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        #contact > div { }
        @media (max-width: 900px) {
          #contact > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
        input::placeholder, textarea::placeholder { color: #555; }
      `}</style>
    </section>
  );
}
