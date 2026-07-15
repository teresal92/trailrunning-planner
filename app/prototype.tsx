"use client";

import { useState } from "react";
import { DAY_COLORS } from "./constants";
import { PHASES, STRENGTH_PROGRAMS } from "./data";

const DEFAULT_USER = {
  firstName: "Teresa",
  lastName: "Lew",
  age: 33,
  gender: "female",
};

export default function TrainingPlan() {
  const [user, setUser] = useState(DEFAULT_USER);
  const [activePhase, setActivePhase] = useState(0);
  const [activeWeek, setActiveWeek] = useState(0);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [showStrength, setShowStrength] = useState(false);

  const phase = PHASES[activePhase];
  const week = phase.weeks_data[activeWeek];
  const strengthProgram = STRENGTH_PROGRAMS[phase.strengthKey];

  if (!user) return <div>No User Found</div>; // TODO: adjust this

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
            Teresa Lew · F33
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
                keep carbs high — you&apos;re fueling adaptation, not cutting.
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
