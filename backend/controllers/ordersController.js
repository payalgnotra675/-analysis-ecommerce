const Order = require('../models/Order');

exports.getTotalSales = async (req, res) => {
  try {
    const sales = await Order.aggregate([
      {
        $group: {
          _id: {
            year: { $year: "$created_at" },
            month: { $month: "$created_at" },
            day: { $dayOfMonth: "$created_at" }
          },
          totalSales: { $sum: "$total_price_set" }
        }
      },
      { $sort: { "_id.year": 1, "_id.month": 1, "_id.day": 1 } }
    ]);
    res.json(sales);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSalesGrowthRate = async (req, res) => {
  // Implementation for sales growth rate
  try {
    const growthRate = await Order.aggregate([
      // Implement your aggregation pipeline
    ]);
    res.json(growthRate);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
