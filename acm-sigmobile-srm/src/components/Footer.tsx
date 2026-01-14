import Link from 'next/link';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'; // Removed Mail

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-acm-dark border-t border-gray-200 dark:border-white/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          
          {/* Column 1: Brand */}
          <div className="space-y-4 col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-acm-navy dark:text-white">
              ACM <span className="text-acm-cyan">SIGMOBILE</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm">
              The student chapter of SRM Institute of Science and Technology, dedicated to advancing the science of mobility, wireless networks, and mobile computing.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-acm-navy dark:text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li><Link href="/" className="hover:text-acm-blue transition-colors">Home</Link></li>
              <li><Link href="/events" className="hover:text-acm-blue transition-colors">Events</Link></li>
              <li><Link href="/team" className="hover:text-acm-blue transition-colors">Our Team</Link></li>
              <li><Link href="/join" className="hover:text-acm-blue transition-colors">Join Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-acm-navy dark:text-white">Connect</h4>
            <div className="flex gap-4">
              
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/acm_sigmobile?igsh=bnpoZWR6MjUya2pz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 dark:bg-white/5 rounded-full text-gray-600 dark:text-gray-400 hover:bg-acm-blue hover:text-white transition-all"
              >
                <Instagram size={20} />
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/srm-acm-sigmobile-student-chapter/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 dark:bg-white/5 rounded-full text-gray-600 dark:text-gray-400 hover:bg-acm-blue hover:text-white transition-all"
              >
                <Linkedin size={20} />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
          <p>© {new Date().getFullYear()} ACM SIGMOBILE SRM. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-acm-blue">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-acm-blue">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}