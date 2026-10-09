// Régénère lib/images.ts (dimensions des photos de public/images).
import fs from "node:fs";
import sharp from "sharp";

const dir = "public/images";
const sizes = {};
for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".jpg")).sort()) {
  const m = await sharp(`${dir}/${f}`).metadata();
  sizes[f.slice(0, -4)] = [m.width, m.height];
}
fs.writeFileSync(
  "lib/images.ts",
  `// Dimensions des photos (générées par scripts/images.mjs), pour next/image et la grille.
export const imageSizes: Record<string, [number, number]> = ${JSON.stringify(sizes, null, 1)};

export const img = (key: string) => ({ src: \`/images/\${key}.jpg\`, width: imageSizes[key]?.[0] ?? 2200, height: imageSizes[key]?.[1] ?? 1467 });
`,
);
console.log(Object.keys(sizes).length, "photos");
