import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import {
  pageServices as services,
  processSteps,
  serviceCategories,
  type ServiceCategory,
  type ServiceItem,
} from "../data/ptsup";
import { useServiceModal } from "../components/ServiceItemModal";

const detailToItem: Record<string, { category: string; item: string }> = {
  "tenaga administrasi kompeten": { category: "Alih Daya", item: "Admin" },
  "security berintegritas tinggi": { category: "Alih Daya", item: "Security" },
  "tim sales berpengalaman": { category: "Alih Daya", item: "Sales" },
  "driver andal dan aman": { category: "Alih Daya", item: "Driver" },
  "cleaning service profesional": { category: "Alih Daya", item: "Cleaning Service" },
  "sekretaris untuk dukungan manajerial": { category: "Alih Daya", item: "Sekretaris" },
  "sistem informasi akademik": { category: "Solusi Digital", item: "Sistem Informasi Akademik" },
  "customer relationship management (crm)": { category: "Solusi Digital", item: "CRM" },
  "tracking management system": { category: "Solusi Digital", item: "Tracking Management" },
  "pembuatan website profesional": { category: "Solusi Digital", item: "Pembuatan Website" },
  "layanan pengantaran obat (supeer)": { category: "Solusi Digital", item: "Pengantaran Obat" },
  "instalasi jaringan dan cctv": { category: "Solusi Digital", item: "Instalasi Teknologi" },
  "maintenance gedung & rope access": { category: "Layanan Fasilitas", item: "Maintenance Gedung" },
  "kebersihan unit dan ruang atm": { category: "Layanan Fasilitas", item: "Kebersihan ATM" },
  "servis cuci dan perbaikan ac": { category: "Layanan Fasilitas", item: "Maintenance AC" },
  "desain dan renovasi interior": { category: "Layanan Fasilitas", item: "Pembuatan Interior" },
  "pembuatan dan perawatan reklame": { category: "Layanan Fasilitas", item: "Papan Reklame" },
  "call center operasional": { category: "Solusi Digital", item: "CRM" },
  "tele marketing": { category: "Solusi Digital", item: "CRM" },
  "verification services": { category: "Solusi Digital", item: "CRM" },
  "desk collection": { category: "Solusi Digital", item: "CRM" },
  "pelaporan dan analitik": { category: "Solusi Digital", item: "CRM" },
  "integrasi sistem crm": { category: "Solusi Digital", item: "CRM" },
  "instalasi jaringan": { category: "Solusi Digital", item: "Instalasi Teknologi" },
  "sistem cctv": { category: "Solusi Digital", item: "Instalasi Teknologi" },
  "sistem akses ruangan": { category: "Solusi Digital", item: "Instalasi Teknologi" },
  "mesin antrian": { category: "Solusi Digital", item: "Instalasi Teknologi" },
  "maintenance berkala": { category: "Solusi Digital", item: "Instalasi Teknologi" },
  "dukungan teknis": { category: "Solusi Digital", item: "Instalasi Teknologi" },
};

function findServiceItem(detailLabel: string): {
  category: ServiceCategory;
  item: ServiceItem;
} | null {
  const mapped = detailToItem[detailLabel.toLowerCase()];
  if (mapped) {
    const category = serviceCategories.find((cat) => cat.title === mapped.category);
    const item = category?.items.find((sub) => sub.name === mapped.item);
    if (category && item) return { category, item };
  }

  const normalized = detailLabel.toLowerCase();
  for (const category of serviceCategories) {
    for (const item of category.items) {
      const itemName = item.name.toLowerCase();
      if (normalized.includes(itemName) || itemName.includes(normalized)) {
        return { category, item };
      }
    }
  }

  return null;
}

function categoryForServiceTitle(title: string): ServiceCategory | undefined {
  const direct = serviceCategories.find((cat) => cat.title === title);
  if (direct) return direct;
  if (title.includes("CRM") || title.includes("Instalasi")) {
    return serviceCategories.find((cat) => cat.title === "Solusi Digital");
  }
  return undefined;
}

export function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const { openCategory, openItem, modal } = useServiceModal();

  return (
    <main style={{ paddingTop: "4.5rem" }}>
      {/* Page header */}
      <section
        style={{
          padding: "5rem 2.5rem 4rem",
          borderBottom: "1px solid #E0E0E0",
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
              color: "#FF6600",
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
                color: "#1A1A1A",
                margin: 0,
                letterSpacing: "-0.04em",
                lineHeight: 0.95,
              }}
            >
              What we
              <br />
              <em style={{ fontStyle: "italic", color: "#FF6600" }}>terbaik.</em>
            </h1>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: "0.95rem",
                color: "#6B6B6B",
                maxWidth: "360px",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Tiga kategori layanan terintegrasi dalam satu mitra terpercaya —
              alih daya, solusi digital, dan layanan fasilitas untuk bisnis Anda.
              Klik item solusi pada accordion untuk membuka popup detail.
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
                  borderTop: "1px solid #E0E0E0",
                  cursor: "pointer",
                  borderLeft: activeIndex === i ? "2px solid #FF6600" : "2px solid transparent",
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
                      color: activeIndex === i ? "#FF6600" : "#6B6B6B",
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
                        color: "#1A1A1A",
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
                        color: activeIndex === i ? "#FF6600" : "#6B6B6B",
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
                          color: "#6B6B6B",
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
                        {service.details.map((d) => {
                          const match = findServiceItem(d);
                          return (
                            <li key={d}>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (match) {
                                    openItem(match.category, match.item);
                                  } else {
                                    const cat = categoryForServiceTitle(service.title);
                                    if (cat) openCategory(cat);
                                  }
                                }}
                                style={{
                                  fontFamily: "'DM Sans', sans-serif",
                                  fontSize: "0.82rem",
                                  color: "#6B6B6B",
                                  display: "flex",
                                  gap: "0.5rem",
                                  alignItems: "center",
                                  background: "none",
                                  border: "none",
                                  padding: 0,
                                  cursor: "pointer",
                                  textAlign: "left",
                                  width: "100%",
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.color = "#FF6600";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.color = "#6B6B6B";
                                }}
                              >
                                <span style={{ color: "#FF6600", fontSize: "0.5rem" }}>✦</span>
                                {d}
                                <span style={{ marginLeft: "auto", fontSize: "0.72rem" }}>→</span>
                              </button>
                            </li>
                          );
                        })}
                      </ul>

                      <div
                        style={{
                          display: "flex",
                          gap: "2rem",
                          flexWrap: "wrap",
                          paddingTop: "1rem",
                          borderTop: "1px solid #E0E0E0",
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
                                color: "#6B6B6B",
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
                                color: "#1A1A1A",
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
                            background: "#FF6600",
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
                          Konsultasi →
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "50%",
                      border: `1px solid ${activeIndex === i ? "#FF6600" : "#E0E0E0"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: activeIndex === i ? "#FF6600" : "#6B6B6B",
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
            <div style={{ borderTop: "1px solid #E0E0E0" }} />
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
                background: "#F5F5F5",
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
                background: "#F5F5F5",
                borderRadius: "0.75rem",
                border: "1px solid #E0E0E0",
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  color: "#6B6B6B",
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
                  color: "#1A1A1A",
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
          borderTop: "1px solid #E0E0E0",
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
              color: "#FF6600",
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
              color: "#1A1A1A",
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
          {processSteps.map((item, i) => (
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
                  color: "#FF6600",
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
                  color: "#1A1A1A",
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
                  color: "#6B6B6B",
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

      {modal}

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
