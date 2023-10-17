import React, { useEffect, useRef } from 'react';
import { Chart, Title, Tooltip, Legend, CategoryScale, ArcElement } from 'chart.js';
import 'chart.js/auto';

function PieChart(props) {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    if (chartInstance) {
      chartInstance.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

    Chart.register(CategoryScale, Title, Tooltip, Legend, ArcElement);

    const data = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
        borderWidth: [1, 10,20], // Set the width of the slices at each index
      }]
    };

    chartInstance = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: {
        responsive: false,
      },
    });
  }, []);

  return (
    <div>
      <canvas ref={chartRef} style={{ height: '200px' }} />
    </div>
  );
}

export default PieChart;
