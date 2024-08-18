import React, { useContext, useEffect, useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import { StoreContext } from '../../context/contextStore';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
const Order = () => {
         
         const {getTotalCartAmount,food_list,token,cartItems,url} = useContext(StoreContext);
         const navigate = useNavigate();
         // to show delivery charges
         let totalAmount = getTotalCartAmount() ? getTotalCartAmount() + 100 : 0;
         const [data, setData] = useState({
          firstName: "",
          lastName: "",
          email: "",
          street: "",
          city: "",
          state: "",
          zipcode: "",
          country: "",
          phone: "",
         })
      
         const onChangeHandler = (event)=>{
          const name= event.target.name;
          const value= event.target.value;
          setData(data=>({...data, [name]: value}));
         }

        const placeOrder = async (event)=>{
          event.preventDefault();
          let orderItems = [];
          food_list.map((item)=>{
            if(cartItems[item._id] >0){
              let itemInfo = item;
               itemInfo["quantity"] = cartItems[item._id];
               orderItems.push(itemInfo);
            }
          })
          let orderData = {
            address:data,
            items: orderItems,
            amount: getTotalCartAmount()+100
          } 

          const response = await axios.post(url+"/api/order/place",orderData,{headers:{token}});
          if(response.data.success){
            const {session_url} = response.data;
            window.location.replace(session_url);
          }
          else{
            alert("Error");
          }
          
        }
        useEffect(()=>{

          if(!token){
             navigate('/cart');
             toast.error("To proceed the Payment, SignUp please");
            } else if(getTotalCartAmount() ==0){
              navigate('/cart');
              toast.error("To proceed the Payment, Add some food items");
          }
        },[token])
   

  return (
    <form onSubmit={placeOrder} >
        <div className='flex items-start justify-center p-6 py-16'>
      {/* Left side: Delivery Information */}
      <div className='w-2/3 bg-gray-100   mr-4'>
        <h2 className='text-2xl font-bold mb-4 font-poppins'>Delivery Information</h2>

        <div className='w-full mb-4 flex items-center justify-between flex-row  gap-4'>
          <div className='w-1/2' >
            <input
              required
              type='text'
              onChange={onChangeHandler}
              value={data.firstName}
              name='firstName'
              className='w-full p-2 border border-gray-300 rounded'
              placeholder='First name'
            />
          </div>
          <div className='w-1/2'>
            <input
              required
              type='text'
              onChange={onChangeHandler}
              value={data.lastName}
              name='lastName'
              className='w-full p-2 border border-gray-300 rounded'
              placeholder='Last name'
            />
          </div>
        </div>
        <div className='mb-4'>
          <input
            required
            type='text'
            onChange={onChangeHandler}
              value={data.email}
            name='email'
            className='w-full p-2 border border-gray-300 rounded'
            placeholder='Email address'
          />
        </div>

        <div className='mb-4'>
          <input
            required
            type='text'
            onChange={onChangeHandler}
              value={data.street}
            name='street'
            className='w-full p-2 border border-gray-300 rounded'
            placeholder='Street'
          />
        </div>

        <div className='w-full mb-4 flex items-center justify-between flex-row  gap-4'>
          <div className='w-1/2' >
            <input
              required
              type='text'
              onChange={onChangeHandler}
              value={data.city}
              name='city'
              className='w-full p-2 border border-gray-300 rounded'
              placeholder='City'
            />
          </div>
          <div className='w-1/2'>
            <input
              required
              type='text'
              onChange={onChangeHandler}
              value={data.state}
              name='state'
              className='w-full p-2 border border-gray-300 rounded'
              placeholder='State'
            />
          </div>
        </div>


        <div className='w-full mb-4 flex items-center justify-between flex-row  gap-4'>
          <div className='w-1/2' >
            <input
              required
              type='number'
              onChange={onChangeHandler}
              value={data.zipcode}
              name='zipcode'
              className='w-full p-2 border border-gray-300 rounded'
              placeholder='Zip code '
            />
          </div>
          <div className='w-1/2'>
            <input
              required
              type='text'
              onChange={onChangeHandler}
              value={data.country}
              name='country'
              className='w-full p-2 border border-gray-300 rounded'
              placeholder='country'
            />
          </div>
        </div>
        <div className='mb-4'>
          <input
            required
            type='text'
            onChange={onChangeHandler}
              value={data.phone}
            name='phone'
            className='w-full p-2 border border-gray-300 rounded'
            placeholder='Phone'
          />
        </div>

        <div className='mb-4'>
          
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
            <button type='submit' className='px-6 py-1 mt-3 bg-orange-500 hover:bg-orange-600 rounded-sm text-white'>PROCEED TO PAYMENT</button>  
          </div>
          </div>
      </div>
    </div>
      </form>
  );
};

export default Order;
