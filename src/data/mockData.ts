import { SalesData } from '@/types';

// Mock data based on typical sales patterns
export const salesData2022: SalesData[] = [
  { month: 'Jan', year: 2022, sales: 42000 },
  { month: 'Feb', year: 2022, sales: 38500 },
  { month: 'Mar', year: 2022, sales: 45000 },
  { month: 'Apr', year: 2022, sales: 47800 },
  { month: 'May', year: 2022, sales: 52000 },
  { month: 'Jun', year: 2022, sales: 58900 },
  { month: 'Jul', year: 2022, sales: 61200 },
  { month: 'Aug', year: 2022, sales: 59800 },
  { month: 'Sep', year: 2022, sales: 63400 },
  { month: 'Oct', year: 2022, sales: 67200 },
  { month: 'Nov', year: 2022, sales: 78900 },
  { month: 'Dec', year: 2022, sales: 84500 },
];

export const salesData2023: SalesData[] = [
  { month: 'Jan', year: 2023, sales: 45600 },
  { month: 'Feb', year: 2023, sales: 48900 },
  { month: 'Mar', year: 2023, sales: 52300 },
  { month: 'Apr', year: 2023, sales: 56700 },
  { month: 'May', year: 2023, sales: 61200 },
  { month: 'Jun', year: 2023, sales: 67800 },
  { month: 'Jul', year: 2023, sales: 72300 },
  { month: 'Aug', year: 2023, sales: 75600 },
  { month: 'Sep', year: 2023, sales: 81200 },
  { month: 'Oct', year: 2023, sales: 86700 },
  { month: 'Nov', year: 2023, sales: 92300 },
  { month: 'Dec', year: 2023, sales: 98400 },
];

export const salesData2024: SalesData[] = [
  { month: 'Jan', year: 2024, sales: 52300 },
  { month: 'Feb', year: 2024, sales: 56700 },
  { month: 'Mar', year: 2024, sales: 61200 },
  { month: 'Apr', year: 2024, sales: 67800 },
  { month: 'May', year: 2024, sales: 72300 },
  { month: 'Jun', year: 2024, sales: 78900 },
  { month: 'Jul', year: 2024, sales: 84500 },
  { month: 'Aug', year: 2024, sales: 89200 },
  { month: 'Sep', year: 2024, sales: 93400 },
  { month: 'Oct', year: 2024, sales: 98700 },
  { month: 'Nov', year: 2024, sales: 104500 },
  { month: 'Dec', year: 2024, sales: 112300 },
];

export const getAllSalesData = () => ({
  2022: salesData2022,
  2023: salesData2023,
  2024: salesData2024,
});