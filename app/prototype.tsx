"use client";

import { useState } from "react";
import { PHASES, STRENGTH_PROGRAMS } from "./data";
import PlanHeader from "./components/PlanHeader";
import PhaseNavTabs from "./components/PhaseNavTabs";
import ViewToggle from "./components/ViewToggle";
import ScheduleView from "./components/ScheduleView";
import StrengthView from "./components/StrengthView";
import PlanFooter from "./components/PlanFooter";

export default function TrainingPlan() {
  const [activePhase, setActivePhase] = useState(0);
  const [activeWeek, setActiveWeek] = useState(0);
  const [showStrength, setShowStrength] = useState(false);

  const phase = PHASES[activePhase];
  const week = phase.weeks_data[activeWeek];
  const strengthProgram =
    STRENGTH_PROGRAMS[phase.strengthKey as keyof typeof STRENGTH_PROGRAMS];

  return (
    <div className="min-h-screen bg-bg text-text-primary font-sans">
      <PlanHeader />
      <PhaseNavTabs
        activePhase={activePhase}
        onPhaseChange={(i) => {
          setActivePhase(i);
          setActiveWeek(0);
          setShowStrength(false);
        }}
      />
      <div className="max-w-[640px] mx-auto px-4 py-5">
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
          <StrengthView strengthProgram={strengthProgram} phaseColor={phase.color} />
        )}
        <PlanFooter />
      </div>
    </div>
  );
}
