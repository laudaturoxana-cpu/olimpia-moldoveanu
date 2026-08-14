"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  lineExpand,
  staggerContainer,
  staggerChild,
  viewportConfig,
  EASE,
} from "@/lib/animations";
import SparkleParticles from "@/components/ui/SparkleParticles";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const Ghid7BlocajeLanding = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-crem">
      <GhidHeader />
      <HeroSection onScrollToForm={() => scrollToSection("formular")} />
      <PainSection />
      <DiscoverSection onScrollToForm={() => scrollToSection("formular")} />
      <FormSection />
      <AboutSection />
      <GhidFooter />
    </main>
  );
};

/* ==================== HEADER ==================== */
const GhidHeader = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-crem/95 backdrop-blur-sm shadow-header py-3"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <SparkleParticles count={10} intensity="bright" minSize={8} maxSize={16} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between relative z-10">
        <Link href="/" className="flex flex-col items-start group">
          <span className="font-cormorant text-charcoal text-lg md:text-xl tracking-widest">
            OLIMPIA MOLDOVEANU
          </span>
          <span className="block w-full h-px bg-auriu my-1 transform origin-left transition-transform duration-300 group-hover:scale-x-110" />
        </Link>

        <Link
          href="/"
          className="font-montserrat text-sm text-gri-mediu hover:text-auriu transition-colors"
        >
          ← Înapoi la site
        </Link>
      </div>
    </motion.header>
  );
};

