"use client";

import Image from 'next/image';
// Removed lucide-react import completely as it is no longer needed
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { TeamMember } from '@/lib/data';

// Removed 'github' and 'linkedin' from the destructured props
export default function MemberCard({ name, role, image, imagePosition }: TeamMember) {
  
  // Motion values for tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for the tilt
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], ["15deg", "-15deg"]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], ["-15deg", "15deg"]), { stiffness: 150, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div 
      className="relative w-[280px] h-[350px] cursor-pointer perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial="initial"
      whileHover="hover"
    >
      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#262626] rounded-[24px] border border-white/10 shadow-xl relative overflow-hidden group"
      >
        
        {/* Profile Image */}
        <div className="absolute inset-0 z-0 h-full w-full">
            {image ? (
                <Image 
                    src={image} 
                    alt={name}
                    fill
                    style={{ objectPosition: imagePosition || 'center' }}
                    className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, 300px"
                />
            ) : (
                <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">
                  No Image
                </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        {/* Text Content */}
        <div className="absolute bottom-0 left-0 w-full p-6 translate-z-20 transform z-20">
            <h3 className="text-2xl font-extrabold text-white mb-1 drop-shadow-md tracking-wide">
              {name}
            </h3>
            <p className="text-[#00ffaa] font-bold tracking-widest text-xs uppercase">
              {role}
            </p>
        </div>
      </motion.div>
    </motion.div>
  );
}