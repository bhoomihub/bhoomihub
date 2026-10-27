import { describe, it, expect } from "vitest";
import { PROPERTIES, CORRIDORS, PROPERTY_TYPES } from "../lib/properties";

describe("Property Catalog Data Integrity", () => {
  it("contains all 6 curated Coimbatore land developments", () => {
    expect(PROPERTIES.length).toBe(6);
  });

  it("ensures every property has DTCP/RERA credentials and valid pricing", () => {
    PROPERTIES.forEach(property => {
      expect(property.id).toBeTruthy();
      expect(property.slug).toBeTruthy();
      expect(property.name).toBeTruthy();
      expect(property.location).toContain("Coimbatore");
      expect(property.dtcpNumber).toBeTruthy();
      expect(property.startingPriceInLakhs).toBeGreaterThan(10);
      expect(property.roadWidths.length).toBeGreaterThan(0);
      expect(property.connectivity.length).toBeGreaterThanOrEqual(3);
      expect(property.heroImage.startsWith("https://")).toBe(true);
      expect(property.keyHighlights.length).toBeGreaterThanOrEqual(4);
    });
  });

  it("covers major Coimbatore growth corridors", () => {
    const propertyCorridors = PROPERTIES.map(p => p.corridor);
    expect(propertyCorridors).toContain("North Coimbatore IT Belt");
    expect(propertyCorridors).toContain("South-West Hill View Corridor");
    expect(propertyCorridors).toContain("South Coimbatore Industrial & Agricultural Highway");
    expect(propertyCorridors).toContain("East Coimbatore Defence & Aerospace Hub");
    expect(propertyCorridors).toContain("East Coimbatore Premium Arterial");
  });

  it("verifies corridors and property types export arrays", () => {
    expect(CORRIDORS.length).toBeGreaterThanOrEqual(5);
    expect(PROPERTY_TYPES.length).toBeGreaterThanOrEqual(4);
  });
});
