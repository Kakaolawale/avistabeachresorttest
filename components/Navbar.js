import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('');

  const handleClick = (navItem) => {
    setActiveNavItem(navItem);
    setNavbar(!navbar);
  };

  useEffect(() => {
    let timeoutId;

    if (activeNavItem && navbar) {
      timeoutId = setTimeout(() => {
        setNavbar(false);
      }, 4000); // Set the delay here (in milliseconds)
    }

    return () => clearTimeout(timeoutId);
  }, [activeNavItem, navbar]);

  return (
    <nav className="transition-opacity duration-500 w-full top-0 h-25 shadow-lg fixed lg:mb-8 backdrop-blur bg-avista opacity-100 z-50 hover:bg-avista2">
      <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}>
        {/* Rest of the code */}
        <div className="justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex sm:px-8">
          <div className={`mt-top-adjusted ${navbar ? 'adjust-down' : ''}`}>
            <div className="flex items-center justify-between py-5">
              <a href="/" className="flex items-center">
                <Image src="/images/avistalogoblack.png" width={60} height={50} alt="Avista Beach Resort Logo" />
              </a>
              <div className="md:hidden text-avista3">
                <button className="pt-2 rounded-md outline-none focus:border-avista3 focus:border" onClick={handleClick}>
                  {navbar ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 " viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className={`flex-2 justify-self-center pl-2 ... tracking-tight pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
              <div className="space-x-4 text-lg">
                <ul className="mb-4 mt-2 items-center pr-16 font-medium text-sm... justify-center space-y-8 md:flex md:space-x-4 md:space-y-0">
                  <li className={`text-avista3 hover:text-avista ${activeNavItem === 'home' ? 'active' : ''}`}>
                    <Link href="/" onClick={() => handleClick('home')}>
                      HOME
                    </Link>
                  </li>
                  <li className={`text-avista3 hover:text-avista ${activeNavItem === 'about' ? 'active' : ''}`}>
                    <Link href="/navlinks/about" onClick={() => handleClick('about')}>
                      About
                    </Link>
                  </li>
                  <li className={`text-avista3 hover:text-avista ${activeNavItem === 'experiences' ? 'active' : ''}`}>
                    <Link href="/navlinks/experiences" onClick={() => handleClick('experiences')}>
                      Experiences
                    </Link>
                  </li>
                  
                  <li className={`text-avista3 hover:text-avista ${activeNavItem === 'experiences' ? 'active' : ''}`}>
                    <Link href="/navlinks/kitchen" onClick={() => handleClick('experiences')}>
                     Kitchen
                    </Link>
                  </li>
                  <li className={`text-avista3 hover:text-avista ${activeNavItem === 'experiences' ? 'active' : ''}`}>
                    <Link href="/navlinks/artgallery" onClick={() => handleClick('experiences')}>
                    ArtGalleria
                    </Link>
                  </li>
                  <li className={`text-avista3 hover:text-avista ${activeNavItem === 'eventsspot' ? 'active' : ''}`}>
                    <Link href="/navlinks/eventsspot" onClick={() => handleClick('eventsspot')}>
                      <span className="font-black text-space1-2">Events</span>SPOT
                    </Link>
                  </li>
                  <li className={`text-avista3 hover:text-avista ${activeNavItem === 'gallery' ? 'active' : ''}`}>
                    <Link href="/navlinks/gallery" onClick={() => handleClick('gallery')}>
                      Gallery
                    </Link>
                  </li>
                  
                  <li className={`text-avista3 hover:text-avista ${activeNavItem === 'daypassbookings' ? 'active' : ''}`}>
                    <Link href="/navlinks/daypassbookings" onClick={() => handleClick('daypassbookings')}>
                      Daypass Booking
                    </Link>
                  </li>
                  <li className={`text-avista3 hover:text-avista ${activeNavItem === 'overnightbookings' ? 'active' : ''}`}>
                    <Link href="/navlinks/overnightbookings" onClick={() => handleClick('overnightbookings')}>
                      Overnight Booking
                    </Link>
                  </li>
                  <div className="pr-4 hover:bg-avista/50 rounded-xl h-7 w-18 lg:h-8 lg:w-35 sm:h-8 sm:w-35  shadow-md">
                    <Link href="/navlinks/hutsbookings" className="text-avista3 pr-20 mr-4 text-lg mx-8 lg:my-20" onClick={() =>
                      handleClick('checkout')}>
                      BEACHHUTS<span className="font-bold">Booking</span>
                    </Link>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.main>
    </nav>
  );
}

export default Navbar;

