import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BasicChart = ({ data }) => {
  // Simple count of passengers by class
  const classCounts = {
    'First Class': data.filter(p => p.Pclass === 1).length,
    'Second Class': data.filter(p => p.Pclass === 2).length,
    'Third Class': data.filter(p => p.Pclass === 3).length,
  };

  const chartData = {
    labels: Object.keys(classCounts),
    datasets: [
      {
        label: 'Number of Passengers',
        data: Object.values(classCounts),
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 206, 84, 0.6)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 84, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Passengers by Class',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BasicChart;
