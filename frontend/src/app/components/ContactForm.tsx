import { useState } from "react";
import { Link } from "react-router";
import { company } from "../data/ptsup";

type FormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

const emptyForm: FormData = {
  name: "",
  email: "",
  company: "",
  phone: "",
  message: "",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "0.9rem",
  color: "#1A1A1A",
  background: "#F5F5F5",
  border: "1px solid #E0E0E0",
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
  color: "#6B6B6B",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  display: "block",
  marginBottom: "0.6rem",
};

function sendViaMailto(data: FormData) {
  const subject = `Pesan dari ${data.name}${data.company ? ` — ${data.company}` : ""}`;
  const body = [
    `Nama: ${data.name}`,
    `Email: ${data.email}`,
    `Perusahaan: ${data.company || "-"}`,
    `Telepon: ${data.phone || "-"}`,
    "",
    data.message,
  ].join("\n");

  window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendViaMailto(formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ textAlign: compact ? "center" : "left", padding: compact ? "2rem 0" : 0 }}>
        <div
          style={{
            width: "4rem",
            height: "4rem",
            borderRadius: "50%",
            background: "#FF6600",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
            margin: compact ? "0 auto 1.5rem" : "0 0 1.5rem",
            color: "#FFFFFF",
          }}
        >
          ✓
        </div>
        <h3
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 700,
            fontSize: compact ? "1.75rem" : "2rem",
            color: "#1A1A1A",
            margin: "0 0 1rem",
          }}
        >
          Pesan terkirim
        </h3>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: "#6B6B6B",
            lineHeight: 1.6,
            fontSize: "0.9rem",
            margin: "0 0 1.5rem",
          }}
        >
          Terima kasih, {formData.name.split(" ")[0] || "Anda"}. Tim kami akan menghubungi Anda
          dalam 1–2 hari kerja.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData(emptyForm);
            setAgreed(false);
          }}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.85rem",
            color: "#6B6B6B",
            background: "none",
            border: "1px solid #E0E0E0",
            borderRadius: "2rem",
            padding: "0.6rem 1.5rem",
            cursor: "pointer",
          }}
        >
          Kirim pesan lain
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: compact ? "1.25rem" : "1.5rem" }}
    >
      <div style={{ display: "grid", gridTemplateColumns: compact ? "1fr" : "1fr 1fr", gap: "1rem" }}>
        <div>
          <label style={labelStyle}>Nama Lengkap *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Nama Anda"
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Email *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="email@perusahaan.com"
            style={inputStyle}
          />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: compact ? "1fr" : "1fr 1fr", gap: "1rem" }}>
        <div>
          <label style={labelStyle}>Nama Perusahaan</label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Nama perusahaan"
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>No. Telepon</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="08xx xxxx xxxx"
            style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Pesan *</label>
        <textarea
          required
          rows={compact ? 4 : 6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Ceritakan kebutuhan bisnis Anda..."
          style={{ ...inputStyle, resize: "none" }}
        />
      </div>

      <label
        style={{
          display: "flex",
          gap: "0.6rem",
          alignItems: "flex-start",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.82rem",
          color: "#6B6B6B",
          lineHeight: 1.5,
          cursor: "pointer",
        }}
      >
        <input
          type="checkbox"
          required
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          style={{ marginTop: "0.2rem", accentColor: "#FF6600" }}
        />
        <span>
          Dengan mengirimkan formulir ini, Anda menyetujui{" "}
          <Link to="/kebijakan-privasi" style={{ color: "#FF6600" }}>
            Kebijakan Privasi
          </Link>{" "}
          kami.
        </span>
      </label>

      <button
        type="submit"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 600,
          fontSize: "0.9rem",
          color: "#FFFFFF",
          background: "#FF6600",
          border: "none",
          borderRadius: "0.5rem",
          padding: "1rem",
          cursor: "pointer",
        }}
      >
        Kirim Pesan →
      </button>
    </form>
  );
}

export function ContactInfo({ showHours = true }: { showHours?: boolean }) {
  const items = [
    { label: "Telepon", value: company.phone },
    { label: "Email", value: company.email },
    { label: "Alamat", value: company.address },
    ...(showHours
      ? [
          { label: "Jam Operasional", value: company.operatingHours.weekdays },
          { label: "Akhir Pekan", value: company.operatingHours.weekend },
        ]
      : []),
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      {items.map(({ label, value }) => (
        <div key={label}>
          <div style={labelStyle}>{label}</div>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.9rem",
              color: "#1A1A1A",
              lineHeight: 1.5,
            }}
          >
            {value}
          </div>
        </div>
      ))}
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
        Instagram @swadharma_up ↗
      </a>
    </div>
  );
}