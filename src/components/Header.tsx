"use client";

import { useState, useEffect } from "react";

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-crem/95 backdrop-blur-sm shadow-header py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo - Mobile */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex flex-col items-start cursor-pointer group md:hidden"
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
            Coaching Transformator prin Legile Universale
          </span>
        </button>

        {/* Logo - Desktop (ORIGINAL) */}
        <button
          onClick={() => scrollToSection("hero")}
          className="hidden md:flex flex-col items-start cursor-pointer group"
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
            Coaching Transformator prin Legile Universale
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="font-montserrat text-sm text-charcoal hover:text-auriu transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button
          onClick={() => scrollToSection("contact")}
          className="hidden lg:block btn-primary text-sm"
        >
          Află cum te pot ajuta
        </button>

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
        <nav className="flex flex-col p-6 gap-4">
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
    </header>
  );
};

export default Header;
