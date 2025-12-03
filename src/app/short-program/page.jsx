// app/short-program/page.jsx
import React from "react";
import Script from "next/script";
import ShortProgramCard from "../components/ShortProgramCard";

// === SEO Metadata for Short Program Page ===
export const metadata = {
  title: "Short Programs | Ikigai Daycare & Preschool",
  description:
    "Explore Ikigai Daycare & Preschool’s short programs, designed to support holistic child development and early learning in Dhaka.",
  keywords: [
    "short programs Dhaka",
    "early childhood education",
    "child development",
    "play-based learning",
    "Ikigai preschool",
  ],
  openGraph: {
    title: "Short Programs | Ikigai Daycare & Preschool",
    description:
      "Ikigai offers short programs for infants and toddlers to enhance learning and play-based development.",
    url: "https://www.ikigaibd.com/short-program",
    siteName: "Ikigai Daycare & Preschool",
    images: [
      {
        url: "/images/step-to-shine.jpg", 
        width: 1200,
        height: 630,
        alt: "Short Programs at Ikigai Daycare & Preschool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Short Programs | Ikigai Daycare & Preschool",
    description:
      "Discover short programs for children at Ikigai Daycare & Preschool in Dhaka.",
    images: ["/images/step-to-shine.jpg"], 
  },
  alternates: {
    canonical: "https://www.ikigaibd.com/short-program",
  },
};

export default function Page() {
  return (
    <main className="bg-white">
      {/* JSON-LD Structured Data */}
      <Script
        id="short-program-schema"
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
              "Ikigai provides short programs for infants and toddlers designed to support early learning and holistic child development in Dhaka.",
          }),
        }}
      />

      {/* Short Program Card Section */}
      <section aria-labelledby="short-program-card-title">
        <ShortProgramCard />
      </section>
    </main>
  );
}
