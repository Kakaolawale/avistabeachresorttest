import nodemailer from 'nodemailer';
import multer from 'multer';
require('dotenv').config(); // Load environment variables from .env file

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { checkInDate, 
      checkOutDate, 
      numberOfGuests, 
      numberOfRooms, 
      roomType, 
      fullName,
      email,
      phoneNumber,
      address,
      country, } = req.body;

    // Create a transporter with Gmail SMTP details
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'avistabeachng@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD, // Use environment variable for the password
      },
    });

    // Prepare the email message
    const message = {
      from: 'avistabeachng@gmail.com',
      to: 'space1empire@gmail.com, avistabooking@gmail.com', // Set the recipient email as your own email address
      subject: 'New Booking Form Submission',
      text: `
        Check-in Date: ${checkInDate}
        Check-out Date: ${checkOutDate}
        Number of Guests: ${numberOfGuests}
        Number of Rooms: ${numberOfRooms}
        Room Type: ${roomType}
        Full Name: ${fullName}
        Email: ${email}
        Phone Number: ${phoneNumber}
        Address: ${address}
        Country: ${country}
      `,
    };

    try {
      // Send the email
      await transporter.sendMail(message);
      res.status(200).json({ message: 'Booking successful!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'An error occurred while sending the email.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
