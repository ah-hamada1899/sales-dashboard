import React from 'react';
import { Button } from '../atoms/Button';
import { Select } from '../atoms/Select';

interface ChartControlsProps {
  selectedYear: string;
  onYearChange: (year: string) => void;
  chartType: string;
  onChartTypeChange: (type: string) => void;
  onToggleApiData: () => void;
  useApiData: boolean;
}

export const ChartControls: React.FC<ChartControlsProps> = ({
  selectedYear,
  onYearChange,
  chartType,
  onChartTypeChange,
  onToggleApiData,
  useApiData,
}) => {
  const yearOptions = [
    { value: '2022', label: '2022' },
    { value: '2023', label: '2023' },
    { value: '2024', label: '2024' },
  ];

  const chartTypeOptions = [
    { value: 'bar', label: 'Bar Chart' },
    { value: 'line', label: 'Line Chart' },
    { value: 'pie', label: 'Pie Chart' },
  ];

  return (
    <div className="flex gap-4 items-end bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
      <Select
        value={selectedYear}
        onChange={onYearChange}
        options={yearOptions}
        label="Select Year"
      />
      <Select
        value={chartType}
        onChange={onChartTypeChange}
        options={chartTypeOptions}
        label="Chart Type"
      />
      <Button onClick={onToggleApiData} variant={useApiData ? 'secondary' : 'primary'}>
        {useApiData ? 'Using API Data' : 'Using Mock Data'}
      </Button>
    </div>
  );
};