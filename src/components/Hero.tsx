"use client";

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
      className="min-h-screen flex items-center pt-32 pb-20 md:pt-40 md:pb-28"
      style={{
        background: "linear-gradient(180deg, #FAF7F5 0%, #FCF5F5 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16 w-full">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Text Content - 60% */}
          <div className="lg:col-span-3 space-y-8 text-center md:text-left">
            {/* Main Heading */}
            <h1
              className="font-cormorant text-h1-mobile md:text-h1 text-charcoal"
              style={{ lineHeight: "1.6" }}
            >
              „Nu mai am liniște în cap?"
              <br />
              <span className="text-gri-mediu">Nu ești singură.</span>
            </h1>

            {/* Subtitle */}
            <div
              className="font-montserrat text-body-mobile md:text-body text-gri-mediu max-w-2xl mx-auto md:mx-0"
              style={{ lineHeight: "1.8" }}
            >
              <p className="mb-4">
                Te ghidez de la anxietate, frici și oboseală emoțională la pace
                interioară și claritate — cu pași clari, suport real și un sistem
                coerent care funcționează.
              </p>
              <p>
                Fără promisiuni goale, fără presiune. Doar transformare autentică,
                în ritmul tău.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection("contact")}
                className="btn-primary text-base"
              >
                Află cum te pot ajuta
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="btn-secondary text-base"
              >
                Descarcă ghidul gratuit
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 gap-3 pt-6">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gri-mediu justify-center md:justify-start"
                >
                  <span className="text-verde-sage font-bold text-lg">{badge.icon}</span>
                  <span className="font-montserrat text-sm">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element - 40% */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end hidden md:flex">
            <div className="relative w-full max-w-md">
              {/* Decorative Circle Background */}
              <div className="absolute inset-0 bg-roz-pudrat/30 rounded-full blur-3xl"></div>

              {/* Main Decorative Element */}
              <div className="relative aspect-square flex items-center justify-center">
                {/* Outer Circle */}
                <div className="absolute w-full h-full rounded-full border border-auriu/20"></div>

                {/* Middle Circle */}
                <div className="absolute w-4/5 h-4/5 rounded-full border border-roz-pudrat/40"></div>

                {/* Inner Circle */}
                <div className="absolute w-3/5 h-3/5 rounded-full bg-gradient-to-br from-roz-pudrat/20 to-transparent"></div>

                {/* Center Element */}
                <div className="relative z-10 text-center p-8">
                  <div className="w-1 h-16 bg-auriu mx-auto mb-4"></div>
                  <p className="font-cormorant text-2xl md:text-3xl text-charcoal italic leading-relaxed">
                    „Te țin de mână
                    <br />
                    și te duc înapoi
                    <br />
                    la tine"
                  </p>
                  <div className="w-1 h-16 bg-auriu mx-auto mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
