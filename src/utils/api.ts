import { SalesData } from '@/types';

// Mock API endpoint (simulating a real API)
export const fetchSalesData = async (year: number): Promise<SalesData[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // We can replace this with a real API endpoint
  // For demonstration, we're using mock data but with random variations
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const baseSales = {
    2022: [42000, 38500, 45000, 47800, 52000, 58900, 61200, 59800, 63400, 67200, 78900, 84500],
    2023: [45600, 48900, 52300, 56700, 61200, 67800, 72300, 75600, 81200, 86700, 92300, 98400],
    2024: [52300, 56700, 61200, 67800, 72300, 78900, 84500, 89200, 93400, 98700, 104500, 112300],
  };

  const sales = baseSales[year as keyof typeof baseSales] || baseSales[2024];
  
  // Add random variation to simulate real API data
  return months.map((month, index) => ({
    month,
    year,
    sales: sales[index] + Math.random() * 5000 - 2500,
  }));
};

