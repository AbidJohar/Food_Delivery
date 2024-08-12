import React from 'react'
import profilepic from '../assets/Profilepic.png'
const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-8 py-3 flex justify-between items-center">
      <div className="flex items-center">
        <span className="text-lg font-semibold">Admin Panel</span>
      </div>
      <div className="flex items-center">
        <img src={profilepic} alt="Profile" className="h-10 w-10 rounded-full" />
      </div>
    </nav>
  )
}

export default Navbar
