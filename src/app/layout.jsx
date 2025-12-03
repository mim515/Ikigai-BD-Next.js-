// app/layout.jsx
import "./globals.css";
import { Inter, Bungee_Spice, Poppins, Nunito } from "next/font/google";
import Script from "next/script";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";

// === FONTS ===
const bungeeSpice = Bungee_Spice({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

// === SEO-FRIENDLY METADATA ===
export const metadata = {
  metadataBase: new URL("https://www.ikigaibd.com"),
  title: {
    template: "%s | Ikigai Daycare & Preschool",
    default: "Ikigai Daycare & Preschool | Nurturing Young Minds in Dhaka",
  },
  description:
    "Ikigai is a premier daycare and preschool in Dhaka, offering holistic child development, play-based learning, and a safe environment for infants and toddlers.",
  keywords: [
    "daycare in Dhaka",
    "preschool in Dhaka",
    "child development center",
    "early childhood education",
    "Montessori school Dhaka",
    "infant care Dhaka",
    "play-based learning",
    "kids school Dhaka",
    "Ikigai preschool",
    "best daycare Bangladesh",
  ],
  openGraph: {
    title: "Ikigai Daycare & Preschool | Nurturing Young Minds in Dhaka",
    description:
      "Ikigai Daycare & Preschool offers a safe, nurturing, and play-based learning environment for infants and young children.",
    url: "https://www.ikigaibd.com",
    siteName: "Ikigai Daycare & Preschool",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.ikigaibd.com/images/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Ikigai Daycare & Preschool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ikigai Daycare & Preschool",
    description:
      "Trusted daycare and preschool in Dhaka providing a nurturing environment for children.",
    images: ["https://www.ikigaibd.com/images/og-banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.ikigaibd.com",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo192.png",
  },
};

// === ROOT LAYOUT ===
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${bungeeSpice.className} ${inter.className} ${nunito.className}`}
      >
        {/* External fonts/icons */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* JSON-LD SCHEMA (Local Business SEO) */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ChildCare",
              name: "Ikigai Daycare & Preschool",
              url: "https://www.ikigaibd.com",
              image: "https://www.ikigaibd.com/images/og-banner.jpg",
              logo: "https://www.ikigaibd.com/logo192.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Uttara, Dhaka",
                addressLocality: "Dhaka",
                postalCode: "1230",
                addressCountry: "BD",
              },
              description:
                "Ikigai provides a nurturing, play-based learning environment for holistic child development.",
              telephone: "+8801XXXXXXXXX",
              openingHours: "Sun-Sat 08:00-18:00",
            }),
          }}
        />

        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow" role="main">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
