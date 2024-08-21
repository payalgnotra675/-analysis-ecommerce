const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  first_purchase_month: String,
  total_value: Number,
  // Other fields as needed
});

module.exports = mongoose.model('Product', productSchema);
