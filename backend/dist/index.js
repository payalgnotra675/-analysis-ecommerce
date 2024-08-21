"use strict";

var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var ordersRoutes = require('./routes/orders');
var customersRoutes = require('./routes/customers');
var productsRoutes = require('./routes/products');
var app = express();
app.use(cors()); // Add this line to handle CORS issues
app.use(express.json());
app.use('/api/orders', ordersRoutes);
app.use('/api/customers', customersRoutes);
app.use('/api/products', productsRoutes);
mongoose.connect('mongodb+srv://db_user_read:LdmrVA5EDEv4z3Wr@cluster0.n10ox.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log('MongoDB connected');
})["catch"](function (err) {
  console.error('MongoDB connection error:', err);
});
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT));
});