// ObjectId() method for converting studentId string into an ObjectId for querying database
const { User, Thought } = require('../models');

const userController = {

  async getUsers(req, res) {
    const users = await User.find().select('-__v');
    res.json(users);
  },

  async getSingleUser(req, res) {
    const singleUser = await User.findOne({
      _id: req.params.userId
    })
      .select('-__v')
    // .populate('friends').populate('thoughts')
    res.json(singleUser)
  },

  async createUser(req, res) {
    const newUser = await User.create(req.body)
    res.json(newUser)
  },

  async updateUser(req, res) {
    const modifyUser = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
    if(!modifyUser) {return res.status(404).json({message:"user not found"})}
    res.json(modifyUser)
  },

  async deleteUser(req,res) {
    const removeUser = await User.findOneAndDelete(
      {_id: req.params.userId}
    )
    if(!removeUser) {return res.status(404).json({message:"user not found"})}
    res.json({message: "user deleted"})
  },

  // addFriend
  async addFriend(req, res) {
    const newFriend = await User.create(req.body)
    res.json(newFriend)
  },


  //removeFriend

  async removeFriend(req,res) {
    const removeFriend = await User.findOneAndDelete(
      {_id: req.params.userId}
    )
    if(!removeFriend) {return res.status(404).json({message:"Friend not found"})}
    res.json({message: "Friend Removed"})
  },


}


// POST user
// router.post('/users', async (req, res) => {
//   const newUser = new User(req.body);
//   await newUser.save();
//   res.json(newUser);
// });

// // PUT user update
// router.put('/users/:userId', async (req, res) => {
//   const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
//   res.json(updatedUser);
// });

// // DELETE user
// router.delete('/users/:userId', async (req, res) => {
//   await User.findByIdAndDelete(req.params.userId);
//   res.json({ message: 'User deleted successfully' });
// });



// // POST friend to user's friend list
// router.post('/users/:userId/friends', async (req, res) => {
//   const user = await User.findById(req.params.userId);
//   user.friends.push(req.body.friendId);
//   await user.save();
//   res.json(user);
// });

// // DELETE friend from user's friend list
// router.delete('/users/:userId/friends/:friendId', async (req, res) => {
//   const user = await User.findById(req.params.userId);
//   user.friends.pull(req.params.friendId);
//   await user.save();
//   res.json(user);
// });

// Execute the aggregate method on the Student model and calculate the overall grade by using the $avg operator
// const grade = async (studentId) =>
//   Student.aggregate([
//     {
//       // Your code here
//     },
//     {
//       $unwind: '$assignments',
//     },

//     {
//       // Your code here
//     },
//   ]);

// module.exports = {
//   // Get all students
//   async getStudents(req, res) {
//     try {
//       const students = await Student.find();
//       const studentObj = {
//         students,
//         headCount: await headCount(),
//       };
//       return res.json(studentObj);
//     } catch (err) {
//       console.log(err);
//       return res.status(500).json(err);
//     }
//   },
//   // Get a single student
//   async getSingleStudent(req, res) {
//     try {
//       const student = await Student.findOne({ _id: req.params.studentId })
//         .select('-__v')
//         .lean();

//       if (!student) {
//         return res.status(404).json({ message: 'No student with that ID' });
//       }

//       res.json({
//         student,
//         grade: await grade(req.params.studentId),
//       });
//     } catch (err) {
//       console.log(err);
//       return res.status(500).json(err);
//     }
//   },
//   // create a new student
//   async createStudent(req, res) {
//     try {
//       const student = await Student.create(req.body);
//       res.json(student);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
//   // Delete a student and remove them from the course
//   async deleteStudent(req, res) {
//     try {
//       const student = await Student.findOneAndRemove({ _id: req.params.studentId });

//       if (!student) {
//         return res.status(404).json({ message: 'No such student exists' })
//       }

//       const course = await Course.findOneAndUpdate(
//         { students: req.params.studentId },
//         { $pull: { students: req.params.studentId } },
//         { new: true }
//       );

//       if (!course) {
//         return res.status(404).json({
//           message: 'Student deleted, but no courses found',
//         });
//       }

//       res.json({ message: 'Student successfully deleted' });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   },

//   // Add an assignment to a student
//   async addAssignment(req, res) {
//     try {
//       console.log('You are adding an assignment');
//       console.log(req.body);
//       const student = await Student.findOneAndUpdate(
//         { _id: req.params.studentId },
//         { $addToSet: { assignments: req.body } },
//         { runValidators: true, new: true }
//       );

//       if (!student) {
//         return res
//           .status(404)
//           .json({ message: 'No student found with that ID :(' })
//       }

//       res.json(student);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
//   // Remove assignment from a student
//   async removeAssignment(req, res) {
//     try {
//       const student = await Student.findOneAndUpdate(
//         { _id: req.params.studentId },
//         { $pull: { assignment: { assignmentId: req.params.assignmentId } } },
//         { runValidators: true, new: true }
//       );

//       if (!student) {
//         return res
//           .status(404)
//           .json({ message: 'No student found with that ID :(' });
//       }

//       res.json(student);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
// };

module.exports = userController