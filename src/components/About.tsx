"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerChild,
  viewportConfig,
} from "@/lib/animations";
import SparkleParticles from "@/components/ui/SparkleParticles";

const About = () => {
  const credentials = [
    {
      icon: "📚",
      label: "Experiență",
      value: "25+ ani în domeniul economic, 5+ ani în coaching transformațional",
    },
    {
      icon: "🎓",
      label: "Certificări",
      value:
        "Coach certificat prin Legile Universale, Practician Heart Healing, Facilitator Mastermind",
    },
    {
      icon: "💜",
      label: "Specializări",
      value:
        "Metoda IMPACT, eliberare emoțională, aliniere interioară, manifestare conștientă",
    },
    {
      icon: "✨",
      label: "Abordare",
      value: "Procese clare și cadre sigure de creștere pentru transformare reală",
    },
  ];

  return (
    <section id="despre" className="section-padding bg-crem relative overflow-hidden">
      {/* Sparkle Particles */}
      <SparkleParticles count={18} intensity="subtle" />

      <div className="max-w-7xl mx-auto relative" style={{ zIndex: 2 }}>
        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-center">
          {/* Image Area - 40% */}
          <motion.div
            className="lg:col-span-2 order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInLeft}
          >
            <div className="relative">
              {/* Decorative Background */}
              <div className="absolute -inset-4 bg-roz-pudrat/20 rounded-3xl -rotate-3"></div>

              {/* Image */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-card">
                <Image
                  src="/olimpia-moldoveanu.jpg"
                  alt="Olimpia Moldoveanu - Coach Transformator prin Legile Universale"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>

              {/* Floating Accent */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-20 h-20 bg-verde-sage/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Text Content - 60% */}
          <motion.div
            className="lg:col-span-3 order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInRight}
          >
            {/* Section Title */}
            <h2 className="font-cormorant text-h2-mobile md:text-h2 text-charcoal mb-2">
              Bună, sunt Olimpia Moldoveanu
            </h2>
            <p className="font-montserrat text-base sm:text-lg text-auriu mb-5 sm:mb-6 md:mb-8">
              Coaching Transformator prin Legile Universale
            </p>

            {/* Story */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6 font-montserrat text-gri-mediu leading-relaxed mb-6 sm:mb-8 md:mb-10">
              <p>
                Sunt o femeie care, la 39 de ani, a avut curajul să își schimbe direcția vieții.
              </p>

              <p>
                Am lucrat în domeniul economic, am trăit responsabilitatea și presiunea.
                Am crezut mult timp că valoarea se construiește prin efort continuu și sacrificiu.
                Până într-un moment în care am înțeles că, înainte de orice realizare, este nevoie de <span className="text-charcoal font-medium">aliniere interioară</span>.
              </p>

              <p>
                Am ales reconversia profesională. Am ales să învăț și să integrez.
                Am ales să mă așez pe mine pe primul loc.
              </p>

              <p>
                De atunci, am lucrat cu sute de femei în sesiuni individuale și programe de grup.
                Am văzut frici, blocaje, dar și curaj, asumare și transformare reală.
                <span className="text-charcoal font-medium"> Metoda IMPACT</span> s-a născut din această experiență trăită, nu din teorie, ci din nevoia de structură și coerență.
              </p>

              <p>
                Astăzi, la 64 de ani, construiesc procese clare și cadre sigure de creștere.
                Lucrez cu doamne pregătite să își asume responsabilitatea pentru viața lor și să manifeste conștient ceea ce își doresc.
              </p>

              <p className="text-charcoal font-medium italic">
                Pentru că transformarea reală începe în interior și continuă prin acțiuni asumate.
              </p>
            </div>

            {/* Credentials Box */}
            <motion.div
              className="bg-white rounded-card p-5 sm:p-6 md:p-8 border border-gri-deschis"
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={fadeInUp}
            >
              <motion.div
                className="grid sm:grid-cols-2 gap-4 sm:gap-6"
                variants={staggerContainer(0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
              >
                {credentials.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-4"
                    variants={staggerChild}
                  >
                    <span className="text-xl sm:text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-montserrat font-medium text-charcoal mb-1">
                        {item.label}
                      </p>
                      <p className="font-montserrat text-sm text-gri-mediu">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
