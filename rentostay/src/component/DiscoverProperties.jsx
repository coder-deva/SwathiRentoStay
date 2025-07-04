import React, { useState } from 'react';

const cities = ['Mumbai', 'Bangalore', 'Gurgaon', 'Pune', 'Noida', 'Hyderabad', 'Thane', 'Navi Mumbai', 'Delhi'];

const propertyTypes = [
  {
    title: 'Properties for Sale',
    description:
      'Properties for sale in mumbai offer a versatile mix of affordable apartments, premium homes, and commercial units. Customise your search by property type, budget, and BHK preference to find options that match your requirements.',
  },
  {
    title: 'Properties for Rent',
    description: '',
  },
];

const cards = [
  {
    title: 'Flats',
    subtitle: 'for Sale in Mumbai',
    image: '/public/images/Flats.png',
  },
  {
    title: 'Office spaces',
    subtitle: 'for Sale in Mumbai',
    image: '/public/images/Office.png',
  },
  {
    title: 'Shops',
    subtitle: 'for sale in Mumbai',
    image: '/public/images/Shops.png',
  },
];

const DiscoverProperties = () => {
  const [activeCity, setActiveCity] = useState('Mumbai');
  const [activeType, setActiveType] = useState('Properties for Sale');

  return (
    <div className="bg-gray-100 p-8 rounded-2xl max-w-7xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-2">Discover More Real Estate Properties in India</h2>

      {/* Cities */}
      <div className="flex flex-wrap gap-2 mt-4">
        {cities.map((city) => (
          <button
            key={city}
            onClick={() => setActiveCity(city)}
            className={`px-4 py-2 rounded-md font-medium ${
              activeCity === city ? 'bg-black text-white' : 'bg-white text-black border'
            }`}
          >
            {city}
          </button>
        ))}
      </div>

      {/* Grid Container */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Panel */}
        <div className="col-span-1 bg-white p-4 rounded-xl shadow-sm">
          {propertyTypes.map((type) => (
            <div
              key={type.title}
              onClick={() => setActiveType(type.title)}
              className={`border cursor-pointer mb-4 rounded-lg ${
                activeType === type.title ? 'border-black' : 'border-gray-200'
              }`}
            >
              <div className="p-4 flex justify-between items-center font-semibold">
                <span>{type.title}</span>
                <span>▾</span>
              </div>
              {activeType === type.title && type.description && (
                <p className="px-4 pb-4 text-sm text-gray-600">{type.description}</p>
              )}
            </div>
          ))}
        </div>

        {/* Right Panel */}
        <div className="col-span-3 overflow-x-auto">
          <div className="flex gap-6">
            {cards.map((e, index) => (
              <div
                key={index}
                className="min-w-[250px] max-w-sm bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <img src={e.image} alt={e.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{e.title}</h3>
                  <p className="text-sm text-gray-600">{e.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverProperties;
