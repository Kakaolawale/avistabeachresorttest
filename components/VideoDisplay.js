import React from 'react';
import Image from 'next/image';

const VideoDisplay = ({ src }) => {
  return (
    <div className="relative pt-6 px-2">
      
     
     <Image
            className="w-full h-full object-cover object-center"
           src={src}
            alt="Avista"
            width={1000}
            height={500} 
            />
      <div className="absolute inset-0 bg-black opacity-25"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-lg mx-auto px-4">
          <h1 className="text-4xl font-bold text-avista leading-tight mb-6">
            Your hero banner title goes here
          </h1>
          <p className="text-lg  leading-relaxed mb-12">
            Your hero banner description goes here
          </p>
          <a
            href="#"
            className="text-center bg-avista text-black font-bold py-3 px-8 rounded-full hover:bg-avista3"
          >
            Chat Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoDisplay;
