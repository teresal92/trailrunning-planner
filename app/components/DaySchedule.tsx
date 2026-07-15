"use client";

import { useState } from "react";
import DayCard from "./DayCard";
import type { Day } from "../types";

interface DayScheduleProps {
  days: Day[];
}

export default function DaySchedule({ days }: DayScheduleProps) {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {days.map((d, i) => (
        <DayCard
          key={i}
          day={d}
          isSelected={selectedDay === i}
          onToggle={() => setSelectedDay(selectedDay === i ? null : i)}
        />
      ))}
    </div>
  );
}
