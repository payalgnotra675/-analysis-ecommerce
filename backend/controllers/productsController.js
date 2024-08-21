const Product = require('../models/Product');

exports.getCustomerLifetimeValue = async (req, res) => {
  try {
    const lifetimeValue = await Product.aggregate([
      {
        $group: {
          _id: "$first_purchase_month",
          totalValue: { $sum: "$total_value" }
        }
      }
    ]);
    res.json(lifetimeValue);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
