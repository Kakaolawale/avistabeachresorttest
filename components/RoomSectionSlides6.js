import { useState, useEffect } from 'react';



const RoomSectionSlides5 = () => {
  const rooms = [
    {
      name: 'Cowry Shell',
      description: 'For a family of 5 to 8 adults. It comes with its private compound, private car park, large sitting room with a private pool inside, jacuzzi, complimentary breakfast for 6 and sea view balcony.',
      image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1701088454/WhatsApp_Image_2023-11-25_at_06.39.10_7_ma4l49.jpg',
      price: 'N400,000',
      ratings: 4.1,
    },
    {
      name: 'Cowry Shell',
      description: 'For a family of 5 to 8 adults. It comes with its private compound, private car park, large sitting room with a private pool inside, jacuzzi, complimentary breakfast for 6 and sea view balcony.',
      image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1701088454/WhatsApp_Image_2023-11-25_at_06.39.10_3_uodcas.jpg',
      price: 'N400,000',
      ratings: 4.2,
    },
    {
      name: 'Cowry Shell',
      description: 'For a family of 5 to 8 adults. It comes with its private compound, private car park, large sitting room with a private pool inside, jacuzzi, complimentary breakfast for 6 and sea view balcony.',
      image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1701088451/WhatsApp_Image_2023-11-25_at_06.39.10_9_d6qvkc.jpg',
      price: 'N400,000',
      ratings: 4.3,
    },
    {
      name: 'Cowry Shell',
      description: 'For a family of 5 to 8 adults. It comes with its private compound, private car park, large sitting room with a private pool inside, jacuzzi, complimentary breakfast for 6 and sea view balcony.',
      image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1701088454/WhatsApp_Image_2023-11-25_at_06.39.10_4_takiz6.jpg',
      price: 'N400,000',
      ratings: 4.4,
    },
    {
      name: 'Cowry Shell',
      description: 'For a family of 5 to 8 adults. It comes with its private compound, private car park, large sitting room with a private pool inside, jacuzzi, complimentary breakfast for 6 and sea view balcony.',
      image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1701088454/WhatsApp_Image_2023-11-25_at_06.39.10_8_xfyui0.jpg',
      price: 'N400,000',
      ratings: 4.4,
    },
    {
        name: 'Cowry Shell',
        description: 'For a family of 5 to 8 adults. It comes with its private compound, private car park, large sitting room with a private pool inside, jacuzzi, complimentary breakfast for 6 and sea view balcony.',
        image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1701088443/WhatsApp_Image_2023-11-25_at_06.39.10_25_souocu.jpg',
        price: 'N400,000',
        ratings: 4.1,
      },
      {
        name: 'Cowry Shell',
        description: 'For a family of 5 to 8 adults. It comes with its private compound, private car park, large sitting room with a private pool inside, jacuzzi, complimentary breakfast for 6 and sea view balcony.',
        image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1701088453/WhatsApp_Image_2023-11-25_at_06.39.10_gisdsf.jpg',
        price: 'N400,000',
        ratings: 4.2,
      },
      {
        name: 'Cowry Shell',
        description: 'For a family of 5 to 8 adults. It comes with its private compound, private car park, large sitting room with a private pool inside, jacuzzi, complimentary breakfast for 6 and sea view balcony.',
        image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1701088447/WhatsApp_Image_2023-11-25_at_06.39.10_20_oyqlmg.jpg',
        price: 'N400,000',
        ratings: 4.3,
      },
      {
        name: 'Cowry Shell',
        description: 'For a family of 5 to 8 adults. It comes with its private compound, private car park, large sitting room with a private pool inside, jacuzzi, complimentary breakfast for 6 and sea view balcony.',
        image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1701088449/WhatsApp_Image_2023-11-25_at_06.39.10_17_u9w9r8.jpg',
        price: 'N400,000',
        ratings: 4.4,
      },
      {
        name: 'Cowry Shell',
        description: 'For a family of 5 to 8 adults. It comes with its private compound, private car park, large sitting room with a private pool inside, jacuzzi, complimentary breakfast for 6 and sea view balcony.',
        image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1701088448/WhatsApp_Image_2023-11-25_at_06.39.10_10_k3nmxp.jpg',
        price: 'N400,000',
        ratings: 4.4,
      },
      {
        name: 'Cowry Shell',
        description: 'For a family of 5 to 8 adults. It comes with its private compound, private car park, large sitting room with a private pool inside, jacuzzi, complimentary breakfast for 6 and sea view balcony.',
        image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1701088447/WhatsApp_Image_2023-11-25_at_06.39.10_5_ne13wk.jpg',
        price: 'N400,000',
        ratings: 4.4,
      },
      {
        name: 'Cowry Shell',
        description: 'For a family of 5 to 8 adults. It comes with its private compound, private car park, large sitting room with a private pool inside, jacuzzi, complimentary breakfast for 6 and sea view balcony.',
        image: 'https://res.cloudinary.com/dtajzdkii/image/upload/v1701088443/WhatsApp_Image_2023-11-25_at_06.39.10_26_hxfzyn.jpg',
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