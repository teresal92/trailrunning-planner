import type { Exercise } from "../types";

interface ExerciseCardProps {
  exercise: Exercise;
}

export default function ExerciseCard({ exercise }: ExerciseCardProps) {
  return (
    <div>
      <div>
        <div>{exercise.name}</div>
        <div>{exercise.cue}</div>
      </div>
      <div>{exercise.detail}</div>
    </div>
  );
}
