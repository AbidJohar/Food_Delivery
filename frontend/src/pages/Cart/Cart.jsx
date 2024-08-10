import React, { useContext } from 'react';
import { StoreContext } from '../../context/contextStore';
import { assets } from '../../assets/assets';
import { useNavigate} from 'react-router-dom';
 

const Cart = () => {
  const navigate = useNavigate()
  const { food_list, cardItems, removeFromCart, getTotalCartAmount} = useContext(StoreContext);
     
     let totalAmount = getTotalCartAmount() ? getTotalCartAmount() + 100 : 0;

  return (
    <div className="mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className='grid grid-cols-5   border-b'>
        <h2 className="text-center font-poppins font-bold">Item</h2>
        <h2 className="text-center font-poppins font-bold">Title</h2>
        <h2 className="text-center font-poppins font-bold">Price</h2>
        <h2 className="text-center font-poppins font-bold">Quantity</h2>
        <h2 className="text-center font-poppins font-bold pl-4">Remove</h2>
      </div>
      <hr className='h-[0.15rem] mb-3  bg-slate-400' />
      <div className="space-y-4">
        {food_list.map((item) => {
          if (cardItems[item._id] > 0) {
            return (
              <div key={item._id} className="grid grid-cols-5 gap-14 p-3 pl-20 border-b bg-gray-200 rounded-lg items-center">
                <img src={item.image} width={50} className="rounded-lg" alt={item.name} />
                <h3 className="text-md font-normal text-gray-700">{item.name}</h3>
                <h2 className="text-lg font-semibold text-gray-800 pl-5">Rs.{item.price}</h2>
                <p className="text-sm text-gray-500 pl-10">{cardItems[item._id]}</p>
                <img className='pl-16' onClick={() => removeFromCart(item._id)} src={assets.cross_icon} alt="Remove" width={78} />

              </div>
            )
          }
        })}
      </div>
      <div className='flex items-center justify-between mt-8'>
        <div className=' w-1/2 '>
          <h1 className='font-bold font-poppins text-xl'>Cart Total</h1>
          <div className='flex flex-col'>
            <div className='flex items-center justify-between mr-3'>
              <p className='text-gray-400 font-poppins'>Sub Total:</p>
              <p className='text-gray-400 font-poppins'>{getTotalCartAmount()}</p>
            </div>
            <div className='flex items-center justify-between mr-3'>
              <p className='text-gray-400 font-poppins'>Delivery Fee:</p>
              <p className='text-gray-400 font-poppins'>{getTotalCartAmount()===0? 0 : 100}</p>
            </div>
            <hr className='h-[1px] bg-slate-300' />
            <div className='flex mt-1 items-center justify-between mr-3'>
              <p className='font-bold font-poppins'>Total:</p>
              <p className='font-bold font-poppins'>{totalAmount}</p>
            </div>
          </div>
          
          <button onClick={()=> navigate('/order')} className='px-6 py-1 mt-3 bg-orange-500 hover:bg-orange-600 text-white rounded-sm'>PROCEED TO CHECKOUT</button>  
        </div>
        <div className=' w-1/2 pl-28'>
          <p className='font-poppins mb-3'>If you have a promo code, Enter here</p>
          <div>
            <input className='py-2 px-3 ring-1 ring-black focus:outline-none' type="text" placeholder='promo code' />
            <button className='px-3 py-2 ring-1 ring-black bg-black/85 rounded-r-sm  focus:ring-2 focus:ring-black/30 text-white'>
              Submit
            </button>

          </div>
        </div>

      </div>
    </div>

  )
};

export default Cart;
