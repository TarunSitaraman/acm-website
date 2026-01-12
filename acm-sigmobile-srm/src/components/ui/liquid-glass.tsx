"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils";

interface LiquidGlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowColor?: string;
  glowIntensity?: "sm" | "md" | "lg";
  shadowIntensity?: "sm" | "md" | "lg";
  borderRadius?: string;
  blurIntensity?: "sm" | "md" | "lg";
  draggable?: boolean;
}

export const LiquidGlassCard = ({
  children,
  className,
  glowColor = "#fff",
  glowIntensity = "md",
  shadowIntensity = "md",
  borderRadius = "24px",
  blurIntensity = "md",
  draggable = false,
  ...props
}: LiquidGlassCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position logic for the glow effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Map intensity props to CSS values
  const blurMap = { sm: "backdrop-blur-sm", md: "backdrop-blur-md", lg: "backdrop-blur-lg" };
  const shadowMap = {
    sm: "shadow-lg",
    md: "shadow-xl",
    lg: "shadow-2xl",
  };

  // Create the dynamic background gradient for the glass shine
  const glassShine = useMotionTemplate`radial-gradient(
    400px circle at ${smoothX}px ${smoothY}px,
    rgba(255, 255, 255, 0.15),
    transparent 80%
  )`;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      drag={draggable}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.1}
      className={cn(
        "relative overflow-hidden border border-white/10 bg-white/5",
        blurMap[blurIntensity],
        shadowMap[shadowIntensity],
        "transition-transform duration-300 ease-out will-change-transform",
        className
      )}
      style={{
        borderRadius,
      }}
      whileHover={{ scale: 1.01 }}
      {...props as any}
    >
      {/* 1. The Reflective Shine Layer */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: glassShine,
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* 2. The Content Layer */}
      <div className="relative z-10 h-full w-full">{children}</div>

      {/* 3. Subtle Noise Texture for realism (Optional) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat mix-blend-overlay"></div>
    </motion.div>
  );
};