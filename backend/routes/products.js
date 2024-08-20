const express = require('express');
const { getProductData } = require('../controllers/productcontrollers');
const router = express.Router();

router.get('/data', getProductData);

module.exports = router;
