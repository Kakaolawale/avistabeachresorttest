
import Image from 'next/image'

import React from 'react'

const Team = () => {
  return (

      <div className="p-8 px-10 text-avista2 bg-gradient-to-b from-avista via-avista2 rounded-lg">
    <div className='mt-10 backdrop-blur-lg shadow-xl rounded-lg lg:w-30'>
    <p className="text-3xl font-bold tracking-tight text-center bg-avista2 rounded-lg text-avista3 py-5 px-2">
        TEAM
    </p>
    </div>
    <p className="mb-32 text-xl font-normal text-center text-avista3">
        Meat the best team in the world!
    </p>
    <div className="flex flex-col items-center md:space-y-0 md:flex-row justify-between">
        <div className="relative p-4 lg:px-4 py-8">
            <div className="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
                <a href="#" className="relative block">
                    <img 
                    alt="profil" 
                    src="/images/avistateamjimmy.jpg" 
                    className="mx-auto object-cover rounded-3xl h-40 w-35 dark:border-gray-800"/>
                </a>
            </div>
            <div className="px-8 py-4 pt-24 bg-avista5 rounded-lg shadow dark:bg-gray-800">
                <div className="text-center">
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">
                       Jimmy Ubong Okon
                    </p>
                    <p className="text-xl font-light text-gray-500 dark:text-gray-200">
                        Head Chef
                    </p>
                    <p className="py-4 mx-auto font-regular text-gray-500 text-md w-60 dark:text-gray-400">
                    Jimmy Ubong is a trained CHEF both Intercontinental and 
                    Local Dishes, with 16yrs experience. I joined Avista 
                    Beach Resort Team to showcase my skills in what I 
                    love doing.

                    </p>
                </div>
                <div className="flex items-center justify-between w-40 pt-8 mx-auto text-gray-500 border-t border-gray-200">
                         
                </div>
            </div>
        </div>

        <div className="relative p-4 lg:px-4 py-8">
            <div className="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
                <a href="#" className="relative block">
                    <img 
                    alt="profil" 
                    src="/images/avistateamama.jpg" 
                    className="mx-auto object-cover rounded-3xl h-40 w-35 dark:border-gray-800"/>
                </a>
            </div>
            <div className="px-8 py-4 pt-24 bg-avista5 rounded-lg shadow dark:bg-gray-800">
                <div className="text-center">
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">
                       Jarikre Ivie Treasure
                    </p>
                    <p className="text-xl font-light text-gray-500 dark:text-gray-200">
                        Head Front Office
                    </p>
                    <p className="py-4 mx-auto font-regular text-gray-500 text-md w-60 dark:text-gray-400">
                    Jarikre Ivie Treasure, Head of Front Office. Avista Beach Resort.  Treasure is a very skilled 
                    and experienced Nigerian front desk. She’s interested in customer’s well being and satisfaction 
                    and the growth of the organization at large.
                    </p>
                </div>
                <div className="flex items-center justify-between w-40 pt-8 mx-auto text-gray-500 border-t border-gray-200">
                         
                </div>
            </div>
        </div>


        

        <div className="relative p-4">
            <div className="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
                <a href="#" className="relative block">
                    <img 
                    alt="profil" 
                    src="/images/avistateamkaka.jpg" 
                    className="mx-auto object-cover rounded-3xl h-40 w-35 dark:border-gray-800"/>
                </a>
            </div>

            <div className="px-8 py-4 pt-24 bg-avista5 rounded-lg shadow dark:bg-gray-800">
                <div className="text-center">
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">
                        Charlie
                    </p>
                    <p className="text-xl font-regular text-gray-500 dark:text-gray-200">
                        Lead dev
                    </p>
                    <p className="py-4 mx-auto font-regular text-gray-500 text-md w-60 dark:text-gray-400">
                    Engr. Kaka Olawale David is a young Nigerian fast 
                        rising talented software engineer and visual designer. With over 6 years experience, he joins
                        the Avista Beach Resort Team to create web and media technologies that meets up to solving
                        our client's real life challenges alongside promoting the team vision to meet up global standard.
                    </p>
                </div>
                


                <div className="flex items-center justify-between w-40 pt-8 mx-auto text-gray-500 border-t border-gray-200">
                        
                </div>
            </div>
        </div>
        <div className="relative p-4">
            <div className="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
                <a href="#" className="relative block">
                    <img 
                    alt="profil" 
                    src="/images/avistateammagnus.jpg" 
                    className="mx-auto object-cover rounded-3xl h-40 w-35 dark:border-gray-800"/>
                </a>
            </div>


            <div className="px-8 py-4 pt-24 bg-avista5 rounded-lg shadow dark:bg-gray-800">
                <div className="text-center">
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">
                        Magnus Chinedum Nnanna
                    </p>
                    <p className="text-xl font-regular text-gray-500 dark:text-gray-200">
                       Supervisor/Head Maintenance
                    </p>
                    <p className="py-4 mx-auto font-regular text-gray-500 text-md w-60 dark:text-gray-400">
                    Magnus Chinedum Nnanna.  Supervisor and Head of Maintenance Avista Beach Resort.  Has 
                    experience in Hospitality business over the years , joined Avista Resort to ensure a 
                    Serene and Neat environment for the best of relaxation to meet up with the demands 
                    of clients.

                    </p>
                </div>

                
                <div className="flex items-center justify-between w-40 pt-8 mx-auto text-gray-500 border-t border-gray-200">
                    
                </div>
            </div>


            
        </div>
    </div>


    
</div>

  )
}

export default Team
