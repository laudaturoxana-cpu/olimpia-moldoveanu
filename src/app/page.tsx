import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Olimpia Moldoveanu",
  url: "https://www.olimpiamoldoveanu.ro",
  image: "https://www.olimpiamoldoveanu.ro/olimpia-moldoveanu.jpg",
  jobTitle: "Coach Transformator",
  description:
    "Coach transformator pentru femei care vor să scape de anxietate, frici și blocaje emoționale și să își recapete liniștea și puterea interioară prin Legile Universale.",
  sameAs: ["https://www.facebook.com/olimpiamoldoveanu"],
  knowsAbout: [
    "Coaching transformator",
    "Legile Universale",
    "Anxietate",
    "Dezvoltare personală",
    "Transformare emoțională",
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Este programul de coaching pentru mine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Programul este pentru tine dacă simți anxietate, frici, oboseală emoțională sau lipsă de claritate. Dacă ai ajuns la un prag și simți că vrei altceva, dar nu știi de unde să începi, este pentru tine.",
      },
    },
    {
      "@type": "Question",
      name: "Cât durează până văd rezultate în coaching?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fiecare femeie are ritmul ei. Unele simt schimbări după primele 2-3 săptămâni. Altele au nevoie de 2-3 luni pentru a integra profund. Transformarea reală vine din consecvență.",
      },
    },
    {
      "@type": "Question",
      name: "Este coaching-ul prea spiritual?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lucrez cu Legile Universale, dar într-un mod aplicat și concret. Sunt exerciții clare, pași practici, rezultate măsurabile. Spiritualitate cu picioarele pe pământ.",
      },
    },
    {
      "@type": "Question",
      name: "Pot plăti în rate coaching-ul?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, programul principal poate fi plătit în 6 sau 9 rate, fără dobândă.",
      },
    },
    {
      "@type": "Question",
      name: "Ce se întâmplă dacă nu mă țin de program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "E normal să ai zile dificile. Diferența e că nu ești singură, ai grup, ai structură și suport constant. Nu ești lăsată să cazi fără sprijin.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <main className="min-h-screen bg-crem">
        <Header />
        <Hero />
        <Problems />
        <Services />
        <About />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
