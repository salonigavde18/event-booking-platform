
import Link from 'next/link';

interface Category {
  name: string;
  image: string;
  slug: string;
}

export default function Categories() {
  const categories: Category[] = [
    { name: 'Music', image: '/music.jpg', slug: 'music' },
    { name: 'Sports', image: '/sports.jpg', slug: 'sports' },
    { name: 'Conferences', image: '/conferences.jpg', slug: 'conferences' },
  ];

  return (
    <section className="my-16">
      <h2 className="text-2xl font-bold mb-8">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <Link
                href={`/categories/${category.slug}`}
                className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Explore
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
