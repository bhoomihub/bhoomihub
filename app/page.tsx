"use client";

import React, { useState, useMemo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LandscapeCanvas from "../components/LandscapeCanvas";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

import HeroSection from "../components/home/HeroSection";
import SearchFilterSection from "../components/home/SearchFilterSection";
import PropertyCatalogSection from "../components/home/PropertyCatalogSection";
import EmiCalculatorSection from "../components/home/EmiCalculatorSection";
import LegalClearanceSection from "../components/home/LegalClearanceSection";
import ConnectivityMatrixSection from "../components/home/ConnectivityMatrixSection";
import WhyBhoomihubSection from "../components/home/WhyBhoomihubSection";
import ProcessTimelineSection from "../components/home/ProcessTimelineSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import ContactSection from "../components/home/ContactSection";

import SiteVisitModal from "../components/SiteVisitModal";
import BrochureModal from "../components/BrochureModal";
import PropertyDetailModal from "../components/PropertyDetailModal";

import { PROPERTIES, Property } from "../lib/properties";

export default function HomePage() {
  // Filter state
  const [selectedCorridor, setSelectedCorridor] = useState<string>("All Corridors");
  const [selectedType, setSelectedType] = useState<string>("All Types");
  const [maxBudgetLakhs, setMaxBudgetLakhs] = useState<number>(60);

  // Modal states
  const [siteVisitOpen, setSiteVisitOpen] = useState<boolean>(false);
  const [selectedPropertyForVisit, setSelectedPropertyForVisit] = useState<Property | null>(null);

  const [brochureOpen, setBrochureOpen] = useState<boolean>(false);
  const [selectedPropertyForBrochure, setSelectedPropertyForBrochure] = useState<Property>(PROPERTIES[0]);

  const [detailModalProperty, setDetailModalProperty] = useState<Property | null>(null);

  // Filtered properties
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter(property => {
      // Corridor match
      if (selectedCorridor !== "All Corridors" && property.corridor !== selectedCorridor) {
        return false;
      }
      // Type match
      if (selectedType !== "All Types" && property.type !== selectedType) {
        return false;
      }
      // Budget match
      if (maxBudgetLakhs < 60 && property.startingPriceInLakhs > maxBudgetLakhs) {
        return false;
      }
      return true;
    });
  }, [selectedCorridor, selectedType, maxBudgetLakhs]);

  const handleOpenSiteVisit = (property?: Property) => {
    setSelectedPropertyForVisit(property || null);
    setSiteVisitOpen(true);
  };

  const handleOpenBrochure = (property: Property) => {
    setSelectedPropertyForBrochure(property);
    setBrochureOpen(true);
  };

  return (
    <>
      <LandscapeCanvas />
      <Header onOpenSiteVisit={() => handleOpenSiteVisit()} />

      <main style={{ position: "relative", zIndex: 1 }}>
        <HeroSection onOpenSiteVisit={() => handleOpenSiteVisit()} />
        
        <SearchFilterSection
          selectedCorridor={selectedCorridor}
          onSelectCorridor={setSelectedCorridor}
          selectedType={selectedType}
          onSelectType={setSelectedType}
          maxBudgetLakhs={maxBudgetLakhs}
          onSelectMaxBudget={setMaxBudgetLakhs}
        />

        <PropertyCatalogSection
          properties={filteredProperties}
          onSelectProperty={property => setDetailModalProperty(property)}
          onOpenSiteVisit={handleOpenSiteVisit}
          onOpenBrochure={handleOpenBrochure}
        />

        <EmiCalculatorSection onOpenSiteVisit={() => handleOpenSiteVisit()} />

        <LegalClearanceSection />

        <ConnectivityMatrixSection />

        <WhyBhoomihubSection />

        <ProcessTimelineSection onOpenSiteVisit={() => handleOpenSiteVisit()} />

        <TestimonialsSection />

        <ContactSection />
      </main>

      <Footer />

      {/* Floating Concierge */}
      <FloatingWhatsApp
        currentPropertyName={detailModalProperty ? detailModalProperty.name : undefined}
      />

      {/* Interactive Modals */}
      <SiteVisitModal
        isOpen={siteVisitOpen}
        onClose={() => setSiteVisitOpen(false)}
        initialProperty={selectedPropertyForVisit}
      />

      <BrochureModal
        isOpen={brochureOpen}
        onClose={() => setBrochureOpen(false)}
        property={selectedPropertyForBrochure}
      />

      <PropertyDetailModal
        property={detailModalProperty}
        onClose={() => setDetailModalProperty(null)}
        onOpenSiteVisit={handleOpenSiteVisit}
        onOpenBrochure={handleOpenBrochure}
      />
    </>
  );
}
