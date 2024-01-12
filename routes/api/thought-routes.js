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



module.exports = router;