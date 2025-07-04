import React from 'react';

const cities = [
  { name: 'Gurgaon', img: '/public/images/bangalore.png' },
  { name: 'Bangalore', img: '/public/images/bangalore.png' },
  { name: 'Thane', img: '/public/images/bangalore.png' },
  { name: 'Delhi', img: '/public/images/bangalore.png' },
  { name: 'Hyderabad', img: '/public/images/bangalore.png' },
  { name: 'Pune', img: '/public/images/bangalore.png' },
  { name: 'Noida', img: '/public/images/bangalore.png' },
  { name: 'Lucknow', img: '/public/images/bangalore.png' },
  { name: 'Navi Mumbai', img: '/public/images/bangalore.png' },
  { name: 'Kolkata', img: '/public/images/bangalore.png' },
  { name: 'Chennai', img: '/public/images/bangalore.png' }
];

const PopularCities = () => {
  return (
     <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h2 className="text-[26px] font-semibold text-gray-800 mb-1">
        Explore Real Estate in Popular Indian Cities
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        Looking beyond Mumbai? Check out homes and projects in popular Indian cities. You’ll find smart choices for both living and investing.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {cities.map((city, index) => (
          <div
            key={index}
            className="flex items-center border rounded-xl px-4 py-3 gap-4 bg-white hover:shadow-md cursor-pointer transition"
          >
            <div className="w-[40px] h-[40px] flex-shrink-0">
              <img src={city.img} alt={city.name} className="object-contain w-full h-full" />
            </div>
            <span className="text-[15px] font-medium text-gray-800">{city.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCities;
