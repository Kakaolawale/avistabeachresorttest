import React from 'react';

const HomePageSection = () => {
  const sections = [
    {
      imageSrc: "/images/avistabeach1.jpg",
      heading: "AN EXPERIENCE BEYOND THE SEA",
      text: "Though we are relatively new, our love to services and humanity is the core of our existance."
    },
    {
      imageSrc: "/images/avistaroom4.jpg",
      heading: "DISCOVER A NEW LUXURY BEACH HOTEL",
      text: "With over 50 project/events and getaway done at the resort, we are fastly becoming a people's favourite."
    },
    {
      imageSrc: "/images/avistahero7.jpg",
      heading: "A BEACH RESORT WITH A DIFFERENCE",
      text: "The best awards we have had are the number of smiling faces that has walked in and out our door and still coming back."
    }
  ];

  return (
    <div className="py-5 px-8">
      <div className="max-w-10xl tracking-tight mb-2 text-avista3 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col items-center justify-center bg-gradient-to-b from-avista via-avista2 rounded-lg w-full h-auto py-8 px-4 sm:px-6 lg:px-8">
              <img src={section.imageSrc} alt={`Section ${index + 1}`} className="w-full mb-6 rounded-lg shadow-md sm:mb-0 sm:w-2/3 md:w-1/2 lg:w-2/3 xl:w-3/4" />
              <h2 className="text-2xl font-bold mt-2 text-center text-gray-900 mb-4">{section.heading}</h2>
              <p className="text-lg text-center text-gray-700">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePageSection;
