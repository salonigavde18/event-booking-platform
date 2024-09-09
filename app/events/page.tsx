"use client"
import { useState } from 'react';
import EventCard from '../components/EventCard';
import eventsData from '../../data/eventsData'; 

export default function Events() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = eventsData.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h1>

      {/* Search/Filter Bar */}
      <input
        type="text"
        placeholder="Search events..."
        className="w-full p-2 mb-8 border rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Event Cards/List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}