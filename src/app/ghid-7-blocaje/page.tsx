import { Metadata } from "next";
import Ghid7BlocajeLanding from "@/components/ghid/Ghid7BlocajeLanding";

export const metadata: Metadata = {
  title: "Ghid Gratuit: Cele 7 Blocaje Care Te Țin Pe Loc | Olimpia Moldoveanu",
  description:
    "Știi ce ai de făcut... dar tot nu faci? Descarcă gratuit ghidul cu cele 7 blocaje ascunse care te țin pe loc și cum îți blochează corpul evoluția. PDF, 42 pagini.",
  keywords: [
    "ghid gratuit dezvoltare personala",
    "blocaje emotionale",
    "de ce nu aplic ce stiu",
    "autosabotaj",
    "perfectionism",
    "frica de schimbare",
    "coaching femei",
    "Olimpia Moldoveanu",
  ],
  openGraph: {
    title: "Ghid Gratuit: Cele 7 Blocaje Care Te Țin Pe Loc",
    description:
      "Știi ce ai de făcut... dar tot nu faci? Descarcă gratuit ghidul cu cele 7 blocaje ascunse care te țin pe loc.",
    type: "website",
    images: ["/olimpia-moldoveanu.jpg"],
  },
  alternates: {
    canonical: "/ghid-7-blocaje",
  },
};

export default function Ghid7BlocajePage() {
  return <Ghid7BlocajeLanding />;
}
