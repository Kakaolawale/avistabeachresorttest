import React, { useState, useEffect } from 'react';

const BookingForm = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [roomType, setRoomType] = useState('');
  const [bookingComplete, setBookingComplete] = useState(false);

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const bookingData = {
      checkInDate,
      checkOutDate,
      numberOfGuests,
      roomType,
    };

    const response = await fetch('/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });
    const data = await response.json();
    console.log(data);
  };
  
  if (bookingComplete) {
    // Fetch booking data and pass it to NextStage component
    const [bookingData, setBookingData] = useState(null);
    useEffect(() => {
      const fetchBookingData = async () => {
        const response = await fetch("/api/bookings");
        if (response.ok) {
          const data = await response.json();
          setBookingData(data);
        }
      };
      fetchBookingData();
    }, []);



 
  }

  return (
    <div className='lg:mt-4 sm:mb-30 pt-10'>
    <form onSubmit={handleSubmit} className='flex flex-col md:flex-row shadow-xl backdrop-blur-lg items-center md:items-center 
    mx-8 my-4 rounded-lg md:mx-4 md:rounded-2xl bg-gradient-to-br from-avista via-avista2
     py-4 mt-4 text-avista3' >
      
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
