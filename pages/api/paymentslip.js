import nodemailer from 'nodemailer';
import multer from 'multer';

// Configure Multer storage and file filter
const storage = multer.memoryStorage();
const fileFilter = (req, file, cb) => {
  // Accept any file format
  cb(null, true);
};
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 200 * 1024 * 1024, // 200MB limit
  },
}).single('file');

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process the POST request
    // ...

    upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred during file upload
        if (err.code === 'LIMIT_FILE_SIZE') {
          return res.status(400).json({ message: 'File size exceeds the limit' });
        } else {
          return res.status(500).json({ message: 'File upload error' });
        }
      } else if (err) {
        // An unknown error occurred during file upload
        return res.status(500).json({ message: 'An error occurred' });
      }

      // File upload successful
      const { file } = req;
      const { email } = req.body;

      // Check if the required fields are provided
      if (!file || !email) {
        return res.status(400).json({ message: 'Invalid request' });
      }

      // Configure the Nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'space1empire@gmail.com',
          pass: 'fjvjfoiurjtgnems',
        },
      });

      try {
        // Send email with the payment slip attachment
        const info = await transporter.sendMail({
          from: 'space1empire@gmail.com',
          to: 'pablooflagos@gmail.com',
          subject: 'Payment Slip',
          text: 'Please find attached the payment slip.',
          attachments: [
            {
              filename: file.originalname,
              content: file.buffer,
            },
          ],
        });

        console.log('Message sent: %s', info.messageId);
        res.status(200).json({ message: 'Payment slip sent successfully' });
      } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'An error occurred while sending the payment slip' });
      }
    });
  } else {
    // Handle unsupported methods
    const response = {
      error: {
        message: 'Method Not Allowed',
      },
    };
    res.status(405).json(response);
  }
}
