"use client";
import React from 'react';
import { Button } from '@/components/ui/button';

export default function LogoutButton() {
  const handleLogout = () => {
    // Implement logout logic here
    alert('Logged out successfully!');
  };

  return (
    <Button 
      onClick={handleLogout} 
      className="w-full max-w-sm bg-black hover:bg-gray-500 text-white"
    >
      Logout
    </Button>
  );
}
