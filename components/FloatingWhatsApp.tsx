"use client";

import React, { useState, useEffect, useRef } from "react";
import { BHOOMIHUB_WA_PHONE, generateWhatsAppUrl, trackEvent } from "../lib/analytics";

interface FloatingWhatsAppProps {
  currentPropertySlug?: string;
  currentPropertyName?: string;
}

export default function FloatingWhatsApp({ currentPropertyName }: FloatingWhatsAppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const popoverRef = useRef<HTMLDivElement>(null);

  // Listen to active section updates from UtmScrollTracker
  useEffect(() => {
    const handleSectionChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ sectionId: string }>;
      if (customEvent.detail?.sectionId) {
        setActiveSection(customEvent.detail.sectionId);
      }
    };
    window.addEventListener("bhoomihub:sectionchange", handleSectionChange);
    return () => window.removeEventListener("bhoomihub:sectionchange", handleSectionChange);
  }, []);

  // Close popover on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const sendWhatsAppAction = (text: string, actionLabel: string) => {
    trackEvent("whatsapp_concierge_action", {
      action: actionLabel,
      property: currentPropertyName || "general",
      section: activeSection
    });

    const url = generateWhatsAppUrl(BHOOMIHUB_WA_PHONE, text, activeSection);
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="wa-floating-root" ref={popoverRef}>
      {/* Interactive Concierge Popover Dialog */}
      {isOpen && (
        <div className="wa-popover-card" role="dialog" aria-label="Bhoomihub WhatsApp Concierge">
          <div className="wa-popover-header">
            <div className="wa-avatar-ring">
              <span style={{ fontSize: "1.2rem" }}>🏛️</span>
              <span className="wa-online-dot" />
            </div>
            <div>
              <div className="wa-popover-title">Bhoomihub Land Concierge</div>
              <div className="wa-popover-subtitle">Senior Property Advisors · Online Now</div>
            </div>
            <button
              type="button"
              className="wa-popover-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <div className="wa-popover-body">
            <p className="wa-welcome-bubble">
              Vanakkam! 🙏 How may our Coimbatore land advisory team assist you today?
            </p>

            <div className="wa-actions-list">
              <button
                type="button"
                className="wa-action-item"
                onClick={() =>
                  sendWhatsAppAction(
                    `Vanakkam Bhoomihub! I am exploring your Coimbatore DTCP & RERA approved developments and would like the latest price list and availability map.`,
                    "view_pricing_list"
                  )
                }
              >
                <span className="wa-action-icon">📋</span>
                <div className="wa-action-text">
                  <strong>Get Latest Price Sheet &amp; Layout Map</strong>
                  <small>DTCP &amp; RERA approved residential layouts</small>
                </div>
              </button>

              <button
                type="button"
                className="wa-action-item"
                onClick={() =>
                  sendWhatsAppAction(
                    `Vanakkam! I would like to book a complimentary VIP Site Visit (Free AC Cab pickup) to inspect your plots in Coimbatore.`,
                    "book_site_visit"
                  )
                }
              >
                <span className="wa-action-icon">🚗</span>
                <div className="wa-action-text">
                  <strong>Book Free VIP Site Visit (AC Cab)</strong>
                  <small>Doorstep pickup across Coimbatore with Senior Advisor</small>
                </div>
              </button>

              <button
                type="button"
                className="wa-action-item"
                onClick={() =>
                  sendWhatsAppAction(
                    `Hi Bhoomihub Legal Cell! I would like to inspect the 35-Year Nil Encumbrance Certificate and DTCP order copies.`,
                    "request_legal_dossier"
                  )
                }
              >
                <span className="wa-action-icon">⚖️</span>
                <div className="wa-action-text">
                  <strong>Request 35-Yr Legal Audit Dossier</strong>
                  <small>Certified Encumbrance Certificate &amp; title deeds</small>
                </div>
              </button>

              <button
                type="button"
                className="wa-action-item highlight"
                onClick={() =>
                  sendWhatsAppAction(
                    `Vanakkam! I am currently viewing section #${activeSection}${
                      currentPropertyName ? ` (${currentPropertyName})` : ""
                    } and have questions for a Land Advisor.`,
                    "direct_chat"
                  )
                }
              >
                <span className="wa-action-icon">💬</span>
                <div className="wa-action-text">
                  <strong>Chat Directly on WhatsApp</strong>
                  <small>Immediate dispatch to +91 98765 43210</small>
                </div>
              </button>
            </div>
          </div>

          <div className="wa-popover-footer">
            <span>🛡️ 100% Zero Brokerage · Official Bhoomihub Hotline</span>
          </div>
        </div>
      )}

      {/* Floating Circle Button with Smooth Slide Glide-Out on Hover */}
      <aside
        className="wa-circle-glide-trigger"
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
        aria-label="Open Bhoomihub WhatsApp Concierge"
        title="Chat with Coimbatore Land Concierge"
      >
        <div className="wa-circle-icon-badge">
          <svg
            className="wa-svg-icon"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <span className="wa-pulse-indicator" />
        </div>

        {/* Smooth horizontal slide-out on hover */}
        <div className="wa-glide-label">
          <span className="wa-glide-eyebrow">Land Concierge · Online</span>
          <span className="wa-glide-title">Chat on WhatsApp →</span>
        </div>
      </aside>
    </div>
  );
}
