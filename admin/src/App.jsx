import React from 'react'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import {Routes,Route} from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Orders from './pages/Orders'

function App() {
   const url = 'http://localhost:4000';

  return (
    <div>
      <ToastContainer />
     <Navbar />
     <div className='flex h-[87vh]'>
     <Slider />
     <Routes>
       <Route path='/add' element={<Add url={url}/>} />
       <Route path='/order' element={<Orders url={url}/>}/>
       <Route path='/list' element={<List url={url}/>}/>

     </Routes>
     </div>
     </div>
  )
}

export default App
