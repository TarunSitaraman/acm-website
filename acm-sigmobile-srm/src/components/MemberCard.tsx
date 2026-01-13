"use client";

import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';
import { TeamMember } from '@/lib/data';

// Import the CSS file directly
import './MemberCard.css'; 

// Ensure 'email' is included in props if it exists in your data type
export default function MemberCard({ name, role, image, github, linkedin, imagePosition, email }: TeamMember & { email?: string }) {

  return (
    <div className="container">
      
      <div className="canvas">
        {/* Trackers */}
        {[...Array(25)].map((_, i) => (
          <div key={i} className={`tracker tr-${i + 1}`}></div>
        ))}

        {/* Card Body */}
        <div className="cardBody">
          
          {/* Profile Image */}
          <div className="imageWrapper">
            {image ? (
              <Image 
                src={image} 
                alt={name}
                fill
                style={{ objectPosition: imagePosition || 'center' }}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 300px"
                priority={false} 
              />
            ) : (
              <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}
          </div>

          {/* Text Content */}
          <div className="content">
            <span className="name">{name}</span>
            <span className="role">{role}</span>
            
            {/* Social Links */}
            <div className="socials">
              {github && github !== "#" && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00ffaa] transition-colors hover:scale-110">
                   <Github size={20} />
                </a>
              )}
              {linkedin && linkedin !== "#" && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00ffaa] transition-colors hover:scale-110">
                   <Linkedin size={20} />
                </a>
              )}
              {/* Uses email prop if available, or falls back to generic ACM mail */}
              <a href={`mailto:${email || 'contact@acm.org'}`} className="text-white hover:text-[#00ffaa] transition-colors hover:scale-110">
                 <Mail size={20} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}