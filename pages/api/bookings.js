export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { checkInDate, checkOutDate, numberOfGuests, roomType } = req.body;
    // Save booking data to database or external service
    console.log("Received booking:", req.body);
    // Connect to MongoDB
    //const client = await MongoClient.connect(process.env.MONGODB_URI);
   // const db = client.db(process.env.MONGODB_DB);

    // Insert booking data into collection
   // const bookingsCollection = db.collection('bookings');
   //const result = await bookingsCollection.insertOne({
      //checkInDate,
      //checkOutDate,
      //numberOfGuests,
     // roomType,
   // });

    // Close database connection
    //client.close();


    res.status(200).json({ message: 'Booking successful!' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
