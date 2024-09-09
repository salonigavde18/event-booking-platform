import { cn } from "@/lib/utils"; 
import { Button } from "@/components/ui/button"; 
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-[#694F8E] text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="font-event-booking text-2xl font-bold ml-4">
          <Link href="/" className="hover:text-gray-300">
            NEXTEVENT
          </Link>
        </div>

        {/* Navbar Links */}
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className={cn("hover:text-gray-300", "text-white")}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/events" className={cn("hover:text-gray-300", "text-white")}>
              Events
            </Link>
          </li>
          <li>
            <Link href="/about" className={cn("hover:text-gray-300", "text-white")}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className={cn("hover:text-gray-300", "text-white")}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="/profile" className={cn("hover:text-gray-300", "text-white")}>
              Profile
            </Link>
          </li>
          <li>
            <Link href="/login" className={cn("hover:text-gray-300", "text-white")}>
              Login
            </Link>
          </li>
        </ul>
        
        {/* Example Button using ShadCN UI Button */}
        <Button variant="secondary" className="ml-4">
          Book Now
        </Button>
      </div>
    </nav>
  );
}
