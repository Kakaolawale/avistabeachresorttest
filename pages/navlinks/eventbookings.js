import React from 'react'
import { motion } from "framer-motion";

const eventbookings = () => {
  return (
    <div>
      < motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            >
      <div className='bg-avistahero2 h-96 w-full bg-cover bg-center p-20'>
        <div className="flex text-avista3 flex-col items-center justify-center">
                <h1 className="mb-2 text-4xl font-bold">
                QUALITY HOLIDAYS 
                </h1>
                <p className="text-sm max-w-2xl ">
                Avista Beach Resort has been ranked frequently visited by individuals, 
                family, freinds and kids. Our guests embrace the Avista beyond the sea 
                experience by checking out of reality and into paradise with our spacious 
                accommodations and lush beach grounds.
                </p>
                <div className="mt-4">
                    <button className="px-6 py-2 text-white bg-avista rounded-md shadow-md">
                       Learn More
                    </button>
                    
                </div>
            </div>
        </div>
        </motion.main>
    </div>
  )
}

export default eventbookings
