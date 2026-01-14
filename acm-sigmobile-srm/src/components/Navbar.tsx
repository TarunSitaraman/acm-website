"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { LiquidGlassCard } from '@/components/ui/liquid-glass';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // The External Link
  const JOIN_FORM_LINK = "https://forms.gle/8m9D9Gy4VqSqBdys5";

  return (
    <header className="w-full relative z-50 flex justify-center px-4 py-4 bg-gray-50/50 dark:bg-acm-dark/50 backdrop-blur-sm">
      
      <LiquidGlassCard
        glowIntensity="md"
        shadowIntensity="md"
        borderRadius="100px"
        blurIntensity="md"
        className="w-full max-w-5xl p-2" 
      >
        <nav className="flex items-center justify-between px-6 py-2">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border border-white/10 group-hover:scale-105 transition-transform shadow-sm">
              <Image 
                src="/logo.png" 
                alt="ACM Logo" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 64px, 64px"
              />
            </div>
            <span className="font-bold text-lg md:text-xl text-white tracking-wide">
              ACM <span className="text-acm-cyan">SIGMOBILE</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/events">Events</NavLink>
            <NavLink href="/team">Team</NavLink>
            
            {/* External Google Form Link */}
            <a 
              href={JOIN_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-6 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold transition-all border border-white/10 hover:shadow-[0_0_20px_rgba(0,181,247,0.3)] backdrop-blur-md cursor-pointer flex items-center"
            >
              Join Chapter
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />} 
          </button>
        </nav>
      </LiquidGlassCard>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 md:hidden z-50">
          <LiquidGlassCard borderRadius="24px" className="p-4 flex flex-col gap-2 shadow-2xl">
            <MobileNavLink href="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="/events" onClick={() => setIsOpen(false)}>Events</MobileNavLink>
            <MobileNavLink href="/team" onClick={() => setIsOpen(false)}>Team</MobileNavLink>
            
            {/* Mobile External Link */}
            <a 
              href={JOIN_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block text-center text-white py-4 hover:bg-white/10 rounded-xl transition-colors text-lg font-bold bg-white/5 border border-white/5 mt-2"
            >
              Join Chapter
            </a>
          </LiquidGlassCard>
        </div>
      )}
    </header>
  );
}

// Helper Components
function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-white/80 hover:text-white hover:bg-white/10 px-6 py-3 rounded-full transition-all text-base font-medium"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }: any) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className="block text-center text-white py-4 hover:bg-white/10 rounded-xl transition-colors text-lg"
    >
      {children}
    </Link>
  );
}