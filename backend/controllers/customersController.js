const Customer = require('../models/Customer');

exports.getNewCustomers = async (req, res) => {
  try {
    const newCustomers = await Customer.aggregate([
      {
        $group: {
          _id: {
            year: { $year: "$created_at" },
            month: { $month: "$created_at" },
            day: { $dayOfMonth: "$created_at" }
          },
          count: { $sum: 1 }
        }
      },
      { $sort: { "_id.year": 1, "_id.month": 1, "_id.day": 1 } }
    ]);
    res.json(newCustomers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getGeographicalDistribution = async (req, res) => {
  try {
    const distribution = await Customer.aggregate([
      {
        $group: {
          _id: "$default_address.city",
          count: { $sum: 1 }
        }
      }
    ]);
    res.json(distribution);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
