"use client";

import { DAY_COLORS } from "../constants";
import type { Day } from "../types";

interface DayCardProps {
  day: Day;
  isSelected: boolean;
  onToggle: () => void;
}

export default function DayCard({ day, isSelected, onToggle }: DayCardProps) {
  const colors = DAY_COLORS[day.type];

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={isSelected}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
      style={{
        background: isSelected ? colors.bg : "#111",
        border: `1px solid ${isSelected ? colors.dot + "44" : "#1e1e1e"}`,
        borderLeft: `3px solid ${isSelected ? colors.dot : "#1e1e1e"}`,
        borderRadius: 5,
        cursor: "pointer",
        transition: "all 0.15s",
      }}
    >
      <div>
        <div>
          <div>{day.day}</div>
          <div />
          <div>{day.label}</div>
        </div>
        <div>{isSelected ? "▲" : "▼"}</div>
      </div>
      {isSelected && <div>{day.detail}</div>}
    </div>
  );
}
