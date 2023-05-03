
import Image from 'next/image'

import React from 'react'

const Team = () => {
  return (

      <div class="p-8 px-10 text-avista2 bg-gradient-to-b from-avista via-avista2 rounded-lg">
    <div className='mt-10 backdrop-blur-lg shadow-xl rounded-lg lg:w-30'>
    <p class="text-3xl font-bold tracking-tight text-center bg-avista2 rounded-lg text-avista3 py-5 px-2">
        TEAM
    </p>
    </div>
    <p class="mb-32 text-xl font-normal text-center text-avista3">
        Meat the best team in the world!
    </p>
    <div class="flex flex-col items-center md:space-y-0 md:flex-row justify-between">
        <div class="relative p-4 lg:px-4 py-8">
            <div class="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
                <a href="#" class="relative block">
                    <img alt="profil" src="/images/avistateam1.jpg" class="mx-auto object-cover rounded-lg h-40 w-40 dark:border-gray-800"/>
                </a>
            </div>
            <div class="px-8 py-4 pt-24 bg-avista5 rounded-lg shadow dark:bg-gray-800">
                <div class="text-center">
                    <p class="text-2xl font-bold text-gray-800 dark:text-white">
                       Kaka Olawale David
                    </p>
                    <p class="text-xl font-light text-gray-500 dark:text-gray-200">
                        Head Tech/Media 
                    </p>
                    <p class="py-4 mx-auto font-regular text-gray-500 text-md w-60 dark:text-gray-400">
                        Engr. Kaka Olawale David is a young Nigerian fast 
                        rising talented software engineer and visual designer. With over 6 years experience, he joins
                        the Avista Beach Resort Team to create web and media technologies that meets up to solving
                        our client's real life challenges alongside promoting the team vision to meet up global standard.
                    </p>
                </div>
                <div class="flex items-center justify-between w-40 pt-8 mx-auto text-gray-500 border-t border-gray-200">
                         
                </div>
            </div>
        </div>

        <div class="relative p-4">
            <div class="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
                <a href="#" class="relative block">
                    <img alt="profil" src="/images/avistateam1.jpg" class="mx-auto object-cover rounded-lg h-40 w-40 dark:border-gray-800"/>
                </a>
            </div>

            <div class="px-8 py-4 pt-24 bg-avista5 rounded-lg shadow dark:bg-gray-800">
                <div class="text-center">
                    <p class="text-2xl font-bold text-gray-800 dark:text-white">
                        Charlie
                    </p>
                    <p class="text-xl font-regular text-gray-500 dark:text-gray-200">
                        Lead dev
                    </p>
                    <p class="py-4 mx-auto font-regular text-gray-500 text-md w-60 dark:text-gray-400">
                    Engr. Kaka Olawale David is a young Nigerian fast 
                        rising talented software engineer and visual designer. With over 6 years experience, he joins
                        the Avista Beach Resort Team to create web and media technologies that meets up to solving
                        our client's real life challenges alongside promoting the team vision to meet up global standard.
                    </p>
                </div>
                <div class="flex items-center justify-between w-40 pt-8 mx-auto text-gray-500 border-t border-gray-200">
                        
                </div>
            </div>
        </div>
        <div class="relative p-4">
            <div class="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
                <a href="#" class="relative block">
                    <img alt="profil" src="/images/avistateam1.jpg" class="mx-auto object-cover rounded-lg h-40 w-40 dark:border-gray-800"/>
                </a>
            </div>


            <div class="px-8 py-4 pt-24 bg-avista5 rounded-lg shadow dark:bg-gray-800">
                <div class="text-center">
                    <p class="text-2xl font-bold text-gray-800 dark:text-white">
                        Thierry Halliday
                    </p>
                    <p class="text-xl font-regular text-gray-500 dark:text-gray-200">
                        CTO
                    </p>
                    <p class="py-4 mx-auto font-regular text-gray-500 text-md w-60 dark:text-gray-400">
                    Engr. Kaka Olawale David is a young Nigerian fast 
                        rising talented software engineer and visual designer. With over 6 years experience, he joins
                        the Avista Beach Resort Team to create web and media technologies that meets up to solving
                        our client's real life challenges alongside promoting the team vision to meet up global standard.
                    </p>
                </div>
                <div class="flex items-center justify-between w-40 pt-8 mx-auto text-gray-500 border-t border-gray-200">
                    
                </div>
            </div>


            
        </div>
    </div>


    
</div>

  )
}

export default Team
