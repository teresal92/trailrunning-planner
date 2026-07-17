// Training Data and Program

import type { Phase, StrengthProgram } from "./types";

export const STRENGTH_PROGRAMS: Record<string, StrengthProgram> = {
  base: {
    name: "Base Strength",
    goal: "Rebuild movement patterns, activate glutes, establish baseline.",
    sessionsPerWeek: 2,
    setsReps: "3×10–12 unless noted",
    exercises: [
      {
        id: "eef0faac-31cf-4b86-8a79-056e1dbd45fc",
        name: "Weighted Step-Ups",
        detail:
          '3×10 each leg. Use an 18–24" box. Drive through the heel, stand tall at top. Add weight each week. Most direct exercise for uphill climbing power.',
        cue: "Push heel, not toe",
      },
      {
        id: "1c8799c1-81aa-4910-99ac-a109aeb7e80a",
        name: "Glute Bridge / Hip Thrust",
        detail:
          "3×15. Bodyweight first two weeks, then add a dumbbell or barbell. Full hip extension at top, hold 1 second.",
        cue: "Squeeze hard at top",
      },
      {
        id: "6143780d-d8bc-451d-b385-a6e03c262af7",
        name: "Bulgarian Split Squat",
        detail:
          "3×10 each leg. Rear foot elevated. Start bodyweight — these are humbling. Keep torso upright.",
        cue: "Front knee tracks toes",
      },
      {
        id: "69e8733d-6799-4c17-b55e-25b6d248bb3a",
        name: "Single-Leg Romanian Deadlift",
        detail:
          "3×10 each leg. Light dumbbells. Hip hinge with soft knee. Builds posterior chain stability for uneven terrain.",
        cue: "Hip hinge, not squat",
      },
      {
        id: "be512173-b648-402e-a82c-89cd6f7a130e",
        name: "Single-Leg Calf Raises",
        detail:
          "3×15 each leg. On a step for full range. Slow lowering. Altitude running is very calf-intensive.",
        cue: "Full range, slow down",
      },
      {
        id: "6e57c45d-54f8-4048-bb12-c33eb02d19a0",
        name: "Dead Bug",
        detail:
          "3×8 each side. Opposite arm/leg lower slowly, lower back pressed to floor. Core stability for technical descents.",
        cue: "Spine stays on floor",
      },
      {
        id: "8d5155db-d907-4b60-be43-cc07ed15c272",
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
    sessionsPerWeek: 2,
    setsReps: "3–4×8–10 unless noted",
    exercises: [
      {
        id: "71a377a1-f89a-4cca-812e-58a5ace682cc",
        name: "Heavy Weighted Step-Ups",
        detail:
          "4×8 each leg. Heavy enough that reps 7–8 are a real challenge. Primary uphill power movement — directly mimics climbing mechanics.",
        cue: "Drive heel, stand tall",
      },
      {
        id: "8951c100-5c67-4a23-b2b6-cfa9652fe2b4",
        name: "Barbell Hip Thrust",
        detail:
          "4×10. Load progressively each week. Barbell across hips, upper back on bench. Gold standard glute exercise.",
        cue: "Full extension, no arch",
      },
      {
        id: "cb89c7b2-0c03-43dc-9b96-5c273b05783f",
        name: "Bulgarian Split Squat (loaded)",
        detail:
          "3×8 each leg. Add dumbbells. Slow 3-second eccentric. This strength shows up directly on steep grades.",
        cue: "Control the descent",
      },
      {
        id: "e718c556-4b38-4675-8220-39e5b491c55b",
        name: "Box Jumps",
        detail:
          "3×6. Land softly through glutes and quads. Step down, don't jump down. Power development.",
        cue: "Land quiet, land low",
      },
      {
        id: "1bca10a9-2c8d-4ea1-9243-3662959050cc",
        name: "Lateral Band Walks",
        detail:
          "3×15 each direction. Mini band above knees, half-squat position. Glute medius — critical for single-leg stability on descents.",
        cue: "Hips level, don't waddle",
      },
      {
        id: "50146ce9-d644-495f-879b-eb7711f974ec",
        name: "Single-Leg RDL (loaded)",
        detail: "3×8 each. More weight than base phase. Slow and controlled.",
        cue: "Feel hamstring stretch",
      },
      {
        id: "9f2f6fb1-8329-4f3e-8d43-b6d018a26f03",
        name: "Copenhagen Plank",
        detail:
          "3×20–30s each side. Side plank with top leg on bench. Adductor strength for knee health on long descents.",
        cue: "Hips square, no sag",
      },
      {
        id: "b95fbfbf-e96f-467f-8d09-91a43755d6e0",
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
    sessionsPerWeek: 2,
    setsReps: "3–4×6–8 heavy or power-focused",
    exercises: [
      {
        id: "fd16be14-226e-4dbe-9b52-0d1faa28b95b",
        name: "Heavy Step-Ups with Knee Drive",
        detail:
          "4×6 each leg. Heaviest loads of the cycle. At the top, drive your knee up explosively — directly mimics the uphill running stride.",
        cue: "Explosive knee drive",
      },
      {
        id: "7d06fd39-622e-482e-b14a-965154924d30",
        name: "Barbell Hip Thrust (heavy)",
        detail:
          "4×8. Near-maximum effort. Your glutes should be significantly stronger than May.",
        cue: "Powerful hip snap",
      },
      {
        id: "44d319eb-0f4a-4a86-a830-926dd80ca585",
        name: "Single-Leg Squat to Box",
        detail:
          "3×6 each. Slowly lower to a box behind you, drive back up. Eccentric control — absorbs descent impact.",
        cue: "Don't collapse inward",
      },
      {
        id: "d0233b7e-54b2-49fe-98a1-91deaad8989d",
        name: "Bounding / Running Skips",
        detail:
          "3×20m. Exaggerated running skips focusing on glute drive and knee lift. Trains fast-twitch power for uphills.",
        cue: "Drive knee, push ground",
      },
      {
        id: "11177caa-4ab1-4a26-a46a-f2121624d2a2",
        name: "Reverse Lunge (loaded)",
        detail:
          "3×8 each. Step back, drive front heel to stand. More hip-dominant than forward lunge.",
        cue: "Front heel stays down",
      },
      {
        id: "73c27e8c-a12e-4aa7-a644-2e51561f284b",
        name: "Lateral Band Walks (heavy band)",
        detail: "3×12 each direction. Progress band resistance.",
        cue: "Stay low, resist",
      },
      {
        id: "49750fa6-139b-4235-9227-cb8ccfd7fec4",
        name: "Single-Leg Calf Raise (loaded)",
        detail: "3×12 each, holding a dumbbell. Pause 1s at top.",
        cue: "Full range, pause",
      },
      {
        id: "b74acbdd-6d35-45de-a6de-86002e8d6a0b",
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
    sessionsPerWeek: 1,
    setsReps: "2×8 — activation only",
    exercises: [
      {
        id: "8fc97629-d308-48a3-84b2-5b17edb08fa4",
        name: "Weighted Step-Ups",
        detail:
          "2×8 each leg. ~60% of peak load. Wake up the pattern, don't create soreness.",
        cue: "Sharp and crisp",
      },
      {
        id: "96cadf1f-742c-4716-85e7-24570bc1c7e9",
        name: "Hip Thrust",
        detail:
          "2×10. Moderate load. Remind your glutes what they're there for.",
        cue: "Full extension",
      },
      {
        id: "70bbe05d-8465-421e-aa29-c18b6e2b2eb7",
        name: "Lateral Band Walks",
        detail: "2×12 each direction. Light band. Pure activation.",
        cue: "Stay controlled",
      },
      {
        id: "88336466-894a-4530-977e-f00fde96abf2",
        name: "Single-Leg RDL",
        detail: "2×8 each leg. Light dumbbells. Balance check-in.",
        cue: "Slow and grounded",
      },
      {
        id: "967331b8-0f87-40b4-a1d9-8c1a01433121",
        name: "Single-Leg Calf Raises",
        detail: "2×12 each leg. No extra load.",
        cue: "Full range",
      },
      {
        id: "726c55c7-6a59-4e71-93f6-34f93865b373",
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
    weeksData: [
      {
        id: "04b9a3bc-843b-4b5e-ac93-5dbfb0b822e6",
        week: 1,
        dates: "May 12–18",
        totalMiles: "28–32",
        vert: "2,500",
        days: [
          {
            id: "8156de92-b8a3-48ef-a9ed-f060e77c272c",
            day: "Mon",
            type: "rest",
            label: "Rest / Walk",
            detail: "Full rest or 30 min easy walk. Recover from MUC.",
          },
          {
            id: "209548dc-554c-44c2-9ec5-dad0dcc5a9a9",
            day: "Tue",
            type: "easy",
            label: "Easy Run",
            detail: "45 min easy (Z2). Flat trail or road. HR under 140.",
          },
          {
            id: "286959b7-ab89-40cc-ad5f-3d76d5db7797",
            day: "Wed",
            type: "strength",
            label: "Strength A — Base",
            detail:
              "Base Strength. Step-ups (light), glute bridges, single-leg RDL, calf raises, dead bug, hip flexor stretch. 45 min. Form over load.",
          },
          {
            id: "47d1200c-44c7-425a-bca3-ff142a8279a7",
            day: "Thu",
            type: "easy",
            label: "Easy Run",
            detail: "50 min easy (Z2) with 4×20s strides at end.",
          },
          {
            id: "a535f8c0-7db4-4e4f-a88f-e5dbdb7c5cf2",
            day: "Fri",
            type: "rest",
            label: "Rest",
            detail: "Rest or yoga/mobility. Hip flexor stretch priority.",
          },
          {
            id: "9d7f1c01-522d-43d6-81f2-6ec65e84144e",
            day: "Sat",
            type: "long",
            label: "Long Run",
            detail:
              "90 min easy trail. ~1,200ft vert. Conversational pace throughout.",
          },
          {
            id: "a967c2a6-88ae-4118-be6f-02149f72cb17",
            day: "Sun",
            type: "easy",
            label: "Recovery Run",
            detail: "40 min very easy. Shake out legs.",
          },
        ],
      },
      {
        id: "6076341d-236d-4fad-b698-36ec53ef3b7e",
        week: 2,
        dates: "May 19–25",
        totalMiles: "32–36",
        vert: "3,500",
        days: [
          {
            id: "f4026ef2-a11e-4aa2-9653-685fdc9ab53b",
            day: "Mon",
            type: "rest",
            label: "Rest",
            detail: "Full rest.",
          },
          {
            id: "a99afc71-a5cc-4c0f-9225-81dac5228d62",
            day: "Tue",
            type: "easy",
            label: "Easy + Hills",
            detail:
              "55 min easy with 4×2 min uphill efforts at moderate effort. Walk down.",
          },
          {
            id: "0561fe37-91e5-4e31-a7a7-596516e5e813",
            day: "Wed",
            type: "strength",
            label: "Strength A — Base",
            detail:
              "Add weight to step-ups and hip thrusts. Introduce Bulgarian split squats at bodyweight. Box jumps 3×6 — focus on soft landing.",
          },
          {
            id: "1f41150e-7f1f-495f-8bfa-9740f6716094",
            day: "Thu",
            type: "easy",
            label: "Easy Run",
            detail: "60 min Z2. Focus on cadence (180 spm).",
          },
          {
            id: "48f1d76d-686b-44e1-8cf0-319eab3c033c",
            day: "Fri",
            type: "rest",
            label: "Rest",
            detail: "Rest or 20 min stretch.",
          },
          {
            id: "b607c288-ccff-4797-ae1f-904b65a33c7b",
            day: "Sat",
            type: "long",
            label: "Long Run",
            detail:
              "2 hrs easy trail. ~1,800ft vert. Practice hiking steep sections.",
          },
          {
            id: "e329f6ff-3817-41e7-9596-6469a4c58b6b",
            day: "Sun",
            type: "easy",
            label: "Recovery Run",
            detail: "45 min Z1–Z2.",
          },
        ],
      },
      {
        id: "4babe245-81d2-4588-96fc-5fbbae06ed45",
        week: 3,
        dates: "May 26–Jun 1",
        totalMiles: "26–28",
        vert: "2,000",
        days: [
          {
            id: "8315dce9-070a-432c-8466-1937cb0c84c6",
            day: "Mon",
            type: "rest",
            label: "Rest",
            detail: "Full rest. Recovery week.",
          },
          {
            id: "32f8c648-b827-4071-a4eb-a135988cee7e",
            day: "Tue",
            type: "easy",
            label: "Easy Run",
            detail: "45 min Z2.",
          },
          {
            id: "35cb4203-c8f0-424a-b113-a4a144076c31",
            day: "Wed",
            type: "strength",
            label: "Strength A — Deload",
            detail:
              "2×10 on everything, reduce weight ~20%. Feel strong leaving the gym, not fatigued.",
          },
          {
            id: "16e561f6-6747-45e0-922a-efce8dac09f5",
            day: "Thu",
            type: "easy",
            label: "Easy Run",
            detail: "50 min Z2 with strides.",
          },
          {
            id: "b047cfc9-afe8-434f-8ebd-cd08f707eaa7",
            day: "Fri",
            type: "rest",
            label: "Rest",
            detail: "Rest.",
          },
          {
            id: "15434a54-f4ae-4d05-a1f6-cd472c94236a",
            day: "Sat",
            type: "long",
            label: "Long Run",
            detail: "75 min easy. Low vert. Feel fresh.",
          },
          {
            id: "0fab0c9c-ba93-4402-85af-5820b10bd9ec",
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
    weeksData: [
      {
        id: "b978a0a7-4365-49b7-bbdc-85d50768ba3d",
        week: 4,
        dates: "Jun 2–8",
        totalMiles: "38–42",
        vert: "5,000",
        days: [
          {
            id: "7dc066b8-b3ee-41b6-be9d-4811d48ce640",
            day: "Mon",
            type: "workout",
            label: "Hard Group Run",
            detail:
              "8–10 miles at group tempo pace (Z3–Z4). Treat as a sustained hard effort. This is your weekly quality anchor — run with the group, don't hold back.",
          },
          {
            id: "02d37167-ee29-4a97-b666-e40cd3e59f5f",
            day: "Tue",
            type: "easy",
            label: "Easy Run",
            detail: "45 min easy Z2. Flush out Monday's effort. HR under 140.",
          },
          {
            id: "fe3394d6-bad9-4c09-8e96-58f500a2b769",
            day: "Wed",
            type: "strength",
            label: "Strength B — Build I",
            detail:
              "Build Strength I. Heavy step-ups, barbell hip thrust, Bulgarian split squats with dumbbells, box jumps, lateral band walks. 50 min.",
          },
          {
            id: "6f2801e2-8b31-457f-8f00-08dadcb80203",
            day: "Thu",
            type: "workout",
            label: "Tempo Run",
            detail:
              "15 min warmup, 20 min tempo (Z3–Z4, comfortably hard), 15 min cooldown. On hilly terrain if possible.",
          },
          {
            id: "441dedb8-4a31-4084-b471-e13c0f393fff",
            day: "Fri",
            type: "workout",
            label: "Quality Run",
            detail:
              "5×3 min uphill Z4 with walk down recovery. 2 mi warmup/cooldown. Hard day since Saturday is a long effort — get quality in now.",
          },
          {
            id: "6623de6a-9516-41b5-a69d-2c961da5e1ba",
            day: "Sat",
            type: "long",
            label: "Long Group Run",
            detail:
              "2:00–2:15 trail with group. ~2,500ft vert. Fuel every 45 min — practice this every single long run.",
          },
          {
            id: "3cd98a5f-f9b5-4834-8841-3909919ee9e1",
            day: "Sun",
            type: "rest",
            label: "Rest",
            detail:
              "Full rest or easy 30 min walk. Mon + Sat are both hard, so Sunday is genuine recovery.",
          },
        ],
      },
      {
        id: "0b12f47c-5b35-41cb-aba7-a5e03941a017",
        week: 5,
        dates: "Jun 9–15",
        totalMiles: "40–44",
        vert: "5,500",
        days: [
          {
            id: "45833428-8d67-45a0-8796-2111079921c5",
            day: "Mon",
            type: "workout",
            label: "Hard Group Run",
            detail:
              "8–10 miles at group tempo pace. Push the effort on uphills — use this as natural hill work.",
          },
          {
            id: "b0b78811-9cce-411c-b438-5af616a47e2a",
            day: "Tue",
            type: "easy",
            label: "Easy Run",
            detail: "45 min easy Z2.",
          },
          {
            id: "dbce4d76-d7e1-4c15-8c80-d5009e1f4b41",
            day: "Wed",
            type: "strength",
            label: "Strength B — Build I",
            detail:
              "Build Strength I. Increase step-up and hip thrust load vs last week. Slow 3s eccentric on split squats. Add Copenhagen plank.",
          },
          {
            id: "da41969e-4676-4de6-866d-d3f3d5829393",
            day: "Thu",
            type: "workout",
            label: "Tempo Run",
            detail:
              "15 min warmup, 25 min tempo, 15 min cooldown. Slightly longer tempo block than Week 4.",
          },
          {
            id: "9ccdbe0d-5319-4985-9174-46ba9d8c3c98",
            day: "Fri",
            type: "workout",
            label: "Quality Run",
            detail:
              "8×90s hard uphill (Z4–Z5) with walk down recovery. 2 mi warmup/cooldown. Sharp and controlled.",
          },
          {
            id: "382b6732-cb0b-48cd-b99f-ee3c1131d7fc",
            day: "Sat",
            type: "long",
            label: "Long Group Run",
            detail:
              "2:15–2:30 trail. ~3,000ft vert. Fuel every 45 min. Experiment — find what sits well at altitude.",
          },
          {
            id: "394e2b8a-8159-4910-92e0-747d0ac9ba70",
            day: "Sun",
            type: "rest",
            label: "Rest",
            detail:
              "Full rest. Three quality days this week (Mon/Thu/Fri) + long Sat. You earned it.",
          },
        ],
      },
      {
        id: "dddf8f62-76f9-4cb7-8b9a-6e183dae2ca3",
        week: 6,
        dates: "Jun 16–22",
        totalMiles: "42–46",
        vert: "6,000",
        days: [
          {
            id: "413843f7-2f79-444d-9a43-1d0c70ef85c6",
            day: "Mon",
            type: "workout",
            label: "Hard Group Run",
            detail:
              "8–10 miles at group tempo pace. This is peak volume week — lean into it.",
          },
          {
            id: "df05cf23-321d-4d8a-83be-7facfa41e850",
            day: "Tue",
            type: "easy",
            label: "Easy Run",
            detail: "50 min easy Z2.",
          },
          {
            id: "1eac6640-9e52-4df9-8777-b146cff659c2",
            day: "Wed",
            type: "strength",
            label: "Strength B — Peak Load",
            detail:
              "Build Strength I — peak load week. Heaviest step-ups yet. Heavy hip thrust. Loaded split squats. Jump rope calf finisher.",
          },
          {
            id: "7b9427a8-24f0-4178-b553-de65b59ae1de",
            day: "Thu",
            type: "workout",
            label: "Tempo Run",
            detail:
              "15 min warmup, 30 min tempo on hilly terrain, 15 min cooldown. Longest tempo block of Build I.",
          },
          {
            id: "9f2c5407-b891-455b-b1fd-f3c678d7bbd0",
            day: "Fri",
            type: "workout",
            label: "Quality Run",
            detail:
              "4×8 min Z4 threshold on trail with 2 min jog rest. On varied terrain. This is the highest quality Fri of the phase.",
          },
          {
            id: "4f4958b4-5e46-4bdf-9296-e527e86974af",
            day: "Sat",
            type: "long",
            label: "Long Group Run",
            detail:
              "2:30–2:45 trail. ~3,500ft vert. Run at goal race feel on the climbs. Fuel aggressively.",
          },
          {
            id: "a674fd5b-2d08-4ec0-a681-c627cb7379ef",
            day: "Sun",
            type: "rest",
            label: "Rest",
            detail: "Full rest. Big week — honor the recovery.",
          },
        ],
      },
      {
        id: "3fd7c4b2-9d8b-4cad-916c-149a81967f2b",
        week: 7,
        dates: "Jun 23–29",
        totalMiles: "28–32",
        vert: "3,000",
        days: [
          {
            id: "1674c564-31f2-4122-8f9e-e88f661a64d7",
            day: "Mon",
            type: "workout",
            label: "Hard Group Run (easy effort)",
            detail:
              "8–10 miles with group but treat as Z2–Z3. Recovery week — run with them but don't race. Pull back effort on uphills.",
          },
          {
            id: "28939a91-3f66-435b-9c50-d45da7a2f0d3",
            day: "Tue",
            type: "easy",
            label: "Easy Run",
            detail: "40 min easy Z2.",
          },
          {
            id: "b513a943-cc3b-4c4f-8559-f6f5cd0941f7",
            day: "Wed",
            type: "strength",
            label: "Strength B — Deload",
            detail:
              "Build Strength I deload. 2×8, reduce weight ~20%. Sharp movement, no fatigue.",
          },
          {
            id: "1a790f59-5013-40ef-9436-15fccdfec142",
            day: "Thu",
            type: "easy",
            label: "Easy Run",
            detail: "45 min Z2 with 4 strides. No formal tempo this week.",
          },
          {
            id: "50369208-ea75-4867-a655-1b99b824b47c",
            day: "Fri",
            type: "rest",
            label: "Rest",
            detail: "Rest. Recovery week — skip the quality Fri.",
          },
          {
            id: "bad3d466-9dec-4538-b56b-d1fbf7f019df",
            day: "Sat",
            type: "long",
            label: "Long Group Run",
            detail: "90 min easy with group. ~1,500ft vert. No hard efforts.",
          },
          {
            id: "681d7e19-cc86-47bc-9b78-ee48347bb0f2",
            day: "Sun",
            type: "rest",
            label: "Rest",
            detail: "Full rest.",
          },
        ],
      },
      {
        id: "53c7fd3f-4c89-4de5-a7ad-e028d7128a77",
        week: 8,
        dates: "Jun 30–Jul 6",
        totalMiles: "40–44",
        vert: "5,500",
        days: [
          {
            id: "326430e6-3740-4fab-9cbb-8aa8310f874e",
            day: "Mon",
            type: "workout",
            label: "Hard Group Run",
            detail:
              "8–10 miles at group tempo pace. Back to full effort after recovery week.",
          },
          {
            id: "2ec3cd15-2756-4dc9-9195-23220274bab0",
            day: "Tue",
            type: "easy",
            label: "Easy Run",
            detail: "45 min easy Z2.",
          },
          {
            id: "56c29fa6-dec9-44ed-9bc1-b182ebda448c",
            day: "Wed",
            type: "strength",
            label: "Strength B — Final",
            detail:
              "Build Strength I — final full session. Back to peak load. Heaviest step-ups of this phase. Heavy hip thrust.",
          },
          {
            id: "2bd8d2ea-7b32-439a-a1a6-ea47e5224f4c",
            day: "Thu",
            type: "workout",
            label: "Tempo Run",
            detail: "15 min warmup, 25 min tempo, 15 min cooldown.",
          },
          {
            id: "875af7ac-39ae-4e0b-9d57-420129ac6c76",
            day: "Fri",
            type: "workout",
            label: "Quality Run",
            detail:
              "6×3 min uphill Z4. Walk down recovery. 2 mi warmup/cooldown.",
          },
          {
            id: "8f78f215-bc81-4a29-a89b-bd35b5a2e652",
            day: "Sat",
            type: "long",
            label: "Long Group Run",
            detail:
              "2:15–2:30 trail with group. ~3,000ft vert. Try for altitude exposure if possible.",
          },
          {
            id: "4eb50df3-1bfc-4c84-b5ae-57dfa47630c4",
            day: "Sun",
            type: "rest",
            label: "Rest",
            detail: "Full rest.",
          },
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
    weeksData: [
      {
        id: "1ee1035d-ae3e-47c2-8ed1-55335fb5c706",
        week: 9,
        dates: "Jul 7–13",
        totalMiles: "44–48",
        vert: "7,000",
        days: [
          {
            id: "fa0e8bff-1461-4bac-9973-188873a9b69f",
            day: "Mon",
            type: "workout",
            label: "Hard Group Run",
            detail:
              "8–10 miles at group tempo pace. Start pushing effort on any climbs in the route.",
          },
          {
            id: "7324046a-0061-4f41-bc54-c0b61a71d76c",
            day: "Tue",
            type: "easy",
            label: "Easy Run",
            detail: "50 min easy Z2.",
          },
          {
            id: "45568bad-de0b-4e12-a1fb-6ad122bc08de",
            day: "Wed",
            type: "strength",
            label: "Strength C — Build II",
            detail:
              "Build Strength II. Heavy step-ups with explosive knee drive. Barbell hip thrust heavy. Single-leg squat to box. Bounding drills 3×20m. 50 min.",
          },
          {
            id: "7bf5f1fd-8c9b-4a09-af72-6ee0cc0fe395",
            day: "Thu",
            type: "workout",
            label: "Tempo Run",
            detail:
              "15 min warmup, 30 min tempo on hilly terrain, 15 min cooldown.",
          },
          {
            id: "123b1501-5a56-41b8-a4bc-1611a1936a7b",
            day: "Fri",
            type: "workout",
            label: "Quality Run",
            detail:
              "3×10 min uphill at goal race effort. 5 min walk recovery. 2 mi warmup/cooldown. Race-pace simulation.",
          },
          {
            id: "99890f6e-ab8b-4e83-80e4-e9d2758961f8",
            day: "Sat",
            type: "long",
            label: "Long Group Run",
            detail:
              "2:45–3:00 with group. ~4,000ft vert. Fuel every 40 min. Mammoth-style climbs if possible.",
          },
          {
            id: "4557dde7-b384-4d41-91d7-d3b149f13afa",
            day: "Sun",
            type: "rest",
            label: "Rest",
            detail: "Full rest.",
          },
        ],
      },
      {
        id: "142097c2-f14c-45ce-9021-42fc2fac7f57",
        week: 10,
        dates: "Jul 14–20",
        totalMiles: "46–50",
        vert: "8,000",
        days: [
          {
            id: "6f6914d0-0271-4f8e-80d3-bb573cb8c913",
            day: "Mon",
            type: "workout",
            label: "Hard Group Run",
            detail:
              "8–10 miles at group tempo pace. Peak volume week — run strong.",
          },
          {
            id: "434ac093-c7ad-44e6-a6f4-74789fb8e4a0",
            day: "Tue",
            type: "easy",
            label: "Easy Run",
            detail: "50 min easy Z2.",
          },
          {
            id: "634fff14-e44c-4199-9e09-fc0ec9d3a126",
            day: "Wed",
            type: "strength",
            label: "Strength C — Peak Load",
            detail:
              "Build Strength II — peak load. Heaviest step-ups of the entire 20-week cycle. Heavy hip thrust. Loaded reverse lunges. Bounding drills. Top of the pyramid.",
          },
          {
            id: "05e03ff9-f930-4e1b-9123-f5dedf8e53d0",
            day: "Thu",
            type: "workout",
            label: "Tempo Run",
            detail:
              "15 min warmup, 35 min tempo — longest tempo of the plan. 15 min cooldown on hilly terrain.",
          },
          {
            id: "ad4c3b30-c7bc-45c4-865f-650521b083cd",
            day: "Fri",
            type: "workout",
            label: "Quality Run",
            detail:
              "5×6 min Z4 on varied terrain. 90s jog rest. High quality day going into the biggest weekend.",
          },
          {
            id: "744b802c-74eb-4bbf-ae7c-de299b370bf0",
            day: "Sat",
            type: "long",
            label: "PEAK Long Run #1",
            detail:
              "3:15–3:30 with group (or solo). ~5,000ft vert. Treat it like a race. Fuel every 40 min. Note how glutes hold up on hour 2+ climbs — proof of the strength work.",
          },
          {
            id: "2580f645-2fc1-4729-baea-e7159a8b770a",
            day: "Sun",
            type: "rest",
            label: "Rest",
            detail: "Full rest. Biggest week of the plan.",
          },
        ],
      },
      {
        id: "e1e991a9-9232-4383-b121-2ede1984c8b4",
        week: 11,
        dates: "Jul 21–27",
        totalMiles: "32–36",
        vert: "3,500",
        days: [
          {
            id: "bf8ab471-8347-4800-9f01-fc8e67dfaab0",
            day: "Mon",
            type: "workout",
            label: "Hard Group Run",
            detail:
              "8–10 miles at group pace but dial back personal effort — recovery week. Run Z2–Z3, not Z4.",
          },
          {
            id: "d8950092-00e8-44d2-8d59-2b1ccbdb798d",
            day: "Tue",
            type: "easy",
            label: "Easy Run",
            detail: "40 min easy Z2.",
          },
          {
            id: "a3617d50-78ea-4aba-9f07-f797c7b6d244",
            day: "Wed",
            type: "strength",
            label: "Strength C — Light",
            detail:
              "Build Strength II reduced. 2×8, moderate load. No failure sets. Goal: feel fresh going into Yosemite.",
          },
          {
            id: "2fea0d7d-9eef-4f88-98ad-300532768590",
            day: "Thu",
            type: "workout",
            label: "Last Hard Tempo",
            detail:
              "15 min warmup, 20 min tempo, 15 min cooldown. Last formal tempo before Yosemite.",
          },
          {
            id: "a7842ca6-8e09-4940-88ce-8dbb6bf1ed35",
            day: "Fri",
            type: "workout",
            label: "Quality Run",
            detail:
              "3×8 min at race effort uphill. 20 min warmup/cooldown. Last quality session before the backpacking trip.",
          },
          {
            id: "2428ae20-e29a-4f53-9df1-aba78997d265",
            day: "Sat",
            type: "easy",
            label: "Easy Run + Pack Check",
            detail:
              "60 min easy. Prep Yosemite gear. Dial your nutrition for 3 days on trail.",
          },
          {
            id: "6711a320-7b04-4d5b-b462-b276f8c3211c",
            day: "Sun",
            type: "rest",
            label: "Rest / Travel",
            detail: "Rest. Drive to Yosemite trailhead. Early night.",
          },
        ],
      },
      {
        id: "289b33bd-73df-49eb-a45d-15ac826f7ecc",
        week: 12,
        dates: "Jul 28 – Aug 3",
        totalMiles: "Yosemite + float",
        vert: "Yosemite vert",
        days: [
          {
            id: "e3e5c227-d1a4-4167-9cb2-79acbb685e89",
            day: "Mon",
            type: "rest",
            label: "Rest",
            detail: "Final rest before Yosemite. Eat well, hydrate.",
          },
          {
            id: "7a993614-a965-440b-ba09-7651b0ba240c",
            day: "Tue",
            type: "long",
            label: "🏔 Yosemite Day 1",
            detail:
              "Backpacking Day 1 (Aug 1). ~14 miles with pack. Hike Z1–Z2 effort. Fuel every 90 min. 8,000–10,000ft altitude — this is altitude training.",
          },
          {
            id: "83db1243-0e14-479b-9edc-2e716a915506",
            day: "Wed",
            type: "long",
            label: "🏔 Yosemite Day 2",
            detail:
              "Backpacking Day 2. ~14 miles. Same easy approach. Note how legs feel under load — this is the back-to-back stimulus.",
          },
          {
            id: "be9ce7c7-2a3f-44e7-a33e-494ed80e48c8",
            day: "Thu",
            type: "long",
            label: "🏔 Yosemite Day 3",
            detail:
              "Backpacking Day 3 (Aug 3). ~14 miles out. Pace yourself. 42 miles at altitude = legitimate training block.",
          },
          {
            id: "c5abec32-9add-4fd3-a5e8-37062aba4ef3",
            day: "Fri",
            type: "rest",
            label: "Rest / Drive Home",
            detail:
              "Travel day. Eat protein and carbs aggressively. Legs will be heavy — that's correct.",
          },
          {
            id: "7c6299cc-11e7-40cb-934e-f01b87386abd",
            day: "Sat",
            type: "rest",
            label: "Full Rest",
            detail:
              "Full rest. Do not run. 42 trail miles at altitude needs real recovery.",
          },
          {
            id: "08552361-3c8d-4981-a737-b5f4aef8de7c",
            day: "Sun",
            type: "easy",
            label: "Easy Shakeout",
            detail:
              "20–30 min very easy jog. Assess. If legs still heavy, walk instead.",
          },
        ],
      },
      {
        id: "7aff87e4-f587-4d46-a9e5-1e4cfab18b5c",
        week: 13,
        dates: "Aug 4–10",
        totalMiles: "28–32",
        vert: "2,500",
        days: [
          {
            id: "5a00fd5e-f31e-4d40-b570-20d0e2f5d4e8",
            day: "Mon",
            type: "easy",
            label: "Easy Run (skip group)",
            detail:
              "45 min easy Z2. Skip the hard group run this week — post-Yosemite recovery trumps group pressure. Flat, no vert.",
          },
          {
            id: "46326366-016f-43ff-adb7-e5dc25f3a8da",
            day: "Tue",
            type: "easy",
            label: "Easy Run",
            detail: "40 min easy Z2.",
          },
          {
            id: "24aab573-57f6-45ec-b13c-e40128bea11f",
            day: "Wed",
            type: "strength",
            label: "Strength C — Return",
            detail:
              "Build Strength II at ~70% load. Step-ups, hip thrust, lateral band walks. Reactivate without adding fatigue.",
          },
          {
            id: "e3ef76d6-717f-47f4-b07f-06525c643616",
            day: "Thu",
            type: "easy",
            label: "Easy Run",
            detail:
              "45 min Z2 with strides. No tempo this week — gauge how post-Yosemite legs feel.",
          },
          {
            id: "1b1515b5-954c-4167-92bf-fc7067eef963",
            day: "Fri",
            type: "rest",
            label: "Rest",
            detail: "Rest. Still recovering.",
          },
          {
            id: "34e33a37-50c0-4efa-918e-008f224baab9",
            day: "Sat",
            type: "long",
            label: "Long Group Run (easy effort)",
            detail:
              "90 min with group at easy effort. ~1,500ft vert. You may feel surprisingly good — Yosemite altitude adaptation kicking in.",
          },
          {
            id: "aee635b7-3457-4a99-a136-3be15c1eb1f8",
            day: "Sun",
            type: "rest",
            label: "Rest",
            detail: "Full rest.",
          },
        ],
      },
      {
        id: "945babde-cce6-4732-b3be-b06da0c94053",
        week: 14,
        dates: "Aug 11–17",
        totalMiles: "46–50",
        vert: "8,000",
        days: [
          {
            id: "157169d6-1490-424d-9e82-03a0cc7bbb47",
            day: "Mon",
            type: "workout",
            label: "Hard Group Run",
            detail:
              "8–10 miles at full group tempo pace. Back with a vengeance after Yosemite recovery.",
          },
          {
            id: "b90a69a9-3526-4210-85b1-17ac74bbcdc0",
            day: "Tue",
            type: "easy",
            label: "Easy Run",
            detail: "50 min easy Z2.",
          },
          {
            id: "2fa101f2-0470-4c45-8c34-909fca213e6b",
            day: "Wed",
            type: "strength",
            label: "Strength C — Final Full",
            detail:
              "Build Strength II full load return. Heavy step-ups with explosive drive. Heavy hip thrust. Bounding drills. Last heavy strength week of the entire cycle.",
          },
          {
            id: "935511d6-3e95-4452-93f3-a982364d674c",
            day: "Thu",
            type: "workout",
            label: "Tempo Run",
            detail:
              "15 min warmup, 30 min tempo on hilly terrain, 15 min cooldown.",
          },
          {
            id: "8474700a-693d-496a-b124-a6e4c95c6269",
            day: "Fri",
            type: "workout",
            label: "Quality Run",
            detail:
              "4×10 min uphill at race effort. 5 min walk recovery. Race simulation — this is Mammoth in 6 weeks.",
          },
          {
            id: "5770e63e-78dd-44bf-ad3a-d2a40d03d968",
            day: "Sat",
            type: "long",
            label: "PEAK Long Run #2",
            detail:
              "3:15 trail. ~5,000ft vert. Mammoth conditions if possible. Run this mentally like a race — nutrition, pacing, effort. Your final confidence run.",
          },
          {
            id: "1747ea1d-c37d-4f2d-8a47-23ba8a78c023",
            day: "Sun",
            type: "rest",
            label: "Rest",
            detail: "Full rest.",
          },
        ],
      },
      {
        id: "71d18f56-b810-4e18-9fd0-7dd08a887599",
        week: 15,
        dates: "Aug 18–24",
        totalMiles: "28–32",
        vert: "3,000",
        days: [
          {
            id: "48234a4e-c9a8-45bd-aed9-57485e2d335c",
            day: "Mon",
            type: "workout",
            label: "Hard Group Run (moderate)",
            detail:
              "8–10 miles with group at Z2–Z3. Recovery week — go with them but don't race it. Fitness is built.",
          },
          {
            id: "e01f312d-eeb4-462f-abbc-1eeb4f7f333c",
            day: "Tue",
            type: "easy",
            label: "Easy Run",
            detail: "40 min easy Z2.",
          },
          {
            id: "2bbf2a19-74df-4d77-b218-7b4e6bccd73f",
            day: "Wed",
            type: "strength",
            label: "Strength C — Final Deload",
            detail:
              "Build Strength II deload. 2×8, ~60% load. Last deload before taper strength. No soreness, no fatigue.",
          },
          {
            id: "f6027da7-39b0-468d-8d4b-6015c5057dc5",
            day: "Thu",
            type: "easy",
            label: "Easy Run",
            detail: "45 min Z2. No tempo this week.",
          },
          {
            id: "a4df47fb-168d-4644-8b21-b81920981ab1",
            day: "Fri",
            type: "rest",
            label: "Rest",
            detail: "Rest.",
          },
          {
            id: "01b18e79-8bf2-4eb9-87a1-eae3897760f0",
            day: "Sat",
            type: "long",
            label: "Long Group Run",
            detail:
              "80 min easy with group. ~1,200ft vert. Conversational pace.",
          },
          {
            id: "6eaf2643-b152-403a-a5b8-e5b58e6e77c2",
            day: "Sun",
            type: "rest",
            label: "Rest",
            detail: "Full rest.",
          },
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
    weeksData: [
      {
        id: "94b513f8-9bae-49fd-b5a1-03c3ef5cb059",
        week: 16,
        dates: "Aug 25–31",
        totalMiles: "32–36",
        vert: "4,000",
        days: [
          {
            id: "177e153f-934c-41a8-a0cb-1361e1aa9ee7",
            day: "Mon",
            type: "workout",
            label: "Hard Group Run",
            detail:
              "8–10 miles at full group pace. Taper starts but Mon group run is a keeper — the sharpness is good.",
          },
          {
            id: "72a7b66a-d43d-49e9-84d1-fb340adaacf6",
            day: "Tue",
            type: "easy",
            label: "Easy Run",
            detail: "40 min easy Z2.",
          },
          {
            id: "e8e9aeae-a212-4914-8466-3511c1260e54",
            day: "Wed",
            type: "easy",
            label: "Easy Run",
            detail: "35 min easy Z2.",
          },
          {
            id: "f4284c9f-2ce1-4b7e-aca3-22d3126a86ff",
            day: "Thu",
            type: "strength",
            label: "Strength — Taper",
            detail:
              "Taper Strength. 2×8 step-ups, hip thrust, lateral band walks, single-leg RDL, calf raises. Light load (~50–60%). 30 min max. Activation, not fatigue.",
          },
          {
            id: "50af6221-5e97-4fb7-a67d-0f5ed53a3ba9",
            day: "Fri",
            type: "workout",
            label: "Quality Run",
            detail:
              "5×3 min uphill Z4. Walk down. Short and sharp — maintain the edge.",
          },
          {
            id: "991ac628-bfd7-4932-a77f-3f7aab5cd9bf",
            day: "Sat",
            type: "long",
            label: "Long Group Run",
            detail:
              "2:00–2:15 with group. ~2,500ft vert. Include 30 min at race effort.",
          },
          {
            id: "34bb4fe6-0107-40a2-ae9b-97ebe68bc849",
            day: "Sun",
            type: "rest",
            label: "Rest",
            detail: "Full rest.",
          },
        ],
      },
      {
        id: "481790be-921f-49d4-a4de-344f8cb7aab3",
        week: 17,
        dates: "Sep 1–7",
        totalMiles: "26–30",
        vert: "3,000",
        days: [
          {
            id: "875e374c-ce80-429c-b68e-e746610ce393",
            day: "Mon",
            type: "workout",
            label: "Hard Group Run",
            detail:
              "8–10 miles at group pace. Keep running with them — the social effort is fine here.",
          },
          {
            id: "94808c46-93d3-40d2-936b-b74cdc7a8959",
            day: "Tue",
            type: "easy",
            label: "Easy Run",
            detail: "35 min easy Z2.",
          },
          {
            id: "b27d5267-c044-404f-84dd-e20203ae527c",
            day: "Wed",
            type: "easy",
            label: "Easy Run",
            detail: "30 min easy.",
          },
          {
            id: "a23ada5c-f1a6-4ea0-bd57-b8cf2a84b91a",
            day: "Thu",
            type: "strength",
            label: "Strength — Taper",
            detail:
              "Taper Strength. Same as Week 16. 2×8, light. You should feel activated and springy afterward, not sore.",
          },
          {
            id: "76df9b0f-eb8c-4ff5-8528-9aceb3328f54",
            day: "Fri",
            type: "workout",
            label: "Quality Run",
            detail: "4×3 min uphill Z4. Walk recovery. Shorter than Week 16.",
          },
          {
            id: "770b0674-d5c5-4f1f-99a3-f387226c50ff",
            day: "Sat",
            type: "long",
            label: "Long Group Run",
            detail: "90 min with group. ~1,800ft vert. Easy effort.",
          },
          {
            id: "3f9d12c7-cc0b-49d6-8169-9cd6e4605385",
            day: "Sun",
            type: "rest",
            label: "Rest",
            detail: "Full rest.",
          },
        ],
      },
      {
        id: "4c6bf4e3-02c0-4ea2-8244-ca3cde6978ef",
        week: 18,
        dates: "Sep 8–14",
        totalMiles: "20–24",
        vert: "1,800",
        days: [
          {
            id: "68313ea5-ad5e-487b-97ae-df028d77f1da",
            day: "Mon",
            type: "workout",
            label: "Hard Group Run",
            detail:
              "8–10 miles with group. Last full-effort Monday. Run it well.",
          },
          {
            id: "2f9c7a43-797a-4b75-84a5-e39c84278fbf",
            day: "Tue",
            type: "easy",
            label: "Easy Run",
            detail: "30 min easy Z2.",
          },
          {
            id: "64bfdab6-04cb-4bda-9b38-55c6cbc154e1",
            day: "Wed",
            type: "rest",
            label: "Rest",
            detail: "Rest.",
          },
          {
            id: "071498e4-b7ff-40d6-bf55-311587090b2d",
            day: "Thu",
            type: "strength",
            label: "Strength — Last Session",
            detail:
              "Final strength session of the entire cycle. 2×8 — step-ups, hip thrust, band walks. Very light. After today, no more lifting until after the race.",
          },
          {
            id: "197a4044-f888-4941-81ba-e64e6287e83a",
            day: "Fri",
            type: "workout",
            label: "Quality Run",
            detail: "3×3 min uphill Z4. Very short. Just keep the engine warm.",
          },
          {
            id: "2ece3579-dd59-48fd-95cc-d55487ea1104",
            day: "Sat",
            type: "long",
            label: "Long Group Run",
            detail: "75 min easy with group. ~1,200ft vert.",
          },
          {
            id: "094c3387-cc01-4cb5-8c60-187061455c40",
            day: "Sun",
            type: "rest",
            label: "Rest",
            detail: "Rest.",
          },
        ],
      },
      {
        id: "b3bc8e47-156f-426a-b06a-0f8e4746f83e",
        week: 19,
        dates: "Sep 15–21",
        totalMiles: "14–18",
        vert: "800",
        days: [
          {
            id: "7724392f-6339-426c-9689-3fc11c84fca1",
            day: "Mon",
            type: "workout",
            label: "Group Run (short)",
            detail:
              "Join the group but peel off at 6 miles. You don't need the full 8–10 this week. Stay connected, don't overdo it.",
          },
          {
            id: "d1f075c2-abcb-447b-be28-7b9b7daed1b4",
            day: "Tue",
            type: "easy",
            label: "Easy Run",
            detail: "25 min easy Z2 with 4 strides.",
          },
          {
            id: "46425810-d892-4e14-92bd-3fb551a02bca",
            day: "Wed",
            type: "rest",
            label: "Rest",
            detail: "Rest.",
          },
          {
            id: "13600f82-76d8-4d14-b821-13b5c7131368",
            day: "Thu",
            type: "easy",
            label: "Easy Run",
            detail: "25 min easy + 5×20s strides.",
          },
          {
            id: "0eee2be4-675f-4571-b6c1-509e0002bea6",
            day: "Fri",
            type: "easy",
            label: "Shakeout",
            detail:
              "20 min easy + 4 strides. Legs should feel snappy and powerful — that's the taper working.",
          },
          {
            id: "83568bc9-7b74-435f-b974-c02a3fe7d5cd",
            day: "Sat",
            type: "easy",
            label: "Easy Run (solo)",
            detail:
              "35 min easy. ~500ft vert. Skip the group long run — protect your legs.",
          },
          {
            id: "4569c8ce-7d45-44f9-b7dd-902ed00c2a87",
            day: "Sun",
            type: "rest",
            label: "Rest / Travel",
            detail: "Rest. Drive to Mammoth. Settle in. Big carb-rich dinner.",
          },
        ],
      },
      {
        id: "8a1ddbe7-0725-4d34-8643-6ca34fa8d8d9",
        week: 20,
        dates: "Sep 22–27",
        totalMiles: "8–10 + Race",
        vert: "400 + race",
        days: [
          {
            id: "85ecf6c8-e751-4db1-8b5d-e0b7c7a85fe6",
            day: "Mon",
            type: "rest",
            label: "Rest",
            detail:
              "Rest. Skip group run this week. Walk around Mammoth — your body is adjusting to 8,000ft.",
          },
          {
            id: "29d24f55-2a2b-4ba3-b5fa-3bd4162e1424",
            day: "Tue",
            type: "easy",
            label: "Easy Shakeout",
            detail:
              "20 min easy at altitude + 4 strides. HR will be ~10 bpm higher than sea level — that's normal.",
          },
          {
            id: "58482728-6e1e-4da2-adb1-cccfcd2bb8a1",
            day: "Wed",
            type: "easy",
            label: "Easy Run",
            detail: "15 min easy + 4 strides. Short and sharp.",
          },
          {
            id: "764e5750-bee9-4597-ae88-f57f1aa53ec8",
            day: "Thu",
            type: "rest",
            label: "Rest",
            detail:
              "Rest. Carb focus starts now — rice, pasta, potatoes. Hydrate aggressively. Altitude dehydrates faster.",
          },
          {
            id: "277a8098-78c1-4326-8e17-c5c2139cb7c4",
            day: "Fri",
            type: "easy",
            label: "Pre-Race Shakeout",
            detail:
              "10 min easy + 4 strides. Lay out race kit. Check gear. In bed by 9pm.",
          },
          {
            id: "bfcd9c35-919a-45fb-862b-44e92285e970",
            day: "Sat",
            type: "rest",
            label: "Rest",
            detail:
              "Rest. Big carb dinner, no new foods. Visualize the climbs — your glutes are ready.",
          },
          {
            id: "8dfab95e-fa7c-4fd9-91ed-dcf22c831595",
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
