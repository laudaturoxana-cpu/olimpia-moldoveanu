import { Metadata } from "next";
import WorkshopuriMartieLanding from "@/components/workshopuri/WorkshopuriMartieLanding";

export const metadata: Metadata = {
  title: "Martie – Luna Clarității | 4 Workshopuri Gratuite | Olimpia Moldoveanu",
  description:
    "Seria de 4 workshopuri gratuite în martie. De la confuzie la claritate, de la frică la direcție, de la reacție la asumare. Ghidat de Olimpia Moldoveanu, Dr. Cristina Varro și Corina Harjoaba.",
  keywords: [
    "workshopuri gratuite",
    "dezvoltare personala",
    "coaching",
    "claritate",
    "eliberare emotionala",
    "EFT",
    "dans energetic",
    "copil interior",
    "Olimpia Moldoveanu",
  ],
  openGraph: {
    title: "Martie – Luna Clarității | 4 Workshopuri Gratuite",
    description:
      "Seria de 4 workshopuri gratuite în martie. De la confuzie la claritate, de la frică la direcție, de la reacție la asumare.",
    type: "website",
  },
};

export default function WorkshopuriMartiePage() {
  return <WorkshopuriMartieLanding />;
}
