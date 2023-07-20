import Image from "next/image";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useRouter } from 'next/router';


const daypassbookings = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]);
  const [daycationType, setDaycationType] = useState('');
  const [bookingSubmitted, setBookingSubmitted] = useState(false); // New state variable




  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const endpoint = '/api/daypassbookings'; // Update the endpoint URL

      const formData = {
        ...data,
        daycationType,
      };

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setBookingSubmitted(true); // Set the submission status to true
        reset(); // Reset the form state
      } else {
        const errorData = await response.json();
        console.error(errorData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Load images from the images folder
    const imagePaths = [
      "/images/avistafood12.jpg", 
      "/images/avistafood15.jpg", 
      "/images/avistadaypass2.jpg", 
      "/images/avistadaypass3.jpg", 
      "/images/avistahero5.jpg", 
      "/images/avistahero8.jpg",
      "/images/avistahero9.jpg",
      "/images/avistahero6.jpg", 
      "/images/avistahero2.jpg", 
    ];


    const loadedSlides = imagePaths.map((path) => {
      return (
        <div key={path}>
          <Image
            src={path}
            alt="Beach"
            width={900}
            height={600}
            layout="responsive"
            className="object-cover w-full h-full"
          />
        </div>
      );
    });
    setSlides(loadedSlides);

    // Change slide every 5 seconds
    const slideTimer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % loadedSlides.length);
    }, 3000);

    // Cleanup timer on unmount
    return () => clearInterval(slideTimer);
  }, []);

  return (
    <div className="py-12">
      < motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            >

      <div className="max-w-4xl mx-4 mt-8 bg-gradient-to-br from-avista via-avista2 rounded-xl pt-20  px-8 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-avista3 text-center tracking-tight mb-4">DAYPASS BOOKING</h2>
        
        <h1 className="text-center mb-2 text-avista3"> Please kindly fill the form below to make bookings.</h1>
        
        <h2 className="text-xl font-extrabold text-avista3 text-center bg-avista2/50 backdrop-blur-3xl rounded-3xl w-15 tracking-tight mb-8">Gate Pass Prices With Corkage</h2>

        <h2 className="text-center font-bold text-lg text-avista3 pb-2">
        <span>N5000 Per Adult</span><br />
        <span> N3000 Per Teenager</span><br />
        <span>N2000 Per Kid</span>
        </h2>
        
        <h2 className="text-xl font-extrabold text-avista3 text-center bg-avista2/50 backdrop-blur-3xl rounded-3xl w-18 tracking-tight mb-8">Gate Pass Prices Without Corkage</h2>

        <h2 className="text-center font-bold text-lg text-avista3 pb-2">
        <span>N3000 Per Adult</span><br />
        <span> N2000 Per Teenager</span><br />
        <span>N1000 Per Kid</span>
        </h2>
        <hr className="text-avista3 mb-4 pb-8" />
        <h2 className="text-xl font-extrabold text-avista3 text-center bg-avista2/50 backdrop-blur-3xl rounded-3xl w-18 tracking-tight mb-8">Swimming Prices</h2>

        <h2 className="text-center font-bold text-lg text-avista3 pb-2">
        <span>N2000 Per Adult</span><br />
        
        <span>N1000 Per Kid</span>
        </h2>
        <div className="relative h-96 overflow-hidden  object-cover rounded-2xl">
          <div className="absolute rounded-xl inset-0">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                } transition-opacity rounded-xl duration-1000 ease-in-out absolute inset-0`}
              >
                {slide}
              </div>
            ))}
          </div>
        </div>
        {bookingSubmitted ? (
            <div className="text-center mt-20 pb-20 text-avista3 text-xl font-bold">
              <h1 className="text-avista3 text-lg font-thin mt-10 text-center">
        <span className="font-bold">Booking Successful....</span></h1>
        <h1 className="text-center mb-4 mt-10 ml-8 font-extrabold text-lg bg-avista w-16 h-17 rounded-3xl">2</h1>
      <h1 className="text-avista3 text-lg font-thin text-center">
You may now proceed to confirm your booking by copying any of the accounts shown below and then click the green button 
<span className="font-bold">Whatsapp Chat icon</span> below this page before you make payment to any of these Avista 
official bank account. And finally send us a slip or prove of payment via the whatsapp. 
       <div className="mt-8">
       <span className="font-bold">AVISTA MEGA GLOBAL VENTURES, STANBIC IBTC, 0037855764</span>
       <br />
       <span className="font-bold">AVISTA MEGA GLOBAL VENTURES, UBA, 1023925503</span>
       <br />
       <span className="font-bold">AVISTA MEGA GLOBAL VENTURES, TAJ BANK, 0002741713</span>
       </div>
      </h1>
            </div>
          ) : (
        <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-avista3 font-bold mb-2">Name</label>
            <input {...register("name", { required: true })} type="text" className="form-input w-full px-4 py-2 border text-avista2 rounded-md" id="name" />
            {errors.name && <span className="text-avista2 text-lg italic">This field is required</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-avista3 font-bold mb-2">Email</label>
            <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} type="email" className="form-input w-full px-4 py-2 border text-avista2 rounded-md" id="email" />
            {errors.email && errors.email.type === "required" && <span className="text-red-500 text-xs italic">This field is required</span>}
            {errors.email && errors.email.type === "pattern" &&
            <span className="text-avista3 text-xs italic">Please enter a valid email address</span>}
            </div>

            <div className="mb-4">
                <label htmlFor="phone" className="block text-avista3 font-bold mb-2">
                  Phone Number
                </label>
                <input
                  {...register("phone", { required: true })}
                  type="tel"
                  className="form-input w-full px-4 py-2 border text-avista2 rounded-md"
                  id="phone"
                />
                {errors.phone && (
                  <span className="text-avista2 text-lg italic">This field is required</span>
                )}
              </div>

            <div className="mb-4">
              <label htmlFor="date" className="block text-avista3  font-bold mb-2">Check-In Date</label>
              <input {...register("date", { required: true })} type="date" className="form-input w-full px-4 py-2 border text-avista2 rounded-md" id="date" />
              {errors.date && <span className="text-avista3 text-xs italic">This field is required</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="time" className="block text-avista3 font-bold mb-2">Check-In Time</label>
              <input {...register("time", { required: true })} type="time" className="form-input w-full px-4 py-2 border text-avista2 rounded-md" id="time" />
              {errors.date && <span className="text-avista3 text-xs italic">This field is required</span>}
            </div>

            <div className="mb-4">
              <label htmlFor="guests" className="block text-avista3 font-bold mb-2">Number of Guests</label>
              <input {...register("guests", { required: true, min: 1 })} type="number" className="form-input w-full text-avista2 font-bold px-4 py-2 border rounded-md" id="guests" />
              {errors.guests && errors.guests.type === "required" && <span className="text-text-avista2 text-xs italic">This field is required</span>}
              {errors.guests && errors.guests.type === "min" && <span className="text-text-avista2 text-xs italic">Please enter a number greater than zero</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="hut" className="block text-avista3 font-bold mb-2">Type Of Daycation</label>
              <select value={daycationType} onChange={(e) => setDaycationType(e.target.value)} className="w-full text-avista2 font-bold px-4 py-2 border rounded-md">
          <option value="">Select Daycation Type</option>
          <option value="swimming pool for adult">1 Swimming Pool For Adult</option>
          <option value="swimming pool for kids">2 Swimming Pool For Kids</option>
          <option value="gate pass for adult">3 Gate Pass For Adult</option>
          <option value="gate pass for children">4 Gate Pass For Children</option>
          
          </select>
            </div>
            <div className="flex items-center pb-4  justify-center">
              <button type="submit" className="bg-avista hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Book Now
              </button>
            </div>
          </form>
          )}
      </div>
        </motion.main>
      </div>
    );
  };
  
  export default daypassbookings;
  