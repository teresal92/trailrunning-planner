import ExerciseCard from "./exercise-card";
import type { StrengthProgram } from "../types";

interface StrengthViewProps {
  strengthProgram: StrengthProgram;
}

export default function StrengthView({ strengthProgram }: StrengthViewProps) {
  return (
    <div>
      <div className="bg-surface border border-border rounded-lg p-6 mb-4">
        <div className="text-lg font-bold">{strengthProgram.name}</div>
        <div className="text-text-secondary mb-4">{strengthProgram.goal}</div>
        <div className="flex gap-4 font-mono text-sm text-text-secondary">
          <div>
            <span className="font-bold text-text-primary">
              {strengthProgram.sessionsPerWeek}×
            </span>{" "}
            /week
          </div>
          <div>
            <span className="font-semibold">Default:</span>{" "}
            {strengthProgram.setsReps}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {strengthProgram.exercises.map((ex) => (
          <ExerciseCard key={ex.id} exercise={ex} />
        ))}
      </div>
    </div>
  );
}
