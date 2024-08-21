const express = require('express');
const router = express.Router();

// Example endpoint for new customers added over time
router.get('/new-customers', async (req, res) => {
  try {
    const data = {
      labels: ['January', 'February', 'March', 'April'],
      values: [20, 30, 25, 40]
    };
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Example endpoint for number of repeat customers
router.get('/repeat-customers', async (req, res) => {
  try {
    const data = {
      labels: ['January', 'February', 'March', 'April'],
      values: [15, 25, 20, 35]
    };
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Example endpoint for geographical distribution of customers
router.get('/locations', async (req, res) => {
  try {
    const data = [
      { lat: 40.7128, lng: -74.0060, name: 'New York' },
      { lat: 34.0522, lng: -118.2437, name: 'Los Angeles' }
    ];
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Example endpoint for customer lifetime value by cohorts
router.get('/lifetime-value', async (req, res) => {
  try {
    const data = {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      values: [5000, 7000, 6000, 8000]
    };
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

module.exports = router;
