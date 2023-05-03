import React from "react";

export default function HeroBanner() {
    return (
        <div className='h-full w-full mt-8 rounded-3xl bg-cover bg-center'>
          
          <video className="w-full h-1/4 px-4 mt-10 rounded-3xl pt-20 object-cover" autoPlay loop muted>
          <source src="/videos/avistaherovideo1.mp4" type="video/mp4" />
        </video>
        <div className="flex text-avista3 flex-col items-center justify-center">
        </div>
        </div>
    );
}