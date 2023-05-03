import Head from 'next/head'
import SectionBanner from '../components/SectionBanner'
import BeachDescription from '../components/BeachDescription'
import PictureSlider from '../components/PictureSlider'
import PictureSlider2 from '../components/PictureSlider2'
import PictureSlider3 from '../components/PictureSlider3'
import PageSection1 from '../components/PageSection1'
import ResortSection from '../components/ResortSection'
import Team from '../components/Team'


import VideoBanner from '../components/VideoBanner'
import SectionBanner3 from '../components/SectionBanner3'
import Testimonial from '../components/Testimonial'
import VerticalLine from '../components/VerticalLine'
import CircleVector from '../components/CircleVector'
import { motion } from "framer-motion";
import MapSection from '../components/MapSection'

export default function Home() {
  

  return (
    
    
    <div className='bg-avista hover:bg-avista2'>
      <Head>
        <title>Avista Beach Resort</title>
        <meta name="description" content="Avista beach resort. The beyond the sea experience." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
     < motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            >
      
      
      
      
      <PictureSlider />
      <div className="flex items-center mt-4 justify-center h-48">
      <VerticalLine />
      </div>
      <div className='flex mb-8 items-center justify-center'>
      <CircleVector />
      </div>
      <div className="container mx-auto">
      <BeachDescription 
      name="Avista Beach Resort"
      imageSrc="/images/avistahero5.jpg"
      description="Welcome to Avista Beach Resort, where paradise meets luxury. Nestled along the pristine shores of a sun-kissed beach, our resort offers a blissful escape from the ordinary. With an array of exquisite amenities and breathtaking views, Avista Beach Resort is the ultimate destination for your dream beach getaway."
      hasWifi={true}
      hasPool={true}
      hasBeachUmbrellas={true}
      hasRestaurant={true}
      hasSpa={true}
      />
      </div>
      <VideoBanner />
      <PictureSlider3 />
      <div className="flex items-center justify-center h-48">
      <VerticalLine />
      </div>
      <div className='flex mb-8 items-center justify-center'>
      <CircleVector />
      </div>
      <ResortSection />
      
      <div className="flex items-center mt-4 justify-center h-48">
      <VerticalLine />
      </div>
      <div className='flex items-center justify-center'>
      <CircleVector />
      </div>
      <PictureSlider2 />
      <div className="flex items-center mt-4 justify-center h-48">
      <VerticalLine />
      </div>
      <div className='flex items-center justify-center'>
      <CircleVector />
      </div>
      <SectionBanner3 />
      <PageSection1 />
      <Team />
      <SectionBanner />
      <Testimonial />
      <MapSection />
      </motion.main>
       
      </div>
     
  )
}
