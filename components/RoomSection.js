import React from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';

const rooms = [
  {
    name: 'Deluxe Room',
    description: 'Our 6 units of spacious and elegant deluxe rooms offer a comfortable and luxurious stay featuring a separate living area with 4 units of rooms with stunning sea view and 2 units without sea view.',
    imageSrc: '/images/avistaroom8.jpg',
    price: 'N60,000 Per Night',
    rating: 4.5,
  },
  {
    name: 'Executive Suite',
    description: 'Experience the ultimate in luxury with our Executive Suites, featuring a separate living area without sea view.',
    imageSrc: '/images/avistaroom14.jpg',
    price: 'N80,000 Per Night',
    rating: 5,
  },
  {
    name: 'Premium Room',
    description: 'Our Premium Rooms offer 3 units of extra level of comfort and sophistication, with upgraded amenities, stunning decor wherein 2 units comes with sea view and balcony and 1 unit without sea view.',
    imageSrc: '/images/avistaroom10.jpg',
    price: 'N100,000 Per Night',
    rating: 4.7,
  },
  {
    name: 'Presidential Suite',
    description: 'Relax in style with our 1 unit of Presidential Suite, featuring a comfortable living area and modern amenities, sea view, private cabana and private pool.',
    imageSrc: '/images/avistaroom11.jpg',
    price: 'N150,000 Per Night',
    rating: 4.2,
  },
  {
    name: 'Avista Beach Huts',
    description: 'Relax in style with any of our 8 unit of beach huts, featuring a comfortable private toilet, bathroom with sea view.',
    imageSrc: '/images/avistaroom11.jpg',
    price: 'N25,000 From 7AM-7PM & N25,000 From 7PM-7AM',
    rating: 4.2,
  },
  
];

const RoomCard = ({ name, description, imageSrc, price, rating }) => {
  return (
    <div className="bg-avista2 rounded-lg text-avista3 shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={imageSrc}
          alt={name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500 mt-2">{description}</p>
        <div className="flex items-center mt-4">
          <span className="text-gray-800 font-bold text-lg">{price}</span>
          <div className="flex items-center ml-auto">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className={`h-5 w-5 text-yellow-500 ${i >= rating ? 'opacity-30' : ''}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const RoomSection = () => {
  return (
    <div className="bg-gray-100 py-12 px-10 lg:px-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-avista3 text-center">OVERNIGHT BOOKINGS AVISTA ROOMS &amp; SUITES</h2>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-2 mt-6">
          {rooms.map((room) => (
            <div key={room.name} className="col-span-1">
              <RoomCard
                name={room.name}
                description={room.description}
                imageSrc={room.imageSrc}
                price={room.price}
                rating={room.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomSection;
