import React from 'react';
import { FaChartLine, FaMapMarkedAlt, FaRegLightbulb } from 'react-icons/fa';

const insights = [
  {
    title: 'Property Rates Heatmap',
    subtitle: 'in Mumbai',
    color: 'bg-teal-100',
    icon: <FaChartLine />,
    content: (
      <>
        <p className="text-sm text-gray-700 flex items-start gap-2 mb-4">
          <FaMapMarkedAlt className="mt-1" />
          An Interactive Map to help you understand a City’s Real Estate
        </p>
        <img
          src="/public/images/property-rates-heatmap-img.png"
          alt="Heatmap"
          className="rounded-xl w-full object-cover h-40"
        />
        <button className="mt-4 font-semibold text-sm text-black underline">Explore Now →</button>
      </>
    ),
  },
  {
    title: 'Asking Price',
    subtitle: 'in Mumbai',
    color: 'bg-orange-100',
    icon: <FaChartLine />,
    content: (
      <>
        <p className="text-sm text-gray-700 flex items-start gap-2 mb-2">
          <FaRegLightbulb className="mt-1" />
          Mumbai has 37,057 Listings on Marketplaces with Median Price of ₹ 35.8 K/Sq.Ft.
        </p>
        <img
          src="/public/images/property-rates-heatmap-img.png"
          alt="Bar Graph"
          className="rounded-xl w-full object-cover h-36"
        />
      </>
    ),
  },
  {
    title: 'Govt. Registrations',
    subtitle: 'in Mumbai',
    color: 'bg-pink-100',
    icon: <FaChartLine />,
    content: (
      <div className="text-sm text-gray-800 space-y-3">
        <div className="flex justify-between">
          <div>Sales Transactions</div>
          <div className="font-bold">1,36,208</div>
        </div>
        <div className="flex justify-between">
          <div>Gross Sales Value</div>
          <div className="font-bold">₹ 191,933 Cr</div>
        </div>
        <div className="flex justify-between">
          <div>Registered Rate</div>
          <div className="font-bold">₹ 16,500 / Sq. Ft.</div>
        </div>
        <p className="text-xs text-gray-500 pt-1">Transaction Period Aug 24 to Jul 25</p>
      </div>
    ),
  },
  {
    title: 'Micromarket Price Comparison',
    subtitle: 'in Mumbai',
    color: 'bg-purple-100',
    icon: <FaChartLine />,
    content: (
      <>
        <p className="text-sm text-gray-700 flex items-start gap-2 mb-2">
          <FaRegLightbulb className="mt-1" />
          Mumbai avg. price is ₹ 35.7 K/Sq.Ft.
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between font-semibold">
            <span>₹ 44,300</span>
            <span>Mumbai South</span>
          </div>
          <div className="h-1 bg-purple-400 rounded-full" />

          <div className="flex justify-between font-semibold">
            <span>₹ 34,850</span>
            <span>Mumbai Harbour</span>
          </div>
          <div className="h-1 bg-purple-400 rounded-full w-4/5" />

          <div className="flex justify-between font-semibold">
            <span>₹ 33,200</span>
            <span>Mumbai Western Suburbs</span>
          </div>
          <div className="h-1 bg-purple-400 rounded-full w-3/5" />

          <div className="flex justify-between font-semibold">
            <span>₹ 30,400</span>
            <span>Mumbai Central Suburbs</span>
          </div>
          <div className="h-1 bg-purple-400 rounded-full w-2/5" />
        </div>
      </>
    ),
  },
];

const PropertyPriceInsights = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow max-w-7xl mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-2">Property Price Insights in Mumbai</h2>
      <p className="text-gray-600 text-sm mb-6">
        Get the latest property price insights in Mumbai. Learn about price trends, rental rates, and area-specific
        comparisons. It helps when you’re planning to buy or invest smartly.
      </p>

      <div className="flex overflow-x-auto gap-6 pb-4">
        {insights.map((item, index) => (
          <div
            key={index}
            className={`min-w-[300px] bg-white rounded-xl p-4 shadow border ${item.color} flex-shrink-0`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="font-semibold text-lg">{item.title}</div>
              <div className="text-gray-600 text-xl">{item.icon}</div>
            </div>
            <p className="text-xs text-gray-600 mb-3">{item.subtitle}</p>
            {item.content}
          </div>
        ))}
      </div>

      <div className="mt-4 font-semibold text-black hover:underline text-sm cursor-pointer">
        Property Price Insights in Mumbai →
      </div>
    </div>
  );
};

export default PropertyPriceInsights;
