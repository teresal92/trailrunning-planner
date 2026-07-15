"use client";

import { DAY_COLORS } from "../constants";
import type { Day } from "../types";

interface DayCardProps {
  day: Day;
  isSelected: boolean;
  onToggle: () => void;
}

export default function DayCard({ day, isSelected, onToggle }: DayCardProps) {
  const colors = DAY_COLORS[day.type];

  return (
    <div
      onClick={onToggle}
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
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              fontSize: 10,
              color: "#555",
              fontFamily: "monospace",
              width: 28,
            }}
          >
            {day.day}
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
          <div style={{ fontSize: 13, color: isSelected ? colors.text : "#ccc" }}>
            {day.label}
          </div>
        </div>
        <div style={{ fontSize: 11, color: "#444" }}>{isSelected ? "▲" : "▼"}</div>
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
          {day.detail}
        </div>
      )}
    </div>
  );
}
