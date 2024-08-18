import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/contextStore';
import axios from 'axios';

const Verify = () => {

    const [searchParams, setSearchParams] = useSearchParams();
       const success = searchParams.get("success");
       const orderId = searchParams.get("orderId");
       const {url} = useContext(StoreContext);
       const navigate = useNavigate();

       const verifyPayment = async ()=>{
         const response =  await axios.post(url+"/api/order/verify",{success,orderId});
         if(response.data.success){
              navigate('/myorders');
         }
         else{
            navigate('/');
         }
       }
  useEffect(()=>{

        verifyPayment();
  },[])
       
  return (
    <div className='h-96 flex items-center justify-center'>
  <div className='w-32 h-32 border-4 border-orange-500 border-t-transparent rounded-full animate-spin'></div>
</div>
  )

}

export default Verify
