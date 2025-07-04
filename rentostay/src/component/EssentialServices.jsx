import React, { useState } from 'react';

const servicesData = {
  'For Buyers': [
    { icon: '/public/images/EssentialServices/Buyers/home-loan.png', label: 'Home Loan' },
    { icon: '/public/images/EssentialServices/Buyers/home-interior.png', label: 'Home Interior' },
    { icon: '/public/images/EssentialServices/Buyers/property-legal-services.png', label: 'Property Legal Services' },
    { icon: '/public/images/EssentialServices/Buyers/valuation.png', label: 'Valuation' },
    { icon: '/public/images/EssentialServices/Buyers/vastu-calculator.png', label: 'Vastu Calculator' },
    { icon: '/public/images/EssentialServices/Buyers/title-search.png', label: 'Title Search' },
  ],
  'For Owners': [
    { icon: '/public/images/EssentialServices/Sellers/sell-or-rent-property.png', label: 'sell-or-rent-property' },
    { icon: '/public/images/EssentialServices/Sellers/property-management.png', label: 'Property Management' },
    { icon: '/public/images/EssentialServices/Sellers/home-interior.png', label: 'Home Interior' },
  ],
  'For Tenants': [
    { icon: '/public/images/EssentialServices/Tentats/online-rent-agreement.png', label: 'Online Rent Agreement' },
    { icon: '/public/images/EssentialServices/Tentats/rent-receipts.png', label: 'Rent Receipts' },
  ],
  'For Agents': [
    { icon: '/public/images/EssentialServices/Agents/advertise-with-us.png', label: 'List Property With Us' },
    { icon: '/public/images/EssentialServices/Agents/co-broking-for-new-projects.png', label: 'Co-Broking For New Projects' },
  ],
  'For Builders & Banks': [
    { icon: '/public/images/EssentialServices/Builders//mortgage-partnerships.png', label: 'Mortage Partnership' },
    { icon: '/public/images/EssentialServices/Builders/data-intelligence.png', label: 'Data Intelligence    ' },
  ]
};

const EssentialServices = () => {
  const [activeTab, setActiveTab] = useState('For Buyers');

  return (
    <div className="bg-gray-100 py-10 px-6 rounded-xl max-w-7xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-2">Everything you Need at One Place</h2>

      {/* Tabs */}
      <div className="flex gap-2 mt-4">
        {Object.keys(servicesData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-t-lg font-medium border ${
              activeTab === tab
                ? 'bg-white text-black border-b-0'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Services Container */}
      <div className="bg-white border border-t-0 rounded-b-xl p-6 mt-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-10 text-center">
        {servicesData[activeTab].map((service, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img src={service.icon} alt={service.label} className="w-14 h-14 mb-2" />
            <p className="text-sm font-medium">{service.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EssentialServices;
