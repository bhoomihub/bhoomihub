import { describe, it, expect } from "vitest";
import { PROPERTIES, CORRIDORS, PROPERTY_TYPES } from "../lib/properties";

describe("Property Catalog Data Integrity", () => {
  it("contains all curated Gobichettipalayam housing developments", () => {
    expect(PROPERTIES.length).toBe(4);
  });

  it("ensures every property has DTCP/RERA credentials and valid pricing", () => {
    PROPERTIES.forEach(property => {
      expect(property.id).toBeTruthy();
      expect(property.slug).toBeTruthy();
      expect(property.name).toBeTruthy();
      expect(property.location).toBeTruthy();
      expect(property.dtcpNumber).toBeTruthy();
      expect(property.startingPriceInLakhs).toBeGreaterThan(10);
      expect(property.roadWidths.length).toBeGreaterThan(0);
      expect(property.connectivity.length).toBeGreaterThanOrEqual(3);
      expect(property.heroImage.startsWith("https://") || property.heroImage.startsWith("/images/")).toBe(true);
      expect(property.keyHighlights.length).toBeGreaterThanOrEqual(4);
    });
  });

  it("covers major Gobichettipalayam growth corridors", () => {
    const propertyCorridors = PROPERTIES.map(p => p.corridor);
    expect(propertyCorridors).toContain("Gobichettipalayam Central Corridor");
    expect(propertyCorridors).toContain("Bangalapudur Educational Corridor");
    expect(propertyCorridors).toContain("Modachur Commercial Corridor");
    expect(propertyCorridors).toContain("Jyothi Nagar Residential Corridor");
  });

  it("verifies corridors and property types export arrays", () => {
    expect(CORRIDORS.length).toBeGreaterThanOrEqual(4);
    expect(PROPERTY_TYPES.length).toBeGreaterThanOrEqual(3);
  });
});
