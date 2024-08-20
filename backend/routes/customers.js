const express = require('express');
const { getNewCustomers, getRepeatCustomers } = require('../controllers/customersController');
const router = express.Router();

router.get('/new-customers', getNewCustomers);
router.get('/repeat-customers', getRepeatCustomers);

module.exports = router;
