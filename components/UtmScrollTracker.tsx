"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { setPersistedUtms, getPersistedUtms, trackEvent, UtmParams } from "../lib/analytics";

interface SectionMeta {
  id: string;
  name: string;
}

export default function UtmScrollTracker() {
  const searchParams = useSearchParams();
  const activeSectionRef = useRef<string>("");
  const initialParamsRef = useRef<UtmParams>({});

  // 1. Capture and persist incoming marketing UTM tags on landing
  useEffect(() => {
    if (searchParams) {
      const captured: UtmParams = {};
      const source = searchParams.get("utm_source");
      const medium = searchParams.get("utm_medium");
      const campaign = searchParams.get("utm_campaign");
      const content = searchParams.get("utm_content");
      const term = searchParams.get("utm_term");
      const gclid = searchParams.get("gclid");
      const fbclid = searchParams.get("fbclid");

      if (source) captured.utm_source = source;
      if (medium) captured.utm_medium = medium;
      if (campaign) captured.utm_campaign = campaign;
      if (content) captured.utm_content = content;
      if (term) captured.utm_term = term;
      if (gclid) captured.gclid = gclid;
      if (fbclid) captured.fbclid = fbclid;

      if (Object.keys(captured).length > 0) {
        setPersistedUtms(captured);
        initialParamsRef.current = captured;
      }
    }
  }, [searchParams]);

  // 2. Scroll Spy: dynamically updates browser URL hash (#properties, #calculator, etc.) and UTM content
  useEffect(() => {
    const trackedSections: SectionMeta[] = [
      { id: "home", name: "hero" },
      { id: "properties", name: "properties_catalog" },
      { id: "calculator", name: "investment_calculator" },
      { id: "legal", name: "legal_clearance" },
      { id: "connectivity", name: "connectivity_matrix" },
      { id: "why-us", name: "why_bhoomihub" },
      { id: "contact", name: "contact_advisory" }
    ];

    const elements: HTMLElement[] = [];
    trackedSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) elements.push(el);
    });

    if (elements.length === 0) return;

    let debounceTimer: NodeJS.Timeout | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting && e.intersectionRatio >= 0.25);
        if (visibleEntries.length === 0) return;

        // Sort by greatest visibility on screen
        visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const activeEntry = visibleEntries[0];
        const sectionId = activeEntry.target.id;

        if (sectionId === activeSectionRef.current) return;
        activeSectionRef.current = sectionId;

        // Broadcast active section change to Header and FloatingWhatsApp
        window.dispatchEvent(
          new CustomEvent("bhoomihub:sectionchange", {
            detail: { sectionId }
          })
        );

        if (debounceTimer) clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          try {
            const url = new URL(window.location.href);

            // Update the URL hash to whatever section the user is currently viewing
            url.hash = sectionId;

            // Maintain UTM tags
            const currentUtms = getPersistedUtms();
            const source = currentUtms.utm_source || initialParamsRef.current.utm_source || "direct";
            const medium = currentUtms.utm_medium || initialParamsRef.current.utm_medium || "scroll";
            const campaign = currentUtms.utm_campaign || initialParamsRef.current.utm_campaign || "coimbatore_land_2026";

            url.searchParams.set("utm_source", source);
            url.searchParams.set("utm_medium", medium);
            url.searchParams.set("utm_campaign", campaign);
            url.searchParams.set("utm_content", sectionId);

            // Silently update URL without jarring jumps
            window.history.replaceState(null, "", url.toString());

            // Track GA4 scroll event
            trackEvent("scroll_section_view", {
              section_id: sectionId,
              utm_source: source,
              utm_campaign: campaign,
              utm_content: sectionId
            });
          } catch {
            // Silently ignore URL manipulation errors in restricted environments
          }
        }, 120);
      },
      {
        threshold: [0.25, 0.5, 0.75],
        rootMargin: "-12% 0px -15% 0px"
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      if (debounceTimer) clearTimeout(debounceTimer);
    };
  }, []);

  return null;
}
