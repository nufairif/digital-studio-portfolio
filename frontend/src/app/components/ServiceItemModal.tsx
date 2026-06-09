import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import type { ServiceCategory, ServiceItem } from "../data/ptsup";

type Props = {
  open: boolean;
  category: ServiceCategory | null;
  item: ServiceItem | null;
  onClose: () => void;
  onSelectItem: (item: ServiceItem) => void;
  onBackToCategory: () => void;
};

function getHighlights(item: ServiceItem, categoryTitle: string) {
  if (item.highlights?.length) return item.highlights;
  return [
    `Layanan ${item.name} dengan standar profesional PT SUP`,
    `Solusi ${categoryTitle} yang disesuaikan kebutuhan bisnis Anda`,
    "Konsultasi dan dukungan operasional berkelanjutan",
  ];
}

function getPreviewImage(
  item: ServiceItem | null,
  category: ServiceCategory | null,
): string | undefined {
  if (!category) return undefined;
  return item?.image ?? category.image;
}

function ServicePreviewImage({
  src,
  alt,
  label,
  compact = false,
}: {
  src: string;
  alt: string;
  label?: string;
  compact?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      style={{
        borderRadius: compact ? "0.4rem" : "0.75rem",
        overflow: "hidden",
        border: "1px solid #E0E0E0",
        background: failed
          ? "linear-gradient(135deg, #1A8B9D 0%, #FF6600 100%)"
          : "#F5F5F5",
        flexShrink: 0,
        width: compact ? "4.5rem" : "100%",
        height: compact ? "4.5rem" : undefined,
        aspectRatio: compact ? undefined : "16 / 9",
        marginBottom: compact ? 0 : "1.25rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {failed ? (
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: compact ? "0.55rem" : "0.85rem",
            fontWeight: 600,
            color: "#FFFFFF",
            textAlign: "center",
            padding: compact ? "0.25rem" : "1rem",
            lineHeight: 1.3,
          }}
        >
          {label ?? "PT SUP"}
        </span>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          style={{
            width: "100%",
            height: compact ? "100%" : "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      )}
    </div>
  );
}

export function ServiceItemModal({
  open,
  category,
  item,
  onClose,
  onSelectItem,
  onBackToCategory,
}: Props) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (item) onBackToCategory();
        else onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, item, onClose, onBackToCategory]);

  if (typeof document === "undefined") return null;

  const highlights = item && category ? getHighlights(item, category.title) : [];
  const previewImage = category ? getPreviewImage(item, category) : undefined;

  return createPortal(
    <AnimatePresence>
      {open && category && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
            background: "rgba(10, 10, 10, 0.55)",
            backdropFilter: "blur(4px)",
          }}
          onClick={onClose}
          role="presentation"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            style={{
              width: "100%",
              maxWidth: item ? "560px" : "560px",
              maxHeight: "85vh",
              overflowY: "auto",
              background: "#FFFFFF",
              borderRadius: "1rem",
              border: "1px solid #E0E0E0",
              padding: "2rem",
              boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
            }}
          >
            {previewImage && (
              <ServicePreviewImage
                src={previewImage}
                alt={item ? `Ilustrasi layanan ${item.name}` : `Ilustrasi ${category.title}`}
                label={item?.name ?? category.title}
              />
            )}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "1rem",
                marginBottom: "1.25rem",
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.65rem",
                    color: "#1A8B9D",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {category.title}
                </span>
                <h2
                  id="service-modal-title"
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.6rem",
                    color: "#1A1A1A",
                    margin: "0.4rem 0 0",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                  }}
                >
                  {item ? item.name : category.subtitle}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup"
                style={{
                  width: "2.25rem",
                  height: "2.25rem",
                  borderRadius: "50%",
                  border: "1px solid #E0E0E0",
                  background: "#F5F5F5",
                  color: "#6B6B6B",
                  cursor: "pointer",
                  fontSize: "1.1rem",
                  lineHeight: 1,
                  flexShrink: 0,
                }}
              >
                ×
              </button>
            </div>

            {!item ? (
              <>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.95rem",
                    color: "#6B6B6B",
                    lineHeight: 1.75,
                    margin: "0 0 1.5rem",
                  }}
                >
                  {category.description}
                </p>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.62rem",
                    color: "#FF6600",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                  }}
                >
                  Pilih Solusi ({category.items.length})
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {category.items.map((sub) => (
                    <button
                      key={sub.name}
                      type="button"
                      onClick={() => onSelectItem(sub)}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "1rem",
                        padding: "0.9rem 1rem",
                        border: "1px solid #E0E0E0",
                        borderRadius: "0.5rem",
                        background: "#FAFAFA",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                    >
                      {sub.image && (
                        <ServicePreviewImage
                          src={sub.image}
                          alt={`Pratinjau ${sub.name}`}
                          label={sub.name}
                          compact
                        />
                      )}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div
                          style={{
                            fontFamily: "'Bricolage Grotesque', sans-serif",
                            fontWeight: 700,
                            fontSize: "0.95rem",
                            color: "#1A1A1A",
                          }}
                        >
                          {sub.name}
                        </div>
                        <div
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "0.8rem",
                            color: "#6B6B6B",
                            marginTop: "0.15rem",
                          }}
                        >
                          {sub.desc}
                        </div>
                      </div>
                      <span style={{ color: "#FF6600", flexShrink: 0 }}>→</span>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={onBackToCategory}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.82rem",
                    color: "#6B6B6B",
                    background: "none",
                    border: "none",
                    padding: 0,
                    marginBottom: "1rem",
                    cursor: "pointer",
                  }}
                >
                  ← Kembali ke {category.title}
                </button>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.95rem",
                    color: "#6B6B6B",
                    lineHeight: 1.75,
                    margin: "0 0 1.5rem",
                  }}
                >
                  {item.desc}
                </p>
                <div style={{ marginBottom: "2rem" }}>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.62rem",
                      color: "#FF6600",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Yang Anda Dapatkan
                  </div>
                  <ul
                    style={{
                      margin: 0,
                      padding: 0,
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.6rem",
                    }}
                  >
                    {highlights.map((point) => (
                      <li
                        key={point}
                        style={{
                          display: "flex",
                          gap: "0.6rem",
                          alignItems: "flex-start",
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.88rem",
                          color: "#1A1A1A",
                          lineHeight: 1.5,
                        }}
                      >
                        <span style={{ color: "#FF6600", flexShrink: 0 }}>✦</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  <Link
                    to="/contact"
                    onClick={onClose}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.88rem",
                      color: "#FFFFFF",
                      background: "#FF6600",
                      borderRadius: "2rem",
                      padding: "0.75rem 1.5rem",
                      textDecoration: "none",
                    }}
                  >
                    Hubungi Kami
                  </Link>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export function useServiceModal() {
  const [category, setCategory] = useState<ServiceCategory | null>(null);
  const [item, setItem] = useState<ServiceItem | null>(null);

  return {
    category,
    item,
    openCategory: (cat: ServiceCategory) => {
      setCategory(cat);
      setItem(null);
    },
    openItem: (cat: ServiceCategory, selected: ServiceItem) => {
      setCategory(cat);
      setItem(selected);
    },
    closeModal: () => {
      setCategory(null);
      setItem(null);
    },
    setItem,
    modal: (
      <ServiceItemModal
        open={!!category}
        category={category}
        item={item}
        onClose={() => {
          setCategory(null);
          setItem(null);
        }}
        onSelectItem={setItem}
        onBackToCategory={() => setItem(null)}
      />
    ),
  };
}