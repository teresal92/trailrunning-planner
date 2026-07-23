import type { Phase } from "../types";

interface PhaseOverviewCardProps {
  phase: Phase;
}

export default function PhaseOverviewCard({ phase }: PhaseOverviewCardProps) {
  return (
    <div className="bg-surface border border-border rounded-lg p-6 mb-4">
      <div className="flex justify-between mb-4">
        <div>
          <div className="font-white text-lg font-bold">{phase.name}</div>
          <div className="text-text-secondary">{phase.subtitle}</div>
        </div>
        <div className="text-text-secondary font-mono">{phase.weeks}w</div>
      </div>
      <p className="text-text-secondary mb-4">{phase.description}</p>
      <div className="flex flex-wrap gap-2">
        {phase.focus.map((focus) => (
          <span
            className="text-sm rounded-lg border-border border bg-surface-sunken text-text-secondary px-4 py-2"
            key={focus}
          >
            {focus}
          </span>
        ))}
      </div>
    </div>
  );
}
