"use client"
import { Table } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function BookingManagement({ bookings }: { bookings: any[] }) {
  const [filter, setFilter] = useState('');

  const filteredBookings = bookings.filter((booking) =>
    booking.status.includes(filter)
  );

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Booking Management</h2>
      <Input 
        placeholder="Filter by status" 
        value={filter} 
        onChange={(e) => setFilter(e.target.value)} 
        className="mb-4"
      />
      <Table>
        <thead>
          <tr>
            <th>Event</th>
            <th>User</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.eventName}</td>
              <td>{booking.userName}</td>
              <td>{booking.status}</td>
              <td>{booking.date}</td>
              <td>
                <Button>Cancel</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
