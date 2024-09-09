
import Link from 'next/link';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
}

export default function FeaturedEvents() {
  const events: Event[] = [
    {
      id: 1,
      title: 'Music Concert',
      date: 'Sept 20, 2024',
      location: 'New York, NY',
      image: '/concert.jpg',
    },
    {
      id: 2,
      title: 'Tech Conference',
      date: 'Oct 15, 2024',
      location: 'San Francisco, CA',
      image: '/tech-conference.jpg',
    },
    {
      id: 3,
      title: 'Art Festival',
      date: 'Nov 10, 2024',
      location: 'Los Angeles, CA',
      image: '/art-festival.jpg',
    },
  ];

  return (
    <section className="my-16">
      <h2 className="text-2xl font-bold mb-8">Featured Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-700">
                {event.date} - {event.location}
              </p>
              <Link
                href={`/events/${event.id}`}
                className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
