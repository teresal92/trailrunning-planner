// Training Data and Program

import type { Phase, StrengthProgram } from "./types";

export const STRENGTH_PROGRAMS: Record<string, StrengthProgram> = {
  base: {
    name: "Base Strength",
    goal: "Rebuild movement patterns, activate glutes, establish baseline.",
    sessions_per_week: 2,
    sets_reps: "3×10–12 unless noted",
    exercises: [
      {
        name: "Weighted Step-Ups",
        detail:
          '3×10 each leg. Use an 18–24" box. Drive through the heel, stand tall at top. Add weight each week. Most direct exercise for uphill climbing power.',
        cue: "Push heel, not toe",
      },
      {
        name: "Glute Bridge / Hip Thrust",
        detail:
          "3×15. Bodyweight first two weeks, then add a dumbbell or barbell. Full hip extension at top, hold 1 second.",
        cue: "Squeeze hard at top",
      },
      {
        name: "Bulgarian Split Squat",
        detail:
          "3×10 each leg. Rear foot elevated. Start bodyweight — these are humbling. Keep torso upright.",
        cue: "Front knee tracks toes",
      },
      {
        name: "Single-Leg Romanian Deadlift",
        detail:
          "3×10 each leg. Light dumbbells. Hip hinge with soft knee. Builds posterior chain stability for uneven terrain.",
        cue: "Hip hinge, not squat",
      },
      {
        name: "Single-Leg Calf Raises",
        detail:
          "3×15 each leg. On a step for full range. Slow lowering. Altitude running is very calf-intensive.",
        cue: "Full range, slow down",
      },
      {
        name: "Dead Bug",
        detail:
          "3×8 each side. Opposite arm/leg lower slowly, lower back pressed to floor. Core stability for technical descents.",
        cue: "Spine stays on floor",
      },
      {
        name: "Hip Flexor Stretch",
        detail:
          "2×60s each side. Kneeling lunge, posterior pelvic tilt. Non-negotiable — tight hip flexors kill glute activation.",
        cue: "Tuck pelvis under",
      },
    ],
  },
  build1: {
    name: "Build Strength I",
    goal: "Load the glutes progressively heavier. Add plyometric power for uphill drive.",
    sessions_per_week: 2,
    sets_reps: "3–4×8–10 unless noted",
    exercises: [
      {
        name: "Heavy Weighted Step-Ups",
        detail:
          "4×8 each leg. Heavy enough that reps 7–8 are a real challenge. Primary uphill power movement — directly mimics climbing mechanics.",
        cue: "Drive heel, stand tall",
      },
      {
        name: "Barbell Hip Thrust",
        detail:
          "4×10. Load progressively each week. Barbell across hips, upper back on bench. Gold standard glute exercise.",
        cue: "Full extension, no arch",
      },
      {
        name: "Bulgarian Split Squat (loaded)",
        detail:
          "3×8 each leg. Add dumbbells. Slow 3-second eccentric. This strength shows up directly on steep grades.",
        cue: "Control the descent",
      },
      {
        name: "Box Jumps",
        detail:
          "3×6. Land softly through glutes and quads. Step down, don't jump down. Power development.",
        cue: "Land quiet, land low",
      },
      {
        name: "Lateral Band Walks",
        detail:
          "3×15 each direction. Mini band above knees, half-squat position. Glute medius — critical for single-leg stability on descents.",
        cue: "Hips level, don't waddle",
      },
      {
        name: "Single-Leg RDL (loaded)",
        detail: "3×8 each. More weight than base phase. Slow and controlled.",
        cue: "Feel hamstring stretch",
      },
      {
        name: "Copenhagen Plank",
        detail:
          "3×20–30s each side. Side plank with top leg on bench. Adductor strength for knee health on long descents.",
        cue: "Hips square, no sag",
      },
      {
        name: "Calf Raises + Jump Rope",
        detail:
          "3×15 calf raises then 60s jump rope. Achilles and calf conditioning for rocky terrain at altitude.",
        cue: "Stay on balls of feet",
      },
    ],
  },
  build2: {
    name: "Build Strength II",
    goal: "Peak power. Explosive glute drive. Race-specific uphill mechanics.",
    sessions_per_week: 2,
    sets_reps: "3–4×6–8 heavy or power-focused",
    exercises: [
      {
        name: "Heavy Step-Ups with Knee Drive",
        detail:
          "4×6 each leg. Heaviest loads of the cycle. At the top, drive your knee up explosively — directly mimics the uphill running stride.",
        cue: "Explosive knee drive",
      },
      {
        name: "Barbell Hip Thrust (heavy)",
        detail:
          "4×8. Near-maximum effort. Your glutes should be significantly stronger than May.",
        cue: "Powerful hip snap",
      },
      {
        name: "Single-Leg Squat to Box",
        detail:
          "3×6 each. Slowly lower to a box behind you, drive back up. Eccentric control — absorbs descent impact.",
        cue: "Don't collapse inward",
      },
      {
        name: "Bounding / Running Skips",
        detail:
          "3×20m. Exaggerated running skips focusing on glute drive and knee lift. Trains fast-twitch power for uphills.",
        cue: "Drive knee, push ground",
      },
      {
        name: "Reverse Lunge (loaded)",
        detail:
          "3×8 each. Step back, drive front heel to stand. More hip-dominant than forward lunge.",
        cue: "Front heel stays down",
      },
      {
        name: "Lateral Band Walks (heavy band)",
        detail: "3×12 each direction. Progress band resistance.",
        cue: "Stay low, resist",
      },
      {
        name: "Single-Leg Calf Raise (loaded)",
        detail: "3×12 each, holding a dumbbell. Pause 1s at top.",
        cue: "Full range, pause",
      },
      {
        name: "Glute Med Clamshells",
        detail:
          "2×20 each side. Band above knees. Finisher/activation. Don't rock the pelvis.",
        cue: "Pelvis doesn't move",
      },
    ],
  },
  taper: {
    name: "Taper Strength",
    goal: "Maintain neural activation. Zero new fatigue. Feel powerful and springy.",
    sessions_per_week: 1,
    sets_reps: "2×8 — activation only",
    exercises: [
      {
        name: "Weighted Step-Ups",
        detail:
          "2×8 each leg. ~60% of peak load. Wake up the pattern, don't create soreness.",
        cue: "Sharp and crisp",
      },
      {
        name: "Hip Thrust",
        detail:
          "2×10. Moderate load. Remind your glutes what they're there for.",
        cue: "Full extension",
      },
      {
        name: "Lateral Band Walks",
        detail: "2×12 each direction. Light band. Pure activation.",
        cue: "Stay controlled",
      },
      {
        name: "Single-Leg RDL",
        detail: "2×8 each leg. Light dumbbells. Balance check-in.",
        cue: "Slow and grounded",
      },
      {
        name: "Single-Leg Calf Raises",
        detail: "2×12 each leg. No extra load.",
        cue: "Full range",
      },
      {
        name: "Hip Flexor + Hamstring Stretch",
        detail: "2×60s each. Arrive at the start line loose, not tight.",
        cue: "Breathe into it",
      },
    ],
  },
};

