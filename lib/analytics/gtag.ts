import { SITE_RESUME_PDF } from "@/components/portfolio/data";

export type GtagEventParams = Record<
  string,
  string | number | boolean | undefined
>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params?: GtagEventParams) {
  if (typeof window === "undefined") return;
  if (!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim()) return;
  if (typeof window.gtag !== "function") return;

  const cleaned = params
    ? Object.fromEntries(
        Object.entries(params).filter(([, value]) => value !== undefined),
      )
    : undefined;

  window.gtag("event", eventName, cleaned);
}

export function trackResumeDownload(location: string) {
  trackEvent("resume_download", {
    event_category: "engagement",
    file_name: "AbuBakr-Siddiqi-CV.pdf",
    link_url: SITE_RESUME_PDF,
    location,
  });
}

export function trackContactModalOpen(
  source: string,
  extra?: GtagEventParams,
) {
  trackEvent("contact_modal_open", {
    event_category: "engagement",
    source,
    ...extra,
  });
}

export function trackContactFormSubmit(
  source: string,
  status: "success" | "error",
  extra?: GtagEventParams,
) {
  trackEvent("contact_form_submit", {
    event_category: "conversion",
    source,
    status,
    ...extra,
  });
}

export function trackBrandLogoClick(brandName: string, linkUrl: string) {
  trackEvent("brand_logo_click", {
    event_category: "engagement",
    brand_name: brandName,
    link_url: linkUrl,
  });
}
