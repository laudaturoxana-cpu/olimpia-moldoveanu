"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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

const WorkshopuriMartieLanding = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-crem">
      <WorkshopHeader />
      <HeroSection onScrollToForm={() => scrollToSection("formular")} />
      <IntroSection />
      <WhatIsSection />
      <WorkshopsSection />
      <ForYouSection />
      <DetailsSection />
      <FormSection />
      <MessageSection />
      <FAQSection />
      <FinalCTASection onScrollToForm={() => scrollToSection("formular")} />
      <WorkshopFooter />
    </main>
  );
};

/* ==================== HEADER ==================== */
const WorkshopHeader = () => {
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
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #FAF7F5 0%, #FCF5F5 50%, #F5EDE8 100%)",
        }}
      />
      <SparkleParticles count={30} intensity="normal" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16 w-full relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.15)}
        >
          <motion.div className="inline-block mb-6" variants={fadeInUp}>
            <span className="bg-verde-sage/20 text-verde-sage font-montserrat text-xs sm:text-sm px-4 py-2 rounded-full border border-verde-sage/30">
              SERIE GRATUITĂ • 4 WORKSHOPURI • MARTIE 2026
            </span>
          </motion.div>

          <motion.h1
            className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6 leading-tight"
            variants={fadeInUp}
          >
            MARTIE
            <br />
            <span className="text-auriu">Luna Clarității</span>
          </motion.h1>

          <motion.p
            className="font-montserrat text-xl sm:text-2xl text-gri-mediu mb-4"
            variants={fadeInUp}
          >
            Seria de 4 Workshopuri Gratuite
          </motion.p>

          <motion.p
            className="font-montserrat text-base sm:text-lg text-gri-mediu mb-8 max-w-2xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            De la confuzie la claritate. De la frică la direcție. De la reacție la asumare.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <motion.button
              onClick={onScrollToForm}
              className="btn-primary text-base px-8 py-4"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Mă înscriu în seria completă
            </motion.button>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-6 pt-10 text-gri-mediu"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-2">
              <span className="text-verde-sage">✓</span>
              <span className="font-montserrat text-sm">100% Gratuit</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-verde-sage">✓</span>
              <span className="font-montserrat text-sm">4 workshopuri live</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-verde-sage">✓</span>
              <span className="font-montserrat text-sm">3 practiciene</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-verde-sage">✓</span>
              <span className="font-montserrat text-sm">Maxim 50 locuri</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* ==================== INTRO SECTION ==================== */
const IntroSection = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <SparkleParticles count={12} intensity="subtle" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer(0.15)}
          className="text-center"
        >
          <motion.h2
            className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-charcoal mb-8"
            variants={fadeInUp}
          >
            Martie este despre începuturi asumate.
          </motion.h2>

          <motion.div
            className="space-y-6 font-montserrat text-gri-mediu text-base sm:text-lg leading-relaxed"
            variants={fadeInUp}
          >
            <p>
              Te-ai trezit de prea multe ori cu aceeași oboseală.
              Ai început anul cu speranță și acum simți că nimic nu s-a schimbat cu adevărat.
            </p>

            <p className="text-charcoal font-medium text-xl">
              Martie poate fi altfel.
            </p>

            <p>
              Nu prin motivație temporară. Nu prin promisiuni exagerate.
            </p>

            <p className="text-auriu font-medium text-xl">
              Prin claritate. Prin eliberare. Prin asumare.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* ==================== WHAT IS SECTION ==================== */
