const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  total_price_set: Number,
  created_at: {
    type: Date,
    default: Date.now
  },
  // Other fields as needed
});

module.exports = mongoose.model('Order', orderSchema);
