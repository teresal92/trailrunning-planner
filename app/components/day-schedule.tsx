"use client";

import { useState } from "react";
import DayCard from "./day-card";
import type { Day } from "../types";

interface DayScheduleProps {
  days: Day[];
}

export default function DaySchedule({ days }: DayScheduleProps) {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  return (
    <div>
      {days.map((d, i) => (
        <DayCard
          key={d.id}
          day={d}
          isSelected={selectedDay === i}
          onToggle={() => setSelectedDay(selectedDay === i ? null : i)}
        />
      ))}
    </div>
  );
}
