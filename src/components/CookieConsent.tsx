"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { EASE, DURATION } from "@/lib/animations";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be changed
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      // Small delay to prevent flash on page load
      const timer = setTimeout(() => setShowBanner(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    const consentData = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie_consent", JSON.stringify(consentData));
    setShowBanner(false);
  };

  const acceptSelected = () => {
    const consentData = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie_consent", JSON.stringify(consentData));
    setShowBanner(false);
  };

  const rejectAll = () => {
    const consentData = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie_consent", JSON.stringify(consentData));
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-charcoal/50 z-[998] backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: DURATION.fast, ease: EASE }}
          />

          {/* Cookie Banner */}
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-[999] p-4 md:p-6"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: DURATION.normal, ease: EASE }}
          >
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl border border-gri-deschis overflow-hidden">
              {/* Main Content */}
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-auriu/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-auriu"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-cormorant text-2xl text-charcoal mb-1">
                      Respectăm confidențialitatea ta
                    </h3>
                    <p className="font-montserrat text-sm text-gri-mediu leading-relaxed">
                      Folosim cookie-uri pentru a-ți oferi cea mai bună experiență pe site-ul nostru.
                      Poți alege ce tipuri de cookie-uri accepți.
                    </p>
                  </div>
                </div>

                {/* Settings Panel */}
                <AnimatePresence>
                  {showSettings && (
                    <motion.div
                      className="bg-crem rounded-lg p-4 mb-6 space-y-4 overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: DURATION.fast, ease: EASE }}
                    >
                      {/* Necessary Cookies */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-montserrat font-medium text-charcoal text-sm">
                            Cookie-uri esențiale
                          </p>
                          <p className="font-montserrat text-xs text-gri-mediu">
                            Necesare pentru funcționarea site-ului
                          </p>
                        </div>
                        <div className="w-12 h-6 bg-verde-sage rounded-full flex items-center justify-end px-1">
                          <div className="w-4 h-4 bg-white rounded-full shadow" />
                        </div>
                      </div>

                      {/* Analytics Cookies */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-montserrat font-medium text-charcoal text-sm">
                            Cookie-uri de analiză
                          </p>
                          <p className="font-montserrat text-xs text-gri-mediu">
                            Ne ajută să înțelegem cum este folosit site-ul
                          </p>
                        </div>
                        <button
                          onClick={() =>
                            setPreferences((p) => ({ ...p, analytics: !p.analytics }))
                          }
                          className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                            preferences.analytics ? "bg-verde-sage justify-end" : "bg-gri-deschis justify-start"
                          }`}
                        >
                          <div className="w-4 h-4 bg-white rounded-full shadow" />
                        </button>
                      </div>

                      {/* Marketing Cookies */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-montserrat font-medium text-charcoal text-sm">
                            Cookie-uri de marketing
                          </p>
                          <p className="font-montserrat text-xs text-gri-mediu">
                            Pentru reclame personalizate
                          </p>
                        </div>
                        <button
                          onClick={() =>
                            setPreferences((p) => ({ ...p, marketing: !p.marketing }))
                          }
                          className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                            preferences.marketing ? "bg-verde-sage justify-end" : "bg-gri-deschis justify-start"
                          }`}
                        >
                          <div className="w-4 h-4 bg-white rounded-full shadow" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Links */}
                <p className="font-montserrat text-xs text-gri-mediu mb-6">
                  Pentru mai multe detalii, consultă{" "}
                  <Link href="/gdpr" className="text-auriu hover:underline">
                    Politica de Cookie-uri
                  </Link>{" "}
                  și{" "}
                  <Link href="/confidentialitate" className="text-auriu hover:underline">
                    Politica de Confidențialitate
                  </Link>.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button
                    onClick={acceptAll}
                    className="btn-primary text-sm flex-1 sm:flex-none"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Accept toate
                  </motion.button>
                  {showSettings ? (
                    <motion.button
                      onClick={acceptSelected}
                      className="btn-secondary text-sm flex-1 sm:flex-none"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Salvează preferințele
                    </motion.button>
                  ) : (
                    <motion.button
                      onClick={() => setShowSettings(true)}
                      className="btn-secondary text-sm flex-1 sm:flex-none"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Personalizează
                    </motion.button>
                  )}
                  <motion.button
                    onClick={rejectAll}
                    className="font-montserrat text-sm text-gri-mediu hover:text-charcoal transition-colors py-2"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Doar esențiale
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
