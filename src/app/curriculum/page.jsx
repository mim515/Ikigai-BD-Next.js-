// app/curriculum/page.jsx
import React from "react";
import Script from "next/script";
import Curriculum from "../components/Curriculum";
import CurriculumModel from "../components/CurriculumModel";
import DevelopmentFocus from "../components/DevelopmentFocus";
import CommitmentTab from "../components/CommitmentTab";

// === SEO Metadata for this page ===
export const metadata = {
  title: "Curriculum | Ikigai Daycare & Preschool",
  description:
    "Explore the holistic curriculum at Ikigai Daycare & Preschool, focusing on play-based learning, social-emotional growth, and early childhood development.",
  keywords: [
    "daycare curriculum Dhaka",
    "preschool curriculum Dhaka",
    "early childhood education",
    "child development programs",
    "play-based learning",
  ],
  openGraph: {
    title: "Curriculum | Ikigai Daycare & Preschool",
    description:
      "Holistic, play-based curriculum designed for infants, toddlers, and young learners at Ikigai Daycare & Preschool.",
    url: "https://www.ikigaibd.com/curriculum",
    siteName: "Ikigai Daycare & Preschool",
    images: [
      {
        url: "/images/curriculum-og.jpg", // Replace with your OG image
        width: 1200,
        height: 630,
        alt: "Ikigai Curriculum Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curriculum | Ikigai Daycare & Preschool",
    description:
      "Discover Ikigai's comprehensive curriculum for child development in Dhaka.",
   
  },
  alternates: {
    canonical: "https://www.ikigaibd.com/curriculum",
  },
};

export default function Page() {
  return (
    <main className="bg-white">
      {/* JSON-LD Structured Data for SEO */}
      <Script
        id="curriculum-schema"
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
              "Ikigai offers a comprehensive, play-based curriculum focusing on holistic child development in Dhaka.",
          }),
        }}
      />

      {/* Curriculum Section */}
      <section aria-labelledby="curriculum-title">
        <Curriculum />
      </section>

      {/* Curriculum Model Section */}
      <section aria-labelledby="curriculum-model-title">
        <CurriculumModel />
      </section>

      {/* Development Focus Section */}
      <section aria-labelledby="development-focus-title">
        <DevelopmentFocus />
      </section>

      {/* Commitment Tab Section */}
      <section aria-labelledby="commitment-tab-title">
        <CommitmentTab />
      </section>
    </main>
  );
}
