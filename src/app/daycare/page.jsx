// app/programs/page.jsx
import React from "react";
import Script from "next/script";
import FocusArea from "../components/FocusArea";
import HabitLearning from "../components/HabitLearning";
import SocializingProgram from "../components/SocializingProgram";
import DaycareCommunication from "../components/DaycareCommunication";
import DualProgramCard from "../components/DualProgramCard";

// === SEO Metadata for Programs Page ===
export const metadata = {
  title: "Programs | Ikigai Daycare & Preschool",
  description:
    "Discover the holistic programs at Ikigai Daycare & Preschool, focusing on play-based learning, social skills, and early childhood development.",
  keywords: [
    "daycare programs Dhaka",
    "preschool programs Dhaka",
    "child development programs",
    "early childhood learning",
    "play-based learning",
  ],
  openGraph: {
    title: "Programs | Ikigai Daycare & Preschool",
    description:
      "Explore the structured programs at Ikigai Daycare & Preschool designed for infants, toddlers, and young children.",
    url: "https://www.ikigaibd.com/programs",
    siteName: "Ikigai Daycare & Preschool",
    images: [
      {
        url: "/images/daycare.jpg", 
        width: 1200,
        height: 630,
        alt: "Ikigai Programs Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Programs | Ikigai Daycare & Preschool",
    description:
      "Check out Ikigai's programs designed for holistic child development in Dhaka.",
    images: ["/images/daycare.jpg"],
  },
  alternates: {
    canonical: "https://www.ikigaibd.com/programs",
  },
};

export default function Page() {
  return (
    <main className="bg-white">
      {/* JSON-LD Structured Data */}
      <Script
        id="programs-schema"
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
              "Ikigai provides holistic daycare and preschool programs focusing on play-based learning and social-emotional development in Dhaka.",
          }),
        }}
      />

      {/* Focus Area Section */}
      <section aria-labelledby="focus-area-title">
        <FocusArea />
      </section>

      {/* Habit Learning Section */}
      <section aria-labelledby="habit-learning-title">
        <HabitLearning />
      </section>

      {/* Socializing Program Section */}
      <section aria-labelledby="socializing-program-title">
        <SocializingProgram />
      </section>

      {/* Daycare Communication Section */}
      <section aria-labelledby="daycare-communication-title">
        <DaycareCommunication />
      </section>

      {/* Dual Program Card Section */}
      <section aria-labelledby="dual-program-card-title">
        <DualProgramCard />
      </section>
    </main>
  );
}
