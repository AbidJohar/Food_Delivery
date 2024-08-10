import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${assets.header_img})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '75vh',
                display: 'flex',
                alignItems: 'end',
                justifyContent: 'start',
                boxSizing: 'border-box',
                padding: '20px'
            }}
            className='header mt-5 mx-14 my-auto'
        >
            <div className='header-content w-2/3 ml-12   p-6 rounded-lg animate-fadeIn'>
                <h2 className='font-semibold font-poppins text-white text-2xl mb-2'>Order your favourite food here</h2>
                <p className='text-sm font-poppins text-white'>
                    Craving something tasty? You have come to the right place! At FoodieHub, we’ve got all your favorites, from cheesy pizzas to fresh sushi, delivered straight to your door. Ordering is super easy – just a few clicks and you are done. Check out our daily specials and enjoy fast, friendly service. Hungry? Let's eat with FoodieHub!
                </p>
                <button className='px-4 py-2 font-poppins  rounded-full hover:bg-white hover:text-black text-white border-[1px] border-white mt-3'>view menu</button>
            </div>
        </div>
    );
}

export default Header;
