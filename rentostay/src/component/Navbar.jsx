import React from 'react'

const Navbar = () => {
  return (
    <div>

     <nav className="flex justify-between items-center bg-black text-white px-4 py-4 text-sm">
      <div className="flex items-center gap-6 text-lg font-bold">
        <img src="/Rentologo.jpg" alt="Logo" className="h-8 w-auto object-contain" /> RentoStay
        <div className="flex gap-4 items-center text-sm font-normal">
          <button className="hover:underline">City </button>
          <button className="hover:underline">Buy </button>
          <button className="hover:underline">Rent </button>
          <button className="hover:underline">Projects </button>
          <button className="hover:underline">Agents </button>
          <button className="hover:underline">Services </button>
          <button className="hover:underline">Resources </button>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <button className="border border-green-500 text-green-400 px-2 py-1 rounded hover:bg-green-500 hover:text-white transition">Data Intelligence</button>
        <button className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200 transition">Sell or Rent Property</button>
        <button className="bg-gray-800 px-4 py-1 rounded hover:bg-gray-700 transition">Login</button>
      </div>
    </nav>
    
    </div>
  )
}

export default Navbar