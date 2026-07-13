# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
pnpm dev        # start dev server
pnpm build      # production build (also runs tsc)
pnpm lint       # eslint
pnpm tsc --noEmit  # type-check only, no emit
```

No test suite exists yet.

## Architecture

This is a **Next.js 16 / React 19 / Tailwind CSS v4** app using the App Router. Tailwind v4 has breaking changes from v3 — configuration is done in CSS (`globals.css`) via `@theme`, not in `tailwind.config.js`.

### Data flow

All training data is static and lives in `app/data.ts` (exported as `PHASES: Phase[]` and `STRENGTH_PROGRAMS: Record<string, StrengthProgram>`). There is no backend or API layer — everything is hardcoded for now.

Types are in `app/types.ts`. Color mappings for workout day types live in `app/constants.ts` (`DAY_COLORS`).

### Component structure

`app/page.tsx` → `app/prototype.tsx` (the stateful shell, ~50 lines) → `app/components/`

`prototype.tsx` owns three pieces of state: `activePhase`, `activeWeek`, `showStrength`. Everything else is props-down. `DaySchedule` owns its own `selectedDay` state and resets it automatically when its `key` prop changes (set to `${phase.id}-${activeWeek}` in `ScheduleView`).

The two top-level view branches are `ScheduleView` and `StrengthView`, toggled by `ViewToggle`.

### Styling

Components currently use **inline styles** with a dark-theme color palette. The intention is to migrate to a reusable design token system — do not add new inline style values; use or extend the token system when it exists.

Key hardcoded values to be aware of until the token migration is complete:

- Background: `#0d0d0d`, surface: `#111`, border: `#1e1e1e`
- Text primary: `#e8e0d0`, muted: `#888`, subtle: `#555`
- Accent colors per phase/day type: see `app/constants.ts` and each `Phase.color`
- Font families: Georgia (body), monospace (data/labels)
