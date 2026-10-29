import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { GA_MEASUREMENT_ID } from "../lib/analytics";

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
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/bhoomihub-emblem.png", type: "image/png" }
    ],
    apple: "/images/bhoomihub-emblem.png"
  },
  openGraph: {
    title: "BHOOMIHUB — Your Land. Your Legacy.",
    description:
      "Direct-to-consumer premium residential plots and land investment in Coimbatore. DTCP & TN RERA approved layouts with zero brokerage.",
    url: "https://bhommihub.netlify.app",
    siteName: "BHOOMIHUB",
    images: [
      {
        url: "/images/bhoomihub-logo.png",
        width: 1024,
        height: 682,
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
    images: ["/images/bhoomihub-logo.png"]
  },
  verification: {
    google: "VJBLykrQ6tyxBLuIFsIzLwjvPB-68mH3L4QGJItJs-g"
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
    image: "https://bhommihub.netlify.app/images/bhoomihub-logo.png",
    logo: "https://bhommihub.netlify.app/images/bhoomihub-logo.png",
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
        {/* Google Analytics 4 (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="google-analytics-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
                send_page_view: true
              });
            `
          }}
        />
        {children}
      </body>
    </html>
  );
}
