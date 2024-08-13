import React, { useContext } from 'react'
import { StoreContext } from '../context/contextStore'
import FoodCard from './FoodCard';

const FoodDisplay = ({ category }) => {

  const { food_list } = useContext(StoreContext);

   


  return (
    <div className=' mx-20'>
      <h2 className='text-xl font-poppins font-semibold mb-6'>Top Food near to you</h2>
      <div className='food-list  grid grid-cols-4'>
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category)
          return  <FoodCard  key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
        })}

      </div>
    </div>
  )
}

export default FoodDisplay
