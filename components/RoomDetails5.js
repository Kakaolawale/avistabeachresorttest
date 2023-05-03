import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

const RoomDetails5 = () => {
  const rooms = [
    {
      name: 'Ocean View Suite',
      description: 'Spacious suite with a stunning ocean view.',
      image: '/images/avistaroom18.jpg',
    },
    {
      name: 'Beachfront Bungalow',
      description: 'Cozy bungalow located right on the beach.',
      image: '/images/avistaroom8.jpg',
    },
    {
      name: 'Palm Villa',
      description: 'Luxurious villa surrounded by lush palm trees.',
      image: '/images/avistaroom17.jpg',
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
    <div className="relative mx-4 mt-4 mb-4 rounded-3xl text-avista3">
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
        <h3 className="text-lg font-medium">{rooms[currentSlide].name}</h3>
        <p className="mt-1 text-gray-500 pb-4">{rooms[currentSlide].description}</p>
      </div>
    </div>
  );
};

export default RoomDetails5;
