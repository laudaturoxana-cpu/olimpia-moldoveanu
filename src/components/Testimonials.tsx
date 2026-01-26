"use client";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Am avut o perioadă mai puțin bună. După discuțiile cu Olimpia, conștientizările nu au întârziat să apară. Simt că am început să mă înțeleg mai bine și să fiu mai blândă cu mine.",
      name: "Maria D.",
      age: "47 ani",
      context: "Program 36 săptămâni",
    },
    {
      text: "Știam că pot mai mult, dar nu știam ce și cum. Olimpia m-a ghidat cu o blândețe pe care nu am primit-o de la nimeni. Acum am claritate și curajul să fac pașii.",
      name: "Elena P.",
      age: "44 ani",
      context: "Coaching 1:1 (6 luni)",
    },
    {
      text: "Nu mai voiam să trăiesc doar pentru alții. Am învățat că nu e egoism să te alegi pe tine — e responsabilitate. Relația cu soțul s-a schimbat complet.",
      name: "Ioana M.",
      age: "51 ani",
      context: "Program 36 săptămâni",
    },
    {
      text: "Aveam nevoie de liniște în cap și de un plan clar. Olimpia mi-a oferit ambele — cu răbdare, structură și fără să mă judece niciodată.",
      name: "Andreea S.",
      age: "42 ani",
      context: "Workshop + Program tematic",
    },
  ];

  return (
    <section id="testimoniale" className="section-padding bg-crem">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-h2-mobile md:text-h2 text-charcoal mb-4">
            Ce spun femeile care au trecut prin program
          </h2>
          <div className="w-16 h-0.5 bg-auriu mx-auto"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-card p-8 border-l-4 border-auriu shadow-sm hover:shadow-card transition-all duration-300"
            >
              {/* Quote Mark */}
              <div className="mb-4">
                <span className="font-cormorant text-6xl text-auriu/30 leading-none">
                  "
                </span>
              </div>

              {/* Testimonial Text */}
              <p className="font-montserrat text-lg text-charcoal italic leading-relaxed mb-6">
                {testimonial.text}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                {/* Avatar Placeholder */}
                <div className="w-12 h-12 rounded-full bg-roz-pudrat/30 flex items-center justify-center flex-shrink-0">
                  <span className="font-cormorant text-xl text-charcoal">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>

                <div>
                  <p className="font-montserrat font-medium text-charcoal">
                    {testimonial.name}, {testimonial.age}
                  </p>
                  <p className="font-montserrat text-sm text-gri-mediu">
                    {testimonial.context}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
