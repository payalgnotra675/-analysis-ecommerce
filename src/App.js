import React from 'react';
import Chart from './components/Chart';
import MapComponent from './components/Map';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Data Visualization Dashboard</h1>
      <h2>Total Sales Over Time</h2>
      <Chart url="/api/orders/total-sales" title="Total Sales" />
      <h2>Sales Growth Rate Over Time</h2>
      <Chart url="/api/orders/sales-growth-rate" title="Sales Growth Rate" />
      <h2>New Customers Added Over Time</h2>
      <Chart url="/api/customers/new-customers" title="New Customers" />
      <h2>Number of Repeat Customers</h2>
      <Chart url="/api/customers/repeat-customers" title="Repeat Customers" />
      <h2>Geographical Distribution of Customers</h2>
      <MapComponent url="/api/customers/locations" />
      <h2>Customer Lifetime Value by Cohorts</h2>
      <Chart url="/api/customers/lifetime-value" title="Customer Lifetime Value" />
    </div>
  );
}

export default App;
