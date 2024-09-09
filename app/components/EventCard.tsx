import Link from 'next/link';

interface EventCardProps {
  event: {
    id: number;
    title: string;
    date: string;
    location: string;
    image: string;
  };
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
        <p className="text-gray-700">{event.date} - {event.location}</p>
        <Link href={`/events/${event.id}`}>
          <button className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-md">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
