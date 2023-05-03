import { motion } from "framer-motion";

const PictureSlider3 = () => {
  return (
    <div className="relative pb-8 mb-5 mx-10 rounded-xl backdrop-blur-lg bg-gradient-to-b from-avista via-avista2 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="h-56 mb-4 mt-4 rounded-xl w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/images/avistahero6.jpg"
            alt="Next.js App"
          />
        </div>
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-2 md:mt-16 lg:mt-20 xl:mt-28"
          >
            
            <div className="block sm:ml-4 pt-8 lg:mr-8 mr-10 pr-20 sm:text-center text-space1-4 lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-avista3 sm:text-5xl md:text-6xl">
                <span className="block xl:inline text-space1-2">Welcome to</span>
                <span className="block text-indigo-600 xl:inline">
                  AVISTA BEACH RESORT!
                </span>
              </h1>
            </div>
          </motion.main>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="sm:mt-0 sm:ml-4 lg:mr-20 sm:flex-shrink-0 sm:flex sm:items-center"
          >
            <div className="block ml-4 sm:pr-4">
            <h1 className="mt-8 lg:mr-8 text-avista3">At Avista Beach Resort Our resort boasts 
            a range of luxurious accommodation options, from stunning villas to spacious suites, 
            all designed to provide you with the ultimate comfort and style. Each room is equipped 
            with top-of-the-line amenities, including plush bedding, modern technology, and breathtaking 
            views of the ocean.

            Step outside your room and onto our private beach, where you can soak up the sun and take a dip 
            in the crystal-clear waters. Our beach is exclusively for our guests, ensuring that you can enjoy 
            the ultimate in privacy and seclusion. If you're feeling active, our resort offers a range of activities 
            to keep you entertained. From water sports to fitness classes, we have something to suit every taste. 
            And when you're ready to unwind, our luxurious spa is the perfect place to relax and rejuvenate.

Savor the flavors of the sea at our on-site restaurant, where our expert chefs create exquisite dishes using 
only the freshest ingredients. And when the sun sets, enjoy a cocktail at our beachfront bar and watch as the 
sky turns a stunning shade of pink.</h1>
           
            </div>
            
      </motion.div>
        </div>
        
      </div>
    </div>
  );
};




export default PictureSlider3;

