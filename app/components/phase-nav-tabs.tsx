"use client";

import { PHASES } from "../data";

interface PhaseNavTabsProps {
  activePhase: number;
  onPhaseChange: (index: number) => void;
}

export default function PhaseNavTabs({
  activePhase,
  onPhaseChange,
}: PhaseNavTabsProps) {
  return (
    <div>
      {PHASES.map((p, i) => (
        <button
          key={p.id}
          onClick={() => onPhaseChange(i)}
          style={{
            flexShrink: 0,
            padding: "14px 14px",
            background: "none",
            border: "none",
            borderBottom:
              activePhase === i
                ? `2px solid ${p.color}`
                : "2px solid transparent",
            color: activePhase === i ? p.color : "#555",
            cursor: "pointer",
            fontSize: 12,
            fontFamily: "'Georgia', serif",
            transition: "color 0.2s",
            textAlign: "left",
            marginBottom: -1,
          }}
        >
          <div style={{ fontWeight: 600, marginBottom: 2 }}>{p.name}</div>
          <div
            style={{
              fontSize: 10,
              color: activePhase === i ? "#888" : "#444",
              fontFamily: "monospace",
            }}
          >
            {p.dates}
          </div>
        </button>
      ))}
    </div>
  );
}
