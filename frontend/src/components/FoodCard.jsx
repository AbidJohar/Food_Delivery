import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/contextStore';

const FoodCard = ({
    id,
    name,
    description,
    price,
    image,
    className=''
}) => {

     
    const {addToCart, cardItems, removeFromCart} =useContext(StoreContext);


    return (
        <div className={`foot-item w-[13.5rem] mb-8 hover:scale-105 transition-all duration-500  shadow-lg animate-fadeIn`}>
            <div className='img-container rounded-md overflow-hidden relative'>
                <img src={image} />
                {!cardItems[id] ?
                    <img className='absolute bottom-3 right-3 cursor-pointer' onClick={() => addToCart(id) } src={assets.add_icon_white} width={30} /> :
                    <div className='w-fit bg-black/65  rounded-full p-1 flex items-center justify-end mt-1 absolute bottom-3 right-3 cursor-pointer'>
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} width={25} />
                        <p className='mx-1 font-bold text-white'>{cardItems[id]}</p>
                        <img onClick={() =>  removeFromCart(id)} src={assets.remove_icon_red} width={25} />
                    </div>
                }
            </div>
            <div className='info-container '>
                <div className='item-rating flex items-center justify-between  mt-4'>
                    <p className=' font-semibold'>{name}</p>
                    <img src={assets.rating_starts} width={60} />
                </div>
                <p className='text-gray-700 text-sm'>{description}</p>
                <p className='font-bold'>Rs.{price}</p>
            </div>
        </div>
    )
}

export default FoodCard
