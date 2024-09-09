
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="#694F8E text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-event-booking text-2xl font-bold ml-4">
          <Link href="/" className="hover:text-gray-300">
          NEXTEVENT
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-300 mr-4">
              Home
            </Link>
          </li>
          <li>
            <Link href="/events" className="hover:text-gray-300 mr-4">
              Events
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300 mr-4">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300 mr-4">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-gray-300 mr-4">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
