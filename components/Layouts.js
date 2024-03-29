import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import LastSection from './LastSection'
import HeroBanner from './HeroBanner'
import WhatsAppChat from '../components/WhatsAppChat'


const Layouts = ({children}) => {
  return (
    <div  className='bg-avista'>
      <Navbar />
      <WhatsAppChat />
      {children}
      <LastSection />
      <Footer />
    </div>
  )
}

export default Layouts
