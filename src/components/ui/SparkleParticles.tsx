"use client";

import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  driftY: number;
  driftX: number;
  opacityMin: number;
  opacityMax: number;
}

interface SparkleParticlesProps {
  count?: number;
  className?: string;
  colors?: string[];
  minSize?: number;
  maxSize?: number;
}

const SparkleParticles = ({
  count = 20,
  className = "",
  colors = ["#D4AF6A", "#D4AF6A", "#D4AF6A", "#E5E5E5"],
  minSize = 2,
  maxSize = 4,
}: SparkleParticlesProps) => {
  const [particleCount, setParticleCount] = useState(count);

  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setParticleCount(Math.max(4, Math.round(count * 0.35)));
      } else if (width < 1024) {
        setParticleCount(Math.max(8, Math.round(count * 0.6)));
      } else {
        setParticleCount(count);
      }
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, [count]);

  const particles: Particle[] = useMemo(() => {
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: minSize + Math.random() * (maxSize - minSize),
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: 4 + Math.random() * 4,
      delay: Math.random() * 3,
      driftY: 15 + Math.random() * 20,
      driftX: -8 + Math.random() * 16,
      opacityMin: 0.15 + Math.random() * 0.15,
      opacityMax: 0.5 + Math.random() * 0.2,
    }));
  }, [particleCount, minSize, maxSize, colors]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            willChange: "transform, opacity",
          }}
          animate={{
            y: [0, -particle.driftY, 0],
            x: [0, particle.driftX, 0],
            opacity: [
              particle.opacityMin,
              particle.opacityMax,
              particle.opacityMin,
            ],
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
