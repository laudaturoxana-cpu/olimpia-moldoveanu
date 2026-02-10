import { Metadata } from "next";
import ProgramLanding from "@/components/program/ProgramLanding";

export const metadata: Metadata = {
  title: "Program Transformare 36 Săptămâni | Olimpia Moldoveanu",
  description:
    "Conștientizează-ți Puterea, Vindecă-te și Realizează-ți Visurile. Program exclusiv de 36 săptămâni pentru transformare profundă, vindecare emoțională și dezvoltare personală.",
  openGraph: {
    title: "Program Transformare 36 Săptămâni | Olimpia Moldoveanu",
    description:
      "Conștientizează-ți Puterea, Vindecă-te și Realizează-ți Visurile. Program exclusiv de 36 săptămâni.",
    type: "website",
  },
};

export default function ProgramTransformarePage() {
  return <ProgramLanding />;
}
