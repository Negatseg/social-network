// routes.js
const router = require('express').Router();
const {
  getThoughts
} = require('../../controllers/thoughcontroller');

router.route('/').get(getThoughts)



module.exports = router;