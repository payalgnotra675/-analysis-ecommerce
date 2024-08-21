import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Chart = ({ title }) => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        // Function to generate random data points
        const generateRandomData = () => {
            const labels = [];
            const data = [];

            // Generate 6 random points
            for (let i = 0; i < 6; i++) {
                labels.push(i.toString());
                data.push(Math.floor(Math.random() * 25)); // Random y value between 0 and 25
            }

            return { labels, data };
        };

        const randomData = generateRandomData();

        const formattedData = {
            labels: randomData.labels,
            datasets: [
                {
                    label: title,
                    data: randomData.data,
                    fill: false,
                    borderColor: 'rgba(75,192,192,1)',
                    tension: 0.1,
                },
            ],
        };

        setChartData(formattedData);
    }, [title]);

    return (
        <div>
            {chartData ? <Line data={chartData} /> : <p>Loading chart...</p>}
        </div>
    );
};

export default Chart;
