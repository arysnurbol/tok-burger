import { ImageResponse } from "next/og";

export const alt = "TOK burger — Almaty";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 90, background: "#f76103", color: "#fff" }}>
        <svg width="260" height="174" viewBox="0 0 120 80">
          <path d="M10 46C10 20 32 4 60 4s50 16 50 42z" fill="#fff" />
          <path d="M66 14 38 36h22l-8 22 30-26H60z" fill="#f76103" />
          <rect x="10" y="54" width="100" height="20" rx="10" fill="#fff" />
        </svg>
        <div style={{ fontSize: 150, fontWeight: 900, lineHeight: 1, marginTop: 30, letterSpacing: -4 }}>TOK burger</div>
        <div style={{ fontSize: 44, marginTop: 20, opacity: 0.92 }}>Almaty · 5 branches · WhatsApp order</div>
      </div>
    ),
    size,
  );
}
