"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  lineExpand,
  staggerContainer,
  staggerChild,
  viewportConfig,
  EASE,
} from "@/lib/animations";

const Problems = () => {
  const problemCards = [
    {
      title: "Anxietate și frică constantă",
      description:
        "Mintea nu se oprește din gândit. Noaptea te trezești cu scenarii negative. Simți un nod în piept fără motiv aparent.",
      icon: (
        <svg
          className="w-8 h-8 text-auriu"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      title: "Oboseală emoțională și burnout",
      description:
        "Ai dat tot ce ai avut pentru alții și acum simți că nu mai ai nimic pentru tine. Ești epuizată, dar nu poți să te oprești.",
      icon: (
        <svg
          className="w-8 h-8 text-auriu"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Relații reci și distanță emoțională",
      description:
        "Partenerul tău e lângă tine, dar te simți singură. Copiii cresc și tu rămâi cu golul interior. Nu mai simți conectare.",
      icon: (
        <svg
          className="w-8 h-8 text-auriu"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Lipsă de claritate și direcție",
      description:
        "Știi că poți mai mult, dar nu știi ce și cum. Vrei să schimbi ceva, dar nu știi de unde să începi. Mi-e frică să nu fie prea târziu.",
      icon: (
        <svg
          className="w-8 h-8 text-auriu"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="probleme" className="section-padding bg-white">
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
            Dacă simți asta, te înțeleg
          </motion.h2>
          <motion.div
            className="h-0.5 bg-auriu mx-auto"
            variants={lineExpand}
          />
        </motion.div>

        {/* Problem Cards Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {problemCards.map((card, index) => (
            <motion.div
              key={index}
              className="card group hover:border-roz-pudrat/50"
              variants={staggerChild}
              whileHover={{
                y: -4,
                boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
                transition: { duration: 0.3, ease: EASE },
              }}
            >
              {/* Decorative Line */}
              <div className="w-12 h-0.5 bg-auriu mb-4 sm:mb-6 group-hover:w-20 transition-all duration-300"></div>

              {/* Icon */}
              <div className="mb-4">{card.icon}</div>

              {/* Title */}
              <h3 className="font-cormorant text-xl sm:text-2xl text-charcoal mb-3 sm:mb-4 font-medium">
                {card.title}
              </h3>

              {/* Description */}
              <p className="font-montserrat text-gri-mediu leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Validation Text */}
        <motion.div
          className="text-center mt-10 sm:mt-12 md:mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
        >
          <p className="font-montserrat text-base sm:text-lg text-gri-mediu italic">
            „E în regulă dacă nu știi exact ce simți. De aici începem."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Problems;
