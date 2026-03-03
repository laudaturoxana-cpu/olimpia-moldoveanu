"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion } from "framer-motion";
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

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function ThankYouContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Dragă";

  useEffect(() => {
    // Facebook Pixel - Lead event
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead");
    }
  }, []);

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
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #FAF7F5 0%, #F5EEE8 50%, #FAF7F5 100%)",
          }}
        />
        <SparkleParticles count={25} intensity="normal" />

        <div className="max-w-3xl mx-auto px-5 md:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.15)}
          >
            <motion.div className="text-verde-sage text-7xl md:text-8xl mb-6" variants={fadeInUp}>
              ✓
            </motion.div>
            <motion.h1
              className="font-cormorant text-4xl md:text-5xl text-charcoal mb-6"
              variants={fadeInUp}
            >
              Aplicația Ta A Fost Trimisă
            </motion.h1>
            <motion.div className="h-0.5 bg-auriu mx-auto mb-8 max-w-xs" variants={lineExpand} />
            <motion.p
              className="font-montserrat text-lg text-charcoal mb-2"
              variants={fadeInUp}
            >
              Dragă <span className="text-auriu font-medium">{name}</span>,
            </motion.p>
            <motion.p
              className="font-cormorant text-2xl md:text-3xl text-charcoal italic"
              variants={fadeInUp}
            >
              Îți mulțumesc pentru încredere.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Ce urmează */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer(0.1)}
          >
            <motion.h2
              className="font-cormorant text-3xl text-charcoal text-center mb-10"
              variants={fadeInUp}
            >
              Ce Urmează?
            </motion.h2>

            <div className="space-y-4 max-w-2xl mx-auto">
              {[
                "Voi citi fiecare răspuns — pentru a înțelege unde te afli și dacă procesul 1 la 1 este potrivit pentru tine",
                "Îți voi răspunde personal la email — în maxim 48 de ore (luni-vineri)",
                "Dacă este potrivit — stabilim prima sesiune și discutăm detaliile (pachet, investiție, calendar)",
                "Dacă nu este potrivit acum — îți voi spune sincer și îți voi recomanda ce ar fi mai potrivit pentru situația ta",
              ].map((text, i) => (
                <motion.div key={i} className="flex items-start gap-3" variants={staggerChild}>
                  <span className="text-verde-sage text-xl mt-0.5">✅</span>
                  <p className="font-montserrat text-gri-mediu">{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp comunitate */}
      <section className="py-16 bg-roz-pudrat/20">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <motion.div
            className="bg-white rounded-card p-8 md:p-12 border-2 border-auriu shadow-card text-center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer(0.1)}
          >
            <motion.span className="text-5xl mb-4 block" variants={fadeInUp}>💜</motion.span>
            <motion.h2
              className="font-cormorant text-3xl text-charcoal mb-2"
              variants={fadeInUp}
            >
              Între Timp
            </motion.h2>
            <motion.p
              className="font-montserrat text-gri-mediu mb-8"
              variants={fadeInUp}
            >
              Te invit să te alături comunității noastre pe WhatsApp — unde primești săptămânal:
            </motion.p>

            <div className="grid md:grid-cols-2 gap-3 mb-8 text-left">
              {[
                { day: "LUNI", title: "Intenție (tema săptămânii)" },
                { day: "MARȚI", title: "Vocea Ta (întrebare de reflecție)" },
                { day: "MIERCURI", title: "Reechilibrare (audio sau tehnică scurtă)" },
                { day: "JOI", title: "Resurse & Inspirație (materiale practice)" },
                { day: "VINERI", title: "Celebrare (recunoaștem progresul)" },
              ].map((item, i) => (
                <motion.div key={i} className="flex items-start gap-2 bg-crem rounded-lg p-3" variants={staggerChild}>
                  <span className="text-auriu text-sm">📌</span>
                  <p className="font-montserrat text-sm text-charcoal">
                    <span className="font-bold">{item.day}:</span> {item.title}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://chat.whatsapp.com/DF7xsSFXOxZLDbqlyto7oD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5C] text-white font-montserrat font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Intră în Grupul WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Întrebare reflecție */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
          >
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-8">
              O Întrebare Pentru Tine
            </h2>
            <div className="bg-roz-pudrat/20 rounded-card p-8 border-l-4 border-auriu">
              <p className="font-cormorant text-xl md:text-2xl text-charcoal italic">
                &ldquo;Dacă aș avea claritate completă asupra direcției mele — ce primul pas aș face mâine?&rdquo;
              </p>
            </div>
            <p className="font-montserrat text-gri-mediu mt-6">
              Nu trebuie să îmi răspunzi. Întrebarea este pentru tine.
              <br />
              Lasă-o să lucreze în tine până ne auzim.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 bg-crem">
        <div className="max-w-xl mx-auto px-5 md:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer(0.1)}
          >
            <motion.p className="font-montserrat text-charcoal mb-6" variants={fadeInUp}>
              Ai întrebări urgente între timp? Scrie-mi la{" "}
              <a href="mailto:contact@olimpiamoldoveanu.ro" className="text-auriu hover:underline">
                contact@olimpiamoldoveanu.ro
              </a>
            </motion.p>
            <motion.p className="font-cormorant text-3xl text-charcoal mb-4" variants={fadeInUp}>
              Ne auzim în curând.
            </motion.p>
            <motion.p className="font-montserrat text-charcoal" variants={fadeInUp}>
              Cu recunoștință,
              <br />
              <span className="font-medium">Olimpia Moldoveanu</span>
            </motion.p>
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

export default function MultumimCoachingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-crem flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-auriu"></div>
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}
