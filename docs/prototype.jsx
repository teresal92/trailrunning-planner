import { useState } from "react";

const STRENGTH_PROGRAMS = {
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

const PHASES = [
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

const DAY_COLORS = {
  rest: { bg: "#1a1a1a", text: "#555", dot: "#333" },
  easy: { bg: "#1a2a1f", text: "#7eb8a0", dot: "#7eb8a0" },
  workout: { bg: "#2a1f0f", text: "#c4a35a", dot: "#c4a35a" },
  strength: { bg: "#1a1a2a", text: "#8b9eb5", dot: "#8b9eb5" },
  long: { bg: "#2a0f0f", text: "#d4705a", dot: "#d4705a" },
  race: { bg: "#2a1500", text: "#ffd700", dot: "#ffd700" },
};

export default function TrainingPlan() {
  const [activePhase, setActivePhase] = useState(0);
  const [activeWeek, setActiveWeek] = useState(0);
  const [selectedDay, setSelectedDay] = useState(null);
  const [showStrength, setShowStrength] = useState(false);

  const phase = PHASES[activePhase];
  const week = phase.weeks_data[activeWeek];
  const strengthProgram = STRENGTH_PROGRAMS[phase.strengthKey];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0d0d0d",
        color: "#e8e0d0",
        fontFamily: "'Georgia', 'Times New Roman', serif",
      }}
    >
      <div
        style={{
          background: "linear-gradient(180deg, #111 0%, #0d0d0d 100%)",
          borderBottom: "1px solid #222",
          padding: "28px 24px 20px",
        }}
      >
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.25em",
              color: "#7eb8a0",
              textTransform: "uppercase",
              marginBottom: 8,
              fontFamily: "monospace",
            }}
          >
            Teresa Lew · F33 · UltraSignup 81.32%
          </div>
          <h1
            style={{
              fontSize: 26,
              fontWeight: 400,
              margin: "0 0 4px",
              letterSpacing: "0.02em",
              lineHeight: 1.2,
            }}
          >
            Mammoth Trailfest 26K
          </h1>
          <div style={{ fontSize: 13, color: "#888", fontStyle: "italic" }}>
            Training Plan · May – September 2026
          </div>
          <div
            style={{
              marginTop: 16,
              display: "flex",
              gap: 14,
              fontSize: 11,
              color: "#aaa",
              fontFamily: "monospace",
              flexWrap: "wrap",
            }}
          >
            <div>
              <span style={{ color: "#7eb8a0" }}>PR Target</span> sub 2:50
            </div>
            <div>
              <span style={{ color: "#c4a35a" }}>Race</span> Sep 27
            </div>
            <div>
              <span style={{ color: "#d4705a" }}>Weeks</span> 20
            </div>
            <div>
              <span style={{ color: "#8b9eb5" }}>🏔 Yosemite</span> Aug 1–3
            </div>
          </div>
          <div
            style={{
              marginTop: 12,
              display: "flex",
              gap: 14,
              fontSize: 11,
              color: "#666",
              fontFamily: "monospace",
              flexWrap: "wrap",
              borderTop: "1px solid #1e1e1e",
              paddingTop: 10,
            }}
          >
            <div>
              <span style={{ color: "#c4a35a" }}>Mon</span> Hard group 8–10mi
            </div>
            <div>
              <span style={{ color: "#c4a35a" }}>Thu</span> Tempo
            </div>
            <div>
              <span style={{ color: "#c4a35a" }}>Fri</span> Quality
            </div>
            <div>
              <span style={{ color: "#d4705a" }}>Sat</span> Long group run
            </div>
            <div>
              <span style={{ color: "#555" }}>Sun</span> Rest
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          overflowX: "auto",
          borderBottom: "1px solid #1e1e1e",
          background: "#0f0f0f",
          padding: "0 16px",
        }}
      >
        {PHASES.map((p, i) => (
          <button
            key={p.id}
            onClick={() => {
              setActivePhase(i);
              setActiveWeek(0);
              setSelectedDay(null);
              setShowStrength(false);
            }}
            style={{
              flexShrink: 0,
              padding: "14px 14px",
              background: "none",
              border: "none",
              borderBottom:
                activePhase === i
                  ? `2px solid ${p.color}`
                  : "2px solid transparent",
              color: activePhase === i ? p.color : "#555",
              cursor: "pointer",
              fontSize: 12,
              fontFamily: "'Georgia', serif",
              transition: "color 0.2s",
              textAlign: "left",
              marginBottom: -1,
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 2 }}>{p.name}</div>
            <div
              style={{
                fontSize: 10,
                color: activePhase === i ? "#888" : "#444",
                fontFamily: "monospace",
              }}
            >
              {p.dates}
            </div>
          </button>
        ))}
      </div>

      <div style={{ maxWidth: 640, margin: "0 auto", padding: "20px 16px" }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
          {["Schedule", "Strength Program"].map((label, i) => (
            <button
              key={label}
              onClick={() => setShowStrength(i === 1)}
              style={{
                padding: "8px 16px",
                background: showStrength === (i === 1) ? phase.color : "#111",
                border: `1px solid ${showStrength === (i === 1) ? phase.color : "#2a2a2a"}`,
                borderRadius: 4,
                color: showStrength === (i === 1) ? "#000" : "#777",
                cursor: "pointer",
                fontSize: 12,
                fontFamily: "monospace",
                transition: "all 0.15s",
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {!showStrength ? (
          <>
            <div
              style={{
                background: "#111",
                border: `1px solid ${phase.color}22`,
                borderLeft: `3px solid ${phase.color}`,
                borderRadius: 6,
                padding: "16px 18px",
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 10,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 16,
                      color: phase.color,
                      fontWeight: 600,
                      marginBottom: 2,
                    }}
                  >
                    {phase.name}
                  </div>
                  <div
                    style={{ fontSize: 12, color: "#666", fontStyle: "italic" }}
                  >
                    {phase.subtitle}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#555",
                    fontFamily: "monospace",
                  }}
                >
                  {phase.weeks}w
                </div>
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: "#bbb",
                  margin: "0 0 12px",
                  lineHeight: 1.6,
                }}
              >
                {phase.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {phase.focus.map((f) => (
                  <span
                    key={f}
                    style={{
                      fontSize: 11,
                      color: phase.color,
                      background: `${phase.color}11`,
                      border: `1px solid ${phase.color}33`,
                      borderRadius: 3,
                      padding: "3px 8px",
                      fontFamily: "monospace",
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: 8,
                marginBottom: 16,
                flexWrap: "wrap",
              }}
            >
              {phase.weeks_data.map((w, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveWeek(i);
                    setSelectedDay(null);
                  }}
                  style={{
                    padding: "6px 12px",
                    background: activeWeek === i ? phase.color : "#111",
                    border: `1px solid ${activeWeek === i ? phase.color : "#2a2a2a"}`,
                    borderRadius: 4,
                    color: activeWeek === i ? "#000" : "#888",
                    cursor: "pointer",
                    fontSize: 11,
                    fontFamily: "monospace",
                    transition: "all 0.15s",
                  }}
                >
                  Wk {w.week}
                </button>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 14,
                paddingBottom: 10,
                borderBottom: "1px solid #1e1e1e",
              }}
            >
              <div>
                <div style={{ fontSize: 15, fontWeight: 600 }}>
                  Week {week.week}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#666",
                    fontFamily: "monospace",
                    marginTop: 2,
                  }}
                >
                  {week.dates}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  fontSize: 11,
                  fontFamily: "monospace",
                  color: "#888",
                }}
              >
                <div>
                  <span style={{ color: "#c4a35a" }}>{week.total_miles}</span>{" "}
                  mi
                </div>
                <div>
                  <span style={{ color: "#d4705a" }}>{week.vert}</span> ft vert
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {week.days.map((d, i) => {
                const colors = DAY_COLORS[d.type];
                const isSelected = selectedDay === i;
                return (
                  <div
                    key={i}
                    onClick={() => setSelectedDay(isSelected ? null : i)}
                    style={{
                      background: isSelected ? colors.bg : "#111",
                      border: `1px solid ${isSelected ? colors.dot + "44" : "#1e1e1e"}`,
                      borderLeft: `3px solid ${isSelected ? colors.dot : "#1e1e1e"}`,
                      borderRadius: 5,
                      padding: "12px 14px",
                      cursor: "pointer",
                      transition: "all 0.15s",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                        }}
                      >
                        <div
                          style={{
                            fontSize: 10,
                            color: "#555",
                            fontFamily: "monospace",
                            width: 28,
                          }}
                        >
                          {d.day}
                        </div>
                        <div
                          style={{
                            width: 7,
                            height: 7,
                            borderRadius: "50%",
                            background: colors.dot,
                            flexShrink: 0,
                          }}
                        />
                        <div
                          style={{
                            fontSize: 13,
                            color: isSelected ? colors.text : "#ccc",
                          }}
                        >
                          {d.label}
                        </div>
                      </div>
                      <div style={{ fontSize: 11, color: "#444" }}>
                        {isSelected ? "▲" : "▼"}
                      </div>
                    </div>
                    {isSelected && (
                      <div
                        style={{
                          marginTop: 10,
                          paddingTop: 10,
                          borderTop: "1px solid #222",
                          fontSize: 13,
                          color: "#aaa",
                          lineHeight: 1.65,
                          paddingLeft: 40,
                        }}
                      >
                        {d.detail}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div
              style={{
                marginTop: 24,
                background: "#0f0f0f",
                border: "1px solid #1a1a1a",
                borderRadius: 6,
                padding: "14px 16px",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: "0.15em",
                  color: "#555",
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                  marginBottom: 10,
                }}
              >
                Heart Rate Zones
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "6px 16px",
                  fontSize: 12,
                  fontFamily: "monospace",
                }}
              >
                {[
                  ["Z1", "Easy / Recovery", "#8b9eb5", "< 130 bpm"],
                  ["Z2", "Aerobic Base", "#7eb8a0", "130–148 bpm"],
                  ["Z3", "Tempo", "#c4a35a", "148–162 bpm"],
                  ["Z4", "Threshold", "#d4705a", "162–172 bpm"],
                  ["Z5", "VO2 / Hard", "#e8a0a0", "172+ bpm"],
                ].map(([z, name, color, range]) => (
                  <div
                    key={z}
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <span style={{ color, fontWeight: 700, width: 20 }}>
                      {z}
                    </span>
                    <span style={{ color: "#666", fontSize: 11 }}>
                      {name} · {range}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div>
            <div
              style={{
                background: "#111",
                border: `1px solid ${phase.color}22`,
                borderLeft: `3px solid ${phase.color}`,
                borderRadius: 6,
                padding: "16px 18px",
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  fontSize: 16,
                  color: phase.color,
                  fontWeight: 600,
                  marginBottom: 4,
                }}
              >
                {strengthProgram.name}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "#bbb",
                  marginBottom: 12,
                  lineHeight: 1.6,
                }}
              >
                {strengthProgram.goal}
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  fontSize: 11,
                  fontFamily: "monospace",
                  color: "#888",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <span style={{ color: phase.color }}>
                    {strengthProgram.sessions_per_week}×
                  </span>
                  /week
                </div>
                <div>
                  <span style={{ color: "#c4a35a" }}>Default:</span>{" "}
                  {strengthProgram.sets_reps}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {strengthProgram.exercises.map((ex, i) => (
                <div
                  key={i}
                  style={{
                    background: "#111",
                    border: "1px solid #1e1e1e",
                    borderLeft: `3px solid ${phase.color}55`,
                    borderRadius: 5,
                    padding: "14px 16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: 8,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 14,
                        color: "#e8e0d0",
                        fontWeight: 600,
                      }}
                    >
                      {ex.name}
                    </div>
                    <div
                      style={{
                        fontSize: 10,
                        color: phase.color,
                        fontFamily: "monospace",
                        background: `${phase.color}15`,
                        padding: "2px 8px",
                        borderRadius: 3,
                        marginLeft: 10,
                        flexShrink: 0,
                      }}
                    >
                      {ex.cue}
                    </div>
                  </div>
                  <div style={{ fontSize: 12, color: "#888", lineHeight: 1.7 }}>
                    {ex.detail}
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: 20,
                background: "#0f0f0f",
                border: "1px solid #1a1a1a",
                borderRadius: 6,
                padding: "14px 16px",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: "0.15em",
                  color: "#555",
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                  marginBottom: 8,
                }}
              >
                Nutrition on Strength Days
              </div>
              <div style={{ fontSize: 12, color: "#777", lineHeight: 1.7 }}>
                Schedule strength 4–6 hrs after running, or on easy/rest days.
                Eat 20–30g protein within 30 min after. In Build II and taper,
                keep carbs high — you're fueling adaptation, not cutting.
              </div>
            </div>
          </div>
        )}

        <div
          style={{
            marginTop: 20,
            fontSize: 11,
            color: "#444",
            lineHeight: 1.7,
            fontStyle: "italic",
            textAlign: "center",
            paddingBottom: 24,
          }}
        >
          Built on MUC 50K · Yosemite Aug 1–3 · Target sub 2:50 · Race Sep 27,
          2026
        </div>
      </div>
    </div>
  );
}
