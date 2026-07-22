export interface User {
  firstName: string;
  lastName: string;
  division?: string; // F33
  age: number;
  gender: string; // "female" "male" "non-binary"
}

export type DayType =
  | "rest"
  | "easy"
  | "workout"
  | "strength"
  | "long"
  | "race";

export interface Day {
  id: string;
  day: string;
  type: DayType;
  label: string;
  detail: string;
}

export interface WeekData {
  id: string;
  week: number;
  dates: string;
  totalMiles: string;
  vert: string;
  days: Day[];
}

export interface Phase {
  id: string;
  name: string;
  subtitle: string;
  dates: string;
  weeks: number;
  color?: string;
  strengthKey: string;
  description: string;
  focus: string[];
  weeksData: WeekData[];
}

export interface Exercise {
  id: string;
  name: string;
  cue: string;
  detail: string;
}

export interface StrengthProgram {
  name: string;
  goal: string;
  sessionsPerWeek: number;
  setsReps: string;
  exercises: Exercise[];
}
