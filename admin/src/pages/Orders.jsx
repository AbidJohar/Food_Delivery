import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import parcel_icon from '../assets/parcel_icon.png'
const Orders = ({url}) => {

   const [orders, setOrders] = useState([]);


  const fetchAllOrders = async ()=>{

     try {
      const response =  await axios.get(url+"/api/order/list");
       if(response.data.success){
        setOrders(response.data.data);
        console.log(response.data.data);
        
       }

     } catch (error) {
      console.log("Error", error);
      toast.error("Error");
     }
  }
      // status handler function
      const statusHandler = async (event,orderId)=>{
          try {
           const response = await axios.post(url+"/api/order/status",{orderId, status:event.target.value});
             if(response.data.success){
              await fetchAllOrders();
            } else{
               console.log("Error");

             }

          } catch (error) {
            console.log("Error from statusHandler:",error);
            
          }
      }

   useEffect(()=>{
      fetchAllOrders();
   },[])

  return (
    <div className='bg-white w-[80%] px-4 py-2'>
    <h2 className='text-2xl font-poppins'>Order List</h2>
    <div className='flex flex-col mt-4 space-y-4  overflow-y-scroll h-[68vh]'>
{orders.map((order, index) => (
 <div key={index} className='flex items-center bg-gray-100 justify-around px-1 py-4 border-2 border-black rounded-lg'>
   <img src={parcel_icon} width={40} className='mr-4' />
   <div className='w-[30%]'>
     <p className='text-sm flex items-center flex-wrap'>
       {order.items.map((item, index) => (
         <span key={index}>
           {item.name} x {item.quantity}
           {index < order.items.length - 1 && <span className='mx-1'>|</span>}
         </span>
       ))}
     </p>
     <div className='addressDetail flex flex-col mt-3'>
         <p className='text-gray-500'><span className='font-semibold text-black'>Name: </span>{order.address.firstName} {order.address.lastName}</p>
         <p className='text-gray-500'><span className='font-semibold text-black'>Country: </span> {order.address.country}</p>
         <p className='text-gray-500'><span className='font-semibold text-black'>State: </span> {order.address.state}</p>
         <p className='text-gray-500'><span className='font-semibold text-black'>City: </span>{order.address.city}</p>
         <p className='text-gray-500'><span className='font-semibold text-black'>Street: </span> {order.address.street}</p>
         <p className='text-gray-500'><span className='font-semibold text-black'>Zipcode:</span> {order.address.zipcode}</p>
         <p className='text-gray-500'><span className='font-semibold text-black'>Contact:</span> {order.address.phone}</p>
     </div>
     </div>
       <p className='text-base font-semibold'>Rs.{order.amount}</p>
       <p className='text-base'>Items: {order.items.length}</p>
   <select onChange={(event)=>statusHandler(event, order._id)} value={order.status} className='ml-4 px-4 py-2 bg-orange-400 text-sm rounded-sm font-semibold '>
     <option className='bg-white ' value="Food Processing">food Processing</option>
     <option className='bg-white ' value="Out for Delivery">out for Delivery</option>
     <option className='bg-white' value="Food Deliverd">food Delivered</option>
   </select>
 </div>
))}
</div>
 </div>
  )
}

export default Orders
