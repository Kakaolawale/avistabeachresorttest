import React, { useState } from 'react';
import { motion } from "framer-motion";

const gallery = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const images = [
    '/images/avistaroom1.jpg',
    '/images/avistaroom2.jpg',
    '/images/avistaroom3.jpg',
    '/images/avistaroom4.jpg',
    '/images/avistaroom5.jpg',
    '/images/avistaroom6.jpg',
    '/images/avistaroom7.jpg',
    '/images/avistaroom8.jpg',
    '/images/avistaroom9.jpg',
    '/images/avistaroom10.jpg',
    '/images/avistaroom11.jpg',
    '/images/avistaroom12.jpg',
    '/images/avistaroom13.jpg',
    '/images/avistaroom14.jpg',
    
    '/images/avistahero1.jpg',
    '/images/avistahero2.jpg',
    '/images/avistahero3.jpg',
    '/images/avistadaypass1.jpg',
    '/images/avistahero5.jpg',
    '/images/avistahero6.jpg',
    '/images/avistahero7.jpg',
    '/images/avistahero9.jpg',
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

