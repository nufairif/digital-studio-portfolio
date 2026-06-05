export function Footer() {
  const socials = ["Twitter", "Instagram", "LinkedIn", "Dribbble"];

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(237,234,228,0.08)",
        padding: "3rem 2.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "2rem",
      }}
    >
      <div>
        <div
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "#EDEAE4",
            letterSpacing: "-0.02em",
            marginBottom: "0.5rem",
          }}
        >
          Matterlab<span style={{ color: "#C8FF47" }}></span>
        </div>
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.8rem",
            color: "#888480",
          }}
        >
          © 2026 Matterlab. All rights reserved.
        </div>
      </div>

      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {socials.map((s) => (
          <button
            key={s}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.8rem",
              color: "#888480",
              background: "none",
              border: "none",
              cursor: "pointer",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#EDEAE4")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#888480")}
          >
            {s}
          </button>
        ))}
      </div>

      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.65rem",
          color: "#888480",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        Amsterdam, NL · EST. 2017
      </div>
    </footer>
  );
}
