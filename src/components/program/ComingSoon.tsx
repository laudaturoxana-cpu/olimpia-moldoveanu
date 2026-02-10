"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp, staggerContainer, EASE } from "@/lib/animations";
import SparkleParticles from "@/components/ui/SparkleParticles";

interface ComingSoonProps {
  title: string;
  type: string;
  description: string;
  features: string[];
  color: "roz" | "verde" | "lavanda";
}

const ComingSoon = ({ title, type, description, features, color }: ComingSoonProps) => {
  const colorClasses = {
    roz: "bg-roz-pudrat/20",
    verde: "bg-verde-sage/20",
    lavanda: "bg-lavanda/20",
  };

  const currentYear = new Date().getFullYear();

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
          <SparkleParticles count={8} intensity="bright" minSize={8} maxSize={14} />
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
            &larr; Înapoi la site
          </Link>
        </div>
      </motion.header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #FAF7F5 0%, #FCF5F5 50%, #F5EDE8 100%)",
          }}
        />
        <SparkleParticles count={25} intensity="normal" />

        <div className="max-w-4xl mx-auto px-5 md:px-8 w-full relative z-10">
          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.15)}
          >
            {/* Badge */}
            <motion.div className="inline-block mb-6" variants={fadeInUp}>
              <span className="bg-auriu/10 text-auriu font-montserrat text-xs sm:text-sm px-4 py-2 rounded-full border border-auriu/30">
                {type}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6 leading-tight"
              variants={fadeInUp}
            >
              {title}
            </motion.h1>

            {/* Description */}
            <motion.p
              className="font-montserrat text-base sm:text-lg text-gri-mediu mb-10 max-w-2xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              {description}
            </motion.p>

            {/* Coming Soon Card */}
            <motion.div
              className={`${colorClasses[color]} rounded-card p-8 md:p-12 border border-gri-deschis max-w-xl mx-auto mb-10`}
              variants={fadeInUp}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="text-3xl">✨</span>
                <span className="font-cormorant text-2xl md:text-3xl text-charcoal">
                  În curând
                </span>
                <span className="text-3xl">✨</span>
              </div>

              <p className="font-montserrat text-gri-mediu mb-8">
                Acest program va fi disponibil în curând. Lasă-mi datele tale de contact
                și te voi anunța imediat ce se deschid înscrierile.
              </p>

              {/* Features Preview */}
              <div className="text-left mb-8">
                <p className="font-montserrat font-medium text-charcoal mb-4 text-center">
                  Ce vei găsi aici:
                </p>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 font-montserrat text-sm text-gri-mediu"
                    >
                      <span className="text-auriu flex-shrink-0">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Link href="/#contact">
                <motion.span
                  className="btn-primary inline-flex items-center gap-2 px-8 py-4"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Anunță-mă când e gata
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </motion.span>
              </Link>
            </motion.div>

            {/* Back link */}
            <motion.div variants={fadeInUp}>
              <Link
                href="/"
                className="font-montserrat text-sm text-auriu hover:underline inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Vezi toate serviciile
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <Link href="/" className="inline-block mb-4">
            <span className="font-cormorant text-crem text-lg tracking-widest">
              OLIMPIA MOLDOVEANU
            </span>
          </Link>
          <p className="font-montserrat text-sm text-gri-mediu">
            © {currentYear} Olimpia Moldoveanu. Toate drepturile rezervate.
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
    </main>
  );
};

export default ComingSoon;
