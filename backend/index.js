const express = require('express');
const connectDB = require('./config/db');
const ordersRoutes = require('./routes/orders');
const customersRoutes = require('./routes/customers');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/orders', ordersRoutes);
app.use('/api/customers', customersRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
