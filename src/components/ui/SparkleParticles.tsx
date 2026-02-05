"use client";

import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  glowColor: string;
  duration: number;
  delay: number;
  driftY: number;
  driftX: number;
  opacityMin: number;
  opacityMax: number;
  rotation: number;
}

interface SparkleParticlesProps {
  count?: number;
  className?: string;
  colors?: string[];
  minSize?: number;
  maxSize?: number;
  intensity?: "subtle" | "normal" | "bright";
}

/* 4-pointed sparkle star SVG — the classic "glitter" shape */
const SparkleSVG = ({
  size,
  color,
  glowColor,
}: {
  size: number;
  color: string;
  glowColor: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    style={{
      filter: `drop-shadow(0 0 ${size * 0.6}px ${glowColor}) drop-shadow(0 0 ${size * 0.3}px ${glowColor})`,
    }}
  >
    {/* Main 4-pointed star */}
    <path
      d="M12 0C12 0 14 8 12 12C12 12 8 12 0 12C0 12 8 12 12 12C12 12 12 16 12 24C12 24 12 16 12 12C12 12 16 12 24 12C24 12 16 12 12 12C12 12 12 8 12 0Z"
      fill={color}
    />
    {/* Simplified — use a cleaner sparkle path */}
  </svg>
);

/* Even cleaner sparkle: two crossing thin ellipses */
const SparkleShape = ({
  size,
  color,
  glowColor,
}: {
  size: number;
  color: string;
  glowColor: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    style={{
      filter: `drop-shadow(0 0 ${Math.max(3, size * 0.5)}px ${glowColor})`,
    }}
  >
    {/* Vertical ray */}
    <ellipse cx="16" cy="16" rx="1.5" ry="14" fill={color} />
    {/* Horizontal ray */}
    <ellipse cx="16" cy="16" rx="14" ry="1.5" fill={color} />
    {/* Diagonal ray 1 */}
    <ellipse
      cx="16"
      cy="16"
      rx="1"
      ry="9"
      fill={color}
      transform="rotate(45 16 16)"
    />
    {/* Diagonal ray 2 */}
    <ellipse
      cx="16"
      cy="16"
      rx="1"
      ry="9"
      fill={color}
      transform="rotate(-45 16 16)"
    />
    {/* Center glow dot */}
    <circle cx="16" cy="16" r="2.5" fill="white" opacity="0.9" />
    <circle cx="16" cy="16" r="2" fill={color} opacity="0.8" />
  </svg>
);

const SparkleParticles = ({
  count = 20,
  className = "",
  colors = ["#D4AF6A", "#D4AF6A", "#C9A554", "#E5E5E5", "#D4AF6A"],
  minSize = 10,
  maxSize = 22,
  intensity = "normal",
}: SparkleParticlesProps) => {
  const [particleCount, setParticleCount] = useState(count);

  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setParticleCount(Math.max(6, Math.round(count * 0.45)));
      } else if (width < 1024) {
        setParticleCount(Math.max(10, Math.round(count * 0.65)));
      } else {
        setParticleCount(count);
      }
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, [count]);

  const opacityRange = {
    subtle: { min: 0.15, max: 0.45 },
    normal: { min: 0.25, max: 0.65 },
    bright: { min: 0.35, max: 0.8 },
  };

  const range = opacityRange[intensity];

  const sparkles: Sparkle[] = useMemo(() => {
    return Array.from({ length: particleCount }, (_, i) => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: minSize + Math.random() * (maxSize - minSize),
        color,
        glowColor:
          color === "#E5E5E5"
            ? "rgba(229,229,229,0.5)"
            : "rgba(212,175,106,0.5)",
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 5,
        driftY: 8 + Math.random() * 18,
        driftX: -6 + Math.random() * 12,
        opacityMin: range.min + Math.random() * 0.1,
        opacityMax: range.max + Math.random() * 0.15,
        rotation: Math.random() * 360,
      };
    });
  }, [particleCount, minSize, maxSize, colors, range.min, range.max]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ zIndex: 1 }}
    >
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            willChange: "transform, opacity",
          }}
          animate={{
            y: [0, -sparkle.driftY, 0],
            x: [0, sparkle.driftX, 0],
            opacity: [sparkle.opacityMin, sparkle.opacityMax, sparkle.opacityMin],
            scale: [0.7, 1.2, 0.7],
            rotate: [sparkle.rotation, sparkle.rotation + 90, sparkle.rotation],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: sparkle.delay,
          }}
        >
          <SparkleShape
            size={sparkle.size}
            color={sparkle.color}
            glowColor={sparkle.glowColor}
          />
        </motion.div>
      ))}
    </div>
  );
};

// Suppress unused warning — SparkleSVG kept as alternative shape
void SparkleSVG;

export default SparkleParticles;
