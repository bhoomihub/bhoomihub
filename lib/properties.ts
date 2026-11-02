export interface Property {
  id: string;
  slug: string;
  name: string;
  headline: string;
  location: string;
  corridor: string;
  type: "Residential Plots" | "Premium Residential Plots" | "Investment Plots" | "Eco-Farm Land" | "Commercial Plots" | "Independent Villas & Homes" | "Commercial & Residential";
  sizeRangeSqFt: string;
  sizeRangeCents: string;
  pricePerSqFt: number;
  startingPriceInLakhs: number;
  startingPriceDisplay: string;
  dtcpNumber: string;
  reraNumber: string;
  roadWidths: string[];
  facingAvailable: ("East" | "North" | "West" | "South")[];
  waterTableDepth: string;
  soilType: string;
  tags: string[];
  keyHighlights: string[];
  connectivity: {
    destination: string;
    distance: string;
    time: string;
  }[];
  heroImage: string;
  galleryImages: string[];
  description: string;
  investmentMetrics: {
    projectedAnnualGrowth: string;
    nearbyDemandDrivers: string[];
  };
}

export const PROPERTIES: Property[] = [
  {
    id: "bh-01",
    slug: "sree-balaji-nagar-gobi",
    name: "SREE BALAJI NAGAR",
    headline: "3 BHK Contemporary Independent Luxury Villas in a Peaceful Gated Community",
    location: "Gobichettipalayam, Coimbatore / Erode Corridor",
    corridor: "Gobichettipalayam Central Corridor",
    type: "Independent Villas & Homes",
    sizeRangeSqFt: "1,500 – 2,200 Sq.Ft.",
    sizeRangeCents: "3.50 – 5.00 Cents",
    pricePerSqFt: 2100,
    startingPriceInLakhs: 40.0,
    startingPriceDisplay: "Around ₹40 Lakh",
    dtcpNumber: "DTCP / LPA Approved Layout No. 204/2024",
    reraNumber: "TN/10/Building/4921/2024",
    roadWidths: ["33 Feet Tar Road", "40 Feet Main Approach"],
    facingAvailable: ["East", "North"],
    waterTableDepth: "30–40 Feet (Abundant Sweet Ground Water)",
    soilType: "Rich Red Loam (High Bearing Capacity)",
    tags: ["3 BHK VILLAS", "PEACEFUL COMMUNITY", "DTCP APPROVED", "BANK LOAN READY"],
    keyHighlights: [
      "3 BHK Spacious Independent Villas with Modern Architecture & Balconies",
      "Lush Green Surroundings in a Secure, Quiet Residential Neighborhood",
      "Prime Location with Seamless Highway & Gobi Town Access",
      "High Appreciation & Strong Rental Yield Potential (~₹40 Lakh Price Point)",
      "100% Clear Legal Title with Individual Patta Transfer Assistance"
    ],
    connectivity: [
      { destination: "Gobichettipalayam Bus Stand & Town Center", distance: "3.5 km", time: "6 mins" },
      { destination: "Sathy - Bhavani State Highway", distance: "1.8 km", time: "3 mins" },
      { destination: "Leading CBSE & Matric Schools", distance: "2.0 km", time: "4 mins" },
      { destination: "Erode Railway Junction", distance: "34.0 km", time: "40 mins" }
    ],
    heroImage: "/images/properties/sree-balaji-nagar.jpg",
    galleryImages: [
      "/images/properties/sree-balaji-nagar.jpg",
      "/images/properties/gobi-properties-flyer.jpg"
    ],
    description: "Sree Balaji Nagar offers beautifully crafted 3 BHK independent luxury villas located in the serene surroundings of Gobichettipalayam. Engineered for families seeking peaceful modern living without compromising urban connectivity, each villa features generous floor plans, expansive balconies, private car parking, and lush greenery at an accessible investment of around ₹40 Lakh.",
    investmentMetrics: {
      projectedAnnualGrowth: "13.5% – 15.0% p.a.",
      nearbyDemandDrivers: [
        "High rental demand from doctors, professors, and business professionals",
        "Expansion of the Sathy - Bhavani commercial corridor",
        "Turnkey move-in ready independent villa scarcity in Gobi"
      ]
    }
  },
  {
    id: "bh-02",
    slug: "bangalapudur-road-gobi-arts-college",
    name: "GOBI ARTS ENCLAVE (BANGALAPUDUR ROAD)",
    headline: "5.5-Cent Independent Housing Plots and Homes Just 0.5 KM from Bus Stop",
    location: "Bangalapudur Road, Near Gobi Arts College, Gobichettipalayam",
    corridor: "Bangalapudur Educational Corridor",
    type: "Residential Plots",
    sizeRangeSqFt: "2,400 Sq.Ft.",
    sizeRangeCents: "5.50 Cents Independent Plots",
    pricePerSqFt: 1650,
    startingPriceInLakhs: 40.0,
    startingPriceDisplay: "₹40 Lakh Onwards",
    dtcpNumber: "DTCP / LPA Approved Layout No. 176/2024",
    reraNumber: "TN/10/Layout/5112/2024",
    roadWidths: ["30 Feet Blacktop Tar Roads", "40 Feet Avenue"],
    facingAvailable: ["East", "North", "South"],
    waterTableDepth: "25–35 Feet (Perennial Ground Water)",
    soilType: "Fertile Red Soil (Zero Waterlogging)",
    tags: ["5.5 CENTS", "NEAR GOBI ARTS", "0.5 KM BUS STOP", "DTCP APPROVED"],
    keyHighlights: [
      "Prime Location on Bangalapudur Road, Immediate to Gobi Arts & Science College",
      "Just 0.5 km from the Main Bus Stop for Effortless Commute",
      "Spacious 5.5-Cent Plots Ideal for Custom Independent Bungalows & Homes",
      "Delivered with Wide Tar Roads, Street Lighting & Individual Demarcation Stones",
      "Direct Developer Pricing — Zero Brokerage Guarantee (₹40 Lakh Onwards)"
    ],
    connectivity: [
      { destination: "Gobi Arts & Science College Campus", distance: "0.2 km", time: "2 mins walk" },
      { destination: "Bangalapudur Bus Stop", distance: "0.5 km", time: "5 mins walk" },
      { destination: "Gobichettipalayam Main Market & Post Office", distance: "4.8 km", time: "8 mins" },
      { destination: "Sathyamangalam Highway Junction", distance: "6.0 km", time: "10 mins" }
    ],
    heroImage: "/images/properties/gobi-bangalapudur.jpg",
    galleryImages: [
      "/images/properties/gobi-bangalapudur.jpg",
      "/images/properties/gobi-properties-flyer.jpg"
    ],
    description: "Build your family legacy near Coimbatore & Erode region's premier academic institution. Gobi Arts Enclave on Bangalapudur Road features generous 5.5-cent independent plots and turnkey homes located a mere 500 meters from the bus stop. Blessed by clean air and lush surroundings, this layout provides ready-to-build infrastructure with DTCP sanction.",
    investmentMetrics: {
      projectedAnnualGrowth: "14.0% – 16.5% p.a.",
      nearbyDemandDrivers: [
        "Sustained high residential demand from college faculty and staff",
        "Proximity to Bangalapudur public transport transit corridor",
        "Generous 5.5-cent plot size ensuring ample garden and parking space"
      ]
    }
  },
  {
    id: "bh-03",
    slug: "modachur-commercial-residential-houses",
    name: "MODACHUR COMMERCIAL & RESIDENTIAL",
    headline: "2 BHK Independent Houses with Ground Floor Commercial Shops",
    location: "Chinna Modachur, Gobichettipalayam",
    corridor: "Modachur Commercial Corridor",
    type: "Commercial & Residential",
    sizeRangeSqFt: "1,200 – 2,400 Sq.Ft.",
    sizeRangeCents: "2.75 – 5.50 Cents",
    pricePerSqFt: 2250,
    startingPriceInLakhs: 40.0,
    startingPriceDisplay: "₹40 Lakh – ₹80 Lakh",
    dtcpNumber: "DTCP / Mixed-Use Approved No. 298/2024",
    reraNumber: "TN/10/Building/5320/2024",
    roadWidths: ["40 Feet Commercial Main Road"],
    facingAvailable: ["East", "North", "West"],
    waterTableDepth: "30–45 Feet (Potable Sweet Water)",
    soilType: "Sturdy Gravel & Red Soil",
    tags: ["SHOPS + 2 BHK", "COMMERCIAL ROAD", "DUAL INCOME", "READY TO MOVE"],
    keyHighlights: [
      "Dual Income Asset: Ground-Floor Retail Shops + First-Floor 2 BHK Home",
      "High Visibility Frontage on Active Modachur Commercial Route",
      "Peaceful Residential Neighborhood with Exceptional Daily Convenience",
      "Flexible Investment Tier Ranging from ₹40 Lakh to ₹80 Lakh",
      "Complete Legal Audit with 100% Clear Title and Immediate Registry"
    ],
    connectivity: [
      { destination: "Modachur Main Road Market", distance: "0.2 km", time: "1 min" },
      { destination: "Gobichettipalayam Central Bus Stand", distance: "2.8 km", time: "5 mins" },
      { destination: "Government Hospital & Medical Centers", distance: "3.2 km", time: "6 mins" },
      { destination: "Sathy - Bhavani State Highway", distance: "4.0 km", time: "7 mins" }
    ],
    heroImage: "/images/properties/modachur-commercial-houses.jpg",
    galleryImages: [
      "/images/properties/modachur-commercial-houses.jpg",
      "/images/properties/gobi-properties-flyer.jpg"
    ],
    description: "A rare dual-income investment opportunity in Chinna Modachur. This project combines ground-level commercial shopfronts with stylish 2 BHK independent residences above. Ideal for business owners wanting to live above their enterprise or investors targeting recurring commercial shop rent plus residential appreciation.",
    investmentMetrics: {
      projectedAnnualGrowth: "15.0% – 17.5% p.a.",
      nearbyDemandDrivers: [
        "Dual income stream: commercial retail rental + residential yield",
        "Active urban sprawl connecting Chinna Modachur to Gobi downtown",
        "High appreciation for commercial frontage real estate"
      ]
    }
  },
  {
    id: "bh-04",
    slug: "jyothi-nagar-extension-compact-homes",
    name: "JYOTHI NAGAR EXTENSION",
    headline: "1 BHK Ready-to-Move Independent Homes in a Well-Planned Gated Community",
    location: "Jyothi Nagar Extension, Gobichettipalayam",
    corridor: "Jyothi Nagar Residential Corridor",
    type: "Independent Villas & Homes",
    sizeRangeSqFt: "600 – 1,000 Sq.Ft.",
    sizeRangeCents: "1.50 – 2.50 Cents",
    pricePerSqFt: 2300,
    startingPriceInLakhs: 28.0,
    startingPriceDisplay: "Around ₹28 Lakh",
    dtcpNumber: "DTCP / LPA Approved Layout No. 340/2024",
    reraNumber: "TN/10/Building/5480/2024",
    roadWidths: ["30 Feet Asphalt Tar Roads"],
    facingAvailable: ["East", "North"],
    waterTableDepth: "25–35 Feet (Sweet Ground Water Reserve)",
    soilType: "Hard Red Soil (Excellent Foundation Base)",
    tags: ["READY TO MOVE", "₹28 LAKH", "1 BHK COMPACT", "PLANNED GATED"],
    keyHighlights: [
      "1 BHK Individual Ready-to-Move Homes with Private Gated Entrances",
      "Budget-Friendly Sweet Spot at Around ₹28 Lakh with Up to 85% Bank Loan",
      "Well-Planned Gated Community with Asphalt Roads and Street Lighting",
      "Ideal for Nuclear Families, Senior Living, or High-Yield Rental Portfolios",
      "DTCP Approved with 35-Year Verified Encumbrance Free Title"
    ],
    connectivity: [
      { destination: "Gobichettipalayam Town Center", distance: "2.5 km", time: "5 mins" },
      { destination: "Daily Grocery & Departmental Supermarkets", distance: "0.8 km", time: "2 mins" },
      { destination: "Gobi Bus Terminal & Hospital", distance: "3.0 km", time: "6 mins" },
      { destination: "Sathyamangalam State Highway", distance: "4.5 km", time: "8 mins" }
    ],
    heroImage: "/images/properties/jyothi-nagar-extension.jpg",
    galleryImages: [
      "/images/properties/jyothi-nagar-extension.jpg",
      "/images/properties/gobi-properties-flyer.jpg"
    ],
    description: "Compact homes, big happiness. Jyothi Nagar Extension delivers independent 1 BHK ready-to-move homes within a peaceful, master-planned enclave in Gobichettipalayam. At an attractive price point of around ₹28 Lakh, it gives first-time homebuyers and smart investors an accessible path to independent home ownership without the compromises of congested apartments.",
    investmentMetrics: {
      projectedAnnualGrowth: "13.0% – 14.5% p.a.",
      nearbyDemandDrivers: [
        "Affordable entry barrier under ₹30 Lakh attracts high tenant demand",
        "Compact maintenance and high capital appreciation",
        "Ready-to-move status eliminates construction delays and risk"
      ]
    }
  }
];

export const CORRIDORS = [
  "All Corridors",
  "Gobichettipalayam Central Corridor",
  "Bangalapudur Educational Corridor",
  "Modachur Commercial Corridor",
  "Jyothi Nagar Residential Corridor"
];

export const PROPERTY_TYPES = [
  "All Types",
  "Independent Villas & Homes",
  "Residential Plots",
  "Commercial & Residential"
];
