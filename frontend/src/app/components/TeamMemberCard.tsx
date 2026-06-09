import { motion } from "motion/react";
import type { TeamMember } from "../data/ptsup";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter((part) => part.length > 0 && part !== "Lengkap")
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

type TeamMemberCardProps = {
  member: TeamMember;
  index: number;
};

export function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  const initials = getInitials(member.name) || "?";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
    >
      <div
        style={{
          borderRadius: "0.75rem",
          overflow: "hidden",
          aspectRatio: "3/4",
          background: "#F5F5F5",
          marginBottom: "1.25rem",
        }}
      >
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #F5F5F5 0%, #E8E8E8 100%)",
            }}
          >
            <span
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 700,
                fontSize: "2.5rem",
                color: "#C8C8C8",
                letterSpacing: "-0.02em",
              }}
            >
              {initials}
            </span>
          </div>
        )}
      </div>
      <h3
        style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 700,
          fontSize: "1.1rem",
          color: "#1A1A1A",
          margin: "0 0 0.2rem",
          letterSpacing: "-0.02em",
        }}
      >
        {member.name}
      </h3>
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.68rem",
          color: "#FF6600",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          marginBottom: "0.5rem",
        }}
      >
        {member.role}
      </div>
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.82rem",
          color: "#6B6B6B",
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {member.bio}
      </p>
    </motion.div>
  );
}