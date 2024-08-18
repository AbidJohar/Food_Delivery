import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/contextStore'
import axios from 'axios';
import { assets } from '../../assets/assets';

const Myorders = () => {
   const {url,token} = useContext(StoreContext);
   const [orders, setOrders] = useState([]);

     const fetchorders =async ()=>{
        const response = await axios.post(url+"/api/order/myorders", {},{headers:{token}});
        if(response.data.success){
            setOrders(response.data.data);
             console.log(response.data.data);
        } else{
            console.log("error from fetch orders");
        }
     }
  
     useEffect(()=>{
        if(token){
            fetchorders();
        }
     },[token]);


  return (
    <div className='w-full py-4 px-20 font-bold'>
       <h2 className='text-2xl font-poppins'>My orders</h2>

       {orders.length == 0 ? <div className='w-full py-4 px-20  flex items-center justify-center'>
          <h1 >Your order page is feeling lonely! Head back home Page to fill it with delicious treats.</h1>
       </div> : 
       <div className='flex flex-col mt-4 space-y-4'>
      { orders.map((order, index) => (
    <div key={index} className='flex items-center justify-around px-1 py-4 border-2 border-black rounded-lg'>
      <img src={assets.parcel_icon} width={40} className='mr-4' />
      <div className='w-[30%]'>
        <p className='text-sm flex items-center flex-wrap'>
          {order.items.map((item, index) => (
            <span key={index}>
              {item.name} x {item.quantity}
              {index < order.items.length - 1 && <span className='mx-1'>|</span>}
            </span>
          ))}
        </p>
        </div>
          <p className='text-base font-semibold'>Rs. {order.amount}</p>
          <p className='text-base'>Items: {order.items.length}</p>
          <p className='flex items-center text-gray-500 gap-1 text-sm'>
            <span className=''>&#x25cf; </span>  {order.status}
          </p>
      <button onClick={fetchorders} className='ml-4 px-4 py-2 bg-orange-400 text-white text-sm font-semibold rounded-lg hover:bg-orange-500'>
        Track Order
      </button>
    </div>
  ))}
</div>}
    </div>
  )
}

export default Myorders
