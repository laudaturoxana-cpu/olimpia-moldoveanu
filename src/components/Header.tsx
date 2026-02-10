"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { EASE, DURATION } from "@/lib/animations";
import SparkleParticles from "@/components/ui/SparkleParticles";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Servicii", id: "servicii" },
    { label: "Despre", id: "despre" },
    { label: "Proces", id: "proces" },
    { label: "Testimoniale", id: "testimoniale" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-crem/95 backdrop-blur-sm shadow-header py-3"
          : "bg-transparent py-5"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: DURATION.normal, ease: EASE }}
    >
      {/* Sparkle Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <SparkleParticles count={15} intensity="bright" minSize={2} maxSize={5} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo - Mobile */}
        <motion.button
          onClick={() => scrollToSection("hero")}
          className="flex flex-col items-start cursor-pointer group md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: DURATION.fast, ease: EASE, delay: 0.3 }}
        >
          <span
            className="font-cormorant text-charcoal text-[15px] sm:text-base tracking-widest"
            style={{ letterSpacing: "0.08em" }}
          >
            OLIMPIA MOLDOVEANU
          </span>
          <span className="w-full h-px bg-auriu my-0.5"></span>
          <span
            className="font-montserrat text-gri-mediu text-[8px] sm:text-[9px] tracking-wider uppercase"
            style={{ letterSpacing: "0.05em" }}
          >
            Coach Transformațional & Spiritual Life Coach
          </span>
        </motion.button>

        {/* Logo - Desktop (ORIGINAL) */}
        <motion.button
          onClick={() => scrollToSection("hero")}
          className="hidden md:flex flex-col items-start cursor-pointer group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: DURATION.fast, ease: EASE, delay: 0.3 }}
        >
          <span
            className="font-cormorant text-charcoal text-xl md:text-2xl tracking-widest"
            style={{ letterSpacing: "0.1em" }}
          >
            OLIMPIA MOLDOVEANU
          </span>
          <span className="w-full h-px bg-auriu my-1"></span>
          <span
            className="font-montserrat text-gri-mediu text-[10px] md:text-xs tracking-widest uppercase"
            style={{ letterSpacing: "0.15em" }}
          >
            Coach Transformațional & Spiritual Life Coach
          </span>
        </motion.button>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden lg:flex items-center gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.4 },
            },
          }}
        >
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="font-montserrat text-sm text-charcoal hover:text-auriu transition-colors duration-200"
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: DURATION.fast, ease: EASE },
                },
              }}
            >
              {item.label}
            </motion.button>
          ))}
        </motion.nav>

        {/* Desktop CTA */}
        <motion.button
          onClick={() => scrollToSection("contact")}
          className="hidden lg:block btn-primary text-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: DURATION.fast, ease: EASE, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Află cum te pot ajuta
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Meniu"
        >
          <span
            className={`w-6 h-0.5 bg-charcoal transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-charcoal transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-charcoal transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-crem/98 backdrop-blur-sm shadow-lg transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <nav className="flex flex-col p-4 sm:p-6 gap-3 sm:gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="font-montserrat text-base text-charcoal hover:text-auriu transition-colors duration-200 text-left py-2"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="btn-primary text-center mt-4"
          >
            Află cum te pot ajuta
          </button>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
