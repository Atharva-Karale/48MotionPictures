import { ImageResponse } from "next/og";

export const alt = "48 Motion Pictures — Where imagination comes to life.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ background: "#050505", color: "white", display: "flex", height: "100%", width: "100%", position: "relative", padding: "76px", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ position: "absolute", width: 550, height: 550, borderRadius: "9999px", background: "rgba(220, 38, 38, 0.22)", filter: "blur(80px)", right: -120, top: -150 }} />
        <div style={{ color: "#ef4444", display: "flex", fontSize: 24, fontWeight: 700, letterSpacing: 9, textTransform: "uppercase" }}>48 Motion Pictures</div>
        <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
          <div style={{ fontSize: 82, fontWeight: 700, letterSpacing: -3, lineHeight: 1.06 }}>Where imagination</div>
          <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 82, fontWeight: 700, letterSpacing: -3, lineHeight: 1.06 }}>comes to life.</div>
        </div>
        <div style={{ color: "rgba(255,255,255,0.7)", display: "flex", fontSize: 28 }}>3D Animation · Characters · Worlds · Stories</div>
      </div>
    ),
    size,
  );
}