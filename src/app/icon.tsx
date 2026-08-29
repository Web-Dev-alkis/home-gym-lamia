import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  const logo = readFileSync(join(process.cwd(), "public/logo-mark.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#131218",
          borderRadius: 12,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={46} height={23} alt="" />
      </div>
    ),
    { ...size }
  );
}
