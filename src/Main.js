import React, { useEffect, useRef, useState } from 'react';
import { Chart, CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement } from 'chart.js';
import 'chart.js/auto';

function Main() {
  const chartRef = useRef(null);
  let chartInstance = null; // Store the chart instance.

  const [chartData, setChartData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Monthly Earning',
        data: [60, 45, 150, 70, 90, 30, 100, 150, 130, 115, 105, 125],
        backgroundColor: [
          'rgba(242,239,255,255)',
          'rgba(242,239,255,255)',
          'rgba(242,239,255,255)',
          'rgba(242,239,255,255)',
          'rgba(242,239,255,255)',
          'rgba(242,239,255,255)',
          'rgba(242,239,255,255)',
          '#5a32ea',
          'rgba(242,239,255,255)',
          'rgba(242,239,255,255)',
          'rgba(242,239,255,255)',
          'rgba(242,239,255,255)',
        ],
        borderRadius: 10,
      },
    ],
  });

  useEffect(() => {
    if (chartInstance) {
      chartInstance.destroy(); // Destroy the existing chart instance if it exists.
    }

    const ctx = chartRef.current.getContext('2d');

    Chart.register(CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement);

    chartInstance = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: {
        scales: {
          x: {
            grid: {
              display: false, // Hide vertical grid lines.
            },
          },
          y: {
            grid: {
              display: false, // Hide horizontal grid lines.
            },
            beginAtZero: true,
            display: false, // Hide the left vertical axis line.
          },
        },
      },
    });
  }, [chartData]);

  const handleSelectChange = (e) => {
    if (e.target.value === 'Monthly') {
      // Destroy the existing chart instance
      if (chartInstance) {
        chartInstance.destroy();
      }

      // Update the chart data for Monthly
      setChartData({
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Monthly Earning',
            data: [70, 55, 140, 60, 80, 40, 110, 160, 150, 130, 120, 140],
            backgroundColor: [
              'rgba(242,239,255,255)',
              'rgba(242,239,255,255)',
              'rgba(242,239,255,255)',
              'rgba(242,239,255,255)',
              'rgba(242,239,255,255)',
              'rgba(242,239,255,255)',
              'rgba(242,239,255,255)',
              '#5a32ea',
              'rgba(242,239,255,255)',
              'rgba(242,239,255,255)',
              'rgba(242,239,255,255)',
              'rgba(242,239,255,255)',
            ],
            borderRadius: 10,
          },
        ],
      });
    } else if (e.target.value === 'Quarterly') {
      // Destroy the existing chart instance
      if (chartInstance) {
        chartInstance.destroy();
      }

      // Update the chart data for Quarterly
      setChartData({
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
          {
            label: 'Quarterly Earning',
            data: [320, 280, 400, 360],
            backgroundColor: [
              'rgba(242,239,255,255)',
              'rgba(242,239,255,255)',
              'rgba(242,239,255,255)',
              'rgba(242,239,255,255)',
            ],
            borderRadius: 10,
          },
        ],
      });
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '3.5vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}>
        <div style={{ marginLeft: '2%', fontSize: '1rem', backgroundColor: 'white', padding: '5px' }}>
          <span style={{ fontSize: "150%", fontWeight: 500 }}>Overview</span><br />
        </div>
        <div
          style={{
            marginRight: '2%',
            fontSize: '1rem',
            textAlign: 'right',
            backgroundColor: 'white',
            padding: '5px',
          }}
        >

        </div>
        <div className="select-container" >
          <div className="custom-select">
            <div className="custom-select-wrapper">
              <select name="choose" id="" className="form-select" style={{ background: '#fbfaff', border: 'none', height: '40%', width: '100%', fontSize: '0.9rem' }} onChange={handleSelectChange}>
                <option value="Quarterly">Quarterly</option>
                <option value="Monthly">Monthly</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <canvas style={{ backgroundColor: 'white', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px', marginTop: '0', height: '18vh' }} ref={chartRef} />
    </div>
  );
}

export default Main;
