import { useState, useEffect } from "react";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Ademola",
      testimony:
        "Avista Beach Resort was the perfect getaway for my family. The rooms were spacious and beautifully decorated, with breathtaking views of the beach. We loved lounging in the huts by the sea and sipping cocktails from the beachside bar. The restaurant served delicious meals, with a great selection of fresh seafood. The swimming pool was a great place to relax and soak up the sun. Overall, we had an amazing time at Avista Beach Resort and can't wait to come back..",
     
    },
    {
      id: 2,
      name: "Aishat",
      testimony:
        "I recently stayed at Avista Beach Resort and was blown away by the level of service and amenities. The rooms were immaculate and had everything we needed for a comfortable stay. The huts by the beach were a great place to relax and read a book while listening to the sound of the waves. The restaurant had an amazing selection of local cuisine and the staff were attentive and friendly. The swimming pool was a great place to cool off after a day in the sun. I highly recommend Avista Beach Resort for anyone looking for a luxurious and relaxing beach vacation.",
     
    },
    {
      id: 3,
      name: "Mathew",
      testimony:
        "Avista Beach Resort exceeded my expectations in every way. The rooms were spacious and luxurious, with stunning views of the ocean. The huts by the beach were a perfect place to unwind and take in the natural beauty of the surroundings. The restaurant had a fantastic menu with something for everyone, and the bar had a great selection of drinks. The swimming pool was well-maintained and a great place to spend a lazy afternoon. Overall, I had an amazing stay at Avista Beach Resort and can't wait to go back",
     
    },
    {
      id: 3,
      name: "Anthony Edmund",
      testimony:
        "My partner and I had a wonderful time at Avista Beach Resort. The room was cozy and comfortable with all the necessary amenities. We enjoyed spending time in the huts by the beach, watching the sunrise and sunset. The restaurant had an impressive menu with a variety of options to choose from, and the food was delicious. The staff were friendly and helpful, making our stay even more enjoyable. We also loved the swimming pool, which was well-maintained and a great place to cool off. Overall, Avista Beach Resort was a great choice for a romantic beach getaway.",
     
    },
    {
      id: 3,
      name: "Prisca",
      testimony:
        "As a solo traveler, Avista Beach Resort provided the perfect retreat for some much-needed rest and relaxation. The room was spacious and comfortable, with a beautiful view of the ocean. I enjoyed spending time in the huts by the beach, reading and listening to the waves. The restaurant had a great selection of vegetarian options, which I really appreciated. The swimming pool was a great place to cool off and meet other travelers. The staff were attentive and made me feel welcome. I highly recommend Avista Beach Resort for solo travelers looking for a peaceful and rejuvenating vacation.",
     
    },
  ]);

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials]);

  return (
    <div className="px-4 text-avista3 bg-gradient-to-br from-avista via-avista2 m-4 shadow overflow-hidden rounded-3xl">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-xl leading-6 text-center font-bold tracking-tight text-gray-900">
         TESTIMONIALS
        </h3>
        <div className="mt-5">
          <div className="flex flex-col items-center">
            <div className="relative">
              
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="p-4 bg-gray-900 bg-opacity-75">
                  <blockquote className="text-center">
                    <p className="text-white text-lg font-semibold">
                      {testimonials[currentTestimonial].testimony}
                    </p>
                    <footer className="mt-2 text-white">
                      <cite>
                        {testimonials[currentTestimonial].name}
                      </cite>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

