/*import React from 'react'
import Image from 'next/image'
import SocialMediaSection from './SocialMediaSection'
import ContactSection from './ContactSection'
const Footer = () => {
  return (
    <div>
      
<footer className="p-4 w-full bg-white rounded-lg shadow md:px-6 md:py-8 bg-avista5">
    <div className="sm:flex text-center sm:items-center sm:justify-center md:flex md:justify-evenly">
    <span className="self-center pb-4 text-sm font-semibold whitespace-nowrap text-avista2">Welcome to <span className='font-bold'>Avista Beach Resort</span>...beyond the SEA.</span>
    </div>
    <div className="sm:flex text-center sm:items-center sm:justify-center md:flex md:justify-evenly">
     <ContactSection />
   
    </div>

    <hr className="my-6 border-avista2 sm:mx-auto dark:border-avista2 lg:my-8" />
    <span className="block pb-4 text-center text-sm text-gray-500 sm:text-center dark:text-gray-400">
      <span className='font-bold'>2023©</span> Avista Beach Resort™
      All Rights Reserved.
      <br />
    <span className='font-bold text-sm'><a href="https://space1unicorn.com" className="hover:underline text-xs">Site Developed By Space1 Technology Unicorn.</a></span></span>
    <div>
      <SocialMediaSection className="self-center text-sm font-semibold whitespace-nowrap text-avista2" />
    </div>
</footer>

    </div>
  )
}

export default Footer */

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';



const Footer = () => {
  return (
    
    <footer className="dark:bg-black bg-avista5 text-avista dark:text-white py-10 flex-shrink-0">
      
      <div className="container mx-auto px-10 flex flex-col md:flex-row md:justify-between md:items-center items-center">
       
        <div className="mx-8 px-10 flex flex-col space-y-4 mb-6 md:mb-0 text-center"> 
          <p className='text-avista2 mx-8 font-bold'>Get in Touch</p>
          <div className="text-avista2 flex justify-between space-x-4">
    <FaFacebook className="text-2xl" />
    <FaTwitter className="text-2xl" />
    <FaInstagram className="text-2xl" />
    <FaLinkedin className="text-2xl" />
  </div>
          
          <p className='mx-8'>hi@theovia.com</p>
        </div>
        
        
        <div className="mx-8 px-10 flex my-4 flex-col  md:w-1/2 text-center"> {/* This is the second div to wrapp the Learn More */}
          <p className='text-orange-600 mx-8 font-bold'>Learn More</p>
          <a className='mx-8' href="#">About</a>
          <a className='mx-8' href="#">Experiences</a>
          <a className='mx-8' href="#">Kitchen</a>
          <a className='mx-8' href="#">Art Gallery</a>
          <a className='mx-8' href="#">Team</a>
          <a className='mx-8' href="#">Events Spot</a>
          <a className='mx-8' href="#">Gallery</a>
          <a className='mx-8' href="#">Daypass</a>
          <a className='mx-8' href="#">Overnight</a>
          <a className='mx-8' href="#">BeachHut</a>
        </div>
        
    
        <div className="mx-8 px-10 flex my-4 flex-col  md:w-1/2 text-center">
        <p className='text-avista2 mx-8 font-bold'>Newsletter</p>
          <p className="mx-8 mb-4">Subscribe to our newsletter to get updates on Avista stories and services weekly.</p>
          <form className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-1">
            <input
              type="email"
              placeholder="Enter your email address"
              className="mx-8 border border-adainyellow px-2 py-1 rounded w-full md:w-auto"
            />
            <button
              type="submit"
              className="mx-8 bg-avista2 font-bold text-estatelinkblack px-2 py-2 rounded"
            >
              Subscribe
            </button>
          </form>
          <h2 className='text-center text-avista2 mt-4'>Website Developed by <span className='font-bold'>© Space1 Tech</span></h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

