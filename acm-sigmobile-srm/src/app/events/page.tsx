import EventCard from '@/components/EventCard';
import { upcomingEvents, pastEvents } from '@/lib/data';

export default function EventsPage() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-[#003366] mb-4">Upcoming Events</h1>
        <p className="text-gray-600 text-lg">Don't miss out on our latest workshops and hackathons.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {upcomingEvents.map((event) => (
          <EventCard 
            key={event.id}
            title={event.title}
            date={event.date}
            location={event.location}
            desc={event.description}
          />
        ))}
      </div>

      <div className="border-t border-gray-200 pt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Past Events Archive</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pastEvents.map((event) => (
            <EventCard 
              key={event.id}
              title={event.title}
              date={event.date}
              desc={event.description}
              isPast={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}