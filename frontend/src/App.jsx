import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/Cart/Cart'
import Order from './pages/placeOrder/Order'
import Footer from './components/Footer'
import Signup from './components/Signup'
import Verify from './pages/verify/Verify'
import Myorders from './pages/Myorders/Myorders'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const [showSignup, setShowSignup] = useState(false);
  return (
     <>
       <ToastContainer />
     {showSignup? ( 
       <Signup setShowSignup={setShowSignup} />
     ):<></>}
      <Navbar setShowSignup={setShowSignup} />
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path='/verify' element={<Verify/>}/>
          <Route path='/myorders' element={<Myorders/>}/>
          
    
      </Routes>
      <Footer />
      </>
  )
}

export default App
