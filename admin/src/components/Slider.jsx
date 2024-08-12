import React from 'react';
import { FaPlus, FaList, FaClipboardList } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Slider = () => {
  return (
    <div className=" bg-white border-r-[1px] border-black text-black h-[87vh] w-[20%] flex items-start justify-end py-10">
      <ul>
        <NavLink 
          to='/add' 
          className={({ isActive }) => 
            `${isActive ? 'bg-orange-400' : ''} mb-4 flex p-3 rounded-l-md items-center w-full justify-start border-[1px] border-r-0 border-black`
          }
        >
          <FaPlus className="mr-5" />
          <span>Add items</span>
        </NavLink>
        <NavLink 
          to='/list'
          className={({ isActive }) => 
            `${isActive ? 'bg-orange-400' : ''} mb-4 flex p-3 rounded-l-md items-center w-full justify-start border-[1px] border-r-0 border-black`
          }
        >
          <FaList className="mr-5" />
          <span>List items</span>
        </NavLink>
        <NavLink 
          to='/order'
          className={({ isActive }) => 
            `${isActive ? 'bg-orange-400' : ''} mb-4 flex p-3 rounded-l-md items-center w-full justify-start border-[1px] border-r-0 border-black`
          }
        >
          <FaClipboardList className="mr-5" />
          <span>Orders info</span>
        </NavLink>
      </ul>
    </div>
  );
}

export default Slider;
