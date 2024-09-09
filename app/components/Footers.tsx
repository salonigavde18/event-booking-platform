
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="#694F8E text-white py-8 mt-16">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} EventBooking. All rights reserved.</p>
        <div className="mt-4">
          <Link href="/privacy-policy" className="text-blue-400 hover:underline mx-2">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-blue-400 hover:underline mx-2">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
