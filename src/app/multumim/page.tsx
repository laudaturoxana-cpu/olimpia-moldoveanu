"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function MultumimPage() {
  const router = useRouter();

  useEffect(() => {
    // Facebook Pixel - Lead event
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead");
    }
  }, []);

  return (
    <main className="min-h-screen bg-crem flex items-center justify-center px-4">
      <motion.div
        className="max-w-lg w-full text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="bg-white rounded-card p-10 border border-gri-deschis shadow-soft">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-auriu/10 flex items-center justify-center">
            <span className="text-4xl">💜</span>
          </div>

          <h1 className="font-cormorant text-3xl md:text-4xl text-charcoal mb-4">
            Mulțumesc pentru mesaj!
          </h1>

          <div className="h-0.5 bg-auriu mx-auto mb-6 w-16" />

          <p className="font-montserrat text-gri-mediu mb-3">
            Am primit mesajul tău și îți voi răspunde personal în maxim 24 de ore.
          </p>
          <p className="font-montserrat text-gri-mediu mb-8">
            E în regulă să nu știi de unde să începi. De aici pornim împreună.
          </p>

          <motion.button
            onClick={() => router.push("/")}
            className="btn-primary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Înapoi pe site
          </motion.button>
        </div>
      </motion.div>
    </main>
  );
}
