import React, { useState } from 'react';

const BookingForm = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [roomType, setRoomType] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [file, setFile] = useState(null);
  const [bookingComplete, setBookingComplete] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const bookingData = {
      checkInDate,
      checkOutDate,
      numberOfGuests,
      roomType,
      fullName,
      email,
      phoneNumber,
      address,
      country,
      file,
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
    setRoomType('');
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setAddress('');
    setCountry('');
    setFile(null);
  };

  if (bookingComplete) {
    setTimeout(() => {
      setBookingComplete(true);
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
    <form onSubmit={handleSubmit} className='flex flex-col md:flex-row shadow-xl backdrop-blur-lg items-center md:items-center 
    mx-8 my-4 rounded-lg md:mx-4 md:rounded-2xl bg-gradient-to-br from-avista via-avista2
     py-4 mt-4 text-avista3' >

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
      
      <label className='md:mx-8 my-3 font-bold'>
        <span className='mr-3'>CHECK-IN DATE</span>
        <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} className='text-avista2 px-4 rounded-lg' />
      </label>
      <label className='my-3 md:mx-2 font-bold'>
      <span className='mr-3'>CHECK-OUT DATE</span>
        <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} className='text-avista2 px-4 rounded-lg' />
      </label>
      <label className='my-3  md:mx-2 font-bold '>
      <span className='mr-3'>NUMBER OF GUESTS</span>
        <input type="number" value={numberOfGuests} onChange={(e) => setNumberOfGuests(e.target.value)} className='text-avista2 px-1 rounded-lg' />
      </label>
      <label className='my-3  md:mx-2 font-bold'>
      <span className='mr-3'>ROOM TYPE</span>
        <select value={roomType} onChange={(e) => setRoomType(e.target.value)} className='text-avista2 px-4 font-bold rounded-lg'>
          <option value="">Select Room Type</option>
          <option value="single">Abadone Shell</option>
          <option value="double">Chiton ShellL</option>
          <option value="suite">Sundial Shell</option>
          <option value="suite">Auger Shell</option>
          <option value="suite">Drup Shell</option>
          <option value="suite">Olivia Shell</option>  
        </select>
      </label>
      <div className='bg-avista rounded-xl my-3 md:mx-8'>
      <button type="submit" className='py-1 px-2
     text-avista3 font-semibold text-sm'>BOOK NOW
     </button>
      </div>
    </form>
    </div>
  );
};

export default BookingForm;
