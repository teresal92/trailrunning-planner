import type { WeekData } from "../types";

interface WeekStatsHeaderProps {
  week: WeekData;
}

export default function WeekStatsHeader({ week }: WeekStatsHeaderProps) {
  return (
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
        <div style={{ fontSize: 15, fontWeight: 600 }}>Week {week.week}</div>
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
          <span style={{ color: "#c4a35a" }}>{week.total_miles}</span> mi
        </div>
        <div>
          <span style={{ color: "#d4705a" }}>{week.vert}</span> ft vert
        </div>
      </div>
    </div>
  );
}
