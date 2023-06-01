import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import Link from "next/link"


const RoomDetails = () => {
  const rooms = [
    {
      name: 'Beautiful Booking Reception',
      description: 'Spacious suite with a stunning ocean view.',
      image: '/images/avistapics7.jpg',
    },
    {
      name: 'Executive Villa',
      description: 'Cozy bungalow located right on the beach.',
      image: '/images/avistapics3.jpg',
    },
    {
      name: 'Beachfront Bungalow',
      description: 'Luxurious villa surrounded by lush palm trees.',
      image: '/images/avistapics5.jpg',
    },
    {
      name: 'Ocean View Suite',
      description: 'Spacious suite with a stunning ocean view.',
      image: '/images/avistapics4.jpg',
    },
    {
      name: 'Ocean Villa Presidential Suite',
      description: 'Spacious suite with a stunning ocean view.',
      image: '/images/avistapics9.jpg',
    },
    {
      name: 'Ocean View Huts',
      description: 'Spacious suite with a stunning ocean view.',
      image: '/images/avistanow6.jpg',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? rooms.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === rooms.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="relative mt-4 mx-2 mb-4 rounded-3xl font-bold text-avista3">
      <div className='text-center font-extrabold tracking-tighter text-4xl'>
        <h1>
          ROOMS/HUTS FEATURES PREVIEW
        </h1>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="absolute inset-y-0 left-0 flex items-center justify-center w-12 h-12 text-white bg-gray-800 bg-opacity-50 rounded-full"
          onClick={goToPreviousSlide}
        >
          <ChevronLeftIcon className="w-6 h-6 mt-60" />
        </button>
        <button
          className="absolute inset-y-0 right-0 flex items-center justify-center w-12 h-12 text-white bg-gray-800 bg-opacity-50 rounded-full"
          onClick={goToNextSlide}
        >
          <ChevronRightIcon className="w-6 h-6 mt-60" />
        </button>
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
        <p className="mt-1 text-avista2 pb-4">{rooms[currentSlide].description}</p>
        <Link href="/navlinks/overnightbookings">
        <button className='bg-avista2 text-avista3 m-2 p-4 rounded-3xl'>
          BOOK ROOMS
        </button>
        </Link>
      </div>
    </div>
  );
};

export default RoomDetails;
