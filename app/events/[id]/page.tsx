"use client";
import { useState } from 'react';
import eventsData from '../../../data/eventsData'; 
import relatedEvents from '../../../data/eventsData'; 

export default function EventDetails({ params }: { params: { id: string } }) {
  const { id } = params;
  const event = eventsData.find((event) => event.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);

  if (!event) {
    return <div className="container mx-auto py-8">Event not found.</div>;
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Event Banner */}
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-96 object-cover rounded-lg mb-8"
      />

      {/* Event Information */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
        <p className="text-gray-600 mb-4">{event.date} | {event.location}</p>
        <div className="flex justify-center space-x-4 mb-8">
          {event.categories.map((category, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-custompeach text-blue-700 rounded-full"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* Booking Section */}
      <div className="border p-6 mb-8 shadow-md rounded-lg bg-secondary text-black">
        <h2 className="text-2xl font-bold mb-4">Tickets</h2>

        <div className="flex justify-between mb-4">
          <div>
            <p className="font-semibold">Ticket Type</p>
            <select className="border rounded p-2 bg-custompeach">
              <option>General Admission - $50</option>
              <option>VIP - $100</option>
            </select>
          </div>

          <div>
            <p className="font-semibold">Quantity</p>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="border rounded p-2 w-20 bg-custompeach"
            />
          </div>
        </div>

        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          Book Now
        </button>
      </div>

      {/* Event Description */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Event Description</h2>
        <p className="text-lg mb-4">{event.description}</p>
        <ul className="list-disc list-inside">
          <li>Agenda: Key activities and timeline.</li>
          <li>Speakers: Names of keynote speakers (if applicable).</li>
          <li>Other relevant details about the event.</li>
        </ul>
      </div>

      {/* Venue Information */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Venue Information</h2>
        <p className="mb-4">{event.location}</p>
        {/* Embed Google Map */}
        <iframe
          src={`https://maps.google.com/maps?q=${encodeURIComponent(
            event.location
          )}&output=embed`}
          className="w-full h-64 rounded-lg"
          allowFullScreen
        ></iframe>
      </div>

      {/* Related Events */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Related Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedEvents.map((relatedEvent) => (
            <div key={relatedEvent.id} className="border rounded-lg p-4">
              <img
                src={relatedEvent.image}
                alt={relatedEvent.title}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{relatedEvent.title}</h3>
              <p className="text-gray-500">{relatedEvent.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mb-8 text-black">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        <p>User reviews and ratings will be displayed here.</p>
        <div className="border p-4 mb-4 bg-secondary">
          <p className="font-semibold">John Doe</p>
          <p className="text-sm text-black">Rating: ★★★★☆</p>
          <p className="mt-2">Amazing event, highly recommend!</p>
        </div>
        {/* Add more reviews here */}
      </div>
    </div>
  );
}
