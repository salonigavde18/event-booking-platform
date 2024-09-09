"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const LogoutButton: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Implement logout logic here
    router.push('/login'); // Redirect to login page after logout
  };

  return (
    <div className="text-center mt-8">
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
