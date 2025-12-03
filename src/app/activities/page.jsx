// app/activities/page.jsx
import React from "react";
import HomeActivity from "../components/home-activity";

// === PAGE METADATA FOR SEO ===
export const metadata = {
  title: "Activities | Ikigai Daycare & Preschool",
  description:
    "Explore the fun and educational activities at Ikigai Daycare & Preschool in Dhaka, designed to promote holistic child development.",
  keywords: [
    "activities daycare Dhaka",
    "preschool activities Dhaka",
    "child development activities",
    "play-based learning",
    "kids learning Dhaka",
  ],
  openGraph: {
    title: "Activities at Ikigai Daycare & Preschool",
    description:
      "Discover the variety of activities at Ikigai Daycare & Preschool that engage and nurture young minds.",
    url: "https://www.ikigaibd.com/activities",
    images: [
      {
        url: "/images/img_7334.jpg", 
        width: 1200,
        height: 630,
        alt: "Activities at Ikigai Daycare & Preschool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Activities | Ikigai Daycare & Preschool",
    description:
      "See the engaging and educational activities for children at Ikigai Daycare & Preschool in Dhaka.",
    images: ["/images/activities-og.jpg"],
  },
  alternates: {
    canonical: "https://www.ikigaibd.com/activities",
  },
};

export default function Page() {
  return (
    <div>
      <HomeActivity></HomeActivity>
    </div>
  );
}
