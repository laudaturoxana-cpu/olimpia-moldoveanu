"use client";

const Services = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      name: "De la Frică la Liniște",
      type: "Workshop",
      badge: null,
      description:
        "Workshop live de 3 ore unde înveți tehnici practice de gestionare a fricii și anxietății. Perfect pentru a simți cum e să lucrezi cu mine.",
      includes: [
        "3 ore live (teoria + practică + Q&A)",
        "Înregistrarea workshop-ului (30 zile acces)",
        'Fișă de lucru PDF „Harta Fricii Tale"',
        "Grup WhatsApp 7 zile pentru întrebări",
      ],
      duration: "3 ore live",
      forWhom:
        'Femei la început de drum, care vor să mă „testeze" înainte de programul mare',
      investment: "De la 149 lei",
      cta: "Participă la următorul workshop",
      featured: false,
    },
    {
      name: "Drumul Înapoi la Tine",
      type: "Program Semnătură",
      badge: "Program Principal",
      description:
        "Program complet de transformare profundă pentru femei care simt că s-au pierdut pe sine și vor să își recapete liniștea, claritatea și puterea interioară.",
      includes: [
        "36 săptămâni de ghidare (9 luni)",
        "18 sesiuni de grup live (Zoom, joi 19:00-21:00)",
        "Grup WhatsApp privat pentru suport zilnic",
        "36 fișe de lucru + 12 meditații ghidate",
        "Sistem complet 27 Legii Universale",
        "3 check-in-uri individuale cu Olimpia",
      ],
      process: "Eliberare (12 săpt) → Aliniere (12 săpt) → Manifestare (12 săpt)",
      duration: "9 luni (36 săptămâni)",
      forWhom:
        'Femei pregătite pentru transformare profundă, care au ajuns la un „prag" și vor structură clară + suport constant',
      investment: "Programare pentru detalii • Plata în rate disponibilă",
      cta: "Vreau să aflu mai mult",
      featured: true,
    },
    {
      name: "Ghidare Personalizată",
      type: "Coaching 1:1",
      badge: null,
      description:
        "Sesiuni individuale pentru transformare profundă pe situația ta specifică. Ideal după finalizarea programului de grup sau pentru nevoi complexe.",
      includes: [
        "Sesiuni 1:1 pe Zoom (60-90 min)",
        "Acces WhatsApp direct între sesiuni",
        "Materiale personalizate",
        "Planificare strategică personalizată",
      ],
      packages: "3 luni / 6 luni / 9 luni",
      duration: "Flexibil",
      forWhom:
        "Femei care vor personalizare maximă sau au situație complexă",
      investment: "Programare pentru detalii",
      cta: "Vreau să discut",
      featured: false,
    },
  ];

  return (
    <section id="servicii" className="section-padding bg-crem">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-h2-mobile md:text-h2 text-charcoal mb-4">
            Cum te pot ajuta
          </h2>
          <div className="w-16 h-0.5 bg-auriu mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-card p-8 border transition-all duration-300 hover:shadow-card flex flex-col ${
                service.featured
                  ? "border-2 border-auriu lg:scale-105 lg:-my-4 shadow-card"
                  : "border-gri-deschis"
              }`}
            >
              {/* Badge */}
              {service.badge && (
                <div className="mb-4">
                  <span className="inline-block bg-auriu text-white text-xs font-montserrat font-medium px-4 py-1.5 rounded-full">
                    {service.badge}
                  </span>
                </div>
              )}

              {/* Service Type */}
              <p className="font-montserrat text-sm text-auriu uppercase tracking-wider mb-2">
                {service.type}
              </p>

              {/* Service Name */}
              <h3 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-4">
                {service.name}
              </h3>

              {/* Description */}
              <p className="font-montserrat text-gri-mediu mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* What's Included */}
              <div className="mb-6 flex-grow">
                <p className="font-montserrat font-medium text-charcoal mb-3">
                  Ce include:
                </p>
                <ul className="space-y-2">
                  {service.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-auriu flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-montserrat text-sm text-gri-mediu">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process (for main program) */}
              {service.process && (
                <div className="mb-6 p-4 bg-crem rounded-lg">
                  <p className="font-montserrat text-sm text-charcoal">
                    <span className="font-medium">Proces:</span>{" "}
                    {service.process}
                  </p>
                </div>
              )}

              {/* Packages (for 1:1) */}
              {service.packages && (
                <div className="mb-6">
                  <p className="font-montserrat text-sm text-gri-mediu">
                    <span className="font-medium text-charcoal">Pachete:</span>{" "}
                    {service.packages}
                  </p>
                </div>
              )}

              {/* Duration */}
              <div className="mb-4">
                <p className="font-montserrat text-sm text-gri-mediu">
                  <span className="font-medium text-charcoal">Durată:</span>{" "}
                  {service.duration}
                </p>
              </div>

              {/* For Whom */}
              <div className="mb-6 pb-6 border-b border-gri-deschis">
                <p className="font-montserrat text-sm text-gri-mediu">
                  <span className="font-medium text-charcoal">Pentru cine:</span>{" "}
                  {service.forWhom}
                </p>
              </div>

              {/* Investment */}
              <div className="mb-6">
                <p className="font-montserrat text-base text-charcoal font-medium">
                  {service.investment}
                </p>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => scrollToSection("contact")}
                className={`w-full py-3.5 rounded-button font-montserrat font-medium transition-all duration-300 ${
                  service.featured
                    ? "bg-auriu text-white hover:bg-opacity-90"
                    : "border-2 border-auriu text-auriu hover:bg-auriu hover:text-white"
                }`}
              >
                {service.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
