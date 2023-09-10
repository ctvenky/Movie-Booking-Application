const User = require('../models/user.model'); // Import the User model
const uuidv4 = require('uuidv4');

exports.signUp = (req, res) => {
  const { first_name, last_name, username, password } = req.body;

  // Generate a UUID for the user
  const uuid = uuidv4();

  // Create a new user object
  const newUser = new User({
    uuid,
    first_name,
    last_name,
    username,
    password,
    isLoggedIn: false, // Default to not logged in
  });

  // Save the user to the database
  newUser.save((err, user) => {
    if (err) {
      return res.status(500).send({ message: 'Error creating user' });
    }
    return res.status(201).json(user);
  });
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  // Find the user by username and password
  User.findOne({ username, password }, (err, user) => {
    if (err) {
      return res.status(500).send({ message: 'Error finding user' });
    }

    if (!user) {
      return res.status(401).send({ message: 'Invalid credentials' });
    }

    // Set isLoggedIn to true for the logged-in user
    user.isLoggedIn = true;

    // Save the updated user object
    user.save((err, updatedUser) => {
      if (err) {
        return res.status(500).send({ message: 'Error updating user' });
      }
      return res.status(200).json(updatedUser);
    });
  });
};

exports.logout = (req, res) => {
  const { uuid } = req.body;

  // Find the user by UUID
  User.findOne({ uuid }, (err, user) => {
    if (err) {
      return res.status(500).send({ message: 'Error finding user' });
    }

    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    // Set isLoggedIn to false for the logged-out user
    user.isLoggedIn = false;

    // Save the updated user object
    user.save((err, updatedUser) => {
      if (err) {
        return res.status(500).send({ message: 'Error updating user' });
      }
      return res.status(200).json(updatedUser);
    });
  });
};

exports.getCouponCode = (req, res) => {
  
  const couponCode = generateCouponCode(); 

  res.status(200).json({ couponCode });
};


exports.bookShow = (req, res) => {
  
  const { userId, showId } = req.body; 

  

  res.status(200).json({ message: 'Show booked successfully' });
};

