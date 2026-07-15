import type { Exercise } from "../types";

interface ExerciseCardProps {
  exercise: Exercise;
  phaseColor: string;
}

export default function ExerciseCard({
  exercise,
  phaseColor,
}: ExerciseCardProps) {
  return (
    <div>
      <div>
        <div>{exercise.name}</div>
        <div
          style={{
            fontSize: 10,
            color: phaseColor,
            fontFamily: "monospace",
            background: `${phaseColor}15`,
          }}
        >
          {exercise.cue}
        </div>
      </div>
      <div>{exercise.detail}</div>
    </div>
  );
}
