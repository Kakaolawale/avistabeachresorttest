
import { motion } from "framer-motion";
import Image from 'next/image';
import { IoMdRadioButtonOn } from 'react-icons/io';

const EventSlider = () => {
  return (
    <div className="relative lg:pt-20 mt-20 bg-avista2 rounded-3xl pb-4 mb-5  backdrop-blur-lg overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-2 md:mt-16 lg:mt-20 xl:mt-28"
          >
            
            <div className="pt-8 text-center lg:mr-8 sm:pr-8 text-space1-4 lg:text-left">
              <h1 className="text-5xl tracking-tight sm:px-1 font-extrabold text-avista3 sm:text-4xl sm:text-center md:mr-20 md:pr-30md:text-4xl">
              MAKE RESERVATION FOR EVENTS/PARTIES SPACE!!!
             </h1>
             
            </div>
          </motion.main>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="sm:mt-0 sm:ml-4 sm:flex-shrink-0 sm:flex sm:items-center"
          >
<div className="block text-center mr-10 sm:pr-4">
      <h1 className="mt-8 lg:mr-8 text-avista3">
      <span className="flex items-center justify-center mr-2">
        <IoMdRadioButtonOn size={20} /> 
        </span>
        Are you searching for a breathtaking beachside location to host your special occasion? Look no further than Avista Beach Resort, where dreams come to life and memories are made beyond the sea.
        <br /><br />
        <span className="flex items-center justify-center mr-2">
        <IoMdRadioButtonOn size={20} />
        </span> 
        Imagine exchanging your vows with the sand beneath your feet and the soothing sound of waves crashing in the background. Our dedicated wedding planners will work closely with you to create a personalized, magical experience tailored to your unique vision.
        <br /><br />
        <span className="flex items-center justify-center mr-2">
        <IoMdRadioButtonOn size={20} /> 
        </span>
        Celebrate your special day in style at Avista Beach Resort. With our versatile event spaces, we can cater to birthday parties of all sizes, from intimate gatherings to extravagant soirées.
        <br /><br />
        <span className="flex items-center justify-center mr-2">
        <IoMdRadioButtonOn size={20} /> 
        </span>
        Reward your hardworking team with a spectacular office gala at Avista Beach Resort. Our state-of-the-art resort facilities and spacious event venues provide the ideal setting for corporate events of any magnitude.
        <br /><br />
        <span className="flex items-center justify-center mr-2">
        <IoMdRadioButtonOn size={20} /> 
        </span>
        Escape the hustle and bustle of everyday life and embark on a rejuvenating group retreat at Avista Beach Resort. Our serene surroundings, coupled with our world-class amenities and attentive service, offer an unparalleled experience for organizations, wellness retreats, and spiritual gatherings.
        <br /><br />
        <span className="flex items-center justify-center mr-2">
        <IoMdRadioButtonOn size={20} /> 
        </span>
        At Avista Beach Resort, we understand that every event is unique, and we take pride in delivering tailor-made experiences that exceed expectations.
        <br /><br />
        <span className="flex items-center justify-center mr-2">
        <IoMdRadioButtonOn size={20} />
        </span> 
        Contact our friendly team of event specialists now to secure your preferred dates and start planning your unforgettable event at Avista Beach Resort. Let us turn your vision into reality, as we combine the stunning natural beauty of our resort with impeccable service to make your occasion truly extraordinary.
      </h1>
    </div>

            
          </motion.div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          
          <Image
            className="h-56 mb-4 rounded-xl w-full object-cover sm:h-96 md:h-96 lg:w-full lg:h-full"
            src="/images/avistapics12.jpg"
            alt="Next.js App"
            width={1000}
            height={500} 
            />
            
        </div>
      </div>
    </div>
  );
};




export default EventSlider;