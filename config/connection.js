const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/social_network', { useNewUrlParser: true, useUnifiedTopology: true });


module.exports = mongoose.connection