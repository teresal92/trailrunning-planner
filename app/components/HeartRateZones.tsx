const ZONES = [
  ["Z1", "Easy / Recovery", "#8b9eb5", "< 130 bpm"],
  ["Z2", "Aerobic Base", "#7eb8a0", "130–148 bpm"],
  ["Z3", "Tempo", "#c4a35a", "148–162 bpm"],
  ["Z4", "Threshold", "#d4705a", "162–172 bpm"],
  ["Z5", "VO2 / Hard", "#e8a0a0", "172+ bpm"],
] as const;

export default function HeartRateZones() {
  return (
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
        {ZONES.map(([z, name, color, range]) => (
          <div key={z} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color, fontWeight: 700, width: 20 }}>{z}</span>
            <span style={{ color: "#666", fontSize: 11 }}>
              {name} · {range}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
