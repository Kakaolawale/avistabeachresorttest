import { useState, useEffect } from 'react';

const images = [
  'images/avistahero6.jpg',
  'images/avistahero8.jpg',
  'images/avistahero3.jpg',
  'images/avistahero9.jpg',
];

const details = [
  {
    title: 'Luxurious Accommodation',
    description: 'Experience the ultimate comfort in our spacious and elegantly designed rooms.',
  },
  {
    title: 'Infinity Pool',
    description: 'Relax and unwind in our stunning infinity pool with breathtaking views of the ocean.',
  },
  {
    title: 'Private Beach Access',
    description: 'Enjoy direct access to the pristine beach, perfect for sunbathing and water activities.',
  },
  {
    title: 'Gourmet Dining',
    description: 'Indulge in a culinary journey with our world-class restaurants and beachfront bars.',
  },
];

const ResortSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);


  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative p-4 rounded-3xl my-8 mx-4 bg-gradient-to-b from-avista via-avista2">
      <div className="h-96 lg:my-8 relative rounded-3xl overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 h-full w-full transition-opacity duration-5000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute bottom-0 left-0 right-0 bg-avista2 bg-opacity-40 text-avista3 p-6">
          <h3 className="text-3xl font-bold mb-2">{details[currentSlide].title}</h3>
          <p>{details[currentSlide].description}</p>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2 w-2 rounded-full mx-1 focus:outline-none ${
              index === currentSlide ? 'bg-avista3' : 'bg-avista2'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ResortSection;
