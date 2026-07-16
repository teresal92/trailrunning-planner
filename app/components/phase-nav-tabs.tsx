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
            borderBottom:
              activePhase === i
                ? `2px solid ${p.color}`
                : "2px solid transparent",
            color: activePhase === i ? p.color : "#555",
            cursor: "pointer",
            transition: "color 0.2s",
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
