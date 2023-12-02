import { useState, useEffect } from 'react';
import Link from "next/link"


const RoomSectionSlides5 = () => {
  const rooms = [
    {
      name: 'Turbo Shell',
      description: 'It comes with private swimming pool, private born fire, private seating area, ocean view room(upstairs), breakfast for 2, a bottle of red wine on arrival.',
      image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1701541051/WhatsApp_Image_2023-12-02_at_10.12.17_2_a3eohx.jpg',
      price: 'N200,000',
      ratings: 4.1,
    },
    {
      name: 'Turbo Shell',
      description: 'It comes with private swimming pool, private born fire, private seating area, ocean view room(upstairs), breakfast for 2, a bottle of red wine on arrival.',
      image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1701541050/WhatsApp_Image_2023-12-02_at_10.12.17_yblmt4.jpg',
      price: 'N200,000',
      ratings: 4.2,
    },
    {
      name: 'Turbo Shell',
      description: 'It comes with private swimming pool, private born fire, private seating area, ocean view room(upstairs), breakfast for 2, a bottle of red wine on arrival.',
      image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1701541050/WhatsApp_Image_2023-12-02_at_10.12.17_3_b384vw.jpg',
      price: 'N200,000',
      ratings: 4.3,
    },
    {
      name: 'Turbo Shell',
      description: 'It comes with private swimming pool, private born fire, private seating area, ocean view room(upstairs), breakfast for 2, a bottle of red wine on arrival.',
      image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1701541049/WhatsApp_Image_2023-12-02_at_10.14.17_fngbrz.jpg',
      price: 'N200,000',
      ratings: 4.4,
    },
    {
      name: 'Turbo Shell',
      description: 'It comes with private swimming pool, private born fire, private seating area, ocean view room(upstairs), breakfast for 2, a bottle of red wine on arrival.',
      image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1701541049/WhatsApp_Image_2023-12-02_at_10.14.17_1_worsxl.jpg',
      price: 'N200,000',
      ratings: 4.4,
    },
    {
        name: 'Scallop Shell',
        description: 'It comes with private swimming pool, private seating area, ocean view room(upstairs), breakfast for 2, a bottle of red wine on arrival.',
        image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1701541496/WhatsApp_Image_2023-12-02_at_10.22.49_agpyyd.jpg',
        price: 'N200,000',
        ratings: 4.1,
      },
      {
        name: 'Scallop Shell',
        description: 'It comes with private swimming pool, private seating area, ocean view room(upstairs), breakfast for 2, a bottle of red wine on arrival.',
        image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1701541495/WhatsApp_Image_2023-12-02_at_10.22.49_2_pw9yp4.jpg',
        price: 'N200,000',
        ratings: 4.2,
      },
      {
        name: 'Scallop Shell',
        description: 'It comes with private swimming pool, private seating area, ocean view room(upstairs), breakfast for 2, a bottle of red wine on arrival.',
        image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1701541495/WhatsApp_Image_2023-12-02_at_10.22.49_3_doicvl.jpg',
        price: 'N200,000',
        ratings: 4.3,
      },
      {
        name: 'Scallop Shell',
        description: 'It comes with Jacuzzi, private swimming pool, private born fire, private seating area, ocean view room(upstairs), breakfast for 2, a bottle of red wine on arrival.',
        image: '/images/scallop4.jpg',
        price: 'N200,000',
        ratings: 4.4,
      },
      {
        name: 'Cup Shell',
        description: 'It comes with private swimming pool, private seating area, ocean view room(upstairs), breakfast for 2, a bottle of red wine on arrival.',
        image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1701541495/WhatsApp_Image_2023-12-02_at_10.22.49_1_gne3wm.jpg',
        price: 'N200,000',
        ratings: 4.3,
      },
      {
        name: 'Cup Shell',
        description: 'It comes with private swimming pool, private seating area, ocean view room(upstairs), breakfast for 2, a bottle of red wine on arrival.',
        image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1701541798/WhatsApp_Image_2023-12-02_at_10.27.45_5_sqzhdk.jpg',
        price: 'N200,000',
        ratings: 4.4,
      },
      {
        name: 'Cup Shell',
        description: 'It comes with private swimming pool, private seating area, ocean view room(upstairs), breakfast for 2, a bottle of red wine on arrival.',
        image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1701541797/WhatsApp_Image_2023-12-02_at_10.27.45_4_lbknzx.jpg',
        price: 'N200,000',
        ratings: 4.3,
      },
      {
        name: 'Cup Shell',
        description: 'It comes with private swimming pool, private seating area, ocean view room(upstairs), breakfast for 2, a bottle of red wine on arrival.',
        image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1701541794/WhatsApp_Image_2023-12-02_at_10.27.45_iqomkk.jpg',
        price: 'N200,000',
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
        <h1>3 Unit Of N200,000 ROOM</h1>
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