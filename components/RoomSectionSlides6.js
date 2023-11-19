import { useState, useEffect } from 'react';
import Link from "next/link"


const RoomSectionSlides5 = () => {
  const rooms = [
    {
      name: 'Turbo Shell',
      description: 'It comes with Jacuzzi, private swimming pool, private born fire, private seating area, private swimming area, breakfast for 2, a bottle of red wine on arrival with options for all inclussive.',
      image: '/images/turbo1.jpg',
      price: 'N400,000',
      ratings: 4.1,
    },
    {
      name: 'Turbo Shell',
      description: 'It comes with Jacuzzi, private swimming pool, private born fire, private seating area, private swimming area, breakfast for 2, a bottle of red wine on arrival with options for all inclussive.',
      image: '/images/turbo2.jpg',
      price: 'N400,000',
      ratings: 4.2,
    },
    {
      name: 'Turbo Shell',
      description: 'It comes with Jacuzzi, private swimming pool, private born fire, private seating area, private swimming area, breakfast for 2, a bottle of red wine on arrival with options for all inclussive.',
      image: '/images/turbo3.jpg',
      price: 'N400,000',
      ratings: 4.3,
    },
    {
      name: 'Turbo Shell',
      description: 'It comes with Jacuzzi, private swimming pool, private born fire, private seating area, private swimming area, breakfast for 2, a bottle of red wine on arrival with options for all inclussive.',
      image: '/images/turbo8.jpg',
      price: 'N400,000',
      ratings: 4.4,
    },
    {
      name: 'Turbo Shell',
      description: 'It comes with Jacuzzi, private swimming pool, private born fire, private seating area, private swimming area, breakfast for 2, a bottle of red wine on arrival with options for all inclussive.',
      image: '/images/turbo7.jpg',
      price: 'N400,000',
      ratings: 4.4,
    },
    {
        name: 'Scallop Shell',
        description: 'It comes with Jacuzzi, private swimming pool, private born fire, private seating area, ocean view room(upstairs), breakfast for 2, a bottle of red wine on arrival with options for all inclussive.',
        image: '/images/scallop1.jpg',
        price: 'N400,000',
        ratings: 4.1,
      },
      {
        name: 'Scallop Shell',
        description: 'It comes with Jacuzzi, private swimming pool, private born fire, private seating area, ocean view room(upstairs), breakfast for 2, a bottle of red wine on arrival with options for all inclussive.',
        image: '/images/scallop2.jpg',
        price: 'N400,000',
        ratings: 4.2,
      },
      {
        name: 'Scallop Shell',
        description: 'It comes with Jacuzzi, private swimming pool, private born fire, private seating area, ocean view room(upstairs), breakfast for 2, a bottle of red wine on arrival with options for all inclussive.',
        image: '/images/scallop3.jpg',
        price: 'N400,000',
        ratings: 4.3,
      },
      {
        name: 'Scallop Shell',
        description: 'It comes with Jacuzzi, private swimming pool, private born fire, private seating area, ocean view room(upstairs), breakfast for 2, a bottle of red wine on arrival with options for all inclussive.',
        image: '/images/scallop4.jpg',
        price: 'N400,000',
        ratings: 4.4,
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
      <div className='text-center bg-avista2/50 backdrop-blur-xl rounded-3xl mx-20 font-extrabold tracking-tighter text-4xl'>
        <h1>1 Unit Of N400,000 ROOM</h1>
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

export default RoomSectionSlides5;