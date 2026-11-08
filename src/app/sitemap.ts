import type { MetadataRoute } from "next";
import { SITE_URL, VERIFIED_AT } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${SITE_URL}/`, lastModified: VERIFIED_AT, changeFrequency: "weekly", priority: 1 }];
}
