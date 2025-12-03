// app/schooling/page.jsx
import React from "react";
import Script from "next/script";
import SchoolingCard from "../components/SchoolingCard";

// === SEO Metadata for Schooling Page ===
export const metadata = {
  title: "Schooling | Ikigai Daycare & Preschool",
  description:
    "Explore Ikigai Daycare & Preschool’s approach to early schooling, supporting holistic child development in Dhaka.",
  keywords: [
    "schooling Dhaka",
    "early childhood education",
    "child development programs",
    "Ikigai preschool",
  ],
  openGraph: {
    title: "Schooling | Ikigai Daycare & Preschool",
    description:
      "Ikigai offers early schooling programs and activities that nurture holistic growth in children.",
    url: "https://www.ikigaibd.com/schooling",
    siteName: "Ikigai Daycare & Preschool",
    images: [
      {
        url: "/images/preplay.jpg", // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "Schooling at Ikigai Daycare & Preschool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schooling | Ikigai Daycare & Preschool",
    description:
      "Discover early schooling programs and activities for children at Ikigai Daycare & Preschool.",
    images: ["/images/preplay.jpg"],
  },
  alternates: {
    canonical: "https://www.ikigaibd.com/schooling",
  },
};

export default function Page() {
  return (
    <main className="bg-white">
      {/* JSON-LD Structured Data */}
      <Script
        id="schooling-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Ikigai Daycare & Preschool",
            url: "https://www.ikigaibd.com",
            logo: "https://www.ikigaibd.com/logo192.png",
            description:
              "Ikigai provides early schooling programs and activities designed to support holistic child development in Dhaka.",
          }),
        }}
      />

      {/* Schooling Card Section */}
      <section aria-labelledby="schooling-card-title">
        <SchoolingCard />
      </section>
    </main>
  );
}
