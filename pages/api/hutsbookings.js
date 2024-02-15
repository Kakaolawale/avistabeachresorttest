import nodemailer from 'nodemailer';
import { config } from 'dotenv';

config(); // Load environment variables from .env file



export default async function handler(req, res) {
  if (req.method !== 'POST') {
    // Only allow POST requests
    res.status(405).end('Method Not Allowed');
    return;
  }

  try {
    // Get the form data from the request body
    const { name, email, date, time, guests, numberOfHuts, checkoutDate, checkoutTime, phone  } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      // Configure the transporter with your email service provider details
      service: 'Gmail',
      auth: {
        user: 'avistabeachng@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Compose the email message
    const message = {
      from: 'avistabeachng@gmail.com',
      to: 'dukeofindustry@gmail.com, space1empire@gmail.com, avistabeachng@gmail.com, avistabeachreservation@gmail.com',
      subject: 'New Huts Booking',
      text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Check-In Date: ${date}
      Check-In Time: ${time}
      Check-Out Date: ${checkoutDate}
      Check-Out Time: ${checkoutTime}
      Number of Guests: ${guests}
      Number of Huts: ${numberOfHuts}
      `,
    };

    // Send the email
    await transporter.sendMail(message);

    // Send a success response
    res.status(200).end('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).end('Internal Server Error');
  }
}

