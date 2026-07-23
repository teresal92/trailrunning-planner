import type { Exercise } from "../types";

interface ExerciseCardProps {
  exercise: Exercise;
}

export default function ExerciseCard({ exercise }: ExerciseCardProps) {
  return (
    <div className="bg-surface border border-border rounded-lg p-4">
      <div className="flex justify-between items-center gap-4 mb-1">
        <div className="font-semibold">{exercise.name}</div>
        <div className="text-xs font-mono px-2 py-1 rounded-md bg-accent-soft text-accent-soft-text">
          {exercise.cue}
        </div>
      </div>
      <div className="text-text-secondary text-sm">{exercise.detail}</div>
    </div>
  );
}
