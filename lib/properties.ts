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
    slug: "green-valley-saravanampatti",
    name: "GREEN VALLEY PHASE II",
    headline: "Premium Gated Community Plots Adjacent to Coimbatore IT Corridor",
    location: "Saravanampatti, Coimbatore",
    corridor: "North Coimbatore IT Belt",
    type: "Residential Plots",
    sizeRangeSqFt: "1,200 – 2,400 Sq.Ft.",
    sizeRangeCents: "2.75 – 5.50 Cents",
    pricePerSqFt: 2150,
    startingPriceInLakhs: 25.8,
    startingPriceDisplay: "₹25.8 Lakhs onwards",
    dtcpNumber: "DTCP / LPA (CR) No. 142/2024",
    reraNumber: "TN/11/Layout/3892/2024",
    roadWidths: ["30 Feet", "40 Feet Tar Roads"],
    facingAvailable: ["East", "North", "West"],
    waterTableDepth: "35–45 Feet (Abundant Siruvani / Ground Water)",
    soilType: "Red Loam Fertile Soil (Ideal for Foundation)",
    tags: ["DTCP APPROVED", "TN RERA REGISTERED", "IT CORRIDOR", "BANK LOAN 80%"],
    keyHighlights: [
      "100% Clear Title with 35-Year NIL Encumbrance Certificate",
      "Immediate Patta Transfer upon Registration",
      "Compound Wall with 24x7 Security & CCTV Surveillance",
      "Underground Drainage & Individual Water Tap Connection",
      "Avenue Trees & Children's Play Park"
    ],
    connectivity: [
      { destination: "CHIL SEZ IT Park (Cognizant, Bosch)", distance: "3.2 km", time: "7 mins" },
      { destination: "Sankara College of Arts & Science", distance: "1.8 km", time: "4 mins" },
      { destination: "Kumaraguru College of Tech (KCT)", distance: "4.5 km", time: "10 mins" },
      { destination: "KMCH Hospital (Avinashi Road)", distance: "8.5 km", time: "16 mins" },
      { destination: "Coimbatore International Airport", distance: "11.0 km", time: "20 mins" }
    ],
    heroImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Nestled in the high-growth residential belt of Saravanampatti, Green Valley Phase II represents an institutional-grade land asset. Situated minutes from major technology hubs including Bosch and Cognizant, this layout offers rapid residential development readiness alongside compelling medium-term capital appreciation.",
    investmentMetrics: {
      projectedAnnualGrowth: "14.5% – 16.0% p.a.",
      nearbyDemandDrivers: [
        "CHIL SEZ expansion bringing 8,000+ tech workforce",
        "Upcoming Coimbatore Ring Road connection",
        "Surging rental demand for independent residential villas"
      ]
    }
  },
  {
    id: "bh-02",
    slug: "bhoomi-imperial-gardens-kovaipudur",
    name: "BHOOMI IMPERIAL GARDENS",
    headline: "Hill-Breeze Luxury Residential Enclave with Western Ghats Panorama",
    location: "Kovaipudur, Coimbatore",
    corridor: "South-West Hill View Corridor",
    type: "Premium Residential Plots",
    sizeRangeSqFt: "1,500 – 3,200 Sq.Ft.",
    sizeRangeCents: "3.44 – 7.34 Cents",
    pricePerSqFt: 2280,
    startingPriceInLakhs: 34.2,
    startingPriceDisplay: "₹34.2 Lakhs onwards",
    dtcpNumber: "DTCP / LPA (CR) No. 88/2023",
    reraNumber: "TN/11/Layout/2915/2023",
    roadWidths: ["40 Feet", "50 Feet Blacktop Avenue"],
    facingAvailable: ["East", "North", "South"],
    waterTableDepth: "40 Feet (Perennial Mountain Spring Springs)",
    soilType: "Natural Gravel & Rich Loamy Topsoil",
    tags: ["HILL VIEW", "DTCP & RERA", "EXECUTIVE COMMUNITY", "NATIVE FLORA"],
    keyHighlights: [
      "Micro-climate average 2.5°C cooler than downtown Coimbatore",
      "Gated township with grand architectural entrance arch",
      "Solar street lighting & underground electricity cabling",
      "Walking & jogging track with landscaped sensory gardens",
      "Pre-approved for construction loans with SBI & HDFC"
    ],
    connectivity: [
      { destination: "VLB Janakiammal College of Arts", distance: "1.5 km", time: "3 mins" },
      { destination: "Krishna College of Engineering", distance: "3.8 km", time: "8 mins" },
      { destination: "Ukkadam Central Bus Terminal", distance: "9.2 km", time: "18 mins" },
      { destination: "Coimbatore Railway Junction", distance: "11.5 km", time: "22 mins" },
      { destination: "Palakkad Highway Connector", distance: "2.8 km", time: "6 mins" }
    ],
    heroImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Kovaipudur, affectionately known as Little Ooty, provides the pristine microclimate and panoramic vistas of the Western Ghats. Bhoomi Imperial Gardens offers high-calibre plotting tailored for retirement villas, doctors, and senior corporate executives desiring serene luxury within 20 minutes of the city core.",
    investmentMetrics: {
      projectedAnnualGrowth: "12.8% – 14.2% p.a.",
      nearbyDemandDrivers: [
        "Kovaipudur emerging as preferred luxury retirement enclave",
        "Expansion of institutional and healthcare campuses",
        "Strict low-density development covenants ensuring pristine environment"
      ]
    }
  },
  {
    id: "bh-03",
    slug: "horizon-grandeur-estates-pollachi-road",
    name: "HORIZON GRANDEUR ESTATES",
    headline: "High-Yield Investment Plots on the 4-Lane Pollachi National Highway",
    location: "Pollachi Main Road, Coimbatore",
    corridor: "South Coimbatore Industrial & Agricultural Highway",
    type: "Investment Plots",
    sizeRangeSqFt: "1,000 – 2,200 Sq.Ft.",
    sizeRangeCents: "2.30 – 5.05 Cents",
    pricePerSqFt: 1850,
    startingPriceInLakhs: 18.5,
    startingPriceDisplay: "₹18.5 Lakhs onwards",
    dtcpNumber: "DTCP / LPA (CR) No. 204/2024",
    reraNumber: "TN/11/Layout/4120/2024",
    roadWidths: ["30 Feet", "40 Feet", "60 Feet Main Arterial"],
    facingAvailable: ["East", "North", "West", "South"],
    waterTableDepth: "30–38 Feet (Near Kinathukadavu Aquifer)",
    soilType: "Deep Red Soil (Excellent Load Bearing Capacity)",
    tags: ["HIGH ROI", "HIGHWAY FRONTAGE", "DTCP APPROVED", "POCKET-FRIENDLY"],
    keyHighlights: [
      "Direct feeder access to the 4-lane NH-83 Pollachi-Coimbatore Highway",
      "Lowest entry barrier for young first-time investors (₹18.5 Lakhs)",
      "Boundary demarcation stones with individual plot fencing options",
      "24/7 security watchman booth with gated entry",
      "High expected capital appreciation driven by logistics and agro-commerce"
    ],
    connectivity: [
      { destination: "Kinathukadavu Railway Station", distance: "2.4 km", time: "5 mins" },
      { destination: "Malumichampatti Junction", distance: "7.0 km", time: "9 mins" },
      { destination: "Eachanari Temple & Industrial Estate", distance: "11.2 km", time: "15 mins" },
      { destination: "Pollachi Town Center", distance: "18.0 km", time: "22 mins" },
      { destination: "Sundarapuram Junction", distance: "13.5 km", time: "18 mins" }
    ],
    heroImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Horizon Grandeur Estates represents our highest-yield wealth-building layout. Positioned squarely along the thriving NH-83 expansion corridor connecting Coimbatore with Pollachi and Kerala, this project offers first-mover pricing before planned peripheral commercial real estate developments elevate entry costs.",
    investmentMetrics: {
      projectedAnnualGrowth: "16.5% – 19.0% p.a.",
      nearbyDemandDrivers: [
        "Rapid industrialization along Eachanari-Kinathukadavu stretch",
        "Upcoming multi-modal logistics hub connectivity",
        "High land bank acquisition by regional institutions"
      ]
    }
  },
  {
    id: "bh-04",
    slug: "aeroview-royale-sulur",
    name: "AEROVIEW ROYALE PLOTS",
    headline: "Strategic Plots in the Coimbatore Defence Industrial Corridor",
    location: "Sulur, Coimbatore",
    corridor: "East Coimbatore Defence & Aerospace Hub",
    type: "Investment Plots",
    sizeRangeSqFt: "1,200 – 2,500 Sq.Ft.",
    sizeRangeCents: "2.75 – 5.74 Cents",
    pricePerSqFt: 1820,
    startingPriceInLakhs: 21.8,
    startingPriceDisplay: "₹21.8 Lakhs onwards",
    dtcpNumber: "DTCP / LPA (CR) No. 319/2024",
    reraNumber: "TN/11/Layout/5082/2024",
    roadWidths: ["33 Feet", "40 Feet Tar Roads"],
    facingAvailable: ["East", "North"],
    waterTableDepth: "45 Feet",
    soilType: "Strong Mineral Red Soil",
    tags: ["DEFENCE CORRIDOR", "AIRPORT ACCESS", "DTCP & RERA", "FAST APPRECIATION"],
    keyHighlights: [
      "Immediate proximity to the Tamil Nadu Defence Industrial Corridor node",
      "Swift 15-minute drive to Coimbatore International Airport via bypass",
      "Well-planned stormwater drainage and avenue coconut groves",
      "Clear legal opinion vetted by leading High Court advocates",
      "Ideal for defence personnel, airport crew, and long-term investors"
    ],
    connectivity: [
      { destination: "Sulur Air Force Station", distance: "3.5 km", time: "6 mins" },
      { destination: "Trichy Road (L&T Bypass Junction)", distance: "4.8 km", time: "8 mins" },
      { destination: "Coimbatore International Airport", distance: "12.0 km", time: "16 mins" },
      { destination: "Singanallur Bus Terminal", distance: "14.5 km", time: "20 mins" }
    ],
    heroImage: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Sulur is witnessing transformative state infrastructure outlays as a primary node in the Tamil Nadu Defence Industrial Corridor. AeroView Royale provides investors with rare, compliant plotting with quick airport access and rising demand from aerospace manufacturing personnel.",
    investmentMetrics: {
      projectedAnnualGrowth: "15.0% – 17.5% p.a.",
      nearbyDemandDrivers: [
        "Aerospace and defence ancillary suppliers establishing plants",
        "Widening of Trichy Road arterial corridors",
        "Closeness to new greenfield airport expansion zones"
      ]
    }
  },
  {
    id: "bh-05",
    slug: "avinashi-crest-neelambur",
    name: "AVINASHI CREST RESIDENCES",
    headline: "Ultra-Premium Villa Plots on the Avinashi Road Super-Corridor",
    location: "Neelambur / Avinashi Road, Coimbatore",
    corridor: "East Coimbatore Premium Arterial",
    type: "Premium Residential Plots",
    sizeRangeSqFt: "1,800 – 4,500 Sq.Ft.",
    sizeRangeCents: "4.13 – 10.33 Cents",
    pricePerSqFt: 2550,
    startingPriceInLakhs: 45.9,
    startingPriceDisplay: "₹45.9 Lakhs onwards",
    dtcpNumber: "DTCP / LPA (CR) No. 76/2023",
    reraNumber: "TN/11/Layout/2180/2023",
    roadWidths: ["40 Feet", "60 Feet Wide Grand Boulevard"],
    facingAvailable: ["East", "North", "West"],
    waterTableDepth: "30 Feet (Perennial Noyyal Basin)",
    soilType: "Deep Alluvial Loam",
    tags: ["AVINASHI RD CORRIDOR", "ELITE NEIGHBORHOOD", "DTCP & RERA", "READY TO BUILD"],
    keyHighlights: [
      "Direct access to Coimbatore's most prestigious commercial arterial",
      "Underground EV charging readiness at community park",
      "Architectural perimeter boundary with biometric visitor log",
      "Walking distance to PSG Institute of Medical Sciences campus",
      "High-calibre NRI and doctor investor ownership base"
    ],
    connectivity: [
      { destination: "Le Méridien Coimbatore", distance: "2.1 km", time: "4 mins" },
      { destination: "KMCH Super Specialty Hospital", distance: "5.5 km", time: "9 mins" },
      { destination: "Coimbatore International Airport", distance: "6.8 km", time: "11 mins" },
      { destination: "TIDEL Park Coimbatore (Civil Aerodrome)", distance: "7.8 km", time: "13 mins" }
    ],
    heroImage: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Avinashi Road stands as Coimbatore's equivalent of Fifth Avenue — commanding top-tier valuations and prestige. Avinashi Crest offers an ultra-exclusive enclave for affluent buyers constructing custom estates, surrounded by the finest medical universities and luxury hotels.",
    investmentMetrics: {
      projectedAnnualGrowth: "13.5% – 15.0% p.a.",
      nearbyDemandDrivers: [
        "Unrivaled brand equity of Avinashi Road address",
        "New 10-km elevated expressway reducing downtown commute to 12 mins",
        "Concentration of premier healthcare and academic institutions"
      ]
    }
  },
  {
    id: "bh-06",
    slug: "siruvani-emerald-farms",
    name: "SIRUVANI EMERALD ECO-FARMS",
    headline: "Managed Eco-Farm Land Parcels with Siruvani Sweet Water Streams",
    location: "Siruvani Foothills, Coimbatore",
    corridor: "West Coimbatore Agro-Eco Valley",
    type: "Eco-Farm Land",
    sizeRangeSqFt: "10,890 – 21,780 Sq.Ft.",
    sizeRangeCents: "25 – 50 Cents (Quarter to Half Acre)",
    pricePerSqFt: 350,
    startingPriceInLakhs: 38.0,
    startingPriceDisplay: "₹38.0 Lakhs onwards",
    dtcpNumber: "Panchayat / Agro-Eco Approved Layout",
    reraNumber: "Eco-Registered Estate 2024",
    roadWidths: ["25 Feet", "30 Feet Gravel Country Roads"],
    facingAvailable: ["East", "North"],
    waterTableDepth: "15–25 Feet (Direct Siruvani Aquifer Reserve)",
    soilType: "Organic Black Humus & River Alluvium",
    tags: ["SWEET WATER", "FARMLAND", "WEEKEND RETREAT", "MANAGED AGRO"],
    keyHighlights: [
      "Pre-planted with 40+ Malabar Neem, Coconut, Teak, and Fruit Trees",
      "Dedicated drip irrigation and solar water pumping infrastructure",
      "Perimeter chain-link solar fencing to protect agro yields",
      "Professional agricultural management team available on-site",
      "Perfect for organic weekend farming and bespoke wellness cottages"
    ],
    connectivity: [
      { destination: "Siruvani Waterfalls Gate", distance: "6.2 km", time: "10 mins" },
      { destination: "Karunya University / Nagar", distance: "4.5 km", time: "7 mins" },
      { destination: "Thondamuthur Town Center", distance: "12.0 km", time: "16 mins" },
      { destination: "Gandhipuram Central Coimbatore", distance: "28.0 km", time: "45 mins" }
    ],
    heroImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Siruvani Emerald Eco-Farms caters to discerning professionals and HNIs longing for a sustainable country retreat. Blessed by world-renowned Siruvani sweet water and year-round mountain breezes, these quarter-acre to half-acre managed plots unite agricultural productivity with generational leisure.",
    investmentMetrics: {
      projectedAnnualGrowth: "11.0% – 13.5% p.a.",
      nearbyDemandDrivers: [
        "Boom in weekend eco-tourism and wellness homestays",
        "Rising demand for pesticide-free private organic farming",
        "Protected catchment zone assuring permanent natural beauty"
      ]
    }
  },
  {
    id: "bh-07",
    slug: "sree-balaji-nagar-gobi",
    name: "SREE BALAJI NAGAR",
    headline: "3 BHK Contemporary Independent Luxury Villas in a Peaceful Gated Community",
    location: "Gobichettipalayam, Coimbatore / Erode Corridor",
    corridor: "Gobichettipalayam & Sathy Corridor",
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
    id: "bh-08",
    slug: "bangalapudur-road-gobi-arts-college",
    name: "GOBI ARTS ENCLAVE (BANGALAPUDUR ROAD)",
    headline: "5.5-Cent Independent Housing Plots and Homes Just 0.5 KM from Bus Stop",
    location: "Bangalapudur Road, Near Gobi Arts College, Gobichettipalayam",
    corridor: "Gobichettipalayam & Sathy Corridor",
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
    id: "bh-09",
    slug: "modachur-commercial-residential-houses",
    name: "MODACHUR COMMERCIAL & RESIDENTIAL",
    headline: "2 BHK Independent Houses with Ground Floor Commercial Shops",
    location: "Chinna Modachur, Gobichettipalayam",
    corridor: "Gobichettipalayam & Sathy Corridor",
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
    id: "bh-10",
    slug: "jyothi-nagar-extension-compact-homes",
    name: "JYOTHI NAGAR EXTENSION",
    headline: "1 BHK Ready-to-Move Independent Homes in a Well-Planned Gated Community",
    location: "Jyothi Nagar Extension, Gobichettipalayam",
    corridor: "Gobichettipalayam & Sathy Corridor",
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
  "Gobichettipalayam & Sathy Corridor",
  "North Coimbatore IT Belt",
  "South-West Hill View Corridor",
  "South Coimbatore Industrial & Agricultural Highway",
  "East Coimbatore Defence & Aerospace Hub",
  "East Coimbatore Premium Arterial",
  "West Coimbatore Agro-Eco Valley"
];

export const PROPERTY_TYPES = [
  "All Types",
  "Residential Plots",
  "Premium Residential Plots",
  "Independent Villas & Homes",
  "Commercial & Residential",
  "Investment Plots",
  "Eco-Farm Land"
];
