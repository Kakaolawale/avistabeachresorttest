
import { motion } from "framer-motion";
import Image from 'next/image';

const PictureSlider = () => {
  return (
    <div className="relative  mt-4 bg-avista2 rounded-3xl pb-4 mb-5  backdrop-blur-lg overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-2 md:mt-16 lg:mt-20 xl:mt-28"
          >
            
            <div className="sm:ml-4 pt-8 lg:mr-8  sm:pr-4 text-space1-4 lg:text-left">
              <h1 className="text-5xl tracking-tight sm:px-1 font-extrabold text-avista3 sm:text-5xl sm:text-center md:mr-20 md:pr-30md:text-4xl">
              WELCOME TO AVISTA BEACH RESORT!!!
             </h1>
             <h1 className="text-5xl tracking-tight sm:px-1 mt-2 text-avista3 sm:text-3xl sm:text-center md:mr-20 md:pr-30md:text-4xl">
                ...beyond the SEA.
             </h1>
            </div>
          </motion.main>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="sm:mt-0 sm:ml-4 sm:flex-shrink-0 sm:flex sm:items-center"
          >
            <div className="block mr-10 sm:pr-4">
            <h1 className="mt-8 lg:mr-8 text-avista3">Avista Beach Resort has been ranked 
            frequently visited by individuals, family, freinds and kids. Our guests 
            embrace the Avista beyond the sea experience by checking out of reality 
            and into paradise with our spacious accommodations and lush beach grounds. 
            We have rooms for the budget friendly traveler all the way to spacious and 
            beautiful suites for large family getaways! Avista Beach rooms come with great 
            custumer experience to make your stay the perfect home away from home alongside 
            the fresh ocean air!.</h1>
            
            </div>
            
          </motion.div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          
          <Image
            className="h-56 mb-4 rounded-xl w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/images/avistadaypass2.jpg"
            alt="Next.js App"
            width={1000}
            height={500} 
            />
            
        </div>
      </div>
    </div>
  );
};




export default PictureSlider;
