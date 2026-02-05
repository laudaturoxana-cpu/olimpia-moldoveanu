"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeInUp,
  lineExpand,
  staggerContainer,
  staggerChild,
  viewportConfig,
  EASE,
} from "@/lib/animations";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Este pentru mine?",
      answer:
        'Programul este pentru tine dacă simți anxietate, frici, oboseală emoțională sau lipsă de claritate. Dacă ai ajuns la un „prag" și simți că vrei altceva, dar nu știi de unde să începi — e pentru tine. Nu trebuie să fii „pregătită perfect" — trebuie doar să fii dispusă să încerci, să cazi, să te ridici — și eu te susțin în tot procesul.',
    },
    {
      question: "Cât durează până văd rezultate?",
      answer:
        "Unele femei simt ușurare după primele 2-3 sesiuni. Altele au nevoie de câteva săptămâni. Transformarea profundă, cea care rămâne, ia timp. Nu îți promit schimbare în 24 de ore. Îți promit un proces real, cu pași clari, în ritmul potrivit pentru tine. De obicei, după primele 12 săptămâni (etapa Eliberare), simți o diferență clară.",
    },
    {
      question: "Dacă nu am timp?",
      answer:
        "Sesiunile de grup sunt joi seara 19:00-21:00 (când ai terminat cu responsabilitățile zilei). Exercițiile zilnice sunt 5-15 minute. Nu îți cer 3 ore pe zi. Îți cer consistență în lucruri mici. Și dacă lipsești o sesiune, ai înregistrarea + grup WhatsApp pentru întrebări.",
    },
    {
      question: "Este prea spiritual pentru mine?",
      answer:
        'Lucrez cu Legile Universale, dar într-un mod aplicat, concret. Nu e „vorbărie în aer". Sunt exerciții clare, pași practici, rezultate măsurabile. Spiritualitate cu picioarele pe pământ. Dacă ai citit vreodată despre legi spirituale și ai simțit că e frumos dar nu știi cum să aplici — asta e pentru tine.',
    },
    {
      question: "Pot plăti în rate?",
      answer:
        "Da, programul principal poate fi plătit în 6 sau 9 rate, fără dobândă. Vreau ca investiția în tine să fie accesibilă, nu un stres financiar. Discutăm detaliile în call-ul de programare.",
    },
    {
      question: "Ce se întâmplă dacă nu mă țin?",
      answer:
        "E normal să ai zile când nu faci exercițiile. E normal să ai momente când vrei să renunți. Face parte din proces. Diferența e că nu ești singură — ai grup, ai pe mine, ai structură. Iar dacă dispari complet, te sun sau îți scriu să văd ce s-a întâmplat. Nu te las să cazi fără să știu.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-crem">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.h2
            className="font-cormorant text-h2-mobile md:text-h2 text-charcoal mb-4"
            variants={fadeInUp}
          >
            Întrebări frecvente
          </motion.h2>
          <motion.div
            className="h-0.5 bg-auriu mx-auto"
            variants={lineExpand}
          />
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="space-y-3 sm:space-y-4"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-card border transition-all duration-300 ${
                openIndex === index
                  ? "border-l-4 border-l-auriu border-t-gri-deschis border-r-gri-deschis border-b-gri-deschis shadow-sm"
                  : "border-gri-deschis hover:border-l-4 hover:border-l-auriu/50"
              }`}
              variants={staggerChild}
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left"
              >
                <span className="font-montserrat font-medium text-base sm:text-lg text-charcoal pr-4">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full border border-auriu flex items-center justify-center transition-all duration-300 ${
                    openIndex === index ? "bg-auriu" : "bg-transparent"
                  }`}
                >
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      openIndex === index ? "text-white rotate-180" : "text-auriu"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>

              {/* Answer Content with AnimatePresence */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                      <p className="font-montserrat text-gri-mediu leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
