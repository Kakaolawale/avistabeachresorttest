import Image from "next/image";
import { FaWifi, FaSwimmingPool, FaUmbrellaBeach } from "react-icons/fa";

const BeachDescription = ({ name, imageSrc, description, hasWifi, hasPool, hasBeachUmbrellas }) => {
  return (
    <div className="w-full mb-4 mt-4 px-8 backdrop-blur-3xl text-avista3 shadow-lg overflow-hidden">
      <div className="relative pt-8 mt-4 sm:mx-8 h-96">
        <Image 
        src={imageSrc} 
        alt={name} 
        layout="fill" 
        objectFit="cover" />
      </div>
      
      <div className="py-4 px-2">
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <ul className="flex">
          {hasWifi && (
            <li className="mr-3">
              <FaWifi className="text-blue-500" />
            </li>
          )}
          {hasPool && (
            <li className="mr-3">
              <FaSwimmingPool className="text-blue-500" />
            </li>
          )}
          {hasBeachUmbrellas && (
            <li>
              <FaUmbrellaBeach className="text-blue-500" />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};




export default BeachDescription;
