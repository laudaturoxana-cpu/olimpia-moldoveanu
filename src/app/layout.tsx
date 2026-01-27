import type { Metadata } from "next";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "Olimpia Moldoveanu | Coaching Transformator prin Legile Universale",
  description: "Te ghidez de la anxietate, frici și blocaje emoționale la pace interioară și claritate. Coaching transformator pentru femei care vor să își recapete liniștea și puterea interioară.",
  keywords: [
    "coaching transformator femei",
    "anxietate femei 40+",
    "legile universale coaching",
    "transformare personala femei Romania",
    "detox emotional",
    "coaching frici anxietate",
    "coaching online Romania",
    "dezvoltare personala femei"
  ],
  authors: [{ name: "Olimpia Moldoveanu" }],
  openGraph: {
    title: "Olimpia Moldoveanu | Coaching Transformator",
    description: "Te ghidez de la anxietate, frici și blocaje emoționale la pace interioară și claritate.",
    type: "website",
    locale: "ro_RO",
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
      </head>
      <body className="antialiased">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
