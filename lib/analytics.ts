export interface AnalyticsEventParams {
  category?: string;
  label?: string;
  value?: number;
  [key: string]: unknown;
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

export function generateWhatsAppUrl(phone: string, message: string): string {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encoded}`;
}

export const BHOOMIHUB_PHONE = "+919876543210";
export const BHOOMIHUB_WA_PHONE = "919876543210";
export const BHOOMIHUB_EMAIL = "hello@bhoomihub.in";
export const BHOOMIHUB_ADDRESS = "123 Avinashi Road, Near Lakshmi Mills, Coimbatore, Tamil Nadu – 641037";
