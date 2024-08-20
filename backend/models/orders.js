const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  total_price_set: {
    shop_money: { amount: Number }
  },
  created_at: { type: Date, default: Date.now },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'ShopifyCustomer' }
});

module.exports = mongoose.model('ShopifyOrder', orderSchema);
