import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "../public/images/services");

const items = [
  { file: "alih-daya", label: "Alih Daya", c1: "#1A8B9D", c2: "#FF6600" },
  { file: "admin", label: "Admin", c1: "#1A8B9D", c2: "#0E6B7A" },
  { file: "security", label: "Security", c1: "#1A8B9D", c2: "#125E6B" },
  { file: "sales", label: "Sales", c1: "#FF6600", c2: "#CC5200" },
  { file: "driver", label: "Driver", c1: "#1A8B9D", c2: "#FF6600" },
  { file: "cleaning-service", label: "Cleaning Service", c1: "#1A8B9D", c2: "#4DB8C9" },
  { file: "sekretaris", label: "Sekretaris", c1: "#FF6600", c2: "#1A8B9D" },
  { file: "solusi-digital", label: "Solusi Digital", c1: "#FF6600", c2: "#1A1A1A" },
  { file: "sistem-informasi-akademik", label: "SIA", c1: "#FF6600", c2: "#1A8B9D" },
  { file: "crm", label: "CRM", c1: "#1A8B9D", c2: "#FF6600" },
  { file: "tracking-management", label: "Tracking", c1: "#FF6600", c2: "#CC5200" },
  { file: "pembuatan-website", label: "Website", c1: "#1A8B9D", c2: "#0E6B7A" },
  { file: "pengantaran-obat", label: "SUPeer", c1: "#FF6600", c2: "#1A8B9D" },
  { file: "instalasi-teknologi", label: "Instalasi", c1: "#1A1A1A", c2: "#FF6600" },
  { file: "layanan-fasilitas", label: "Layanan Fasilitas", c1: "#1A8B9D", c2: "#6B6B6B" },
  { file: "maintenance-gedung", label: "Maintenance Gedung", c1: "#1A8B9D", c2: "#125E6B" },
  { file: "kebersihan-atm", label: "Kebersihan ATM", c1: "#FF6600", c2: "#1A8B9D" },
  { file: "maintenance-ac", label: "Maintenance AC", c1: "#1A8B9D", c2: "#4DB8C9" },
  { file: "pembuatan-interior", label: "Interior", c1: "#FF6600", c2: "#CC5200" },
  { file: "papan-reklame", label: "Papan Reklame", c1: "#1A8B9D", c2: "#FF6600" },
];

fs.mkdirSync(dir, { recursive: true });

for (const { file, label, c1, c2 } of items) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" role="img" aria-label="${label}"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c2}"/></linearGradient></defs><rect width="800" height="450" fill="url(#g)"/><circle cx="680" cy="80" r="120" fill="rgba(255,255,255,0.12)"/><circle cx="120" cy="380" r="90" fill="rgba(255,255,255,0.08)"/><text x="400" y="210" text-anchor="middle" fill="#FFFFFF" font-family="Arial,sans-serif" font-size="34" font-weight="700">PT SUP</text><text x="400" y="255" text-anchor="middle" fill="rgba(255,255,255,0.92)" font-family="Arial,sans-serif" font-size="22" font-weight="600">${label}</text></svg>`;
  fs.writeFileSync(path.join(dir, `${file}.svg`), svg);
}

console.log(`Created ${items.length} service images in ${dir}`);