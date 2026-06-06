export interface SalesData {
  month: string;
  year: number;
  sales: number;
}

export interface YearlySales {
  year: number;
  data: SalesData[];
}

export interface ChartProps {
  data: SalesData[];
  chartType: 'bar' | 'line' | 'pie';
}