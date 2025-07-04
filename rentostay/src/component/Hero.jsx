import React, { useEffect, useState } from "react";
import {
  FaSearchLocation,
  FaMicrophone,
  FaSearch,
  FaBuilding,
  FaHotel,
  FaLandmark,
  FaCity,
  FaRegUserCircle,
  FaRegClone,
} from "react-icons/fa";

function Hero() {
  const items = [
    "Interiors",
    "Transactions",
    "Financing",
    "Site Visits",
    "Property Management",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#000a52] to-[#003c3c]  text-white">
      <div className="text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Real Estate Made Real Easy</h1>
        <p className="text-lg text-gray-300 mb-10">
          We’ve got you covered ! From finding the perfect property to{" "}
          <span className="text-pink-400 font-semibold transition-opacity duration-500 ease-in-out">
            {items[currentIndex]}
          </span>
        </p>

       
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button className="px-6 py-2 rounded bg-white text-black font-medium flex items-center gap-2">
            <FaBuilding /> Buy
          </button>
          <button className="px-6 py-2 rounded border border-gray-400 flex items-center gap-2">
            <FaRegClone /> Rental
          </button>
          <button className="px-6 py-2 rounded border border-gray-400 flex items-center gap-2">
            <FaSearch /> Projects
          </button>
          <button className="px-6 py-2 rounded border border-gray-400 flex items-center gap-2">
            <FaHotel /> PG / Hostels
          </button>
          <button className="px-6 py-2 rounded border border-gray-400 flex items-center gap-2">
            <FaLandmark /> Plot & Land
          </button>
          <button className="px-6 py-2 rounded border border-gray-400 flex items-center gap-2">
            <FaCity /> Commercial
          </button>
          <button className="px-6 py-2 rounded border border-gray-400 flex items-center gap-2">
            <FaRegUserCircle /> Agents
          </button>
        </div>

        
        <div className="bg-white text-black rounded-3xl p-4 w-full max-w-5xl mx-auto shadow-lg">
        
          <div className="flex items-center justify-between p-4 gap-4">
            
            <select className="border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-700 w-[180px]">
              <option value="">Select City</option>
              <option>Chennai</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
              <option>Delhi</option>
            </select>

      
            <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 flex-1">
              <input
                type="text"
                placeholder="Search by Project, Locality, or Builder"
                className="w-full outline-none bg-transparent text-gray-700 text-sm"
              />
              <div className="flex items-center gap-4 ml-2 text-purple-600">
                <button className="bg-[#f3eefb] p-3 rounded-full hover:bg-purple-200">
                  <FaSearchLocation />
                </button>
                <button className="bg-[#f3eefb] p-3 rounded-full hover:bg-purple-200">
                  <FaMicrophone />
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between px-4 pb-4 gap-4">
            <div className="flex gap-4 flex-1">
      
              <select className="border border-gray-300 rounded-xl px-4 py-2 text-sm text-gray-700 w-[160px]">
                <option value="">Budget</option>
                <option>Below ₹20 L</option>
                <option>₹20 L - ₹50 L</option>
                <option>₹50 L - ₹1 Cr</option>
                <option>Above ₹1 Cr</option>
              </select>

              <select className="border border-gray-300 rounded-xl px-4 py-2 text-sm text-gray-700 w-[180px]">
                <option value="">Property Type</option>
                <option>Apartment</option>
                <option>Plot</option>
                <option>Villa</option>
                <option>Penthouse</option>
              </select>

        
              <select className="border border-gray-300 rounded-xl px-4 py-2 text-sm text-gray-700 w-[200px]">
                <option value="">Possession Status</option>
                <option>Ready to Move</option>
                <option>Under Construction</option>
              </select>
            </div>

            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-xl transition">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
