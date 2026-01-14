'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  
  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <main>
      {/* ANIMATION CONTAINER 
         h-[200vh] creates enough scroll space for 2 full-screen sections.
      */}
      <div ref={container} className="relative h-[200vh] bg-white dark:bg-acm-dark">
        
        {/* SECTION 1: HERO (Stays stuck at the top) */}
        <HeroSection scrollYProgress={scrollYProgress} />

        {/* SECTION 2: ABOUT (Slides up to COVER the hero) */}
        <AboutSection />
        
      </div>
    </main>
  );
}

// --- SUB-COMPONENTS ---

const HeroSection = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  // Animation: Hero scales down slightly to create depth before being covered
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]); 

  return (
    <motion.section
      style={{ scale, opacity }}
      className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-acm-dark z-0"
    >
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:bg-acm-dark dark:bg-none transition-colors duration-500"></div>
          <div className="absolute inset-0 opacity-40 dark:opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply dark:mix-blend-normal"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-acm-blue/20 dark:bg-acm-blue/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-acm-cyan/20 dark:bg-acm-cyan/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 px-4">
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
            <Link href="/events" className="group bg-acm-blue text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
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

const AboutSection = () => {
  return (
    <motion.section
      className="relative h-screen bg-acm-navy text-white flex items-center justify-center overflow-hidden shadow-2xl rounded-t-[60px] z-10" 
    >
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      
      {/* UPDATES FOR WIDER LAYOUT:
         1. Changed 'container mx-auto' to 'w-full max-w-[1600px] px-8 md:px-20' -> Takes up more width.
         2. Increased 'gap-16' to 'gap-24' -> Pushes columns apart.
      */}
      <div className="w-full max-w-[1600px] mx-auto px-8 md:px-20 relative z-10 grid md:grid-cols-2 gap-20 lg:gap-32 items-center h-full pt-10">
        
        {/* Left Column: ACM - Added 'pl-4' to balance visually */}
        <div className="space-y-10">
          <div className="inline-block bg-acm-cyan/20 text-acm-cyan font-bold px-6 py-2 rounded-full text-sm mb-4 border border-acm-cyan/20">
            About The Parent Org
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            What is <span className="text-acm-cyan">ACM?</span>
          </h2>
          
          <div className="space-y-8 text-gray-300 text-xl leading-relaxed max-w-2xl">
            <p>
              The <strong>Association for Computing Machinery (ACM)</strong> is the world’s largest and most influential professional organization dedicated to computing.
            </p>
            <p>
              ACM is not just an organization — it is a global community that connects people passionate about computing, helping them learn, collaborate, and create technologies that have a real impact on society.
            </p>
          </div>
          
          <div className="flex gap-8 pt-6">
             <div className="flex items-center gap-3 text-base text-gray-400">
                <CheckCircle2 className="w-6 h-6 text-acm-cyan" /> Global Network
             </div>
             <div className="flex items-center gap-3 text-base text-gray-400">
                <CheckCircle2 className="w-6 h-6 text-acm-cyan" /> Professional Standards
             </div>
          </div>
        </div>

        {/* Right Column: SIGMOBILE - Increased padding (p-12 md:p-16) to make card bigger */}
        <div className="bg-white/5 backdrop-blur-lg p-12 md:p-16 rounded-[40px] border border-white/10 hover:border-acm-cyan/30 transition-colors duration-300 h-full max-h-[700px] flex flex-col justify-center">
          <div className="inline-block bg-acm-blue text-white font-bold px-6 py-2 rounded-full text-sm mb-8 shadow-lg shadow-acm-blue/20 w-fit">
            Our Special Interest Group
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            What is <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-acm-cyan to-white">
              ACM SIGMOBILE?
            </span>
          </h2>
          
          <div className="space-y-8 text-gray-300 text-lg leading-relaxed">
            <p>
              <strong>SIGMOBILE</strong> (Special Interest Group on Mobility of Systems, Users, Data, and Computing) focuses on mobile computing, wireless systems, and pervasive technologies.
            </p>
            <p>
              From smartphones and IoT to 6G networks, we bring together the engineers and researchers building the technology that moves with you.
            </p>
            <p className="text-base border-l-4 border-acm-cyan pl-6 italic text-gray-400 py-2 bg-black/20 rounded-r-xl">
              "Driving innovation in wireless communication and mobile applications."
            </p>
          </div>
        </div>

      </div>
    </motion.section>
  );
};