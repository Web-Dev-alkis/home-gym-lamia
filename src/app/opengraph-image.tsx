import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#0a0a0a",
          padding: 96,
        }}
      >
        <span
          style={{
            fontSize: 28,
            letterSpacing: 6,
            color: "#c9a15a",
            fontFamily: "Georgia, serif",
            textTransform: "uppercase",
          }}
        >
          HomeGym &middot; Λαμία
        </span>
        <span
          style={{
            marginTop: 28,
            fontSize: 88,
            fontStyle: "italic",
            color: "#f4f1ea",
            fontFamily: "Georgia, serif",
            lineHeight: 1.05,
          }}
        >
          No More Comfort Zone
        </span>
      </div>
    ),
    { ...size }
  );
}
