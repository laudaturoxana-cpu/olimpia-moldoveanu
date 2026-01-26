"use client";

const About = () => {
  const credentials = [
    {
      icon: "📚",
      label: "Experiență",
      value: "13+ ani lucru cu oamenii, 40+ ani experiență de viață",
    },
    {
      icon: "🎓",
      label: "Certificări",
      value:
        "27 Legii Universale (licențiate), Coaching transformator, NLP, Practici energetice",
    },
    {
      icon: "💜",
      label: "Specializări",
      value:
        "Anxietate, frici, blocaje emoționale, claritate de viață, manifestare conștientă",
    },
    {
      icon: "✨",
      label: "Abordare",
      value: 'Blândețe + Structură = „Spiritual cu picioarele pe pământ"',
    },
  ];

  return (
    <section id="despre" className="section-padding bg-crem">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Image/Visual Area - 40% */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="relative">
              {/* Decorative Background */}
              <div className="absolute -inset-4 bg-roz-pudrat/20 rounded-3xl -rotate-3"></div>

              {/* Image Placeholder / Decorative Element */}
              <div className="relative aspect-[3/4] bg-gradient-to-br from-roz-pudrat/30 to-crem rounded-2xl overflow-hidden flex items-center justify-center">
                {/* If no image, show elegant placeholder */}
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-auriu/20 flex items-center justify-center">
                    <span className="text-4xl">🌸</span>
                  </div>
                  <p className="font-cormorant text-2xl text-charcoal italic">
                    „Transformarea începe
                    <br />
                    cu o decizie"
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-auriu/10 rounded-tl-full"></div>
              </div>

              {/* Floating Accent */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-verde-sage/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Text Content - 60% */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            {/* Section Title */}
            <h2 className="font-cormorant text-h2-mobile md:text-h2 text-charcoal mb-2">
              Bună, sunt Olimpia
            </h2>
            <p className="font-montserrat text-lg text-auriu mb-8">
              Ghid în transformare pentru femei care vor să își recapete liniștea
              interioară
            </p>

            {/* Story */}
            <div className="space-y-6 font-montserrat text-gri-mediu leading-relaxed mb-10">
              <p>
                Am 63 de ani. La 50 de ani, când majoritatea femeilor se
                resemnează că „așa e viața", EU am început cea mai profundă
                transformare a vieții mele.
              </p>

              <p>
                Am trăit zeci de ani în responsabilitate, economie, structură. Am
                fost „femea care ține totul în spate". Am fost Eva. De aceea o
                înțeleg — pentru că AM FOST EA.
              </p>

              <p>
                Astăzi lucrez cu 27 Legii Universale (sistem licențiat), coaching
                transformator și practici emoționale integrate — NLP, journaling,
                meditații, Ho'oponopono, lucrul cu copilul interior. Nu predau
                teoria pe care am citit-o.{" "}
                <span className="text-charcoal font-medium">
                  Predau VIAȚA pe care am trăit-o.
                </span>
              </p>

              <p>
                Când îți spun „te țin de mână și te duc înapoi la tine" — nu e un
                slogan de marketing. E o promisiune din experiența mea. Pentru că
                cineva m-a ținut de mână la 50 de ani când eram pierdută. Și acum
                e rândul meu.
              </p>

              <p>
                Programul meu principal durează 36 săptămâni pentru că știu din
                propria transformare că schimbarea profundă nu vine în 2
                săptămâni. Vine în timp. Vine cu practică zilnică. Vine cu
                sprijin constant.
              </p>
            </div>

            {/* Credentials Box */}
            <div className="bg-white rounded-card p-8 border border-gri-deschis">
              <div className="grid sm:grid-cols-2 gap-6">
                {credentials.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-montserrat font-medium text-charcoal mb-1">
                        {item.label}
                      </p>
                      <p className="font-montserrat text-sm text-gri-mediu">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
