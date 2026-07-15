import type { WeekData } from "../types";

interface WeekStatsHeaderProps {
  week: WeekData;
}

export default function WeekStatsHeader({ week }: WeekStatsHeaderProps) {
  return (
    <div>
      <div>
        <div style={{ fontSize: 15, fontWeight: 600 }}>Week {week.week}</div>
        <div>{week.dates}</div>
      </div>
      <div>
        <div>
          <span>{week.total_miles}</span> mi
        </div>
        <div>
          <span>{week.vert}</span> ft vert
        </div>
      </div>
    </div>
  );
}
