"use client";

import type { WeekData } from "../types";

interface WeekSelectorProps {
  weeks: WeekData[];
  activeWeek: number;
  onWeekChange: (index: number) => void;
  phaseColor: string;
}

export default function WeekSelector({
  weeks,
  activeWeek,
  onWeekChange,
  phaseColor,
}: WeekSelectorProps) {
  return (
    <div>
      {weeks.map((w, i) => (
        <button
          key={i}
          onClick={() => onWeekChange(i)}
          style={{
            background: activeWeek === i ? phaseColor : "#111",
            border: `1px solid ${activeWeek === i ? phaseColor : "#2a2a2a"}`,
            borderRadius: 4,
            color: activeWeek === i ? "#000" : "#888",
            cursor: "pointer",
            fontSize: 11,
            fontFamily: "monospace",
            transition: "all 0.15s",
          }}
        >
          Wk {w.week}
        </button>
      ))}
    </div>
  );
}
