import React from 'react';

const developers = [
  {
    id: 1,
    name: 'Lodha',
    location: 'Mumbai',
    totalProjects: 104,
    experience: 39,
    logo: '/public/images/lodha-521.jpg',
    categories: [
      { name: 'Ready to Move', count: 68 },
      { name: 'Under Construction', count: 28 },
      { name: 'New Launch', count: 5 }
    ]
  },
  {
    id: 2,
    name: 'Kalpataru',
    location: 'Mumbai',
    totalProjects: 82,
    experience: 50,
    logo: '/public/images/kalpataru-532.jpg',
    categories: [
      { name: 'Ready to Move', count: 66 },
      { name: 'Under Construction', count: 13 },
      { name: 'New Launch', count: 3 }
    ]
  },
  {
    id: 3,
    name: 'Hiranandani',
    location: 'Mumbai',
    totalProjects: 78,
    experience: 34,
    logo: '/public/images/hiranandani-451.jpg',
    categories: [
      { name: 'Ready to Move', count: 73 },
      { name: 'Under Construction', count: 4 }
    ]
  },
   {
    id: 4,
    name: 'Rustomjee',
    location: 'Mumbai',
    totalProjects: 68,
    experience: 44,
    logo: '/public/images/rustomjee-599.jpg',
    categories: [
      { name: 'Ready to Move', count: 73 },
      { name: 'Under Construction', count: 4 }
    ]
  },
   {
    id: 5,
    name: 'Runwal',
    location: 'Mumbai',
    totalProjects: 63,
    experience: 41,
    logo: '/public/images/runwal-538.jpg',
    categories: [
      { name: 'Ready to Move', count: 73 },
      { name: 'Under Construction', count: 4 }
    ]
  }
];

function TopDevelopers() {
  return (
     <div className="max-w-screen-xl mx-auto px-4 py-8">
    <div className="bg-white rounded-xl ">
      <h2 className="text-[28px] font-semibold text-gray-800 mb-2">Top Developers in Mumbai</h2>
      <p className="text-[15px] text-gray-600 mb-4 leading-snug">
        These top developers in Mumbai are renowned for delivering high-quality work and meeting deadlines on time. They offer trusted projects that many homebuyers and investors choose without hesitation.
      </p>

      <div className="flex overflow-x-auto gap-4 pb-2 hide-scrollbar">
        {developers.map((dev,index) => (
          <div
            key={index.id}
            className="min-w-[360px] w-[360px] flex-shrink-0 bg-white border rounded-xl shadow-sm"
          >
          
            <div className="flex items-center gap-4 p-4">
              <div className="w-16 h-16 border rounded-lg p-1 flex items-center justify-center bg-white">
                <img src={dev.logo} alt={dev.name} className="object-contain max-h-full max-w-full" />
              </div>
              <div>
                <h3 className="text-lg font-bold">{dev.name}</h3>
                <p className="text-sm text-gray-500">{dev.location}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 text-center border-t border-gray-200 text-sm font-medium py-2">
              <div>
                <div className="text-[16px] text-gray-800">{dev.totalProjects}</div>
                <div className="text-gray-500 text-[13px]">Total Projects</div>
              </div>
              <div>
                <div className="text-[16px] text-gray-800">{dev.experience}</div>
                <div className="text-gray-500 text-[13px]">Experience</div>
              </div>
            </div>

           
            <div className="border-t border-gray-200 px-4 py-3 space-y-2">
              {dev.categories.map((cat, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 cursor-pointer text-[15px]"
                >
                  <span>{cat.name}</span>
                  <span className="text-gray-500 text-[14px]">({cat.count})</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      
      <div className="mt-5">
        <button className="text-[#000] text-[15px] font-medium hover:underline flex items-center gap-1">
          View All Developers in Mumbai →
        </button>
      </div>
    </div>
    </div>
  );
}

export default TopDevelopers;
