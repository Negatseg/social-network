// routes.js
const router = require('express').Router();
const Thought = require('./models/thought');



// GET thoughts
router.get('/thoughts', async (req, res) => {
  const thoughts = await Thought.find();
  res.json(thoughts);
});

// ...


  
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
  


module.exports = router;

