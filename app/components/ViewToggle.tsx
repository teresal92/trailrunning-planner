"use client";

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
    <div>
      {(["Schedule", "Strength Program"] as const).map((label, i) => {
        const isActive = showStrength === (i === 1);
        return (
          <button
            key={label}
            onClick={() => onToggle(i === 1)}
            style={{
              padding: "8px 16px",
              background: isActive ? phaseColor : "#111",
              border: `1px solid ${isActive ? phaseColor : "#2a2a2a"}`,
              borderRadius: 4,
              color: isActive ? "#000" : "#777",
              cursor: "pointer",
              fontSize: 12,
              fontFamily: "monospace",
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
