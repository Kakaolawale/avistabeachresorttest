import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
import RoomSection from '../../components/RoomSection';
import WhatsAppChat from '../../components/WhatsAppChat';
import Link from 'next/link';


const BookingForm = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [numberOfRooms, setNumberOfRooms] = useState(1);
  const [roomType, setRoomType] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  
  const [bookingComplete, setBookingComplete] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!checkInDate || !checkOutDate || !roomType) {
      setFormError('Please fill in all required fields.');
      return;
    }

    // Reset form error if no validation errors
    setFormError('');

    const bookingData = {
      checkInDate,
      checkOutDate,
      numberOfGuests,
      numberOfRooms,
      roomType,
      fullName,
      email,
      phoneNumber,
      address,
      country,
      
    };

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        setBookingComplete(true);
        resetForm();
      } else {
        console.error('Failed to submit booking form');
      }
    } catch (error) {
      console.error('Error submitting booking form', error);
    }
  };

  const resetForm = () => {
    setCheckInDate('');
    setCheckOutDate('');
    setNumberOfGuests(1);
    setNumberOfRooms(1);
    setRoomType('');
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setAddress('');
    setCountry('');
    
  };

  if (bookingComplete) {
    setTimeout(() => {
      setBookingComplete(true);
    }, 1000);

    return (
      <div>
      
        <div className=" bg-avista2 mx-2 py-4 my-4 rounded-3xl text-center mt-20 ">
        <div className="mx-4 mb-4 font-bold text-base">
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
      <div className="pt-8">
      <Link href="/" className="text-avista2 font-bold text-lg bg-avista3 rounded-3xl px-4 py-4 hover:underline" >
     Go back home
    </Link>
    </div>
      </div>
        
        </div>
      </div>
    );
  }


  return (
    <div className='mt-20 mx-4 bg-gradient-to-bl from-avista via-avista2 rounded-3xl sm:mb-30 pt-10'>
      <RoomSection />
      <div className="mx-4 mb-4 font-bold text-base">
        <h1 className="text-center mb-4 mt-2 font-extrabold text-lg bg-avista3 w-16 h-17 rounded-3xl">1</h1>
      <h1 className="text-avista3 font-thin text-center">
     Fill the form below to make reservation 
        and click the <span className="font-bold">Book Now</span> button.
      </h1>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col md:flex-col shadow-xl backdrop-blur-lg items-center md:items-center my-4 rounded-lg md:mx-2 md:rounded-2xl bg-gradient-to-br from-avista via-avista2 py-4 px-18 mt-4 text-avista3'>
  <label className='flex flex-col my-4 font-bold'>
    <span className='mr-2'>Full Name</span>
    <input
      type='text'
      value={fullName}
      onChange={(e) => setFullName(e.target.value)}
      className='text-avista2 px-1 rounded-lg'
    />
  </label>
  <label className='flex flex-col my-4 md:mx-1 font-bold'>
    <span className='mr-2'>Email Address</span>
    <input
      type='email'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className='text-avista2 px-1 rounded-lg'
    />
  </label>
  <label className='flex flex-col my-4 md:mx-1 font-bold'>
    <span className='mr-2'>Phone Number</span>
    <input
      type='tel'
      value={phoneNumber}
      onChange={(e) => setPhoneNumber(e.target.value)}
      className='text-avista2 px-1 rounded-lg'
    />
  </label>
  <label className='flex flex-col my-4 md:mx-1 font-bold'>
    <span className='mr-2'>Address</span>
    <input
      type='text'
      value={address}
      onChange={(e) => setAddress(e.target.value)}
      className='text-avista2 px-1 rounded-lg'
    />
  </label>
  <label className='flex flex-col my-4 md:mx-1 font-bold'>
    <span className='mr-2'>Country</span>
    <input
      type='text'
      value={country}
      onChange={(e) => setCountry(e.target.value)}
      className='text-avista2 px-1 rounded-lg'
    />
  </label>
  <label className='flex flex-col my-3 font-bold'>
    <span className='mr-2'>Check-In Date</span>
    <input
      type='date'
      value={checkInDate}
      onChange={(e) => setCheckInDate(e.target.value)}
      className='text-avista2 px-1 rounded-lg'
    />
  </label>
  <label className='flex flex-col my-4 font-bold'>
    <span className='mr-2'>Check-Out Date</span>
    <input
      type='date'
      value={checkOutDate}
      onChange={(e) => setCheckOutDate(e.target.value)}
      className='text-avista2 px-1 rounded-lg'
    />
  </label>
  <label className='flex flex-col my-4 font-bold'>
    <span className='mr-2'>No. Rooms</span>
    <input
        type='number'
        value={numberOfRooms}
        onChange={(e) => setNumberOfRooms(e.target.value)}
        className='text-avista2 px-1 rounded-lg'
      />
    </label>
    <label className='flex flex-col my-4 font-bold'>
      <span className='mr-2'>No. Guests</span>
      <input
        type='number'
        value={numberOfGuests}
        onChange={(e) => setNumberOfGuests(e.target.value)}
        className='text-avista2 px-1 rounded-lg'
      />
    </label>
    <label className='flex flex-col my-4 md:mx-1 font-bold'>
      <span className='mr-2'>Room Type</span>
      <select
        value={roomType}
        onChange={(e) => setRoomType(e.target.value)}
        className='text-avista2 px-4 font-bold rounded-lg'
      >
        <option value=''>Select Room Type</option>
        <option value='delux N60,000'>Delux-N60,000</option>
        <option value='executive N80,000'>Executive-N80,000</option>
        <option value='premium 100,000'>Premium-100,000</option>
        <option value='presidential 150,000'>Presidential-150,000</option>
        <option value='beachhut N25,000'>Beachhut-N25,000</option>
      </select>
    </label>
    <div className='bg-avista rounded-xl my-4 ml-10 md:mx-20'>
      <button type='submit' className='py-1 px-5 text-avista3 font-semibold text-sm'>
        BOOK NOW
      </button>
    </div>
    </form>
    
     

   
    </div>
  );
};

export default BookingForm;
