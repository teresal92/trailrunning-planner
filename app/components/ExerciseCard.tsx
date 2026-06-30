import type { Exercise } from "../types";

interface ExerciseCardProps {
  exercise: Exercise;
  phaseColor: string;
}

export default function ExerciseCard({ exercise, phaseColor }: ExerciseCardProps) {
  return (
    <div
      style={{
        background: "#111",
        border: "1px solid #1e1e1e",
        borderLeft: `3px solid ${phaseColor}55`,
        borderRadius: 5,
        padding: "14px 16px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 8,
        }}
      >
        <div style={{ fontSize: 14, color: "#e8e0d0", fontWeight: 600 }}>
          {exercise.name}
        </div>
        <div
          style={{
            fontSize: 10,
            color: phaseColor,
            fontFamily: "monospace",
            background: `${phaseColor}15`,
            padding: "2px 8px",
            borderRadius: 3,
            marginLeft: 10,
            flexShrink: 0,
          }}
        >
          {exercise.cue}
        </div>
      </div>
      <div style={{ fontSize: 12, color: "#888", lineHeight: 1.7 }}>
        {exercise.detail}
      </div>
    </div>
  );
}
