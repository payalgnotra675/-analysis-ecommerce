const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  created_at: { type: Date, default: Date.now },
  default_address: {
    city: String
  }
});

module.exports = mongoose.model('ShopifyCustomer', customerSchema);
