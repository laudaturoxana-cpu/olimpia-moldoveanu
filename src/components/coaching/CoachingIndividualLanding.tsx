"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  fadeInUp,
  lineExpand,
  staggerContainer,
  staggerChild,
  viewportConfig,
  EASE,
} from "@/lib/animations";
import SparkleParticles from "@/components/ui/SparkleParticles";

const checkItems = [
  {
    title: "Definirea obiectivului real",
    desc: "Ce vrei cu adevărat, dincolo de presiunea externă",
  },
  {
    title: "Identificarea convingerilor limitative",
    desc: "Ce te ține pe loc fără să îți dai seama",
  },
  {
    title: "Restructurarea limbajului interior",
    desc: "Cum vorbești cu tine și cum asta îți modelează realitatea",
  },
  {
    title: "Analiza tiparelor de autosabotaj",
    desc: "De ce începi și te oprești, de ce amâni sau te retragi",
  },
  {
    title: "Decizii asumate",
    desc: "Nu sfaturi generale, ci pași clari pe care îi iei după sesiune",
  },
  {
    title: "Plan de acțiune clar",
    desc: 'Nu pleci cu "gândește-te", pleci cu "fă asta"',
  },
];

const packages = [
  {
    sessions: "3 sesiuni",
    subtitle: "Clarificare și repoziționare",
    for: "Situații punctuale, decizii clare, recalibrare rapidă",
    duration: "3-6 săptămâni",
  },
  {
    sessions: "5 sesiuni",
    subtitle: "Proces în profunzime",
    for: "Reconversie profesională, relații, schimbări majore de direcție",
    duration: "6-10 săptămâni",
    featured: true,
  },
  {
    sessions: "10-15 sesiuni",
    subtitle: "Proces extins",
    for: "Reconversii majore, transformări pe termen mediu, construcție de fundament nou",
    duration: "3-6 luni",
  },
];

const forYou = [
  "Ai ajuns la un prag și simți că nu mai poți așa",
  "Ai încercat să schimbi singură, dar te învârți în cerc",
  "Vrei claritate reală, nu doar motivație temporară",
  "Ești dispusă să te uiți onest la ce te ține pe loc",
  'Vrei plan concret, nu doar \u201einspirație\u201d',
  "Poți susține un angajament pe termen scurt/mediu",
];

const notForYou = [
  'Cauți soluții instant sau "secrete magice"',
  "Aștepți ca cineva să te salveze fără să te implici activ",
  "Nu ești dispusă să faci schimbări concrete după sesiuni",
  "Vrei doar validare, nu asumare și acțiune",
];

const faqs = [
  {
    q: "Cât costă o sesiune?",
    a: "Prețul variază în funcție de pachetul ales și complexitatea procesului. Îți voi comunica investiția după ce citesc aplicația ta și stabilim dacă este potrivit pentru tine.",
  },
  {
    q: "Pot începe cu o singură sesiune?",
    a: "Da, dar procesul funcționează mai bine în pachete de minimum 3 sesiuni, pentru că transformarea reală necesită timp de integrare. O sesiune unică poate oferi claritate punctuală, dar schimbarea profundă necesită consecvență.",
  },
  {
    q: "Cât durează procesul?",
    a: "Depinde de pachetul ales: 3 sesiuni → 3-6 săptămâni, 5 sesiuni → 6-10 săptămâni, 10-15 sesiuni → 3-6 luni. Frecvența este stabilită împreună, în funcție de ritmul tău.",
  },
  {
    q: "Pot plăti în rate?",
    a: "Da, plata în rate este disponibilă pentru pachetele de 5+ sesiuni. Detaliile le discutăm după ce stabilim că procesul este potrivit pentru tine.",
  },
  {
    q: "Cum se desfășoară sesiunile?",
    a: "Online, pe Zoom, într-un spațiu confidențial și sigur. Sesiunile sunt înregistrate (doar audio) pentru tine, dacă dorești, pentru a revedea procesul.",
  },
  {
    q: "Ce se întâmplă dacă realizez că am nevoie de mai multe sesiuni?",
    a: "Procesul este flexibil. Dacă după 3 sesiuni simți că vrei să continui, extindem pachetul. Dacă după 5 simți că ai nevoie de mai mult timp — construim un plan personalizat.",
  },
  {
    q: "Cum știu dacă sunt pregătită?",
    a: 'Dacă te întrebi asta — probabil ești. Nu trebuie să fii "gata" sau "perfectă". Trebuie doar să fii dispusă să încerci, să te uiți onest și să faci pași, chiar dacă nu știi exact cum.',
  },
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  city: string;
  situation: string;
  triedSoFar: string;
  desiredResult: string;
  ready: string;
  packageType: string;
  gdpr: boolean;
};

