import { Calendar, MapPin } from 'lucide-react';

interface EventProps {
  title: string;
  date: string;
  location?: string;
  desc: string;
  isPast?: boolean;
}

export default function EventCard({ title, date, location, desc, isPast }: EventProps) {
  return (
    <div className={`bg-white rounded-xl overflow-hidden border ${isPast ? 'border-gray-200 opacity-80' : 'border-gray-100 shadow-lg hover:shadow-xl'} transition-all duration-300`}>
      <div className={`h-2 bg-${isPast ? 'gray-400' : '[#0085ca]'}`}></div>
      <div className="p-6">
        <div className="flex items-center text-sm text-[#0085ca] font-semibold mb-2">
          <Calendar className="w-4 h-4 mr-2" />
          {date}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        {location && (
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <MapPin className="w-4 h-4 mr-2" />
            {location}
          </div>
        )}
        <p className="text-gray-600 text-sm mb-4">{desc}</p>
        {!isPast && (
          <button className="w-full py-2 bg-[#0085ca]/10 text-[#0085ca] font-bold rounded-lg hover:bg-[#0085ca] hover:text-white transition">
            Register Now
          </button>
        )}
      </div>
    </div>
  );
}