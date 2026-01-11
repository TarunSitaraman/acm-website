"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 transition-colors duration-500 backdrop-blur-md border-b
      bg-white/80 border-gray-200 
      dark:bg-acm-dark/80 dark:border-gray-800
    ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* LOGO SECTION */}
          <Link href="/" className="flex items-center gap-4 group"> {/* Increased gap slightly */}
             {/* Logo Image Container */}
             <div className="relative w-14 h-14 transition-transform duration-300 group-hover:rotate-12 rounded-2xl overflow-hidden shadow-sm">
               <Image 
                 src="/clublogo.png" 
                 alt="ACM SIGMOBILE Logo"
                 fill
                 className="object-cover" // Changed to object-cover for a better fill in the rounded shape
                 priority
                 unoptimized
               />
             </div>
             
             {/* Text Logo */}
             <span className="text-xl font-bold tracking-tight transition-colors duration-300
               text-acm-navy 
               dark:text-white
             ">
               ACM <span className="text-acm-blue dark:text-acm-cyan">SIGMOBILE</span>
             </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Events', 'Team'].map((item) => (
              <Link 
                key={item} 
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                className="font-medium transition-colors duration-300
                  text-gray-600 hover:text-acm-blue 
                  dark:text-gray-300 dark:hover:text-acm-cyan"
              >
                {item}
              </Link>
            ))}
            
            {/* Theme Toggle Switch */}
            <div className="pl-2 border-l border-gray-300 dark:border-gray-700 h-6 flex items-center">
               <ThemeToggle />
            </div>

            <button className="px-5 py-2 rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5
              bg-acm-navy text-white hover:bg-acm-blue shadow-blue-900/10
              dark:bg-acm-cyan dark:text-acm-navy dark:hover:bg-white dark:shadow-blue-500/20"
            >
              Join Chapter
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md transition-colors
                text-gray-700 hover:bg-gray-100 
                dark:text-gray-200 dark:hover:bg-white/10"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 bg-white/95 dark:bg-acm-dark/95 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800">
          {['Home', 'Events', 'Team'].map((item) => (
            <Link 
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium transition-colors
                text-gray-700 hover:text-acm-blue hover:bg-blue-50
                dark:text-gray-200 dark:hover:text-acm-cyan dark:hover:bg-white/5"
            >
              {item}
            </Link>
          ))}
          <div className="pt-4">
            <button className="w-full text-center py-3 rounded-xl font-bold transition-colors
              bg-acm-navy text-white
              dark:bg-acm-cyan dark:text-acm-navy"
            >
              Join Chapter
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}