import React from 'react';
import { motion } from "framer-motion";

const experiences = () => {
  const images = [
    '/images/avistabeach1.jpg',
    '/images/avistahero4.jpg',
    '/images/avistahero7.jpg',
    '/images/avistahero8.jpg',
    '/images/avistahero5.jpg',
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const experiences = [
    {
      title: 'Snorkeling',
      description: 'Explore the vibrant coral reefs and tropical fish just off the coast of our beach resort.',
    
    },
    {
      title: 'Beach Volleyball',
      description: 'Get your heart pumping with a friendly game of beach volleyball on our white sand beach.',
      
    },
    {
      title: 'Surfing Lessons',
      description: 'Learn to ride the waves with our experienced surf instructors.',
      
    },
    {
      title: 'Sunset Cruise',
      description: 'Take in the stunning beauty of the sunset from the comfort of our luxury yacht.',
      
    },
    {
      title: 'Massage & Spa',
      description: 'Relax and rejuvenate with a massage or spa treatment at our beachside spa.',
      
    },
    {
      title: 'Fine Dining',
      description: 'Indulge in delicious cuisine from around the world at our beachfront restaurant.',
     
    },
    {
      title: 'Beach Vollyball',
      description: 'Indulge in delicious cuisine from around the world at our beachfront restaurant.',
     
    },
    {
      title: 'Badbinton',
      description: 'Indulge in delicious cuisine from around the world at our beachfront restaurant.',
     
    },
    {
      title: 'Mini Golf',
      description: 'Indulge in delicious cuisine from around the world at our beachfront restaurant.',
     
    },
    {
      title: 'Movie Screen',
      description: 'Indulge in delicious cuisine from around the world at our beachfront restaurant.',
     
    },
    {
      title: 'Table Tennis',
      description: 'Indulge in delicious cuisine from around the world at our beachfront restaurant.',
     
    },
    {
      title: 'Beach Football',
      description: 'Indulge in delicious cuisine from around the world at our beachfront restaurant.',
     
    },
  ];

  return (
    <div className="bg-gradient-to-b from-avista via-avista2 mt-20 pt-8 py-16 px-2 text-avista3">
< motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            >


      
      <div className="px-8 rounded-xl pb-4 pt-4 container mx-auto">
        <h2 className="text-3xl font-bold text-center tracking-tight mb-8">EXPERIENCES</h2>
        <p className="mt-2 mb-4">Relax, enjoy the breeze, bathe in the sun and experience 
        the love of nature by our poolside. Enjoy the private cabanas and gazebos and 
        of course feel all the love you want whilst still enjoying nature and privacy 
        in our LOVE HUT. There is so much to do and experience, from the table tennis, 
        to pool table, the movie screen, leisure games, etc. Everything has been perfectly 
        curated to bring you the most fun and of course the children are not left out. Avista 
        is the perfect location for everyone.</p>
        <div className="relative">
          <button
            className="absolute inset-y-1/2 left-0 z-10"
            onClick={handlePrev}
          >
            &lt;
          </button>
          <button
            className="absolute inset-y-1/2 right-0 z-10"
            onClick={handleNext}
          >
            &gt;
          </button>
          <img
            src={images[currentIndex]}
            alt="Avista beach resort"
            className="w-full h-64 lg:h-screen lg-px-2 lg-mx-2 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {experiences.map((experience) => (
            <div key={experience.title} className="flex items-center space-x-4">
              
              <div>
                <h3 className="text-lg font-bold">{experience.title}</h3>
                <p className="mt-2">{experience.description}</p>
              </div>
            </div>
          ))}
               </div>
      </div>
      </motion.main>
    </div>
  );
};

export default experiences;

