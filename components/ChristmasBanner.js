// ChristmasBanner.js

import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  'https://res.cloudinary.com/dtajzdkii/image/upload/v1702764379/Premium_Photo___Woman_holding_small_bauble_in_hand_i9vqmv.jpg',
  'https://res.cloudinary.com/dtajzdkii/image/upload/v1702804979/Christmas_Wreath_Ideas_lfqiwb.jpg',
  'https://res.cloudinary.com/dtajzdkii/image/upload/v1702804978/%D0%92%D0%BE%D0%BB%D1%88%D0%B5%D0%B1%D1%81%D1%82%D0%B2%D0%BE_%D0%BD%D0%B0_%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%B3%D0%BE%D0%B4__%D0%B8%D0%B4%D0%B5%D0%B8_%D1%83%D0%BA%D1%80%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D1%8F_%D0%B4%D0%BE%D0%BC%D0%B0___%D0%96%D1%83%D1%80%D0%BD%D0%B0%D0%BB_%D0%AF%D1%80%D0%BC%D0%B0%D1%80%D0%BA%D0%B8_%D0%9C%D0%B0%D1%81%D1%82%D0%B5%D1%80%D0%BE%D0%B2_s8zv1n.jpg',
 
];

const textVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 1.5, ease: 'easeInOut' } },
};

const ChristmasBanner = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the speed as needed
    fade: true, // Use fade for smoother transitions
    cssEase: 'linear', // Use linear for continuous sliding
  };

  return (
    <div className="relative max-w-screen-md mt-8 mb-8  px-2 overflow-hidden rounded-3xl">
      <Slider {...sliderSettings} className="absolute top-0 left-0 w-full h-1/3">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img src={image} alt={`Slide ${index}`} className="w-full h-full rounded-3xl" />
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-avista2 to-transparent" />
          </div>
        ))}
      </Slider>

      <motion.div
        initial="initial"
        animate="animate"
        variants={textVariants}
        className="absolute top-1/2 text-avista3 px-4 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-full"
      >
        <div className="px-2 mx-4">
          <h1 className="text-7xl font-bold text-center mb-4">Season’s Greetings</h1>
          <p className="text-2xl mb-4">Here’s to a cheerful Christmas and a fresh 2024.</p>
          <p className="text-lg">Best wishes. Avista Beach Resort.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ChristmasBanner;
