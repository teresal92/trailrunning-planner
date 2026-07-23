type Swatch = {
  label: string;
  cssVar: string;
  className: string;
};

const SURFACES: Swatch[] = [
  { label: "bg", cssVar: "--color-bg", className: "bg-bg" },
  { label: "surface", cssVar: "--color-surface", className: "bg-surface" },
  {
    label: "surface-alt",
    cssVar: "--color-surface-alt",
    className: "bg-surface-alt",
  },
  {
    label: "surface-sunken",
    cssVar: "--color-surface-sunken",
    className: "bg-surface-sunken",
  },
  { label: "border", cssVar: "--color-border", className: "bg-border" },
  {
    label: "border-subtle",
    cssVar: "--color-border-subtle",
    className: "bg-border-subtle",
  },
];

const TEXT: Swatch[] = [
  {
    label: "text-primary",
    cssVar: "--color-text-primary",
    className: "bg-text-primary",
  },
  {
    label: "text-secondary",
    cssVar: "--color-text-secondary",
    className: "bg-text-secondary",
  },
  {
    label: "text-tertiary",
    cssVar: "--color-text-tertiary",
    className: "bg-text-tertiary",
  },
];

const ACCENT: Swatch[] = [
  { label: "accent", cssVar: "--color-accent", className: "bg-accent" },
  {
    label: "accent-soft",
    cssVar: "--color-accent-soft",
    className: "bg-accent-soft",
  },
  {
    label: "accent-soft-text",
    cssVar: "--color-accent-soft-text",
    className: "bg-accent-soft-text",
  },
];

const INTENSITY: Swatch[] = [
  { label: "easy", cssVar: "--color-easy", className: "bg-easy" },
  { label: "tempo", cssVar: "--color-tempo", className: "bg-tempo" },
  {
    label: "threshold",
    cssVar: "--color-threshold",
    className: "bg-threshold",
  },
  { label: "strength", cssVar: "--color-strength", className: "bg-strength" },
  { label: "rest", cssVar: "--color-rest", className: "bg-rest" },
];

const ZONES: Swatch[] = [
  { label: "zone-1", cssVar: "--color-zone-1", className: "bg-zone-1" },
  { label: "zone-2", cssVar: "--color-zone-2", className: "bg-zone-2" },
  { label: "zone-3", cssVar: "--color-zone-3", className: "bg-zone-3" },
  { label: "zone-4", cssVar: "--color-zone-4", className: "bg-zone-4" },
  { label: "zone-5", cssVar: "--color-zone-5", className: "bg-zone-5" },
];

function SwatchGroup({
  title,
  swatches,
}: {
  title: string;
  swatches: Swatch[];
}) {
  return (
    <section className="mb-10">
      <h2 className="text-sm uppercase tracking-wide text-text-tertiary mb-3 font-mono">
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {swatches.map((s) => (
          <div
            key={s.label}
            className="border border-border rounded-md overflow-hidden"
          >
            <div className={`h-20 ${s.className}`} />
            <div className="p-2 font-mono text-xs text-text-primary">
              <div>{s.label}</div>
              <div className="text-text-tertiary">{s.cssVar}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ColorsPage() {
  return (
    <div className="min-h-screen bg-bg text-text-primary font-sans px-4 py-8 max-w-4xl mx-auto">
      <h1 className="text-2xl mb-8">Design tokens — color system</h1>
      <SwatchGroup title="Surfaces" swatches={SURFACES} />
      <SwatchGroup title="Text" swatches={TEXT} />
      <SwatchGroup title="Accent" swatches={ACCENT} />
      <SwatchGroup title="Training-intensity semantics" swatches={INTENSITY} />
      <SwatchGroup title="HR zones" swatches={ZONES} />
    </div>
  );
}
