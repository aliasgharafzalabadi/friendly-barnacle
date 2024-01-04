// db.js
const { MongoClient } = require('mongodb');

// Replace '<your-connection-string>' with your actual MongoDB Atlas connection string
const uri = 'mongodb+srv://<username>:<password>@cluster0.wb80szk.mongodb.net/<database-name>?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
  }
}

connectToDatabase();

module.exports = client;