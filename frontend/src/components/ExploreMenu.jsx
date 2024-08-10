import React from 'react'
import { menu_list } from '../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div id='menu' className='w-full py-14 px-24'>
      <h1 className='text-xl font-poppins font-semibold'>Explore our Menu</h1>
      <p className='mt-2 text-md font-poppins mb-3'>Choose from our diverse menu and make your day enjoyable. Savor every bite and indulge in delightful flavors. Enjoy your meal and brighten your day with us!</p>

      <div className='flex items-center justify-center flex-row gap-4 border-b-2 border-gray-300 border-opacity-55'>
         { menu_list.map((item,index)=>(
            <div
            onClick={()=> setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
             key={index} className='flex items-center justify-center flex-col'>
                  <img  className={`cursor-pointer ${category === item.menu_name ? 'border-2 border-orange-500 rounded-full p-[0.1rem]': ''}`} src={item.menu_image} alt="" />
                  <p className=' cursor-pointer mb-4  text-gray-600 mt-3 font-poppins'>{item.menu_name}</p>

            </div>
         )) }
      </div>
    </div>
  )
}

export default ExploreMenu
