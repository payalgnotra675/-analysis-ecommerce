const express = require('express');
const router = express.Router();

// Example endpoint for total sales over time
router.get('/total-sales', async (req, res) => {
  try {
    const data = {
      labels: ['January', 'February', 'March', 'April'],
      values: [1000, 2000, 1500, 3000]
    };
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Example endpoint for sales growth rate over time
router.get('/sales-growth-rate', async (req, res) => {
  try {
    const data = {
      labels: ['January', 'February', 'March', 'April'],
      values: [5, 10, 7, 15]
    };
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

module.exports = router;
