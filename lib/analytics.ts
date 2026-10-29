export interface AnalyticsEventParams {
  category?: string;
  label?: string;
  value?: number;
  [key: string]: unknown;
}

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  fbclid?: string;
}

export function trackEvent(eventName: string, params: AnalyticsEventParams = {}): void {
  if (typeof window !== "undefined") {
    try {
      // 1. Google Analytics 4 (gtag.js)
      if (typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function") {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", eventName, params);
      }
      
      // 2. Meta Pixel (fbq)
      if (typeof (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq === "function") {
        (window as unknown as { fbq: (...args: unknown[]) => void }).fbq("trackCustom", eventName, params);
      }

      // 3. Local telemetry log for digital marketing inspection
      const storageKey = "bhoomihub_telemetry_events";
      const existing = JSON.parse(sessionStorage.getItem(storageKey) || "[]");
      existing.push({
        event: eventName,
        params,
        timestamp: new Date().toISOString()
      });
      sessionStorage.setItem(storageKey, JSON.stringify(existing.slice(-50)));
    } catch {
      // Fail safely without affecting user interface
    }
  }
}

export function getPersistedUtms(): UtmParams {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem("bhoomihub_utms");
    if (raw) return JSON.parse(raw);
  } catch {
    // fallback
  }
  return {};
}

export function setPersistedUtms(utms: UtmParams): void {
  if (typeof window === "undefined") return;
  try {
    const current = getPersistedUtms();
    const merged = { ...current, ...utms };
    sessionStorage.setItem("bhoomihub_utms", JSON.stringify(merged));
  } catch {
    // fallback
  }
}

export function generateWhatsAppUrl(phone: string, message: string, sectionContext?: string): string {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  
  // Append UTM tracking metadata if available
  let trackedMessage = message;
  const utms = getPersistedUtms();
  const trackingTags: string[] = [];

  if (sectionContext) {
    trackingTags.push(`Section: ${sectionContext.startsWith("#") ? sectionContext : "#" + sectionContext}`);
  }
  if (utms.utm_source) {
    trackingTags.push(`Source: ${utms.utm_source}`);
  }
  if (utms.utm_campaign) {
    trackingTags.push(`Campaign: ${utms.utm_campaign}`);
  }

  if (trackingTags.length > 0) {
    trackedMessage += `\n\n[📍 Ref: ${trackingTags.join(" | ")}]`;
  }

  const encoded = encodeURIComponent(trackedMessage);
  return `https://wa.me/${cleanPhone}?text=${encoded}`;
}

export const GA_MEASUREMENT_ID = "G-2FYQYFVTMQ";

export const BHOOMIHUB_PHONE = "+919876543210";
export const BHOOMIHUB_WA_PHONE = "919876543210";
export const BHOOMIHUB_EMAIL = "hello@bhoomihub.in";
export const BHOOMIHUB_ADDRESS = "123 Avinashi Road, Near Lakshmi Mills, Coimbatore, Tamil Nadu – 641037";
