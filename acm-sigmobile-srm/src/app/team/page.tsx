"use client";

import MemberCard from '@/components/MemberCard';
import { teamData } from '@/lib/data';

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-acm-dark transition-colors duration-500">
      <div className="max-w-7xl mx-auto py-20 px-4">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <h1 className="text-5xl font-extrabold text-acm-navy dark:text-white mb-6">Meet the Board</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The passionate individuals working behind the scenes to bring SIGMOBILE to life.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-acm-blue to-acm-cyan mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Domain Sections */}
        <div className="space-y-24">
          {teamData.map((domain) => (
            <div key={domain.domain} className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              
              {/* Domain Title */}
              <div className="flex items-center mb-16">
                <h2 className="text-3xl font-bold text-acm-navy dark:text-white mr-6 bg-white dark:bg-acm-card px-6 py-2 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 whitespace-nowrap">
                  {domain.domain}
                </h2>
                <div className="h-[2px] bg-gradient-to-r from-gray-200 to-transparent dark:from-gray-800 flex-grow"></div>
              </div>
              
              {/* Card Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
                {domain.members.map((member, index) => (
                  <MemberCard 
                    key={index}
                    name={member.name}
                    role={member.role}
                    image={member.image}
                    github={member.github} 
                    linkedin={member.linkedin}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}