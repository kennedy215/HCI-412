// index.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/financeTracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Import routes
const userRoutes = require('./routes/userRoutes');
const financialRecordRoutes = require('./routes/financialRecordRoutes');
const billRoutes = require('./routes/billRoutes');

// Use routes
app.use('/users', userRoutes);
app.use('/financial-records', financialRecordRoutes);
app.use('/bills', billRoutes);

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Finance Tracker API');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});