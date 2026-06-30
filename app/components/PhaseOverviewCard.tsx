import type { Phase } from "../types";

interface PhaseOverviewCardProps {
  phase: Phase;
}

export default function PhaseOverviewCard({ phase }: PhaseOverviewCardProps) {
  return (
    <div
      style={{
        background: "#111",
        border: `1px solid ${phase.color}22`,
        borderLeft: `3px solid ${phase.color}`,
        borderRadius: 6,
        padding: "16px 18px",
        marginBottom: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 10,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 16,
              color: phase.color,
              fontWeight: 600,
              marginBottom: 2,
            }}
          >
            {phase.name}
          </div>
          <div style={{ fontSize: 12, color: "#666", fontStyle: "italic" }}>
            {phase.subtitle}
          </div>
        </div>
        <div style={{ fontSize: 11, color: "#555", fontFamily: "monospace" }}>
          {phase.weeks}w
        </div>
      </div>
      <p
        style={{
          fontSize: 13,
          color: "#bbb",
          margin: "0 0 12px",
          lineHeight: 1.6,
        }}
      >
        {phase.description}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {phase.focus.map((f) => (
          <span
            key={f}
            style={{
              fontSize: 11,
              color: phase.color,
              background: `${phase.color}11`,
              border: `1px solid ${phase.color}33`,
              borderRadius: 3,
              padding: "3px 8px",
              fontFamily: "monospace",
            }}
          >
            {f}
          </span>
        ))}
      </div>
    </div>
  );
}
