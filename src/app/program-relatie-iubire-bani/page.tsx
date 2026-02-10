import { Metadata } from "next";
import ComingSoon from "@/components/program/ComingSoon";

export const metadata: Metadata = {
  title: "Program Relație, Iubire și Bani | Olimpia Moldoveanu",
  description:
    "Program dedicat transformării relației cu tine, cu ceilalți și cu banii. Vindecă blocajele și creează abundență în toate ariile vieții tale.",
  openGraph: {
    title: "Program Relație, Iubire și Bani | Olimpia Moldoveanu",
    description:
      "Program dedicat transformării relației cu tine, cu ceilalți și cu banii.",
    type: "website",
  },
};

export default function RelatieIubireBaniPage() {
  return (
    <ComingSoon
      title="Relație, Iubire și Bani"
      type="Program Tematic"
      description="Un program dedicat vindecării și transformării celor mai importante relații din viața ta: relația cu tine, relația cu ceilalți și relația cu banii. Eliberează blocajele și creează abundență autentică."
      features={[
        "Vindecarea relației cu sinele și cu iubirea de sine",
        "Transformarea tiparelor în relațiile de cuplu și familie",
        "Eliberarea blocajelor financiare și a credințelor limitative despre bani",
        "Tehnici practice pentru atragerea abundenței",
        "Sesiuni live și suport în grup",
        "Exerciții de integrare pentru fiecare modul",
      ]}
      color="lavanda"
    />
  );
}
