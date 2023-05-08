import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";


const PictureSlider2 = () => {

    const images = [
        { url: "/images/avistaroom3.jpg", alt: "Image 1" },
        { url: "/images/avistaroom5.jpg", alt: "Image 2" },
        { url: "/images/avistaroom7.jpg", alt: "Image 3" },
      ];
      


  return (
        <div className='mt-4 bg-gradient-to-bl from-avista via-avista2 rounded-2xl p-5 text-avista3'>
            <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            >
           <h1 className="ml-4 mr-8 mt-8 block pL-20 mb-8 text-4xl tracking-tight font-extrabold text-space1-4 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Welcome to</span>
                <span className="block text-indigo-600 xl:inline">
                  the<span className='text-space1-2'>COOLEST BEACH HOTEL in Okun Ajah!</span>
                </span>
              </h1>
              <div className="block pL-20 mb-8">
            <h1 className="ml-4 mr-8 mt-8 text-space1-4">Avista is more than just a beach resort, 
            it's a project borne out of passion and love to create a new naturally beautiful lifestyle 
            experience beyond the sea. Avista believes there are more imaginative ingredients in the heart 
            of everyone who visit a beach or beach resort like ours, therefore if some of these imaginations 
            can be thought about and carefully detailed and created, Avista will continue to find her need for 
            existence in times like this..</h1>
            
            </div>
      <Slider 
      className='rounded-xl'
      autoplay={true} autoplaySpeed={3000}
      arrows={true}
      dots={true}
      slidesToShow={3}
      responsive={[
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ]}
   >
    {images.map((image) => (
    <div key={image.url}>
      <img src={image.url} alt={image.alt} className='rounded-2xl object-cover' />
    </div>
  ))}
     </Slider>
     </motion.main>
     </div>
  )
}

export default PictureSlider2
