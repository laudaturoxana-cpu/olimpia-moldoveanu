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
import SparkleParticles from "@/components/ui/SparkleParticles";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Mi-am dorit un partener și un nou loc de muncă, și le-am obținut. Am schimbat perspectiva de a vedea viața prin tot ce am lucrat în program. Viața mea este total diferită față de ce a fost. Un singur cuvânt pentru acest program: TRANSFORMATOR.",
      name: "Participantă Ediția I",
      context: "Program IMPACT - Fundament (36 săptămâni)",
      rating: "Transformare: 10/10",
    },
    {
      text: "Am intrat în program cu probleme în relație, probleme financiare și lipsă de claritate. Aplicând tehnicile am ajuns la claritate, relațiile s-au îmbunătățit și aspectul financiar la fel. Cel mai important rezultat: mi-am crescut încrederea în mine și asta îmi permite să acționez dintr-o poziție de putere în loc de poziția de victimă.",
      name: "Andreea",
      context: "Program IMPACT - Fundament (36 săptămâni)",
      rating: "Transformare: 7-8/10",
    },
    {
      text: "Am intrat în program cu lipsă de curaj și procrastinare. Am ieșit mai sigură pe mine, mai încrezătoare în forțele proprii și am început să-mi exprim opinia personală fără vinovăție. Am învățat să-mi ascult vocea interioară. Investiția a fost mică față de valoarea primită.",
      name: "Participantă Ediția I",
      context: "Program IMPACT - Fundament (36 săptămâni)",
      rating: "Transformare: 8/10",
    },
    {
      text: "Când am intrat în program, EU nu existam, reacționam la orice. După 36 de săptămâni am început să acționez și să mă văd, puțin câte puțin. Mi-am schimbat energia și realitatea mea a început să se schimbe. Așa începe schimbarea ta.",
      name: "Participantă Ediția I",
      context: "Program IMPACT - Fundament (36 săptămâni)",
      rating: "",
    },
  ];

  return (
    <section id="testimoniale" className="section-padding bg-crem relative overflow-hidden">
      {/* Sparkle Particles */}
      <SparkleParticles count={15} intensity="subtle" />

      <div className="max-w-7xl mx-auto relative" style={{ zIndex: 2 }}>
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
            Ce spun femeile care au trecut prin Ediția I
          </motion.h2>
          <motion.div
            className="h-0.5 bg-auriu mx-auto"
            variants={lineExpand}
          />
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
          variants={staggerContainer(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-card p-5 sm:p-6 md:p-8 border-l-4 border-auriu shadow-sm"
              variants={staggerChild}
              whileHover={{
                y: -3,
                boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
                transition: { duration: 0.3, ease: EASE },
              }}
            >
              {/* Quote Mark */}
              <div className="mb-4">
                <span className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-auriu/30 leading-none">
                  &ldquo;
                </span>
              </div>

              {/* Testimonial Text */}
              <p className="font-montserrat text-base sm:text-lg text-charcoal italic leading-relaxed mb-4 sm:mb-6">
                {testimonial.text}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                {/* Avatar Placeholder */}
                <div className="w-12 h-12 rounded-full bg-roz-pudrat/30 flex items-center justify-center flex-shrink-0">
                  <span className="font-cormorant text-xl text-charcoal">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>

                <div>
                  <p className="font-montserrat font-medium text-charcoal">
                    {testimonial.name}
                  </p>
                  <p className="font-montserrat text-sm text-gri-mediu">
                    {testimonial.context}
                  </p>
                  {testimonial.rating && (
                    <p className="font-montserrat text-sm text-auriu font-medium">
                      {testimonial.rating}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Section */}
        <motion.div
          className="text-center mt-12 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
        >
          <div className="border-t border-b border-auriu/30 py-8">
            <p className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
              Patru femei. Patru vieți schimbate.
            </p>
            <p className="font-montserrat text-gri-mediu mb-4">
              Toate au spus același lucru, în cuvinte diferite:
            </p>
            <p className="font-cormorant text-xl md:text-2xl text-auriu italic">
              &ldquo;Programul valorează mai mult decât am plătit.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
