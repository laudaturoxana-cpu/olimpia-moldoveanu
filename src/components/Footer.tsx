"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  fadeIn,
  staggerContainer,
  staggerChild,
  lineExpand,
  viewportConfig,
} from "@/lib/animations";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "Servicii", id: "servicii" },
    { label: "Despre mine", id: "despre" },
    { label: "Cum lucrăm", id: "proces" },
    { label: "Testimoniale", id: "testimoniale" },
    { label: "Contact", id: "contact" },
  ];

  const legalLinks = [
    { label: "Politica de confidențialitate", href: "/confidentialitate" },
    { label: "Termeni și condiții", href: "/termeni" },
    { label: "GDPR - Protecția datelor", href: "/gdpr" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal">
      {/* Animated Top Border */}
      <motion.div
        className="h-1 bg-auriu"
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={lineExpand}
        style={{ width: "100%" }}
      />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-10 sm:py-12 md:py-16">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-8"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Column 1: Logo & Description */}
          <motion.div className="lg:col-span-1" variants={staggerChild}>
            {/* Logo */}
            <div className="mb-6">
              <span
                className="font-cormorant text-crem text-xl tracking-widest block"
                style={{ letterSpacing: "0.1em" }}
              >
                OLIMPIA MOLDOVEANU
              </span>
              <span className="block w-full h-px bg-auriu my-2"></span>
              <span
                className="font-montserrat text-gri-mediu text-[11px] sm:text-xs tracking-widest uppercase block"
                style={{ letterSpacing: "0.15em" }}
              >
                Coaching Transformator prin Legile Universale
              </span>
            </div>

            {/* Description */}
            <p className="font-montserrat text-sm text-gri-mediu leading-relaxed">
              Ghidare blândă și structurată pentru femei care vor să își recapete
              liniștea interioară, claritatea și puterea. Transformare reală,
              fără promisiuni goale.
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={staggerChild}>
            <h4 className="font-cormorant text-xl text-crem mb-6">
              Linkuri rapide
            </h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="font-montserrat text-sm text-gri-mediu hover:text-auriu transition-colors duration-200 text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Column 3: Legal */}
          <motion.div variants={staggerChild}>
            <h4 className="font-cormorant text-xl text-crem mb-6">Legal</h4>
            <nav className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-montserrat text-sm text-gri-mediu hover:text-auriu transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Column 4: Contact */}
          <motion.div variants={staggerChild}>
            <h4 className="font-cormorant text-xl text-crem mb-6">
              Contact rapid
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:olimpia@exemplu.ro"
                className="font-montserrat text-sm text-gri-mediu hover:text-auriu transition-colors duration-200 flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                olimpia@exemplu.ro
              </a>
              <a
                href="tel:+40700000000"
                className="font-montserrat text-sm text-gri-mediu hover:text-auriu transition-colors duration-200 flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +40 700 000 000
              </a>

              {/* Social Media - Facebook */}
              <div className="pt-4">
                <motion.a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gri-mediu hover:border-auriu hover:bg-auriu transition-all duration-200 group"
                  aria-label="Facebook"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-5 h-5 text-gri-mediu group-hover:text-white transition-colors duration-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gri-mediu/20">
        <motion.div
          className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeIn}
        >
          <p className="font-montserrat text-sm text-gri-mediu text-center">
            © {currentYear} Olimpia Moldoveanu. Toate drepturile rezervate.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
