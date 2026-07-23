import type { WeekData } from "../types";

interface WeekStatsHeaderProps {
  week: WeekData;
}

export default function WeekStatsHeader({ week }: WeekStatsHeaderProps) {
  return (
    <div className="flex justify-between mb-6">
      <div>
        <div className="text-xl font-bold ">Week {week.week}</div>
        <div className="text-text-secondary">{week.dates}</div>
      </div>

      <div className="flex gap-4 font-mono text-text-secondary">
        <div>
          <span className="font-bold text-text-primary">{week.totalMiles}</span>{" "}
          mi
        </div>
        <div>
          <span className="font-bold text-accent-soft-text">{week.vert}</span>{" "}
          ft
        </div>
      </div>
    </div>
  );
}
