const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/web', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema and model for user
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
  address: String,
  email: String,
});

const User = mongoose.model('User', userSchema);

// Serve static files
app.use(express.static('public'));

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  await user.save();
  res.send('User logged in successfully');
});

// Handle sign-up form submission
app.post('/signup', async (req, res) => {
  const { name, username, address, email, password } = req.body;
  const user = new User({ name, username, address, email, password });
  await user.save();
  res.send('User signed up successfully');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
