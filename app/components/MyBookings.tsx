"use client"
import React from 'react';

interface Booking {
  id: number;
  eventTitle: string;
  eventDate: string;
  status: string;
}

const bookings: Booking[] = [
  { id: 1, eventTitle: 'Music Concert', eventDate: '2024-09-15', status: 'Upcoming' },
  { id: 2, eventTitle: 'Art Exhibition', eventDate: '2024-08-10', status: 'Completed' }
];

const MyBookings: React.FC = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id} className="border-b border-gray-300 py-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-semibold">{booking.eventTitle}</p>
                <p className="text-gray-600">{booking.eventDate}</p>
                <p className="text-gray-500">Status: {booking.status}</p>
              </div>
              <div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600">
                  View Details
                </button>
                {booking.status === 'Upcoming' && (
                  <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                    Cancel Booking
                  </button>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyBookings;
