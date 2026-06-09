import { Link } from "react-router";
import { company, footerLinks } from "../data/ptsup";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #E0E0E0",
        padding: "4rem 2.5rem 3rem",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr 1fr",
          gap: "3rem",
          marginBottom: "3rem",
        }}
        className="footer-grid"
      >
        <div>
          <div
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontWeight: 700,
              fontSize: "1.1rem",
              color: "#1A1A1A",
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            {company.shortName}<span style={{ color: "#FF6600" }}>.</span>
          </div>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.85rem",
              color: "#6B6B6B",
              lineHeight: 1.7,
              margin: "0 0 1.25rem",
              maxWidth: "320px",
            }}
          >
            Solusi terdepan untuk kebutuhan alih daya dan teknologi digital
            perusahaan Anda.
          </p>
          <a
            href={company.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.85rem",
              color: "#FF6600",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Instagram ↗
          </a>
        </div>

        <div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.65rem",
              color: "#6B6B6B",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Menu
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
            }}
          >
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.85rem",
                  color: "#6B6B6B",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.65rem",
              color: "#6B6B6B",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Kontak Kami
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.85rem",
              color: "#6B6B6B",
              lineHeight: 1.6,
            }}
          >
            <a href={`tel:${company.phone.replace(/\D/g, "")}`} style={{ color: "inherit", textDecoration: "none" }}>
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`} style={{ color: "inherit", textDecoration: "none" }}>
              {company.email}
            </a>
            <a
              href={company.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {company.address}
            </a>
            <span>{company.operatingHours.weekdays}</span>
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #E0E0E0",
          paddingTop: "1.5rem",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.8rem",
          color: "#6B6B6B",
        }}
      >
        <span>© 2026 {company.name}. All rights reserved.</span>
        <span>Jakarta Selatan · Est. 2019</span>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}