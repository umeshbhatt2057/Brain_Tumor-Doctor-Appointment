const mongoose = require('mongoose');
require('dotenv').config();

// Explicitly set `strictQuery` to suppress the warning
mongoose.set('strictQuery', false);

const connect = mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on('connected', () => {
  console.log('MongoDB is connected');
});

connection.on('error', (error) => {
  console.error('Error in MongoDB connection:', error.message);
});

module.exports = mongoose;
