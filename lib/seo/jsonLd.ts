import {
  SITE_ALTERNATE_NAMES,
  SITE_DESCRIPTION,
  SITE_OG_IMAGE_SRC,
  SITE_SOCIAL,
  SITE_TITLE,
  SITE_URL,
} from "@/components/portfolio/data";

export function buildSiteJsonLd() {
  const base = SITE_URL.replace(/\/$/, "");
  const image = `${base}${SITE_OG_IMAGE_SRC}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: base,
        name: SITE_TITLE,
        description: SITE_DESCRIPTION,
        inLanguage: "en",
        publisher: { "@id": `${base}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${base}/#person`,
        name: "AbuBakar Siddiqi",
        alternateName: [...SITE_ALTERNATE_NAMES],
        url: base,
        image,
        jobTitle: "Full Stack Developer",
        description: SITE_DESCRIPTION,
        sameAs: [
          SITE_SOCIAL.linkedin,
          SITE_SOCIAL.github,
          SITE_SOCIAL.upwork,
        ],
        knowsAbout: [
          "Full Stack Development",
          "Next.js",
          "React",
          "Web Development",
          "API Development",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${base}/#service`,
        name: "AbuBakar Siddiqi, Full Stack Web Development",
        url: base,
        description: SITE_DESCRIPTION,
        provider: { "@id": `${base}/#person` },
        areaServed: "Worldwide",
      },
    ],
  };
}
