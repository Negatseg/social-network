// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/social_network', { useNewUrlParser: true, useUnifiedTopology: true });

// Define Mongoose models (User and Thought)
const User = mongoose.model('User', { name: String, email: String, friends: [String] });
const Thought = mongoose.model('Thought', { content: String, reactions: [{ type: String }] });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});