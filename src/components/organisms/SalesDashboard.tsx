'use client';

import React, { useState, useEffect } from 'react';
import { SalesChart } from './SalesChart';
import { FilterBar } from '../molecules/FilterBar';
import { ChartControls } from '../molecules/ChartControls';
import { SalesData } from '@/types';
import { getAllSalesData } from '@/data/mockData';
import { fetchSalesData } from '@/utils/api';

export const SalesDashboard: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [chartType, setChartType] = useState<'bar' | 'line' | 'pie'>('bar');
  const [salesData, setSalesData] = useState<SalesData[]>([]);
  const [filteredData, setFilteredData] = useState<SalesData[]>([]);
  const [threshold, setThreshold] = useState(0);
  const [useApiData, setUseApiData] = useState(false);
  const [loading, setLoading] = useState(false);

  const mockData = getAllSalesData();

  const loadData = async () => {
    setLoading(true);
    try {
      if (useApiData) {
        const apiData = await fetchSalesData(parseInt(selectedYear));
        setSalesData(apiData);
      } else {
        const yearData = mockData[parseInt(selectedYear) as 2022 | 2023 | 2024];
        setSalesData(yearData || []);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [selectedYear, useApiData]);

  useEffect(() => {
    if (threshold > 0) {
      const filtered = salesData.filter(item => item.sales >= threshold);
      setFilteredData(filtered);
    } else {
      setFilteredData(salesData);
    }
  }, [threshold, salesData]);

  const handleApplyFilter = () => {
    // Filter is applied automatically through useEffect
  };

  const handleResetFilter = () => {
    setThreshold(0);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg">Loading sales data...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <ChartControls
        selectedYear={selectedYear}
        onYearChange={setSelectedYear}
        chartType={chartType}
        onChartTypeChange={(type) => setChartType(type as 'bar' | 'line' | 'pie')}
        onToggleApiData={() => setUseApiData(!useApiData)}
        useApiData={useApiData}
      />
      
      <FilterBar
        threshold={threshold}
        onThresholdChange={setThreshold}
        onApplyFilter={handleApplyFilter}
        onResetFilter={handleResetFilter}
      />

      {filteredData.length > 0 ? (
        <SalesChart data={filteredData} chartType={chartType} />
      ) : (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center">
          <p className="text-yellow-800">
            No sales data found above ${threshold.toLocaleString()}
          </p>
        </div>
      )}

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Summary Statistics</h4>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-gray-600">Total Sales</p>
            <p className="text-xl font-bold">
              ${filteredData.reduce((sum, item) => sum + item.sales, 0).toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Average Monthly Sales</p>
            <p className="text-xl font-bold">
              ${(filteredData.reduce((sum, item) => sum + item.sales, 0) / (filteredData.length || 1)).toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Highest Month</p>
            <p className="text-xl font-bold">
              ${Math.max(...filteredData.map(item => item.sales), 0).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};