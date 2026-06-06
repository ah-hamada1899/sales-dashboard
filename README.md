# Sales Analytics Dashboard

An interactive sales dashboard built with Next.js 15, TypeScript, Tailwind CSS, and Recharts, following atomic design principles.

## Features

- **Atomic Design Architecture**: Components organized into atoms, molecules, organisms, and templates
- **Multiple Chart Types**: Switch between bar, line, and pie charts using Recharts
- **Year Selection**: View sales data for 2022, 2023, and 2024
- **Custom Filtering**: Set sales thresholds to filter data dynamically
- **API Integration**: Toggle between mock data and simulated API data
- **Responsive Design**: Fully responsive layout using Tailwind CSS
- **Type Safety**: Full TypeScript support

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Recharts (Charting Library)
- Axios (API calls)

## Project Structure

src/
 components/
     atoms/ # Basic UI components (Button, Input, Select)
     molecules/ # Combined components (FilterBar, ChartControls)
     organisms/ # Complex components (SalesChart, SalesDashboard)
     templates/ # Page templates (DashboardTemplate)
 app/ # Next.js app router pages
 types/ # TypeScript type definitions
 utils/ # Utility functions and API calls
 data/ # Mock data

## Setup Instructions



### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/sales-dashboard.git
cd sales-dashboard

npm install # or 
yarn install

## run

npm run dev
# or
yarn dev

Then Open http://localhost:3000 in your browser


## Build for Production

npm run build
npm start