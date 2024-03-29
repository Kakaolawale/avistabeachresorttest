import Image from "next/image";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useRouter } from 'next/router';


const beachhutsbookings = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]);
  const [numberOfHuts, setNumberOfHuts] = useState('');
  const [bookingSubmitted, setBookingSubmitted] = useState(false); // New state variable




  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const endpoint = '/api/hutsbookings'; // Update the endpoint URL

      const formData = {
        ...data,
        numberOfHuts,
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
      '/images/avistapics16.jpg',
      '/images/avistabeach1.jpg',
      '/images/avistadaypass1.jpg',
      '/images/avistanow6.jpg',
      
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
        <h2 className="text-3xl font-extrabold text-avista3 text-center tracking-tight mb-8">BEACH HUTS BOOKING</h2>
        <h2 className="text-center font-bold text-lg text-avista3 pb-2">
        N35,000 From 7AM-7PM Per Hut
        </h2>
        <hr className="text-avista3" />
        <h2 className="text-center pb-4 text-avista3"> 
        N35,000 From 7PM-7AM Per Hut
       </h2>
       <h2 className="text-center pb-4 text-avista3"> 
       Fill the booking form below to make reservation.
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
  <label htmlFor="checkoutDate" className="block text-avista3 font-bold mb-2">Check-Out Date</label>
  <input {...register("checkoutDate", { required: true })} type="date" className="form-input w-full px-4 py-2 border text-avista2 rounded-md" id="checkoutDate" />
  {errors.checkoutDate && <span className="text-avista3 text-xs italic">This field is required</span>}
</div>
<div className="mb-4">
  <label htmlFor="checkoutTime" className="block text-avista3 font-bold mb-2">Check-Out Time</label>
  <input {...register("checkoutTime", { required: true })} type="time" className="form-input w-full px-4 py-2 border text-avista2 rounded-md" id="checkoutTime" />
  {errors.checkoutTime && <span className="text-avista3 text-xs italic">This field is required</span>}
</div>



<div className="mb-4">
  <label htmlFor="phone" className="block text-avista3 font-bold mb-2">Phone Number</label>
  <input {...register("phone")} type="tel" className="form-input w-full px-4 py-2 border text-avista2 rounded-md" id="phone" />
  {errors.phone && errors.phone.type === "required" && <span className="text-avista3 text-xs italic">This field is required</span>}
  {errors.phone && errors.phone.type === "pattern" && <span className="text-avista3 text-xs italic">Please enter a valid phone number</span>}
</div>







            <div className="mb-4">
              <label htmlFor="guests" className="block text-avista3 font-bold mb-2">Number of Guests</label>
              <input {...register("guests", { required: true, min: 1 })} type="number" className="form-input w-full text-avista2 font-bold px-4 py-2 border rounded-md" id="guests" />
              {errors.guests && errors.guests.type === "required" && <span className="text-text-avista2 text-xs italic">This field is required</span>}
              {errors.guests && errors.guests.type === "min" && <span className="text-text-avista2 text-xs italic">Please enter a number greater than zero</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="hut" className="block text-avista3 font-bold mb-2">Number Of Huts</label>
              <select value={numberOfHuts} onChange={(e) => setNumberOfHuts(e.target.value)} className="w-full text-avista2 font-bold px-4 py-2 border rounded-md">
          <option value="">Select Number Of Huts</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
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
  
  export default beachhutsbookings;
  