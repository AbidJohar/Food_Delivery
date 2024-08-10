import React, { useContext, useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import { StoreContext } from '../../context/contextStore';
const Order = () => {
   
         const {getTotalCartAmount} = useContext(StoreContext);
         let totalAmount = getTotalCartAmount() ? getTotalCartAmount() + 100 : 0;

  // State to manage the order total
  const [orderTotal, setOrderTotal] = useState(100); // Example total

  // Handle input change for customer information
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({
      ...customerInfo,
      [name]: value,
    });
  };

  return (
    <div className='flex items-start justify-center p-6 py-16'>
      {/* Left side: Delivery Information */}
      <div className='w-2/3 bg-gray-100   mr-4'>
        <h2 className='text-2xl font-bold mb-4 font-poppins'>Delivery Information</h2>


        <div className='w-full mb-4 flex items-center justify-between flex-row  gap-4'>
          <div className='w-1/2' >
            <input
              type='text'
              name='name'
              className='w-full p-2 border border-gray-300 rounded'
              placeholder='First name'
            />
          </div>
          <div className='w-1/2'>
            <input
              type='text'
              name='name'
              className='w-full p-2 border border-gray-300 rounded'
              placeholder='Last name'
            />
          </div>
        </div>
        <div className='mb-4'>
          <input
            type='text'
            name='postalCode'
            className='w-full p-2 border border-gray-300 rounded'
            placeholder='Email address'
          />
        </div>

        <div className='mb-4'>
          <input
            type='text'
            name='postalCode'
            className='w-full p-2 border border-gray-300 rounded'
            placeholder='Street'
          />
        </div>

        <div className='w-full mb-4 flex items-center justify-between flex-row  gap-4'>
          <div className='w-1/2' >
            <input
              type='text'
              name='name'
              className='w-full p-2 border border-gray-300 rounded'
              placeholder='City'
            />
          </div>
          <div className='w-1/2'>
            <input
              type='text'
              name='name'
              className='w-full p-2 border border-gray-300 rounded'
              placeholder='State'
            />
          </div>
        </div>


        <div className='w-full mb-4 flex items-center justify-between flex-row  gap-4'>
          <div className='w-1/2' >
            <input
              type='number'
              name='zip code'
              className='w-full p-2 border border-gray-300 rounded'
              placeholder='Zip code '
            />
          </div>
          <div className='w-1/2'>
            <input
              type='text'
              name='name'
              className='w-full p-2 border border-gray-300 rounded'
              placeholder='country'
            />
          </div>
        </div>

        <div className='mb-4'>
          <PhoneInput
            country={'pk'}
             
            inputStyle={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

      </div>

      {/* Right side: Order Summary and Total Price */}
      <div className='w-1/3 bg-gray-100 px-6 '>
      <div className=' w-full '>
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
            <button onClick={()=> navigate('/order')} className='px-6 py-1 mt-3 bg-orange-500 hover:bg-orange-600 rounded-sm text-white'>PROCEED TO PAYMENT</button>  
          </div>
          </div>
      </div>
    </div>
  );
};

export default Order;
