const express = require('express');
const { getTotalSales, getSalesGrowthRate, getRepeatCustomers } = require('../controllers/ordersController');
const router = express.Router();

router.get('/total-sales', getTotalSales);
router.get('/sales-growth-rate', getSalesGrowthRate);
router.get('/repeat-customers', getRepeatCustomers);

module.exports = router;
