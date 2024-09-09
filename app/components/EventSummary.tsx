import React from 'react';
import {EventData}  from '@/data/eventsData';

interface EventSummaryProps {
  event: EventData; 
}

const EventSummary: React.FC<EventSummaryProps> = ({ event }) => {
  return (
    <div className='bg-white'>
      <h2 className="text-2xl font-bold mb-4">Event Summary</h2>
      <div>
        <h3 className="text-xl font-semibold">{event.title}</h3>
        <p>{event.date} - {event.location}</p>
        <p>{event.description}</p>
      </div>
    </div>
  );
};

export default EventSummary;

