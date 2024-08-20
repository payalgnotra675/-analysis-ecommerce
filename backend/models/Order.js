const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  total_price_set: Number,
  created_at: Date,
  customer_id: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('Order', OrderSchema);
