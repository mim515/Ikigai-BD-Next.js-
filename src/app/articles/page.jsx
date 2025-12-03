// app/articles/page.jsx
import React from "react";
import SubscriptionForm from "../components/SubscriptionForm";
import ArticlesPage from "../components/ArticlesPage";

// === PAGE METADATA FOR SEO ===
export const metadata = {
  title: "Articles | Ikigai Daycare & Preschool",
  description:
    "Read the latest articles on early childhood education, play-based learning, and child development from Ikigai Daycare & Preschool in Dhaka.",
  keywords: [
    "daycare articles Dhaka",
    "preschool articles Dhaka",
    "child development tips",
    "early learning articles",
    "Montessori insights",
  ],
  openGraph: {
    title: "Articles | Ikigai Daycare & Preschool",
    description:
      "Explore educational articles and tips for holistic child development at Ikigai Daycare & Preschool.",
    url: "https://www.ikigaibd.com/articles",
    images: [
      {
        url: "/images/article01.jpg", 
        width: 1200,
        height: 630,
        alt: "Articles at Ikigai Daycare & Preschool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles | Ikigai Daycare & Preschool",
    description:
      "Read educational articles on child development, learning, and play from Ikigai Daycare & Preschool.",
    images: ["/images/articles-og.jpg"],
  },
  alternates: {
    canonical: "https://www.ikigaibd.com/articles",
  },
};

export default function Page() {
  return (
    <div>
      <ArticlesPage />
      <SubscriptionForm />
    </div>
  );
}
