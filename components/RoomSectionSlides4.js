import { useState, useEffect } from 'react';
import Link from "next/link"


const RoomSectionSlides4 = () => {
  const rooms = [
    {
      name: 'Jingle Shell',
      description: 'It comes with Jacuzzi, private balcony, breakfast for 2, large sitting room, a bottle of red wine on arrival.',
      image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1700430334/new4_gam2ds.jpg',
      price: 'N250,000',
      ratings: 4.1,
    },
    {
      name: 'Jingle Shell',
      description: 'It comes with Jacuzzi, private balcony, breakfast for 2, large sitting room, a bottle of red wine on arrival.',
      image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1700430331/new2_rvah42.jpg',
      price: 'N250,000',
      ratings: 4.2,
    },
    {
      name: 'Jingle Shell',
      description: 'It comes with Jacuzzi, private balcony, breakfast for 2, large sitting room, a bottle of red wine on arrival.',
      image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1700430330/new5_fyaz8x.jpg',
      price: 'N250,000',
      ratings: 4.3,
    },
    {
      name: 'Jingle Shell',
      description: 'It comes with Jacuzzi, private balcony, breakfast for 2, large sitting room, a bottle of red wine on arrival.',
      image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1700430328/new1_skp5mi.jpg',
      price: 'N250,000',
      ratings: 4.4,
    },
    {
      name: 'Jingle Shell',
      description: 'It comes with Jacuzzi, private balcony, breakfast for 2, large sitting room, a bottle of red wine on arrival.',
      image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1700430328/new3_qtyy4s.jpg',
      price: 'N250,000',
      ratings: 4.4,
    },
    {
      name: 'Jingle Shell',
      description: 'It comes with Jacuzzi, private balcony, breakfast for 2, large sitting room, a bottle of red wine on arrival.',
      image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1700430258/new7_raprjn.jpg',
      price: 'N250,000',
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
        <h1>1 Unit Of N250,000 ROOM</h1>
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

export default RoomSectionSlides4;