const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ordersRoutes = require('../routes/orders');
const customersRoutes = require('../routes/customers');
const productsRoutes = require('../routes/products');
const app = express();

app.use(cors()); // Add this line to handle CORS issues
app.use(express.json());

app.use('/api/orders', ordersRoutes);
app.use('/api/customers', customersRoutes);
app.use('/api/products', productsRoutes);

mongoose.connect('mongodb+srv://db_user_read:LdmrVA5EDEv4z3Wr@cluster0.n10ox.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
