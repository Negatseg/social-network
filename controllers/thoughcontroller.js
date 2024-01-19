const { User, Thought } = require('../models');

const  thoughtController = {

  // GET thoughts
  async getThoughts(req, res) {
    const thoughts = await Thought.find();
    res.json(thoughts);
  },
  async getSingleThought(req, res) {
    const singleThought = await Thought.findOne({
      _id: req.params.thoughtId
    })
      .select('-__v')
    // .populate('friends').populate('thoughts')
    res.json(singleThought)
  },


  async createThoughts(req, res) {
    try {
      const newThought = await Thought.create(req.body);
      res.json(newThought);
    } catch (error) {
      // Handle any errors that occurred during creation
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async updateThought(req, res) {
    const modifyThought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
    if(!modifyThought) {return res.status(404).json({message:"Thought not found"})}
    res.json({"message":"Thought Updated"})
  },

  async deleteThought(req,res) {
    const removeThought = await Thought.findOneAndDelete(
      {_id: req.params.thoughtId}
    )
    if(!removeThought) {return res.status(404).json({message:"Thought not found"})}
    res.json({message: "Thought deleted"})
  },

// createReaction
async createReaction(req, res) {
  const updatedThought = await Thought.findByIdAndUpdate(
    { _id: req.params.thoughId },
    { $addToSet: { reactions: { thoughtId: req.params.thoughtId } } },
    { new: true } // Return the updated document
  );
  res.json(updatedThought);
},


// removeReaction
async removeReaction(req, res) {
  const removedReaction = await Thought.findByIdAndUpdate(
    { _id: req.params.thoughId },
    { $pull: { reactions: { thoughtId: req.params.thoughtId } } },
    { new: true } // Return the updated document
  );
  if (!removedReaction) {
    return res.status(404).json({ message: "Reaction not found" });
  }
  res.json({ message: "Reaction Removed" });
},


  

}



  

  
 

  


module.exports = thoughtController;







