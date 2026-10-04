/** Design canvas (Figma reference): 2560×1440 CSS px. */
export const DESIGN_VIEWPORT_MAX_WIDTH_PX = 2560;
export const DESIGN_VIEWPORT_MAX_HEIGHT_PX = 1440;
export const DESIGN_VIEWPORT_CLASS = "design-viewport";

/** Layout “truth” width — prefer DesignViewportContainer for new sections. */
export const LAYOUT_MAX_WIDTH_CLASS = "max-w-[2560px]";

/** Shared // Skills / // Projects eyebrow + gap to content below */
export const SECTION_EYEBROW_CLASS =
  "mb-0 font-mono text-sm font-medium tracking-[0.12em] md:text-base";

export const SECTION_EYEBROW_TO_CONTENT_CLASS = "mt-4";

export const IMPACT_SECTION_RAIL_CLASS = `impact-section-rail relative z-20 mx-auto flex w-full flex-col items-center ${LAYOUT_MAX_WIDTH_CLASS} px-6 pb-0 pt-10 sm:px-8 md:px-10 lg:px-12`;

export const SITE_LOGO_SRC =
  "/logo/Generated_image-background-remover.png";

/** Resume PDF served from public/resume/ */
export const SITE_RESUME_PDF = "/resume/AbuBakr-Siddiqi-CV.pdf";

/** Browser tab / home screen icons (public/logo/) — separate from header wordmark PNG */
export const SITE_FAVICON_ICO = "/logo/favicon.ico";
export const SITE_FAVICON_SVG = "/logo/favicon.svg";
export const SITE_FAVICON_96 = "/logo/favicon-96x96.png";
export const SITE_APPLE_TOUCH_ICON = "/logo/apple-touch-icon.png";
export const SITE_WEB_MANIFEST = "/logo/site.webmanifest";
export const SITE_THEME_COLOR = "#000000";

/** Production URL — required for WhatsApp / social link previews (absolute og:image) */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  "https://www.abubakarsiddiqi.me";

/** Primary on-page SEO keyword */
export const SITE_SEO_PRIMARY_KEYWORD = "ABUBAKAR SIDDIQI";

/** Browser tab title + SEO + Open Graph */
export const SITE_TITLE = "AbuBakar Siddiqi | Full Stack Developer";

export const SITE_DESCRIPTION =
  "AbuBakar Siddiqi is a full stack web developer building fast, modern websites and web apps with Next.js, React, and scalable backends for clients worldwide.";

/** Name spelling variants for schema + discoverability */
export const SITE_ALTERNATE_NAMES = [
  "Abubakar Siddiqi",
  "ABUBAKAR SIDDIQI",
  "Abu Bakar Siddiqi",
  "Abubakar Siddique",
  "Abubakar Sadiq",
  "Muhammad Abubakar",
  "M Abubakar",
  "Abubakar Sattar",
  "Abubakar Khan",
  "Malik Abubakar",
  "Rana Abubakar",
  "Hafiz Abubakar",
  "Dr Abubakar Siddique",
  "Dr Abubakar",
  "Abubakar Bhai",
] as const;

/** Meta keywords — includes brand + supporting search terms */
export const SITE_SEO_KEYWORDS = [
  SITE_SEO_PRIMARY_KEYWORD,
  "AbuBakar Siddiqi",
  "AbuBakar Siddiqi full stack developer",
  "AbuBakar Siddiqi portfolio",
  "AbuBakar Siddiqi web developer",
  "abubakar siddiqi",
  "abubakar name meaning in quran",
  "hazrat abubakar",
  "abubakar sadiq",
  "abubakar bhai",
  "muhammad abubakar",
  "m abubakar",
  "dr abubakar siddique",
  "dr abubakar",
  "rana abubakar",
  "malik abubakar",
  "abubakar 2",
  "abubakar sattar",
  "abubakar nurmagomedov",
  "abubakar khan",
  "hafiz abubakar",
  "abubakar name style",
  "full stack developer",
  "Next.js developer",
  "React developer",
] as const;

/** WhatsApp, LinkedIn, Facebook link preview (1200×630) */
export const SITE_OG_IMAGE_SRC = "/whatsapp/herosection-portfolio-whatsapp.png";
export const SITE_OG_IMAGE_WIDTH = 1201;
export const SITE_OG_IMAGE_HEIGHT = 630;
export const SITE_OG_IMAGE_ALT =
  "AbuBakar Siddiqi, ABUBAKAR SIDDIQI Full Stack Developer portfolio";

/** Header wordmark (logo + text) */
export const SITE_BRAND_PRIMARY = "AbuBakar";
export const SITE_BRAND_SECONDARY = "Siddiqi";

/** Public social / freelance profiles (hero, JSON-LD, etc.) */
export const SITE_SOCIAL = {
  linkedin:
    process.env.NEXT_PUBLIC_HERO_LINKEDIN_URL?.trim() ||
    "https://www.linkedin.com/in/abubakr-siddiqi",
  upwork:
    process.env.NEXT_PUBLIC_HERO_UPWORK_URL?.trim() ||
    "https://www.upwork.com/freelancers/~01317783ba53666fa1",
  github:
    process.env.NEXT_PUBLIC_HERO_GITHUB_URL?.trim() ||
    "https://github.com/abubakr-siddiqi",
} as const;

export const SITE_NAV = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
] as const;

export const heroWordsPrimary = ["Career", "&", "work,"];
export const heroWordsAccent = ["in", "order."];

/** Blob-clipped hero portrait — put your PNG in /public and set e.g. "/hero-portrait.png". */
export const HERO_PORTRAIT_SRC = "/herosection-image.webp";
