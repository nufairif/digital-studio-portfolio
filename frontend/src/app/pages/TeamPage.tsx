import { leadership, executiveManagers, divisionHeads } from "../data/ptsup";
import { AboutSectionLayout } from "../components/AboutSectionLayout";
import { TeamMemberCard } from "../components/TeamMemberCard";

type TeamSectionProps = {
  title: string;
  members: typeof leadership;
  columns?: 2 | 3;
  startIndex?: number;
};

function TeamSection({
  title,
  members,
  columns = 2,
  startIndex = 0,
}: TeamSectionProps) {
  return (
    <div style={{ marginBottom: "4rem" }}>
      <h2
        style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
          color: "#1A1A1A",
          margin: "0 0 2.5rem",
          letterSpacing: "-0.03em",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "2rem",
          maxWidth: columns === 3 ? "1100px" : "900px",
        }}
        className={columns === 3 ? "team-grid-three" : "team-grid-two"}
      >
        {members.map((member, i) => (
          <TeamMemberCard
            key={`${member.role}-${i}`}
            member={member}
            index={startIndex + i}
          />
        ))}
      </div>
    </div>
  );
}

export function TeamPage() {
  return (
    <AboutSectionLayout eyebrow="Tentang Kami" title="Jajaran Pengurus">
      <section style={{ padding: "4rem 2.5rem 6rem" }}>
        <TeamSection title="Dewan Komisaris & Direksi" members={leadership} />
        <TeamSection
          title="Executive Manager"
          members={executiveManagers}
          startIndex={leadership.length}
        />
        <TeamSection
          title="Kepala Divisi"
          members={divisionHeads}
          columns={3}
          startIndex={leadership.length + executiveManagers.length}
        />
      </section>

      <style>{`
        @media (max-width: 900px) {
          .team-grid-two,
          .team-grid-three { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1100px) {
          .team-grid-three { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </AboutSectionLayout>
  );
}