'use client';

import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { SalesData, ChartProps } from '@/types';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export const SalesChart: React.FC<ChartProps> = ({ data, chartType }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);

    // Listen for changes
    const observer = new MutationObserver(() => {
      const dark = document.documentElement.classList.contains('dark');
      setIsDark(dark);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const gridColor = isDark ? '#444' : '#ccc';
  const textColor = isDark ? '#e5e7eb' : '#333';
  const backgroundColor = isDark ? '#1f2937' : '#ffffff';

  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
              <XAxis dataKey="month" stroke={textColor} />
              <YAxis stroke={textColor} />
              <Tooltip 
                formatter={(value) => `$${value?.toLocaleString()}`}
                contentStyle={{
                  backgroundColor: isDark ? '#374151' : '#fff',
                  border: `1px solid ${isDark ? '#555' : '#ccc'}`,
                  color: textColor,
                }}
              />
              <Legend wrapperStyle={{ color: textColor }} />
              <Bar dataKey="sales" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        );

      case 'line':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
              <XAxis dataKey="month" stroke={textColor} />
              <YAxis stroke={textColor} />
              <Tooltip 
                formatter={(value) => `$${value?.toLocaleString()}`}
                contentStyle={{
                  backgroundColor: isDark ? '#374151' : '#fff',
                  border: `1px solid ${isDark ? '#555' : '#ccc'}`,
                  color: textColor,
                }}
              />
              <Legend wrapperStyle={{ color: textColor }} />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        );

      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={data}
                dataKey="sales"
                nameKey="month"
                cx="50%"
                cy="50%"
                outerRadius={150}
                label={{ fill: textColor }}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => `$${value?.toLocaleString()}`}
                contentStyle={{
                  backgroundColor: isDark ? '#374151' : '#fff',
                  border: `1px solid ${isDark ? '#555' : '#ccc'}`,
                  color: textColor,
                }}
              />
              <Legend wrapperStyle={{ color: textColor }} />
            </PieChart>
          </ResponsiveContainer>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Sales Overview</h3>
      {renderChart()}
    </div>
  );
};