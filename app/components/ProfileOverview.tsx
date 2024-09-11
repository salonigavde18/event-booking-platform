import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar } from '@/components/ui/avatar';

export default function ProfileOverview({ user }: { user: any }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(user.name);
  const [updatedEmail, setUpdatedEmail] = useState(user.email);

  const handleSave = () => {
    // Handle save logic
    setIsEditing(false);
  };

  return (
    <Card className="p-6 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Profile Overview</h2>
      <div className="flex items-center space-x-4">
        <Avatar className="w-24 h-24 rounded-full">
          <img src={user.profilePicture} alt="Profile" className="w-full h-full object-cover rounded-full" />
        </Avatar>
        <div>
          {isEditing ? (
            <div>
              <Input 
                value={updatedName} 
                onChange={(e) => setUpdatedName(e.target.value)} 
                className="mb-2"
                placeholder="Name"
              />
              <Input 
                value={updatedEmail} 
                onChange={(e) => setUpdatedEmail(e.target.value)} 
                className="mb-2"
                placeholder="Email"
              />
              <Button onClick={handleSave} className="mt-2">
                Save
              </Button>
            </div>
          ) : (
            <div>
              <p className="text-lg font-semibold">{user.name}</p>
              <p className="text-gray-600">{user.email}</p>
              <Button onClick={() => setIsEditing(true)} className="mt-4">
                Edit Profile
              </Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
