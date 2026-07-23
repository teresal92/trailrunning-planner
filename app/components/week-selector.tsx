"use client";

import type { WeekData } from "../types";

interface WeekSelectorProps {
  weeks: WeekData[];
  activeWeek: number;
  onWeekChange: (index: number) => void;
}

export default function WeekSelector({
  weeks,
  activeWeek,
  onWeekChange,
}: WeekSelectorProps) {
  return (
    <div className="flex gap-2 mb-4">
      {weeks.map((w, i) => {
        const isSelected = activeWeek === i;
        return (
          <button
            key={w.id}
            onClick={() => onWeekChange(i)}
            className={`rounded-lg px-4 py-2 font-semibold cursor-pointer ${isSelected ? "bg-accent-soft text-accent-soft-text" : "bg-surface text-text-secondary"}`}
          >
            Wk {w.week}
          </button>
        );
      })}
    </div>
  );
}
