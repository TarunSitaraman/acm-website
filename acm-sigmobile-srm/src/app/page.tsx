import Link from 'next/link';
import { ArrowRight, Wifi, Smartphone, Globe } from 'lucide-react';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0">
          {/* Light Mode: Gradient | Dark Mode: Solid Clean Color (Restored) */}
          <div className="absolute inset-0 
            bg-gradient-to-br from-blue-50 via-white to-blue-50 
            dark:bg-acm-dark dark:bg-none
            transition-colors duration-500"
          ></div>
          
          {/* Pattern Texture (Subtle) */}
          <div className="absolute inset-0 opacity-40 dark:opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply dark:mix-blend-normal"></div>
          
          {/* Ambient Glows (Reduced intensity for Dark Mode) */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-acm-blue/20 dark:bg-acm-blue/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-acm-cyan/20 dark:bg-acm-cyan/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 px-4">
          <span className="bg-white/80 dark:bg-white/5 text-acm-navy dark:text-acm-cyan px-6 py-2 rounded-full text-sm font-bold tracking-wide mb-8 inline-block shadow-sm border border-gray-200 dark:border-white/10 backdrop-blur-sm">
            Welcome to SRM IST Chapter
          </span>
          
          {/* Heading */}
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
      </section>

      {/* Feature Cards */}
      <section className="py-24 px-4 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-acm-navy dark:text-white mb-4">What We Focus On</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-acm-blue to-acm-cyan mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Wireless Networks", icon: Wifi, desc: "Exploring 5G, 6G, and next-gen communication protocols." },
              { title: "Mobile Systems", icon: Smartphone, desc: "Android/iOS development and embedded mobile systems." },
              { title: "IoT & Connectivity", icon: Globe, desc: "Bridging physical devices with digital networks." }
            ].map((item, idx) => (
              <div key={idx} className="group p-8 rounded-3xl transition-all duration-300 relative overflow-hidden
                /* Light Mode */
                bg-white border border-gray-100 shadow-xl shadow-gray-200/50 
                /* Dark Mode (Restored to simple Card color) */
                dark:bg-acm-card dark:border-gray-700/50 dark:shadow-none
                hover:shadow-2xl hover:shadow-blue-500/10 hover:border-acm-blue/30
              ">
                <div className="absolute top-0 right-0 w-32 h-32 bg-acm-blue/5 rounded-full blur-3xl group-hover:bg-acm-blue/10 transition"></div>
                
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition duration-300 group-hover:scale-110 shadow-sm
                   bg-blue-50 text-acm-blue dark:bg-gray-800 dark:text-acm-cyan
                ">
                  <item.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-acm-navy dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}