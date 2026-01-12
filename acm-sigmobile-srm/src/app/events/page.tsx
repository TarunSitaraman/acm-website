import Link from 'next/link';
import Image from 'next/image'; // If you use images for events
import { Calendar, MapPin, ArrowRight, Clock } from 'lucide-react';
import { upcomingEvents, pastEvents } from '@/lib/data';

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-acm-dark transition-colors duration-500">
      <div className="max-w-7xl mx-auto py-20 px-4">
        
        {/* Page Title */}
        <div className="text-center mb-24">
          <h1 className="text-5xl font-extrabold text-acm-navy dark:text-white mb-6 tracking-tight">
            Events & Workshops
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
            Join us to learn, build, and network with the best minds in mobile computing.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-acm-blue to-acm-cyan mx-auto mt-8 rounded-full"></div>
        </div>

        {/* --- SECTION 1: UPCOMING EVENTS --- */}
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 mb-24">
          
          {/* HEADER STYLE MATCHING TEAM PAGE */}
          <div className="flex items-center mb-16">
            <h2 className="text-3xl font-bold text-acm-navy dark:text-white mr-6 bg-white dark:bg-acm-card px-6 py-2 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 whitespace-nowrap">
              Upcoming Events
            </h2>
            <div className="h-[2px] bg-gradient-to-r from-gray-200 to-transparent dark:from-gray-800 flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="group bg-white dark:bg-acm-card rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-none hover:shadow-2xl hover:border-acm-blue/30 transition-all duration-300 relative overflow-hidden">
                
                {/* Glow Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-acm-blue/5 rounded-full blur-3xl group-hover:bg-acm-blue/10 transition"></div>

                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center text-acm-blue font-bold bg-blue-50 dark:bg-acm-blue/10 px-4 py-2 rounded-full w-fit">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-acm-navy dark:text-white mb-4 group-hover:text-acm-blue transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-6 font-medium">
                    <MapPin className="w-5 h-5 mr-2 text-acm-cyan" />
                    {event.location}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {event.description}
                  </p>

                  <Link 
                    href={event.registrationLink || "#"}
                    className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 bg-acm-navy text-white font-bold rounded-xl hover:bg-acm-blue transition-colors duration-300 shadow-lg shadow-acm-navy/20"
                  >
                    Register Now <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION 2: PAST EVENTS ARCHIVE --- */}
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          
          {/* HEADER STYLE MATCHING TEAM PAGE */}
          <div className="flex items-center mb-16">
            <h2 className="text-3xl font-bold text-acm-navy dark:text-white mr-6 bg-white dark:bg-acm-card px-6 py-2 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 whitespace-nowrap">
              Past Events Archive
            </h2>
            <div className="h-[2px] bg-gradient-to-r from-gray-200 to-transparent dark:from-gray-800 flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-gray-50 dark:bg-acm-card/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:bg-white dark:hover:bg-acm-card transition-colors duration-300">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3 font-semibold uppercase tracking-wide">
                  <Clock className="w-4 h-4 mr-2" />
                  {event.date}
                </div>
                <h3 className="text-xl font-bold text-acm-navy dark:text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}