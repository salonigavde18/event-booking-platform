import React from 'react';
import ProfileOverview from '../components/ProfileOverview';
import MyBookings from '../components/MyBookings';
import Settings from '../components/Settings';
import LogoutButton from '../components/LogoutButton';

const UserProfilePage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <ProfileOverview />
      <MyBookings />
      <Settings />
      <LogoutButton />
    </div>
  );
};

export default UserProfilePage;
