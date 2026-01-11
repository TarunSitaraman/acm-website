import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';
import { TeamMember } from '@/lib/data';

export default function MemberCard({ name, role, image, github, linkedin, imagePosition }: TeamMember) {

  return (
    <div className="acm-card group mx-auto">
      {/* Top Right Mail Icon */}
      <div className="mail">
        <Mail className="w-6 h-6" />
      </div>

      {/* Profile Picture Area */}
      <div className="profile-pic">
        {image ? (
          <Image 
            src={image} 
            alt={name}
            fill
            // UPDATED: Now uses inline style for precise control
            // defaults to 'center' if no position is provided
            style={{ objectPosition: imagePosition || 'center' }}
            className="object-cover transition-all duration-500 ease-in-out"
            sizes="(max-width: 768px) 100vw, 350px"
            priority={false} 
          />
        ) : (
          <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}
      </div>

      {/* Sliding Bottom Section */}
      <div className="bottom">
        <div className="content">
          <span className="name">{name}</span>
          <span className="about-me">{role}</span>
        </div>
        
        <div className="bottom-bottom">
          <div className="social-links-container">
            <a href={github || "#"} target="_blank" rel="noopener noreferrer">
               <Github className="cursor-pointer hover:text-acm-navy transition-colors" />
            </a>
            <a href={linkedin || "#"} target="_blank" rel="noopener noreferrer">
               <Linkedin className="cursor-pointer hover:text-acm-navy transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}