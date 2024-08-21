import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend, 
  PointElement // Import PointElement 
} from 'chart.js';

// Registering required components in ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement // Register PointElement
);

const Chart = ({ title }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    // Mock data for testing purposes
    const mockData = {
      labels: ["January", "February", "March", "April", "May"],
      values: [65, 59, 80, 81, 56]
    };

    setData({
      labels: mockData.labels,
      datasets: [
        {
          label: title,
          data: mockData.values,
          borderColor: 'rgba(75,192,192,1)',
          backgroundColor: 'rgba(75,192,192,0.2)',
        },
      ],
    });
  }, [title]);

  return data.labels ? <Line data={data} /> : <p>Loading chart data...</p>;
};

export default Chart;
