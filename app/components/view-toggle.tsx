"use client";

const VIEW_OPTIONS = ["Schedule", "Strength Program"] as const;

interface ViewToggleProps {
  showStrength: boolean;
  onToggle: (value: boolean) => void;
}

export default function ViewToggle({
  showStrength,
  onToggle,
}: ViewToggleProps) {
  return (
    <div className="bg-surface w-fit p-2 rounded-lg border border-border mb-4">
      {VIEW_OPTIONS.map((label, i) => {
        const isActive = showStrength === (i === 1);
        return (
          <button
            key={label}
            onClick={() => onToggle(i === 1)}
            className={`rounded-lg px-4 py-2 font-semibold cursor-pointer transition-all ${isActive ? "bg-accent-soft text-accent-soft-text" : "bg-surface text-text-secondary"}`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
