"use client";
import React, { useState, useEffect } from 'react';
import { getUserBookings } from '../api/user';
import io from "socket.io-client";
import { Card } from '@/components/ui/card';

const socket = io("http://localhost:3000/"); 

interface Booking {
  id: number;
  event: string;
  date: string;
  status: string;
}

interface MyBookingsProps {
  bookings: Booking[];
}

const MyBookings: React.FC<MyBookingsProps> = ({ bookings }) => {
  return (
    <Card className="p-6 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">My Bookings</h2>
      <div>
        {bookings.map((booking) => (
          <div key={booking.id} className="border-b py-4">
            <div className="flex justify-between">
              <div>
                <p className="text-lg font-semibold">{booking.event}</p>
                <p className="text-gray-600">{booking.date}</p>
              </div>
              <div>
                <p className="text-gray-600">Status: {booking.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default MyBookings;
