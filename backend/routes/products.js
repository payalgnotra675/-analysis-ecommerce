const express = require('express');
const { getCustomerLifetimeValue } = require('../controllers/productsController');
const router = express.Router();

router.get('/lifetime-value', getCustomerLifetimeValue);

module.exports = router;
