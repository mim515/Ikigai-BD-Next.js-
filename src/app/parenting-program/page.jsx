// app/parenting/page.jsx
import React from "react";
import Script from "next/script";
import ParentingCard from "../components/ParentingCard";
import ParentingActivities from "../components/ParentingActivities";

// === SEO Metadata for Parenting Page ===
export const metadata = {
  title: "Parenting | Ikigai Daycare & Preschool",
  description:
    "Explore parenting tips and activities provided by Ikigai Daycare & Preschool to support child development at home and school.",
  keywords: [
    "parenting tips Dhaka",
    "child development activities",
    "early childhood guidance",
    "Ikigai parenting support",
  ],
  openGraph: {
    title: "Parenting | Ikigai Daycare & Preschool",
    description:
      "Discover parenting tips and activities curated by Ikigai to nurture young children’s development.",
    url: "https://www.ikigaibd.com/parenting",
    siteName: "Ikigai Daycare & Preschool",
    images: [
      {
        url: "/images/parenting-program03.jpg", // Replace with your OG image
        width: 1200,
        height: 630,
        alt: "Parenting Activities at Ikigai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parenting | Ikigai Daycare & Preschool",
    description:
      "Helpful parenting tips and child development activities from Ikigai Daycare & Preschool.",
    images: ["/images/parenting-program03.jpg"], 
  },
  alternates: {
    canonical: "https://www.ikigaibd.com/parenting",
  },
};

export default function Page() {
  return (
    <main className="bg-white">
      {/* JSON-LD Structured Data */}
      <Script
        id="parenting-schema"
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
              "Ikigai provides parenting tips and child development activities to support holistic growth of children in Dhaka.",
          }),
        }}
      />

      {/* Parenting Card Section */}
      <section aria-labelledby="parenting-card-title">
        <ParentingCard />
      </section>

      {/* Parenting Activities Section */}
      <section aria-labelledby="parenting-activities-title">
        <ParentingActivities />
      </section>
    </main>
  );
}
