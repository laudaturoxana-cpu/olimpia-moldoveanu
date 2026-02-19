"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  lineExpand,
  staggerContainer,
  staggerChild,
  viewportConfig,
  EASE,
} from "@/lib/animations";
import SparkleParticles from "@/components/ui/SparkleParticles";

const ProgramLanding = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-crem">
      <ProgramHeader />
      <ProgramHero onScrollToContact={() => scrollToSection("contact-program")} />
      <RecognitionSection />
      <WhatIsSection />
      <MethodSection />
      <StructureSection />
      <ProcessSection />
      <TeamSection />
      <AudienceSection />
      <ForWhomSection />
      <TestimonialsSection />
      <ResultsSection />
      <FAQSection />
      <CTASection />
      <ProgramFooter />
    </main>
  );
};

/* ==================== HEADER ==================== */
const ProgramHeader = () => {
  return (
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
  );
};

/* ==================== HERO ==================== */
const ProgramHero = ({ onScrollToContact }: { onScrollToContact: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #FAF7F5 0%, #FCF5F5 50%, #F5EDE8 100%)",
        }}
      />
      <SparkleParticles count={30} intensity="normal" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16 w-full relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.15)}
        >
          <motion.div className="inline-block mb-6" variants={fadeInUp}>
            <span className="bg-auriu/10 text-auriu font-montserrat text-xs sm:text-sm px-4 py-2 rounded-full border border-auriu/30">
              IMPACT - FUNDAMENT • Ediția II
            </span>
          </motion.div>

          <motion.h1
            className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6 leading-tight"
            variants={fadeInUp}
          >
            36 de săptămâni care îți
            <br />
            <span className="text-auriu">schimbă viața</span>
          </motion.h1>

          <motion.p
            className="font-montserrat text-xl sm:text-2xl text-gri-mediu mb-4"
            variants={fadeInUp}
          >
            Din interior spre exterior
          </motion.p>

          <motion.p
            className="font-montserrat text-base sm:text-lg text-gri-mediu mb-8 max-w-2xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Ai purtat prea mult. Prea mult timp. Pentru prea mulți oameni. Acum este rândul tău.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <motion.button
              onClick={onScrollToContact}
              className="btn-primary text-base px-8 py-4"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Vreau să vorbesc cu Olimpia
            </motion.button>
            <motion.button
              onClick={() => {
                const el = document.getElementById("despre-program");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-secondary text-base px-8 py-4"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Află mai multe
            </motion.button>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-6 pt-10 text-gri-mediu"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-2">
              <span className="text-auriu">✓</span>
              <span className="font-montserrat text-sm">36 săptămâni de transformare</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-auriu">✓</span>
              <span className="font-montserrat text-sm">3 practiciene dedicate</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-auriu">✓</span>
              <span className="font-montserrat text-sm">Maxim 12 participante</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* ==================== RECOGNITION SECTION ==================== */
const RecognitionSection = () => {
  return (
    <section id="despre-program" className="section-padding bg-white relative overflow-hidden">
      <SparkleParticles count={12} intensity="subtle" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer(0.15)}
          className="text-center"
        >
          <motion.h2
            className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-charcoal mb-8"
            variants={fadeInUp}
          >
            Poate te recunoști aici...
          </motion.h2>

          <motion.div
            className="space-y-6 font-montserrat text-gri-mediu text-base sm:text-lg leading-relaxed"
            variants={fadeInUp}
          >
            <p>
              Te trezești obosită înainte să înceapă ziua. Faci totul pentru toți și te pierzi pe tine.
              Știi că există mai mult în tine. Dar nu știi încă cum să ajungi acolo.
            </p>

            <p className="text-charcoal font-medium text-xl">
              Nu ești singură. Și nu este prea târziu.
            </p>

            <p>
              Ai fost puternică prea mult timp. Ai dus, ai rezistat, ai tăcut. Ai pus pe toți înaintea ta.
            </p>

            <p>
              Știi că există mai mult în tine dar te simți blocată, obosită sau pierdută.
              Ai ales să schimbi lucruri. Ai citit cărți, ai urmat cursuri, ai început și ai oprit.
            </p>

            <p className="text-charcoal font-medium">
              Și totuși ceva nu s-a schimbat cu adevărat.
            </p>

            <p>
              Pentru că schimbarea reală nu vine din informație.
              Vine din <span className="text-charcoal font-medium">integrare</span>.
              Din <span className="text-charcoal font-medium">vindecare</span>.
              Din <span className="text-charcoal font-medium">asumare</span>.
            </p>

            <p className="text-auriu font-medium text-xl">
              Aceasta este ceea ce oferă programul IMPACT - Fundament.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* ==================== WHAT IS SECTION ==================== */
const WhatIsSection = () => {
  return (
    <section className="section-padding bg-crem relative overflow-hidden">
      <SparkleParticles count={15} intensity="subtle" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer(0.15)}
        >
          <motion.h2
            className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-charcoal mb-8 text-center"
            variants={fadeInUp}
          >
            Ce este IMPACT - Fundament?
          </motion.h2>

          <motion.div
            className="space-y-6 font-montserrat text-gri-mediu text-base sm:text-lg leading-relaxed text-center"
            variants={fadeInUp}
          >
            <p className="text-charcoal font-medium text-xl">
              Nu este un curs. Nu este o serie de informații.
            </p>

            <p>
              Este o călătorie structurată prin care te întorci la tine și îți construiești viața pe care o meriți.
            </p>

            <div className="bg-white rounded-card p-6 md:p-8 border border-gri-deschis mt-8">
              <p className="text-charcoal font-medium mb-4 text-xl">36 de săptămâni în care:</p>
              <div className="space-y-3 text-left max-w-xl mx-auto">
                <div className="flex items-start gap-3">
                  <span className="text-auriu flex-shrink-0">✓</span>
                  <span>Te eliberezi de frici, blocaje și convingeri limitative</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-auriu flex-shrink-0">✓</span>
                  <span>Te aliniezi cu valorile și viziunea ta reală</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-auriu flex-shrink-0">✓</span>
                  <span>Manifești conștient viața pe care ți-o dorești</span>
                </div>
              </div>
            </div>

            <p className="text-charcoal font-medium italic text-lg pt-4">
              Nu îți oferim soluții rapide. Îți oferim leadership interior.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* ==================== METHOD SECTION ==================== */
const MethodSection = () => {
  const steps = [
    {
      letter: "I",
      title: "Inițiere",
      description: "Te vezi cu onestitate. Unde ești acum și ce ai moștenit fără să alegi.",
    },
    {
      letter: "M",
      title: "Maturizare",
      description: "Lucrezi cu tiparele emoționale și convingerile limitative.",
    },
    {
      letter: "P",
      title: "Putere",
      description: "Te reconectezi cu forța interioară care a fost întotdeauna a ta.",
    },
    {
      letter: "A",
      title: "Asumare",
      description: "Îți iei responsabilitatea pentru viața ta. Nu din vină, din putere.",
    },
    {
      letter: "C",
      title: "Construcție",
      description: "Construiești relații, proiecte și obiceiuri din stabilitate interioară.",
    },
    {
      letter: "T",
      title: "Transmitere",
      description: "Ceea ce ai integrat devine prezența ta în lume.",
    },
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.h2
            className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4"
            variants={fadeInUp}
          >
            Metoda IMPACT
          </motion.h2>
          <motion.p
            className="font-montserrat text-auriu text-lg mb-4"
            variants={fadeInUp}
          >
            Leadership Interior în 6 Pași
          </motion.p>
          <motion.p
            className="font-montserrat text-gri-mediu max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Fiecare sesiune din program urmează Metoda IMPACT o structură clară, matură și responsabilă pentru transformare reală
          </motion.p>
          <motion.div className="h-0.5 bg-auriu mx-auto mt-6" variants={lineExpand} />
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-crem rounded-card p-6 border border-gri-deschis hover:border-auriu/50 transition-all duration-300"
              variants={staggerChild}
              whileHover={{ y: -3 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-12 bg-auriu/20 rounded-full flex items-center justify-center font-cormorant text-2xl text-auriu font-bold">
                  {step.letter}
                </span>
                <h3 className="font-cormorant text-xl md:text-2xl text-charcoal">
                  {step.title}
                </h3>
              </div>
              <p className="font-montserrat text-sm text-gri-mediu leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="font-montserrat text-center text-charcoal font-medium mt-10 text-lg"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
        >
          IMPACT nu este informație. Este structură. Este proces. Este întoarcere la tine.
        </motion.p>
      </div>
    </section>
  );
};

/* ==================== STRUCTURE SECTION ==================== */
const StructureSection = () => {
  const items = [
    {
      icon: "🎯",
      title: "18 sesiuni de grup",
      subtitle: "o sesiune la 2 săptămâni, 90 minute fiecare",
      details: [
        "Tema clară a întâlnirii",
        "Exercițiul principal realizat ÎN cadrul sesiunii",
        "Meditație ghidată",
        "Interacțiune și integrare în grup",
      ],
    },
    {
      icon: "💜",
      title: "9 sesiuni EFT de grup",
      subtitle: "în săptămânile fără sesiune principală",
      details: [
        "Eliberare emoțională prin tapping",
        "Echilibrare energetică",
        "Reducerea stresului și traumelor",
      ],
    },
    {
      icon: "💃",
      title: "9 sesiuni Dans Energetic",
      subtitle: "în săptămânile fără sesiune principală",
      details: [
        "Eliberarea tensiunilor prin corp",
        "Theta Healing pentru echilibrare",
        "Calmarea sistemului nervos",
      ],
    },
    {
      icon: "✨",
      title: "3 sesiuni individuale 1:1",
      subtitle: "cu Olimpia",
      details: [
        "Clarificare și integrare personalizată",
        "Check-in la momente cheie (săptămâna 12, 24, 36)",
      ],
    },
    {
      icon: "📱",
      title: "Grup privat WhatsApp",
      subtitle: "suport constant",
      details: [
        "Suport constant, fără presiune",
        "Răspunsuri la întrebări",
        "Comunitate sigură",
      ],
    },
  ];

  return (
    <section className="section-padding bg-crem relative overflow-hidden">
      <SparkleParticles count={15} intensity="subtle" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.h2
            className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4"
            variants={fadeInUp}
          >
            Structura Programului
          </motion.h2>
          <motion.p
            className="font-montserrat text-gri-mediu max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            36 de săptămâni, 39 de sesiuni live
          </motion.p>
          <motion.div className="h-0.5 bg-auriu mx-auto mt-6" variants={lineExpand} />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-card p-6 border border-gri-deschis hover:border-auriu/50 transition-all duration-300"
              variants={staggerChild}
              whileHover={{ y: -3 }}
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-cormorant text-xl md:text-2xl text-charcoal mb-1">
                {item.title}
              </h3>
              <p className="font-montserrat text-sm text-auriu mb-4">{item.subtitle}</p>
              <ul className="space-y-2">
                {item.details.map((detail, idx) => (
                  <li key={idx} className="font-montserrat text-sm text-gri-mediu flex items-start gap-2">
                    <span className="text-auriu flex-shrink-0">✓</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-white rounded-card p-6 md:p-8 border-2 border-auriu mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
        >
          <h3 className="font-cormorant text-2xl text-charcoal mb-4 text-center">
            Accentul programului
          </h3>
          <p className="font-montserrat text-gri-mediu text-center mb-6">
            Nu mai există volum mare de exerciții pentru acasă. Această structură s-a născut din feedback-ul direct al participantelor din Ediția I.
          </p>
          <div className="space-y-4 max-w-2xl mx-auto">
            <blockquote className="font-montserrat text-sm text-gri-mediu italic border-l-4 border-auriu pl-4">
              &ldquo;Cateodata mi s-au parut prea multe exercitii pentru acasa si m-am pierdut in ele.&rdquo;
              <span className="block text-auriu mt-1 not-italic">Andreea, Ediția I</span>
            </blockquote>
            <blockquote className="font-montserrat text-sm text-gri-mediu italic border-l-4 border-auriu pl-4">
              &ldquo;Poate mai putine exercitii sau un exercitiu pe sesiune si care sa fie facut pana la urmatorea sesiune, ca o tema.&rdquo;
              <span className="block text-auriu mt-1 not-italic">Participantă Ediția I</span>
            </blockquote>
          </div>
          <p className="font-montserrat text-charcoal font-medium text-center mt-6">
            Am ascultat. Am simplificat. Am focusat pe integrare asistată.
          </p>
          <p className="font-montserrat text-gri-mediu text-center mt-2">
            Exercițiul principal se face împreună, în sesiune. Nu te lăsăm singură să te pierzi în materiale.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

/* ==================== PROCESS SECTION ==================== */
const ProcessSection = () => {
  const phases = [
    {
      number: "01",
      weeks: "Săptămânile 1-12",
      title: "ELIBERARE",
      color: "bg-roz-pudrat/20",
      description: "Identificăm și eliberăm fricile, blocajele emoționale, convingerile limitative. Lucrăm cu vinovăția, rușinea, frica de greșeală. Înveți să fii blândă cu tine.",
      details: "Exercițiul principal se face în cadrul sesiunii. Sesiuni de grup, meditații ghidate, suport în grup WhatsApp. Prima sesiune 1:1 cu Olimpia (săptămâna 12).",
    },
    {
      number: "02",
      weeks: "Săptămânile 13-24",
      title: "ALINIERE",
      color: "bg-verde-sage/20",
      description: "Reconstruim relația cu tine. Descoperi ce contează cu adevărat pentru tine, care sunt valorile tale, ce vrei să manifești. Claritate și direcție.",
      details: "Lucru profund cu identitatea, valorile, viziunea. Pași clari pentru aliniere. A doua sesiune 1:1 cu Olimpia (săptămâna 24).",
    },
    {
      number: "03",
      weeks: "Săptămânile 25-36",
      title: "MANIFESTARE",
      color: "bg-lavanda/20",
      description: "Transformi claritatea în acțiuni concrete. Manifești conștient viața pe care ți-o dorești în relații, în carieră, în bani, în pace interioară. Leadership interior.",
      details: "Acțiuni practice asistate, integrare profundă, manifestare conștientă prin Legile Universale. A treia sesiune 1:1 cu Olimpia (săptămâna 36). Îți construiești viața aliniată.",
    },
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.h2
            className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4"
            variants={fadeInUp}
          >
            Procesul: 3 Etape Clare
          </motion.h2>
          <motion.div className="h-0.5 bg-auriu mx-auto mt-6" variants={lineExpand} />
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-6 md:gap-8"
          variants={staggerContainer(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              className={`${phase.color} rounded-card p-6 md:p-8 border border-transparent hover:border-auriu/30 transition-all duration-300`}
              variants={staggerChild}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-cormorant text-4xl md:text-5xl text-auriu/40">
                  {phase.number}
                </span>
                <span className="font-montserrat text-xs text-auriu bg-auriu/10 px-3 py-1 rounded-full">
                  {phase.weeks}
                </span>
              </div>

              <h3 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
                {phase.title}
              </h3>

              <p className="font-montserrat text-sm text-gri-mediu mb-4 leading-relaxed">
                {phase.description}
              </p>

              <div className="border-t border-gri-deschis pt-4">
                <p className="font-montserrat text-xs text-auriu font-medium mb-2">Ce se întâmplă:</p>
                <p className="font-montserrat text-xs text-gri-mediu leading-relaxed">
                  {phase.details}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ==================== TEAM SECTION ==================== */
const TeamSection = () => {
  const team = [
    {
      name: "Olimpia Moldoveanu",
      role: "Coaching Transformator prin Legile Universale",
      image: "/olimpia-program.jpg",
      color: "bg-auriu/20",
      highlight: "65 de ani. 25+ ani experiență economie. 5+ ani coaching transformațional.",
      description: "La 39 de ani am luat cea mai grea decizie din viața mea, am renunțat la siguranța unui loc de muncă stabil pentru a alege alinierea. A fost un drum lung. Cu frici mari. Cu un faliment care a pornit dintr-un accident, nu dintr-o greșeală. Cu convingeri moștenite din trei generații. Cu șapte momente în care viața a atârnat de un fir și de fiecare dată am ales să merg mai departe. La 50 de ani am înțeles că banii nu se câștigă greu, se câștigă prin valoare și aliniere. Astăzi sunt întreagă.",
      quote: "Din această înțelegere s-a născut Metoda IMPACT.",
    },
    {
      name: "Dr. Cristina Varro",
      role: "Medic Neonatolog, Dans Energetic, Theta Healing",
      image: "/cristina-varro.jpg",
      color: "bg-verde-sage/20",
      highlight: "Medic cu peste 12 ani experiență.",
      description: "A ales să vadă ființa umană ca un întreg: corp, minte, emoții și energie. Povestea ei este despre curajul de a recunoaște că îți dorești mai mult.",
      quote: "",
    },
    {
      name: "Corina Harjoaba",
      role: "Practician EFT, Ghid Transformare Emoțională",
      image: "/corina-harjoaba.jpg",
      color: "bg-roz-pudrat/30",
      highlight: "Practician certificat EFT.",
      description: "Susține femeile să elibereze emoțiile blocate și să revină la starea lor naturală de echilibru și bucurie.",
      quote: "",
    },
  ];

  return (
    <section className="section-padding bg-crem relative overflow-hidden">
      <SparkleParticles count={12} intensity="subtle" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.h2
            className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4"
            variants={fadeInUp}
          >
            Ghidat de 3 Practiciene
          </motion.h2>
          <motion.div className="h-0.5 bg-auriu mx-auto mt-6" variants={lineExpand} />
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={staggerContainer(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-card p-6 md:p-8 border border-gri-deschis"
              variants={staggerChild}
            >
              <div className="grid md:grid-cols-4 gap-6 items-start">
                <div className="md:col-span-1">
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-card max-w-[200px] mx-auto">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </div>
                </div>

                <div className="md:col-span-3">
                  <h3 className="font-cormorant text-xl md:text-2xl text-charcoal mb-1">
                    {member.name}
                  </h3>
                  <p className="font-montserrat text-sm text-auriu mb-3">
                    {member.role}
                  </p>
                  <p className="font-montserrat text-sm text-charcoal font-medium mb-3">
                    {member.highlight}
                  </p>
                  <p className="font-montserrat text-sm text-gri-mediu leading-relaxed">
                    {member.description}
                  </p>
                  {member.quote && (
                    <p className="font-montserrat text-sm text-auriu font-medium italic mt-4">
                      {member.quote}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-10 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
        >
          <p className="font-montserrat text-gri-mediu">
            Suntem trei femei care am cunoscut frica, pierderea și confuzia.
          </p>
          <p className="font-montserrat text-charcoal font-medium">
            Și fiecare am ales, la un moment dat, să ne regăsim puterea.
          </p>
          <p className="font-montserrat text-auriu font-medium">
            De aceea suntem aici. Împreună.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

/* ==================== AUDIENCE SECTION ==================== */
const AudienceSection = () => {
  const items = [
    "Au parcurs deja etape de dezvoltare personală. Ai citit cărți, ai urmat cursuri, poate ai avut terapie. Știi multe, dar simți că lipsește ceva.",
    "Au acumulat informație, dar își doresc INTEGRARE. Nu mai vrei să înveți teorii noi. Vrei să aplici, să integrezi, să trăiești ce știi deja.",
    "Vor stabilitate emoțională, nu doar entuziasm. Nu mai cauți high-ul motivațional care dispare în 3 zile. Vrei fundație solidă, durabilă.",
    "Își doresc direcție clară și valori asumate. Știi că vrei altceva, dar nu știi exact ce. Vrei claritate, nu doar inspirație.",
    "Sunt pregătite să devină liderii propriei vieți. Nu mai aștepți pe cineva să te salveze. Ești gata să-ți iei viața în mâini.",
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.h2
            className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4"
            variants={fadeInUp}
          >
            Cui Se Adresează Acest Program
          </motion.h2>
          <motion.p
            className="font-montserrat text-gri-mediu"
            variants={fadeInUp}
          >
            IMPACT - Fundament este special creat pentru femei care:
          </motion.p>
          <motion.div className="h-0.5 bg-auriu mx-auto mt-6" variants={lineExpand} />
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-crem rounded-lg p-5 border-l-4 border-auriu"
              variants={staggerChild}
            >
              <p className="font-montserrat text-gri-mediu flex items-start gap-3">
                <span className="text-auriu flex-shrink-0">✓</span>
                {item}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="font-montserrat text-center text-charcoal font-medium mt-8 text-lg"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
        >
          Dacă ai citit asta și ai simțit &ldquo;DA, asta sunt EU&rdquo; atunci programul este pentru tine.
        </motion.p>
      </div>
    </section>
  );
};

/* ==================== FOR WHOM SECTION ==================== */
const ForWhomSection = () => {
  const forYou = [
    "Alegi un proces profund, nu soluții rapide",
    "Înțelegi că maturizarea interioară presupune consecvență",
    "Îți asumi responsabilitatea pentru propriile rezultate",
    "Cauți structură și claritate, nu doar inspirație temporară",
    "Poți susține un angajament de 36 de săptămâni",
    "Ești pregătită să îți conduci viața conștient",
  ];

  const notForYou = [
    "Cauți soluții instant",
    "Aștepți salvare externă",
    "Eviți responsabilitatea personală",
    "Nu poți susține un angajament de 36 de săptămâni",
    "Cauți validare în loc de asumare",
  ];

  return (
    <section className="section-padding bg-crem relative overflow-hidden">
      <SparkleParticles count={12} intensity="subtle" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.h2
            className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4"
            variants={fadeInUp}
          >
            Pentru Cine Este Programul
          </motion.h2>
          <motion.div className="h-0.5 bg-auriu mx-auto mt-6" variants={lineExpand} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white rounded-card p-6 md:p-8 border border-verde-sage"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInLeft}
          >
            <h3 className="font-cormorant text-2xl text-charcoal mb-6 flex items-center gap-3">
              <span className="text-verde-sage text-2xl">✓</span>
              Programul este pentru tine dacă:
            </h3>
            <ul className="space-y-3">
              {forYou.map((item, index) => (
                <li key={index} className="font-montserrat text-sm text-gri-mediu flex items-start gap-3">
                  <span className="text-verde-sage flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="bg-white rounded-card p-6 md:p-8 border border-gri-deschis"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInRight}
          >
            <h3 className="font-cormorant text-2xl text-charcoal mb-6 flex items-center gap-3">
              <span className="text-gri-mediu text-2xl">✗</span>
              Programul NU este pentru tine dacă:
            </h3>
            <ul className="space-y-3">
              {notForYou.map((item, index) => (
                <li key={index} className="font-montserrat text-sm text-gri-mediu flex items-start gap-3">
                  <span className="text-gri-mediu flex-shrink-0">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p
          className="font-montserrat text-center text-charcoal font-medium mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
        >
          Programul funcționează pe structură și responsabilitate.
        </motion.p>
      </div>
    </section>
  );
};

/* ==================== TESTIMONIALS SECTION ==================== */
const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Mi-am dorit un partener și un nou loc de muncă și le-am obținut. Am schimbat perspectiva de a vedea viața prin tot ce am lucrat în program. Viața mea este total diferită față de ce a fost.",
      highlight: "Un singur cuvânt pentru acest program: TRANSFORMATOR.",
      author: "Participantă Ediția I",
      rating: "10/10",
    },
    {
      text: "Am intrat în program cu probleme în relație, probleme financiare și lipsă de claritate. Aplicând tehnicile și exercițiile am ajuns la claritate, relațiile s-au îmbunătățit și aspectul financiar la fel. Cel mai important rezultat: mi-am crescut încrederea în mine și asta îmi permite să acționez dintr-o poziție de putere în loc de poziția de victimă.",
      highlight: "Dragă prietenă, îți recomand cu drag programul Olimpiei.",
      author: "Andreea",
      rating: "7-8/10",
    },
    {
      text: "Am intrat în program cu lipsă de curaj și procrastinare. Am ieșit mai sigură pe mine, mai încrezătoare în forțele proprii și am început să-mi exprim opinia personală fără vinovăție. Am învățat să-mi ascult vocea interioară.",
      highlight: "Investiția a fost mică față de valoarea primită.",
      author: "Participantă Ediția I",
      rating: "8/10",
    },
    {
      text: "Când am intrat în program, EU nu existam reacționam la orice. După 36 de săptămâni am început să acționez și să mă văd, puțin câte puțin. Mi-am schimbat energia și realitatea mea a început să se schimbe.",
      highlight: "Așa începe schimbarea ta.",
      author: "Participantă Ediția I",
      rating: "",
    },
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <SparkleParticles count={15} intensity="subtle" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.h2
            className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4"
            variants={fadeInUp}
          >
            Ce Spun Femeile Care Au Parcurs Ediția I
          </motion.h2>
          <motion.div className="h-0.5 bg-auriu mx-auto mt-6" variants={lineExpand} />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-crem rounded-card p-6 md:p-8 border border-gri-deschis"
              variants={staggerChild}
            >
              <div className="text-auriu text-3xl mb-4">&ldquo;</div>
              <p className="font-montserrat text-sm text-gri-mediu leading-relaxed mb-4">
                {testimonial.text}
              </p>
              <p className="font-montserrat text-sm text-charcoal font-medium italic mb-4">
                {testimonial.highlight}
              </p>
              <div className="flex items-center justify-between">
                <p className="font-montserrat text-sm text-auriu">
                  {testimonial.author}
                </p>
                {testimonial.rating && (
                  <span className="font-montserrat text-xs bg-auriu/10 text-auriu px-3 py-1 rounded-full">
                    Transformare: {testimonial.rating}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
        >
          <p className="font-montserrat text-charcoal font-medium text-lg">
            Patru femei. Patru vieți schimbate.
          </p>
          <p className="font-montserrat text-gri-mediu mt-2">
            Toate au spus același lucru în cuvinte diferite:
          </p>
          <p className="font-montserrat text-auriu font-medium italic mt-2 text-lg">
            &ldquo;Programul valorează mai mult decât am plătit.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
};

/* ==================== RESULTS SECTION ==================== */
const ResultsSection = () => {
  const results = [
    "Claritate profundă asupra direcției tale de viață",
    "Eliberare de anxietăți, frici și blocaje emoționale",
    "Instrumente concrete pentru gestionarea emoțiilor",
    "Obiceiuri care îți susțin creșterea",
    "O relație nouă cu tine de respect, iubire și asumare",
    "Curajul de a-ți trăi viața ta, nu viața așteptată de alții",
    "Leadership interior capacitatea de a-ți conduce viața conștient",
  ];

  return (
    <section className="section-padding bg-charcoal text-white relative overflow-hidden">
      <SparkleParticles
        count={20}
        intensity="bright"
        colors={["#D4AF6A", "#D4AF6A", "#E5E5E5"]}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.h2
            className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-crem mb-4"
            variants={fadeInUp}
          >
            Rezultatele Tale la Finalul Programului
          </motion.h2>
          <motion.p
            className="font-montserrat text-gri-mediu"
            variants={fadeInUp}
          >
            La finalul celor 36 de săptămâni:
          </motion.p>
          <motion.div className="h-0.5 bg-auriu mx-auto mt-6 max-w-xs" variants={lineExpand} />
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 gap-4"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {results.map((result, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3 p-4 bg-white/5 rounded-lg"
              variants={staggerChild}
            >
              <span className="text-auriu flex-shrink-0">✓</span>
              <p className="font-montserrat text-sm text-gri-deschis">{result}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
        >
          <p className="font-montserrat text-gri-mediu">
            Nu promitem transformări rapide.
          </p>
          <p className="font-montserrat text-crem font-medium text-lg mt-2">
            Construim leadership interior.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

/* ==================== FAQ SECTION ==================== */
const FAQSection = () => {
  const faqs = [
    {
      question: "Este pentru mine?",
      answer: "Programul este pentru tine dacă simți anxietate, frici, oboseală emoțională sau lipsă de claritate. Dacă ai ajuns la un prag și simți că vrei altceva, dar nu știi de unde să începi este pentru tine. Nu trebuie să fii pregătită perfect trebuie doar să fii dispusă să încerci, să cazi, să te ridici și noi te susținem în tot procesul.",
    },
    {
      question: "Cât durează până văd rezultate?",
      answer: "Fiecare femeie are ritmul ei. Unele simt schimbări după primele 2-3 săptămâni (mai multă liniște, mai puțină anxietate). Altele au nevoie de 2-3 luni pentru a integra profund. Transformarea reală vine din consecvență și asta înseamnă că fiecare sesiune te duce mai departe, chiar dacă nu simți imediat.",
    },
    {
      question: "Dacă nu am timp?",
      answer: "Programul este construit tocmai pentru femei ca tine, ocupate, cu responsabilități mari. Sesiunile de grup sunt la 2 săptămâni (nu săptămânal). Exercițiul principal se face ÎN sesiune (nu acasă, cu teme multe). Sesiunile sunt programate seara (19:00-20:30) pentru a permite participarea. Focus pe integrare asistată, nu pe volum de muncă acasă.",
    },
    {
      question: "Este prea spiritual pentru mine?",
      answer: "Nu. IMPACT - Fundament nu este despre spiritualitate abstractă. Este despre structură, responsabilitate și leadership interior. Da, folosim meditații, dans energetic și EFT dar toate sunt tehnici practice cu rezultate concrete. Nu îți cerem să crezi în nimic magic. Îți cerem să fii dispusă să lucrezi cu tine.",
    },
    {
      question: "Pot plăti în rate?",
      answer: "Da. Plata în rate este disponibilă fără dobândă. Opțiuni: Plată integrală (discount), 6 rate lunare sau 9 rate lunare. Investiția exactă și opțiunile de plată le discutăm în conversația noastră de clarificare.",
    },
    {
      question: "Ce se întâmplă dacă nu mă țin?",
      answer: "Poți veni și doar cu nu mai pot. E de ajuns ca să începem. Nu trebuie să fii perfectă trebuie doar să fii dispusă să încerci. Sesiunile sunt înregistrate (disponibile 30 zile). Ai suport constant în grup WhatsApp. Sesiunile 1:1 cu Olimpia te ajută să te aliniezi când te simți pierdută. Nu ești singură. Te ținem de mână.",
    },
  ];

  return (
    <section className="section-padding bg-crem relative overflow-hidden">
      <SparkleParticles count={12} intensity="subtle" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.h2
            className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4"
            variants={fadeInUp}
          >
            Întrebări Frecvente
          </motion.h2>
          <motion.div className="h-0.5 bg-auriu mx-auto mt-6" variants={lineExpand} />
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-card overflow-hidden border border-gri-deschis"
              variants={staggerChild}
            >
              <div className="p-5 sm:p-6">
                <h3 className="font-cormorant text-xl text-charcoal mb-3">{faq.question}</h3>
                <p className="font-montserrat text-sm text-gri-mediu leading-relaxed">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ==================== CTA SECTION ==================== */
const CTASection = () => {
  return (
    <section
      id="contact-program"
      className="section-padding bg-roz-pudrat/20 relative overflow-hidden"
    >
      <SparkleParticles count={20} intensity="normal" />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer(0.15)}
        >
          <motion.h2
            className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4"
            variants={fadeInUp}
          >
            Ești Pregătită să Începi?
          </motion.h2>
          <motion.p
            className="font-montserrat text-gri-mediu mb-4"
            variants={fadeInUp}
          >
            Nu este necesar să știi cum. Doar să simți că este momentul.
          </motion.p>
          <motion.p
            className="font-montserrat text-charcoal font-medium mb-8"
            variants={fadeInUp}
          >
            Dacă ceva în tine spune &ldquo;da&rdquo; ascultă-l.
          </motion.p>

          <motion.div
            className="bg-white rounded-card p-6 md:p-10 border-2 border-auriu shadow-card mb-8"
            variants={fadeInUp}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-2xl">✨</span>
              <span className="font-montserrat text-sm text-auriu font-medium tracking-wider uppercase">
                IMPACT - Fundament Ediția II
              </span>
              <span className="text-2xl">✨</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-lg mx-auto mb-6">
              <div>
                <p className="font-montserrat text-xs text-gri-mediu">Durată</p>
                <p className="font-montserrat text-sm text-charcoal">36 săptămâni (9 luni)</p>
              </div>
              <div>
                <p className="font-montserrat text-xs text-gri-mediu">Locuri disponibile</p>
                <p className="font-montserrat text-sm text-charcoal">Maxim 12 participante</p>
              </div>
            </div>

            <div className="space-y-2 text-left max-w-md mx-auto mb-8">
              {[
                "18 sesiuni de grup (90 min, la 2 săptămâni)",
                "9 sesiuni EFT de grup",
                "9 sesiuni Dans Energetic de grup",
                "3 sesiuni individuale 1:1 cu Olimpia",
                "Grup privat WhatsApp pentru suport constant",
                "Înregistrări disponibile 30 zile",
                "Materiale ghidate și meditații",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 font-montserrat text-sm text-gri-mediu">
                  <span className="text-auriu">✓</span>
                  {item}
                </div>
              ))}
            </div>

            <p className="font-montserrat text-sm text-gri-mediu mb-6">
              Rate disponibile: 6 sau 9 luni, fără dobândă
            </p>

            <motion.a
              href="mailto:contact@olimpiamoldoveanu.ro?subject=Conversație IMPACT - Fundament"
              className="btn-primary inline-block text-base px-10 py-4"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Vreau să Vorbesc cu Olimpia
            </motion.a>
          </motion.div>

          <motion.div className="space-y-3" variants={fadeInUp}>
            <p className="font-montserrat text-sm text-gri-mediu">
              Programează o conversație de 30 de minute fără angajament, fără presiune.
            </p>
            <p className="font-montserrat text-sm text-auriu font-medium">
              Îți răspund personal în maxim 24 ore.
            </p>
          </motion.div>

          <motion.div className="mt-10 space-y-2" variants={fadeInUp}>
            <p className="font-montserrat text-gri-mediu text-sm">E în regulă să nu știi de unde să începi de aici pornim.</p>
            <p className="font-montserrat text-gri-mediu text-sm">E în regulă să ai frici le lucrăm împreună.</p>
            <p className="font-montserrat text-gri-mediu text-sm">E în regulă să nu fii perfectă nimeni nu este.</p>
            <p className="font-montserrat text-charcoal font-medium mt-4">Primul pas nu se face perfect. Se face.</p>
            <p className="font-montserrat text-auriu font-medium text-lg mt-4">Te aștept.</p>
            <p className="font-montserrat text-charcoal">- Olimpia Moldoveanu</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* ==================== FOOTER ==================== */
const ProgramFooter = () => {
  return (
    <footer className="bg-charcoal py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <Link href="/" className="inline-block mb-2">
          <span className="font-cormorant text-crem text-lg tracking-widest">
            OLIMPIA MOLDOVEANU
          </span>
        </Link>
        <p className="font-montserrat text-xs text-gri-mediu mb-4">
          Coaching Transformator prin Legile Universale
        </p>
        <p className="font-montserrat text-sm text-gri-mediu">
          © {new Date().getFullYear()} Olimpia Moldoveanu. Toate drepturile rezervate.
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
  );
};

export default ProgramLanding;
