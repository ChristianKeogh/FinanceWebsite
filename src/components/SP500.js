import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const SP500 = () => {
  const [data, setData] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    // Dummy data for testing
    const prices = [10, 20, 30, 40, 50, 60, 70];
    const times = ['10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM'];

    setData(prices);
    setLabels(times);
  }, []);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'S&P 500',
        data: data,
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  return <Line data={chartData} />;
};

export default SP500;