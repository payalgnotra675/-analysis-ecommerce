const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  email: String,
  created_at: Date,
  default_address: {
    city: String,
  },
});

module.exports = mongoose.model('Customer', CustomerSchema);
