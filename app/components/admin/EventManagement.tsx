"use client"
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function EventManagement({ events }: { events: any[] }) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Event Management</h2>
      <Button className="mb-4">Create New Event</Button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event) => (
          <Card key={event.id} className="p-4">
            <h3 className="font-semibold">{event.name}</h3>
            <p>{event.date}</p>
            <div className="flex justify-between mt-4">
              <Button>Edit</Button>
              <Button className="bg-red-500">Delete</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
