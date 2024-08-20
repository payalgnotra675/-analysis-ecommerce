const express = require('express');
const { getNewCustomers, getGeographicalDistribution } = require('../controllers/customersController');
const router = express.Router();

router.get('/new-customers', getNewCustomers);
router.get('/geo-distribution', getGeographicalDistribution);

module.exports = router;
