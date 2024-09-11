"use client";
import React, { useState } from 'react';
import { updateUserSettings } from '../api/user';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
// Define the Settings interface
interface Settings {
  password: boolean;   
  notifications: boolean;
}

export default function Settings({ settings }: { settings: Settings }) {
  const [newPassword, setNewPassword] = useState('');
  const [notifications, setNotifications] = useState(settings.notifications);

  const handlePasswordChange = async () => {
    // Update settings with the new password
    await updateUserSettings({ ...settings, password: newPassword });
    alert('Password changed successfully!');
  };

  const handleNotificationToggle = async () => {
    const updatedNotifications = !notifications;
    setNotifications(updatedNotifications);
    // Update settings with the new notifications value
    await updateUserSettings({ ...settings, notifications: updatedNotifications });
  };

  return (
    <Card className="p-6 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Settings</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Change Password</h3>
        <Input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="mb-4"
        />
        <Button onClick={handlePasswordChange} className="mt-4">
          Change Password
        </Button>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Manage Notifications</h3>
        <div className="flex items-center">
          <Switch 
            checked={notifications} 
            onChange={handleNotificationToggle}
            className="mr-2"
          />
          <span className="text-gray-600">Enable Notifications</span>
        </div>
      </div>
    </Card>
  );
}