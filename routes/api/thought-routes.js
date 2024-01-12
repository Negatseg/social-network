// routes.js
const router = require('express').Router();
const {
  getThoughts
} = require('../../controllers/thoughcontroller');

router.route('/').get(getThoughts)

//const router = require('express').Router();
const {
  createThoughts
} = require('../../controllers/thoughcontroller');

router.route('/').post(createThoughts)


const {
  updateThought
} = require('../../controllers/thoughcontroller');

router.route('/').put(updateThought)


const {
  deleteThought
} = require('../../controllers/thoughcontroller');

router.route('/').delete(deleteThought)




module.exports = router;