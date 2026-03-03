import { Metadata } from "next";
import CoachingIndividualLanding from "@/components/coaching/CoachingIndividualLanding";

export const metadata: Metadata = {
  title: "Sesiuni Individuale 1 la 1 | Olimpia Moldoveanu",
  description:
    "Coaching individual 1 la 1: Claritate, direcție și asumare. Un proces ghidat, precis, orientat spre rezultat concret — personalizat pe situația ta.",
  openGraph: {
    title: "Sesiuni Individuale 1 la 1 | Olimpia Moldoveanu",
    description:
      "Coaching individual 1 la 1: Claritate, direcție și asumare. Proces personalizat pe situația ta.",
    type: "website",
  },
};

export default function CoachingPage() {
  return <CoachingIndividualLanding />;
}
