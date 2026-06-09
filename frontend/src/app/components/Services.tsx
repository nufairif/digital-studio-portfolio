import { motion } from "motion/react";
import { Link } from "react-router";
import { serviceCategories } from "../data/ptsup";
import { useServiceModal } from "./ServiceItemModal";

export function Services() {
  const { openCategory, modal } = useServiceModal();

  return (
    <section
      id="services"
      style={{
        padding: "6rem 2.5rem",
        borderTop: "1px solid #E0E0E0",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "1.5rem",
          marginBottom: "3rem",
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
            Layanan Kami
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
            Tiga Pilar Layanan
          </h2>
        </div>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: "0.92rem",
            color: "#6B6B6B",
            maxWidth: "380px",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          Klik kartu layanan untuk membuka popup detail solusi.
        </p>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1rem",
        }}
      >
        {serviceCategories.map((cat, i) => (
          <motion.button
            key={cat.title}
            type="button"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            onClick={() => openCategory(cat)}
            style={{
              border: "1px solid #E0E0E0",
              borderRadius: "0.75rem",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              textAlign: "left",
              background: "#FFFFFF",
              cursor: "pointer",
              transition: "border-color 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#FF6600";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#E0E0E0";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.62rem",
                  color: "#FF6600",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.35rem",
                  color: "#1A1A1A",
                  margin: "0.35rem 0 0.5rem",
                }}
              >
                {cat.title}
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.88rem",
                  color: "#6B6B6B",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {cat.description}
              </p>
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.8rem",
                color: "#6B6B6B",
              }}
            >
              {cat.items.length} solusi · Klik untuk popup
            </div>
          </motion.button>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ marginTop: "2.5rem", textAlign: "center" }}
      >
        <Link
          to="/services"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: "0.88rem",
            color: "#FFFFFF",
            background: "#FF6600",
            borderRadius: "2rem",
            padding: "0.8rem 1.75rem",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Halaman Layanan Lengkap →
        </Link>
      </motion.div>

      {modal}
    </section>
  );
}