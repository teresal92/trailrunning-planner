import ExerciseCard from "./exercise-card";
import type { StrengthProgram } from "../types";

interface StrengthViewProps {
  strengthProgram: StrengthProgram;
}

export default function StrengthView({ strengthProgram }: StrengthViewProps) {
  return (
    <div>
      <div>
        <div>{strengthProgram.name}</div>
        <div>{strengthProgram.goal}</div>
        <div>
          <div>
            <span>{strengthProgram.sessionsPerWeek}×</span>
            /week
          </div>
          <div>
            <span>Default:</span> {strengthProgram.setsReps}
          </div>
        </div>
      </div>
      <div>
        {strengthProgram.exercises.map((ex) => (
          <ExerciseCard key={ex.id} exercise={ex} />
        ))}
      </div>
    </div>
  );
}
