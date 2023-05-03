import React from 'react';
import { motion } from "framer-motion";
const about = () => {
  const history = `
    Avista beach resort reservation brand was founded in 2020 by a visionary Nigerian entrepreneur and tourism lover who wanted to make it easier for people to book vacations at the best beach resorts around the world. 
    In 2021 Avista Beach Resort allocated more space due to the need for expansion yet continued to maintain the serene atmosphere for relaxation for families, individuals and groups.
    Since then, we've grown to become one of the most trusted names in the travel and tourism industry, offering unbeatable deals and exceptional customer service.Situated in Okun Ajah, Avista Beach is one of the finest all-inclusive, family-run oceanOur guests embrace the Avista beyond the sea experience by checking out of reality and into paradise with our spacious accommodations and lush beach grounds.

    We have rooms for the budget friendly traveler all the way to spacious and beautiful suites for large family getaways! Avista Beach rooms come with great custumer experience to make your stay the perfect home away from home alongside the fresh ocean air!front resort in Lagos.
  `;

  const vision = `
    Our vision is to be the go-to source for all your beach vacation needs. We want to make it easy and affordable for everyone to experience the beauty and relaxation of a beach getaway, no matter where they are in the world.
  `;

  const mission = `
    Our mission is to provide our customers with the best possible beach vacation experience. We strive to offer unbeatable prices, exceptional customer service, and a wide selection of top-rated beach resorts to choose from.
  `;

  const goals = `
    Our goals are simple: to make it easy and affordable for everyone to book a beach vacation, and to provide exceptional customer service every step of the way. We want to help you create memories that will last a lifetime.
  `;

  return (
    <div className="bg-gradient-to-br from-avista via-avista2 text-avista3 pb-8 px-4 pt-8">
      < motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            >
      <div className="bg-avista2 px-8 rounded-2xl py-8 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 tracking-tight bg-avista m-3 p-4 rounded-2xl text-avista2">AVISTA</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Our History</h3>
            <p>{history}</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Our Vision</h3>
            <p>{vision}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p>{mission}</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Our Goals</h3>
            <p>{goals}</p>
          </div>
        </div>
        
      </div>
      </motion.main>
    </div>
  );
};

export default about;
