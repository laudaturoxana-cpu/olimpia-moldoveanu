import { Metadata } from "next";
import ComingSoon from "@/components/program/ComingSoon";

export const metadata: Metadata = {
  title: "Workshop: De la Frică la Liniște | Olimpia Moldoveanu",
  description:
    "Workshop live de 3 ore unde înveți tehnici practice de gestionare a fricii și anxietății. Perfect pentru a simți cum e să lucrezi cu mine.",
  openGraph: {
    title: "Workshop: De la Frică la Liniște | Olimpia Moldoveanu",
    description:
      "Workshop live de 3 ore unde înveți tehnici practice de gestionare a fricii și anxietății.",
    type: "website",
  },
};

export default function WorkshopPage() {
  return (
    <ComingSoon
      title="De la Frică la Liniște"
      type="Workshop Live • 3 ore"
      description="Workshop live de 3 ore unde înveți tehnici practice de gestionare a fricii și anxietății. Perfect pentru a simți cum e să lucrezi cu mine înainte de a te înscrie la programul mare."
      features={[
        "3 ore live (teorie + practică + Q&A)",
        "Înregistrarea workshop-ului (30 de zile acces)",
        "Fișă de lucru PDF «Harta Fricii Tale»",
        "Grup WhatsApp 7 zile pentru întrebări",
        "Tehnici practice pe care le poți aplica imediat",
      ]}
      color="roz"
    />
  );
}
