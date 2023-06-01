import React from 'react'
import Link from 'next/link'
const LastSection = () => {
  return (
    <div className="w-full p-10  ... bg-cover  bg-avistahero6 h-96 shadow">
            <div className="flex flex-col text-avista3 items-center justify-center">
                <h1 className="text-4xl font-bold tracking-tight">COOLEST BEACH HOTELS.</h1>
                <p className="max-w-2xl text-sm">Located on a private sandy beach in Okun Ajah, Avista brings together 
                a timeless feel, modern amenities, and peerless service. Explore our comfortable rooms,
             beach-front pool and gardens, and a wide range of family oriented activities.
                Book now to experience authentic and unrivaled hospitality, Beyond the SEA.</p>
                <div className="items-center justify-center mt-4">
                    <Link href="/navlinks/overnightbookings">
                    <button className="px-6 py-2 text-center text-avista2 font-bold tracking-tight bg-avista3 rounded-md shadow-md">
                      Book Now
                    </button>
                    </Link>
                </div>
            </div>
            
            
        </div>
  )
}

export default LastSection
