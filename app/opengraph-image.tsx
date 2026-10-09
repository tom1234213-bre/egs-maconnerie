import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "EGS Maçonnerie, maçon à Aix-en-Provence : bâtir d'aplomb";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const dir = join(process.cwd(), "assets/og");
  const [light, normal, photo] = await Promise.all([
    readFile(join(dir, "Novecentosanswide-Light.otf")),
    readFile(join(dir, "Novecentosanswide-Normal.otf")),
    readFile(join(dir, "hero-og.jpg")),
  ]);
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", color: "#ede7dc" }}>
        <img src={src} width={1200} height={630} alt="" style={{ position: "absolute", inset: 0, objectFit: "cover" }} />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(0deg, rgba(23,21,18,0.92) 0%, rgba(23,21,18,0.45) 55%, rgba(23,21,18,0.15) 100%)",
          }}
        />
        <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 64, width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18, fontFamily: "Novecento", fontWeight: 400, fontSize: 26, letterSpacing: 4 }}>
            <svg width="44" height="35" viewBox="0 0 30 24">
              <g fill="#ede7dc">
                <rect x="0" y="0" width="14" height="6.4" rx="0.6" />
                <rect x="16" y="0" width="14" height="6.4" rx="0.6" />
                <rect x="0" y="8.8" width="6" height="6.4" rx="0.6" />
                <rect x="8" y="8.8" width="14" height="6.4" rx="0.6" />
                <rect x="24" y="8.8" width="6" height="6.4" rx="0.6" />
                <rect x="0" y="17.6" width="14" height="6.4" rx="0.6" />
                <rect x="16" y="17.6" width="14" height="6.4" rx="0.6" fill="#c98a5a" />
              </g>
            </svg>
            EGS MAÇONNERIE
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontFamily: "Novecento", fontWeight: 400, fontSize: 22, letterSpacing: 5, color: "#c98a5a" }}>
              MAÇON À AIX-EN-PROVENCE
            </div>
            <div style={{ fontFamily: "Novecento", fontWeight: 300, fontSize: 104, lineHeight: 0.95 }}>BÂTIR D&apos;APLOMB.</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Novecento", data: light, weight: 300, style: "normal" },
        { name: "Novecento", data: normal, weight: 400, style: "normal" },
      ],
    },
  );
}
