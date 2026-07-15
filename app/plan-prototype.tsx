"use client";

import { useState } from "react";
import { PHASES, STRENGTH_PROGRAMS } from "./data";
import PlanHeader from "./components/plan-header";
import PhaseNavTabs from "./components/phase-nav-tabs";
import ViewToggle from "./components/view-toggle";
import ScheduleView from "./components/schedule-view";
import StrengthView from "./components/strength-view";

export default function TrainingPlan() {
  const [activePhase, setActivePhase] = useState(0);
  const [activeWeek, setActiveWeek] = useState(0);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [showStrength, setShowStrength] = useState(false);

  const phase = PHASES[activePhase];
  const week = phase.weeks_data[activeWeek];
  const strengthProgram =
    STRENGTH_PROGRAMS[phase.strengthKey as keyof typeof STRENGTH_PROGRAMS];

  return (
    <div>
      <PlanHeader />
      <PhaseNavTabs
        activePhase={activePhase}
        onPhaseChange={(i) => {
          setActivePhase(i);
          setActiveWeek(0);
          setShowStrength(false);
        }}
      />
      <div>
        <ViewToggle
          showStrength={showStrength}
          onToggle={setShowStrength}
          phaseColor={phase.color}
        />
        {!showStrength ? (
          <ScheduleView
            phase={phase}
            week={week}
            activeWeek={activeWeek}
            onWeekChange={(i) => setActiveWeek(i)}
          />
        ) : (
          <StrengthView
            strengthProgram={strengthProgram}
            phaseColor={phase.color}
          />
        )}
      </div>
    </div>
  );
}
