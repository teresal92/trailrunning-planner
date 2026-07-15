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
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [showStrength, setShowStrength] = useState(false);

  const phase = PHASES[activePhase];
  const week = phase.weeks_data[activeWeek];
  const strengthProgram =
    STRENGTH_PROGRAMS[phase.strengthKey as keyof typeof STRENGTH_PROGRAMS];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0d0d0d",
        color: "#e8e0d0",
        fontFamily: "'Georgia', 'Times New Roman', serif",
      }}
    >
      <PlanHeader />
      <PhaseNavTabs
        activePhase={activePhase}
        onPhaseChange={(i) => {
          setActivePhase(i);
          setActiveWeek(0);
          setShowStrength(false);
        }}
      />
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "20px 16px" }}>
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
        <PlanFooter />
      </div>
    </div>
  );
}
