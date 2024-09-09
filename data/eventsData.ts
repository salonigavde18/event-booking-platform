// data/eventsData.ts
interface EventData {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
  categories: string[];
  description: string;
}

const eventsData: EventData[] = [
  {
    id: 1,
    title: 'Music Concert',
    date: 'Sept 20, 2024',
    location: 'New York, NY',
    image: '/concert.jpg',
    categories: ['Music', 'Live', 'Outdoor'],
    description: 'Join us for an exciting live music concert featuring top artists from around the world. Enjoy an evening of great performances in the heart of New York City.',
  },
  {
    id: 2,
    title: 'Tech Conference',
    date: 'Oct 15, 2024',
    location: 'San Francisco, CA',
    image: '/tech-conference.jpg',
    categories: ['Tech', 'Conference', 'Online'],
    description: 'A cutting-edge tech conference showcasing the latest innovations in AI, cloud computing, and blockchain. Network with industry leaders and professionals.',
  },
  {
    id: 3,
    title: 'Art Festival',
    date: 'Nov 10, 2024',
    location: 'Los Angeles, CA',
    image: '/art-festival.jpg',
    categories: ['Art', 'Festival', 'Cultural'],
    description: 'Explore beautiful artwork from around the world at the annual Art Festival in Los Angeles. An enriching cultural experience for art lovers and enthusiasts.',
  },
  {
    id: 4,
    title: 'Food Expo',
    date: 'Dec 5, 2024',
    location: 'Chicago, IL',
    image: '/food-expo.jpg',
    categories: ['Food', 'Expo', 'Tasting'],
    description: 'Discover the latest food trends and enjoy delicious tastings at the Chicago Food Expo. Featuring top chefs, restaurants, and food brands from across the globe.',
  },
  {
    id: 5,
    title: 'Health and Wellness Retreat',
    date: 'Jan 12, 2025',
    location: 'Miami, FL',
    image: '/wellness-retreat.jpg',
    categories: ['Health', 'Wellness', 'Retreat'],
    description: 'Rejuvenate and recharge at our Health and Wellness Retreat in Miami. Yoga, meditation, and wellness workshops to help you relax and unwind.',
  },
  {
    id: 6,
    title: 'Science Fair',
    date: 'Feb 25, 2025',
    location: 'Boston, MA',
    image: '/science-fair.jpg',
    categories: ['Science', 'Education', 'Fair'],
    description: 'Explore the latest in science and technology at the Boston Science Fair. Engage with exhibits, presentations, and hands-on learning experiences.',
  },
  {
    id: 7,
    title: 'Film Festival',
    date: 'Mar 18, 2025',
    location: 'Toronto, ON',
    image: '/film-festival.jpg',
    categories: ['Film', 'Festival', 'Cultural'],
    description: 'Experience the best in independent film at the Toronto Film Festival. Screenings, panel discussions, and networking with filmmakers from around the globe.',
  },
  {
    id: 8,
    title: 'Fashion Show',
    date: 'Apr 22, 2025',
    location: 'Paris, FR',
    image: '/fashion-show.jpg',
    categories: ['Fashion', 'Show', 'Luxury'],
    description: 'Join us in Paris for a high-fashion runway show featuring top designers and the latest trends in the world of fashion.',
  },
  {
    id: 9,
    title: 'Gaming Tournament',
    date: 'May 30, 2025',
    location: 'Los Angeles, CA',
    image: '/gaming-tournament.jpg',
    categories: ['Gaming', 'Tournament', 'Competition'],
    description: 'Compete in a thrilling gaming tournament in Los Angeles. Featuring top games and esports teams from around the world.',
  },
  {
    id: 10,
    title: 'Literary Book Fair',
    date: 'June 10, 2025',
    location: 'London, UK',
    image: '/book-fair.jpg',
    categories: ['Books', 'Literature', 'Fair'],
    description: 'Explore the world of books at the London Literary Book Fair. Meet authors, attend readings, and discover new literary works.',
  },
  {
    id: 11,
    title: 'Charity Gala',
    date: 'July 20, 2025',
    location: 'Sydney, AU',
    image: '/charity-gala.jpg',
    categories: ['Charity', 'Gala', 'Fundraising'],
    description: 'Join us for a glamorous Charity Gala in Sydney. Enjoy a night of fine dining, entertainment, and fundraising for a great cause.',
  },
  {
    id: 12,
    title: 'Adventure Sports Festival',
    date: 'Aug 15, 2025',
    location: 'Cape Town, ZA',
    image: '/adventure-sports.jpg',
    categories: ['Sports', 'Adventure', 'Outdoor'],
    description: 'Get your adrenaline pumping at the Cape Town Adventure Sports Festival. Featuring extreme sports, adventure activities, and more.',
  },
];

export default eventsData;
