"use client";
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function AdminHeader() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  };

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <header className="flex justify-between items-center p-6 bg-gray-800 text-white">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <button onClick={() => navigateTo('/admin/events')} className="hover:underline">
              Events
            </button>
          </li>
          <li>
            <button onClick={() => navigateTo('/admin/users')} className="hover:underline">
              Users
            </button>
          </li>
          <li>
            <button onClick={() => navigateTo('/admin/bookings')} className="hover:underline">
              Bookings
            </button>
          </li>
          <li>
            <button onClick={() => navigateTo('/admin/reports')} className="hover:underline">
              Reports
            </button>
          </li>
        </ul>
      </nav>
      <Button onClick={handleLogout} className="bg-red-500">
        Logout
      </Button>
    </header>
  );
}
