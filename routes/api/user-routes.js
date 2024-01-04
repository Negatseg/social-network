// routes.js
const router = require('express').Router();
const User = require('./models/user');


// GET users
router.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
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

