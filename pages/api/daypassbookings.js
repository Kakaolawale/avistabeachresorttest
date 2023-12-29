import nodemailer from 'nodemailer';
import { config } from 'dotenv';

config(); // Load environment variables from .env file

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const {name, email, phone, date, time, guests, daycationType } = req.body;

      // Create a transporter for sending the email
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'avistabeachng@gmail.com', // Replace with your Gmail address environment variable
          pass: process.env.GMAIL_APP_PASSWORD, // Replace with your Gmail app password environment variable
        },
      });

      // Configure the email options
      const mailOptions = {
        from: 'avistabeachng@gmail.com', // Sender's email address
        to: 'space1empire@gmail.com, avistabeachreservation@gmail.com, avistabooking@gmail.com', // Recipient's email address
        subject: 'New Daypass Booking', // Email subject
        text: 
        `New daypass booking details:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}\nDaycation Type: ${daycationType}`, // Email body
      };

      // Send the email
      const result = await transporter.sendMail(mailOptions);

      console.log('Email sent successfully:', result);

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
