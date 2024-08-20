const Order = require('../models/orders');

exports.getTotalSales = async (req, res) => {
  try {
    const dailySales = await Order.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$created_at" } },
          total_sales: { $sum: "$total_price_set.shop_money.amount" }
        }
      },
      { $sort: { _id: 1 } }
    ]);
    res.json({ daily: dailySales });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
