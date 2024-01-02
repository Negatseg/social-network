// routes.js
const express = require('express');
const router = express.Router();
const User = require('./models/user');
const Thought = require('./models/thought');

// GET users
router.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// GET thoughts
router.get('/thoughts', async (req, res) => {
  const thoughts = await Thought.find();
  res.json(thoughts);
});

// ...

// POST user
router.post('/users', async (req, res) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.json(newUser);
  });
  
  // PUT user update
  router.put('/users/:userId', async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
    res.json(updatedUser);
  });
  
  // DELETE user
  router.delete('/users/:userId', async (req, res) => {
    await User.findByIdAndDelete(req.params.userId);
    res.json({ message: 'User deleted successfully' });
  });
  
  // POST thought
  router.post('/thoughts', async (req, res) => {
    const newThought = new Thought(req.body);
    await newThought.save();
    res.json(newThought);
  });
  
  // PUT thought update
  router.put('/thoughts/:thoughtId', async (req, res) => {
    const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
    res.json(updatedThought);
  });
  
  // DELETE thought
  router.delete('/thoughts/:thoughtId', async (req, res) => {
    await Thought.findByIdAndDelete(req.params.thoughtId);
    res.json({ message: 'Thought deleted successfully' });
  });
  
  module.exports = router;
  // routes.js continued
// ...

// POST reaction to thought
router.post('/thoughts/:thoughtId/reactions', async (req, res) => {
    const thought = await Thought.findById(req.params.thoughtId);
    thought.reactions.push(req.body.reaction);
    await thought.save();
    res.json(thought);
  });
  
  // DELETE reaction from thought
  router.delete('/thoughts/:thoughtId/reactions/:reactionId', async (req, res) => {
    const thought = await Thought.findById(req.params.thoughtId);
    thought.reactions.pull(req.params.reactionId);
    await thought.save();
    res.json(thought);
  });
  
  // POST friend to user's friend list
  router.post('/users/:userId/friends', async (req, res) => {
    const user = await User.findById(req.params.userId);
    user.friends.push(req.body.friendId);
    await user.save();
    res.json(user);
  });
  
  // DELETE friend from user's friend list
  router.delete('/users/:userId/friends/:friendId', async (req, res) => {
    const user = await User.findById(req.params.userId);
    user.friends.pull(req.params.friendId);
    await user.save();
    res.json(user);
  });
  
  module.exports = router;

module.exports = router;