/* ==================== HERO SECTION ==================== */
const HeroSection = ({ onScrollToForm }: { onScrollToForm: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #FAF7F5 0%, #FCF5F5 50%, #F5EDE8 100%)",
        }}
      />
      <SparkleParticles count={30} intensity="normal" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            className="text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.15)}
          >
            <motion.div className="inline-block mb-6" variants={fadeInUp}>
              <span className="bg-verde-sage/20 text-verde-sage font-montserrat text-xs sm:text-sm px-4 py-2 rounded-full border border-verde-sage/30">
                GHID GRATUIT • PDF • 42 PAGINI
              </span>
            </motion.div>

            <motion.h1
              className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] text-charcoal mb-5 leading-tight"
              variants={fadeInUp}
            >
              Știi Ce Ai De Făcut...
              <br />
              <span className="text-auriu">Dar Tot Nu Faci?</span>
            </motion.h1>

            <motion.p
              className="font-montserrat text-lg sm:text-xl text-gri-mediu mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              variants={fadeInUp}
            >
              Cele 7 blocaje ascunse care te țin pe loc și cum îți blochează corpul evoluția.
            </motion.p>

            <motion.div className="space-y-3 mb-8 max-w-lg mx-auto lg:mx-0" variants={fadeInUp}>
              {[
                "De ce „studiezi” dar nu aplici niciodată",
                "De ce simulezi progres, dar nimic nu se schimbă",
                "De ce simți că rămâi în același loc",
              ].map((line, i) => (
                <div key={i} className="flex items-start gap-3 text-left">
                  <span className="text-auriu flex-shrink-0 mt-1">✦</span>
                  <span className="font-montserrat text-base text-charcoal">{line}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <motion.button
                onClick={onScrollToForm}
                className="btn-primary text-base px-8 py-4"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Descarcă ghidul gratuit
              </motion.button>
              <p className="font-montserrat text-xs text-gri-mediu mt-3">
                Instant. Fără spam. Doar claritate.
              </p>
            </motion.div>
          </motion.div>

          {/* Guide cover visual (lotus + feather aesthetic) */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
          >
            <GuideCover />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* Decorative PDF cover — lotus + feather aesthetic, no external asset needed */
const GuideCover = () => {
  return (
    <motion.div
      className="relative w-64 sm:w-72 md:w-80"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="absolute -inset-5 bg-roz-pudrat/25 rounded-3xl -rotate-3" />
      <div
        className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-card border border-auriu/30 flex flex-col items-center justify-center text-center px-6"
        style={{
          background: "linear-gradient(160deg, #FFFFFF 0%, #FAF7F5 55%, #F3E8DE 100%)",
        }}
      >
        <SparkleParticles count={14} intensity="subtle" />
        {/* Lotus motif */}
        <svg
          className="w-16 h-16 mb-5 text-auriu relative z-10"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M32 44c0-10 0-18 0-30" />
          <path d="M32 44c-8 0-14-5-16-14 8-2 14 2 16 8" />
          <path d="M32 44c8 0 14-5 16-14-8-2-14 2-16 8" />
          <path d="M32 44c-5 0-9-6-9-16 5 1 8 6 9 12" />
          <path d="M32 44c5 0 9-6 9-16-5 1-8 6-9 12" />
          <path d="M14 44c6 4 30 4 36 0" />
        </svg>
        <span className="relative z-10 font-montserrat text-[0.6rem] tracking-[0.25em] text-verde-sage mb-3">
          GHID GRATUIT
        </span>
        <h3 className="relative z-10 font-cormorant text-2xl text-charcoal leading-snug mb-3">
          Știi Ce Ai De Făcut... Dar Tot Nu Faci?
        </h3>
        <span className="relative z-10 block w-12 h-px bg-auriu mb-3" />
        <p className="relative z-10 font-montserrat text-[0.7rem] text-gri-mediu">
          Cele 7 blocaje ascunse care te țin pe loc
        </p>
        <p className="relative z-10 font-montserrat text-[0.65rem] text-charcoal/70 mt-6 tracking-wider">
          OLIMPIA MOLDOVEANU
        </p>
      </div>
    </motion.div>
  );
};

/* ==================== PAIN / INTRO SECTION ==================== */
const PainSection = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <SparkleParticles count={12} intensity="subtle" />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer(0.15)}
        >
          <motion.h2
            className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-charcoal mb-8"
            variants={fadeInUp}
          >
            Paradoxul cunoașterii
          </motion.h2>

          <motion.div
            className="space-y-6 font-montserrat text-gri-mediu text-base sm:text-lg leading-relaxed"
            variants={fadeInUp}
          >
            <p>
              Ai citit cărțile. Ai urmat cursurile. Știi exact ce ai de făcut.
              Și totuși, dimineața te trezești în același loc.
            </p>
            <p className="text-charcoal font-medium text-xl">
              Problema nu e că nu știi.
            </p>
            <p>
              Problema e că ceva, în adânc, te ține pe loc. Un blocaj pe care mintea îl ocolește,
              dar corpul îl păstrează.
            </p>
            <p className="text-auriu font-medium text-xl">
              Ghidul acesta îți arată exact care dintre cele 7 blocaje e al tău.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* ==================== WHAT YOU'LL DISCOVER ==================== */
const DiscoverSection = ({ onScrollToForm }: { onScrollToForm: () => void }) => {
  const blocaje = [
    {
      number: "01",
      title: "Supraconsumul de dezvoltare personală",
      description: "Cum acumularea constantă de informație devine o formă subtilă de amânare.",
    },
    {
      number: "02",
      title: "Oboseala emoțională",
      description: "De ce, oricât de motivată ai fi, energia se scurge înainte să acționezi.",
    },
    {
      number: "03",
      title: "Autosabotajul subtil",
      description: "Mecanismele prin care te oprești singură exact înainte de schimbare.",
    },
    {
      number: "04",
      title: "Perfecționismul toxic",
      description: "Cum „încă nu e momentul potrivit” devine scuza care blochează totul.",
    },
    {
      number: "05",
      title: "Nevoia de validare (People-Pleasing)",
      description: "De ce viața ta rămâne condusă de așteptările celorlalți.",
    },
    {
      number: "06",
      title: "Lipsa integrării (Minte vs. Corp)",
      description: "De ce înțelegerea mentală nu e suficientă fără eliberare în corp.",
    },
    {
      number: "07",
      title: "Frica de schimbare (Suferința familiară)",
      description: "Cum alegi disconfortul cunoscut în locul unei vieți noi, necunoscute.",
    },
  ];

  return (
    <section className="section-padding bg-crem relative overflow-hidden">
      <SparkleParticles count={15} intensity="subtle" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.h2
            className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4"
            variants={fadeInUp}
          >
            Ce Vei Descoperi În Ghid
          </motion.h2>
          <motion.p
            className="font-montserrat text-gri-mediu max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Cele 7 blocaje explicate, cu mecanismele lor și spații de introspecție,
            plus un test de autoevaluare: care e blocajul tău dominant?
          </motion.p>
          <motion.div className="h-0.5 bg-auriu mx-auto mt-6" variants={lineExpand} />
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {blocaje.map((b, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-card p-6 border border-gri-deschis hover:border-auriu/40 hover:shadow-card transition-all duration-300"
              variants={staggerChild}
            >
              <span className="font-cormorant text-4xl text-auriu/40 block mb-3">
                {b.number}
              </span>
              <h3 className="font-cormorant text-xl text-charcoal mb-2 leading-snug">
                {b.title}
              </h3>
              <p className="font-montserrat text-sm text-gri-mediu leading-relaxed">
                {b.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-10 md:mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
        >
          <motion.button
            onClick={onScrollToForm}
            className="btn-primary text-base px-8 py-4"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Vreau ghidul gratuit
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

/* ==================== FORM SECTION ==================== */
const FormSection = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    confirmed: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.confirmed) {
      setErrorMessage("Te rugăm să bifezi acordul pentru a primi ghidul pe email.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          source: "ghid-7-blocaje",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      // Facebook Pixel - Lead event
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Lead", { content_name: "Ghid 7 Blocaje" });
      }

      const firstName = formData.name.split(" ")[0];
      router.push(`/multumire-ghid?name=${encodeURIComponent(firstName)}`);
    } catch {
      setErrorMessage("A apărut o eroare. Te rugăm să încerci din nou.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="formular" className="section-padding bg-roz-pudrat/20 relative overflow-hidden">
      <SparkleParticles count={20} intensity="normal" />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.h2
            className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4"
            variants={fadeInUp}
          >
            Descarcă Ghidul Gratuit
          </motion.h2>
          <motion.p className="font-montserrat text-gri-mediu" variants={fadeInUp}>
            Îți trimit ghidul pe email în câteva minute.
          </motion.p>
          <motion.div className="h-0.5 bg-auriu mx-auto mt-6" variants={lineExpand} />
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white rounded-card p-6 md:p-8 border-2 border-auriu shadow-card"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
        >
          <div className="space-y-6">
            <div>
              <label className="block font-montserrat text-sm text-charcoal mb-2">
                Nume complet *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gri-deschis rounded-lg font-montserrat text-sm focus:outline-none focus:border-auriu transition-colors"
                placeholder="Numele tău complet"
              />
            </div>

            <div>
              <label className="block font-montserrat text-sm text-charcoal mb-2">
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gri-deschis rounded-lg font-montserrat text-sm focus:outline-none focus:border-auriu transition-colors"
                placeholder="adresa@email.com"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="confirmed"
                checked={formData.confirmed}
                onChange={(e) => setFormData({ ...formData, confirmed: e.target.checked })}
                className="mt-1 w-5 h-5 text-auriu border-gri-deschis rounded focus:ring-auriu"
              />
              <label htmlFor="confirmed" className="font-montserrat text-sm text-gri-mediu">
                Sunt de acord să primesc ghidul și emailuri ocazionale de la Olimpia
                Moldoveanu. Îmi pot retrage acordul oricând. Vezi{" "}
                <Link href="/confidentialitate" className="text-auriu hover:underline">
                  politica de confidențialitate
                </Link>
                .
              </label>
            </div>

            {errorMessage && (
              <p className="font-montserrat text-sm text-red-500">{errorMessage}</p>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary text-base py-4 disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? "Se procesează..." : "DESCARCĂ GHIDUL GRATUIT"}
            </motion.button>

            <p className="font-montserrat text-xs text-gri-mediu text-center">
              Instant. Fără spam. Doar claritate.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

/* ==================== ABOUT OLIMPIA ==================== */
const AboutSection = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <SparkleParticles count={14} intensity="subtle" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 md:gap-12 items-center">
          {/* Image */}
          <motion.div
            className="lg:col-span-2 order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInLeft}
          >
            <div className="relative max-w-sm mx-auto">
              <div className="absolute -inset-4 bg-roz-pudrat/20 rounded-3xl -rotate-3" />
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-card">
                <Image
                  src="/olimpia-moldoveanu.jpg"
                  alt="Olimpia Moldoveanu - Coach Transformator prin Legile Universale"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="lg:col-span-3 order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInRight}
          >
            <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-charcoal mb-2">
              Povestea Mea
            </h2>
            <p className="font-montserrat text-base sm:text-lg text-auriu mb-6">
              De ce am scris acest ghid
            </p>

            <div className="space-y-5 font-montserrat text-gri-mediu leading-relaxed mb-8">
              <p>
                A fost o perioadă în care viața mea părea „în ordine”. Aveam o carieră,
                responsabilități, o direcție clară. Și totuși, în interior, simțeam că mă
                mișc fără să înaintez cu adevărat.
              </p>
              <p>
                Știam ce am de făcut. Citisem, învățasem, înțelegeam. Dar între a ști și a
                trăi era o distanță pe care nicio informație nouă nu o umplea. Abia când am
                înțeles că <span className="text-charcoal font-medium">blocajele nu se rezolvă doar din minte</span>,
                ci și din corp, lucrurile au început să se miște.
              </p>
              <p className="text-charcoal font-medium italic">
                Ghidul acesta e harta pe care aș fi vrut s-o am atunci.
              </p>
            </div>

            <Link href="/program-transformare">
              <motion.button
                className="btn-secondary text-sm px-7 py-3.5"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Descoperă programele mele de transformare →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ==================== FOOTER ==================== */
const GhidFooter = () => {
  return (
    <footer className="bg-charcoal py-8 border-t border-gri-mediu/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <Link href="/" className="inline-block mb-2">
          <span className="font-cormorant text-crem text-lg tracking-widest">
            OLIMPIA MOLDOVEANU
          </span>
        </Link>
        <p className="font-montserrat text-xs text-gri-mediu mb-4">
          Coaching Transformator prin Legile Universale
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-4 font-montserrat text-sm text-gri-mediu">
          <a href="mailto:contact@olimpiamoldoveanu.ro" className="hover:text-auriu transition-colors">
            contact@olimpiamoldoveanu.ro
          </a>
          <a href="tel:+40720411423" className="hover:text-auriu transition-colors">
            +40 720 411 423
          </a>
        </div>
        <p className="font-montserrat text-sm text-gri-mediu">
          © {new Date().getFullYear()} Olimpia Moldoveanu. Toate drepturile rezervate.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <Link href="/confidentialitate" className="font-montserrat text-xs text-gri-mediu hover:text-auriu transition-colors">
            Confidențialitate
          </Link>
          <Link href="/termeni" className="font-montserrat text-xs text-gri-mediu hover:text-auriu transition-colors">
            Termeni
          </Link>
          <Link href="/gdpr" className="font-montserrat text-xs text-gri-mediu hover:text-auriu transition-colors">
            GDPR
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Ghid7BlocajeLanding;
