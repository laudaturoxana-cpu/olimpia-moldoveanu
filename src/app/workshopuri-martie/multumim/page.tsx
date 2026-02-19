"use client";

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

function ThankYouContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Dragă participantă";

  const weeklySchedule = [
    { day: "LUNI", title: "Intenție", description: "Tema săptămânii pentru claritate și direcție" },
    { day: "MARȚI", title: "Vocea Ta", description: "O întrebare-cheie pentru a descoperi ce te blochează" },
    { day: "MIERCURI", title: "Reechilibrare", description: "Audio sau tehnică scurtă de ancorare" },
    { day: "JOI", title: "Resurse & Inspirație", description: "Materiale practice, ghiduri, recomandări" },
    { day: "VINERI", title: "Celebrare", description: "Recunoaștem progresul și micile victorii" },
    { day: "WEEKEND", title: "Liniște & Integrare", description: "Timp pentru tine, fără postări" },
  ];

  const workshops = [
    {
      number: 1,
      title: "Puterea Cuvântului",
      date: "5 Martie | 19:00-20:30 | Zoom",
      description: "Cum îți influențează cuvintele identitatea și ce se schimbă când alegi conștient ce spui.",
      extra: "",
    },
    {
      number: 2,
      title: "Convingerile Limitative",
      date: "12 Martie | 19:00-20:30 | Zoom",
      description: "Identifici convingerile moștenite despre bani, relații, valoare personală.",
      extra: "+ Sesiune Dans Energetic cu Dr. Cristina Varro",
    },
    {
      number: 3,
      title: "Frica și Mecanismele Ei",
      date: "19 Martie | 19:00-20:30 | Zoom",
      description: "Cum funcționează frica în corp și minte și cum o transformi în direcție.",
      extra: "+ Sesiune EFT cu Corina Harjoaba",
    },
    {
      number: 4,
      title: "Copilul Interior și Întregirea",
      date: "26 Martie | 19:00-20:30 | Zoom",
      description: "Impactul rănilor emoționale și vindecarea lor prin maturitate emoțională.",
      extra: "+ Meditație ghidată de vindecare",
    },
  ];

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

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #FAF7F5 0%, #E8F5E9 50%, #FAF7F5 100%)",
          }}
        />
        <SparkleParticles count={30} intensity="normal" />

        <div className="max-w-4xl mx-auto px-5 md:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.15)}
          >
            <motion.div
              className="text-verde-sage text-7xl md:text-8xl mb-6"
              variants={fadeInUp}
            >
              ✓
            </motion.div>

            <motion.h1
              className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6"
              variants={fadeInUp}
            >
              Bine Ai Venit în Luna Clarității
            </motion.h1>

            <motion.div className="h-0.5 bg-auriu mx-auto mb-8 max-w-xs" variants={lineExpand} />

            <motion.div
              className="font-montserrat text-lg md:text-xl text-charcoal mb-4"
              variants={fadeInUp}
            >
              Dragă <span className="text-auriu font-medium">{name}</span>,
            </motion.div>

            <motion.p
              className="font-cormorant text-2xl md:text-3xl text-charcoal italic"
              variants={fadeInUp}
            >
              Ai făcut primul pas.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What's Next Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer(0.1)}
          >
            <motion.p
              className="font-montserrat text-lg text-charcoal text-center mb-8"
              variants={fadeInUp}
            >
              În următoarele 4 săptămâni vei experimenta:
            </motion.p>

            <motion.div
              className="grid md:grid-cols-2 gap-4 mb-12"
              variants={staggerContainer(0.1)}
            >
              {[
                { date: "5 Martie", title: "Puterea Cuvântului" },
                { date: "12 Martie", title: "Convingerile Limitative (+ Dans Energetic)" },
                { date: "19 Martie", title: "Frica și Mecanismele Ei (+ EFT)" },
                { date: "26 Martie", title: "Copilul Interior și Întregirea (+ Meditație)" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 bg-roz-pudrat/20 rounded-lg p-4"
                  variants={staggerChild}
                >
                  <span className="text-auriu font-montserrat font-bold">{item.date}</span>
                  <span className="font-montserrat text-charcoal">{item.title}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.h2
              className="font-cormorant text-3xl md:text-4xl text-charcoal text-center mb-8"
              variants={fadeInUp}
            >
              Ce Urmează?
            </motion.h2>

            <motion.div className="space-y-4 max-w-2xl mx-auto" variants={staggerContainer(0.1)}>
              {[
                "Vei primi un email de confirmare în următoarele minute (verifică și spam/promoții)",
                "Cu 24h înainte de fiecare workshop primești linkul Zoom și reminder",
                "Până atunci, te invit să te alături comunității noastre de pe WhatsApp",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  variants={staggerChild}
                >
                  <span className="text-verde-sage text-xl">✓</span>
                  <p className="font-montserrat text-gri-mediu">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Community Section */}
      <section className="py-16 bg-roz-pudrat/30 relative overflow-hidden">
        <SparkleParticles count={15} intensity="subtle" />

        <div className="max-w-4xl mx-auto px-5 md:px-8 relative z-10">
          <motion.div
            className="bg-white rounded-card p-8 md:p-12 border-2 border-auriu shadow-card"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
          >
            <div className="text-center mb-8">
              <span className="text-5xl mb-4 block">💜</span>
              <h2 className="font-cormorant text-3xl md:text-4xl text-charcoal mb-4">
                Alătură-te Comunității WhatsApp
              </h2>
              <p className="font-montserrat text-auriu font-medium">GRATUIT</p>
            </div>

            <p className="font-montserrat text-charcoal text-center mb-8">
              Până la primul workshop (5 Martie), vei primi săptămânal:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {weeklySchedule.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 bg-crem rounded-lg p-4"
                  variants={staggerChild}
                >
                  <span className="text-auriu">📌</span>
                  <div>
                    <p className="font-montserrat font-bold text-charcoal text-sm">{item.day}:</p>
                    <p className="font-montserrat text-charcoal text-sm">{item.title}</p>
                    <p className="font-montserrat text-gri-mediu text-xs">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-gri-deschis pt-8 mb-8">
              <h3 className="font-cormorant text-2xl text-charcoal text-center mb-6">
                De Ce Să Te Alături Acum?
              </h3>
              <div className="space-y-3 max-w-lg mx-auto">
                {[
                  "Pregătire pentru workshopuri - Materialele săptămânale te pregătesc pentru fiecare întâlnire",
                  "Reminder-uri live - Primești notificări cu 24h și 1h înainte de fiecare workshop",
                  "Comunitate sigură - Femei care parcurg același drum ca tine",
                  "Suport constant - Olimpia răspunde la întrebări între workshopuri",
                  "Totul gratuit - Nicio taxă, nicio obligație",
                ].map((text, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-verde-sage">✓</span>
                    <p className="font-montserrat text-sm text-gri-mediu">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="font-montserrat text-sm text-gri-mediu mb-4">
                Grupul este activ până pe 26 Martie (finalul seriei).
                <br />
                Primele materiale încep <strong>LUNI</strong> - așa că te așteptăm!
              </p>

              <a
                href="https://chat.whatsapp.com/DF7xsSFXOxZLDbqlyto7oD"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5C] text-white font-montserrat font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                MĂ ALĂTUR COMUNITĂȚII WHATSAPP
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reflection Question */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUp}
          >
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-6">
              Între Timp, O Întrebare Pentru Tine:
            </h2>

            <div className="bg-roz-pudrat/20 rounded-card p-8 border-l-4 border-auriu">
              <p className="font-cormorant text-xl md:text-2xl text-charcoal italic">
                &ldquo;Ce aleg să schimb în viața mea începând cu această primăvară?&rdquo;
              </p>
            </div>

            <p className="font-montserrat text-gri-mediu mt-6">
              Nu trebuie să răspunzi nimănui. Întrebarea este pentru tine.
              <br />
              Lasă-o să lucreze în tine până ne vedem pe 5 Martie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Workshop Schedule */}
      <section className="py-16 bg-crem">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer(0.15)}
          >
            <motion.h2
              className="font-cormorant text-3xl md:text-4xl text-charcoal text-center mb-4"
              variants={fadeInUp}
            >
              Programul Complet al Workshopurilor
            </motion.h2>

            <motion.div className="h-0.5 bg-auriu mx-auto mb-12 max-w-xs" variants={lineExpand} />

            <div className="space-y-6">
              {workshops.map((workshop, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-card p-6 md:p-8 border border-gri-deschis hover:border-auriu/50 transition-colors"
                  variants={staggerChild}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-auriu/20 flex items-center justify-center flex-shrink-0">
                      <span className="font-cormorant text-xl text-auriu font-bold">
                        {workshop.number}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-cormorant text-xl md:text-2xl text-charcoal mb-2">
                        Workshop {workshop.number} - {workshop.title}
                      </h3>
                      <p className="font-montserrat text-sm text-auriu mb-3">{workshop.date}</p>
                      <p className="font-montserrat text-gri-mediu mb-2">{workshop.description}</p>
                      {workshop.extra && (
                        <p className="font-montserrat text-sm text-verde-sage font-medium">
                          {workshop.extra}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact & Closing */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer(0.1)}
          >
            <motion.h2
              className="font-cormorant text-2xl md:text-3xl text-charcoal mb-6"
              variants={fadeInUp}
            >
              Ai Întrebări?
            </motion.h2>

            <motion.div className="space-y-2 mb-8" variants={fadeInUp}>
              <p className="font-montserrat text-gri-mediu">
                <span className="text-charcoal font-medium">Email:</span>{" "}
                <a href="mailto:contact@olimpiamoldoveanu.ro" className="text-auriu hover:underline">
                  contact@olimpiamoldoveanu.ro
                </a>
              </p>
              <p className="font-montserrat text-gri-mediu">
                <span className="text-charcoal font-medium">Telefon:</span>{" "}
                <a href="tel:+40720411423" className="text-auriu hover:underline">
                  +40 720 411 423
                </a>
              </p>
              <p className="font-montserrat text-sm text-gri-mediu italic">Îți răspund personal.</p>
            </motion.div>

            <motion.div
              className="border-t border-gri-deschis pt-8"
              variants={fadeInUp}
            >
              <p className="font-cormorant text-3xl md:text-4xl text-charcoal mb-4">
                Ne Vedem pe 5 Martie! 🌸
              </p>
              <p className="font-montserrat text-gri-mediu mb-6">
                Până atunci, te aștept în grupul WhatsApp.
              </p>

              <p className="font-montserrat text-charcoal">
                Cu recunoștință,
                <br />
                <span className="font-medium">Olimpia Moldoveanu</span>
              </p>
            </motion.div>

            <motion.p
              className="mt-8 font-montserrat text-xs text-gri-mediu italic"
              variants={fadeInUp}
            >
              P.S. Dacă link-ul WhatsApp nu funcționează, scrie-mi la contact@olimpiamoldoveanu.ro și îți trimit invitația personal.
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

export default function MultumimPage() {
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
