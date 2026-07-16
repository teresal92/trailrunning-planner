const ZONES = [
  ["Z1", "Easy / Recovery", "#8b9eb5", "< 130 bpm"],
  ["Z2", "Aerobic Base", "#7eb8a0", "130–148 bpm"],
  ["Z3", "Tempo", "#c4a35a", "148–162 bpm"],
  ["Z4", "Threshold", "#d4705a", "162–172 bpm"],
  ["Z5", "VO2 / Hard", "#e8a0a0", "172+ bpm"],
] as const;

export default function HeartRateZones() {
  return (
    <div>
      <div>Heart Rate Zones</div>
      <div>
        {ZONES.map(([z, name, color, range]) => (
          <div key={z}>
            <span style={{ color }}>{z}</span>
            <span>
              {name} · {range}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
