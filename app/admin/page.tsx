"use client"
import AdminHeader from '../components/admin/AdminHeader';
import EventManagement from '../components/admin/EventManagement';
import UserManagement from '../components/admin/UserManagement';
import BookingManagement from '../components/admin/BookingManagement';
import EventStatistics from '../components/admin/EventStatistics';
import Reports from '../components/admin/Reports';
import { useState } from 'react';

export default function AdminDashboard() {
  const [section, setSection] = useState('events');
  
  // Placeholder for event stats data
  const eventStats = {
    totalBookings: 120,
    totalRevenue: 5000,
    upcomingEvents: 5,
  };

  const renderSection = () => {
    switch (section) {
      case 'events':
        return (
          <>
            <EventStatistics stats={eventStats} />  {/* Pass eventStats here */}
            <EventManagement events={[]} />
          </>
        );
      case 'users':
        return <UserManagement users={[]} />;
      case 'bookings':
        return <BookingManagement bookings={[]} />;
      case 'reports':
        return <Reports />;
      default:
        return <EventManagement events={[]} />;
    }
  };

  return (
    <div>
      <AdminHeader />
      <div className="container mx-auto p-6">
        {renderSection()}
      </div>
    </div>
  );
}
