
// routes/orders.js
const express = require('express');
const { getTotalSales } = require('../controllers/ordersController');
const router = express.Router();

router.get('/total-sales', (req, res) => {
  getTotalSales(req, res);
});

module.exports = router;