export const PHASES: Phase[] = [
  {
    id: "base",
    name: "Base Building",
    subtitle: "Foundation & Recovery",
    dates: "May 12 – Jun 1",
    weeks: 3,
    color: "#7eb8a0",
    strengthKey: "base",
    description:
      "Rebuild after MUC 50K. Low intensity, high aerobic volume. Strength focus on glute activation and movement quality.",
    focus: [
      "Easy aerobic miles",
      "Vert reintroduction",
      "Glute activation 2x/week",
      "Sleep & nutrition",
    ],
    weeks_data: [
      {
        week: 1,
        dates: "May 12–18",
        total_miles: "28–32",
        vert: "2,500",
        days: [
          {
            day: "Mon",
            type: "rest",
            label: "Rest / Walk",
            detail: "Full rest or 30 min easy walk. Recover from MUC.",
          },
          {
            day: "Tue",
            type: "easy",
            label: "Easy Run",
            detail: "45 min easy (Z2). Flat trail or road. HR under 140.",
          },
          {
            day: "Wed",
            type: "strength",
            label: "Strength A — Base",
            detail:
              "Base Strength. Step-ups (light), glute bridges, single-leg RDL, calf raises, dead bug, hip flexor stretch. 45 min. Form over load.",
          },
          {
            day: "Thu",
            type: "easy",
            label: "Easy Run",
            detail: "50 min easy (Z2) with 4×20s strides at end.",
          },
          {
            day: "Fri",
            type: "rest",
            label: "Rest",
            detail: "Rest or yoga/mobility. Hip flexor stretch priority.",
          },
          {
            day: "Sat",
            type: "long",
            label: "Long Run",
            detail:
              "90 min easy trail. ~1,200ft vert. Conversational pace throughout.",
          },
          {
            day: "Sun",
            type: "easy",
            label: "Recovery Run",
            detail: "40 min very easy. Shake out legs.",
          },
        ],
      },
      {
        week: 2,
        dates: "May 19–25",
        total_miles: "32–36",
        vert: "3,500",
        days: [
          { day: "Mon", type: "rest", label: "Rest", detail: "Full rest." },
          {
            day: "Tue",
            type: "easy",
            label: "Easy + Hills",
            detail:
              "55 min easy with 4×2 min uphill efforts at moderate effort. Walk down.",
          },
          {
            day: "Wed",
            type: "strength",
            label: "Strength A — Base",
            detail:
              "Add weight to step-ups and hip thrusts. Introduce Bulgarian split squats at bodyweight. Box jumps 3×6 — focus on soft landing.",
          },
          {
            day: "Thu",
            type: "easy",
            label: "Easy Run",
            detail: "60 min Z2. Focus on cadence (180 spm).",
          },
          {
            day: "Fri",
            type: "rest",
            label: "Rest",
            detail: "Rest or 20 min stretch.",
          },
          {
            day: "Sat",
            type: "long",
            label: "Long Run",
            detail:
              "2 hrs easy trail. ~1,800ft vert. Practice hiking steep sections.",
          },
          {
            day: "Sun",
            type: "easy",
            label: "Recovery Run",
            detail: "45 min Z1–Z2.",
          },
        ],
      },
      {
        week: 3,
        dates: "May 26–Jun 1",
        total_miles: "26–28",
        vert: "2,000",
        days: [
          {
            day: "Mon",
            type: "rest",
            label: "Rest",
            detail: "Full rest. Recovery week.",
          },
          { day: "Tue", type: "easy", label: "Easy Run", detail: "45 min Z2." },
          {
            day: "Wed",
            type: "strength",
            label: "Strength A — Deload",
            detail:
              "2×10 on everything, reduce weight ~20%. Feel strong leaving the gym, not fatigued.",
          },
          {
            day: "Thu",
            type: "easy",
            label: "Easy Run",
            detail: "50 min Z2 with strides.",
          },
          { day: "Fri", type: "rest", label: "Rest", detail: "Rest." },
          {
            day: "Sat",
            type: "long",
            label: "Long Run",
            detail: "75 min easy. Low vert. Feel fresh.",
          },
          {
            day: "Sun",
            type: "easy",
            label: "Recovery",
            detail: "30 min walk or very easy jog.",
          },
        ],
      },
    ],
  },
  {
    id: "build1",
    name: "Build Phase I",
    subtitle: "Vert & Threshold",
    dates: "Jun 2 – Jul 6",
    weeks: 5,
    color: "#c4a35a",
    strengthKey: "build1",
    description:
      "Weekly structure locked in: hard group run Mon, tempo Thu, quality Fri, long group run Sat, recovery Sun. Strength on Tue + Wed. Fuel every long run.",
    focus: [
      "Mon hard group run 8–10mi",
      "Thu tempo",
      "Fri quality",
      "Sat long group run",
      "Heavy glute loading",
    ],
    weeks_data: [
      {
        week: 4,
        dates: "Jun 2–8",
        total_miles: "38–42",
        vert: "5,000",
        days: [
          {
            day: "Mon",
            type: "workout",
            label: "Hard Group Run",
            detail:
              "8–10 miles at group tempo pace (Z3–Z4). Treat as a sustained hard effort. This is your weekly quality anchor — run with the group, don't hold back.",
          },
          {
            day: "Tue",
            type: "easy",
            label: "Easy Run",
            detail: "45 min easy Z2. Flush out Monday's effort. HR under 140.",
          },
          {
            day: "Wed",
            type: "strength",
            label: "Strength B — Build I",
            detail:
              "Build Strength I. Heavy step-ups, barbell hip thrust, Bulgarian split squats with dumbbells, box jumps, lateral band walks. 50 min.",
          },
          {
            day: "Thu",
            type: "workout",
            label: "Tempo Run",
            detail:
              "15 min warmup, 20 min tempo (Z3–Z4, comfortably hard), 15 min cooldown. On hilly terrain if possible.",
          },
          {
            day: "Fri",
            type: "workout",
            label: "Quality Run",
            detail:
              "5×3 min uphill Z4 with walk down recovery. 2 mi warmup/cooldown. Hard day since Saturday is a long effort — get quality in now.",
          },
          {
            day: "Sat",
            type: "long",
            label: "Long Group Run",
            detail:
              "2:00–2:15 trail with group. ~2,500ft vert. Fuel every 45 min — practice this every single long run.",
          },
          {
            day: "Sun",
            type: "rest",
            label: "Rest",
            detail:
              "Full rest or easy 30 min walk. Mon + Sat are both hard, so Sunday is genuine recovery.",
          },
        ],
      },
      {
        week: 5,
        dates: "Jun 9–15",
        total_miles: "40–44",
        vert: "5,500",
        days: [
          {
            day: "Mon",
            type: "workout",
            label: "Hard Group Run",
            detail:
              "8–10 miles at group tempo pace. Push the effort on uphills — use this as natural hill work.",
          },
          {
            day: "Tue",
            type: "easy",
            label: "Easy Run",
            detail: "45 min easy Z2.",
          },
          {
            day: "Wed",
            type: "strength",
            label: "Strength B — Build I",
            detail:
              "Build Strength I. Increase step-up and hip thrust load vs last week. Slow 3s eccentric on split squats. Add Copenhagen plank.",
          },
          {
            day: "Thu",
            type: "workout",
            label: "Tempo Run",
            detail:
              "15 min warmup, 25 min tempo, 15 min cooldown. Slightly longer tempo block than Week 4.",
          },
          {
            day: "Fri",
            type: "workout",
            label: "Quality Run",
            detail:
              "8×90s hard uphill (Z4–Z5) with walk down recovery. 2 mi warmup/cooldown. Sharp and controlled.",
          },
          {
            day: "Sat",
            type: "long",
            label: "Long Group Run",
            detail:
              "2:15–2:30 trail. ~3,000ft vert. Fuel every 45 min. Experiment — find what sits well at altitude.",
          },
          {
            day: "Sun",
            type: "rest",
            label: "Rest",
            detail:
              "Full rest. Three quality days this week (Mon/Thu/Fri) + long Sat. You earned it.",
          },
        ],
      },
      {
        week: 6,
        dates: "Jun 16–22",
        total_miles: "42–46",
        vert: "6,000",
        days: [
          {
            day: "Mon",
            type: "workout",
            label: "Hard Group Run",
            detail:
              "8–10 miles at group tempo pace. This is peak volume week — lean into it.",
          },
          {
            day: "Tue",
            type: "easy",
            label: "Easy Run",
            detail: "50 min easy Z2.",
          },
          {
            day: "Wed",
            type: "strength",
            label: "Strength B — Peak Load",
            detail:
              "Build Strength I — peak load week. Heaviest step-ups yet. Heavy hip thrust. Loaded split squats. Jump rope calf finisher.",
          },
          {
            day: "Thu",
            type: "workout",
            label: "Tempo Run",
            detail:
              "15 min warmup, 30 min tempo on hilly terrain, 15 min cooldown. Longest tempo block of Build I.",
          },
          {
            day: "Fri",
            type: "workout",
            label: "Quality Run",
            detail:
              "4×8 min Z4 threshold on trail with 2 min jog rest. On varied terrain. This is the highest quality Fri of the phase.",
          },
          {
            day: "Sat",
            type: "long",
            label: "Long Group Run",
            detail:
              "2:30–2:45 trail. ~3,500ft vert. Run at goal race feel on the climbs. Fuel aggressively.",
          },
          {
            day: "Sun",
            type: "rest",
            label: "Rest",
            detail: "Full rest. Big week — honor the recovery.",
          },
        ],
      },
      {
        week: 7,
        dates: "Jun 23–29",
        total_miles: "28–32",
        vert: "3,000",
        days: [
          {
            day: "Mon",
            type: "workout",
            label: "Hard Group Run (easy effort)",
            detail:
              "8–10 miles with group but treat as Z2–Z3. Recovery week — run with them but don't race. Pull back effort on uphills.",
          },
          {
            day: "Tue",
            type: "easy",
            label: "Easy Run",
            detail: "40 min easy Z2.",
          },
          {
            day: "Wed",
            type: "strength",
            label: "Strength B — Deload",
            detail:
              "Build Strength I deload. 2×8, reduce weight ~20%. Sharp movement, no fatigue.",
          },
          {
            day: "Thu",
            type: "easy",
            label: "Easy Run",
            detail: "45 min Z2 with 4 strides. No formal tempo this week.",
          },
          {
            day: "Fri",
            type: "rest",
            label: "Rest",
            detail: "Rest. Recovery week — skip the quality Fri.",
          },
          {
            day: "Sat",
            type: "long",
            label: "Long Group Run",
            detail: "90 min easy with group. ~1,500ft vert. No hard efforts.",
          },
          { day: "Sun", type: "rest", label: "Rest", detail: "Full rest." },
        ],
      },
      {
        week: 8,
        dates: "Jun 30–Jul 6",
        total_miles: "40–44",
        vert: "5,500",
        days: [
          {
            day: "Mon",
            type: "workout",
            label: "Hard Group Run",
            detail:
              "8–10 miles at group tempo pace. Back to full effort after recovery week.",
          },
          {
            day: "Tue",
            type: "easy",
            label: "Easy Run",
            detail: "45 min easy Z2.",
          },
          {
            day: "Wed",
            type: "strength",
            label: "Strength B — Final",
            detail:
              "Build Strength I — final full session. Back to peak load. Heaviest step-ups of this phase. Heavy hip thrust.",
          },
          {
            day: "Thu",
            type: "workout",
            label: "Tempo Run",
            detail: "15 min warmup, 25 min tempo, 15 min cooldown.",
          },
          {
            day: "Fri",
            type: "workout",
            label: "Quality Run",
            detail:
              "6×3 min uphill Z4. Walk down recovery. 2 mi warmup/cooldown.",
          },
          {
            day: "Sat",
            type: "long",
            label: "Long Group Run",
            detail:
              "2:15–2:30 trail with group. ~3,000ft vert. Try for altitude exposure if possible.",
          },
          { day: "Sun", type: "rest", label: "Rest", detail: "Full rest." },
        ],
      },
    ],
  },
  {
    id: "build2",
    name: "Build Phase II",
    subtitle: "Race-Specific & Peak",
    dates: "Jul 7 – Aug 17",
    weeks: 7,
    color: "#d4705a",
    strengthKey: "build2",
    description:
      "Same weekly skeleton — Mon hard group, Thu tempo, Fri quality, Sat long. Yosemite Aug 1–3 replaces Wks 11–12. Strength goes explosive. Two peak long runs bookend the block.",
    focus: [
      "Mon/Thu/Fri quality",
      "Sat long group run",
      "🏔 Yosemite Aug 1–3",
      "Peak vert + explosive strength",
    ],
    weeks_data: [
      {
        week: 9,
        dates: "Jul 7–13",
        total_miles: "44–48",
        vert: "7,000",
        days: [
          {
            day: "Mon",
            type: "workout",
            label: "Hard Group Run",
            detail:
              "8–10 miles at group tempo pace. Start pushing effort on any climbs in the route.",
          },
          {
            day: "Tue",
            type: "easy",
            label: "Easy Run",
            detail: "50 min easy Z2.",
          },
          {
            day: "Wed",
            type: "strength",
            label: "Strength C — Build II",
            detail:
              "Build Strength II. Heavy step-ups with explosive knee drive. Barbell hip thrust heavy. Single-leg squat to box. Bounding drills 3×20m. 50 min.",
          },
          {
            day: "Thu",
            type: "workout",
            label: "Tempo Run",
            detail:
              "15 min warmup, 30 min tempo on hilly terrain, 15 min cooldown.",
          },
          {
            day: "Fri",
            type: "workout",
            label: "Quality Run",
            detail:
              "3×10 min uphill at goal race effort. 5 min walk recovery. 2 mi warmup/cooldown. Race-pace simulation.",
          },
          {
            day: "Sat",
            type: "long",
            label: "Long Group Run",
            detail:
              "2:45–3:00 with group. ~4,000ft vert. Fuel every 40 min. Mammoth-style climbs if possible.",
          },
          { day: "Sun", type: "rest", label: "Rest", detail: "Full rest." },
        ],
      },
      {
        week: 10,
        dates: "Jul 14–20",
        total_miles: "46–50",
        vert: "8,000",
        days: [
          {
            day: "Mon",
            type: "workout",
            label: "Hard Group Run",
            detail:
              "8–10 miles at group tempo pace. Peak volume week — run strong.",
          },
          {
            day: "Tue",
            type: "easy",
            label: "Easy Run",
            detail: "50 min easy Z2.",
          },
          {
            day: "Wed",
            type: "strength",
            label: "Strength C — Peak Load",
            detail:
              "Build Strength II — peak load. Heaviest step-ups of the entire 20-week cycle. Heavy hip thrust. Loaded reverse lunges. Bounding drills. Top of the pyramid.",
          },
          {
            day: "Thu",
            type: "workout",
            label: "Tempo Run",
            detail:
              "15 min warmup, 35 min tempo — longest tempo of the plan. 15 min cooldown on hilly terrain.",
          },
          {
            day: "Fri",
            type: "workout",
            label: "Quality Run",
            detail:
              "5×6 min Z4 on varied terrain. 90s jog rest. High quality day going into the biggest weekend.",
          },
          {
            day: "Sat",
            type: "long",
            label: "PEAK Long Run #1",
            detail:
              "3:15–3:30 with group (or solo). ~5,000ft vert. Treat it like a race. Fuel every 40 min. Note how glutes hold up on hour 2+ climbs — proof of the strength work.",
          },
          {
            day: "Sun",
            type: "rest",
            label: "Rest",
            detail: "Full rest. Biggest week of the plan.",
          },
        ],
      },
      {
        week: 11,
        dates: "Jul 21–27",
        total_miles: "32–36",
        vert: "3,500",
        days: [
          {
            day: "Mon",
            type: "workout",
            label: "Hard Group Run",
            detail:
              "8–10 miles at group pace but dial back personal effort — recovery week. Run Z2–Z3, not Z4.",
          },
          {
            day: "Tue",
            type: "easy",
            label: "Easy Run",
            detail: "40 min easy Z2.",
          },
          {
            day: "Wed",
            type: "strength",
            label: "Strength C — Light",
            detail:
              "Build Strength II reduced. 2×8, moderate load. No failure sets. Goal: feel fresh going into Yosemite.",
          },
          {
            day: "Thu",
            type: "workout",
            label: "Last Hard Tempo",
            detail:
              "15 min warmup, 20 min tempo, 15 min cooldown. Last formal tempo before Yosemite.",
          },
          {
            day: "Fri",
            type: "workout",
            label: "Quality Run",
            detail:
              "3×8 min at race effort uphill. 20 min warmup/cooldown. Last quality session before the backpacking trip.",
          },
          {
            day: "Sat",
            type: "easy",
            label: "Easy Run + Pack Check",
            detail:
              "60 min easy. Prep Yosemite gear. Dial your nutrition for 3 days on trail.",
          },
          {
            day: "Sun",
            type: "rest",
            label: "Rest / Travel",
            detail: "Rest. Drive to Yosemite trailhead. Early night.",
          },
        ],
      },
      {
        week: 12,
        dates: "Jul 28 – Aug 3",
        total_miles: "Yosemite + float",
        vert: "Yosemite vert",
        days: [
          {
            day: "Mon",
            type: "rest",
            label: "Rest",
            detail: "Final rest before Yosemite. Eat well, hydrate.",
          },
          {
            day: "Tue",
            type: "long",
            label: "🏔 Yosemite Day 1",
            detail:
              "Backpacking Day 1 (Aug 1). ~14 miles with pack. Hike Z1–Z2 effort. Fuel every 90 min. 8,000–10,000ft altitude — this is altitude training.",
          },
          {
            day: "Wed",
            type: "long",
            label: "🏔 Yosemite Day 2",
            detail:
              "Backpacking Day 2. ~14 miles. Same easy approach. Note how legs feel under load — this is the back-to-back stimulus.",
          },
          {
            day: "Thu",
            type: "long",
            label: "🏔 Yosemite Day 3",
            detail:
              "Backpacking Day 3 (Aug 3). ~14 miles out. Pace yourself. 42 miles at altitude = legitimate training block.",
          },
          {
            day: "Fri",
            type: "rest",
            label: "Rest / Drive Home",
            detail:
              "Travel day. Eat protein and carbs aggressively. Legs will be heavy — that's correct.",
          },
          {
            day: "Sat",
            type: "rest",
            label: "Full Rest",
            detail:
              "Full rest. Do not run. 42 trail miles at altitude needs real recovery.",
          },
          {
            day: "Sun",
            type: "easy",
            label: "Easy Shakeout",
            detail:
              "20–30 min very easy jog. Assess. If legs still heavy, walk instead.",
          },
        ],
      },
      {
        week: 13,
        dates: "Aug 4–10",
        total_miles: "28–32",
        vert: "2,500",
        days: [
          {
            day: "Mon",
            type: "easy",
            label: "Easy Run (skip group)",
            detail:
              "45 min easy Z2. Skip the hard group run this week — post-Yosemite recovery trumps group pressure. Flat, no vert.",
          },
          {
            day: "Tue",
            type: "easy",
            label: "Easy Run",
            detail: "40 min easy Z2.",
          },
          {
            day: "Wed",
            type: "strength",
            label: "Strength C — Return",
            detail:
              "Build Strength II at ~70% load. Step-ups, hip thrust, lateral band walks. Reactivate without adding fatigue.",
          },
          {
            day: "Thu",
            type: "easy",
            label: "Easy Run",
            detail:
              "45 min Z2 with strides. No tempo this week — gauge how post-Yosemite legs feel.",
          },
          {
            day: "Fri",
            type: "rest",
            label: "Rest",
            detail: "Rest. Still recovering.",
          },
          {
            day: "Sat",
            type: "long",
            label: "Long Group Run (easy effort)",
            detail:
              "90 min with group at easy effort. ~1,500ft vert. You may feel surprisingly good — Yosemite altitude adaptation kicking in.",
          },
          { day: "Sun", type: "rest", label: "Rest", detail: "Full rest." },
        ],
      },
      {
        week: 14,
        dates: "Aug 11–17",
        total_miles: "46–50",
        vert: "8,000",
        days: [
          {
            day: "Mon",
            type: "workout",
            label: "Hard Group Run",
            detail:
              "8–10 miles at full group tempo pace. Back with a vengeance after Yosemite recovery.",
          },
          {
            day: "Tue",
            type: "easy",
            label: "Easy Run",
            detail: "50 min easy Z2.",
          },
          {
            day: "Wed",
            type: "strength",
            label: "Strength C — Final Full",
            detail:
              "Build Strength II full load return. Heavy step-ups with explosive drive. Heavy hip thrust. Bounding drills. Last heavy strength week of the entire cycle.",
          },
          {
            day: "Thu",
            type: "workout",
            label: "Tempo Run",
            detail:
              "15 min warmup, 30 min tempo on hilly terrain, 15 min cooldown.",
          },
          {
            day: "Fri",
            type: "workout",
            label: "Quality Run",
            detail:
              "4×10 min uphill at race effort. 5 min walk recovery. Race simulation — this is Mammoth in 6 weeks.",
          },
          {
            day: "Sat",
            type: "long",
            label: "PEAK Long Run #2",
            detail:
              "3:15 trail. ~5,000ft vert. Mammoth conditions if possible. Run this mentally like a race — nutrition, pacing, effort. Your final confidence run.",
          },
          { day: "Sun", type: "rest", label: "Rest", detail: "Full rest." },
        ],
      },
      {
        week: 15,
        dates: "Aug 18–24",
        total_miles: "28–32",
        vert: "3,000",
        days: [
          {
            day: "Mon",
            type: "workout",
            label: "Hard Group Run (moderate)",
            detail:
              "8–10 miles with group at Z2–Z3. Recovery week — go with them but don't race it. Fitness is built.",
          },
          {
            day: "Tue",
            type: "easy",
            label: "Easy Run",
            detail: "40 min easy Z2.",
          },
          {
            day: "Wed",
            type: "strength",
            label: "Strength C — Final Deload",
            detail:
              "Build Strength II deload. 2×8, ~60% load. Last deload before taper strength. No soreness, no fatigue.",
          },
          {
            day: "Thu",
            type: "easy",
            label: "Easy Run",
            detail: "45 min Z2. No tempo this week.",
          },
          { day: "Fri", type: "rest", label: "Rest", detail: "Rest." },
          {
            day: "Sat",
            type: "long",
            label: "Long Group Run",
            detail:
              "80 min easy with group. ~1,200ft vert. Conversational pace.",
          },
          { day: "Sun", type: "rest", label: "Rest", detail: "Full rest." },
        ],
      },
    ],
  },
  {
    id: "taper",
    name: "Taper",
    subtitle: "Sharpen & Rest",
    dates: "Aug 25 – Sep 27",
    weeks: 5,
    color: "#8b9eb5",
    strengthKey: "taper",
    description:
      "Same skeleton but volume drops hard. Mon group run stays but effort moderates. Strength drops to 1x activation session. Arrive hungry and powerful.",
    focus: [
      "Volume –40%",
      "Mon group run stays",
      "Strength 1x activation",
      "Carb-load 3 days out",
    ],
    weeks_data: [
      {
        week: 16,
        dates: "Aug 25–31",
        total_miles: "32–36",
        vert: "4,000",
        days: [
          {
            day: "Mon",
            type: "workout",
            label: "Hard Group Run",
            detail:
              "8–10 miles at full group pace. Taper starts but Mon group run is a keeper — the sharpness is good.",
          },
          {
            day: "Tue",
            type: "easy",
            label: "Easy Run",
            detail: "40 min easy Z2.",
          },
          {
            day: "Wed",
            type: "easy",
            label: "Easy Run",
            detail: "35 min easy Z2.",
          },
          {
            day: "Thu",
            type: "strength",
            label: "Strength — Taper",
            detail:
              "Taper Strength. 2×8 step-ups, hip thrust, lateral band walks, single-leg RDL, calf raises. Light load (~50–60%). 30 min max. Activation, not fatigue.",
          },
          {
            day: "Fri",
            type: "workout",
            label: "Quality Run",
            detail:
              "5×3 min uphill Z4. Walk down. Short and sharp — maintain the edge.",
          },
          {
            day: "Sat",
            type: "long",
            label: "Long Group Run",
            detail:
              "2:00–2:15 with group. ~2,500ft vert. Include 30 min at race effort.",
          },
          { day: "Sun", type: "rest", label: "Rest", detail: "Full rest." },
        ],
      },
      {
        week: 17,
        dates: "Sep 1–7",
        total_miles: "26–30",
        vert: "3,000",
        days: [
          {
            day: "Mon",
            type: "workout",
            label: "Hard Group Run",
            detail:
              "8–10 miles at group pace. Keep running with them — the social effort is fine here.",
          },
          {
            day: "Tue",
            type: "easy",
            label: "Easy Run",
            detail: "35 min easy Z2.",
          },
          {
            day: "Wed",
            type: "easy",
            label: "Easy Run",
            detail: "30 min easy.",
          },
          {
            day: "Thu",
            type: "strength",
            label: "Strength — Taper",
            detail:
              "Taper Strength. Same as Week 16. 2×8, light. You should feel activated and springy afterward, not sore.",
          },
          {
            day: "Fri",
            type: "workout",
            label: "Quality Run",
            detail: "4×3 min uphill Z4. Walk recovery. Shorter than Week 16.",
          },
          {
            day: "Sat",
            type: "long",
            label: "Long Group Run",
            detail: "90 min with group. ~1,800ft vert. Easy effort.",
          },
          { day: "Sun", type: "rest", label: "Rest", detail: "Full rest." },
        ],
      },
      {
        week: 18,
        dates: "Sep 8–14",
        total_miles: "20–24",
        vert: "1,800",
        days: [
          {
            day: "Mon",
            type: "workout",
            label: "Hard Group Run",
            detail:
              "8–10 miles with group. Last full-effort Monday. Run it well.",
          },
          {
            day: "Tue",
            type: "easy",
            label: "Easy Run",
            detail: "30 min easy Z2.",
          },
          { day: "Wed", type: "rest", label: "Rest", detail: "Rest." },
          {
            day: "Thu",
            type: "strength",
            label: "Strength — Last Session",
            detail:
              "Final strength session of the entire cycle. 2×8 — step-ups, hip thrust, band walks. Very light. After today, no more lifting until after the race.",
          },
          {
            day: "Fri",
            type: "workout",
            label: "Quality Run",
            detail: "3×3 min uphill Z4. Very short. Just keep the engine warm.",
          },
          {
            day: "Sat",
            type: "long",
            label: "Long Group Run",
            detail: "75 min easy with group. ~1,200ft vert.",
          },
          { day: "Sun", type: "rest", label: "Rest", detail: "Rest." },
        ],
      },
      {
        week: 19,
        dates: "Sep 15–21",
        total_miles: "14–18",
        vert: "800",
        days: [
          {
            day: "Mon",
            type: "workout",
            label: "Group Run (short)",
            detail:
              "Join the group but peel off at 6 miles. You don't need the full 8–10 this week. Stay connected, don't overdo it.",
          },
          {
            day: "Tue",
            type: "easy",
            label: "Easy Run",
            detail: "25 min easy Z2 with 4 strides.",
          },
          { day: "Wed", type: "rest", label: "Rest", detail: "Rest." },
          {
            day: "Thu",
            type: "easy",
            label: "Easy Run",
            detail: "25 min easy + 5×20s strides.",
          },
          {
            day: "Fri",
            type: "easy",
            label: "Shakeout",
            detail:
              "20 min easy + 4 strides. Legs should feel snappy and powerful — that's the taper working.",
          },
          {
            day: "Sat",
            type: "easy",
            label: "Easy Run (solo)",
            detail:
              "35 min easy. ~500ft vert. Skip the group long run — protect your legs.",
          },
          {
            day: "Sun",
            type: "rest",
            label: "Rest / Travel",
            detail: "Rest. Drive to Mammoth. Settle in. Big carb-rich dinner.",
          },
        ],
      },
      {
        week: 20,
        dates: "Sep 22–27",
        total_miles: "8–10 + Race",
        vert: "400 + race",
        days: [
          {
            day: "Mon",
            type: "rest",
            label: "Rest",
            detail:
              "Rest. Skip group run this week. Walk around Mammoth — your body is adjusting to 8,000ft.",
          },
          {
            day: "Tue",
            type: "easy",
            label: "Easy Shakeout",
            detail:
              "20 min easy at altitude + 4 strides. HR will be ~10 bpm higher than sea level — that's normal.",
          },
          {
            day: "Wed",
            type: "easy",
            label: "Easy Run",
            detail: "15 min easy + 4 strides. Short and sharp.",
          },
          {
            day: "Thu",
            type: "rest",
            label: "Rest",
            detail:
              "Rest. Carb focus starts now — rice, pasta, potatoes. Hydrate aggressively. Altitude dehydrates faster.",
          },
          {
            day: "Fri",
            type: "easy",
            label: "Pre-Race Shakeout",
            detail:
              "10 min easy + 4 strides. Lay out race kit. Check gear. In bed by 9pm.",
          },
          {
            day: "Sat",
            type: "rest",
            label: "Rest",
            detail:
              "Rest. Big carb dinner, no new foods. Visualize the climbs — your glutes are ready.",
          },
          {
            day: "Sun",
            type: "race",
            label: "🏔 RACE DAY",
            detail:
              "Mammoth Trailfest 26K · Sep 27. Go out conservative — altitude bites hard in mile 1. Fuel by 30 min, don't wait until hungry. Drive through climbs with your glutes. Trust the descents. Target: sub 2:50.",
          },
        ],
      },
    ],
  },
];
