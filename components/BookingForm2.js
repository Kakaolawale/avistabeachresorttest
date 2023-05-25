import React, { useState } from 'react';

const BookingForm2 = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [file, setFile] = useState(null);
  const [bookingComplete2, setBookingComplete2] = useState(false);

  const handleSubmition = async (event) => {
    event.preventDefault();
    const bookingData = {
      fullName,
      email,
      phoneNumber,
      address,
      country,
      file,
    };

    try {
      const response = await fetch('/api/bookings2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        setBookingComplete2(true);
        resetForm();
      } else {
        console.error('Failed to submit booking form');
      }
    } catch (error) {
      console.error('Error submitting booking form', error);
    }
  };

  const resetForm = () => {
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setAddress('');
    setCountry('');
    setFile(null);
  };

  if (bookingComplete2) {
    setTimeout(() => {
      setBookingComplete2(true);
    }, 3000);

    return (
      <div>
        <h1>Booking completed successfully!</h1>
        <p>Avista team will get back shortly, stay tuned...</p>
      </div>
    );
  }

  return (
    <div className='lg:mt-4 sm:mb-30 pt-10'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col md:flex-row shadow-xl backdrop-blur-lg items-center md:items-center mx-8 my-4 rounded-lg md:mx-4 md:rounded-2xl bg-gradient-to-br from-avista via-avista2 py-4 mt-4 text-avista3'
      >
        <label className='md:mx-8 my-3 font-bold'>
          <span className='mr-3'>Full Name</span>
          <input
            type='text'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className='text-avista2 px-4 rounded-lg'
          />
        </label>
        <label className='my-3 md:mx-2 font-bold'>
          <span className='mr-3'>Email Address</span>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='text-avista2 px-4 rounded-lg'
          />
        </label>
        <label className='my-3 md:mx-2 font-bold'>
          <span className='mr-3'>Phone Number</span>
          <input
            type='tel'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className='text-avista2 px-4 rounded-lg'
          />
        </label>
        <label className='my-3 md:mx-2 font-bold'>
          <span className='mr-3'>Address</span>
          <input
            type='text'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className='text-avista2 px-4 rounded-lg'
          />
        </label>      
        <label className='my-3 md:mx-2 font-bold'>
          <span className='mr-3'>Country</span>
          <input
            type='text'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className='text-avista2 px-4 rounded-lg'
          />
        </label>
        <label className='my-3 md:mx-2 font-bold'>
          <span className='mr-3'>Upload Payment Reciept</span>
          <input
            type='file'
            onChange={(e) => setFile(e.target.files[0])}
            className='text-avista2 px-4 rounded-lg'
          />
        </label>
        <div className='bg-avista rounded-xl my-3 md:mx-8'>
          <button type='submit' className='py-1 px-2 text-avista3 font-semibold text-sm'>
            BOOK NOW
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm2;

