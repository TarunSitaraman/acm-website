"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { LiquidGlassCard } from '@/components/ui/liquid-glass';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      
      <LiquidGlassCard
        glowIntensity="md"
        shadowIntensity="md"
        borderRadius="100px"
        blurIntensity="md"
        // Changed max-w-4xl to max-w-5xl for more horizontal breathing room
        className="w-full max-w-5xl p-2" 
      >
        {/* Increased vertical padding to py-3 to accommodate larger logo */}
        <nav className="flex items-center justify-between px-6 py-3">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-4 group">
            {/* UPDATED: 
               1. w-16 h-16 (64px) - Much larger logo container
               2. rounded-full + overflow-hidden cuts the image
            */}
            <div className="relative w-16 h-16 rounded-full overflow-hidden border border-white/10 group-hover:scale-105 transition-transform shadow-sm">
              <Image 
                src="/logo.png" 
                alt="ACM Logo" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 64px, 64px"
              />
            </div>
            {/* Increased text size to text-xl to match new logo size */}
            <span className="font-bold text-xl text-white tracking-wide">
              ACM <span className="text-acm-cyan">SIGMOBILE</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/events">Events</NavLink>
            <NavLink href="/team">Team</NavLink>
            
            <Link 
              href="/join" 
              // Increased padding (px-8 py-3) and text size
              className="ml-6 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold transition-all border border-white/10 hover:shadow-[0_0_20px_rgba(0,181,247,0.3)] backdrop-blur-md"
            >
              Join Chapter
            </Link>
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
        <div className="absolute top-32 left-4 right-4 md:hidden">
          <LiquidGlassCard borderRadius="24px" className="p-4 flex flex-col gap-2">
            <MobileNavLink href="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="/events" onClick={() => setIsOpen(false)}>Events</MobileNavLink>
            <MobileNavLink href="/team" onClick={() => setIsOpen(false)}>Team</MobileNavLink>
            <MobileNavLink href="/join" onClick={() => setIsOpen(false)}>Join Chapter</MobileNavLink>
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
      // Changed text-sm to text-base (standard size)
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