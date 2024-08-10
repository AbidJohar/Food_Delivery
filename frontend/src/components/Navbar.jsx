import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/contextStore';

const Navbar = ({setShowSignup}) => {
    const [menu, setMenu] = useState({name:"home",url:'/'});
    const {getTotalCartAmount} = useContext(StoreContext);

    const navLinks = [
        {
            name:"home",
            url: '/'
        }, 
        {
            name:"menu",
            url: '#menu'
        }, 
        {
            name:"mobile-app",
            url: '#downloadapp'
        }, 
        {
            name:"contact-Us",
            url: '#contact'
        }, 
         ];

    return (
        <div className='w-full px-16 py-3 flex items-center justify-between sticky top-0 bg-white shadow-md z-50'>
          <Link to='/'>  <img src={assets.logo} alt="logo" width={120} /></Link>
            <div>
                <ul className="flex items-center gap-4">
                {navLinks.map((navlink, index) => (
                        <a
                            href={navlink.url}
                            key={index}
                            onClick={() => setMenu(navlink)}
                            className={`scroll-smooth  cursor-pointer font-poppins font-light ${menu.name === navlink.name ? 'underline underline-offset-4' : ''}`}
                        >
                            {navlink.name}
                        </a>
                    ))}
                </ul>
            </div>
            <div className='flex items-center gap-3'>
                <img src={assets.search_icon} alt="Search Icon" width={20} />
                <div className='relative flex items-center gap-3'>
                    <Link to={'/cart'}>
                    <img src={assets.basket_icon} alt="Basket Icon" width={20} />
                    </Link>
                    {getTotalCartAmount() !==0 ? 
                    <span className='absolute -top-1 -right-1 w-[0.4rem] h-[0.4rem] rounded-full bg-orange-600'></span> : " "
                         }
                </div>
                <div className=''>
                    <button onClick={()=>setShowSignup(true)} className='font-poppins px-4 py-1 border-[1px] border-black rounded-full hover:border-[1px] hover:border-transparent hover:shadow-sm hover:shadow-black/80 hover:transition-all hover:bg-orange-500'>
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
