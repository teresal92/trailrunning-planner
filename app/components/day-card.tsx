"use client";

import type { Day } from "../types";

interface DayCardProps {
  day: Day;
  isSelected: boolean;
  onToggle: () => void;
}

export default function DayCard({ day, isSelected, onToggle }: DayCardProps) {
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
    >
      <div>
        <div>
          <div>{day.day}</div>
          <div>{day.label}</div>
        </div>
        <div>{isSelected ? "▲" : "▼"}</div>
      </div>
      {isSelected && <div>{day.detail}</div>}
    </div>
  );
}
