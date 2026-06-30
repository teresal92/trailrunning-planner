export default function PlanHeader() {
  return (
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
  );
}
