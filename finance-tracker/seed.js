// seed.js
const mongoose = require('mongoose');
const User = require('./models/User');
const FinancialRecord = require('./models/FinancialRecord');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Function to create a user and add financial records
async function seedDatabase() {
  try {
    // Creating a new user
    const newUser = new User({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123'
    });

    const savedUser = await newUser.save();
    console.log('User Created:', savedUser);

    // Creating a new financial record
    const newRecord = new FinancialRecord({
      user: savedUser._id,
      type: 'income',
      amount: 5000,
      description: 'Rental Income'
    });

    const savedRecord = await newRecord.save();
    console.log('Financial Record Created:', savedRecord);

    // Adding financial record to user
    savedUser.financialRecords.push(savedRecord._id);
    const updatedUser = await savedUser.save();
    console.log('Updated User with Financial Record:', updatedUser);

    // Populate and display the user's financial records
    const populatedUser = await User.findById(savedUser._id).populate('financialRecords');
    console.log('Populated User:', populatedUser);

  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    mongoose.connection.close(); // Close the connection when done
  }
}

// Run the seed function
seedDatabase();

mongoose.connect('mongodb://127.0.0.1:27017/yourDatabaseName', {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });