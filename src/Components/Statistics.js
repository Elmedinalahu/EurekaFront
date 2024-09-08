// src/components/Statistics.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import './Statistics.css';

const data = {
  labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
  datasets: [
    {
      label: 'Learning Hours',
      data: [1.5, 2.5, 1, 1.5, 4, 3, 2],
      borderColor: '#4b6cb7',
      backgroundColor: 'rgba(75, 108, 183, 0.2)',
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const Statistics = () => {
  return (
    <div className="statistics-container">
      <Line data={data} options={options} />
    </div>
  );
};

export default Statistics;
