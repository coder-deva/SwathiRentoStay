import React from 'react';
import { FaStar, FaChevronRight } from 'react-icons/fa';

const localities = [
  {
    name: 'Andheri West, Mumbai',
    rating: 4.6,
    reviews: 5,
    rank: 141,
    totalLocalities: 1009,
    salePrice: '38,500',
    rentPrice: '94',
    image: '/public/images/andheri-west-mumbai.jpg',
    stats: [
      { label: 'New Projects', count: 1658 },
      { label: 'Properties for Sale', count: 2501 },
      { label: 'Properties for Rent', count: 5507 },
    ],
  },
  {
    name: 'Malad West, Mumbai',
    rating: 4.4,
    reviews: 5,
    rank: 105,
    totalLocalities: 1009,
    salePrice: '28,300',
    rentPrice: '70',
    image: '/public/images/andheri-west-mumbai.jpg',
    stats: [
      { label: 'New Projects', count: 1362 },
      { label: 'Properties for Sale', count: 3594 },
      { label: 'Properties for Rent', count: 3417 },
    ],
  },
  {
    name: 'Malad East, Mumbai',
    rating: 5.0,
    reviews: 5,
    rank: 27,
    totalLocalities: 1009,
    salePrice: '28,400',
    rentPrice: '69',
    image: '/public/images/andheri-west-mumbai.jpg',
    stats: [
      { label: 'New Projects', count: 551 },
      { label: 'Properties for Sale', count: 2843 },
      { label: 'Properties for Rent', count: 4617 },
    ],
  },
   {
    name: 'Andheri North, Mumbai',
    rating: 4.6,
    reviews: 5,
    rank: 141,
    totalLocalities: 1009,
    salePrice: '38,500',
    rentPrice: '94',
    image: '/public/images/andheri-west-mumbai.jpg',
    stats: [
      { label: 'New Projects', count: 1658 },
      { label: 'Properties for Sale', count: 2501 },
      { label: 'Properties for Rent', count: 5507 },
    ],
  },
   {
    name: 'Andheri East, Mumbai',
    rating: 4.6,
    reviews: 5,
    rank: 141,
    totalLocalities: 1009,
    salePrice: '38,500',
    rentPrice: '94',
    image: '/public/images/andheri-west-mumbai.jpg',
    stats: [
      { label: 'New Projects', count: 1658 },
      { label: 'Properties for Sale', count: 2501 },
      { label: 'Properties for Rent', count: 5507 },
    ],
  },
   {
    name: 'Andheri South, Mumbai',
    rating: 4.6,
    reviews: 5,
    rank: 141,
    totalLocalities: 1009,
    salePrice: '38,500',
    rentPrice: '94',
    image: '/public/images/andheri-west-mumbai.jpg',
    stats: [
      { label: 'New Projects', count: 1658 },
      { label: 'Properties for Sale', count: 2501 },
      { label: 'Properties for Rent', count: 5507 },
    ],
  },
];

const TopLocalities = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-2">Top Localities in Mumbai</h2>
      <p className="text-sm text-gray-600 mb-4">
        Explore the top localities in Mumbai, featuring excellent roads, metro links, schools, and daily convenience.
      </p>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {localities.map((loc, idx) => (
          <div
            key={idx}
            className="min-w-[280px] border rounded-lg bg-white shadow-sm flex-shrink-0"
          >
            <div className="flex gap-2 items-center p-3 border-b">
              <img
                src={loc.image}
                alt={loc.name}
                className="w-12 h-12 object-cover rounded"
              />
              <div>
                <h3 className="text-sm font-semibold leading-snug">{loc.name}</h3>
                <div className="flex items-center gap-1 text-yellow-600 text-xs bg-yellow-100 px-2 py-0.5 rounded w-fit">
                  <FaStar className="text-xs" />
                  {loc.rating} • ({loc.reviews} ratings)
                </div>
              </div>
            </div>

            <div className="p-3 text-sm space-y-2">
              <div>
                <p className="text-gray-500 text-xs font-medium">Rank</p>
                <p className="font-semibold text-sm">{loc.rank}</p>
                <p className="text-xs text-gray-400">out of {loc.totalLocalities} localities</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs font-medium">Avg. Sale Price</p>
                <p className="font-semibold text-sm">₹ {loc.salePrice}/Sq. Ft</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs font-medium">Avg. Rent</p>
                <p className="font-semibold text-sm">₹ {loc.rentPrice}/Sq. Ft</p>
              </div>
              <div className="space-y-2 pt-1">
                {loc.stats.map((s, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center border rounded px-3 py-2 text-xs hover:bg-gray-50 cursor-pointer"
                  >
                    <div>
                      <div className="font-medium">{s.count.toLocaleString()} {s.label}</div>
                      <div className="text-gray-500">in {loc.name}</div>
                    </div>
                    <FaChevronRight className="text-gray-400 text-xs" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 font-medium text-sm text-blue-600 cursor-pointer">
        Localities in Mumbai →
      </div>
    </div>
  );
};

export default TopLocalities;
