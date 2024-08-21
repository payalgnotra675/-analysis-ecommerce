const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  default_address: {
    city: String
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  // Other fields as needed
});

module.exports = mongoose.model('Customer', customerSchema);
