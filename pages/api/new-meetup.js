import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup

// the name of the function can be anything but it must be exported as default
async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect('mongodb+srv://Sam:Q0tqIcdQL6tMw3dS@cluster0.lmjhspc.mongodb.net/meetups?retryWrites=true&w=majority');

    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close(); //close the database connection

    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;
