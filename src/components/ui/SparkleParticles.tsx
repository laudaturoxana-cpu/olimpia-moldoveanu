"use client";

import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Particle {
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
  isStar: boolean;
}

interface SparkleParticlesProps {
  count?: number;
  className?: string;
  colors?: string[];
  minSize?: number;
  maxSize?: number;
  intensity?: "subtle" | "normal" | "bright";
}

const SparkleParticles = ({
  count = 20,
  className = "",
  colors = ["#D4AF6A", "#D4AF6A", "#C9A554", "#E5E5E5", "#D4AF6A"],
  minSize = 3,
  maxSize = 7,
  intensity = "normal",
}: SparkleParticlesProps) => {
  const [particleCount, setParticleCount] = useState(count);

  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setParticleCount(Math.max(6, Math.round(count * 0.4)));
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
    subtle: { min: 0.2, max: 0.5 },
    normal: { min: 0.3, max: 0.75 },
    bright: { min: 0.4, max: 0.9 },
  };

  const range = opacityRange[intensity];

  const particles: Particle[] = useMemo(() => {
    return Array.from({ length: particleCount }, (_, i) => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const isStar = Math.random() > 0.7; // 30% chance to be a star shape
      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: isStar
          ? minSize + 1 + Math.random() * (maxSize - minSize + 2)
          : minSize + Math.random() * (maxSize - minSize),
        color,
        glowColor: color === "#E5E5E5" ? "rgba(229,229,229,0.6)" : "rgba(212,175,106,0.6)",
        duration: 3 + Math.random() * 5,
        delay: Math.random() * 4,
        driftY: 12 + Math.random() * 25,
        driftX: -10 + Math.random() * 20,
        opacityMin: range.min + Math.random() * 0.1,
        opacityMax: range.max + Math.random() * 0.1,
        isStar,
      };
    });
  }, [particleCount, minSize, maxSize, colors, range.min, range.max]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ zIndex: 1 }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            borderRadius: particle.isStar ? "2px" : "50%",
            boxShadow: `0 0 ${particle.size * 2}px ${particle.glowColor}, 0 0 ${particle.size}px ${particle.glowColor}`,
            willChange: "transform, opacity",
            transform: particle.isStar ? "rotate(45deg)" : "none",
          }}
          animate={{
            y: [0, -particle.driftY, 0],
            x: [0, particle.driftX, 0],
            opacity: [
              particle.opacityMin,
              particle.opacityMax,
              particle.opacityMin,
            ],
            scale: particle.isStar ? [1, 1.3, 1] : [1, 1.1, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};

export default SparkleParticles;
