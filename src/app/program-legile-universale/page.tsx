import { Metadata } from "next";
import ComingSoon from "@/components/program/ComingSoon";

export const metadata: Metadata = {
  title: "Program Legile Universale | Olimpia Moldoveanu",
  description:
    "Program de transformare emoțională și aliniere prin cele 27 de Legi Universale. 9 săptămâni de practică intensivă pentru schimbare profundă.",
  openGraph: {
    title: "Program Legile Universale | Olimpia Moldoveanu",
    description:
      "Program de transformare emoțională și aliniere prin cele 27 de Legi Universale.",
    type: "website",
  },
};

export default function LegileUniversalePage() {
  return (
    <ComingSoon
      title="Legile Universale"
      type="Program de Transformare • 9 Săptămâni"
      description="Program de transformare emoțională și aliniere prin cele 27 de Legi Universale. Învață să aplici aceste principii în viața de zi cu zi pentru claritate, echilibru și manifestare conștientă."
      features={[
        "9 săptămâni de transformare intensivă",
        "Mini-program gratuit: 7 zile de detox emoțional (prelansare)",
        "Traininguri și sesiuni live săptămânale",
        "Aplicarea practică a celor 27 de Legi Universale",
        "Grup de suport și materiale de lucru",
        "Acces la înregistrări",
      ]}
      color="verde"
    />
  );
}
