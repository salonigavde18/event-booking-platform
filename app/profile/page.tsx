"use client";
import React, { useState, useEffect } from "react";
import ProfileOverview from "../components/ProfileOverview";
import MyBookings from "../components/MyBookings";
import Settings from "../components/Settings";
import LogoutButton from "../components/LogoutButton";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { getUserProfile, getUserBookings, getUserSettings } from "../api/user";

interface User {
  name: string;
  email: string;
  profilePicture: string;
}

interface Booking {
  id: number;
  event: string;
  date: string;
  status: string;
}

interface Settings {
  notifications: boolean;
  password: boolean;
}

const UserProfilePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [settings, setSettings] = useState<Settings | null>(null);

  useEffect(() => {
    async function fetchData() {
      const userProfile = await getUserProfile();
      const userBookings = await getUserBookings();
      const userSettings = await getUserSettings();
      setUser(userProfile);
      setBookings(userBookings);
      setSettings(userSettings);
    }
    fetchData();
  }, []);

  if (!user || !settings) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <Card className="p-6 bg-white rounded shadow-md">
        <ProfileOverview user={user} />
      </Card>
      <Card className="p-6 bg-white rounded shadow-md">
        <MyBookings bookings={bookings} />
      </Card>
      <Card className="p-6 bg-white rounded shadow-md">
        <Settings settings={settings} />
      </Card>
      <Card className="p-6 bg-white rounded shadow-md">
        <LogoutButton />
      </Card>
    </div>
  );
};

export default UserProfilePage;
