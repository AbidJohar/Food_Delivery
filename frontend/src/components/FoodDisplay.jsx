import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/contextStore'
import FoodCard from './FoodCard';
import { assets } from '../assets/assets';

const FoodDisplay = ({ category }) => {

  const { food_list,search,setSearch } = useContext(StoreContext);
  
 
  


  return (
    <div className=' mx-20'>
   <div className="relative mb-4">
  <input
    className="w-1/3 border border-gray-600 py-2 px-4 pl-10 pr-10 rounded-full focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent shadow-sm placeholder-gray-700 text-gray-700"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    type="text"
    placeholder="Search food here..."
  />
  <img
    src={assets.search_icon}
    alt="Search Icon"
    className="absolute right-[69%] top-1/2 transform -translate-y-1/2"
    width={20}
  />
</div>
      <h2 className='text-xl font-poppins font-semibold mb-6'>Top Food near to you</h2>
      <div className='food-list  grid grid-cols-4'>
        {food_list.map((item) => {
          if (category === "All" || category === item.category)
          return  <FoodCard  id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
        })}

      </div>
    </div>
  )
}

export default FoodDisplay
