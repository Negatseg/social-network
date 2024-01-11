// routes.js
const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  addFriend,
  removeFriend,
} = require('../../controllers/usercontroller');

router.route('/').get(getUsers).post(createUser)

router.route('/:userId').get(getSingleUser).put(updateUser)

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend)

module.exports = router;