const WhatIsSection = () => {
  return (
    <section className="section-padding bg-crem relative overflow-hidden">
      <SparkleParticles count={15} intensity="subtle" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer(0.15)}
        >
          <motion.h2
            className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-charcoal mb-8 text-center"
            variants={fadeInUp}
          >
            Ce Este Această Serie?
          </motion.h2>

          <motion.div
            className="space-y-6 font-montserrat text-gri-mediu text-base sm:text-lg leading-relaxed text-center"
            variants={fadeInUp}
          >
            <p className="text-charcoal font-medium">
              Nu este o serie motivațională.
            </p>
            <p>
              Nu îți vom spune să &ldquo;gândești pozitiv&rdquo; sau să &ldquo;crezi în tine&rdquo;.
            </p>

            <p>
              <span className="text-charcoal font-medium">Este un proces progresiv</span> structurat în 4 pași clari care te aduce de la confuzie la claritate, de la frică la direcție, de la reacție la asumare.
            </p>

            <p>
              Fiecare workshop construiește pe cel anterior.
              Fiecare pas te aduce mai aproape de tine.
            </p>

            <div className="bg-white rounded-card p-6 md:p-8 border border-gri-deschis mt-8">
              <p className="text-charcoal font-medium mb-4 text-xl">La final, vei avea:</p>
              <div className="space-y-3 text-left max-w-xl mx-auto">
                <div className="flex items-start gap-3">
                  <span className="text-verde-sage flex-shrink-0">✓</span>
                  <span>Conștientizare clară asupra a ceea ce te ține pe loc</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-verde-sage flex-shrink-0">✓</span>
                  <span>Instrumente practice pentru eliberare emoțională</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-verde-sage flex-shrink-0">✓</span>
                  <span>Primul pas concret spre schimbarea pe care ți-o dorești</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* ==================== WORKSHOPS SECTION ==================== */
const WorkshopsSection = () => {
  const workshops = [
    {
      number: "01",
      title: "Puterea Cuvântului",
      date: "5 Martie",
      time: "19:00-20:30",
      subtitle: "Cum îți influențează cuvintele identitatea",
      description: "Cuvintele pe care le folosești zilnic îți modelează realitatea fără să îți dai seama.",
      items: [
        "Descoperi care sunt cuvintele care te limitează",
        "Înveți diferența dintre \"trebuie\" și \"aleg\" și ce se schimbă când faci această înlocuire",
        "Identifici blocajele subtile ale manifestării tale",
        "Primești primul exercițiu concret de recalibrare lingvistică",
      ],
      quote: "Viața ta este grădina ta. Cuvintele sunt semințele.",
      facilitator: "Olimpia Moldoveanu",
      color: "bg-roz-pudrat/20",
    },
    {
      number: "02",
      title: "Convingerile Limitative",
      date: "12 Martie",
      time: "19:00-20:30",
      subtitle: "Identificarea convingerilor despre bani, relații și valoare personală",
      description: "Convingerile care te țin pe loc nu sunt ale tale. Sunt moștenite din familie, din cultură, din experiențe timpurii.",
      items: [
        "Identifici convingerile limitative despre bani, relații și valoare personală",
        "Înțelegi diferența dintre programare (ce ai primit) și alegere (ce faci cu ce ai primit)",
        "Lucrezi un proces conștient de recalibrare",
        "Sesiune specială Dans Energetic cu Dr. Cristina Varro pentru eliberarea prin corp",
      ],
      quote: "Programarea este ce ai primit. Alegerea este ce faci cu ce ai primit.",
      facilitator: "Olimpia Moldoveanu & Dr. Cristina Varro",
      color: "bg-verde-sage/20",
    },
    {
      number: "03",
      title: "Frica și Mecanismele Ei",
      date: "19 Martie",
      time: "19:00-20:30",
      subtitle: "Cum funcționează frica în corp și minte",
      description: "Frica nu este dușmanul. Este o busolă.",
      items: [
        "Înțelegi cum funcționează frica în corp și minte",
        "Descoperi de ce evitarea o amplifică (și ce se întâmplă când o întâmpini conștient)",
        "Transformi frica în direcție nu în blocare",
        "Sesiune EFT cu Corina Harjoaba pentru eliberarea fricii prin corp",
      ],
      quote: "Nu dansez în ciuda fricilor mele. Dansez cu ele.",
      facilitator: "Olimpia Moldoveanu & Corina Harjoaba",
      color: "bg-lavanda/20",
    },
    {
      number: "04",
      title: "Copilul Interior și Întregirea",
      date: "26 Martie",
      time: "19:00-20:30",
      subtitle: "Impactul rănilor emoționale",
      description: "Finalul seriei și cel mai profund. Te întorci la rădăcina tuturor blocajelor la copilul care a purtat ce nu era al lui.",
      items: [
        "Înțelegi impactul rănilor emoționale din copilărie",
        "Lucrezi cu maturitatea emoțională și stabilitatea interioară",
        "Meditație ghidată de vindecare a copilului interior cu Corina Harjoaba",
        "Integrezi întreaga serie și stabilești primul pas concret pentru tine",
      ],
      quote: "Nu devii altcineva. Te întorci la cine ai fost mereu.",
      facilitator: "Olimpia Moldoveanu & Corina Harjoaba",
      color: "bg-auriu/10",
    },
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.h2
            className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4"
            variants={fadeInUp}
          >
            Structura Celor 4 Workshopuri
          </motion.h2>
          <motion.div className="h-0.5 bg-auriu mx-auto mt-6" variants={lineExpand} />
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {workshops.map((workshop, index) => (
            <motion.div
              key={index}
              className={`${workshop.color} rounded-card p-6 md:p-8 border border-transparent hover:border-auriu/30 transition-all duration-300`}
              variants={staggerChild}
            >
              <div className="grid md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-cormorant text-4xl md:text-5xl text-auriu/40">
                      {workshop.number}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <p className="font-montserrat text-sm text-charcoal font-medium">
                      📅 {workshop.date}
                    </p>
                    <p className="font-montserrat text-sm text-gri-mediu">
                      {workshop.time} • Online (Zoom)
                    </p>
                  </div>
                </div>

                <div className="md:col-span-3">
                  <h3 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-2">
                    {workshop.title}
                  </h3>
                  <p className="font-montserrat text-sm text-auriu mb-4">
                    {workshop.subtitle}
                  </p>
                  <p className="font-montserrat text-sm text-gri-mediu mb-4 leading-relaxed">
                    {workshop.description}
                  </p>

                  <p className="font-montserrat text-sm text-charcoal font-medium mb-3">
                    În acest workshop:
                  </p>
                  <ul className="space-y-2 mb-4">
                    {workshop.items.map((item, idx) => (
                      <li key={idx} className="font-montserrat text-sm text-gri-mediu flex items-start gap-2">
                        <span className="text-verde-sage flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <blockquote className="font-montserrat text-sm text-auriu italic border-l-4 border-auriu pl-4 mb-4">
                    &ldquo;{workshop.quote}&rdquo;
                  </blockquote>

                  <p className="font-montserrat text-xs text-gri-mediu">
                    <span className="font-medium">Ghidat de:</span> {workshop.facilitator}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ==================== FOR YOU SECTION ==================== */
const ForYouSection = () => {
  const forYou = [
    "Simți că te-ai blocat și vrei claritate reală, nu doar inspirație temporară",
    "Ai citit multe, ai învățat multe dar vrei să integrezi, nu doar să acumulezi informație",
    "Cauți structură și ghidare clară, nu \"energie bună\" care dispare în 3 zile",
    "Ești dispusă să te uiți cu onestitate la ce te ține pe loc",
    "Vrei să faci primul pas concret fără presiune, dar cu responsabilitate",
  ];

  const notForYou = [
    "Cauți soluții instant sau \"secrete magice\"",
    "Nu ești dispusă să-ți asumi prezența la toate cele 4 workshopuri",
    "Vrei doar să \"te simți bine\" fără să lucrezi concret",
    "Aștepți pe cineva să te salveze din exterior",
  ];

  return (
    <section className="section-padding bg-crem relative overflow-hidden">
      <SparkleParticles count={12} intensity="subtle" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.h2
            className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4"
            variants={fadeInUp}
          >
            Este Pentru Tine?
          </motion.h2>
          <motion.div className="h-0.5 bg-auriu mx-auto mt-6" variants={lineExpand} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white rounded-card p-6 md:p-8 border border-verde-sage"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInLeft}
          >
            <h3 className="font-cormorant text-2xl text-charcoal mb-6 flex items-center gap-3">
              <span className="text-verde-sage text-2xl">✓</span>
              Această Serie Este Pentru Tine Dacă:
            </h3>
            <ul className="space-y-3">
              {forYou.map((item, index) => (
                <li key={index} className="font-montserrat text-sm text-gri-mediu flex items-start gap-3">
                  <span className="text-verde-sage flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="bg-white rounded-card p-6 md:p-8 border border-gri-deschis"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInRight}
          >
            <h3 className="font-cormorant text-2xl text-charcoal mb-6 flex items-center gap-3">
              <span className="text-gri-mediu text-2xl">✗</span>
              Această Serie NU Este Pentru Tine Dacă:
            </h3>
            <ul className="space-y-3">
              {notForYou.map((item, index) => (
                <li key={index} className="font-montserrat text-sm text-gri-mediu flex items-start gap-3">
                  <span className="text-gri-mediu flex-shrink-0">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p
          className="font-montserrat text-center text-charcoal font-medium mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
        >
          Programul funcționează pe structură și responsabilitate.
        </motion.p>
      </div>
    </section>
  );
};

/* ==================== DETAILS SECTION ==================== */
const DetailsSection = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.h2
            className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4"
            variants={fadeInUp}
          >
            Detalii Practice
          </motion.h2>
          <motion.div className="h-0.5 bg-auriu mx-auto mt-6" variants={lineExpand} />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            className="bg-crem rounded-card p-6 border border-gri-deschis"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
          >
            <h3 className="font-cormorant text-xl text-charcoal mb-4">Format</h3>
            <ul className="space-y-2 font-montserrat text-sm text-gri-mediu">
              <li className="flex items-start gap-2">
                <span className="text-verde-sage">✓</span>
                4 workshopuri live pe Zoom
              </li>
              <li className="flex items-start gap-2">
                <span className="text-verde-sage">✓</span>
                90 minute fiecare (19:00-20:30)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-verde-sage">✓</span>
                Interacțiune în grup + exerciții practice
              </li>
              <li className="flex items-start gap-2">
                <span className="text-auriu">!</span>
                Înregistrările NU vor fi disponibile
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-crem rounded-card p-6 border border-gri-deschis"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
          >
            <h3 className="font-cormorant text-xl text-charcoal mb-4">Participare</h3>
            <ul className="space-y-2 font-montserrat text-sm text-gri-mediu">
              <li className="flex items-start gap-2">
                <span className="text-verde-sage">✓</span>
                <strong className="text-charcoal">Gratuită</strong> pentru întreaga serie
              </li>
              <li className="flex items-start gap-2">
                <span className="text-verde-sage">✓</span>
                Înscriere pentru seria completă
              </li>
              <li className="flex items-start gap-2">
                <span className="text-verde-sage">✓</span>
                Commitment: toate cele 4 întâlniri
              </li>
              <li className="flex items-start gap-2">
                <span className="text-auriu">!</span>
                Maxim 50 de participante
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-crem rounded-card p-6 border border-gri-deschis"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
          >
            <h3 className="font-cormorant text-xl text-charcoal mb-4">Ce primești</h3>
            <ul className="space-y-2 font-montserrat text-sm text-gri-mediu">
              <li className="flex items-start gap-2">
                <span className="text-verde-sage">✓</span>
                4 workshopuri live ghidate de 3 practiciene
              </li>
              <li className="flex items-start gap-2">
                <span className="text-verde-sage">✓</span>
                Exerciții practice în fiecare sesiune
              </li>
              <li className="flex items-start gap-2">
                <span className="text-verde-sage">✓</span>
                Sesiuni speciale: Dans Energetic, EFT, Meditație
              </li>
              <li className="flex items-start gap-2">
                <span className="text-verde-sage">✓</span>
                Comunitate sigură pentru 4 săptămâni
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ==================== FORM SECTION ==================== */
const FormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    motivation: "",
    confirmed: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.confirmed) {
      setErrorMessage("Te rugăm să confirmi participarea la întreaga serie.");
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
          city: formData.city,
          motivation: formData.motivation,
          source: "workshopuri-martie",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        city: "",
        motivation: "",
        confirmed: false,
      });
    } catch {
      setSubmitStatus("error");
      setErrorMessage("A apărut o eroare. Te rugăm să încerci din nou.");
    } finally {
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
            Înscrie-te Acum
          </motion.h2>
          <motion.p
            className="font-montserrat text-gri-mediu"
            variants={fadeInUp}
          >
            Mă înscriu în seria completă: Martie, Luna Clarității
          </motion.p>
          <motion.div className="h-0.5 bg-auriu mx-auto mt-6" variants={lineExpand} />
        </motion.div>

        {submitStatus === "success" ? (
          <motion.div
            className="bg-white rounded-card p-8 border-2 border-verde-sage text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-verde-sage text-5xl mb-4">✓</div>
            <h3 className="font-cormorant text-2xl text-charcoal mb-4">
              Bine ai venit în Luna Clarității!
            </h3>
            <p className="font-montserrat text-gri-mediu mb-4">
              Îți mulțumesc pentru înscrierea în seria de workshopuri.
              Vei primi un email de confirmare cu toate detaliile.
            </p>
            <p className="font-montserrat text-sm text-auriu">
              Notează-ți în calendar: 5, 12, 19, 26 Martie • 19:00-20:30
            </p>
          </motion.div>
        ) : (
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

              <div>
                <label className="block font-montserrat text-sm text-charcoal mb-2">
                  Oraș
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 border border-gri-deschis rounded-lg font-montserrat text-sm focus:outline-none focus:border-auriu transition-colors"
                  placeholder="Orașul tău"
                />
              </div>

              <div>
                <label className="block font-montserrat text-sm text-charcoal mb-2">
                  Ce te motivează să participi la această serie?
                </label>
                <textarea
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gri-deschis rounded-lg font-montserrat text-sm focus:outline-none focus:border-auriu transition-colors resize-none"
                  placeholder="Spune-ne pe scurt ce te-a adus aici..."
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
                  <span className="text-charcoal font-medium">Confirm că îmi asum participarea la întreaga serie</span>
                  <br />
                  (4 workshopuri: 5, 12, 19, 26 Martie)
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
                {isSubmitting ? "Se procesează..." : "CONFIRM ÎNSCRIEREA"}
              </motion.button>

              <p className="font-montserrat text-xs text-gri-mediu text-center">
                Locuri limitate: Maxim 50 de participante
                <br />
                Înscrierile se închid pe 3 Martie
              </p>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
};

/* ==================== MESSAGE SECTION ==================== */
const MessageSection = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <SparkleParticles count={12} intensity="subtle" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          className="bg-crem rounded-card p-6 md:p-10 border border-gri-deschis"
        >
          <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-6 text-center">
            Un Mesaj de la Olimpia
          </h2>

          <div className="space-y-4 font-montserrat text-gri-mediu italic text-center leading-relaxed">
            <p>&ldquo;Martie este despre alegere.</p>
            <p>Nu despre informație. Nu despre motivație temporară.</p>
            <p>Despre alegerea de a te opri din reacție și a începe să acționezi din claritate.</p>
            <p>Această serie nu îți va rezolva toate problemele în 4 săptămâni. Dar îți va arăta cu claritate ce te ține pe loc și ce poți face concret.</p>
            <p>Dacă ești dispusă să fii onestă cu tine și să te prezinți pentru toate cele 4 întâlniri sunt aici să te ghidez.</p>
            <p className="text-auriu">Ne vedem în Martie.&rdquo;</p>
          </div>

          <p className="font-montserrat text-charcoal font-medium text-center mt-6">
            - Olimpia Moldoveanu
          </p>
        </motion.div>
      </div>
    </section>
  );
};

/* ==================== FAQ SECTION ==================== */
const FAQSection = () => {
  const faqs = [
    {
      question: "Trebuie să particip la toate cele 4 workshopuri?",
      answer: "Da. Seria este construită progresiv fiecare workshop construiește pe cel anterior. Dacă participi doar la unul sau două, nu vei primi valoarea completă a procesului. De aceea înscrierea este pentru seria completă, nu pentru workshopuri separate.",
    },
    {
      question: "Vor fi înregistrări disponibile?",
      answer: "Nu. Prezența live este esențială pentru proces. Workshopurile nu sunt \"conținut de consumat\" sunt experiențe interactive. Dacă nu poți participa live, te rugăm să nu te înscrii. Respectăm angajamentul tău și al celorlalte participante.",
    },
    {
      question: "Este cu adevărat gratuit?",
      answer: "Da. Seria completă este gratuită. Nu există costuri ascunse, nu vei fi presată să cumperi nimic în timpul workshopurilor. La final, dacă simți că procesul te-a ajutat și vrei să continui cu programul complet de 36 de săptămâni, îți vom prezenta opțiunea dar fără nicio presiune.",
    },
    {
      question: "Trebuie să activez camera în timpul workshopurilor?",
      answer: "Nu este obligatoriu, dar este recomandat pentru integrare maximă. Creăm un spațiu sigur și confidențial. Dacă te simți confortabil, activarea camerei te ajută să fii prezentă și să beneficiezi complet de proces.",
    },
    {
      question: "Pot participa dacă am făcut deja dezvoltare personală?",
      answer: "Da. De fapt, seria este construită tocmai pentru femei care au parcurs deja cursuri, au citit cărți, au acumulat informație dar simt că lipsește integrarea. Nu îți vom spune lucruri pe care nu le știi deja. Îți vom arăta cum să le aplici cu adevărat.",
    },
    {
      question: "La ce oră sunt workshopurile?",
      answer: "Toate cele 4 workshopuri sunt programate 19:00-20:30 (ora României). Am ales această oră pentru a permite participarea femeilor cu job și familie după ce s-au terminat responsabilitățile zilei.",
    },
  ];

  return (
    <section className="section-padding bg-crem relative overflow-hidden">
      <SparkleParticles count={12} intensity="subtle" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.h2
            className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4"
            variants={fadeInUp}
          >
            Întrebări Frecvente
          </motion.h2>
          <motion.div className="h-0.5 bg-auriu mx-auto mt-6" variants={lineExpand} />
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-card overflow-hidden border border-gri-deschis"
              variants={staggerChild}
            >
              <div className="p-5 sm:p-6">
                <h3 className="font-cormorant text-xl text-charcoal mb-3">{faq.question}</h3>
                <p className="font-montserrat text-sm text-gri-mediu leading-relaxed">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ==================== FINAL CTA SECTION ==================== */
const FinalCTASection = ({ onScrollToForm }: { onScrollToForm: () => void }) => {
  return (
    <section className="section-padding bg-charcoal text-white relative overflow-hidden">
      <SparkleParticles
        count={20}
        intensity="bright"
        colors={["#D4AF6A", "#D4AF6A", "#E5E5E5"]}
      />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer(0.15)}
        >
          <motion.h2
            className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-crem mb-6"
            variants={fadeInUp}
          >
            Această Serie Este Pentru Doamnele Care Aleg Responsabilitatea și Consecvența.
          </motion.h2>

          <motion.p
            className="font-montserrat text-gri-mediu mb-8"
            variants={fadeInUp}
          >
            Dacă simți că este pentru tine hai cu noi în Martie.
          </motion.p>

          <motion.button
            onClick={onScrollToForm}
            className="btn-primary text-base px-10 py-4"
            variants={fadeInUp}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Mă înscriu în seria completă
          </motion.button>

          <motion.div className="mt-8 space-y-2" variants={fadeInUp}>
            <p className="font-montserrat text-sm text-gri-mediu">
              Locuri limitate: Maxim 50 de participante
            </p>
            <p className="font-montserrat text-sm text-gri-mediu">
              Înscrierile se închid pe 3 Martie (cu 48h înainte de primul workshop)
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* ==================== FOOTER ==================== */
const WorkshopFooter = () => {
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
        <p className="font-montserrat text-sm text-gri-mediu">
          © {new Date().getFullYear()} Olimpia Moldoveanu. Toate drepturile rezervate.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <Link
            href="/confidentialitate"
            className="font-montserrat text-xs text-gri-mediu hover:text-auriu transition-colors"
          >
            Confidențialitate
          </Link>
          <Link
            href="/termeni"
            className="font-montserrat text-xs text-gri-mediu hover:text-auriu transition-colors"
          >
            Termeni
          </Link>
          <Link
            href="/gdpr"
            className="font-montserrat text-xs text-gri-mediu hover:text-auriu transition-colors"
          >
            GDPR
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default WorkshopuriMartieLanding;
