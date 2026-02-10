"use client";

import { motion } from "framer-motion";
import { EASE, DURATION } from "@/lib/animations";
import SparkleParticles from "@/components/ui/SparkleParticles";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const trustBadges = [
    { icon: "✓", text: "Liniște în minte, nu doar inspirație" },
    { icon: "✓", text: "Suport constant — nu te las singură" },
    { icon: "✓", text: "Structură clară — știi ce urmează" },
    { icon: "✓", text: "Fără presiune — în ritmul tău" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FAF7F5 0%, #FCF5F5 100%)",
      }}
    >
      {/* Sparkle Particles */}
      <SparkleParticles count={25} intensity="normal" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16 w-full">
        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-center">
          {/* Text Content - 60% */}
          <div className="lg:col-span-3 space-y-5 sm:space-y-6 md:space-y-8 text-center md:text-left">
            {/* Main Heading */}
            <motion.h1
              className="font-cormorant text-h1-mobile md:text-h1 text-charcoal"
              style={{ lineHeight: "1.4" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.normal, ease: EASE, delay: 0.2 }}
            >
              Eliberează-te de ce nu-ți mai aparține
              <br />
              <span className="text-auriu">Creează-ți realitatea din interior</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              className="font-montserrat text-body-mobile md:text-body text-gri-mediu max-w-2xl mx-auto md:mx-0"
              style={{ lineHeight: "1.8" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.normal, ease: EASE, delay: 0.5 }}
            >
              <p className="mb-4">
                Ghidez femeile să se elibereze de încărcătura emoțională și să-și
                transforme conștiința, fără să caute validare în exterior, astfel
                încât să-și creeze realitatea din energie, aliniere și iubire de sine.
              </p>
              <p>
                Fără promisiuni goale, fără presiune. Doar transformare autentică,
                în ritmul tău.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.normal, ease: EASE, delay: 0.7 }}
            >
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="btn-primary text-base"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Află cum te pot ajuta
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="btn-secondary text-base"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Descarcă ghidul gratuit
              </motion.button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              className="grid grid-cols-1 gap-2 sm:gap-3 pt-4 sm:pt-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.9 },
                },
              }}
            >
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 text-gri-mediu justify-center md:justify-start"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: DURATION.fast, ease: EASE },
                    },
                  }}
                >
                  <span className="text-verde-sage font-bold text-lg">{badge.icon}</span>
                  <span className="font-montserrat text-sm">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Visual Element - 40% */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end hidden md:flex">
            <div className="relative w-full max-w-md">
              {/* Decorative Circle Background */}
              <motion.div
                className="absolute inset-0 bg-roz-pudrat/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.4, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Main Decorative Element */}
              <div className="relative aspect-square flex items-center justify-center">
                {/* Outer Circle */}
                <motion.div
                  className="absolute w-full h-full rounded-full border border-auriu/20"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
                >
                  <motion.div
                    className="w-full h-full"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>

                {/* Middle Circle */}
                <motion.div
                  className="absolute w-4/5 h-4/5 rounded-full border border-roz-pudrat/40"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
                />
                <motion.div
                  className="absolute w-4/5 h-4/5"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />

                {/* Inner Circle */}
                <motion.div
                  className="absolute w-3/5 h-3/5 rounded-full bg-gradient-to-br from-roz-pudrat/20 to-transparent"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
                />

                {/* Center Element */}
                <motion.div
                  className="relative z-10 text-center p-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: DURATION.slow, ease: EASE, delay: 1.0 }}
                >
                  <motion.div
                    className="w-1 h-16 bg-auriu mx-auto mb-4"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: DURATION.slow, ease: EASE, delay: 1.1 }}
                    style={{ transformOrigin: "top" }}
                  />
                  <p className="font-cormorant text-2xl md:text-3xl text-charcoal italic leading-relaxed">
                    „Te țin de mână
                    <br />
                    și te duc înapoi
                    <br />
                    la tine"
                  </p>
                  <motion.div
                    className="w-1 h-16 bg-auriu mx-auto mt-4"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: DURATION.slow, ease: EASE, delay: 1.3 }}
                    style={{ transformOrigin: "bottom" }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
