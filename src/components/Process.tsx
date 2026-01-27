"use client";

const Process = () => {
  const steps = [
    {
      number: "01",
      name: "ELIBERARE",
      weeks: "Săptămâni 1-12",
      icon: "🌊",
      description:
        "Identificăm și eliberăm fricile, blocajele emoționale, convingerile limitative. Lucrăm cu vinovăția, rușinea, frica de greșeală. Înveți să fii blândă cu tine.",
      details:
        "Sesiuni de grup, exerciții zilnice simple (5-15 min), suport în grup WhatsApp, materiale ghidate.",
      bgColor: "bg-roz-pudrat/20",
    },
    {
      number: "02",
      name: "ALINIERE",
      weeks: "Săptămâni 13-24",
      icon: "🧭",
      description:
        "Reconstruim relația cu tine. Descoperi ce contează cu adevărat pentru tine, care sunt valorile tale, ce vrei să manifești. Claritate și direcție.",
      details:
        "Lucru profund cu identitatea, valorile, viziunea. Pași clari pentru aliniere. Check-in individual cu mine.",
      bgColor: "bg-verde-sage/20",
    },
    {
      number: "03",
      name: "MANIFESTARE",
      weeks: "Săptămâni 25-36",
      icon: "✨",
      description:
        "Transformi claritatea în acțiuni concrete. Manifești conștient viața pe care ți-o dorești — în relații, în carieră, în bani, în pace interioară.",
      details:
        "Acțiuni practice, integrare, manifestare conștientă prin Legile Universale. Îți construiești viața aliniată.",
      bgColor: "bg-auriu/15",
    },
  ];

  return (
    <section id="proces" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-h2-mobile md:text-h2 text-charcoal mb-4">
            Drumul transformării tale
          </h2>
          <p className="font-montserrat text-gri-mediu max-w-2xl mx-auto">
            Un proces clar, în 3 etape, ghidat pas cu pas
          </p>
          <div className="w-16 h-0.5 bg-auriu mx-auto mt-6"></div>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Steps Grid */}
          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div
                  className={`${step.bgColor} rounded-card p-8 h-full border border-transparent hover:border-auriu/30 transition-all duration-300`}
                >
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-cormorant text-5xl text-auriu/40">
                      {step.number}
                    </span>
                    <span className="text-4xl">{step.icon}</span>
                  </div>

                  {/* Step Name */}
                  <h3 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-2">
                    {step.name}
                  </h3>

                  {/* Weeks */}
                  <p className="font-montserrat text-sm text-auriu mb-6">
                    {step.weeks}
                  </p>

                  {/* Description */}
                  <p className="font-montserrat text-gri-mediu leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Details Box */}
                  <div className="bg-white/60 rounded-lg p-4">
                    <p className="font-montserrat text-sm text-charcoal">
                      <span className="font-medium">Ce se întâmplă:</span>{" "}
                      <span className="text-gri-mediu">{step.details}</span>
                    </p>
                  </div>
                </div>

                {/* Arrow Connector (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 w-8 h-8 bg-auriu rounded-full items-center justify-center -translate-y-1/2 z-20">
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
                )}

                {/* Arrow Connector (Mobile) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-8 h-8 bg-auriu rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white rotate-90"
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
              </div>
            ))}
          </div>
        </div>

        {/* Validation Text */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <p className="font-montserrat text-lg text-gri-mediu italic leading-relaxed">
            „Poți veni și doar cu «nu mai pot». E de ajuns ca să începem. Nu
            trebuie să fii perfectă — trebuie doar să fii dispusă să încerci."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
