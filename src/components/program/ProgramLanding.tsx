"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
      {/* Header */}
      <ProgramHeader />

      {/* Hero Section */}
      <ProgramHero onScrollToContact={() => scrollToSection("contact-program")} />

      {/* Team Section */}
      <TeamSection />

      {/* What You'll Experience */}
      <ExperienceSection />

      {/* Program Structure */}
      <StructureSection />

      {/* Results */}
      <ResultsSection />

      {/* Who Is This For */}
      <AudienceSection />

      {/* Benefits */}
      <BenefitsSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
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
          &larr; Înapoi la site
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
          {/* Badge */}
          <motion.div
            className="inline-block mb-6"
            variants={fadeInUp}
          >
            <span className="bg-auriu/10 text-auriu font-montserrat text-xs sm:text-sm px-4 py-2 rounded-full border border-auriu/30">
              Program Exclusiv &bull; 36 Săptămâni
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6 leading-tight"
            variants={fadeInUp}
          >
            Conștientizează-ți Puterea,
            <br />
            <span className="text-auriu">Vindecă-te</span> și Realizează-ți Visurile
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="font-montserrat text-base sm:text-lg md:text-xl text-gri-mediu mb-8 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Un spațiu sigur și personalizat de transformare, ghidare emoțională și
            dezvoltare personală. O călătorie de 36 de săptămâni pentru a-ți descoperi
            puterea interioară, a elibera blocajele și a crea o viață aliniată cu
            valorile și aspirațiile tale.
          </motion.p>

          {/* Team Preview */}
          <motion.p
            className="font-montserrat text-sm text-auriu mb-8"
            variants={fadeInUp}
          >
            Ghidat de 3 practiciene de excepție: Olimpia Moldoveanu, Dr. Cristina Varro & Corina Harjoaba
          </motion.p>

          {/* CTA Buttons */}
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
              Vreau să mă înscriu
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

          {/* Trust indicators */}
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
              <span className="font-montserrat text-sm">3 practiciene certificate</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-auriu">✓</span>
              <span className="font-montserrat text-sm">Grup mic, atenție personalizată</span>
            </div>
          </motion.div>
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
      role: "Coach Transformațional & Spiritual Life Coach",
      image: "O",
      color: "bg-auriu/20",
      description:
        "Coach certificat prin Legile Universale, practician Heart Healing, facilitator mastermind și mentor. Cu peste 5 ani experiență în ghidarea femeilor către transformare profundă.",
      specialties: [
        "Coaching transformațional",
        "Heart Healing",
        "Legile Universale",
        "Consiliere dezvoltare personală",
      ],
    },
    {
      name: "Dr. Cristina Varro",
      role: "Medic & Practician Terapii Holistice",
      image: "C",
      color: "bg-verde-sage/20",
      description:
        "Medic neonatolog cu peste 12 ani experiență, instructor Dans Energetic și Theta Healing. Vindecarea începe când avem curajul să ne ascultăm sufletul.",
      specialties: [
        "Dans Energetic",
        "Theta Healing",
        "Echilibrare chakre",
        "Meditații ghidate",
      ],
    },
    {
      name: "Corina Harjoaba",
      role: "Practician EFT & Ghid Transformare Emoțională",
      image: "C",
      color: "bg-roz-pudrat/30",
      description:
        "Practician certificat EFT și NMG, cu peste 5 ani experiență în eliberare emoțională și armonizare energetică. Susține femeile să revină la echilibru și bucurie.",
      specialties: [
        "EFT (Eliberare Emoțională)",
        "Armonizare energetică",
        "Lucrul cu chakre",
        "Meditații și respirație",
      ],
    },
  ];

  return (
    <section id="despre-program" className="section-padding bg-white relative overflow-hidden">
      <SparkleParticles count={12} intensity="subtle" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span
            className="font-montserrat text-auriu text-sm tracking-wider uppercase mb-4 block"
            variants={fadeInUp}
          >
            Echipa ta de ghidare
          </motion.span>
          <motion.h2
            className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4"
            variants={fadeInUp}
          >
            Trei practiciene, o singură misiune
          </motion.h2>
          <motion.p
            className="font-montserrat text-gri-mediu max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Fiecare dintre noi am trecut printr-o durere și am ales să ne regăsim puterea interioară.
            De aceea suntem aici — împreună, pentru tine.
          </motion.p>
          <motion.div className="h-0.5 bg-auriu mx-auto mt-6" variants={lineExpand} />
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 md:gap-8"
          variants={staggerContainer(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-crem rounded-card p-6 md:p-8 border border-gri-deschis hover:border-auriu/50 transition-all duration-300"
              variants={staggerChild}
              whileHover={{ y: -5, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
            >
              {/* Avatar */}
              <div
                className={`w-20 h-20 ${member.color} rounded-full flex items-center justify-center mx-auto mb-6`}
              >
                <span className="font-cormorant text-3xl text-charcoal">
                  {member.image}
                </span>
              </div>

              {/* Name & Role */}
              <h3 className="font-cormorant text-xl md:text-2xl text-charcoal text-center mb-2">
                {member.name}
              </h3>
              <p className="font-montserrat text-sm text-auriu text-center mb-4">
                {member.role}
              </p>

              {/* Description */}
              <p className="font-montserrat text-sm text-gri-mediu text-center mb-6 leading-relaxed">
                {member.description}
              </p>

              {/* Specialties */}
              <div className="flex flex-wrap gap-2 justify-center">
                {member.specialties.map((specialty, idx) => (
                  <span
                    key={idx}
                    className="font-montserrat text-xs bg-white px-3 py-1 rounded-full text-gri-mediu border border-gri-deschis"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ==================== EXPERIENCE SECTION ==================== */
const ExperienceSection = () => {
  const experiences = [
    {
      icon: "🎯",
      title: "Coaching Transformațional Personalizat",
      items: [
        "Descoperă-ți puterea interioară și învață să o folosești pentru a depăși obstacolele",
        "Identifică fricile, anxietățile și blocajele emoționale și cauzele lor",
        "Lucrează cu tehnici avansate de NLP pentru reprogramarea credințelor limitative",
        "Identifică blocajele financiare, de carieră, mentale, relaționale și de sănătate",
        "Creează ancore pozitive pentru stabilitate emoțională",
      ],
    },
    {
      icon: "💭",
      title: "Transformarea Convingerilor Limitative",
      items: [
        "Depășește sindromul impostorului și convingerile care te țin pe loc",
        "Recunoaște gândurile și tiparele care te sabotează",
        "Dizolvă convingerile limitative prin tehnici și exerciții specifice",
        "Înlocuiește-le cu afirmații puternice care susțin progresul",
        "Metode practice pentru rescrierea mentală și emoțională",
      ],
    },
    {
      icon: "🌱",
      title: "Crearea Obiceiurilor Sănătoase",
      items: [
        "Claritate asupra locului unde te afli și ce îți dorești pentru 2026",
        "Creează noi rețele neuronale pentru obiceiuri constructive",
        "Afirmații, meditații ghidate și exerciții practice validate științific",
        "Echilibru emoțional și mental pentru motivație pe termen lung",
        "Claritatea direcției când nu ai un scop bine definit",
      ],
    },
    {
      icon: "✨",
      title: "Reconectare Spirituală și Vindecare",
      items: [
        "Tehnici angelice și conexiuni spirituale cu Arhanghelul Mihail",
        "Introspecție profundă și reconectare cu sinele autentic",
        "Manifestare cu Moonology, aliniere la fazele lunii",
        "Ho'oponopono și meditații Heart Healing pentru iertare",
        "Tehnica Copilului Interior pentru vindecarea rănilor din copilărie",
      ],
    },
    {
      icon: "💜",
      title: "Eliberare cu Corina (EFT)",
      items: [
        "Sesiuni EFT pentru reducerea stresului și eliberarea traumelor",
        "Depășirea convingerilor limitative prin tapping",
        "Echilibrare energetică prin lucrul cu chakrele",
        "Meditații ghidate și tehnici de respirație",
        "Regăsirea armoniei interioare și liniștea minții",
      ],
    },
    {
      icon: "💃",
      title: "Eliberare cu Dr. Cristina (Dans Energetic)",
      items: [
        "Dans Energetic pentru eliberarea tensiunilor și traumelor",
        "Theta Healing pentru echilibrarea chakrelor",
        "Reducerea stresului și anxietății prin mișcare",
        "Calmarea sistemului nervos și claritate interioară",
        "Stare de vitalitate, bucurie și prezență",
      ],
    },
  ];

  return (
    <section className="section-padding bg-crem relative overflow-hidden">
      <SparkleParticles count={15} intensity="subtle" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
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
            Ce vei experimenta în acest program?
          </motion.h2>
          <motion.p
            className="font-montserrat text-gri-mediu max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            O combinație unică de tehnici practice, introspecție profundă și vindecare emoțională
          </motion.p>
          <motion.div className="h-0.5 bg-auriu mx-auto mt-6" variants={lineExpand} />
        </motion.div>

        {/* Experience Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-card p-6 border border-gri-deschis hover:border-auriu/50 transition-all duration-300"
              variants={staggerChild}
              whileHover={{ y: -3 }}
            >
              <div className="text-3xl mb-4">{exp.icon}</div>
              <h3 className="font-cormorant text-xl md:text-2xl text-charcoal mb-4">
                {exp.title}
              </h3>
              <ul className="space-y-2">
                {exp.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="font-montserrat text-sm text-gri-mediu flex items-start gap-2"
                  >
                    <span className="text-auriu flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ==================== STRUCTURE SECTION ==================== */
const StructureSection = () => {
  const phases = [
    {
      number: "01",
      weeks: "Săptămâni 1-12",
      title: "Fundația",
      subtitle: "Eliberare & Claritate",
      color: "bg-roz-pudrat/20",
      items: [
        "Stabilirea obiectivelor și identificarea blocajelor principale",
        "Dezvoltarea clarității și implementarea tehnicilor de eliberare emoțională",
        "Crearea unei baze solide pentru echilibrul emoțional și spiritual",
      ],
    },
    {
      number: "02",
      weeks: "Săptămâni 13-24",
      title: "Transformare",
      subtitle: "Vindecare & Creștere",
      color: "bg-verde-sage/20",
      items: [
        "Implementarea obiceiurilor constructive",
        "Lucrul intensiv cu convingerile limitative",
        "Vindecarea rănilor din copilărie și explorarea spiritualității",
      ],
    },
    {
      number: "03",
      weeks: "Săptămâni 25-36",
      title: "Integrare",
      subtitle: "Manifestare & Abundență",
      color: "bg-lavanda/20",
      items: [
        "Integrarea schimbărilor în viața de zi cu zi",
        "Menținerea echilibrului emoțional și mental",
        "Conectarea cu abundența și manifestarea visurilor tale",
      ],
    },
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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
            36 de săptămâni organizate în 3 faze distincte pentru o transformare completă
          </motion.p>
          <motion.div className="h-0.5 bg-auriu mx-auto mt-6" variants={lineExpand} />
        </motion.div>

        {/* Timeline */}
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
              {/* Phase Number */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-cormorant text-4xl md:text-5xl text-auriu/40">
                  {phase.number}
                </span>
                <span className="font-montserrat text-xs text-auriu bg-auriu/10 px-3 py-1 rounded-full">
                  {phase.weeks}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-2">
                {phase.title}
              </h3>
              <p className="font-montserrat text-sm text-auriu mb-6">{phase.subtitle}</p>

              {/* Items */}
              <ul className="space-y-3">
                {phase.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="font-montserrat text-sm text-gri-mediu flex items-start gap-3"
                  >
                    <span className="w-6 h-6 bg-auriu/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-auriu text-xs">✓</span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Arrow for non-last items */}
              {index < phases.length - 1 && (
                <div className="hidden lg:flex justify-end mt-6">
                  <div className="w-8 h-8 bg-auriu rounded-full flex items-center justify-center">
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
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ==================== RESULTS SECTION ==================== */
const ResultsSection = () => {
  const results = [
    {
      icon: "🌟",
      title: "Transformare Interioară",
      description:
        "Vei avea o claritate profundă asupra direcției tale de viață și a valorilor personale.",
    },
    {
      icon: "🦋",
      title: "Eliberare Emoțională",
      description:
        "Vei fi eliberată de anxietăți, frici și blocaje care te împiedicau să înaintezi.",
    },
    {
      icon: "🛠️",
      title: "Instrumente Practice",
      description:
        "Vei avea metode clare pentru a-ți gestiona emoțiile și a crea obiceiuri sustenabile.",
    },
    {
      icon: "💫",
      title: "Conexiune cu Sinele",
      description:
        "Vei redescoperi autenticitatea și te vei simți aliniată cu visurile tale.",
    },
  ];

  return (
    <section className="section-padding bg-charcoal text-white relative overflow-hidden">
      <SparkleParticles
        count={20}
        intensity="bright"
        colors={["#D4AF6A", "#D4AF6A", "#E5E5E5"]}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
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
          <motion.div className="h-0.5 bg-auriu mx-auto mt-6 max-w-xs" variants={lineExpand} />
        </motion.div>

        {/* Results Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {results.map((result, index) => (
            <motion.div
              key={index}
              className="text-center p-6"
              variants={staggerChild}
            >
              <div className="text-4xl mb-4">{result.icon}</div>
              <h3 className="font-cormorant text-xl md:text-2xl text-crem mb-3">
                {result.title}
              </h3>
              <p className="font-montserrat text-sm text-gri-mediu leading-relaxed">
                {result.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ==================== AUDIENCE SECTION ==================== */
const AudienceSection = () => {
  const forYouIf = [
    "Simți că porți prea mult și nu mai știi unde să lași jos",
    "Ai visuri mari, dar te-ai pierdut pe drum",
    "Știi că e mai mult în tine, dar nu știi încă ce",
    "Simți că a venit timpul să te alegi pe tine",
    "Vrei să eliberezi ce nu îți mai servește",
    "Vrei să începi un nou capitol, cu adevăr și claritate",
  ];

  return (
    <section className="section-padding bg-crem relative overflow-hidden">
      <SparkleParticles count={12} intensity="subtle" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Story */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInLeft}
          >
            <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-charcoal mb-6">
              Poate te recunoști aici...
            </h2>
            <div className="space-y-4 font-montserrat text-gri-mediu leading-relaxed">
              <p>
                Ai fost puternică prea mult timp. Ai dus, ai rezistat, ai tăcut.
                Ai pus pe toți înaintea ta.
              </p>
              <p>
                Și, fără să-ți dai seama, <span className="text-charcoal font-medium">te-ai pus pe tine pe pauză</span>.
              </p>
              <p className="text-charcoal font-medium italic">
                Acest program este despre a te aduce înapoi în viața ta.
              </p>
              <div className="pt-4 border-t border-gri-deschis mt-6">
                <p className="italic text-sm">
                  &ldquo;Și eu am fost acolo. Am dus mai mult decât era al meu. Am intrat în ani noi cu
                  speranță, dar cu aceleași emoții vechi. Până într-o zi, când am înțeles că nu viața
                  mă ținea pe loc, ci ceea ce nu eliberasem din mine.&rdquo;
                </p>
                <p className="text-auriu text-sm mt-2">— Olimpia Moldoveanu</p>
              </div>
            </div>
          </motion.div>

          {/* Right - For You If */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInRight}
          >
            <div className="bg-white rounded-card p-6 md:p-8 border border-gri-deschis">
              <h3 className="font-cormorant text-2xl text-charcoal mb-6">
                Acest program este pentru tine dacă...
              </h3>
              <ul className="space-y-4">
                {forYouIf.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 font-montserrat text-gri-mediu"
                  >
                    <span className="w-6 h-6 bg-auriu/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-auriu text-sm">✓</span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="font-montserrat text-sm text-auriu italic mt-6 text-center">
                Nu este necesar să știi cum, doar să simți că e momentul.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ==================== BENEFITS SECTION ==================== */
const BenefitsSection = () => {
  const benefits = [
    "Vei învăța cum să recunoști și să eliberezi fricile și blocajele emoționale care te țin pe loc",
    "Vei înțelege de ce te simți pierdută sau lipsită de motivație și ce să faci concret",
    "Vei descoperi ce blocaje financiare sau de carieră te sabotează",
    "Primești instrumente simple și eficiente pentru echilibrare emoțională",
    "Vei avea ghidare directă de la trei specialiste cu experiență practică reală",
    "Vei pleca cu claritate despre ce vrei de la 2026 și primii pași concreți",
  ];

  return (
    <section className="section-padding bg-white">
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
            Cum te va ajuta acest program?
          </motion.h2>
          <motion.div className="h-0.5 bg-auriu mx-auto mt-6" variants={lineExpand} />
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 gap-4 md:gap-6"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-crem rounded-lg p-5 border-l-4 border-auriu"
              variants={staggerChild}
            >
              <p className="font-montserrat text-gri-mediu">{benefit}</p>
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
            Ești pregătită să începi?
          </motion.h2>
          <motion.p
            className="font-montserrat text-gri-mediu mb-8 max-w-xl mx-auto"
            variants={fadeInUp}
          >
            Această călătorie de 36 de săptămâni este invitația ta de a-ți redescoperi
            puterea interioară și de a-ți crea o viață împlinită.
          </motion.p>

          {/* Pricing/Info Card */}
          <motion.div
            className="bg-white rounded-card p-6 md:p-10 border-2 border-auriu shadow-card mb-8"
            variants={fadeInUp}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-2xl">✨</span>
              <span className="font-montserrat text-sm text-auriu font-medium tracking-wider uppercase">
                Program Exclusiv
              </span>
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-2">
              36 Săptămâni de Transformare
            </h3>
            <p className="font-montserrat text-gri-mediu mb-6">
              Plată în rate disponibilă (6 sau 9 rate fără dobândă)
            </p>
            <div className="space-y-3 text-left max-w-md mx-auto mb-8">
              {[
                "Sesiuni de grup săptămânale live",
                "Acces la 3 practiciene certificate",
                "Materiale și exerciții pentru acasă",
                "Grup privat WhatsApp pentru suport",
                "Înregistrări disponibile 30 zile",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 font-montserrat text-sm text-gri-mediu">
                  <span className="text-auriu">✓</span>
                  {item}
                </div>
              ))}
            </div>
            <motion.a
              href="mailto:olimpia@exemplu.ro?subject=Înscriere Program 36 Săptămâni"
              className="btn-primary inline-block text-base px-10 py-4"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Programează o discuție
            </motion.a>
          </motion.div>

          <motion.p
            className="font-montserrat text-sm text-gri-mediu italic"
            variants={fadeInUp}
          >
            Îți răspund personal în maxim 24 de ore. Putem vorbi fără niciun angajament.
          </motion.p>
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
        <Link href="/" className="inline-block mb-4">
          <span className="font-cormorant text-crem text-lg tracking-widest">
            OLIMPIA MOLDOVEANU
          </span>
        </Link>
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
