"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  lineExpand,
  staggerContainer,
  viewportConfig,
  EASE,
  DURATION,
} from "@/lib/animations";

const Process = () => {
  const steps = [
    {
      number: "01",
      name: "ELIBERARE",
      weeks: "Săptămâni 1-12",
      icon: "🌊",
      description:
        "Identificăm și eliberăm fricile, blocajele emoționale, convingerile limitative. Lucrăm cu vinovăția, rușinea, frica de greșeală. Înveți să fii blândă cu tine.",
      details:
        "Exercițiul principal se face în cadrul sesiunii (nu teme acasă!). Sesiuni de grup, meditații ghidate, suport în grup WhatsApp. Prima sesiune 1:1 cu Olimpia (săptămâna 12).",
      bgColor: "bg-roz-pudrat/20",
    },
    {
      number: "02",
      name: "ALINIERE",
      weeks: "Săptămâni 13-24",
      icon: "🧭",
      description:
        "Reconstruim relația cu tine. Descoperi ce contează cu adevărat pentru tine, care sunt valorile tale, ce vrei să manifești. Claritate și direcție.",
      details:
        "Lucru profund cu identitatea, valorile, viziunea. Pași clari pentru aliniere. A doua sesiune 1:1 cu Olimpia (săptămâna 24).",
      bgColor: "bg-verde-sage/20",
    },
    {
      number: "03",
      name: "MANIFESTARE",
      weeks: "Săptămâni 25-36",
      icon: "✨",
      description:
        "Transformi claritatea în acțiuni concrete. Manifești conștient viața pe care ți-o dorești: în relații, în carieră, în bani, în pace interioară.",
      details:
        "Acțiuni practice asistate, integrare profundă, manifestare conștientă prin Legile Universale. A treia sesiune 1:1 cu Olimpia (săptămâna 36). Îți construiești viața aliniată și o conduci din putere, nu din frică.",
      bgColor: "bg-auriu/15",
    },
  ];

  const stepVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: DURATION.normal,
        ease: EASE,
        delay: i * 0.25,
      },
    }),
  };

  const arrowVariant = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        duration: DURATION.fast,
        ease: EASE,
        delay: i * 0.25 + 0.3,
      },
    }),
  };

  return (
    <section id="proces" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
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
            Drumul transformării tale
          </motion.h2>
          <motion.p
            className="font-montserrat text-gri-mediu max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Un proces clar, în 3 etape, ghidat pas cu pas
          </motion.p>
          <motion.div
            className="h-0.5 bg-auriu mx-auto mt-6"
            variants={lineExpand}
          />
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Steps Grid */}
          <motion.div
            className="grid lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 relative z-10"
            variants={staggerContainer(0.25)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <motion.div
                  className={`${step.bgColor} rounded-card p-5 sm:p-6 md:p-8 h-full border border-transparent hover:border-auriu/30 transition-all duration-300`}
                  custom={index}
                  variants={stepVariant}
                >
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <span className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-auriu/40">
                      {step.number}
                    </span>
                    <span className="text-2xl sm:text-3xl md:text-4xl">{step.icon}</span>
                  </div>

                  {/* Step Name */}
                  <h3 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-2">
                    {step.name}
                  </h3>

                  {/* Weeks */}
                  <p className="font-montserrat text-sm text-auriu mb-6">
                    {step.weeks}
                  </p>

                  {/* Description */}
                  <p className="font-montserrat text-gri-mediu leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Details Box */}
                  <div className="bg-white/60 rounded-lg p-4">
                    <p className="font-montserrat text-sm text-charcoal">
                      <span className="font-medium">Ce se întâmplă:</span>{" "}
                      <span className="text-gri-mediu">{step.details}</span>
                    </p>
                  </div>
                </motion.div>

                {/* Arrow Connector (Desktop) */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:flex absolute top-1/2 -right-4 w-8 h-8 bg-auriu rounded-full items-center justify-center -translate-y-1/2 z-20"
                    custom={index}
                    variants={arrowVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.div>
                )}

                {/* Arrow Connector (Mobile) */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="lg:hidden flex justify-center my-2 sm:my-4"
                    custom={index}
                    variants={arrowVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                  >
                    <div className="w-8 h-8 bg-auriu rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white rotate-90"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Validation Text */}
        <motion.div
          className="text-center mt-10 sm:mt-12 md:mt-16 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
        >
          <p className="font-montserrat text-base sm:text-lg text-gri-mediu italic leading-relaxed">
            „Poți veni și doar cu «nu mai pot». E de ajuns ca să începem. Nu
            trebuie să fii perfectă, trebuie doar să fii dispusă să încerci."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
