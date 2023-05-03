import React from "react";

export default function SectionBanner() {
    return (
        <div className="w-full bg-avistahero7 p-10 rounded-lg ... bg-cover bg-center ... bg-avista items-center justify-center">
            <div className="flex flex-col  items-center justify-center text-avista3">
                <h1 className="text-4xl font-bold">AVISTA BEACH RESORT, BEYOND THE SEA.</h1>
                <p className="max-w-2xl text-sm">A place that will leave you floating in nostalgia with treasured times and 
                countless generations. Away from ordinary city life, our cozy rooms and excellent service will bring 
                people closer together. For those who long for the feeling of being at home again, here is one in the 
                heart of Africa, Lekki-Ajah Lagos. Avista is suitable for leisure, business, and moments 
                that will last a lifetime.</p>
                <div className="mt-4">
                    <button className="px-6 py-2  items-center justify-center text-avista3 bg-avista2 rounded-md shadow-md">
                      Learn More...
                    </button>
                </div>
          
            </div>
            <hr className="my-6 border-avista3 sm:mx-auto dark:border-avista3 lg:my-8" />
            <div className="flex flex-col text-avista3  items-center justify-center">
                
                <p className="text-left ... text-sm">A place that will leave you floating in nostalgia with treasured times and 
                countless generations.</p>
                
          
            </div>

            
        </div>
    );
}


