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

/* ─── Config: schimbă aici linkurile ─── */
const PDF_URL = "/ghid-7-blocaje.pdf"; // pune PDF-ul în /public sau înlocuiește cu link Drive/Dropbox public
const CALENDLY_URL = "https://calendly.com/olimpiamld/30min";
const WHATSAPP_URL = "https://chat.whatsapp.com/DF7xsSFXOxZLDbqlyto7oD"; // opțional: grup comunitate

function ThankYouContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "dragă";

  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", { content_name: "Ghid 7 Blocaje" });
    }
  }, []);

  const trackCalendly = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("trackCustom", "CalendlyClick", { source: "multumire-ghid" });
    }
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

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #FAF7F5 0%, #F5EEE8 50%, #FAF7F5 100%)",
          }}
        />
        <SparkleParticles count={30} intensity="normal" />

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
              className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-charcoal mb-6 leading-tight"
              variants={fadeInUp}
            >
              Gata! Ghidul Tău E În Drum Spre Inbox 💜
            </motion.h1>

            <motion.div className="h-0.5 bg-auriu mx-auto mb-8 max-w-xs" variants={lineExpand} />

            <motion.div
              className="bg-white rounded-card p-6 md:p-8 border border-gri-deschis text-left space-y-4 font-montserrat text-gri-mediu leading-relaxed"
              variants={fadeInUp}
            >
              <p className="text-charcoal">
                Bună <span className="text-auriu font-medium">{name}</span>,
              </p>
              <p>
                Tocmai ți-am trimis ghidul{" "}
                <span className="text-charcoal font-medium">
                  „Știi Ce Ai De Făcut... Dar Tot Nu Faci?”
                </span>{" "}
                pe email.
              </p>
              <p>
                Testul din ghid îți va arăta EXACT care dintre cele 7 blocaje te ține pe loc.
              </p>
              <p>
                Citește cu atenție și nu sări peste spațiile de introspecție — acolo e esența.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Download button */}
      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
          >
            <p className="font-montserrat text-gri-mediu mb-6">
              Nu a ajuns emailul? Descarcă ghidul direct de aici:
            </p>
            <a
              href={PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="btn-primary inline-block text-base px-10 py-4"
            >
              DESCARCĂ GHIDUL ACUM
            </a>
            <p className="font-montserrat text-xs text-gri-mediu mt-4">
              Verifică și folderele Spam / Promoții. Dacă tot nu îl găsești, scrie-mi la{" "}
              <a href="mailto:contact@olimpiamoldoveanu.ro" className="text-auriu hover:underline">
                contact@olimpiamoldoveanu.ro
              </a>{" "}
              și ți-l retrimit personal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Next step - Calendly */}
      <section className="py-16 bg-roz-pudrat/20 relative overflow-hidden">
        <SparkleParticles count={15} intensity="subtle" />
        <div className="max-w-3xl mx-auto px-5 md:px-8 relative z-10 text-center">
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
              Următorul Pas
            </motion.h2>
            <motion.p
              className="font-montserrat text-gri-mediu mb-8 max-w-xl mx-auto"
              variants={fadeInUp}
            >
              După ce citești ghidul, hai să vorbim despre blocajul TĂU specific.
              O conversație de claritate, gratuită, fără nicio presiune.
            </motion.p>
            <motion.a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackCalendly}
              className="btn-primary inline-block text-base px-10 py-4"
              variants={fadeInUp}
            >
              PROGRAMEAZĂ CONVERSAȚIA GRATUITĂ
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Bonus */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <motion.div
            className="grid md:grid-cols-2 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer(0.12)}
          >
            <motion.div
              className="bg-crem rounded-card p-6 md:p-8 border border-gri-deschis text-center"
              variants={staggerChild}
            >
              <span className="text-4xl mb-3 block">✨</span>
              <h3 className="font-cormorant text-2xl text-charcoal mb-3">
                Vrei suport mai profund?
              </h3>
              <p className="font-montserrat text-sm text-gri-mediu mb-6">
                Descoperă programul complet de transformare prin Metoda IMPACT.
              </p>
              <Link
                href="/program-transformare"
                className="font-montserrat text-sm text-auriu font-medium hover:underline"
              >
                Vezi programul IMPACT →
              </Link>
            </motion.div>

            <motion.div
              className="bg-crem rounded-card p-6 md:p-8 border border-gri-deschis text-center"
              variants={staggerChild}
            >
              <span className="text-4xl mb-3 block">💜</span>
              <h3 className="font-cormorant text-2xl text-charcoal mb-3">
                Alătură-te comunității
              </h3>
              <p className="font-montserrat text-sm text-gri-mediu mb-6">
                Un grup de femei care parcurg același drum spre claritate și eliberare.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-montserrat text-sm text-auriu font-medium hover:underline"
              >
                Intră în grupul WhatsApp →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Signature */}
      <section className="py-16 bg-crem">
        <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
          >
            <p className="font-cormorant text-2xl md:text-3xl text-charcoal italic mb-4">
              Ai făcut primul pas. Restul vine cu blândețe.
            </p>
            <p className="font-montserrat text-charcoal">
              Cu căldură,
              <br />
              <span className="font-medium">Olimpia 💜</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-charcoal text-center">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p className="font-cormorant text-white text-lg tracking-widest mb-2">
            OLIMPIA MOLDOVEANU
          </p>
          <p className="font-montserrat text-white/60 text-sm mb-4">
            Coaching Transformator prin Legile Universale
          </p>
          <div className="flex flex-wrap justify-center gap-4 font-montserrat text-sm text-white/60">
            <a href="mailto:contact@olimpiamoldoveanu.ro" className="hover:text-auriu transition-colors">
              contact@olimpiamoldoveanu.ro
            </a>
            <a href="tel:+40720411423" className="hover:text-auriu transition-colors">
              +40 720 411 423
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default function MultumireGhidPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-crem flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-auriu mx-auto mb-4"></div>
            <p className="font-montserrat text-gri-mediu">Se încarcă...</p>
          </div>
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}
