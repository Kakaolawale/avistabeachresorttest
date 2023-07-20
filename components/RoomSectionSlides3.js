import { useState, useEffect } from 'react';
import Link from "next/link"


const RoomSectionSlides3 = () => {
  const rooms = [
    {
      name: 'Drupe Shell',
      description: 'It comes with complimentary breakfast for 2, complimentary wine, private balcony facing the ocean and access to all beach facilities.',
      image: '/images/avistabeach100k1.jpg',
      price: 'N100,000',
      ratings: 4.1,
    },
    {
      name: 'Drupe Shell',
      description: 'It comes with complimentary breakfast for 2, complimentary wine, private balcony facing the ocean and access to all beach facilities.',
      image: '/images/avistabeach100k2.jpg',
      price: 'N100,000',
      ratings: 4.2,
    },
    {
      name: 'Drupe Shell',
      description: 'It comes with complimentary breakfast for 2, complimentary wine, private balcony facing the ocean and access to all beach facilities.',
      image: '/images/avistabeach100k3.jpg',
      price: 'N100,000',
      ratings: 4.3,
    },
    {
      name: 'Abalone Shell',
      description: 'It comes with complimentary breakfast for 2, complimentary wine, private balcony facing the ocean and access to all beach facilities.',
      image: '/images/avistabeach100k4.jpg',
      price: 'N100,000',
      ratings: 4.4,
    },
    {
      name: 'Abalone Shell',
      description: 'It comes with complimentary breakfast for 2, complimentary wine, private balcony facing the ocean and access to all beach facilities.',
      image: '/images/avistabeach100k5.jpg',
      price: 'N100,000',
      ratings: 4.5,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3000); // Change the interval to 3000 milliseconds (3 seconds)

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === rooms.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="relative mt-10 mx-2 mb-4 rounded-3xl font-bold text-avista3">
      <div className='text-center rounded-3xl bg-avista2/50 backdrop-blur-xl mx-20 font-extrabold tracking-tighter text-4xl'>
        <h1>3 Units Of N100,000 ROOMS</h1>
      </div>

      <div className="mt-8 mx-4">
        <img
          className="object-cover w-full h-96 rounded-lg"
          src={rooms[currentSlide].image}
          alt={rooms[currentSlide].name}
        />
      </div>

      <div className="mt-4 mx-4">
        <h3 className="text-lg font-lg">{rooms[currentSlide].name}</h3>
        <p className="mt-1 text-avista pb-4">{rooms[currentSlide].description}</p>
        <p className="text-lg font-bold mb-2">{rooms[currentSlide].price}</p>
        <p className="text-lg mb-4">Ratings: {rooms[currentSlide].ratings}</p>
        
      </div>
    </div>
  );
};

export default RoomSectionSlides3;