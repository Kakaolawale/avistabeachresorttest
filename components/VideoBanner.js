import React from 'react';

const VideoBanner = () => {
  return (
    <div className="relative  mt-8 pt-4 lg:mx-20 rounded-3xl mx-8 px-8">
      
      <div className="w-full pb-[70.25%]">
        <video
          src="videos/avistapool.mp4"
          title="Video Banner"
          className="absolute bg-avista2 rounded-3xl w-full inset-0 lg:h-1/2 object-cover"
          autoPlay
          loop
          controls
        ></video>
        </div>
        
    </div>
  );
};

export default VideoBanner;
