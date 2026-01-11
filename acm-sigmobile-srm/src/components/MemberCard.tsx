import { Github, Linkedin, Mail } from 'lucide-react';

interface MemberProps {
  name: string;
  role: string;
  image?: string;
  github?: string;
  linkedin?: string;
}

export default function MemberCard({ name, role, image, github, linkedin }: MemberProps) {
  return (
    <div className="member-card group">
      <div className="member-content">
        
        {/* FRONT: The Member's Image */}
        <div className="member-front">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center text-gray-500 font-medium">
               No Image
            </div>
          )}
        </div>

        {/* BACK: The Details with Glowing Animation */}
        <div className="member-back">
          {/* Animated Background Blobs */}
          <div className="circle" id="bottom"></div>
          <div className="circle" id="right"></div>
          
          <div className="member-back-content p-4 text-center">
            {/* Role Badge */}
            <span className="bg-acm-cyan/20 text-acm-cyan text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md border border-acm-cyan/30 shadow-[0_0_10px_rgba(0,174,239,0.2)]">
              {role}
            </span>

            {/* Name */}
            <h3 className="text-lg font-bold text-white mt-3 tracking-wide">{name}</h3>
            
            <p className="text-gray-400 text-[10px] uppercase tracking-wider mb-4">ACM SIGMOBILE</p>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center mt-auto mb-2">
               <a href={github || "#"} className="text-gray-300 hover:text-acm-cyan transition-colors hover:scale-110 transform duration-200">
                 <Github className="w-5 h-5" />
               </a>
               <a href={linkedin || "#"} className="text-gray-300 hover:text-acm-cyan transition-colors hover:scale-110 transform duration-200">
                 <Linkedin className="w-5 h-5" />
               </a>
               <a href="#" className="text-gray-300 hover:text-acm-cyan transition-colors hover:scale-110 transform duration-200">
                 <Mail className="w-5 h-5" />
               </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}