const ZONES = [
  {
    id: "d633f403-a7c2-4b06-9060-c8eba7b08add",
    zone: "Z1",
    name: "Easy / Recovery",
    color: "#8b9eb5",
    range: "< 130 bpm",
  },
  {
    id: "e5b2a525-f725-48fa-ba65-d7ef284d9da6",
    zone: "Z2",
    name: "Aerobic Base",
    color: "#7eb8a0",
    range: "130–148 bpm",
  },
  {
    id: "d7a0e8e7-2855-4148-80a1-e94ab202bf06",
    zone: "Z3",
    name: "Tempo",
    color: "#c4a35a",
    range: "148–162 bpm",
  },
  {
    id: "34d3959a-b94d-4c28-80ed-ec638774b2cb",
    zone: "Z4",
    name: "Threshold",
    color: "#d4705a",
    range: "162–172 bpm",
  },
  {
    id: "0b0b3521-9b2e-430d-9a90-a4263c78878b",
    zone: "Z5",
    name: "VO2 / Hard",
    color: "#e8a0a0",
    range: "172+ bpm",
  },
] as const;

export default function HeartRateZones() {
  return (
    <div className="px-6 py-8 border-2 border-border rounded-lg">
      <h2 className="text-text-secondary">Heart Rate Zones</h2>
      <div>
        {ZONES.map((z) => (
          <div key={z.id} className="grid grid-cols-3 text-start">
            <span style={{ color: z.color }} className="font-bold font-mono">
              {z.zone}
            </span>
            <span>{z.name}</span>
            <span className="text-text-secondary font-mono text-sm">
              {z.range}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
