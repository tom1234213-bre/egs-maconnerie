import type { MetadataRoute } from "next";
import { communes } from "@/lib/communes";
import { projects } from "@/lib/projects";
import { services } from "@/lib/services";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency,
    priority,
  });
  return [
    page("/", 1, "weekly"),
    page("/devis", 0.9),
    page("/savoir-faire", 0.9),
    ...services.map((s) => page(`/savoir-faire/${s.slug}`, 0.85)),
    page("/zones-intervention", 0.8),
    ...communes.map((c) => page(`/zones-intervention/${c.slug}`, 0.75)),
    page("/realisations", 0.8, "weekly"),
    ...projects.map((p) => page(`/realisations/${p.slug}`, 0.6)),
    page("/entreprise", 0.7),
    page("/questions", 0.6),
  ];
}
