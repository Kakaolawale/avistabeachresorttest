import React, { useState } from 'react';
import { motion } from "framer-motion";

const gallery = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const images = [
    '/images/avistapics1.jpg',
    '/images/avistapics2.jpg',
    '/images/avistapics3.jpg',
    '/images/avistapics4.jpg',
    '/images/avistapics5.jpg',
    '/images/avistapics6.jpg',
    '/images/avistapics7.jpg',
    '/images/avistapics8.jpg',
    '/images/avistapics9.jpg',
    '/images/avistapics10.jpg',
    '/images/avistapics11.jpg',
    '/images/avistapics12.jpg',
    '/images/avistapics13.jpg',
    '/images/avistapics14.jpg',
    
    '/images/avistapics15.jpg',
    '/images/avistapics16.jpg',
    '/images/avistapics17.jpg',
    '/images/avistapics18.jpg',
    '/images/avistapics19.jpg',
    '/images/avistapics20.jpg',
    '/images/avistapics21.jpg',
    '/images/avistapics22.jpg',
  ];

  const enlargeImage = (image) => {
    setEnlargedImage(image);
  };

  const closeEnlargedImage = () => {
    setEnlargedImage(null);
  };

  return (
    < motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            >
    <div className="mt-20 pt-8 mb-8 bg-gradient-to-br from-avista via-avista2 rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-8">
       {images.map((image) => (
        <img
          src={image}
          alt="Room"
          key={image}
          className="w-full pt-2 pb-4 h-64 object-cover px-4 rounded-xl cursor-pointer"
          onClick={() => enlargeImage(image)}
        />
      ))}
      {enlargedImage && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75">
          <div className="relative">
            <button className="absolute top-0 right-0 p-2" onClick={closeEnlargedImage}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img src={enlargedImage} alt="Enlarged Room" className="w-full h-full object-contain" />
          </div>
        </div>
      )}
    </div>
    
    </motion.main>
  );
};

export default gallery;

