import React from 'react'
import { assets } from '../assets/assets'

const DownloadApp = () => {
  return (
    <div id='downloadapp' className='flex items-center justify-center mt-auto pt-20  flex-col'>
        <h1 className='font-bold text-3xl font-poppins'>For better Experience Download </h1>
        <h1 className='font-bold text-3xl font-poppins text-orange-600'>   Tomato App  </h1>

        <div className='flex items-center justify-center gap-5 mt-3 mb-16'>
           <img className='cursor-pointer hover:scale-105 transition-all duration-500' src={assets.play_store}  />
           <img  className='cursor-pointer hover:scale-105 transition-all duration-500' src={assets.app_store}  />
        </div>
    </div>
  )
}

export default DownloadApp
