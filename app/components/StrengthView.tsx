import ExerciseCard from "./ExerciseCard";
import NutritionNote from "./NutritionNote";
import type { StrengthProgram } from "../types";

interface StrengthViewProps {
  strengthProgram: StrengthProgram;
  phaseColor: string;
}

export default function StrengthView({ strengthProgram, phaseColor }: StrengthViewProps) {
  return (
    <div>
      <div
        style={{
          background: "#111",
          border: `1px solid ${phaseColor}22`,
          borderLeft: `3px solid ${phaseColor}`,
          borderRadius: 6,
          padding: "16px 18px",
          marginBottom: 20,
        }}
      >
        <div
          style={{ fontSize: 16, color: phaseColor, fontWeight: 600, marginBottom: 4 }}
        >
          {strengthProgram.name}
        </div>
        <div
          style={{ fontSize: 13, color: "#bbb", marginBottom: 12, lineHeight: 1.6 }}
        >
          {strengthProgram.goal}
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            fontSize: 11,
            fontFamily: "monospace",
            color: "#888",
            flexWrap: "wrap",
          }}
        >
          <div>
            <span style={{ color: phaseColor }}>{strengthProgram.sessions_per_week}×</span>
            /week
          </div>
          <div>
            <span style={{ color: "#c4a35a" }}>Default:</span> {strengthProgram.sets_reps}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {strengthProgram.exercises.map((ex, i) => (
          <ExerciseCard key={i} exercise={ex} phaseColor={phaseColor} />
        ))}
      </div>
      <NutritionNote />
    </div>
  );
}
