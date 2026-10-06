import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { hero, personal, systemTrace } from "@/data/portfolio";

// The link-preview card. Generated once at build time (no request-time APIs).
// It repeats the hero: byline, the statement and the request trace, in the
// light palette, so a shared link looks like the page it opens.

export const alt = `${personal.name}, ${personal.role}. ${hero.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#F3F5F7";
const RULE = "#D8DDE4";
const INK = "#111B2E";
const INK_MUTED = "#5B6578";
const SIGNAL = "#2B50E8";

export default async function OpengraphImage() {
  const root = process.cwd();
  const [regular, semibold, photo] = await Promise.all([
    readFile(join(root, "assets/fonts/SchibstedGrotesk-Regular.ttf")),
    readFile(join(root, "assets/fonts/SchibstedGrotesk-SemiBold.ttf")),
    readFile(join(root, "public", personal.photo.src)),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: PAPER,
          color: INK,
          fontFamily: "Schibsted Grotesk",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* The renderer ignores object-fit, so crop with an overflow box: the
              3:4 portrait scaled up and offset so the face fills the square. */}
          <div style={{ display: "flex", width: 96, height: 96, overflow: "hidden", borderRadius: 14 }}>
            <img src={photoSrc} width={180} height={240} alt="" style={{ marginLeft: -42, marginTop: -26, flexShrink: 0 }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 34, fontWeight: 600 }}>{personal.name}</span>
            <span style={{ fontSize: 26, color: INK_MUTED }}>{personal.role}</span>
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 84, fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.02, maxWidth: 900 }}>
          {hero.headline}
        </div>

        {/* One column per step so each label sits under its own dot; the line
            runs from the first dot's centre to the last's. */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: `${50 / systemTrace.length}%`,
                right: `${50 / systemTrace.length}%`,
                top: 6,
                height: 2,
                background: SIGNAL,
              }}
            />
            {systemTrace.map((span) => (
              <div key={span.step} style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, gap: 14 }}>
                <div style={{ width: 14, height: 14, borderRadius: 7, background: SIGNAL }} />
                <span style={{ fontSize: 20, color: INK_MUTED }}>{span.step}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", height: 1, background: RULE, marginTop: 18 }} />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Schibsted Grotesk", data: regular, weight: 400, style: "normal" },
        { name: "Schibsted Grotesk", data: semibold, weight: 600, style: "normal" },
      ],
    },
  );
}
