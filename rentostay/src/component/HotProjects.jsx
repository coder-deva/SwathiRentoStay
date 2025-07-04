// HotProjects.jsx
import React, { useState } from 'react';

const cities = ['Mumbai', 'Bangalore', 'Gurgaon', 'Pune', 'Noida', 'Hyderabad', 'Thane', 'Navi Mumbai', 'Chennai'];

const projects = [
  {
    id: 1,
    title: 'DLF The Westpark',
    location: 'Andheri West, Mumbai',
    price: '₹5.81 Cr to 11.20 Cr',
    image: '/public/images/project1.jpg'
  },
  {
    id: 2,
    title: 'Godrej Skyshore',
    location: 'Versova, Mumbai',
    price: '₹8.25 Cr to 13.75 Cr',
    image: '/public/images/project2.jpg'
  },
  {
    id: 3,
    title: 'K Raheja Antares',
    location: 'Kanjurmarg West, Mumbai',
    price: '₹3.54 Cr to 4.11 Cr',
    image: '/public/images/project3.jpg'
  },
  {
    id: 4,
    title: 'Godrej Bliss Kandivali',
    location: 'Kandivali East, Mumbai',
    price: '₹1.01 Cr to 2.46 Cr',
    image: '/public/images/project4.jpg'
  },
  {
    id: 5,
    title: 'Prestige Ocean Towers',
    location: 'Marine Lines, Mumbai',
    price: '₹12.00 Cr to 20.00 Cr',
    image: '/public/images/project5.jpg'
  },
];

const HotProjects = () => {
  const [selectedCity, setSelectedCity] = useState('Mumbai');

  return (
    <div className="bg-gray-100 p-8 rounded-2xl max-w-screen-xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Hot Selling Real Estate Projects in India</h2>
      <p className="text-gray-600 mb-4">
        A handpicked collection of the country’s most in-demand residential developments. These properties, from modern apartments to premium villas,
        offer unmatched value in top cities with ideal locations, smart amenities, and trusted builders.
      </p>

      {/* City Selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {cities.map((city) => (
          <button
            key={city}
            className={`px-4 py-2 rounded border ${selectedCity === city ? 'bg-black text-white' : 'bg-white text-black'}`}
            onClick={() => setSelectedCity(city)}
          >
            {city}
          </button>
        ))}
      </div>

      {/* Scrollabar*/}
      <div className="overflow-x-auto">
        <div className="flex gap-4 min-w-[1024px]">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-md w-[250px] min-w-[250px]"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-40 w-full object-cover"
                />
                <span className="absolute top-2 left-2 text-4xl font-bold text-white/90 drop-shadow-lg">
                  {index + 1}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-1">{project.location}</p>
                <p className="text-purple-700 font-semibold text-sm">{project.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotProjects;
