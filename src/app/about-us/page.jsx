// app/about/page.jsx
import React from "react";
import About from "../components/About";
import Advisors from "../components/Advisors";
import AboutUs from "../components/AboutUs";
import VisionMissionSection from "../components/VisionMission";
import BoardDirectors from "../components/BoardDirector";

// === PAGE METADATA FOR SEO ===
export const metadata = {
  title: "About Us | Ikigai Daycare & Preschool",
  description:
    "Learn about Ikigai Daycare & Preschool, our philosophy, team, and programs for holistic child development in Dhaka.",
  keywords: [
    "daycare Dhaka",
    "preschool Dhaka",
    "child development center",
    "early childhood education",
    "about Ikigai",
  ],
  openGraph: {
    title: "About Ikigai Daycare & Preschool",
    description:
      "Discover the mission, vision, and team behind Ikigai Daycare & Preschool in Dhaka.",
    url: "https://www.ikigaibd.com/about",
    images: [
      {
        url: "/images/about-us-cover.jpg", // Add your OG image for this page
        width: 1200,
        height: 630,
        alt: "About Ikigai Daycare & Preschool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Ikigai Daycare & Preschool",
    description:
      "Meet the team and explore the vision of Ikigai Daycare & Preschool in Dhaka.",
    images: ["/images/about-og.jpg"],
  },
  alternates: {
    canonical: "https://www.ikigaibd.com/about",
  },
};

export default function Page() {
  return (
    <div>
      <AboutUs />
      <VisionMissionSection />
      <Advisors />
      <BoardDirectors />
    </div>
  );
}
