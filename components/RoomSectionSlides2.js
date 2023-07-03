import { useState, useEffect } from 'react';
import Link from "next/link"


const RoomSectionSlides2 = () => {
  const rooms = [
    {
      name: 'Tulip Shell',
      description: 'It comes with complimentary breakfast for 2, a walkway facing the ocean and access to all beach facilities.',
      image: '/images/avistabeach80k1.jpg',
      price: 'N80,000',
      ratings: 4.1,
    },
    {
      name: 'Tulip Shell',
      description: 'It comes with complimentary breakfast for 2, a walkway facing the ocean and access to all beach facilities.',
      image: '/images/avistabeach80k2.jpg',
      price: 'N80,000',
      ratings: 4.2,
    },
    {
      name: 'Olivia Shell',
      description: 'It comes with complimentary breakfast for 2, a walkway facing the ocean and access to all beach facilities.',
      image: '/images/avistabeach80k3.jpg',
      price: 'N80,000',
      ratings: 4.3,
    },
    {
      name: 'Olivia Shell',
      description: 'It comes with complimentary breakfast for 2, a walkway facing the ocean and access to all beach facilities.',
      image: '/images/avistabeach80k4.jpg',
      price: 'N80,000',
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
      <div className='text-center  rounded-3xl bg-avista2/50 backdrop-blur-xl mx-20 font-extrabold tracking-tighter text-4xl'>
        <h1>2 Units Of N80,000 ROOMS</h1>
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

export default RoomSectionSlides2;