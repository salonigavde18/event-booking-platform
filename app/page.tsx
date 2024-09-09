
import Navbar from './components/Navbar';
import FeaturedEvents from './components/FeaturedEvents';
import Categories from './components/Categories';
import Footer from './components/Footers';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="px-8 py-16">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Find Your Next Event</h1>
          <p className="text-lg">Discover events in your city and beyond</p>
          <div className="mt-8">
            <input
              type="text"
              placeholder="Search for events..."
              className="px-4 py-2 border rounded-md w-full max-w-lg"
            />
          </div>
        </section>
        <FeaturedEvents />
        <Categories />
      </main>
      <Footer />
    </div>
  );
}
