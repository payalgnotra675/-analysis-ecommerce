const ShopifyCustomer = require('../models/customers');

// Get New Customers Added Over Time
exports.getNewCustomers = async (req, res) => {
  try {
    // Your logic here
    res.status(200).json({ message: "New customers data" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Number of Repeat Customers
exports.getRepeatCustomers = async (req, res) => {
  try {
    // Your logic here
    res.status(200).json({ message: "Repeat customers data" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
