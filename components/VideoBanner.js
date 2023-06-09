import React from 'react';


const VideoBanner = () => {
  return (
    <div className="relative px-8">
    <div className="w-full pb-[70.25%]">
    
        <video
          src="videos/avistaherovideo1.mp4"
          title="Avista Intro Video"
          className="absolute bg-avista2 w-full inset-0 h-full lg:mb-4 object-cover"
          autoPlay
          loop
          preload="auto"
          muted
          />
         
        </div>
        
    </div>
  );
};

export default VideoBanner;
