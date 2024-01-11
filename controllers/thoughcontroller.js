const { User, Thought } = require('../models');

const  thoughtController = {

  // GET thoughts
  async getThoughts(req, res) {
    const thoughts = await Thought.find();
    res.json(thoughts);
  }

}

// ...


  
  // POST thought
//   router.post('/thoughts', async (req, res) => {
//     const newThought = new Thought(req.body);
//     await newThought.save();
//     res.json(newThought);
//   });
  
//   // PUT thought update
//   router.put('/thoughts/:thoughtId', async (req, res) => {
//     const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
//     res.json(updatedThought);
//   });
  
//   // DELETE thought
//   router.delete('/thoughts/:thoughtId', async (req, res) => {
//     await Thought.findByIdAndDelete(req.params.thoughtId);
//     res.json({ message: 'Thought deleted successfully' });
//   });
  
 
// // POST reaction to thought
// router.post('/thoughts/:thoughtId/reactions', async (req, res) => {
//     const thought = await Thought.findById(req.params.thoughtId);
//     thought.reactions.push(req.body.reaction);
//     await thought.save();
//     res.json(thought);
//   });
  
//   // DELETE reaction from thought
//   router.delete('/thoughts/:thoughtId/reactions/:reactionId', async (req, res) => {
//     const thought = await Thought.findById(req.params.thoughtId);
//     thought.reactions.pull(req.params.reactionId);
//     await thought.save();
//     res.json(thought);
//   });
  


module.exports = thoughtController;



// module.exports = {
//   // Get all courses
//   async getCourses(req, res) {
//     try {
//       const courses = await Course.find();
//       res.json(courses);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
//   // Get a course
//   async getSingleCourse(req, res) {
//     try {
//       const course = await Course.findOne({ _id: req.params.courseId })
//         .select('-__v');

//       if (!course) {
//         return res.status(404).json({ message: 'No course with that ID' });
//       }

//       res.json(course);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
//   // Create a course
//   async createCourse(req, res) {
//     try {
//       const course = await Course.create(req.body);
//       res.json(course);
//     } catch (err) {
//       console.log(err);
//       return res.status(500).json(err);
//     }
//   },
//   // Delete a course
//   async deleteCourse(req, res) {
//     try {
//       const course = await Course.findOneAndDelete({ _id: req.params.courseId });

//       if (!course) {
//         return res.status(404).json({ message: 'No course with that ID' });
//       }

//       await Student.deleteMany({ _id: { $in: course.students } });
//       res.json({ message: 'Course and students deleted!' });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
//   // Update a course
//   async updateCourse(req, res) {
//     try {
//       const course = await Course.findOneAndUpdate(
//         { _id: req.params.courseId },
//         { $set: req.body },
//         { runValidators: true, new: true }
//       );

//       if (!course) {
//         return res.status(404).json({ message: 'No course with this id!' });
//       }

//       res.json(course);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
// };
