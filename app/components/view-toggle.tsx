"use client";

const VIEW_OPTIONS = ["Schedule", "Strength Program"] as const;

interface ViewToggleProps {
  showStrength: boolean;
  onToggle: (value: boolean) => void;
  phaseColor: string;
}

export default function ViewToggle({
  showStrength,
  onToggle,
  phaseColor,
}: ViewToggleProps) {
  return (
    <div className="bg-surface w-fit p-2">
      {VIEW_OPTIONS.map((label, i) => {
        const isActive = showStrength === (i === 1);
        return (
          <button
            key={label}
            onClick={() => onToggle(i === 1)}
            className="rounded-sm py-1 px-4 font-bold"
            style={{
              background: isActive ? phaseColor : "#111",
              border: `1px solid ${isActive ? phaseColor : undefined}`,
              color: isActive ? "#000" : "#777",
              transition: "all 0.15s",
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
