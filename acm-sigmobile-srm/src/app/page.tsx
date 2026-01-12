'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const container = useRef(null);
  
  // Track scroll progress over the 200vh container
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <main>
      {/* --- ANIMATION WRAPPER --- */}
      {/* Background color matches the "revealed" section to hide corners smoothly */}
      <div ref={container} className="relative h-[200vh] bg-acm-navy">
        
        {/* SECTION 1: HERO (Scales Down into a rounded card) */}
        <HeroSection scrollYProgress={scrollYProgress} />

        {/* SECTION 2: ABOUT US (Scales Up with rounded top) */}
        <AboutSection scrollYProgress={scrollYProgress} />
        
      </div>
      
      {/* "What We Focus On" section REMOVED as requested */}
    </main>
  );
}

// --- SUB-COMPONENTS FOR ANIMATION ---

const HeroSection = ({ scrollYProgress }: { scrollYProgress: any }) => {
  // Animation: Scale down from 1 to 0.85, Rotate slightly -5deg
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]); 
  
  // Dynamic Border Radius: Starts at 0 (flat), becomes 48px (rounded) as you scroll
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], [0, 48]);

  return (
    <motion.section
      style={{ scale, rotate, opacity, borderRadius }} // Apply animated rounded corners
      className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-acm-dark shadow-2xl origin-top"
    >
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:bg-acm-dark dark:bg-none transition-colors duration-500"></div>
          <div className="absolute inset-0 opacity-40 dark:opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply dark:mix-blend-normal"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-acm-blue/20 dark:bg-acm-blue/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-acm-cyan/20 dark:bg-acm-cyan/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 px-4 mt-16">
          <span className="bg-white/80 dark:bg-white/5 text-acm-navy dark:text-acm-cyan px-6 py-2 rounded-full text-sm font-bold tracking-wide mb-8 inline-block shadow-sm border border-gray-200 dark:border-white/10 backdrop-blur-sm">
            Welcome to SRM IST Chapter
          </span>
          
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tight leading-tight text-acm-navy dark:text-white drop-shadow-sm dark:drop-shadow-none">
            Connecting the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-acm-blue to-acm-cyan">
              Mobile Future
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            We are a community of innovators dedicated to wireless systems, mobile computing, and networking technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/events" className="group bg-acm-blue dark:bg-acm-blue text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
              Explore Events <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>
            <Link href="/team" className="px-8 py-4 rounded-full font-bold text-acm-navy dark:text-white border-2 border-acm-navy/10 dark:border-white/20 hover:bg-white dark:hover:bg-white/10 hover:border-acm-navy transition backdrop-blur-sm">
              Meet the Team
            </Link>
          </div>
        </div>
    </motion.section>
  );
};

const AboutSection = ({ scrollYProgress }: { scrollYProgress: any }) => {
  // Animation: Scale up from 0.85 to 1, Rotate from 5deg to 0
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
  
  // This section should have rounded corners from the start
  return (
    <motion.section
      style={{ scale, rotate }}
      className="relative h-screen bg-acm-navy text-white flex items-center justify-center overflow-hidden shadow-2xl rounded-t-[60px] md:rounded-[60px]" 
    >
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      
      {/* Content Container */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-16 items-center h-full pt-20">
        
        {/* Left Column: ACM */}
        <div className="space-y-8">
          <div className="inline-block bg-acm-cyan/20 text-acm-cyan font-bold px-4 py-1 rounded-full text-sm mb-2 border border-acm-cyan/20">
            About The Parent Org
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            What is <span className="text-acm-cyan">ACM?</span>
          </h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              The <strong>Association for Computing Machinery (ACM)</strong> is the world’s largest and most influential professional organization dedicated to computing. Founded in 1947, it connects researchers, educators, and professionals to advance the science of computing.
            </p>
            <p>
              ACM is not just an organization — it is a global community that connects people passionate about computing, helping them learn, collaborate, and create technologies that have a real impact on society.
            </p>
          </div>
          <div className="flex gap-4 pt-4">
             <div className="flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle2 className="w-4 h-4 text-acm-cyan" /> Global Network
             </div>
             <div className="flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle2 className="w-4 h-4 text-acm-cyan" /> Professional Standards
             </div>
          </div>
        </div>

        {/* Right Column: SIGMOBILE */}
        <div className="bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-white/10 hover:border-acm-cyan/30 transition-colors duration-300">
          <div className="inline-block bg-acm-blue text-white font-bold px-4 py-1 rounded-full text-sm mb-6 shadow-lg shadow-acm-blue/20">
            Our Special Interest Group
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What is <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-acm-cyan to-white">
              ACM SIGMOBILE?
            </span>
          </h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              <strong>SIGMOBILE</strong> (Special Interest Group on Mobility of Systems, Users, Data, and Computing) focuses on mobile computing, wireless systems, and pervasive technologies.
            </p>
            <p>
              From smartphones and IoT to 6G networks, we bring together the engineers and researchers building the technology that moves with you.
            </p>
            <p className="text-sm border-l-2 border-acm-cyan pl-4 italic text-gray-400">
              "Driving innovation in wireless communication and mobile applications."
            </p>
          </div>
        </div>

      </div>
    </motion.section>
  );
};