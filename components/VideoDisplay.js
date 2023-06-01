import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const VideoDisplay = ({ src }) => {
  return (
    <div className="relative pt-6 px-2">
      
     
     <Image
            className="w-full rounded-3xl h-full object-cover object-center"
           src={src}
            alt="Avista"
            width={500}
            height={500} 
            />
      <div className="absolute inset-0 bg-black opacity-25"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-lg mx-auto px-4 mt-40">
          <h1 className="text-4xl font-bold text-avista3 leading-tight mb-6">
            Best Moments
          </h1>
          <p className="text-lg text-avista3 leading-relaxed mb-12">
          As a solo traveler, Avista Beach Resort provided the perfect 
          retreat for some much-needed rest and relaxation.
          </p>
          <Link
            href="/navlinks/overnightbookings"
            className="text-center bg-avista text-black font-extrabold py-3 px-8 rounded-full hover:bg-avista3"
          >
           BOOK OVERNIGHT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoDisplay;
