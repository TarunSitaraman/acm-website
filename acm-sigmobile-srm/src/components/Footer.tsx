import { Github, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#003366] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">ACM SIGMOBILE</h3>
          <p className="text-gray-300">
            SRM Institute of Science and Technology<br/>
            Kattankulathur, Chennai
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/events" className="hover:text-white">Events</a></li>
            <li><a href="/team" className="hover:text-white">Our Team</a></li>
            <li><a href="#" className="hover:text-white">SRM IST Main Site</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4">Connect</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#00aeef]"><Linkedin /></a>
            <a href="#" className="hover:text-[#00aeef]"><Instagram /></a>
            <a href="#" className="hover:text-[#00aeef]"><Github /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-12 text-sm">
        © 2026 ACM SIGMOBILE SRM Student Chapter. All rights reserved.
      </div>
    </footer>
  );
}