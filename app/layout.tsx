import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bhommihub.netlify.app"),
  title: "BHOOMIHUB — Your Land. Your Legacy. | Premium Real Estate Plots in Coimbatore",
  description:
    "Direct-to-consumer premium residential plots and land investment in Coimbatore. DTCP & TN RERA approved layouts across Saravanampatti, Kovaipudur, Pollachi Road & Avinashi Road with zero brokerage.",
  keywords: [
    "Coimbatore residential plots",
    "DTCP approved plots Coimbatore",
    "TN RERA plots Coimbatore",
    "Saravanampatti land for sale",
    "Kovaipudur villa plots",
    "Pollachi Road investment plots",
    "Bhoomihub Coimbatore",
    "Zero brokerage land Coimbatore"
  ],
  authors: [{ name: "BHOOMIHUB Real Estate" }],
  icons: {
    icon: "/images/bhoomihub-logo.jpg",
    apple: "/images/bhoomihub-logo.jpg"
  },
  openGraph: {
    title: "BHOOMIHUB — Your Land. Your Legacy.",
    description:
      "Direct-to-consumer premium residential plots and land investment in Coimbatore. DTCP & TN RERA approved layouts with zero brokerage.",
    url: "https://bhommihub.netlify.app",
    siteName: "BHOOMIHUB",
    images: [
      {
        url: "/images/bhoomihub-logo.jpg",
        width: 1200,
        height: 800,
        alt: "BHOOMIHUB — Your Land. Your Legacy."
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "BHOOMIHUB — Your Land. Your Legacy.",
    description: "Premium DTCP & TN RERA approved plots in Coimbatore. 100% legal scrutiny with zero brokerage.",
    images: ["/images/bhoomihub-logo.jpg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "BHOOMIHUB",
    image: "https://bhommihub.netlify.app/images/bhoomihub-logo.jpg",
    logo: "https://bhommihub.netlify.app/images/bhoomihub-logo.jpg",
    description: "Direct-to-consumer premium land plotting and real estate investment platform in Coimbatore.",
    url: "https://bhommihub.netlify.app",
    telephone: "+919876543210",
    email: "hello@bhoomihub.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Avinashi Road, Near Lakshmi Mills",
      addressLocality: "Coimbatore",
      addressRegion: "Tamil Nadu",
      postalCode: "641037",
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "11.0168",
      longitude: "76.9558"
    },
    areaServed: [
      "Coimbatore",
      "Saravanampatti",
      "Kovaipudur",
      "Pollachi",
      "Tirupur",
      "Erode"
    ],
    priceRange: "₹₹₹"
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
