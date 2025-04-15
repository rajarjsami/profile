import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SkillsChart = () => {
  // Gradient background (optional)
  const createGradient = (ctx) => {
    const gradient = ctx.createLinearGradient(0, 0, 400, 0); // horizontal gradient
    gradient.addColorStop(0, '#ff7f50');
    gradient.addColorStop(0.5, '#ff6347');
    gradient.addColorStop(1, '#ff4500');
    return gradient;
  };

  const data = {
    labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Tailwind'],
    datasets: [
      {
        label: 'Skill Level (%)',
        data: [90, 85, 75, 80, 70, 60, 95],
        backgroundColor: function (context) {
          const ctx = context.chart.ctx;
          return createGradient(ctx);
        },
        borderWidth: 1,
        borderRadius: 50,
        barThickness: 30,
        hoverBackgroundColor: '#3b82f6',
        hoverBorderColor: '#000',
        hoverBorderWidth: 2,
      },
    ],
  };

  const options = {
    indexAxis: 'y', // ✅ horizontal bar
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Web Development Skills',
        font: {
          size: 20,
        },
        padding: {
          top: 10,
          bottom: 20,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    animation: {
      duration: 1200,
      easing: 'easeOutQuart',
    },
  };

  return (
    <div id='skills' className='skills w-full max-w-4xl mx-auto px-4 py-8'>
    <div className="w-full overflow-x-auto">
      <Bar 
        data={data} 
        options={{
          ...options,
          responsive: true,
          maintainAspectRatio: false, // allows height control
        }} 
        height={400} // set height only if maintainAspectRatio is false
      />
    </div>
  </div>
  
  );
};

export default SkillsChart;
