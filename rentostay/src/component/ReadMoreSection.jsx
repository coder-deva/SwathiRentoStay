import { useState } from "react";
import React from "react";
const ReadMoreSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-[#f3f3f3] px-6 py-12 text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Section 1 */}
        <h2 className="text-xl font-semibold mb-2">Real Estate in Gurugram</h2>
        <p className="text-gray-700 leading-relaxed">
          Gurgaon, now Gurugram, is a part of the National Capital Region because of its excellent infrastructure and
          technological development. Several young enthusiasts and professionals around the country are captivated by
          the cyber hub in this city. In mere 20-25 years, they have welcomed several shopping malls, healthcare
          facilities, education institutions, and the world-class Dlf Cyber City. In addition, the coherent connectivity
          offered by the DMRC and its own Rapid Metro produces Gurgaon as a mirror of India's growth.
        </p>

        {/* Section 2 */}
        <h2 className="text-xl font-semibold mt-6 mb-2">Infrastructure and Connectivity</h2>
        <p className="text-gray-700 leading-relaxed">
          The infrastructure of Gurugram over the last few years has witnessed tremendous change. The thriving
          construction of high-rise apartments and several malls in areas once a part of barren land. It now possesses
          excellent healthcare facilities, well-mapped roads and countless other projects. The Delhi Metro and its own
          Rapid Metro provide connectivity to this ever-transitional city, linked to the capital through the
          Delhi-Gurgaon Expressway.
          <span className="block text-right mt-2">
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-purple-700 hover:underline text-sm"
            >
              {showMore ? "Read Less" : "Read More"}
            </button>
          </span>
        </p>

        {/* Additional content appears below */}
        {showMore && (
          <div className="mt-6 space-y-6 text-gray-700 transition-all duration-300 ease-in-out">
            <div>
              <h2 className="text-xl font-semibold mb-2">Upcoming Developments</h2>
              <p>
                Gurugram continues to evolve with several smart city projects, new expressways, and increased
                commercial investments. The city is attracting global corporations and growing as a financial and tech
                hub.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Real Estate Trends</h2>
              <p>
                The property market is on a steady rise, especially in sectors along the Dwarka Expressway and Sohna
                Road. Affordable housing schemes and luxury townships coexist, making Gurugram attractive for diverse
                buyers.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReadMoreSection;
