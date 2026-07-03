import type { MetadataRoute } from "next";
import { SITE_URL } from "@/components/portfolio/data";

export default function robots(): MetadataRoute.Robots {
  const base = SITE_URL.replace(/\/$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/_next/", "/logo/"],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
