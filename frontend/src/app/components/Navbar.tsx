import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router";
import { aboutNavItems } from "../data/ptsup";

const links = [
  { label: "Artikel", path: "/artikel" },
  { label: "Karir", path: "/karir" },
  { label: "Kontak", path: "/contact" },
];

type NavDropdownItem = { label: string; path: string };

function NavDropdownPanel({
  open,
  items,
  activePath,
}: {
  open: boolean;
  items: NavDropdownItem[];
  activePath: string;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 8, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 8, x: "-50%" }}
          transition={{ duration: 0.18 }}
          style={{
            position: "absolute",
            top: "calc(100% + 0.75rem)",
            left: "50%",
            minWidth: "200px",
            background: "#FFFFFF",
            border: "1px solid #E0E0E0",
            borderRadius: "0.75rem",
            padding: "0.5rem",
            boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
          }}
        >
          {items.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              style={{
                display: "block",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.82rem",
                color: activePath === item.path ? "#FF6600" : "#1A1A1A",
                textDecoration: "none",
                padding: "0.55rem 0.85rem",
                borderRadius: "0.5rem",
                transition: "background 0.2s, color 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,102,0,0.08)";
                e.currentTarget.style.color = "#FF6600";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color =
                  activePath === item.path ? "#FF6600" : "#1A1A1A";
              }}
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function NavDropdownTrigger({
  label,
  to,
  active,
  open,
}: {
  label: string;
  to: string;
  active: boolean;
  open: boolean;
}) {
  return (
    <Link
      to={to}
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 400,
        fontSize: "0.875rem",
        color: active ? "#1A1A1A" : "#6B6B6B",
        textDecoration: "none",
        letterSpacing: "0.02em",
        transition: "color 0.2s",
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.3rem",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#FF6600")}
      onMouseLeave={(e) =>
        (e.currentTarget.style.color = active ? "#1A1A1A" : "#6B6B6B")
      }
    >
      {label}
      <span
        style={{
          fontSize: "0.6rem",
          opacity: 0.7,
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.2s",
        }}
      >
        ▾
      </span>
      {active && (
        <span
          style={{
            position: "absolute",
            bottom: "-4px",
            left: 0,
            right: 0,
            height: "1px",
            background: "#FF6600",
          }}
        />
      )}
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMobileAboutOpen(false);
    setAboutOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname === path || location.pathname.startsWith(`${path}/`);

  const isAboutActive =
    location.pathname === "/about" ||
    location.pathname.startsWith("/about/") ||
    location.pathname === "/galeri";

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 2.5rem",
          height: "4.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
          background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid #E0E0E0"
            : "1px solid transparent",
          transition:
            "background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
        }}
      >
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "#1A1A1A",
            textDecoration: "none",
            letterSpacing: "-0.02em",
            display: "inline-flex",
            alignItems: "center",
            lineHeight: 1,
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          PT SUP<span style={{ color: "#FF6600" }}>.</span>
        </Link>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            minWidth: 0,
          }}
        >
          <div
            className="nav-links"
            style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}
          >
            <Link
              to="/services"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                fontSize: "0.875rem",
                color: isActive("/services") ? "#1A1A1A" : "#6B6B6B",
                textDecoration: "none",
                letterSpacing: "0.02em",
                transition: "color 0.2s",
                position: "relative",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FF6600")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = isActive("/services")
                  ? "#1A1A1A"
                  : "#6B6B6B")
              }
            >
              Layanan Kami
              {isActive("/services") && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "-4px",
                    left: 0,
                    right: 0,
                    height: "1px",
                    background: "#FF6600",
                  }}
                />
              )}
            </Link>

            <div
              className="nav-dropdown"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
              style={{ position: "relative" }}
            >
              <NavDropdownTrigger
                label="Tentang Kami"
                to="/about"
                active={isAboutActive}
                open={aboutOpen}
              />
              <NavDropdownPanel
                open={aboutOpen}
                items={aboutNavItems}
                activePath={location.pathname}
              />
            </div>

            {links.map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "0.875rem",
                  color: isActive(path) ? "#1A1A1A" : "#6B6B6B",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  transition: "color 0.2s",
                  position: "relative",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FF6600")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = isActive(path)
                    ? "#1A1A1A"
                    : "#6B6B6B")
                }
              >
                {label}
                {isActive(path) && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      left: 0,
                      right: 0,
                      height: "1px",
                      background: "#FF6600",
                    }}
                  />
                )}
              </Link>
            ))}
          </div>

          <Link
            to="/contact"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              fontSize: "0.8rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              background: "#FF6600",
              border: "none",
              borderRadius: "2rem",
              padding: "0.55rem 1.4rem",
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "opacity 0.2s, transform 0.2s",
              whiteSpace: "nowrap",
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
            Hubungi Kami
          </Link>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              flexDirection: "column",
              gap: "5px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
            }}
          >
            <span
              style={{
                width: 22,
                height: 1.5,
                background: "#1A1A1A",
                display: "block",
              }}
            />
            <span
              style={{
                width: 22,
                height: 1.5,
                background: "#1A1A1A",
                display: "block",
              }}
            />
            <span
              style={{
                width: 22,
                height: 1.5,
                background: "#1A1A1A",
                display: "block",
              }}
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99,
              background: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.5rem",
              padding: "2rem",
              overflowY: "auto",
            }}
          >
            <Link
              to="/services"
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
                fontSize: "2.5rem",
                color: isActive("/services") ? "#FF6600" : "#1A1A1A",
                textDecoration: "none",
              }}
            >
              Layanan Kami
            </Link>

            <button
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
                fontSize: "2.5rem",
                color: isAboutActive ? "#FF6600" : "#1A1A1A",
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              Tentang Kami
              <span style={{ fontSize: "1.25rem" }}>
                {mobileAboutOpen ? "▴" : "▾"}
              </span>
            </button>

            <AnimatePresence>
              {mobileAboutOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1rem",
                    overflow: "hidden",
                  }}
                >
                  {aboutNavItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 500,
                        fontSize: "1.1rem",
                        color:
                          location.pathname === item.path
                            ? "#FF6600"
                            : "#6B6B6B",
                        textDecoration: "none",
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {links.map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontWeight: 700,
                  fontSize: "2.5rem",
                  color: "#1A1A1A",
                  textDecoration: "none",
                }}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1100px) {
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}