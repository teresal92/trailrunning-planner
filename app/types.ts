export interface User {
  firstName: string;
  lastName: string;
  division?: string; // F33
  age: number;
  gender: string; // "female" "male" "non-binary"
}

export type DayType = "rest" | "easy" | "workout" | "strength" | "long" | "race";

export interface Day {
  day: string;
  type: DayType;
  label: string;
  detail: string;
}

export interface WeekData {
  week: number;
  dates: string;
  total_miles: string;
  vert: string;
  days: Day[];
}

export interface Phase {
  id: string;
  name: string;
  subtitle: string;
  dates: string;
  weeks: number;
  color: string;
  strengthKey: string;
  description: string;
  focus: string[];
  weeks_data: WeekData[];
}

export interface Exercise {
  name: string;
  cue: string;
  detail: string;
}

export interface StrengthProgram {
  name: string;
  goal: string;
  sessions_per_week: number;
  sets_reps: string;
  exercises: Exercise[];
}
