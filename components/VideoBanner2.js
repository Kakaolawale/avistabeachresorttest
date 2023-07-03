import { useState, useEffect } from 'react';
import Link from 'next/link';

const HeroBanner = () => {
  const slides = [
    {
      id: 1,
      videoUrl: '/videos/avistavideo1.mp4',
      title: 'WELCOME TO AVISTA BEACH RESORT',
      description: 'Experience luxury at its finest',
    },
    {
      id: 2,
      videoUrl: '/videos/avistavideo2.mp4',
      title: 'BEAUTIFUL OCEAN VIEWS',
      description: 'Relax and enjoy the scenery',
    },
    {
      id: 3,
      videoUrl: '/videos/avistavideo3.mp4',
      title: 'THE BEST PLACE TO ALWAYS BE',
      description: 'Modern design with comfort in mind',
    },
    {
      id: 5,
      videoUrl: '/videos/avistavideo4.mp4',
      title: 'EXPERIENCE GLITS AND MODERN ARTS',
      description: 'Modern design with comfort in mind',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  const goToPreviousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  return (
    <div className="relative mx-2 text-avista3 h-screen">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute rounded-3xl top-0 left-0 w-full h-full transition-all duration-500 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <video
            src={slide.videoUrl}
            autoPlay
            loop
            muted
            className="w-full h-full mb-10 rounded-3xl object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
            <p className="text-lg mb-8">{slide.description}</p>
            <Link href="/navlinks/daypassbookings">
              <button className="bg-avista font-extrabold text-avista2 py-3 px-8 rounded-full shadow-lg">
                BOOK DAYPASS
              </button>
            </Link>
          </div>
        </div>
      ))}
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-0 px-4 py-8 rounded-full bg-black bg-opacity-50 text-white z-10"
        onClick={goToPreviousSlide}
      >
      B 
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-0 px-4 py-8 rounded-full bg-black bg-opacity-50 text-white z-10"
        onClick={goToNextSlide}
      >
             F 
      </button>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-black bg-opacity-50 flex items-center justify-center">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`w-3 h-3 rounded-full mx-2 cursor-pointer transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;


