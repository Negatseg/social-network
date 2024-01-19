// routes.js
const router = require('express').Router();
const {
  getThoughts
} = require('../../controllers/thoughcontroller');

router.route('/').get(getThoughts)

//const router = require('express').Router();
const {
  getSingleThought
} = require('../../controllers/thoughcontroller');

router.route('/:thoughtId').get(getSingleThought)

//const router = require('express').Router();
const {
  createThoughts
} = require('../../controllers/thoughcontroller');

router.route('/').post(createThoughts)


const {
  updateThought
} = require('../../controllers/thoughcontroller');

router.route('/:thoughtId').put(updateThought)


const {
  deleteThought
} = require('../../controllers/thoughcontroller');

router.route('/:thoughtId').delete(deleteThought)


// const {
//   createReaction
// } = require('../../controllers/thoughcontroller');

// router.route('/:thoughId/thoughts/:thoughtId').post(createReaction)


// const {
//   removeReaction
// } = require('../../controllers/thoughcontroller');

// router.route('/:thoughId/thoughts/:thoughtId').delete(removeReaction)

// Route definitions
const { 
  createReaction, removeReaction
 } = require('../../controllers/thoughtcontroller');

router.route('/:thoughId/thoughts/:thoughtId').post(createReaction);
router.route('/:thoughId/thoughts/:thoughtId').delete(removeReaction);


module.exports = router;