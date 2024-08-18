import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios'
import { useContext } from 'react';
import { StoreContext } from '../context/contextStore';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'

const Signup = ({setShowSignup}) => {
    const navigate = useNavigate();
 const {url, token, setToken} = useContext(StoreContext);
  const [curState, setCurState] = useState("Signup");
  const [userData, setUserData] = useState({
    name: " ",
    email:" ",
    password: " "
  });
  const onchangeHandler = (event)=>{
     const name = event.target.name;
     const value = event.target.value;

     setUserData(prevData => ({...prevData, [name]:value}));
  }
  
  const onSignUpHandler = async (e)=>{
             e.preventDefault();
        let newUrl = url;
        if(curState === "Signup"){
            newUrl = newUrl + "/api/user/register";
        }else{
            newUrl = newUrl + "/api/user/login"
        }
    const response =  await axios.post(newUrl, userData);
       if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowSignup(false);
        toast.success(response.data.message);
       }else{
        toast.error(response.data.message);
       }

  }

    return (
        <div className={`w-[20rem] absolute top-[5rem] right-[23rem] z-40 max-w-md p-2 pb-2 px-3 space-y-1 bg-white/85 shadow-lg rounded-lg ${curState === "Login"? "top-[7.5rem]" : ""}`}>
            <div className='flex items-center justify-end pr-2  rounded-full '>
            <img onClick={()=>setShowSignup(false)} className='bg-white shadow-sm shadow-black/40 rounded-full p-1 pt-[0.25rem] hover:bg-orange-300' src={assets.cross_icon} width={20} />
            </div>
            <h2 className="text-xl font-bold text-center text-gray-800">{curState}</h2>
            <form onSubmit={onSignUpHandler} method='post' className="space-y-4">
               {curState === 'Login'? <></> : (
                 <div className="space-y-1">
                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                     name
                 </label>
                 <input
                     onChange={onchangeHandler}
                     value={userData.name}
                     type="text"
                     id="name"
                     name="name"
                     className="block w-full px-4 py-1 mt-1 text-gray-900 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
                     placeholder="Enter your username"
                 />
             </div>
               )}
                <div className="space-y-1">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        onChange={onchangeHandler}
                        value={userData.email}
                        type="email"
                        id="email"
                        name="email"
                        className="block w-full px-4 py-1 mt-1 text-gray-900 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        onChange={onchangeHandler}
                        value={userData.password}
                        type="password"
                        id="password"
                        name="password"
                        className="block w-full px-4 py-1 mt-1 text-gray-900 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
                        placeholder="Enter your password"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2  font-bold text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:outline-none  "
                >
                {curState === "Signup" ? "create Account" : "login"}
                </button>
            </form>
            {curState==="Signup"? <p className="text-sm text-center pt-3 text-gray-600">
                 Already have an account? <span className='text-orange-400  underline underline-offset-2 cursor-pointer' onClick={()=> setCurState('Login')}>Click here</span>
            </p> :<p className="text-sm text-center text-gray-600">
                Create a new account? <span className='text-orange-400  underline underline-offset-2 cursor-pointer' onClick={()=> setCurState('Signup')} >Click here</span>
            </p> }
             
            
        </div>
    );
};

export default Signup;
