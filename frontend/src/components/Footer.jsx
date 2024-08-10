import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id='contact' className="bg-gray-800 text-white py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Links Section */}
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Delivery</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Home</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaGithub size={24} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaLinkedin size={24} />
              </a>
            </div>

            <h2 className="text-lg font-bold mb-2 mt-7">Get in touch</h2>
            <div className="flex  flex-col">
                <h1 className='text-gray-500'>+923125459117</h1>
               <h1 className='text-gray-500 ml-1'>abidjohar786@gmail.com</h1>
               
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p> CopyRight 2024  &copy; Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;