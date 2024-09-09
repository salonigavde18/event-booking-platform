"use client"
import React, { useState } from 'react';

const Settings: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [notifications, setNotifications] = useState(true);

  const handlePasswordChange = () => {
    
  };

  const handleNotificationToggle = () => {
    setNotifications(!notifications);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Change Password</h3>
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="border rounded p-2 mb-2 w-full"
        />
        <button
          onClick={handlePasswordChange}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Change Password
        </button>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Manage Notifications</h3>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={notifications}
            onChange={handleNotificationToggle}
            className="form-checkbox"
          />
          <span className="text-gray-600">Enable Notifications</span>
        </label>
      </div>
    </div>
  );
};

export default Settings;
