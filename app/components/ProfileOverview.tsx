import React from 'react';

interface UserProfileProps {
  user?: {
    name: string;
    email: string;
    profilePicture: string;
  };
  bookings: Array<{
    id: string;
    event: string;
    date: string;
    status: string;
  }>;
  settings: {
    password: boolean;
    notifications: boolean;
  };
}

const UserProfile: React.FC<UserProfileProps> = ({ user, bookings, settings }) => {
  if (!user) {
    return <div className="container mx-auto py-8">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-md py-8 px-6 mb-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-300">
            <img
              src={user.profilePicture}
              alt="Profile Picture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 md:mt-0 md:ml-6">
            <h1 className="text-3xl font-semibold text-gray-800">{user.name}</h1>
            <p className="text-lg text-gray-600">{user.email}</p>
          </div>
        </div>
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Edit Profile
        </button>
      </div>

      <div className="container mx-auto p-6 bg-white shadow-md rounded-lg mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Bookings</h2>
        {bookings.length > 0 ? (
          <ul className="space-y-4">
            {bookings.map((booking) => (
              <li key={booking.id} className="p-4 border rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-700">{booking.event}</h3>
                <p className="text-gray-500">Date: {booking.date}</p>
                <p className={`text-sm font-semibold ${booking.status === 'Confirmed' ? 'text-green-600' : 'text-red-600'}`}>
                  Status: {booking.status}
                </p>
                <button className="mt-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
                  View Details
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">You have no bookings yet.</p>
        )}
      </div>

      <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Settings</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-lg text-gray-700">Change Password</span>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Change
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg text-gray-700">Manage Notifications</span>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Manage
            </button>
          </div>
          {/* Add more settings options as needed */}
        </div>
      </div>

      <div className="container mx-auto p-6 text-center">
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
