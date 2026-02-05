"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  lineExpand,
  staggerContainer,
  staggerChild,
  viewportConfig,
} from "@/lib/animations";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const services = [
    { value: "", label: "Alege..." },
    { value: "program-36", label: "Program Semnătură 36 săpt" },
    { value: "workshop", label: "Workshop De la Frică la Liniște" },
    { value: "coaching-1-1", label: "Coaching 1:1" },
    { value: "info", label: "Vreau să aflu mai multe" },
  ];

  return (
    <section id="contact" className="section-padding bg-crem">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.h2
            className="font-cormorant text-h2-mobile md:text-h2 text-charcoal mb-4"
            variants={fadeInUp}
          >
            Hai să vorbim
          </motion.h2>
          <motion.p
            className="font-montserrat text-gri-mediu max-w-xl mx-auto"
            variants={fadeInUp}
          >
            Dacă simți că e momentul să începi — sunt aici să te ghidez.
          </motion.p>
          <motion.div
            className="h-0.5 bg-auriu mx-auto mt-6"
            variants={lineExpand}
          />
        </motion.div>

        {/* Contact Content */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-card p-5 sm:p-6 md:p-8 lg:p-10 border border-gri-deschis"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInLeft}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              variants={staggerContainer(0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {/* Name */}
              <motion.div variants={staggerChild}>
                <label
                  htmlFor="name"
                  className="block font-montserrat text-sm font-medium text-charcoal mb-2"
                >
                  Nume complet <span className="text-auriu">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Cum te cheamă?"
                  className="font-montserrat"
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={staggerChild}>
                <label
                  htmlFor="email"
                  className="block font-montserrat text-sm font-medium text-charcoal mb-2"
                >
                  Email <span className="text-auriu">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Unde îți trimit răspunsul?"
                  className="font-montserrat"
                />
              </motion.div>

              {/* Phone */}
              <motion.div variants={staggerChild}>
                <label
                  htmlFor="phone"
                  className="block font-montserrat text-sm font-medium text-charcoal mb-2"
                >
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Opțional — dacă vrei să te sun"
                  className="font-montserrat"
                />
              </motion.div>

              {/* Service */}
              <motion.div variants={staggerChild}>
                <label
                  htmlFor="service"
                  className="block font-montserrat text-sm font-medium text-charcoal mb-2"
                >
                  Serviciu dorit <span className="text-auriu">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="font-montserrat"
                >
                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </motion.div>

              {/* Message */}
              <motion.div variants={staggerChild}>
                <label
                  htmlFor="message"
                  className="block font-montserrat text-sm font-medium text-charcoal mb-2"
                >
                  Mesaj <span className="text-auriu">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Spune-mi ce simți acum. Nu trebuie să fie perfect formulat — scrie ce îți vine."
                  className="font-montserrat resize-none"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={staggerChild}>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary flex items-center justify-center gap-2 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : undefined}
                  whileTap={!isSubmitting ? { scale: 0.98 } : undefined}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Se trimite...
                    </>
                  ) : (
                    "Trimite mesajul"
                  )}
                </motion.button>
              </motion.div>

              {/* Status Messages */}
              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    className="p-4 bg-verde-sage/20 rounded-lg text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <p className="font-montserrat text-charcoal">
                      Mulțumesc pentru mesaj! Îți răspund în maxim 24 de ore.
                    </p>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    className="p-4 bg-roz-pudrat/30 rounded-lg text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <p className="font-montserrat text-charcoal">
                      Ups, ceva nu a funcționat. Te rog încearcă din nou sau
                      scrie-mi direct pe email.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Privacy Note */}
              <p className="font-montserrat text-sm text-gri-mediu italic text-center">
                Îți răspund personal în maxim 24 ore. E în regulă să nu știi de
                unde să începi — de aici pornim.
              </p>
            </motion.form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="flex flex-col gap-4 sm:gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInRight}
          >
            {/* Info Card */}
            <div className="bg-roz-pudrat/20 rounded-card p-5 sm:p-6 md:p-8 border-l-4 border-auriu">
              <h3 className="font-cormorant text-xl sm:text-2xl text-charcoal mb-4 sm:mb-6">
                Detalii de contact
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-xl">📍</span>
                  <div>
                    <p className="font-montserrat font-medium text-charcoal">
                      Locație
                    </p>
                    <p className="font-montserrat text-gri-mediu">
                      Online (Zoom) + București (la cerere, ședințe la cabinet)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-xl">📧</span>
                  <div>
                    <p className="font-montserrat font-medium text-charcoal">
                      Email
                    </p>
                    <a
                      href="mailto:olimpia@exemplu.ro"
                      className="font-montserrat text-auriu hover:underline"
                    >
                      olimpia@exemplu.ro
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-xl">📞</span>
                  <div>
                    <p className="font-montserrat font-medium text-charcoal">
                      Telefon
                    </p>
                    <a
                      href="tel:+40700000000"
                      className="font-montserrat text-auriu hover:underline"
                    >
                      +40 700 000 000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-xl">🕐</span>
                  <div>
                    <p className="font-montserrat font-medium text-charcoal">
                      Program
                    </p>
                    <p className="font-montserrat text-gri-mediu">
                      Luni-Vineri, 10:00-18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Encouragement Card */}
            <div className="bg-white rounded-card p-5 sm:p-6 md:p-8 border border-gri-deschis flex-grow flex items-center">
              <div className="text-center w-full">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-auriu/10 flex items-center justify-center">
                  <span className="text-3xl">💜</span>
                </div>
                <p className="font-cormorant text-xl sm:text-2xl text-charcoal mb-4 italic">
                  „Dacă nu ești sigură — e ok. Scrie-mi oricum."
                </p>
                <p className="font-montserrat text-gri-mediu">
                  Putem vorbi fără niciun angajament.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
