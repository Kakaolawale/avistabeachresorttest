import Image from "next/image";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const daypassbookings = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]);
  const [daycationType, setDaycationType] = useState('');

  const activities = [
    {
      title: 'Swimming Pool For Adult',
      price: 2000,
    },
    {
      title: 'Swimming Pool For Kids',
      price: 1000,
    },
    {
      title: 'Gate Pass For Adult',
      price: 3000,
    },
    {
      title: 'Gate Pass For Kids',
      price: 1000,
    },
    {
      title: 'Beach Hut',
      price: 25000,
    },
  ];
  const [ageSelections, setAgeSelections] = useState({});

  const handleAgeChange = (activityTitle, e) => {
    setAgeSelections((prevSelections) => ({
      ...prevSelections,
      [activityTitle]: e.target.value,
    }));
  };


  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    // Load images from the images folder
    const imagePaths = [
      "/images/avistadaypass1.jpg", 
      "/images/avistadaypass2.jpg", 
      "/images/avistadaypass3.jpg", 
      "/images/avistahero4.jpg", 
      "/images/avistahero2.jpg"
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
    }, 5000);

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
 <div className="bg-avista2 mt-20 mx-4 pb-8 sm:px-8 rounded-lg shadow-lg p-6 text-avista3">
 <h2 className="text-3xl font-extrabold text-gray-900 text-center tracking-tight mb-8">DAYPASS PRICES</h2>
      {activities.map((activity, index) => (
        <div
          key={index}
          className="bg-gray-100 rounded-lg p-4 mb-8 flex justify-between items-center"
        >
          <div>
            <h3 className="text-lg font-semibold">{activity.title}</h3>
            <p className="text-gray-600">Price per day: N{activity.price}</p>
          </div>
          <select
            value={ageSelections[activity.title] || ''}
            onChange={(e) => handleAgeChange(activity.title, e)}
            className="bg-white border text-avista2 border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Age</option>
            <option value="child">Child</option>
            <option value="adult">Adult</option>
            <option value="senior">Senior</option>
          </select>
        </div>
      ))}
    </div>
      <div className="max-w-4xl mx-4 mt-8 bg-gradient-to-br from-avista via-avista2 rounded-xl pt-20 text-avista3 px-8 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center tracking-tight mb-8">DAYPASS BOOKING</h2>
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
        <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input {...register("name", { required: true })} type="text" className="form-input w-full px-4 py-2 border text-avista2 rounded-md" id="name" />
            {errors.name && <span className="text-red-500 text-xs italic">This field is required</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} type="email" className="form-input w-full px-4 py-2 border text-avista2 rounded-md" id="email" />
            {errors.email && errors.email.type === "required" && <span className="text-red-500 text-xs italic">This field is required</span>}
            {errors.email && errors.email.type === "pattern" &&
            <span className="text-red-500 text-xs italic">Please enter a valid email address</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Check-In Date</label>
              <input {...register("date", { required: true })} type="date" className="form-input w-full px-4 py-2 border text-avista2 rounded-md" id="date" />
              {errors.date && <span className="text-red-500 text-xs italic">This field is required</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="time" className="block text-gray-700 font-bold mb-2">Check-In Time</label>
              <input {...register("time", { required: true })} type="time" className="form-input w-full px-4 py-2 border text-avista2 rounded-md" id="time" />
              {errors.date && <span className="text-red-500 text-xs italic">This field is required</span>}
            </div>

            <div className="mb-4">
              <label htmlFor="guests" className="block font-bold mb-2">Number of Guests</label>
              <input {...register("guests", { required: true, min: 1 })} type="number" className="form-input w-full text-avista2 font-bold px-4 py-2 border rounded-md" id="guests" />
              {errors.guests && errors.guests.type === "required" && <span className="text-red-500 text-xs italic">This field is required</span>}
              {errors.guests && errors.guests.type === "min" && <span className="text-red-500 text-xs italic">Please enter a number greater than zero</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="hut" className="block font-bold mb-2">Type Of Daycation</label>
              <select value={daycationType} className='w-full text-avista2 font-bold px-4 py-2 border rounded-md'>
          <option value="">Select Daycation Type</option>
          <option value="swimming pool for adult">1 Swimming Pool For Adult</option>
          <option value="swimming pool for kids">2 Swimming Pool For Kids</option>
          <option value="gate pass for adult">3 Gate Pass For Adult</option>
          <option value="gate pass for children">4 Gate Pass For Children</option>
          <option value="beach hut">5 Beach Hut</option>
          <option value="beach hut">1,2,3,4&5</option>
          <option value="beach hut">1,2,3&4</option>
          <option value="beach hut">1,2&3</option>
          <option value="beach hut">1&2</option>
          </select>
            </div>
            <div className="flex items-center pb-4  justify-center">
              <button type="submit" className="bg-avista hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Book Now
              </button>
            </div>
          </form>
      </div>
        </motion.main>
      </div>
    );
  };
  
  export default daypassbookings;
  