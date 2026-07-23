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
      className="px-3 py-4 border-b border-border cursor-pointer transition-all"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div className="font-mono text-text-secondary text-sm">{day.day}</div>
          <div>{day.label}</div>
        </div>
        <div className="text-text-secondary text-xs">
          {isSelected ? "▲" : "▼"}
        </div>
      </div>
      {isSelected && (
        <div className="mt-2.5 pt-2.5 text-sm text-text-secondary pl-14">
          {day.detail}
        </div>
      )}
    </div>
  );
}
