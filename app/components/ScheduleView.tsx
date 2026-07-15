import PhaseOverviewCard from "./PhaseOverviewCard";
import WeekSelector from "./WeekSelector";
import WeekStatsHeader from "./WeekStatsHeader";
import DaySchedule from "./DaySchedule";
import HeartRateZones from "./HeartRateZones";
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
        weeks={phase.weeks_data}
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
