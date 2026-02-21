import type { Metadata, Viewport } from "next";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.olimpiamoldoveanu.ro"),
  title: {
    default: "Olimpia Moldoveanu | Coaching Transformator prin Legile Universale",
    template: "%s | Olimpia Moldoveanu",
  },
  description:
    "Te ghidez de la anxietate, frici și blocaje emoționale la pace interioară și claritate. Coaching transformator pentru femei care vor să își recapete liniștea și puterea interioară.",
  keywords: [
    "coaching transformator femei",
    "anxietate femei 40+",
    "legile universale coaching",
    "transformare personala femei Romania",
    "detox emotional",
    "coaching frici anxietate",
    "coaching online Romania",
    "dezvoltare personala femei",
    "eliberare emotionala",
    "coaching femei",
    "metoda impact",
  ],
  authors: [{ name: "Olimpia Moldoveanu", url: "https://www.olimpiamoldoveanu.ro" }],
  creator: "Olimpia Moldoveanu",
  publisher: "Olimpia Moldoveanu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Olimpia Moldoveanu | Coaching Transformator prin Legile Universale",
    description:
      "Te ghidez de la anxietate, frici și blocaje emoționale la pace interioară și claritate. Coaching transformator pentru femei.",
    url: "https://www.olimpiamoldoveanu.ro",
    siteName: "Olimpia Moldoveanu Coaching",
    images: [
      {
        url: "/olimpia-moldoveanu.jpg",
        width: 1200,
        height: 630,
        alt: "Olimpia Moldoveanu - Coach Transformator",
      },
    ],
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Olimpia Moldoveanu | Coaching Transformator",
    description:
      "Te ghidez de la anxietate, frici și blocaje emoționale la pace interioară și claritate.",
    images: ["/olimpia-moldoveanu.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Olimpia Moldoveanu Coaching",
  description:
    "Coaching transformator prin Legile Universale pentru femei. Te ghidez de la anxietate și blocaje emoționale la pace interioară și claritate.",
  url: "https://www.olimpiamoldoveanu.ro",
  logo: "https://www.olimpiamoldoveanu.ro/olimpia-moldoveanu.jpg",
  image: "https://www.olimpiamoldoveanu.ro/olimpia-moldoveanu.jpg",
  telephone: "+40720411423",
  address: {
    "@type": "VirtualLocation",
    name: "Online pe Zoom",
  },
  areaServed: {
    "@type": "Country",
    name: "Romania",
  },
  serviceType: ["Life Coaching", "Personal Development", "Emotional Healing"],
  priceRange: "$$",
  openingHours: "Mo-Fr 15:00-21:00",
  founder: {
    "@type": "Person",
    name: "Olimpia Moldoveanu",
    jobTitle: "Coach Transformator prin Legile Universale",
    description:
      "Coach certificat cu peste 5 ani experiență în coaching transformațional și 25+ ani în domeniul economic.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
