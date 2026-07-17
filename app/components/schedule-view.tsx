import PhaseOverviewCard from "./phase-overview-card";
import WeekSelector from "./week-selector";
import WeekStatsHeader from "./week-stats-header";
import DaySchedule from "./day-schedule";
import HeartRateZones from "./heart-rate-zones";
import type { Phase, WeekData } from "../types";

interface ScheduleViewProps {
  phase: Phase;
  week: WeekData;
  activeWeek: number;
  onWeekChange: (index: number) => void;
}

export default function ScheduleView({
  phase,
  week,
  activeWeek,
  onWeekChange,
}: ScheduleViewProps) {
  return (
    <>
      <PhaseOverviewCard phase={phase} />
      <WeekSelector
        weeks={phase.weeksData}
        activeWeek={activeWeek}
        onWeekChange={onWeekChange}
        phaseColor={phase.color}
      />
      <WeekStatsHeader week={week} />
      <DaySchedule key={`${phase.id}-${activeWeek}`} days={week.days} />
      <HeartRateZones />
    </>
  );
}
