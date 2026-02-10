import { Metadata } from "next";
import ComingSoon from "@/components/program/ComingSoon";

export const metadata: Metadata = {
  title: "Coaching Individual 1:1 | Olimpia Moldoveanu",
  description:
    "Sesiuni individuale de coaching pentru transformare profundă pe situația ta specifică. Ghidare personalizată adaptată nevoilor tale.",
  openGraph: {
    title: "Coaching Individual 1:1 | Olimpia Moldoveanu",
    description:
      "Sesiuni individuale de coaching pentru transformare profundă pe situația ta specifică.",
    type: "website",
  },
};

export default function CoachingPage() {
  return (
    <ComingSoon
      title="Ghidare Personalizată"
      type="Coaching Individual 1:1"
      description="Sesiuni individuale pentru transformare profundă pe situația ta specifică. Ideal după finalizarea programului de grup sau pentru nevoi complexe care necesită atenție personalizată."
      features={[
        "Sesiuni 1:1 pe Zoom (60-90 minute)",
        "Acces WhatsApp direct între sesiuni",
        "Materiale personalizate pentru situația ta",
        "Planificare strategică adaptată obiectivelor tale",
        "Pachete flexibile: 3 luni / 6 luni / 9 luni",
      ]}
      color="lavanda"
    />
  );
}
