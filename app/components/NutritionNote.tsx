export default function NutritionNote() {
  return (
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
        Schedule strength 4–6 hrs after running, or on easy/rest days. Eat 20–30g
        protein within 30 min after. In Build II and taper, keep carbs high — you&apos;re
        fueling adaptation, not cutting.
      </div>
    </div>
  );
}
