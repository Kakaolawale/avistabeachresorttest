import React from 'react'
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
    <span className='font-bold text-sm'><a href="https://space1tech.business.site" className="hover:underline text-xs">Site Developed By Space1 Technology.</a></span></span>
    <div>
      <SocialMediaSection className="self-center text-sm font-semibold whitespace-nowrap text-avista2" />
    </div>
</footer>

    </div>
  )
}

export default Footer
