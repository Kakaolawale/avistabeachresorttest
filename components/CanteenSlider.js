import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CanteenSlider = () => {
  const foodItems = [
    {
      id: 1,
      name: 'Pasta Carbonara',
      image: '/images/avistafood1.jpg',
      description: 'Creamy pasta with bacon and parmesan cheese',
      price: 12.99,
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Margherita Pizza',
      image: '/images/avistafood2.jpg',
      description: 'Classic pizza with tomato sauce, mozzarella, and basil',
      price: 9.99,
      rating: 4.2,
    },
    {
      id: 3,
      name: 'Sushi Platter',
      image: '/images/avistafood3.jpg',
      description: 'Assorted sushi rolls and sashimi',
      price: 18.99,
      rating: 4.7,
    },
    {
      id: 4,
      name: 'Sushi Platter',
      image: '/images/avistafood4.jpg',
      description: 'Assorted sushi rolls and sashimi',
      price: 18.99,
      rating: 4.7,
    },
    {
      id: 5,
      name: 'Sushi Platter',
      image: '/images/avistafood5.jpg',
      description: 'Assorted sushi rolls and sashimi',
      price: 18.99,
      rating: 4.7,
    },
    {
      id: 6,
      name: 'Sushi Platter',
      image: '/images/avistafood6.jpg',
      description: 'Assorted sushi rolls and sashimi',
      price: 18.99,
      rating: 4.7,
    },
    {
      id: 7,
      name: 'Sushi Platter',
      image: '/images/avistafood7.jpg',
      description: 'Assorted sushi rolls and sashimi',
      price: 18.99,
      rating: 4.7,
    },
  ];

  return (
    <Carousel autoPlay infiniteLoop interval={5000} showStatus={false} showThumbs={false}>
      {foodItems.map((item) => (
        <div key={item.id} className="bg-avista2 mx-2 text-avista3 rounded-lg shadow-md">
          <img
            src={item.image}
            alt={item.name}
            className="object-cover w-full h-96 rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{item.name}</h2>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-medium">${item.price}</span>
              <div className="flex items-center">
                <span className="text-yellow-400 mr-1">&#9733;</span>
                <span className="text-gray-600">{item.rating}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CanteenSlider;
