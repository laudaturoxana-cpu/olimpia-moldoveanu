import { Variants } from "framer-motion";

// ─── Shared timing ───
export const DURATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 0.8,
} as const;

export const EASE = [0.25, 0.46, 0.45, 0.94] as const; // easeOutQuad - calming

// ─── Section entrance variants ───
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.normal, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.normal, ease: EASE },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.normal, ease: EASE },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.normal, ease: EASE },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.normal, ease: EASE },
  },
};

// ─── Stagger container ───
export const staggerContainer = (staggerDelay = 0.15): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1,
    },
  },
});

// ─── Stagger child ───
export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.fast, ease: EASE },
  },
};

// ─── Line expand (gold decorative lines) ───
export const lineExpand: Variants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: "4rem",
    opacity: 1,
    transition: { duration: DURATION.slow, ease: EASE, delay: 0.2 },
  },
};

// ─── Viewport config ───
export const viewportConfig = {
  once: true,
  amount: 0.2 as number,
};
