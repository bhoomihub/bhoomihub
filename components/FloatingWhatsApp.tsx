"use client";

import React, { useState } from "react";
import { BHOOMIHUB_WA_PHONE, generateWhatsAppUrl, trackEvent } from "../lib/analytics";

interface FloatingWhatsAppProps {
  currentPropertySlug?: string;
  currentPropertyName?: string;
}

export default function FloatingWhatsApp({
  currentPropertyName
}: FloatingWhatsAppProps) {
  const [hovered, setHovered] = useState(false);

  const defaultMsg = currentPropertyName
    ? `Hi Bhoomihub, I am reviewing ${currentPropertyName} in Coimbatore. Can you please share the site video, latest availability layout, and exact price sheet on WhatsApp?`
    : `Hi Bhoomihub, I am interested in exploring DTCP & RERA approved residential plots in Coimbatore. Please share details of your top projects.`;

  const waUrl = generateWhatsAppUrl(BHOOMIHUB_WA_PHONE, defaultMsg);

  const handleClick = () => {
    trackEvent("floating_whatsapp_click", {
      property: currentPropertyName || "general",
      timestamp: new Date().toISOString()
    });
  };

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="floating-whatsapp-widget"
      aria-label="Direct WhatsApp Concierge"
    >
      <div className="whatsapp-pulse" />
      <span style={{ fontSize: "1.1rem" }}>💬</span>
      <span>
        {hovered ? "Chat Live with Coimbatore Land Advisor ↗" : "WhatsApp Concierge"}
      </span>
    </a>
  );
}