export default function CoachingIndividualLanding() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    city: "",
    situation: "",
    triedSoFar: "",
    desiredResult: "",
    ready: "",
    packageType: "",
    gdpr: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    const combinedMessage = `SITUAȚIE: ${formData.situation}\n\nCE AM FĂCUT PÂNĂ ACUM: ${formData.triedSoFar}\n\nREZULTAT DORIT: ${formData.desiredResult}\n\nPREGĂTITĂ: ${formData.ready}\n\nPACHET INTERESAT: ${formData.packageType}`;

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          phone: formData.phone,
          city: formData.city,
          message: combinedMessage,
          source: "coaching-individual",
          service: formData.packageType,
        }),
      });

      if (!response.ok) throw new Error("Failed");

      router.push(`/coaching-individual/multumim?name=${encodeURIComponent(formData.name.split(" ")[0])}`);
    } catch {
      setSubmitError(true);
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    document.getElementById("formular")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-crem">
      {/* Header */}
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
            <span className="block w-full h-px bg-auriu my-1" />
          </Link>
          <Link
            href="/"
            className="font-montserrat text-sm text-gri-mediu hover:text-auriu transition-colors"
          >
            ← Înapoi la site
          </Link>
        </div>
      </motion.header>

      {/* Hero */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #FAF7F5 0%, #F5EEE8 50%, #FAF7F5 100%)",
          }}
        />
        <SparkleParticles count={25} intensity="normal" />

        <div className="max-w-4xl mx-auto px-5 md:px-8 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.15)}
          >
            <motion.p
              className="font-montserrat text-xs tracking-widest text-auriu uppercase mb-4"
              variants={fadeInUp}
            >
              Sesiuni Individuale
            </motion.p>
            <motion.h1
              className="font-cormorant text-3xl md:text-5xl lg:text-6xl text-charcoal mb-4 md:mb-6"
              variants={fadeInUp}
            >
              Claritate. Direcție. Asumare.
            </motion.h1>
            <motion.div
              className="h-0.5 bg-auriu mx-auto mb-8 max-w-xs"
              variants={lineExpand}
            />
            <motion.p
              className="font-cormorant text-xl md:text-2xl text-charcoal italic mb-8"
              variants={fadeInUp}
            >
              Dacă nu mai știi ce e al tău și ce e al altora — hai să clarificăm.
            </motion.p>
            <motion.button
              onClick={scrollToForm}
              className="btn-primary text-base px-8 py-4"
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Aplică Acum
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Intro text */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer(0.1)}
            className="space-y-5 font-montserrat text-gri-mediu text-base leading-relaxed"
          >
            {[
              "Te simți capabilă, dar blocată. Știi că poți mai mult, dar nu știi cum să ajungi acolo. Ai început lucruri și nu le-ai dus până la capăt — nu din lipsă de voință, ci pentru că nu ai avut claritate reală asupra direcției.",
              "Sesiunile individuale 1 la 1 nu sunt consiliere generală.",
              "Sunt un proces ghidat, precis, orientat spre rezultat concret — în care lucrăm personalizat pe situația ta actuală, într-un cadru structurat.",
            ].map((text, i) => (
              <motion.p key={i} variants={staggerChild} className={i === 1 ? "font-semibold text-charcoal" : ""}>
                {text}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ce lucrăm */}
      <section className="py-10 md:py-16 bg-crem">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer(0.1)}
          >
            <motion.h2
              className="font-cormorant text-2xl md:text-4xl text-charcoal text-center mb-3 md:mb-4"
              variants={fadeInUp}
            >
              Ce Lucrăm Concret
            </motion.h2>
            <motion.p
              className="font-montserrat text-gri-mediu text-center mb-6 md:mb-10"
              variants={fadeInUp}
            >
              În fiecare sesiune, procesul este aplicat, nu teoretic:
            </motion.p>
            <motion.div className="h-0.5 bg-auriu mx-auto mb-6 md:mb-10 max-w-xs" variants={lineExpand} />

            <div className="grid md:grid-cols-2 gap-4">
              {checkItems.map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-card p-5 border border-gri-deschis flex items-start gap-4"
                  variants={staggerChild}
                >
                  <span className="text-auriu font-bold text-lg mt-0.5">✓</span>
                  <div>
                    <p className="font-montserrat font-semibold text-charcoal text-sm mb-1">
                      {item.title}
                    </p>
                    <p className="font-montserrat text-gri-mediu text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pachete */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer(0.1)}
          >
            <motion.h2
              className="font-cormorant text-2xl md:text-4xl text-charcoal text-center mb-3 md:mb-4"
              variants={fadeInUp}
            >
              Format și Pachete
            </motion.h2>
            <motion.p
              className="font-montserrat text-gri-mediu text-center mb-6 md:mb-10"
              variants={fadeInUp}
            >
              Sesiune Individuală — 60-90 minute • Online, Zoom
            </motion.p>
            <motion.div className="h-0.5 bg-auriu mx-auto mb-6 md:mb-10 max-w-xs" variants={lineExpand} />

            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg, i) => (
                <motion.div
                  key={i}
                  className={`rounded-card p-6 border-2 flex flex-col ${
                    pkg.featured
                      ? "border-auriu bg-auriu/5 shadow-card"
                      : "border-gri-deschis bg-crem"
                  }`}
                  variants={staggerChild}
                >
                  {pkg.featured && (
                    <span className="font-montserrat text-xs text-auriu font-bold tracking-wider uppercase mb-3 block">
                      Recomandat
                    </span>
                  )}
                  <h3 className="font-cormorant text-2xl text-charcoal mb-1">{pkg.sessions}</h3>
                  <p className="font-montserrat text-sm font-semibold text-charcoal mb-3">
                    {pkg.subtitle}
                  </p>
                  <p className="font-montserrat text-xs text-gri-mediu mb-4 flex-grow">
                    <span className="font-semibold">Pentru:</span> {pkg.for}
                  </p>
                  <p className="font-montserrat text-xs text-auriu font-medium">
                    Durată: {pkg.duration}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="font-montserrat text-sm text-gri-mediu text-center mt-6 italic"
              variants={fadeInUp}
            >
              Numărul de sesiuni este stabilit împreună, în funcție de obiectivul tău și complexitatea procesului.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pentru cine / Nu pentru cine */}
      <section className="py-10 md:py-16 bg-roz-pudrat/20">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-5 md:gap-8">
            {/* Pentru tine */}
            <motion.div
              className="bg-white rounded-card p-5 md:p-7 border-l-4 border-verde-sage"
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={staggerContainer(0.1)}
            >
              <motion.h3
                className="font-cormorant text-2xl text-charcoal mb-6"
                variants={fadeInUp}
              >
                Acestea Sunt Pentru Tine Dacă:
              </motion.h3>
              <div className="space-y-3">
                {forYou.map((item, i) => (
                  <motion.div key={i} className="flex items-start gap-3" variants={staggerChild}>
                    <span className="text-verde-sage font-bold mt-0.5">✓</span>
                    <p className="font-montserrat text-sm text-gri-mediu">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Nu pentru tine */}
            <motion.div
              className="bg-white rounded-card p-5 md:p-7 border-l-4 border-gri-mediu/40"
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={staggerContainer(0.1)}
            >
              <motion.h3
                className="font-cormorant text-2xl text-charcoal mb-6"
                variants={fadeInUp}
              >
                Acestea NU Sunt Pentru Tine Dacă:
              </motion.h3>
              <div className="space-y-3">
                {notForYou.map((item, i) => (
                  <motion.div key={i} className="flex items-start gap-3" variants={staggerChild}>
                    <span className="text-gri-mediu font-bold mt-0.5">✗</span>
                    <p className="font-montserrat text-sm text-gri-mediu">{item}</p>
                  </motion.div>
                ))}
              </div>
              <motion.p
                className="font-montserrat text-xs text-charcoal mt-6 italic"
                variants={fadeInUp}
              >
                Procesul funcționează pe claritate, onestitate și responsabilitate.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rezultatul */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer(0.12)}
          >
            <motion.h2
              className="font-cormorant text-3xl md:text-4xl text-charcoal mb-4"
              variants={fadeInUp}
            >
              Rezultatul
            </motion.h2>
            <motion.div className="h-0.5 bg-auriu mx-auto mb-6 md:mb-10 max-w-xs" variants={lineExpand} />

            <div className="grid md:grid-cols-3 gap-4 mb-6 md:mb-10">
              {[
                { label: "Claritate", desc: "Asupra a ceea ce vrei cu adevărat" },
                { label: "Direcție", desc: "Clară și pași concreți" },
                { label: "Acțiune asumată", desc: "Fără amânare, fără autosabotaj" },
              ].map((r, i) => (
                <motion.div
                  key={i}
                  className="bg-auriu/5 border border-auriu/30 rounded-card p-6"
                  variants={staggerChild}
                >
                  <p className="font-cormorant text-2xl text-charcoal mb-2">{r.label}</p>
                  <p className="font-montserrat text-sm text-gri-mediu">{r.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-roz-pudrat/20 border-l-4 border-auriu rounded-card p-5 md:p-7 text-left"
              variants={fadeInUp}
            >
              <p className="font-montserrat text-gri-mediu">
                Nu îți promit că viața ta va fi „perfectă".
              </p>
              <p className="font-cormorant text-xl text-charcoal italic mt-2">
                Îți promit că vei avea harta — și curajul să mergi pe ea.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Formular */}
      <section id="formular" className="py-10 md:py-16 bg-crem">
        <div className="max-w-2xl mx-auto px-5 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer(0.1)}
          >
            <motion.h2
              className="font-cormorant text-2xl md:text-4xl text-charcoal text-center mb-3 md:mb-4"
              variants={fadeInUp}
            >
              Aplică pentru Sesiune Individuală 1 la 1
            </motion.h2>
            <motion.p
              className="font-montserrat text-gri-mediu text-center mb-6 md:mb-10"
              variants={fadeInUp}
            >
              Completează formularul de mai jos. Îți răspund personal în maxim 48 de ore.
            </motion.p>
            <motion.div className="h-0.5 bg-auriu mx-auto mb-6 md:mb-10 max-w-xs" variants={lineExpand} />

            <motion.div
              className="bg-white rounded-card p-7 md:p-10 border border-gri-deschis"
              variants={fadeInUp}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nume */}
                <div>
                  <label className="block font-montserrat text-sm font-medium text-charcoal mb-2">
                    Nume complet <span className="text-auriu">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Cum te cheamă?"
                    className="font-montserrat"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-montserrat text-sm font-medium text-charcoal mb-2">
                    Email <span className="text-auriu">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Unde îți trimit răspunsul?"
                    className="font-montserrat"
                  />
                </div>

                {/* Telefon */}
                <div>
                  <label className="block font-montserrat text-sm font-medium text-charcoal mb-2">
                    Telefon <span className="text-auriu">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+40..."
                    className="font-montserrat"
                  />
                </div>

                {/* Oraș */}
                <div>
                  <label className="block font-montserrat text-sm font-medium text-charcoal mb-2">
                    Oraș
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Opțional"
                    className="font-montserrat"
                  />
                </div>

                {/* Situație */}
                <div>
                  <label className="block font-montserrat text-sm font-medium text-charcoal mb-2">
                    Care este situația concretă pentru care îți dorești această sesiune?{" "}
                    <span className="text-auriu">*</span>
                  </label>
                  <p className="font-montserrat text-xs text-gri-mediu mb-2 italic">
                    Descriere scurtă a contextului actual
                  </p>
                  <textarea
                    name="situation"
                    value={formData.situation}
                    onChange={handleChange}
                    required
                    rows={4}
                    maxLength={500}
                    placeholder="Spune-mi pe scurt unde te afli acum..."
                    className="font-montserrat resize-none"
                  />
                </div>

                {/* Ce ai făcut */}
                <div>
                  <label className="block font-montserrat text-sm font-medium text-charcoal mb-2">
                    Ce ai făcut până acum pentru a rezolva această situație?{" "}
                    <span className="text-auriu">*</span>
                  </label>
                  <textarea
                    name="triedSoFar"
                    value={formData.triedSoFar}
                    onChange={handleChange}
                    required
                    rows={3}
                    maxLength={300}
                    placeholder="Ce ai încercat deja..."
                    className="font-montserrat resize-none"
                  />
                </div>

                {/* Rezultat dorit */}
                <div>
                  <label className="block font-montserrat text-sm font-medium text-charcoal mb-2">
                    Ce rezultat clar îți dorești să obții în următoarele 3-6 luni?{" "}
                    <span className="text-auriu">*</span>
                  </label>
                  <textarea
                    name="desiredResult"
                    value={formData.desiredResult}
                    onChange={handleChange}
                    required
                    rows={3}
                    maxLength={300}
                    placeholder="Descrie ce îți dorești concret..."
                    className="font-montserrat resize-none"
                  />
                </div>

                {/* Pregătită */}
                <div>
                  <label className="block font-montserrat text-sm font-medium text-charcoal mb-3">
                    Ești pregătită să îți asumi schimbări concrete și acțiuni clare după sesiune?{" "}
                    <span className="text-auriu">*</span>
                  </label>
                  <div className="space-y-2">
                    {["Da", "Încă reflectez"].map((opt) => (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="ready"
                          value={opt}
                          checked={formData.ready === opt}
                          onChange={handleChange}
                          required
                          className="accent-auriu"
                        />
                        <span className="font-montserrat text-sm text-charcoal">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Tip proces */}
                <div>
                  <label className="block font-montserrat text-sm font-medium text-charcoal mb-3">
                    Ce tip de proces te interesează?{" "}
                    <span className="text-auriu">*</span>
                  </label>
                  <div className="space-y-2">
                    {[
                      "Sesiune unică",
                      "Pachet 3 sesiuni",
                      "Pachet 5 sesiuni",
                      "Proces extins (10+ sesiuni)",
                    ].map((opt) => (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="packageType"
                          value={opt}
                          checked={formData.packageType === opt}
                          onChange={handleChange}
                          required
                          className="accent-auriu"
                        />
                        <span className="font-montserrat text-sm text-charcoal">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* GDPR */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="gdpr"
                      checked={formData.gdpr}
                      onChange={handleChange}
                      required
                      className="mt-1 accent-auriu"
                    />
                    <span className="font-montserrat text-sm text-gri-mediu">
                      Accept{" "}
                      <Link href="/confidentialitate" className="text-auriu hover:underline">
                        politica de confidențialitate
                      </Link>{" "}
                      și sunt de acord ca datele mele să fie procesate pentru a primi răspuns la această aplicație.{" "}
                      <span className="text-auriu">*</span>
                    </span>
                  </label>
                </div>

                {/* Error */}
                <AnimatePresence>
                  {submitError && (
                    <motion.div
                      className="p-4 bg-roz-pudrat/30 rounded-lg text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      <p className="font-montserrat text-sm text-charcoal">
                        Ups, ceva nu a funcționat. Te rog încearcă din nou sau scrie-mi la{" "}
                        <a href="mailto:contact@olimpiamoldoveanu.ro" className="text-auriu hover:underline">
                          contact@olimpiamoldoveanu.ro
                        </a>
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary flex items-center justify-center gap-2 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : undefined}
                  whileTap={!isSubmitting ? { scale: 0.98 } : undefined}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Se trimite...
                    </>
                  ) : (
                    "Trimite Aplicația"
                  )}
                </motion.button>

                <p className="font-montserrat text-xs text-gri-mediu italic text-center">
                  Îți răspund personal în maxim 48 de ore. Toate informațiile sunt confidențiale.
                </p>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer(0.08)}
          >
            <motion.h2
              className="font-cormorant text-2xl md:text-4xl text-charcoal text-center mb-3 md:mb-4"
              variants={fadeInUp}
            >
              Întrebări Frecvente
            </motion.h2>
            <motion.div className="h-0.5 bg-auriu mx-auto mb-6 md:mb-10 max-w-xs" variants={lineExpand} />

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  className="border border-gri-deschis rounded-card overflow-hidden"
                  variants={staggerChild}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
                  >
                    <span className="font-montserrat text-sm font-medium text-charcoal">
                      {faq.q}
                    </span>
                    <span className={`text-auriu transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}>
                      ▾
                    </span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 font-montserrat text-sm text-gri-mediu leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <motion.div className="text-center mt-8 md:mt-12" variants={fadeInUp}>
              <p className="font-cormorant text-xl text-charcoal italic mb-6">
                „Dacă simți că este momentul — aplică acum."
              </p>
              <motion.button
                onClick={scrollToForm}
                className="btn-primary px-8 py-4"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Aplică Acum
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-charcoal text-center">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p className="font-cormorant text-white text-lg tracking-widest mb-2">
            OLIMPIA MOLDOVEANU
          </p>
          <p className="font-montserrat text-white/60 text-sm">
            Coaching Transformator prin Legile Universale
          </p>
        </div>
      </footer>
    </main>
  );
}
