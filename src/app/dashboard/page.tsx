import { DashboardTemplate } from '@/components/templates/DashboardTemplate';
import { SalesDashboard } from '@/components/organisms/SalesDashboard';

export default function DashboardPage() {
  return (
    <DashboardTemplate title="Sales Analytics Dashboard">
      <SalesDashboard />
    </DashboardTemplate>
  );
}