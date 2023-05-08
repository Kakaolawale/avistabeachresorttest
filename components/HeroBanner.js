import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  {
    src: "/images/avistaroom1.jpg",
    title: "Image 1",
    description: "Description of image 1",
  },
  {
    src: "/images/avistahero7.jpg",
    title: "Image 2",
    description: "Description of image 2",
  },
  {
    src: "/images/avistahero5.jpg",
    title: "Image 3",
    description: "Description of image 3",
  },
];

const HeroBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mb-8 bg-avista2 ">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000`}
        >
          <Image
            src={image.src}
            alt={image.title}
            className="w-full"
           
            objectFit="cover"
            width={500}
            height={500}
            
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-avista bg-opacity-75">
            <h1 className="text-white text-3xl font-bold">{image.title}</h1>
            <p className="text-white text-lg">{image.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroBanner;

