const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/moviesdb';

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB successfully');
});
module.exports = {
    url: 'mongodb://localhost:27017/moviesdb', 
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  };
  