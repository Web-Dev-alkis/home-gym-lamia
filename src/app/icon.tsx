import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          borderRadius: 12,
        }}
      >
        <span
          style={{
            fontSize: 36,
            fontStyle: "italic",
            color: "#c9a15a",
            fontFamily: "Georgia, serif",
          }}
        >
          H
        </span>
      </div>
    ),
    { ...size }
  );
}
