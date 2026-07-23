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
    <div className="flex gap-4 mb-4">
      {PHASES.map((p, i) => {
        const isActive = activePhase === i;
        return (
          <button
            key={p.id}
            onClick={() => onPhaseChange(i)}
            className={`font-semibold cursor-pointer transition-colors border-b-2 py-2 ${isActive ? "border-accent text-text-primary" : "border-transparent text-text-secondary"}`}
          >
            <div>{p.name}</div>
          </button>
        );
      })}
    </div>
  );
}
